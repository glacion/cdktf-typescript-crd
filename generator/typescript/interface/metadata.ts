import { factory, SyntaxKind } from "typescript";

const createStringIndexPropertySignature = (name: string) =>
  factory.createPropertySignature(
    undefined,
    name,
    factory.createToken(SyntaxKind.QuestionToken),
    factory.createTypeLiteralNode([
      factory.createIndexSignature(
        undefined,
        [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            "key",
            undefined,
            factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
          ),
        ],
        factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      ),
    ]),
  );

const createMetadataMembers = () => [
  createStringIndexPropertySignature("annotations"),
  createStringIndexPropertySignature("labels"),
  factory.createPropertySignature(
    undefined,
    "name",
    undefined,
    factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
  ),
  factory.createPropertySignature(
    undefined,
    "namespace",
    factory.createToken(SyntaxKind.QuestionToken),
    factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
  ),
];

export const createMetadataPropertySignature = () =>
  factory.createPropertySignature(
    undefined,
    "metadata",
    undefined,
    factory.createTypeLiteralNode(createMetadataMembers()),
  );
