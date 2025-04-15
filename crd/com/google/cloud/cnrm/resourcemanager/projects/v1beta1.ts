import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProjectV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesProjectV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "resourcemanager.cnrm.cloud.google.com/v1beta1", kind: "Project", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesProjectV1beta1Config extends ManifestConfig {
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
  };
}
