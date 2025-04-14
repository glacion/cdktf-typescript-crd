import { V1CustomResourceDefinition } from "@kubernetes/client-node";

const getCreationTimestamp = (val: V1CustomResourceDefinition) => val.metadata?.creationTimestamp?.getTime() as number;

const mergeVersions = (
  [head, ...tail]: V1CustomResourceDefinition[],
  definition = head as V1CustomResourceDefinition,
): V1CustomResourceDefinition => ({
  ...definition,
  spec: {
    ...definition.spec,
    versions: [
      ...definition.spec.versions,
      ...tail
        .flatMap((val) => val.spec.versions)
        .filter((val) => !definition.spec.versions.map((ver) => ver.name).includes(val.name)),
    ],
  },
});

const mergeDefinition = (name: string, definitions: V1CustomResourceDefinition[]) =>
  definitions
    .filter((val) => val.metadata?.name == name)
    .sort((a, b) => getCreationTimestamp(b) - getCreationTimestamp(a))
    .find((_val, _index, obj) => mergeVersions(obj));

export const mergeDefinitions = (
  definitions: V1CustomResourceDefinition[],
  names = [...new Set(definitions.map((val) => val.metadata?.name as string))],
) => names.map((val) => mergeDefinition(val, definitions) as V1CustomResourceDefinition);
