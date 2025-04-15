import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMServiceAccountV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesIAMServiceAccountV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesIAMServiceAccountV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMServiceAccount";
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
      /** @description A text description of the service account. Must be less than or equal to 256 UTF-8 bytes. */
      description?: string;
      /** @description Whether the service account is disabled. Defaults to false. */
      disabled?: boolean;
      /** @description The display name for the service account. Can be updated without creating a new resource. */
      displayName?: string;
      /** @description Immutable. Optional. The accountId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
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
      /** @description The e-mail address of the service account. This value should be referenced from any google_iam_policy data sources that would grant the service account privileges. */
      email?: string;
      /** @description The Identity of the service account in the form 'serviceAccount:{email}'. This value is often used to refer to the service account in order to grant IAM permissions. */
      member?: string;
      /** @description The fully-qualified name of the service account. */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The unique id of the service account. */
      uniqueId?: string;
    };
  };
}
