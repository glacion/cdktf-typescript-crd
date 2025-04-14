import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import openapiTS, { type SchemaObject } from "openapi-typescript";
import {
  factory,
  isInterfaceDeclaration,
  isPropertySignature,
  isTypeLiteralNode,
  SyntaxKind,
  type Identifier,
  type Node,
  type PropertySignature,
  type TypeLiteralNode,
} from "typescript";

import createMetadataSignature from "./metadata";

const isTypeIdentifier = (node: Node): node is PropertySignature & { type: TypeLiteralNode; name: Identifier } =>
  isPropertySignature(node) && node.type !== undefined && isTypeLiteralNode(node.type);

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

const createSpecSignature = async (version: V1CustomResourceDefinitionVersion) => {
  const openapi = await openapiTS({
    openapi: "3.0.0",
    info: { title: version.name, version: version.name },
    components: { schemas: { spec: version.schema?.openAPIV3Schema as SchemaObject } },
  });
  const members = findMembers(openapi);
  return factory.createPropertySignature(
    undefined,
    "spec",
    undefined,
    members.length !== 0
      ? factory.createTypeLiteralNode(members)
      : factory.createKeywordTypeNode(SyntaxKind.ObjectKeyword),
  );
};

export default async (version: V1CustomResourceDefinitionVersion) =>
  factory.createPropertySignature(
    undefined,
    "manifest",
    undefined,
    factory.createTypeLiteralNode([createMetadataSignature(), await createSpecSignature(version)]),
  );
