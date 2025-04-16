import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNetworkFirewallPolicyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeNetworkFirewallPolicyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeNetworkFirewallPolicyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeNetworkFirewallPolicy";
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
      /** @description An optional description of this resource. Provide this property when you create the resource. */
      description?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description Fingerprint of the resource. This field is used internally during updates of this resource. */
      fingerprint?: string;
      /** @description The unique identifier for the resource. This identifier is defined by the server. */
      networkFirewallPolicyId?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples. */
      ruleTupleCount?: number;
      /** @description Server-defined URL for the resource. */
      selfLink?: string;
      /** @description Server-defined URL for this resource with the resource id. */
      selfLinkWithId?: string;
    };
  };
}
