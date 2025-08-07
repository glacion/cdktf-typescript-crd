import type { V1CustomResourceDefinition, V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { pascalCase } from "change-case";
import path from "node:path";
import { astToString } from "openapi-typescript";
import type { Logger } from "pino";
import { format, resolveConfig } from "prettier";
import { factory } from "typescript";
import { createManifestClassDeclaration } from "./class";
import { createManifestConfigInterfaceDeclaration } from "./interface";

const createNamedImportDeclaration = (imports: { isTypeOnly: boolean; identifier: string }[], specifier: string) =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        imports.map(({ isTypeOnly, identifier }) =>
          factory.createImportSpecifier(isTypeOnly, undefined, factory.createIdentifier(identifier)),
        ),
      ),
    ),
    factory.createStringLiteral(specifier),
  );

const formatSource = async (
  source: string,
  config = resolveConfig(path.join(path.dirname(__dirname), "prettier.config.mjs")),
) => await format(source, { ...(await config), parser: "typescript" });

export const createTypescriptSource = async (
  log: Logger,
  definition: V1CustomResourceDefinition,
  version: V1CustomResourceDefinitionVersion,
  apiVersion = `${definition.spec.group}/${version.name}`,
  kind = definition.spec.names.kind,
  typeName = `${pascalCase(definition.spec.group)}${kind}${pascalCase(version.name)}`,
  configTypeName = `${typeName}Config`,
) => (
  log.info({ class: typeName }, "generating typescript file"),
  formatSource(
    astToString([
      createNamedImportDeclaration([{ isTypeOnly: false, identifier: "Construct" }], "constructs"),
      createNamedImportDeclaration(
        [
          { isTypeOnly: false, identifier: "Manifest" },
          { isTypeOnly: true, identifier: "ManifestConfig" },
        ],
        "@cdktf/provider-kubernetes/lib/manifest",
      ),
      createManifestClassDeclaration(typeName, configTypeName),
      await createManifestConfigInterfaceDeclaration(apiVersion, kind, configTypeName, version),
    ]),
  )
);
