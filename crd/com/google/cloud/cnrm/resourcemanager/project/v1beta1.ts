import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProjectV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesProjectV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesProjectV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "resourcemanager.cnrm.cloud.google.com/v1beta1";
    kind?: "Project";
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
      billingAccountRef?: {
        /** @description Allowed value: The `name` field of a `BillingAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The folder that this resource belongs to. Changing this forces the
       *     resource to be migrated to the newly specified folder. Only one of
       *     folderRef or organizationRef may be specified. */
      folderRef?: {
        /** @description Allowed value: The `folderId` field of a `Folder` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The display name of the project. */
      name: string;
      /** @description The organization that this resource belongs to. Changing this
       *     forces the resource to be migrated to the newly specified
       *     organization. Only one of folderRef or organizationRef may be
       *     specified. */
      organizationRef?: {
        /** @description Allowed value: The `name` field of an `Organization` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The projectId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    } & (unknown | unknown | unknown);
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
      /** @description The numeric identifier of the project. */
      number?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
