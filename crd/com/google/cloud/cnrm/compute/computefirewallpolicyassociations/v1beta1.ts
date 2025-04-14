import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeFirewallPolicyAssociationV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesComputeFirewallPolicyAssociationV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "compute.cnrm.cloud.google.com/v1beta1",
        kind: "ComputeFirewallPolicyAssociation",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesComputeFirewallPolicyAssociationV1beta1Config extends ManifestConfig {
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
  };
}
