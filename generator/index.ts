import {
  KubeConfig,
  KubernetesObjectApi,
  V1CustomResourceDefinition,
  V1CustomResourceDefinitionVersion,
} from "@kubernetes/client-node";
import { kebabCase, pascalCase } from "change-case";
import { mkdir, open, writeFile } from "node:fs/promises";
import path from "node:path";
import openapiTS, { type SchemaObject, astToString } from "openapi-typescript";
import prettier from "prettier";
import ts from "typescript";

async function getCustomResourceDefinitions() {
  const config = new KubeConfig();
  config.loadFromDefault();
  const client = KubernetesObjectApi.makeApiClient(config);
  const definitions = await client.list<V1CustomResourceDefinition>(
    "apiextensions.k8s.io/v1",
    "CustomResourceDefinition",
  );
  return definitions.items;
}

function getFilePath(definition: V1CustomResourceDefinition): string {
  const components = definition.metadata?.name?.split(".").reverse();
  if (!components) throw Error("found a crd without a name");
  return path.join(__dirname, ...components);
}

function createCommonPropertySignature(name: string) {
  return ts.factory.createPropertySignature(
    undefined,
    name,
    ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    ts.factory.createTypeLiteralNode([
      ts.factory.createIndexSignature(
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            "key",
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
        ],
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      ),
    ]),
  );
}

function createMetadataPropertySignatures() {
  const annotations = createCommonPropertySignature("annotations");
  const labels = createCommonPropertySignature("labels");
  const name = ts.factory.createPropertySignature(
    undefined,
    "name",
    undefined,
    ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  );
  const namespace = ts.factory.createPropertySignature(
    undefined,
    "namespace",
    ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  );
  return [annotations, labels, name, namespace];
}

export function createImport(specifiers: { identifier: string; isTypeOnly: boolean }[], from: string) {
  return ts.factory.createImportDeclaration(
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamedImports(
        specifiers.map(({ identifier, isTypeOnly }) => {
          return ts.factory.createImportSpecifier(isTypeOnly, undefined, ts.factory.createIdentifier(identifier));
        }),
      ),
    ),
    ts.factory.createStringLiteral(from),
  );
}

function createInterface(ast: ts.Node[], name: string) {
  const interfaces = ast.filter(ts.isInterfaceDeclaration);
  const components = interfaces.find((node) => node.name.text === "components");
  const properties = components?.members.filter(ts.isPropertySignature);
  const schemas = properties?.find((node) => ts.isIdentifier(node.name) && node.name.text === "schemas");
  if (!schemas?.type || !ts.isTypeLiteralNode(schemas.type)) throw Error("no schema type found");
  return ts.factory.createInterfaceDeclaration(
    ts.factory.createModifiersFromModifierFlags(ts.ModifierFlags.Export),
    `${name}Config`,
    undefined,
    [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("ManifestConfig"), undefined),
      ]),
    ],
    [
      ts.factory.createPropertySignature(
        undefined,
        "metadata",
        undefined,
        ts.factory.createTypeLiteralNode(createMetadataPropertySignatures()),
      ),
      ts.factory.createPropertySignature(
        undefined,
        "manifest",
        undefined,
        ts.factory.createTypeLiteralNode(schemas.type.members),
      ),
    ],
  );
}

export function createClass(apiVersion: string, group: string, kind: string, name: string) {
  return ts.factory.createClassDeclaration(
    ts.factory.createModifiersFromModifierFlags(ts.ModifierFlags.Export),
    name,
    undefined,
    [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Manifest"), undefined),
      ]),
    ],
    [
      ts.factory.createConstructorDeclaration(
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("scope"),
            undefined,
            ts.factory.createTypeReferenceNode("Construct"),
          ),
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("id"),
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ),
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("{ manifest, ...config }"),
            undefined,
            ts.factory.createTypeReferenceNode(`${name}Config`),
            undefined,
          ),
        ],
        ts.factory.createBlock([
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(ts.factory.createSuper(), undefined, [
              ts.factory.createIdentifier("scope"),
              ts.factory.createIdentifier("id"),
              ts.factory.createObjectLiteralExpression([
                ts.factory.createPropertyAssignment(
                  "manifest",
                  ts.factory.createObjectLiteralExpression([
                    ts.factory.createPropertyAssignment(
                      "apiVersion",
                      ts.factory.createStringLiteral(`${group}/${apiVersion}`),
                    ),
                    ts.factory.createPropertyAssignment("kind", ts.factory.createStringLiteral(kind)),
                    ts.factory.createSpreadAssignment(ts.factory.createIdentifier("manifest")),
                  ]),
                ),
                ts.factory.createSpreadAssignment(ts.factory.createIdentifier("config")),
              ]),
            ]),
          ),
        ]),
      ),
    ],
  );
}

async function createVersion(
  definition: V1CustomResourceDefinition,
  version: V1CustomResourceDefinitionVersion,
): Promise<ts.Node[]> {
  const apiVersion = version.name;
  const group = definition.spec.group;
  const kind = definition.spec.names.kind;
  const name = `Kubernetes${kind}${pascalCase(apiVersion)}`;

  const spec = version.schema?.openAPIV3Schema;
  const title = definition.spec.group;
  if (!spec) throw Error("no spec found for version schema");
  const openapi = await openapiTS({
    openapi: "3.0.0",
    info: { title, version: version.name },
    components: { schemas: { spec: spec as SchemaObject } },
  });
  return [
    createImport(
      [
        { identifier: "Manifest", isTypeOnly: false },
        { identifier: "ManifestConfig", isTypeOnly: true },
      ],
      "@cdktf/provider-kubernetes/lib/manifest",
    ),
    createImport([{ identifier: "Construct", isTypeOnly: false }], "constructs"),
    createInterface(openapi, name),
    createClass(apiVersion, group, kind, name),
  ];
}

async function main() {
  // const printer = ts.createPrinter({ removeComments: false });
  const definitions = await getCustomResourceDefinitions();
  const paths = new Map(definitions.map((val) => [getFilePath(val), val]));
  await Promise.all([...paths.keys()].map((val) => mkdir(path.dirname(val), { recursive: true })));
  const definition = definitions[0];
  const version = definition?.spec?.versions[0];
  if (!version) throw Error("no version found");
  const text = await prettier.format(astToString(await createVersion(definition, version)), { parser: "typescript" });
  const filePath = getFilePath(definition);
  await writeFile(path.join(filePath, `${version.name}.ts`), text, {});

  // const resultFile = ts.createSourceFile("someFileName.ts", "", ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);
  // const openapi = await openapiTS({
  //   openapi: "3.0.0",
  //   info: { title: definition?.spec?.group, version: version?.name },
  //   components: { schemas: { spec } },
  // });
  // const interfaces = openapi.filter(ts.isInterfaceDeclaration);
  // const components = interfaces.find((node) => node.name.text === "components");
  // const properties = components?.members.filter(ts.isPropertySignature);
  // const schemas = properties?.find((node) => ts.isIdentifier(node.name) && node.name.text === "schemas");
  // if (!schemas?.type || !ts.isTypeLiteralNode(schemas.type)) throw Error("no schema type found");
  // const interfaceAst = ts.factory.createInterfaceDeclaration(
  //   ts.factory.createModifiersFromModifierFlags(ts.ModifierFlags.Export),
  //   "test",
  //   undefined,
  //   undefined,
  //   schemas.type.members,
  // );
  // console.info(astToString(interfaceAst));
}

main().catch(console.error);
