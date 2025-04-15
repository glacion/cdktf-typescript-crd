import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGlobalContextEntryV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGlobalContextEntryV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kyverno.io/v2alpha1", kind: "GlobalContextEntry", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGlobalContextEntryV2alpha1Config extends ManifestConfig {
  manifest: {
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace: string;
    };
    spec: {
      /** @description Stores results from an API call which will be cached.
       *     Mutually exclusive with KubernetesResource.
       *     This can be used to make calls to external (non-Kubernetes API server) services.
       *     It can also be used to make calls to the Kubernetes API server in such cases:
       *     1. A POST is needed to create a resource.
       *     2. Finer-grained control is needed. Example: To restrict the number of resources cached. */
      apiCall?: {
        /** @description The data object specifies the POST data sent to the server.
         *     Only applicable when the method field is set to POST. */
        data?: {
          /** @description Key is a unique identifier for the data value */
          key: string;
          /** @description Value is the data value */
          value: unknown;
        }[];
        /** @description Method is the HTTP request type (GET or POST). Defaults to GET. */
        method?: string;
        /**
         * Format: duration
         * @description RefreshInterval defines the interval in duration at which to poll the APICall.
         *     The duration is a sequence of decimal numbers, each with optional fraction and a unit suffix,
         *     such as "300ms", "1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
         */
        refreshInterval?: string;
        /** @description RetryLimit defines the number of times the APICall should be retried in case of failure. */
        retryLimit?: number;
        /** @description Service is an API call to a JSON web service.
         *     This is used for non-Kubernetes API server calls.
         *     It's mutually exclusive with the URLPath field. */
        service?: {
          /** @description CABundle is a PEM encoded CA bundle which will be used to validate
           *     the server certificate. */
          caBundle?: string;
          /** @description Headers is a list of optional HTTP headers to be included in the request. */
          headers?: {
            /** @description Key is the header key */
            key: string;
            /** @description Value is the header value */
            value: string;
          }[];
          /** @description URL is the JSON web service URL. A typical form is
           *     `https://{service}.{namespace}:{port}/{path}`. */
          url: string;
        };
        /** @description URLPath is the URL path to be used in the HTTP GET or POST request to the
         *     Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments").
         *     The format required is the same format used by the `kubectl get --raw` command.
         *     See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls
         *     for details.
         *     It's mutually exclusive with the Service field. */
        urlPath?: string;
      };
      /** @description Stores a list of Kubernetes resources which will be cached.
       *     Mutually exclusive with APICall. */
      kubernetesResource?: {
        /** @description Group defines the group of the resource. */
        group?: string;
        /** @description Namespace defines the namespace of the resource. Leave empty for cluster scoped resources.
         *     If left empty for namespaced resources, all resources from all namespaces will be cached. */
        namespace?: string;
        /** @description Resource defines the type of the resource.
         *     Requires the pluralized form of the resource kind in lowercase. (Ex., "deployments") */
        resource: string;
        /** @description Version defines the version of the resource. */
        version: string;
      };
    } & (unknown | unknown);
  };
}
