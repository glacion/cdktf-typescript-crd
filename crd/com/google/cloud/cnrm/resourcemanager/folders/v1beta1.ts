import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFolderV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFolderV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "resourcemanager.cnrm.cloud.google.com/v1beta1", kind: "Folder", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFolderV1beta1Config extends ManifestConfig {
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
      /** @description The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. */
      displayName: string;
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
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    } & (unknown | unknown | unknown);
  };
}
