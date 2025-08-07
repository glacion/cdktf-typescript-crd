import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CloudGoogleComComputeClassV1 extends Manifest {
  constructor(scope: Construct, id: string, config: CloudGoogleComComputeClassV1Config) {
    super(scope, id, config);
  }
}
export interface CloudGoogleComComputeClassV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "cloud.google.com/v1";
    kind: "ComputeClass";
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
      /** @description Autopilot describes the autopilot settings for a given ComputeClass. */
      autopilot?: {
        /** @description Enabled indicates whether nodes created for this compute class should be Autopilot managed. */
        enabled: boolean;
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
      /** @description Description is an arbitrary string that usually provides guidelines on
       *     when this compute class should be used. */
      description?: string;
      /** @description NodePoolAutoCreation describes the auto provisioning settings for a given
       *     ComputeClass. */
      nodePoolAutoCreation?: {
        /** @description Enabled indicates whether NodePoolAutoCreation is enabled for a given ComputeClass. */
        enabled: boolean;
      };
      /** @description NodePoolConfig defines required node pool configuration. Existing node pools will be matched with the ComputeClass
       *     only if their configuration match this field. Auto-provisioned node pools will be created with this configuration. */
      nodePoolConfig?: {
        /** @description Image type used by nodes in the node pool. */
        imageType?: string;
        /** @description NodeLabels is used to add user defined Kubernetes labels to all nodes in the new node pool.
         *     These labels are applied to the Kubernetes API node object and can be used in nodeSelectors for pod scheduling.
         *     Note: Node labels are distinct from GKE labels.
         *     More info: https://cloud.google.com/sdk/gcloud/reference/container/node-pools/create#--node-labels */
        nodeLabels?: {
          [key: string]: string;
        };
        /** @description ServiceAccount used by the node pool. */
        serviceAccount?: string;
        /** @description WorkloadType defines Collection or Goodput SLO for the workload. Currently
         *     supported values:
         *     * HIGH_AVAILABILITY - for Collection SLO
         *     * HIGH_THROUGHPUT - for Goodput SLO
         *     HIGH_AVAILABILITY is desired for running serving workloads which require
         *     most of the infrastructure (slices) running all the time to achieve high
         *     availability.
         *     HIGH_THROUGHPUT is desired for running batch/training jobs
         *     which require all underlying infrastructure (slices) running for most of
         *     the time to make progress. HIGH_THROUGHPUT can be only set for a multi-host
         *     scenario, that is, when NodePoolGroup is set. */
        workloadType?: string;
      };
      /** @description NodePoolGroup defines required node pool configurations that are shared between a group of node pools.
       *     Existing node pools will be matched with the ComputeClass only if their configuration matches this field.
       *     Auto-provisioned node pools will be created with this configuration. */
      nodePoolGroup?: {
        /** @description Name defines the name of the node pool group, e.g. MultiMIG */
        name: string;
      };
      /** @description Priorities is a description of user preferences to be
       *     used by a given ComputeClass. */
      priorities?: {
        /** @description FlexStart defines Flex Start provisioning model. */
        flexStart?: {
          /**
           * @description Enabled indicates whether Flex Start provisioning model is enabled.
           * @default false
           */
          enabled: boolean;
          /** @description NodeRecycling defines node recycling config. */
          nodeRecycling?: {
            /** @description LeadTimeSeconds defines how much time before node termination timestamp CA should start looking for a replacement node. */
            leadTimeSeconds: number;
          };
        };
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
        /** @description Location describes CCC zonal preferences config. */
        location?: {
          /** @description Zones lists zones considered for node autoprovisioning. */
          zones?: string[];
        };
        /** @description Machine family describes preferred instance family for a node. If none is specified,
         *     the default autoprovisioning machine family is used. */
        machineFamily?: string;
        /** @description MachineType defines preferred machine type for a node. */
        machineType?: string;
        /** @description MaxPodsPerNode describes the maximum number of pods a node can accommodate. */
        maxPodsPerNode?: number;
        /** @description MaxRunDurationSeconds defines the maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely. */
        maxRunDurationSeconds?: number;
        /** @description MinCores describes a minimum number of CPU cores of a node. */
        minCores?: number;
        /** @description MinMemoryGb describes a minimum GBs of memory of a node. */
        minMemoryGb?: number;
        /** @description NodeSystemConfig defines node system config for a node. */
        nodeSystemConfig?: {
          /** @description KubeletConfig defines kubelet config for a node. */
          kubeletConfig?: {
            /** @description This setting enforces the Pod's CPU limit. Setting this value to false means that the CPU limits for Pods are ignored.
             *     Ignoring CPU limits might be desirable in certain scenarios where Pods are sensitive to CPU limits.
             *     The risk of disabling cpuCFSQuota is that a rogue Pod can consume more CPU resources than intended. */
            cpuCfsQuota?: boolean;
            /** @description This setting sets the CPU CFS quota period value, cpu.cfs_period_us, which specifies the period of how often a cgroup's access to CPU resources should be reallocated.
             *     This option lets you tune the CPU throttling behavior. Value must be 1ms <= period <= 1s. */
            cpuCfsQuotaPeriod?: string;
            /**
             * @description This setting controls the kubelet's CPU Manager Policy. The default value is none which is the default CPU affinity scheme, providing no affinity beyond what the OS scheduler does automatically.
             *     Setting this value to static allows Pods in the Guaranteed QoS class with integer CPU requests to be assigned exclusive use of CPUs.
             * @enum {string}
             */
            cpuManagerPolicy?: "none" | "static";
            /**
             * Format: int64
             * @description This setting sets the maximum number of process IDs (PIDs) that each Pod can use.
             */
            podPidsLimit?: number;
          };
          /** @description LinuxNodeConfig defines linux node config for a node. */
          linuxNodeConfig?: {
            /** @description HugepagesConfig defines hugepages config for a node. */
            hugepageConfig?: {
              /**
               * Format: int64
               * @description Number of 1-gigabyte-sized huge pages to allocate.
               */
              hugepage_size1g?: number;
              /**
               * Format: int64
               * @description Number of 2-megabyte-sized huge pages to allocate.
               */
              hugepage_size2m?: number;
            };
            /** @description SysctlsConfig defines sysctls config for a node. */
            sysctls?: {
              /**
               * Format: int64
               * @description Low latency busy poll timeout for poll and select. (needs CONFIG_NET_RX_BUSY_POLL) Approximate time in us to busy loop waiting for events.
               */
              "net.core.busy_poll"?: number;
              /**
               * Format: int64
               * @description Low latency busy poll timeout for socket reads. (needs CONFIG_NET_RX_BUSY_POLL) Approximate time in us to busy loop waiting for packets on the device queue.
               */
              "net.core.busy_read"?: number;
              /**
               * Format: int64
               * @description Maximum number of packets, queued on the INPUT side, when the interface receives packets faster than kernel can process them.
               */
              "net.core.netdev_max_backlog"?: number;
              /**
               * Format: int64
               * @description Maximum ancillary buffer size allowed per socket. Ancillary data is a sequence of struct cmsghdr structures with appended data.
               */
              "net.core.optmem_max"?: number;
              /**
               * Format: int64
               * @description The maximum receive socket buffer size in bytes.
               */
              "net.core.rmem_max"?: number;
              /**
               * Format: int64
               * @description Limit of socket listen() backlog, known in userspace as SOMAXCONN. Defaults to 128. See also tcp_max_syn_backlog for additional tuning for TCP sockets.
               */
              "net.core.somaxconn"?: number;
              /**
               * Format: int64
               * @description The default setting (in bytes) of the socket send buffer.
               */
              "net.core.wmem_default"?: number;
              /**
               * Format: int64
               * @description The maximum send socket buffer size in bytes.
               */
              "net.core.wmem_max"?: number;
              /** @description Minimal size of receive buffer used by UDP sockets in moderation. Each UDP socket is able to use the size for receiving data, even if total pages of UDP sockets exceed udp_mem pressure. The unit is byte. Default: 1 page. The three values are: min, default, max. Eg. '4096 87380 6291456'. */
              "net.ipv4.tcp_rmem"?: string;
              /**
               * Format: int64
               * @description Allow to reuse TIME-WAIT sockets for new connections when it is safe from protocol viewpoint. It should not be changed without advice/request of technical experts.
               */
              "net.ipv4.tcp_tw_reuse"?: number;
              /** @description Minimal size of send buffer used by UDP sockets in moderation. Each UDP socket is able to use the size for sending data, even if total pages of UDP sockets exceed udp_mem pressure. The unit is byte. Default: 1 page. The three values are: min, default, max. Eg. '4096 87380 6291456'. */
              "net.ipv4.tcp_wmem"?: string;
              /** @description Changing this value is same as changing conf/default/disable_ipv6 setting and also all per-interface disable_ipv6 settings to the same value. */
              "net.ipv6.conf.all.disable_ipv6"?: boolean;
              /** @description Disable IPv6 operation. */
              "net.ipv6.conf.default.disable_ipv6"?: boolean;
              /**
               * Format: int64
               * @description Maximum number of memory map areas a process may have.
               */
              "vm.max_map_count"?: number;
            };
          };
        };
        /** @description Nodepools describes preference of specific, preexisting nodepools. */
        nodepools?: string[];
        /**
         * @description PodFamily represents pod-based provisioning and billing config.
         * @enum {string}
         */
        podFamily?: "general-purpose";
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
      /** @description PriorityDefaults define the default rules for all priorities if the rule doesn't exist in some priority.
       *     Note: PriorityDefaults doesn't apply to priorities with only Nodepools. */
      priorityDefaults?: {
        /** @description Location describes CCC zonal preferences config. */
        location?: {
          /** @description Zones lists zones considered for node autoprovisioning. */
          zones?: string[];
        };
        /** @description NodeSystemConfig defines node system config for a node. */
        nodeSystemConfig?: {
          /** @description KubeletConfig defines kubelet config for a node. */
          kubeletConfig?: {
            /** @description This setting enforces the Pod's CPU limit. Setting this value to false means that the CPU limits for Pods are ignored.
             *     Ignoring CPU limits might be desirable in certain scenarios where Pods are sensitive to CPU limits.
             *     The risk of disabling cpuCFSQuota is that a rogue Pod can consume more CPU resources than intended. */
            cpuCfsQuota?: boolean;
            /** @description This setting sets the CPU CFS quota period value, cpu.cfs_period_us, which specifies the period of how often a cgroup's access to CPU resources should be reallocated.
             *     This option lets you tune the CPU throttling behavior. Value must be 1ms <= period <= 1s. */
            cpuCfsQuotaPeriod?: string;
            /** @description This setting controls the kubelet's CPU Manager Policy. The default value is none which is the default CPU affinity scheme, providing no affinity beyond what the OS scheduler does automatically.
             *     Setting this value to static allows Pods in the Guaranteed QoS class with integer CPU requests to be assigned exclusive use of CPUs. */
            cpuManagerPolicy?: string;
            /**
             * Format: int64
             * @description This setting sets the maximum number of process IDs (PIDs) that each Pod can use.
             */
            podPidsLimit?: number;
          };
          /** @description LinuxNodeConfig defines linux node config for a node. */
          linuxNodeConfig?: {
            /** @description HugepagesConfig defines hugepages config for a node. */
            hugepageConfig?: {
              /**
               * Format: int64
               * @description Number of 1-gigabyte-sized huge pages to allocate.
               */
              hugepage_size1g?: number;
              /**
               * Format: int64
               * @description Number of 2-megabyte-sized huge pages to allocate.
               */
              hugepage_size2m?: number;
            };
            /** @description SysctlsConfig defines sysctls config for a node. */
            sysctls?: {
              /**
               * Format: int64
               * @description Low latency busy poll timeout for poll and select. (needs CONFIG_NET_RX_BUSY_POLL) Approximate time in us to busy loop waiting for events.
               */
              "net.core.busy_poll"?: number;
              /**
               * Format: int64
               * @description Low latency busy poll timeout for socket reads. (needs CONFIG_NET_RX_BUSY_POLL) Approximate time in us to busy loop waiting for packets on the device queue.
               */
              "net.core.busy_read"?: number;
              /**
               * Format: int64
               * @description Maximum number of packets, queued on the INPUT side, when the interface receives packets faster than kernel can process them.
               */
              "net.core.netdev_max_backlog"?: number;
              /**
               * Format: int64
               * @description Maximum ancillary buffer size allowed per socket. Ancillary data is a sequence of struct cmsghdr structures with appended data.
               */
              "net.core.optmem_max"?: number;
              /**
               * Format: int64
               * @description The maximum receive socket buffer size in bytes.
               */
              "net.core.rmem_max"?: number;
              /**
               * Format: int64
               * @description Limit of socket listen() backlog, known in userspace as SOMAXCONN. Defaults to 128. See also tcp_max_syn_backlog for additional tuning for TCP sockets.
               */
              "net.core.somaxconn"?: number;
              /**
               * Format: int64
               * @description The default setting (in bytes) of the socket send buffer.
               */
              "net.core.wmem_default"?: number;
              /**
               * Format: int64
               * @description The maximum send socket buffer size in bytes.
               */
              "net.core.wmem_max"?: number;
              /** @description Minimal size of receive buffer used by UDP sockets in moderation. Each UDP socket is able to use the size for receiving data, even if total pages of UDP sockets exceed udp_mem pressure. The unit is byte. Default: 1 page. The three values are: min, default, max. Eg. '4096 87380 6291456'. */
              "net.ipv4.tcp_rmem"?: string;
              /**
               * Format: int64
               * @description Allow to reuse TIME-WAIT sockets for new connections when it is safe from protocol viewpoint. It should not be changed without advice/request of technical experts.
               */
              "net.ipv4.tcp_tw_reuse"?: number;
              /** @description Minimal size of send buffer used by UDP sockets in moderation. Each UDP socket is able to use the size for sending data, even if total pages of UDP sockets exceed udp_mem pressure. The unit is byte. Default: 1 page. The three values are: min, default, max. Eg. '4096 87380 6291456'. */
              "net.ipv4.tcp_wmem"?: string;
              /** @description Changing this value is same as changing conf/default/disable_ipv6 setting and also all per-interface disable_ipv6 settings to the same value. */
              "net.ipv6.conf.all.disable_ipv6"?: boolean;
              /** @description Disable IPv6 operation. */
              "net.ipv6.conf.default.disable_ipv6"?: boolean;
              /**
               * Format: int64
               * @description Maximum number of memory map areas a process may have.
               */
              "vm.max_map_count"?: number;
            };
          };
        };
      };
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
}
