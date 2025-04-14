import { factory, SyntaxKind } from "typescript";

const createStringKeyValuePropertySignature = (name: string) =>
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

const createStringPropertySignature = (name: string) =>
  factory.createPropertySignature(undefined, name, undefined, factory.createKeywordTypeNode(SyntaxKind.StringKeyword));

const createMetadataMembers = () => [
  createStringKeyValuePropertySignature("annotations"),
  createStringKeyValuePropertySignature("labels"),
  createStringPropertySignature("name"),
  createStringPropertySignature("namespace"),
];

export default () =>
  factory.createPropertySignature(
    undefined,
    "metadata",
    undefined,
    factory.createTypeLiteralNode(createMetadataMembers()),
  );
