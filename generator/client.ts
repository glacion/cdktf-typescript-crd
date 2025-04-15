import { KubeConfig, KubernetesObjectApi, V1CustomResourceDefinition } from "@kubernetes/client-node";
import type { Logger } from "pino";

const makeApiClient = (config: KubeConfig, context: string): KubernetesObjectApi => {
  config.setCurrentContext(context);
  return KubernetesObjectApi.makeApiClient(config);
};

const getClusterClients = () => {
  const config = new KubeConfig();
  config.loadFromDefault();
  const currentContext = config.getCurrentContext(); // Save current context
  const contexts = config.getContexts();
  const clients = contexts.map((val) => ({ name: val.name, client: makeApiClient(config, val.name) }));
  config.setCurrentContext(currentContext); // Restore original context
  return clients;
};

const makeRequest = async (
  client: KubernetesObjectApi,
  apiVersion = "apiextensions.k8s.io/v1",
  kind = "CustomResourceDefinition",
) => client.list<V1CustomResourceDefinition>(apiVersion, kind);

export const listCustomResourceDefinitions = async (log: Logger, clients = getClusterClients()) =>
  (
    await Promise.all(
      clients
        .map((val) => (log.info({ context: val.name }, "using context"), val))
        .map(async ({ client, name }) => ({ context: name, result: await makeRequest(client) })),
    )
  ).flatMap(
    ({ context, result }) => (
      result.items.forEach((resource) =>
        resource.spec.versions.forEach((version) =>
          log.info(
            { context, group: resource.spec.group, kind: resource.spec.names.kind, version: version.name },
            "found version",
          ),
        ),
      ),
      result.items
    ),
  );
