import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPGatewayPolicyV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGCPGatewayPolicyV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGCPGatewayPolicyV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "GCPGatewayPolicy";
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
    /** @description Spec defines the desired state of GCPGatewayPolicy. */
    spec: {
      /** @description Default defines default gateway policy configuration for the targeted resource. */
      default?: {
        allowGlobalAccess?: boolean;
        /** @description Region allows to specify load balancer's region for Multi-cluster Gateway. */
        region?: string;
        sslPolicy?: string;
      };
      /** @description TargetRef identifies an API object to apply policy to. */
      targetRef: {
        /** @description Group is the group of the target resource. */
        group: string;
        /** @description Kind is kind of the target resource. */
        kind: string;
        /** @description Name is the name of the target resource. */
        name: string;
        /** @description Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy. */
        namespace?: string;
      };
    };
    /** @description Status defines the current state of GCPGatewayPolicy. */
    status?: {
      /** @description Conditions describe the current conditions of the GatewayPolicy. */
      conditions?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition. This may be an empty string. */
        message: string;
        /**
         * Format: int64
         * @description observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. */
        reason: string;
        /**
         * @description status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "True" | "False" | "Unknown";
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
        type: string;
      }[];
    };
  };
}
