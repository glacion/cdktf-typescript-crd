import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSAutokeyConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesKMSAutokeyConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kms.cnrm.cloud.google.com/v1beta1", kind: "KMSAutokeyConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesKMSAutokeyConfigV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The folder that this resource belongs to. */
      folderRef: {
        /** @description The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set. */
        external?: string;
        /** @description The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set. */
        name?: string;
        /** @description The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Project that this resource belongs to. */
      keyProject?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
