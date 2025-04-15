import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { factory, ModifierFlags, SyntaxKind } from "typescript";
import { createManifestPropertySignature } from "./manifest";

const createHeritageClauses = () => [
  factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
    factory.createExpressionWithTypeArguments(factory.createIdentifier("ManifestConfig"), undefined),
  ]),
];

export const createManifestConfigInterfaceDeclaration = async (
  apiVersion: string,
  kind: string,
  typeName: string,
  version: V1CustomResourceDefinitionVersion,
) => {
  return factory.createInterfaceDeclaration(
    factory.createModifiersFromModifierFlags(ModifierFlags.Export),
    typeName,
    undefined,
    createHeritageClauses(),
    [await createManifestPropertySignature(apiVersion, kind, version)],
  );
};
