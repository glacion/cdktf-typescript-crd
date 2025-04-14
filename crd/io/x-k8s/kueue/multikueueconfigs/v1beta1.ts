import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultiKueueConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMultiKueueConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "MultiKueueConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMultiKueueConfigV1beta1Config extends ManifestConfig {
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
      /** @description List of MultiKueueClusters names where the workloads from the ClusterQueue should be distributed. */
      clusters: string[];
    };
  };
}
