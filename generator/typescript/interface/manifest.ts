import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import openapiTS, { type SchemaObject } from "openapi-typescript";
import { factory, isIdentifier, isInterfaceDeclaration, isPropertySignature, type TypeLiteralNode } from "typescript";

const createManifestMembers = async (version: V1CustomResourceDefinitionVersion) =>
  (
    await openapiTS({
      openapi: "3.0.0",
      info: { title: version.name, version: version.name },
      components: { schemas: { spec: version.schema?.openAPIV3Schema as SchemaObject } },
    })
  )
    .filter(isInterfaceDeclaration)
    .find((node) => node.name.text === "components")
    ?.members.filter(isPropertySignature)
    .find((node) => isIdentifier(node.name) && node.name.text === "schemas")?.type as TypeLiteralNode;

export default async (version: V1CustomResourceDefinitionVersion) =>
  factory.createPropertySignature(
    undefined,
    "manifest",
    undefined,
    factory.createTypeLiteralNode((await createManifestMembers(version)).members),
  );
