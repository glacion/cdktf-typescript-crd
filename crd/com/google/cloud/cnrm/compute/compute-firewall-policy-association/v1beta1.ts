import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputeFirewallPolicyAssociationV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: ComputeCnrmCloudGoogleComComputeFirewallPolicyAssociationV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputeFirewallPolicyAssociationV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeFirewallPolicyAssociation";
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
      /** @description Immutable. */
      attachmentTargetRef: {
        /** @description The target that the firewall policy is attached to.
         *
         *     Allowed values:
         *     * The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
         *     * The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
        external?: string;
        /** @description Kind of the referent. Allowed values: Folder */
        kind?: string;
        /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. */
      firewallPolicyRef: {
        /** @description The firewall policy ID of the association.
         *
         *     Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`). */
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The short name of the firewall policy of the association. */
      shortName?: string;
    };
  };
}
