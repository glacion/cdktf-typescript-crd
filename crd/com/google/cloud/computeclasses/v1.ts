import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeClassV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeClassV1Config) {
    super(scope, id, { manifest: { apiVersion: "cloud.google.com/v1", kind: "ComputeClass", ...manifest }, ...config });
  }
}
export interface KubernetesComputeClassV1Config extends ManifestConfig {
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
    /** @description ComputeClass is a way to impact Cluster Autoscaler scaling
     *     decisions based on user preferences. It gives control over preference of
     *     hardware to be selected by Cluster Autoscaler.
     *     Given ComputeClass affects only workloads using workload separation
     *     label equal to CCs name, except ComputeClass with name default
     *     which will be used for workloads not specifying any preferences. */
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
      /** @description Specification of the ComputeClass object.
       *     More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
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
      /** @description Status of the ComputeClass. */
      status?: {
        /** @description Conditions represent the observations of a ComputeClass's current state. */
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
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase.
           *     ---
           *     Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
           *     useful (see .node.status.conditions), the ability to deconflict is important.
           *     The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
          type: string;
        }[];
      };
    };
  };
}
