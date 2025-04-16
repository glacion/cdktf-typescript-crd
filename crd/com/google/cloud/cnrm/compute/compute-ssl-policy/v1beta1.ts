import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeSSLPolicyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeSSLPolicyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeSSLPolicyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeSSLPolicy";
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
    spec?: {
      /** @description Profile specifies the set of SSL features that can be used by the
       *     load balancer when negotiating SSL with clients. This can be one of
       *     'COMPATIBLE', 'MODERN', 'RESTRICTED', or 'CUSTOM'. If using 'CUSTOM',
       *     the set of SSL features to enable must be specified in the
       *     'customFeatures' field.
       *
       *     See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
       *     for which ciphers are available to use. **Note**: this argument
       *     *must* be present when using the 'CUSTOM' profile. This argument
       *     *must not* be present when using any other profile. */
      customFeatures?: string[];
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description The minimum version of SSL protocol that can be used by the clients
       *     to establish a connection with the load balancer. Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"]. */
      minTlsVersion?: string;
      /** @description Profile specifies the set of SSL features that can be used by the
       *     load balancer when negotiating SSL with clients. If using 'CUSTOM',
       *     the set of SSL features to enable must be specified in the
       *     'customFeatures' field.
       *
       *     See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
       *     for information on what cipher suites each profile provides. If
       *     'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"]. */
      profile?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
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
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description The list of features enabled in the SSL policy. */
      enabledFeatures?: string[];
      /** @description Fingerprint of this resource. A hash of the contents stored in this
       *     object. This field is used in optimistic locking. */
      fingerprint?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
