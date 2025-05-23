import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkServicesEndpointPolicyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesNetworkServicesEndpointPolicyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesNetworkServicesEndpointPolicyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networkservices.cnrm.cloud.google.com/v1beta1";
    kind?: "NetworkServicesEndpointPolicy";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    spec: {
      authorizationPolicyRef?: {
        /** @description Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
         *
         *     Allowed value: The Google Cloud resource name of a `NetworkSecurityAuthorizationPolicy` resource (format: `projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      clientTlsPolicyRef?: {
        /** @description Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
         *
         *     Allowed value: The Google Cloud resource name of a `NetworkSecurityClientTLSPolicy` resource (format: `projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /** @description Required. A matcher that selects endpoints to which the policies should be applied. */
      endpointMatcher: {
        /** @description The matcher is based on node metadata presented by xDS clients. */
        metadataLabelMatcher?: {
          /** @description Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), an error will be thrown. Possible values: METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED, MATCH_ANY, MATCH_ALL */
          metadataLabelMatchCriteria?: string;
          /** @description The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client). */
          metadataLabels?: {
            /** @description Required. Label name presented as key in xDS Node Metadata. */
            labelName: string;
            /** @description Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. */
            labelValue: string;
          }[];
        };
      };
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
      serverTlsPolicyRef?: {
        /** @description Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
         *
         *     Allowed value: The Google Cloud resource name of a `NetworkSecurityServerTLSPolicy` resource (format: `projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports. */
      trafficPortSelector?: {
        /** @description Optional. A list of ports. Can be port numbers or port range (example, specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected. */
        ports?: string[];
      };
      /** @description Required. The type of endpoint config. This is primarily used to validate the configuration. Possible values: ENDPOINT_CONFIG_SELECTOR_TYPE_UNSPECIFIED, SIDECAR_PROXY, GRPC_SERVER */
      type: string;
    };
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was created.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was updated.
       */
      updateTime?: string;
    };
  };
}
