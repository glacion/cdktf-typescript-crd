import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMCustomRoleV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMCustomRoleV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMCustomRole", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMCustomRoleV1beta1Config extends ManifestConfig {
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
  };
}
