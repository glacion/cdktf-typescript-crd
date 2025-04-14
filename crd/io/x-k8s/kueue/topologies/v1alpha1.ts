import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTopologyV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTopologyV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "kueue.x-k8s.io/v1alpha1", kind: "Topology", ...manifest }, ...config });
  }
}
export interface KubernetesTopologyV1alpha1Config extends ManifestConfig {
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
      /** @description levels define the levels of topology. */
      levels: {
        /** @description nodeLabel indicates the name of the node label for a specific topology
         *     level.
         *
         *     Examples:
         *     - cloud.provider.com/topology-block
         *     - cloud.provider.com/topology-rack */
        nodeLabel: string;
      }[];
    };
  };
}
