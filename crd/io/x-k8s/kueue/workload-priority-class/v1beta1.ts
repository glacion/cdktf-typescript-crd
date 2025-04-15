import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadPriorityClassV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkloadPriorityClassV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkloadPriorityClassV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "kueue.x-k8s.io/v1beta1";
    kind: "WorkloadPriorityClass";
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
    /** @description description is an arbitrary string that usually provides guidelines on
     *     when this workloadPriorityClass should be used. */
    description?: string;
    /**
     * Format: int32
     * @description value represents the integer value of this workloadPriorityClass. This is the actual priority that workloads
     *     receive when jobs have the name of this class in their workloadPriorityClass label.
     *     Changing the value of workloadPriorityClass doesn't affect the priority of workloads that were already created.
     */
    value: number;
  };
}
