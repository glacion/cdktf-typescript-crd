import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoNodeTopologyV1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoNodeTopologyV1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoNodeTopologyV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "NodeTopology";
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
    /** @description NodeTopologySpec is the spec for a NodeTopology resource */
    spec?: Record<string, never>;
    /** @description NodeTopologyStatus is the status for a NodeTopology resource */
    status?: {
      /** @description Conditions contains the latest conditions observed of this Node Tolology
       *     resource. */
      conditions?: {
        /**
         * Format: date-time
         * @description Last time the condition transitioned from one status to another.
         */
        lastTransitionTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type is the type of the condition. */
        type: string;
      }[];
      /** @description Subnets contains the list of subnets used by the GKE cluster that
       *     corresponds to this Node Topology Resource. */
      subnets: {
        /** @description Name is the short name of the subnetwork.
         *     More info: https://cloud.google.com/vpc/docs/subnets */
        name: string;
        /** @description SubnetPath is the fully qualified resource path of this subnet.
         *     Examples: projects/my-project/regions/us-central1/subnetworks/my-subnet */
        subnetPath: string;
      }[];
      /** @description Zones specifies the current node zones of the GKE cluster that corresponds
       *     to this NodeTopology Resource. */
      zones: string[];
    };
  };
}
