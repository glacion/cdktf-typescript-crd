import { V1CustomResourceDefinition, V1CustomResourceDefinitionVersion } from "@kubernetes/client-node";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { astToString } from "openapi-typescript";
import prettier from "prettier";
import { listCustomResourceDefinitions } from "./client";
import { mergeDefinitions } from "./collector";
import { log } from "./logger";
import convert from "./typescript";

const getPath = (definition: V1CustomResourceDefinition, version: V1CustomResourceDefinitionVersion): string =>
  path.join(
    path.dirname(__dirname),
    "crd",
    ...(definition.metadata?.name?.split(".").reverse() as string[]),
    `${version.name}.ts`,
  );

const write = async (
  filePath: string,
  content: string,
  config = prettier.resolveConfig(path.join(path.dirname(__dirname), "prettier.config.mjs")),
) => {
  await mkdir(path.dirname(filePath), { recursive: true });
  content = await prettier.format(content, { ...(await config), parser: "typescript" });
  await writeFile(filePath, content);
};

const toString = async (definition: V1CustomResourceDefinition, version: V1CustomResourceDefinitionVersion) =>
  astToString(await convert(definition, version));

export const main = async () =>
  Promise.all(
    mergeDefinitions(await listCustomResourceDefinitions()).map(async (val) =>
      val.spec.versions
        .map((ver) => (log.info({ name: val.metadata?.name, version: ver.name }, "found version"), ver))
        .map(async (ver) => (write(getPath(val, ver), await toString(val, ver)), [ver, getPath(val, ver)])),
    ),
  );

main().catch(console.error);
