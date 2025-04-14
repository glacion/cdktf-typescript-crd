import type { V1CustomResourceDefinition, V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { pascalCase } from "change-case";
import classClause from "./class";
import importClause from "./import";
import interfaceClause from "./interface";

export default async (
  definition: V1CustomResourceDefinition,
  version: V1CustomResourceDefinitionVersion,
  apiVersion = `${definition.spec.group}/${version.name}`,
  kind = definition.spec.names.kind,
  name = `Kubernetes${kind}${pascalCase(version.name)}`,
  typeName = `${name}Config`,
) => [...importClause(), classClause(apiVersion, kind, name, typeName), await interfaceClause(typeName, version)];
