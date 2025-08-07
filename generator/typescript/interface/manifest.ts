import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import openapiTS, { type SchemaObject } from "openapi-typescript";
import {
  factory,
  isIdentifier,
  isInterfaceDeclaration,
  isPropertySignature,
  isTypeLiteralNode,
  isTypeNode,
  type Identifier,
  type Node,
  type PropertySignature,
  type TypeElement,
  type TypeLiteralNode,
  type TypeNode,
} from "typescript";

import { logger } from "../../logger";
import { createMetadataPropertySignature } from "./metadata";

const ignoreList = ["apiVersion", "kind", "metadata"];

const isPropertySignatureWithIdentifier = (node: TypeElement): node is PropertySignature & { name: Identifier } =>
  isPropertySignature(node) && isIdentifier(node.name);

const isPropertySignatureWithIdentifierAndTypeLiteralNode = (
  node: TypeElement,
): node is PropertySignature & { name: Identifier; type: TypeLiteralNode } =>
  isPropertySignatureWithIdentifier(node) && node.type !== undefined && isTypeLiteralNode(node.type);

const findPropertySignatures = (name: string, kind: string, nodes: Node[]) =>
  nodes
    .filter(isInterfaceDeclaration)
    .find((node) => node.name.text === "components")
    ?.members.find(
      (node): node is PropertySignature & { name: Identifier; type: TypeLiteralNode } =>
        isPropertySignatureWithIdentifierAndTypeLiteralNode(node) && node.name.text === "schemas",
    )
    ?.type.members.find(
      (node): node is PropertySignature & { name: Identifier; type: TypeLiteralNode } =>
        isPropertySignatureWithIdentifierAndTypeLiteralNode(node) && node.name.text === "spec",
    )
    ?.type.members.filter(
      (node): node is PropertySignature & { name: Identifier; type: TypeNode } =>
        isPropertySignatureWithIdentifier(node) && node.type !== undefined && isTypeNode(node.type),
    )
    .filter((node) => !ignoreList.includes(node.name.text)) ??
  (logger.warn({ name, kind }, "no type member found"), []);

const createStringLiteralPropertySignature = (name: string, value: string) =>
  factory.createPropertySignature(
    undefined,
    name,
    undefined,
    factory.createLiteralTypeNode(factory.createStringLiteral(value)),
  );

export const createManifestPropertySignature = async (
  apiVersion: string,
  kind: string,
  version: V1CustomResourceDefinitionVersion,
) =>
  factory.createPropertySignature(
    undefined,
    "manifest",
    undefined,
    factory.createTypeLiteralNode([
      createStringLiteralPropertySignature("apiVersion", apiVersion),
      createStringLiteralPropertySignature("kind", kind),
      createMetadataPropertySignature(),
      ...findPropertySignatures(
        apiVersion,
        kind,
        await openapiTS({
          openapi: "3.0.0",
          info: { title: kind, version: apiVersion },
          components: { schemas: { spec: version.schema?.openAPIV3Schema as SchemaObject } },
        }),
      ),
    ]),
  );
