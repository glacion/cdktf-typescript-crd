import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkSecurityAuthorizationPolicyV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesNetworkSecurityAuthorizationPolicyV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "networksecurity.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkSecurityAuthorizationPolicy",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkSecurityAuthorizationPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". Possible values: ACTION_UNSPECIFIED, ALLOW, DENY */
      action: string;
      /** @description Optional. Free-text description of the resource. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
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
      /** @description Optional. List of rules to match. If not set, the action specified in the ‘action’ field will be applied without any additional rule checks. */
      rules?: {
        /** @description Optional. List of attributes for the traffic destination. If not set, the action specified in the ‘action’ field will be applied without any rule checks for the destination. */
        destinations?: {
          /** @description Required. List of host names to match. Matched against HOST header in http requests. Each host can be an exact match, or a prefix match (example, “mydomain.*”) or a suffix match (example, *.myorg.com”) or a presence(any) match “*”. */
          hosts: string[];
          /** @description Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. */
          httpHeaderMatch?: {
            /** @description Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method". */
            headerName: string;
            /** @description Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier. */
            regexMatch: string;
          };
          /** @description Optional. A list of HTTP methods to match. Should not be set for gRPC services. */
          methods?: string[];
          /** @description Required. List of destination ports to match. */
          ports: number[];
        }[];
        /** @description Optional. List of attributes for the traffic source. If not set, the action specified in the ‘action’ field will be applied without any rule checks for the source. */
        sources?: {
          /** @description Optional. List of CIDR ranges to match based on source IP address. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. */
          ipBlocks?: string[];
          /** @description Optional. List of peer identities to match for authorization. Each peer can be an exact match, or a prefix match (example, “namespace/*”) or a suffix match (example, *\/service-account”) or a presence match “*”. */
          principals?: string[];
        }[];
      }[];
    };
  };
}
