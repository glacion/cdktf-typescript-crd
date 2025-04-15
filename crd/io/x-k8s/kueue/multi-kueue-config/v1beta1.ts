import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultiKueueConfigV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMultiKueueConfigV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMultiKueueConfigV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "kueue.x-k8s.io/v1beta1";
    kind: "MultiKueueConfig";
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
    /** @description MultiKueueConfigSpec defines the desired state of MultiKueueConfig */
    spec?: {
      /** @description List of MultiKueueClusters names where the workloads from the ClusterQueue should be distributed. */
      clusters: string[];
    };
  };
}
