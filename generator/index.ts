import type { V1CustomResourceDefinition, V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { kebabCase } from "change-case";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { listCustomResourceDefinitions } from "./client";
import { mergeDefinitions } from "./collector";
import { logger } from "./logger";
import { createTypescriptSource } from "./typescript";

const getFilePath = (definition: V1CustomResourceDefinition, version: V1CustomResourceDefinitionVersion): string =>
  path.join(
    path.dirname(__dirname),
    "crd",
    ...definition.spec.group.split(".").reverse(),
    kebabCase(definition.spec.names.kind),
    `${kebabCase(version.name)}.ts`,
  );

export const main = async () =>
  Promise.all(
    mergeDefinitions(await listCustomResourceDefinitions(logger)).map(async (definition) =>
      definition.spec.versions.forEach(async (version) => {
        const log = logger.child({
          group: definition.spec.group,
          kind: definition.spec.names.kind,
          version: version.name,
        });
        const filePath = getFilePath(definition, version);
        const source = await createTypescriptSource(log, definition, version);
        const dirName = path.dirname(filePath);
        await mkdir(dirName, { recursive: true });
        log.info({ path: dirName }, "created directory");
        await writeFile(filePath, source);
        log.info({ path: filePath }, "wrote file");
      }),
    ),
  );

main().catch(console.error);
