import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLocalQueueV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesLocalQueueV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "LocalQueue", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesLocalQueueV1beta1Config extends ManifestConfig {
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
      /** @description clusterQueue is a reference to a clusterQueue that backs this localQueue. */
      clusterQueue?: string;
      /** @description stopPolicy - if set to a value different from None, the LocalQueue is considered Inactive,
       *     no new reservation being made.
       *
       *     Depending on its value, its associated workloads will:
       *
       *     - None - Workloads are admitted
       *     - HoldAndDrain - Admitted workloads are evicted and Reserving workloads will cancel the reservation.
       *     - Hold - Admitted workloads will run to completion and Reserving workloads will cancel the reservation. */
      stopPolicy?: string;
    };
  };
}
