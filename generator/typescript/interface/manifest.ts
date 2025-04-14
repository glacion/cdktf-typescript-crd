import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import openapiTS, { type SchemaObject } from "openapi-typescript";
import {
  factory,
  isIdentifier,
  isInterfaceDeclaration,
  isPropertySignature,
  isTypeLiteralNode,
  type Identifier,
  type Node,
  type PropertySignature,
  type TypeLiteralNode,
} from "typescript";

import createMetadataSignature from "./metadata";

const isTypeIdentifier = (node: Node): node is PropertySignature & { type: TypeLiteralNode; name: Identifier } =>
  isPropertySignature(node) && node.type !== undefined && isTypeLiteralNode(node.type) && isIdentifier(node.name);

const findMembers = (nodes: Node[]) =>
  nodes
    .filter(isInterfaceDeclaration)
    .find((node) => node.name.text === "components")
    ?.members.find(
      (node): node is PropertySignature & { type: TypeLiteralNode } =>
        isTypeIdentifier(node) && node.name.text === "schemas",
    )
    ?.type.members.find(
      (node): node is PropertySignature & { type: TypeLiteralNode } =>
        isTypeIdentifier(node) && node.name.text === "spec",
    )
    ?.type.members.find(
      (node): node is PropertySignature & { type: TypeLiteralNode } =>
        isTypeIdentifier(node) && node.name.text === "spec",
    )?.type.members ?? [];

const createSpecSignature = async (version: V1CustomResourceDefinitionVersion) =>
  factory.createPropertySignature(
    undefined,
    "spec",
    undefined,
    factory.createTypeLiteralNode(
      findMembers(
        await openapiTS({
          openapi: "3.0.0",
          info: { title: version.name, version: version.name },
          components: { schemas: { spec: version.schema?.openAPIV3Schema as SchemaObject } },
        }),
      ),
    ),
  );

export default async (version: V1CustomResourceDefinitionVersion) =>
  factory.createPropertySignature(
    undefined,
    "manifest",
    undefined,
    factory.createTypeLiteralNode([createMetadataSignature(), await createSpecSignature(version)]),
  );
