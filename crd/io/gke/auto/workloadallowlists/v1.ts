import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadAllowlistV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWorkloadAllowlistV1Config) {
    super(scope, id, { manifest: { apiVersion: "auto.gke.io/v1", kind: "WorkloadAllowlist", ...manifest }, ...config });
  }
}
export interface KubernetesWorkloadAllowlistV1Config extends ManifestConfig {
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
