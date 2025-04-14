import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMPolicyMemberV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMPolicyMemberV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMPolicyMember", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMPolicyMemberV1beta1Config extends ManifestConfig {
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
    spec: object;
  };
}
