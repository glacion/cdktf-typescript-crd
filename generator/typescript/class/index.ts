import { factory, ModifierFlags, SyntaxKind } from "typescript";
import createConstructor from "./constructor";

const createHeritageClauses = () => [
  factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
    factory.createExpressionWithTypeArguments(factory.createIdentifier("Manifest"), undefined),
  ]),
];

export default (apiVersion: string, kind: string, name: string, typeName: string) =>
  factory.createClassDeclaration(
    factory.createModifiersFromModifierFlags(ModifierFlags.Export),
    name,
    undefined,
    createHeritageClauses(),
    [createConstructor(apiVersion, kind, typeName)],
  );
