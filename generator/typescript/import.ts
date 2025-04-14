import { factory } from "typescript";

const construct = () =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(false, undefined, factory.createIdentifier("Construct")),
      ]),
    ),
    factory.createStringLiteral("constructs"),
  );

const manifest = () =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(false, undefined, factory.createIdentifier("Manifest")),
        factory.createImportSpecifier(true, undefined, factory.createIdentifier("ManifestConfig")),
      ]),
    ),
    factory.createStringLiteral("@cdktf/provider-kubernetes/lib/manifest"),
  );

export default () => [manifest(), construct()];
