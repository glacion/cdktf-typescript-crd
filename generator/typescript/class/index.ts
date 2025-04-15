import { factory, ModifierFlags, SyntaxKind } from "typescript";
import { createConstructorDeclaration } from "./constructor";

const createManifestHeritageClause = () => [
  factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
    factory.createExpressionWithTypeArguments(factory.createIdentifier("Manifest"), undefined),
  ]),
];

export const createManifestClassDeclaration = (typeName: string, configTypeName: string) =>
  factory.createClassDeclaration(
    factory.createModifiersFromModifierFlags(ModifierFlags.Export),
    typeName,
    undefined,
    createManifestHeritageClause(),
    [createConstructorDeclaration(configTypeName)],
  );
