import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoServiceNetworkEndpointGroupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoServiceNetworkEndpointGroupV1beta1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoServiceNetworkEndpointGroupV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1beta1";
    kind: "ServiceNetworkEndpointGroup";
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
    spec?: Record<string, never>;
    /** @description ServiceNetworkEndpointGroupStatus is the status for a ServiceNetworkEndpointGroup resource */
    status?: {
      /** @description Last time the NEG syncer syncs associated NEGs. */
      conditions?: {
        /**
         * Format: date-time
         * @description Last time the condition transitioned from one status to another.
         */
        lastTransitionTime: string | null;
        /**
         * @description A human readable message indicating details about the transition. This field may be empty.
         * @default
         */
        message: string;
        /**
         * Format: int64
         * @description ObservedGeneration will not be set for ServiceNetworkEndpointGroup as the spec is empty.
         */
        observedGeneration?: number;
        /**
         * @description The reason for the condition's last transition
         * @default
         */
        reason: string;
        /**
         * @description Status of the condition, one of True, False, Unknown.
         * @default
         */
        status: string;
        /**
         * @description Type is the type of the condition.
         * @default
         */
        type: string;
      }[];
      /**
       * Format: date-time
       * @description Last time the NEG syncer syncs associated NEGs.
       */
      lastSyncTime?: string | null;
      networkEndpointGroups?: {
        /**
         * @description The unique identifier for the NEG resource in GCE API.
         * @default
         */
        id: string;
        /** @description NetworkEndpointType: Type of network endpoints in this network endpoint group. */
        networkEndpointType?: string;
        /** @description SelfLink is the GCE Server-defined fully-qualified URL for the GCE NEG resource */
        selfLink?: string;
        /** @description Current condition of this network endpoint group. If state is empty, it should be considered the ACTIVE state. */
        state?: string;
        /** @description URL of the subnetwork to which all network endpoints in the NEG belong. */
        subnetURL?: string;
      }[];
    };
  };
}
