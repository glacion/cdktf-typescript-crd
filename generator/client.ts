import { KubeConfig, KubernetesObjectApi, V1CustomResourceDefinition } from "@kubernetes/client-node";
import { log } from "./logger";

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

export const listCustomResourceDefinitions = async (clients = getClusterClients()) =>
  (
    await Promise.all(
      clients
        .map((val) => (log.info({ name: val.name }, "using context"), val))
        .map(({ client }) => makeRequest(client)),
    )
  ).flatMap((val) => val.items);
