import { factory, SyntaxKind } from "typescript";

const createParameters = (typeName: string) => [
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
    factory.createObjectBindingPattern([
      factory.createBindingElement(undefined, undefined, factory.createIdentifier("manifest")),
      factory.createBindingElement(
        factory.createToken(SyntaxKind.DotDotDotToken),
        undefined,
        factory.createIdentifier("config"),
      ),
    ]),
    undefined,
    factory.createTypeReferenceNode(typeName),
  ),
];

const createBody = (apiVersion: string, kind: string) =>
  factory.createBlock([
    factory.createExpressionStatement(
      factory.createCallExpression(factory.createSuper(), undefined, [
        factory.createIdentifier("scope"),
        factory.createIdentifier("id"),
        factory.createObjectLiteralExpression([
          factory.createPropertyAssignment(
            "manifest",
            factory.createObjectLiteralExpression([
              factory.createPropertyAssignment("apiVersion", factory.createStringLiteral(apiVersion)),
              factory.createPropertyAssignment("kind", factory.createStringLiteral(kind)),
              factory.createSpreadAssignment(factory.createIdentifier("manifest")),
            ]),
          ),
          factory.createSpreadAssignment(factory.createIdentifier("config")),
        ]),
      ]),
    ),
  ]);

export default (apiVersion: string, kind: string, typeName: string) =>
  factory.createConstructorDeclaration(undefined, createParameters(typeName), createBody(apiVersion, kind));
