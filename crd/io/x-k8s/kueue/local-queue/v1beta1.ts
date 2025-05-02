import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLocalQueueV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesLocalQueueV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesLocalQueueV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "kueue.x-k8s.io/v1beta1";
    kind?: "LocalQueue";
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
    /** @description LocalQueueSpec defines the desired state of LocalQueue */
    spec?: {
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
    /** @description LocalQueueStatus defines the observed state of LocalQueue */
    status?: {
      /**
       * Format: int32
       * @description admittedWorkloads is the number of workloads in this LocalQueue
       *     admitted to a ClusterQueue and that haven't finished yet.
       */
      admittedWorkloads?: number;
      /** @description Conditions hold the latest available observations of the LocalQueue
       *     current state. */
      conditions?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another.
         *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition.
         *     This may be an empty string. */
        message: string;
        /**
         * Format: int64
         * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
         *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
         *     with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
         *     Producers of specific condition types may define expected values and meanings for this field,
         *     and whether the values are considered a guaranteed API.
         *     The value should be a CamelCase string.
         *     This field may not be empty. */
        reason: string;
        /**
         * @description status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "True" | "False" | "Unknown";
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
        type: string;
      }[];
      /** @description flavorsUsage are the used quotas, by flavor currently in use by the
       *     workloads assigned to this LocalQueue. */
      flavorUsage?: {
        /** @description name of the flavor. */
        name: string;
        /** @description resources lists the quota usage for the resources in this flavor. */
        resources: {
          /** @description name of the resource. */
          name: string;
          /** @description total is the total quantity of used quota. */
          total?: number | string;
        }[];
      }[];
      /** @description flavors lists all currently available ResourceFlavors in specified ClusterQueue. */
      flavors?: {
        /** @description name of the flavor. */
        name: string;
        /** @description nodeLabels are labels that associate the ResourceFlavor with Nodes that
         *     have the same labels. */
        nodeLabels?: {
          [key: string]: string;
        };
        /** @description nodeTaints are taints that the nodes associated with this ResourceFlavor
         *     have. */
        nodeTaints?: {
          /** @description Required. The effect of the taint on pods
           *     that do not tolerate the taint.
           *     Valid effects are NoSchedule, PreferNoSchedule and NoExecute. */
          effect: string;
          /** @description Required. The taint key to be applied to a node. */
          key: string;
          /**
           * Format: date-time
           * @description TimeAdded represents the time at which the taint was added.
           *     It is only written for NoExecute taints.
           */
          timeAdded?: string;
          /** @description The taint value corresponding to the taint key. */
          value?: string;
        }[];
        /** @description resources used in the flavor. */
        resources?: string[];
      }[];
      /** @description flavorsReservation are the reserved quotas, by flavor currently in use by the
       *     workloads assigned to this LocalQueue. */
      flavorsReservation?: {
        /** @description name of the flavor. */
        name: string;
        /** @description resources lists the quota usage for the resources in this flavor. */
        resources: {
          /** @description name of the resource. */
          name: string;
          /** @description total is the total quantity of used quota. */
          total?: number | string;
        }[];
      }[];
      /**
       * Format: int32
       * @description PendingWorkloads is the number of Workloads in the LocalQueue not yet admitted to a ClusterQueue
       */
      pendingWorkloads?: number;
      /**
       * Format: int32
       * @description reservingWorkloads is the number of workloads in this LocalQueue
       *     reserving quota in a ClusterQueue and that haven't finished yet.
       */
      reservingWorkloads?: number;
    };
  };
}
