import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkServicesTLSRouteV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkServicesTLSRouteV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkServicesTLSRoute",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkServicesTLSRouteV1beta1Config extends ManifestConfig {
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
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      gateways?: ({
        /** @description Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Immutable. The location for the resource */
      location: string;
      meshes?: ({
        /** @description Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. */
      rules: {
        /** @description Required. The detailed rule defining how to route matched traffic. */
        action: {
          /** @description Required. The destination services to which traffic should be forwarded. At least one destination service is required. */
          destinations: {
            serviceRef: {
              /** @description Required. The URL of a BackendService to route traffic to.
               *
               *     Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /**
             * Format: int64
             * @description Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
             */
            weight?: number;
          }[];
        };
        /** @description Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. */
        matches: {
          /** @description Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set. */
          alpn?: string[];
          /** @description Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com. Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set. */
          sniHost?: string[];
        }[];
      }[];
    };
  };
}
