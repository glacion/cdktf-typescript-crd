import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMCustomRoleV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesIAMCustomRoleV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesIAMCustomRoleV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMCustomRole";
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
      /** @description A human-readable description for the role. */
      description?: string;
      /** @description The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified. */
      permissions: string[];
      /** @description Immutable. Optional. The roleId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The current launch stage of the role. Defaults to GA. */
      stage?: string;
      /** @description A human-readable title for the role. */
      title: string;
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
      /** @description The current deleted state of the role. */
      deleted?: boolean;
      /** @description The full name of the role. */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
