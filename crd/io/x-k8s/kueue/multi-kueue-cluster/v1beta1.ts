import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultiKueueClusterV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMultiKueueClusterV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMultiKueueClusterV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "kueue.x-k8s.io/v1beta1";
    kind: "MultiKueueCluster";
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
    spec?: {
      /** @description Information how to connect to the cluster. */
      kubeConfig: {
        /** @description Location of the KubeConfig.
         *
         *     If LocationType is Secret then Location is the name of the secret inside the namespace in
         *     which the kueue controller manager is running. The config should be stored in the "kubeconfig" key. */
        location: string;
        /** @description Type of the KubeConfig location. */
        locationType: string;
      };
    };
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
    };
  };
}
