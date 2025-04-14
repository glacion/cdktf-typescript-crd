import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterPolicyReportV1alpha2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterPolicyReportV1alpha2Config) {
    super(scope, id, {
      manifest: { apiVersion: "wgpolicyk8s.io/v1alpha2", kind: "ClusterPolicyReport", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterPolicyReportV1alpha2Config extends ManifestConfig {
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
