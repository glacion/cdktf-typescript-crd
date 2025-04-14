import type { V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { factory, ModifierFlags, SyntaxKind } from "typescript";
import createManifestMembers from "./manifest";

const createHeritageClauses = () => [
  factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
    factory.createExpressionWithTypeArguments(factory.createIdentifier("ManifestConfig"), undefined),
  ]),
];

export default async (name: string, version: V1CustomResourceDefinitionVersion) => {
  return factory.createInterfaceDeclaration(
    factory.createModifiersFromModifierFlags(ModifierFlags.Export),
    name,
    undefined,
    createHeritageClauses(),
    [await createManifestMembers(version)],
  );
};
