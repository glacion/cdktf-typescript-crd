import { factory, SyntaxKind } from "typescript";

const createParameterDeclarations = (configTypeName: string) => [
  factory.createParameterDeclaration(
    undefined,
    undefined,
    factory.createIdentifier("scope"),
    undefined,
    factory.createTypeReferenceNode("Construct"),
  ),
  factory.createParameterDeclaration(
    undefined,
    undefined,
    factory.createIdentifier("id"),
    undefined,
    factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
  ),
  factory.createParameterDeclaration(
    undefined,
    undefined,
    factory.createIdentifier("config"),
    undefined,
    factory.createTypeReferenceNode(configTypeName),
  ),
];

const createBodyBlock = () =>
  factory.createBlock([
    factory.createExpressionStatement(
      factory.createCallExpression(factory.createSuper(), undefined, [
        factory.createIdentifier("scope"),
        factory.createIdentifier("id"),
        factory.createIdentifier("config"),
      ]),
    ),
  ]);

export const createConstructorDeclaration = (configTypeName: string) =>
  factory.createConstructorDeclaration(undefined, createParameterDeclarations(configTypeName), createBodyBlock());
