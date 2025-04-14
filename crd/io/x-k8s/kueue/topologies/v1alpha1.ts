import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTopologyV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTopologyV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "kueue.x-k8s.io/v1alpha1", kind: "Topology", ...manifest }, ...config });
  }
}
export interface KubernetesTopologyV1alpha1Config extends ManifestConfig {
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
  manifest: {
    /** @description Topology is the Schema for the topology API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
  };
}
