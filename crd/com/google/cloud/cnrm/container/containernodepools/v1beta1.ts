import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesContainerNodePoolV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesContainerNodePoolV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "container.cnrm.cloud.google.com/v1beta1", kind: "ContainerNodePool", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesContainerNodePoolV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. To disable autoscaling, set minNodeCount and maxNodeCount to 0. */
        autoscaling?: {
          /** @description Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs. */
          locationPolicy?: string;
          /** @description Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits. */
          maxNodeCount?: number;
          /** @description Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits. */
          minNodeCount?: number;
          /** @description Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits. */
          totalMaxNodeCount?: number;
          /** @description Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits. */
          totalMinNodeCount?: number;
        };
        clusterRef: {
          /** @description Allowed value: The `name` field of a `ContainerCluster` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource. */
        initialNodeCount?: number;
        /** @description Immutable. The location (region or zone) of the cluster. */
        location: string;
        /** @description Node management configuration, wherein auto-repair and auto-upgrade is configured. */
        management?: {
          /** @description Whether the nodes will be automatically repaired. */
          autoRepair?: boolean;
          /** @description Whether the nodes will be automatically upgraded. */
          autoUpgrade?: boolean;
        };
        /** @description Immutable. The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled. */
        maxPodsPerNode?: number;
        /** @description Immutable. Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. */
        namePrefix?: string;
        /** @description Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults. */
        networkConfig?: {
          /** @description Immutable. We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface. */
          additionalNodeNetworkConfigs?: {
            /** @description Immutable. Name of the VPC where the additional interface belongs. */
            networkRef?: {
              /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. Name of the subnetwork where the additional interface belongs. */
            subnetworkRef?: {
              /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description Immutable. We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node. */
          additionalPodNetworkConfigs?: {
            /** @description Immutable. The maximum number of pods per node which use this pod network. */
            maxPodsPerNode?: number;
            /** @description Immutable. The name of the secondary range on the subnet which provides IP address for this pod range. */
            secondaryPodRange?: string;
            /** @description Immutable. Name of the subnetwork where the additional pod network belongs. */
            subnetworkRef?: {
              /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description Immutable. Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified. */
          createPodRange?: boolean;
          /** @description Whether nodes have internal IP addresses only. */
          enablePrivateNodes?: boolean;
          /** @description Immutable. Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited. */
          podCidrOverprovisionConfig?: {
            disabled: boolean;
          };
          /** @description Immutable. The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use. */
          podIpv4CidrBlock?: string;
          /** @description Immutable. The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID. */
          podRange?: string;
        };
        /** @description Immutable. The configuration of the nodepool. */
        nodeConfig?: {
          /** @description Immutable. Specifies options for controlling advanced machine features. */
          advancedMachineFeatures?: {
            /** @description Immutable. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
            threadsPerCore: number;
          };
          bootDiskKMSCryptoKeyRef?: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool. */
          confidentialNodes?: {
            /** @description Immutable. Whether Confidential Nodes feature is enabled for all nodes in this pool. */
            enabled: boolean;
          };
          /** @description Immutable. Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. */
          diskSizeGb?: number;
          /** @description Immutable. Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. */
          diskType?: string;
          /** @description Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. */
          ephemeralStorageConfig?: {
            /** @description Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size. */
            localSsdCount: number;
          };
          /** @description Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. */
          ephemeralStorageLocalSsdConfig?: {
            /** @description Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size. */
            localSsdCount: number;
          };
          /** @description Enable or disable NCCL Fast Socket in the node pool. */
          fastSocket?: {
            /** @description Whether or not NCCL Fast Socket is enabled. */
            enabled: boolean;
          };
          /** @description Immutable. GCFS configuration for this node. */
          gcfsConfig?: {
            /** @description Immutable. Whether or not GCFS is enabled. */
            enabled: boolean;
          };
          /** @description Immutable. List of the type and count of accelerator cards attached to the instance. */
          guestAccelerator?: {
            /** @description Immutable. The number of the accelerator cards exposed to an instance. */
            count: number;
            /** @description Immutable. Configuration for auto installation of GPU driver. */
            gpuDriverInstallationConfig?: {
              /** @description Immutable. Mode for how the GPU driver is installed. */
              gpuDriverVersion: string;
            };
            /** @description Immutable. Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
            gpuPartitionSize?: string;
            /** @description Immutable. Configuration for GPU sharing. */
            gpuSharingConfig?: {
              /** @description Immutable. The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig). */
              gpuSharingStrategy: string;
              /** @description Immutable. The maximum number of containers that can share a GPU. */
              maxSharedClientsPerGpu: number;
            };
            /** @description Immutable. The accelerator type resource name. */
            type: string;
          }[];
          /** @description Immutable. Enable or disable gvnic in the node pool. */
          gvnic?: {
            /** @description Immutable. Whether or not gvnic is enabled. */
            enabled: boolean;
          };
          /** @description Immutable. The maintenance policy for the hosts on which the GKE VMs run on. */
          hostMaintenancePolicy?: {
            /** @description Immutable. . */
            maintenanceInterval: string;
          };
          /** @description The image type to use for this node. Note that for a given image type, the latest version of it will be used. */
          imageType?: string;
          /** @description Node kubelet configs. */
          kubeletConfig?: {
            /** @description Enable CPU CFS quota enforcement for containers that specify CPU limits. */
            cpuCfsQuota?: boolean;
            /** @description Set the CPU CFS quota period value 'cpu.cfs_period_us'. */
            cpuCfsQuotaPeriod?: string;
            /** @description Control the CPU management policy on the node. */
            cpuManagerPolicy: string;
            /** @description Controls the maximum number of processes allowed to run in a pod. */
            podPidsLimit?: number;
          };
          /** @description The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. */
          labels?: {
            [key: string]: string;
          };
          /** @description Parameters that can be configured on Linux nodes. */
          linuxNodeConfig?: {
            /** @description cgroupMode specifies the cgroup mode to be used on the node. */
            cgroupMode?: string;
            /** @description The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. */
            sysctls?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Parameters for raw-block local NVMe SSDs. */
          localNvmeSsdBlockConfig?: {
            /** @description Immutable. Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. */
            localSsdCount: number;
          };
          /** @description Immutable. The number of local SSD disks to be attached to the node. */
          localSsdCount?: number;
          /** @description Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT. */
          loggingVariant?: string;
          /** @description Immutable. The name of a Google Compute Engine machine type. */
          machineType?: string;
          /** @description Immutable. The metadata key/value pairs assigned to instances in the cluster. */
          metadata?: {
            [key: string]: string;
          };
          /** @description Immutable. Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. */
          minCpuPlatform?: string;
          /** @description Immutable. Setting this field will assign instances
           *     of this pool to run on the specified node group. This is useful
           *     for running workloads on sole tenant nodes. */
          nodeGroupRef?: {
            /** @description Allowed value: The `name` field of a `ComputeNodeGroup` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The set of Google API scopes to be made available on all of the node VMs. */
          oauthScopes?: string[];
          /** @description Immutable. Whether the nodes are created as preemptible VM instances. */
          preemptible?: boolean;
          /** @description Immutable. The reservation affinity configuration for the node pool. */
          reservationAffinity?: {
            /** @description Immutable. Corresponds to the type of reservation consumption. */
            consumeReservationType: string;
            /** @description Immutable. The label key of a reservation resource. */
            key?: string;
            /** @description Immutable. The label values of the reservation resource. */
            values?: string[];
          };
          /** @description The GCE resource labels (a map of key/value pairs) to be applied to the node pool. */
          resourceLabels?: {
            [key: string]: string;
          };
          /** @description Immutable. Sandbox configuration for this node. */
          sandboxConfig?: {
            /** @description Type of the sandbox to use for the node (e.g. 'gvisor'). */
            sandboxType: string;
          };
          serviceAccountRef?: {
            /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Shielded Instance options. */
          shieldedInstanceConfig?: {
            /** @description Immutable. Defines whether the instance has integrity monitoring enabled. */
            enableIntegrityMonitoring?: boolean;
            /** @description Immutable. Defines whether the instance has Secure Boot enabled. */
            enableSecureBoot?: boolean;
          };
          /** @description Immutable. Node affinity options for sole tenant node pools. */
          soleTenantConfig?: {
            /** @description Immutable. . */
            nodeAffinity: {
              /** @description Immutable. . */
              key: string;
              /** @description Immutable. . */
              operator: string;
              /** @description Immutable. . */
              values: string[];
            }[];
          };
          /** @description Immutable. Whether the nodes are created as spot VM instances. */
          spot?: boolean;
          /** @description The list of instance tags applied to all nodes. */
          tags?: string[];
          /** @description List of Kubernetes taints to be applied to each node. */
          taint?: {
            /** @description Effect for taint. */
            effect: string;
            /** @description Key for taint. */
            key: string;
            /** @description Value for taint. */
            value: string;
          }[];
          /** @description The workload metadata configuration for this node. */
          workloadMetadataConfig?: {
            /** @description Mode is the configuration for how to expose metadata to workloads running on the node. */
            mode?: string;
            /** @description DEPRECATED. Deprecated in favor of mode. NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
            nodeMetadata?: string;
          };
        };
        /** @description The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling. */
        nodeCount?: number;
        /** @description The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used. */
        nodeLocations?: string[];
        /** @description Immutable. Specifies the node placement policy. */
        placementPolicy?: {
          /** @description Immutable. If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. */
          policyNameRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies. */
          tpuTopology?: string;
          /** @description Type defines the type of placement policy. */
          type: string;
        };
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20. */
        upgradeSettings?: {
          /** @description Settings for BlueGreen node pool upgrade. */
          blueGreenSettings?: {
            /** @description Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. */
            nodePoolSoakDuration?: string;
            /** @description Standard rollout policy is the default policy for blue-green. */
            standardRolloutPolicy: {
              /** @description Number of blue nodes to drain in a batch. */
              batchNodeCount?: number;
              /** @description Percentage of the blue pool nodes to drain in a batch. */
              batchPercentage?: number;
              /** @description Soak time after each batch gets drained. */
              batchSoakDuration?: string;
            };
          };
          /** @description The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater. */
          maxSurge?: number;
          /** @description The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater. */
          maxUnavailable?: number;
          /** @description Update strategy for the given nodepool. */
          strategy?: string;
        };
        version?: string;
      };
      status?: {
        /** @description Conditions represent the latest available observation of the resource's current state. */
        conditions?: {
          /** @description Last time the condition transitioned from one status to another. */
          lastTransitionTime?: string;
          /** @description Human-readable message indicating details about last transition. */
          message?: string;
          /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
          reason?: string;
          /** @description Status is the status of the condition. Can be True, False, Unknown. */
          status?: string;
          /** @description Type is the type of the condition. */
          type?: string;
        }[];
        /** @description The resource URLs of the managed instance groups associated with this node pool. */
        instanceGroupUrls?: string[];
        /** @description List of instance group URLs which have been assigned to this node pool. */
        managedInstanceGroupUrls?: string[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The observed state of the underlying GCP resource. */
        observedState?: {
          version?: string;
        };
        operation?: string;
      };
    };
  };
}
