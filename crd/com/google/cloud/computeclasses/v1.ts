import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeClassV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeClassV1Config) {
    super(scope, id, { manifest: { apiVersion: "cloud.google.com/v1", kind: "ComputeClass", ...manifest }, ...config });
  }
}
export interface KubernetesComputeClassV1Config extends ManifestConfig {
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
      /** @description ActiveMigration describes settings related to active reconciliation of
       *     a given ComputeClass. */
      activeMigration?: {
        /** @description EnsureAllDaemonSetPodsRunning defines whether node pools should be migrated
         *     to larger ones to ensure that all daemon sets are schedulable. */
        ensureAllDaemonSetPodsRunning?: boolean;
        /** @description OptimizeRulePriority defines whether workloads affected by given
         *     ComputeClass should be migrated to nodepool defined by higher priority rule, if possible. */
        optimizeRulePriority: boolean;
      };
      /** @description AutoscalingPolicy describes settings related to active reconciliation of
       *     a given ComputeClass. */
      autoscalingPolicy?: {
        /** @description ConsolidationDelayMinutes determines how long a node should be unneeded before it is eligible for scale down.
         *     Minimum duration is 1 minute, maximum is 24 hours or 1440 minutes */
        consolidationDelayMinutes?: number;
        /** @description ConsolidationThreshold determines resource utilization threshold below which a node can be considered for scale down. */
        consolidationThreshold?: number;
        /** @description GPUConsolidationThreshold determines GPU resource utilization threshold below which a node can be considered for scale down.
         *     Utilization calculation only cares about GPU resource for accelerator node, CPU and memory utilization will be ignored. */
        gpuConsolidationThreshold?: number;
      };
      /** @description NodePoolAutoCreation describes the auto provisioning settings for a given
       *     ComputeClass. */
      nodePoolAutoCreation?: {
        /** @description Enabled indicates whether NodePoolAutoCreation is enabled for a given ComputeClass. */
        enabled: boolean;
      };
      /** @description NodePoolConfig defines required node pool configuration. Auto-provisioned node pools
       *     will be created with this configuration. */
      nodePoolConfig?: {
        /** @description ServiceAccount used by the node pool. */
        serviceAccount?: string;
      };
      /** @description Priorities is a description of user preferences to be
       *     used by a given ComputeClass. */
      priorities?: {
        /** @description Gpu defines preferred GPU config for a node. */
        gpu?: {
          /**
           * Format: int64
           * @description Count describes preferred count of GPUs for a node.
           */
          count?: number;
          /**
           * @description DriverVersion describes version of GPU driver for a node.
           * @default default
           * @enum {string}
           */
          driverVersion: "default" | "latest";
          /** @description Type describes preferred GPU accelerator type for a node. */
          type?: string;
        };
        /** @description Machine family describes preferred instance family for a node. If none is specified,
         *     the default autoprovisioning machine family is used. */
        machineFamily?: string;
        /** @description MachineType defines preferred machine type for a node. */
        machineType?: string;
        /** @description MaxRunDurationSeconds defines the maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
        maxRunDurationSeconds?: number;
        /** @description MinCores describes a minimum number of CPU cores of a node. */
        minCores?: number;
        /** @description MinMemoryGb describes a minimum GBs of memory of a node. */
        minMemoryGb?: number;
        /** @description Nodepools describes preference of specific, preexisting nodepools. */
        nodepools?: string[];
        /** @description Reservations defines reservations config for a node. */
        reservations?: {
          /**
           * @description ReservationAffinity affects reservations considered and the way how they are consumed.
           *     "Specific" means that only specific reservations are considered with no fallback possible.
           *     "AnyBestEffort" affinity would consider any non-specific reservation available
           *     to be claimed with a fallback to on-demand nodes in case of none claimable.
           *     "None" affinity would prevent reservations from being used
           * @enum {string}
           */
          affinity: "Specific" | "AnyBestEffort" | "None";
          /** @description Specific is a non prioritized list of specific reservations to be considered by the priority rule. */
          specific?: {
            /** @description Name of the reservation to be used. */
            name: string;
            /** @description Project is the project where the specific reservation lives. */
            project?: string;
            /** @description ReservationBlock is the block of the reservation. */
            reservationBlock?: {
              /** @description Name is the name of the block. */
              name: string;
            };
          }[];
        };
        /** @description Spot if set to true specifies that a node should be a spot instance, on-demand otherwise. */
        spot?: boolean;
        /** @description Storage describes storage config of a node. */
        storage?: {
          /** @description BootDiskKMSKey defines a key used to encrypt the boot disk attached. */
          bootDiskKMSKey?: string;
          /** @description BootDiskSize defines the size of a disk attached to node, specified in GB. */
          bootDiskSize?: number;
          /**
           * @description BootDiskType defines type of the disk attached to the node.
           *     Note that available boot disk types depend on the machine family / machine type selected.
           *     Currently supported types:
           *     * pd-balanced
           *     * pd-standard
           *     * pd-ssd
           *     * hyperdisk-balanced
           * @enum {string}
           */
          bootDiskType?: "pd-balanced" | "pd-standard" | "pd-ssd" | "hyperdisk-balanced";
          /** @description LocalSSDCount defines a number of local SSDs attached to node. */
          localSSDCount?: number;
          /** @description SecondaryBootDisks represent persistent disks attached to a node with special configurations based on their modes. */
          secondaryBootDisks?: {
            /** @description The name of the disk image. */
            diskImageName: string;
            /**
             * @description Currently supported modes:
             *     * MODE_UNSPECIFIED - MODE_UNSPECIFIED is when mode is not set.
             *     * CONTAINER_IMAGE_CACHE - it is for using the secondary boot disk as a container image cache.
             * @enum {string}
             */
            mode?: "MODE_UNSPECIFIED" | "CONTAINER_IMAGE_CACHE";
            /** @description The name of the project that the disk image belongs to. */
            project?: string;
          }[];
        };
        /** @description Tpu defines preferred TPU config for a node. */
        tpu?: {
          /**
           * Format: int64
           * @description Count describes preferred count of TPU chips for a node.
           */
          count?: number;
          /** @description Topology describes preferred TPU topology of a node. */
          topology?: string;
          /** @description Type describes preferred TPU type for a node. */
          type?: string;
        };
      }[];
      /** @description WhenUnsatisfiable describes autoscaler behaviour in case none
       *     of the provided priorities is satisfiable.
       *     Currently supported values:
       *     * ScaleUpAnyway
       *     * DoNotScaleUp */
      whenUnsatisfiable: string;
    };
  };
}
