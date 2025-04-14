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
  manifest: {
    /** @description GlobalContextEntry declares resources to be cached. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description Spec declares policy exception behaviors. */
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
      /** @description Status contains globalcontextentry runtime data. */
      status?: {
        conditions?: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another.
           *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string;
          /** @description message is a human readable message indicating details about the transition.
           *     This may be an empty string. */
          message: string;
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
           *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
           *     with respect to the current state of the instance.
           */
          observedGeneration?: number;
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
           *     Producers of specific condition types may define expected values and meanings for this field,
           *     and whether the values are considered a guaranteed API.
           *     The value should be a CamelCase string.
           *     This field may not be empty. */
          reason: string;
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown";
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
          type: string;
        }[];
        /**
         * Format: date-time
         * @description Indicates the time when the globalcontextentry was last refreshed successfully for the API Call
         */
        lastRefreshTime?: string;
        /** @description Deprecated in favor of Conditions */
        ready?: boolean;
      };
    };
  };
}
