import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTopologyV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesTopologyV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesTopologyV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "kueue.x-k8s.io/v1alpha1";
    kind: "Topology";
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
    /** @description TopologySpec defines the desired state of Topology */
    spec?: {
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
