import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMServiceAccountV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMServiceAccountV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMServiceAccount", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMServiceAccountV1beta1Config extends ManifestConfig {
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
      /** @description A text description of the service account. Must be less than or equal to 256 UTF-8 bytes. */
      description?: string;
      /** @description Whether the service account is disabled. Defaults to false. */
      disabled?: boolean;
      /** @description The display name for the service account. Can be updated without creating a new resource. */
      displayName?: string;
      /** @description Immutable. Optional. The accountId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
