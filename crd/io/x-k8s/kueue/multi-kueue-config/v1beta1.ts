import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KueueXK8sIoMultiKueueConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: KueueXK8sIoMultiKueueConfigV1beta1Config) {
    super(scope, id, config);
  }
}
export interface KueueXK8sIoMultiKueueConfigV1beta1Config extends ManifestConfig {
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
      namespace?: string;
    };
    /** @description MultiKueueConfigSpec defines the desired state of MultiKueueConfig */
    spec?: {
      /** @description List of MultiKueueClusters names where the workloads from the ClusterQueue should be distributed. */
      clusters: string[];
    };
  };
}
