import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAllowlistedV2WorkloadV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAllowlistedV2WorkloadV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "auto.gke.io/v1", kind: "AllowlistedV2Workload", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAllowlistedV2WorkloadV1Config extends ManifestConfig {
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
