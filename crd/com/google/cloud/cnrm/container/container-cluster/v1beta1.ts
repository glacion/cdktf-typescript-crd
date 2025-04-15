import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesContainerClusterV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesContainerClusterV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesContainerClusterV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "container.cnrm.cloud.google.com/v1beta1";
    kind: "ContainerCluster";
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
      /** @description The configuration for addons supported by GKE. */
      addonsConfig?: {
        /** @description The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable. */
        cloudrunConfig?: {
          disabled: boolean;
          loadBalancerType?: string;
        };
        /** @description The of the Config Connector addon. */
        configConnectorConfig?: {
          enabled: boolean;
        };
        /** @description The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable. */
        dnsCacheConfig?: {
          enabled: boolean;
        };
        /** @description Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later. */
        gcePersistentDiskCsiDriverConfig?: {
          enabled: boolean;
        };
        /** @description The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable. */
        gcpFilestoreCsiDriverConfig?: {
          enabled: boolean;
        };
        /** @description The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable. */
        gcsFuseCsiDriverConfig?: {
          enabled: boolean;
        };
        /** @description The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable. */
        gkeBackupAgentConfig?: {
          enabled: boolean;
        };
        /** @description The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable. */
        horizontalPodAutoscaling?: {
          disabled: boolean;
        };
        /** @description The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable. */
        httpLoadBalancing?: {
          disabled: boolean;
        };
        /** @description The status of the Istio addon. */
        istioConfig?: {
          /** @description The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS. */
          auth?: string;
          /** @description The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable. */
          disabled: boolean;
        };
        /** @description Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable. */
        kalmConfig?: {
          enabled: boolean;
        };
        /** @description Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable. */
        networkPolicyConfig?: {
          disabled: boolean;
        };
      };
      /** @description Enable NET_ADMIN for this cluster. */
      allowNetAdmin?: boolean;
      /** @description Configuration for the Google Groups for GKE feature. */
      authenticatorGroupsConfig?: {
        /** @description The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com. */
        securityGroup: string;
      };
      /** @description Configuration options for the Binary Authorization feature. */
      binaryAuthorization?: {
        /** @description DEPRECATED. Deprecated in favor of evaluation_mode. Enable Binary Authorization for this cluster. */
        enabled?: boolean;
        /** @description Mode of operation for Binary Authorization policy evaluation. */
        evaluationMode?: string;
      };
      /** @description Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs of the cluster's workload. See the guide to using Node Auto-Provisioning for more details. */
      clusterAutoscaling?: {
        /** @description Contains defaults for a node pool created by NAP. */
        autoProvisioningDefaults?: {
          /** @description Immutable. The Customer Managed Encryption Key used to encrypt the
           *     boot disk attached to each node in the node pool. */
          bootDiskKMSKeyRef?: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. */
          diskSize?: number;
          /** @description The default image type used by NAP once a new node pool is being created. */
          imageType?: string;
          /** @description NodeManagement configuration for this NodePool. */
          management?: {
            /** @description Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered. */
            autoRepair?: boolean;
            /** @description Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes. */
            autoUpgrade?: boolean;
            /** @description Specifies the Auto Upgrade knobs for the node pool. */
            upgradeOptions?: {
              /** @description This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format. */
              autoUpgradeStartTime?: string;
              /** @description This field is set when upgrades are about to commence with the description of the upgrade. */
              description?: string;
            }[];
          };
          /** @description Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell. */
          minCpuPlatform?: string;
          /** @description Scopes that are used by NAP when creating node pools. */
          oauthScopes?: string[];
          serviceAccountRef?: {
            /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Shielded Instance options. */
          shieldedInstanceConfig?: {
            /** @description Defines whether the instance has integrity monitoring enabled. */
            enableIntegrityMonitoring?: boolean;
            /** @description Defines whether the instance has Secure Boot enabled. */
            enableSecureBoot?: boolean;
          };
          /** @description Specifies the upgrade settings for NAP created node pools. */
          upgradeSettings?: {
            /** @description Settings for blue-green upgrade strategy. */
            blueGreenSettings?: {
              /** @description Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
               *
               *     																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". */
              nodePoolSoakDuration?: string;
              /** @description Standard policy for the blue-green upgrade. */
              standardRolloutPolicy?: {
                /** @description Number of blue nodes to drain in a batch. */
                batchNodeCount?: number;
                /** @description Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. */
                batchPercentage?: number;
                /** @description Soak time after each batch gets drained.
                 *
                 *     																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". */
                batchSoakDuration?: string;
              };
            };
            /** @description The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. */
            maxSurge?: number;
            /** @description The maximum number of nodes that can be simultaneously unavailable during the upgrade process. */
            maxUnavailable?: number;
            /** @description Update strategy of the node pool. */
            strategy?: string;
          };
        };
        /** @description Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED. */
        autoscalingProfile?: string;
        /** @description Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning. */
        enabled?: boolean;
        /** @description Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning. */
        resourceLimits?: {
          /** @description Maximum amount of the resource in the cluster. */
          maximum?: number;
          /** @description Minimum amount of the resource in the cluster. */
          minimum?: number;
          /** @description The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types. */
          resourceType: string;
        }[];
      };
      /** @description Immutable. The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined. */
      clusterIpv4Cidr?: string;
      /** @description Telemetry integration for the cluster. */
      clusterTelemetry?: {
        /** @description Type of the integration. */
        type: string;
      };
      /** @description Immutable. Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after cluster creation without deleting and recreating the entire cluster. */
      confidentialNodes?: {
        /** @description Immutable. Whether Confidential Nodes feature is enabled for all nodes in this cluster. */
        enabled: boolean;
      };
      /** @description Cost management configuration for the cluster. */
      costManagementConfig?: {
        /** @description Whether to enable GKE cost allocation. When you enable GKE cost allocation, the cluster name and namespace of your GKE workloads appear in the labels field of the billing export to BigQuery. Defaults to false. */
        enabled: boolean;
      };
      /** @description Application-layer Secrets Encryption settings. The object format is {state = string, key_name = string}. Valid values of state are: "ENCRYPTED"; "DECRYPTED". key_name is the name of a CloudKMS key. */
      databaseEncryption?: {
        /** @description The key to use to encrypt/decrypt secrets. */
        keyName?: string;
        /** @description ENCRYPTED or DECRYPTED. */
        state: string;
      };
      /** @description Immutable. The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
      datapathProvider?: string;
      /** @description Immutable. The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled. */
      defaultMaxPodsPerNode?: number;
      /** @description Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when defaultSnatStatus is disabled. */
      defaultSnatStatus?: {
        /** @description When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. */
        disabled: boolean;
      };
      /** @description Immutable.  Description of the cluster. */
      description?: string;
      /** @description Immutable. Configuration for Cloud DNS for Kubernetes Engine. */
      dnsConfig?: {
        /** @description Which in-cluster DNS provider should be used. */
        clusterDns?: string;
        /** @description The suffix used for all cluster service records. */
        clusterDnsDomain?: string;
        /** @description The scope of access to cluster DNS records. */
        clusterDnsScope?: string;
      };
      /** @description Immutable. Enable Autopilot for this cluster. */
      enableAutopilot?: boolean;
      /** @description DEPRECATED. Deprecated in favor of binary_authorization. Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binary Authorization. */
      enableBinaryAuthorization?: boolean;
      /** @description Whether FQDN Network Policy is enabled on this cluster. */
      enableFqdnNetworkPolicy?: boolean;
      /** @description Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
      enableIntranodeVisibility?: boolean;
      /** @description Configuration for Kubernetes Beta APIs. */
      enableK8sBetaApis?: {
        /** @description Enabled Kubernetes Beta APIs. */
        enabledApis: string[];
      };
      /** @description Immutable. Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days. */
      enableKubernetesAlpha?: boolean;
      /** @description Whether L4ILB Subsetting is enabled for this cluster. */
      enableL4IlbSubsetting?: boolean;
      /** @description Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false. */
      enableLegacyAbac?: boolean;
      /** @description Immutable. Whether multi-networking is enabled for this cluster. */
      enableMultiNetworking?: boolean;
      /** @description Enable Shielded Nodes features on all nodes in this cluster. Defaults to true. */
      enableShieldedNodes?: boolean;
      /** @description Immutable. Whether to enable Cloud TPU resources in this cluster. */
      enableTpu?: boolean;
      /** @description Configuration for GKE Gateway API controller. */
      gatewayApiConfig?: {
        /** @description The Gateway API release channel to use for Gateway API. */
        channel: string;
      };
      /** @description Configuration for Identity Service which allows customers to use external identity providers with the K8S API. */
      identityServiceConfig?: {
        /** @description Whether to enable the Identity Service component. */
        enabled?: boolean;
      };
      /** @description Immutable. The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true. */
      initialNodeCount?: number;
      /** @description Immutable. Configuration of cluster IP allocation for VPC-native clusters. Adding this block enables IP aliasing, making the cluster VPC-native instead of routes-based. */
      ipAllocationPolicy?: {
        /** @description AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
        additionalPodRangesConfig?: {
          /** @description Name for pod secondary ipv4 range which has the actual range defined ahead. */
          podRangeNames: string[];
        };
        /** @description Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
        clusterIpv4CidrBlock?: string;
        /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one. */
        clusterSecondaryRangeName?: string;
        /** @description Immutable. Configuration for cluster level pod cidr overprovision. Default is disabled=false. */
        podCidrOverprovisionConfig?: {
          disabled: boolean;
        };
        /** @description Immutable. The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
        servicesIpv4CidrBlock?: string;
        /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one. */
        servicesSecondaryRangeName?: string;
        /** @description Immutable. The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set. */
        stackType?: string;
      };
      /** @description Immutable. The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well. */
      location: string;
      /** @description Logging configuration for the cluster. */
      loggingConfig?: {
        /** @description GKE components exposing logs. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, SCHEDULER, and WORKLOADS. */
        enableComponents: string[];
      };
      /** @description The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes. */
      loggingService?: string;
      /** @description The maintenance policy to use for the cluster. */
      maintenancePolicy?: {
        /** @description Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT. */
        dailyMaintenanceWindow?: {
          duration?: string;
          startTime: string;
        };
        /** @description Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. */
        maintenanceExclusion?: {
          endTime: string;
          exclusionName: string;
          /** @description Maintenance exclusion related options. */
          exclusionOptions?: {
            /** @description The scope of automatic upgrades to restrict in the exclusion window. */
            scope: string;
          };
          startTime: string;
        }[];
        /** @description Time window for recurring maintenance operations. */
        recurringWindow?: {
          endTime: string;
          recurrence: string;
          startTime: string;
        };
      };
      /** @description DEPRECATED. Basic authentication was removed for GKE cluster versions >= 1.19. The authentication information for accessing the Kubernetes master. Some values in this block are only returned by the API if your service account has permission to get credentials for your GKE cluster. If you see an unexpected diff unsetting your client cert, ensure you have the container.clusters.getCredentials permission. */
      masterAuth?: {
        /** @description Base64 encoded public certificate used by clients to authenticate to the cluster endpoint. */
        clientCertificate?: string;
        /** @description Immutable. Whether client certificate authorization is enabled for this cluster. */
        clientCertificateConfig?: {
          /** @description Immutable. Whether client certificate authorization is enabled for this cluster. */
          issueClientCertificate: boolean;
        };
        /** @description Base64 encoded private key used by clients to authenticate to the cluster endpoint. */
        clientKey?: string;
        /** @description Base64 encoded public certificate that is the root of trust for the cluster. */
        clusterCaCertificate?: string;
        /** @description The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. */
        password?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. If not present basic auth will be disabled. */
        username?: string;
      };
      /** @description The desired configuration options for master authorized networks. Omit the nested cidr_blocks attribute to disallow external access (except the cluster node IPs, which GKE automatically whitelists). */
      masterAuthorizedNetworksConfig?: {
        /** @description External networks that can access the Kubernetes cluster master through HTTPS. */
        cidrBlocks?: {
          /** @description External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation. */
          cidrBlock: string;
          /** @description Field for users to identify CIDR blocks. */
          displayName?: string;
        }[];
        /** @description Whether master is accessbile via Google Compute Engine Public IP addresses. */
        gcpPublicCidrsAccessEnabled?: boolean;
      };
      /** @description If set, and enable_certificates=true, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster. */
      meshCertificates?: {
        /** @description When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster. */
        enableCertificates: boolean;
      };
      /** @description The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version). */
      minMasterVersion?: string;
      /** @description Monitoring configuration for the cluster. */
      monitoringConfig?: {
        /** @description Configuration of Advanced Datapath Observability features. */
        advancedDatapathObservabilityConfig?: {
          /** @description Whether or not the advanced datapath metrics are enabled. */
          enableMetrics: boolean;
          /** @description Mode used to make Relay available. */
          relayMode?: string;
        }[];
        /** @description GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS. */
        enableComponents?: string[];
        /** @description Configuration for Google Cloud Managed Services for Prometheus. */
        managedPrometheus?: {
          /** @description Whether or not the managed collection is enabled. */
          enabled: boolean;
        };
      };
      /** @description The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes. */
      monitoringService?: string;
      /** @description Configuration options for the NetworkPolicy feature. */
      networkPolicy?: {
        /** @description Whether network policy is enabled on the cluster. */
        enabled: boolean;
        /** @description The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED. */
        provider?: string;
      };
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Determines whether alias IPs or routes will be used for pod IPs in the cluster. */
      networkingMode?: string;
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
        /** @description Immutable. The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. */
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
        /** @description Immutable. The workload metadata configuration for this node. */
        workloadMetadataConfig?: {
          /** @description Mode is the configuration for how to expose metadata to workloads running on the node. */
          mode?: string;
          /** @description DEPRECATED. Deprecated in favor of mode. NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
          nodeMetadata?: string;
        };
      };
      /** @description The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone. */
      nodeLocations?: string[];
      /** @description Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. */
      nodePoolAutoConfig?: {
        /** @description Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. */
        networkTags?: {
          /** @description List of network tags applied to auto-provisioned node pools. */
          tags?: string[];
        };
      };
      /** @description The default nodel pool settings for the entire cluster. */
      nodePoolDefaults?: {
        /** @description Subset of NodeConfig message that has defaults. */
        nodeConfigDefaults?: {
          /** @description GCFS configuration for this node. */
          gcfsConfig?: {
            /** @description Whether or not GCFS is enabled. */
            enabled: boolean;
          };
          /** @description Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT. */
          loggingVariant?: string;
        };
      };
      nodeVersion?: string;
      /** @description The notification config for sending cluster upgrade notifications. */
      notificationConfig?: {
        /** @description Notification config for Cloud Pub/Sub. */
        pubsub: {
          /** @description Whether or not the notification config is enabled. */
          enabled: boolean;
          /** @description Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent. */
          filter?: {
            /** @description Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT and SECURITY_BULLETIN_EVENT. */
            eventType: string[];
          };
          /** @description The PubSubTopic to send the notification to. */
          topicRef?: {
            /** @description Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
      /** @description Configuration for the PodSecurityPolicy feature. */
      podSecurityPolicyConfig?: {
        /** @description Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
        enabled: boolean;
      };
      /** @description Configuration for private clusters, clusters with private nodes. */
      privateClusterConfig?: {
        /** @description When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. */
        enablePrivateEndpoint?: boolean;
        /** @description Immutable. Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking. */
        enablePrivateNodes?: boolean;
        /** @description Controls cluster master global access settings. */
        masterGlobalAccessConfig?: {
          /** @description Whether the cluster master is accessible globally or not. */
          enabled: boolean;
        };
        /** @description Immutable. The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true. */
        masterIpv4CidrBlock?: string;
        /** @description The name of the peering between this cluster and the Google owned VPC. */
        peeringName?: string;
        /** @description The internal IP address of this cluster's master endpoint. */
        privateEndpoint?: string;
        /** @description Immutable. Subnetwork in cluster's network where master's endpoint
         *     will be provisioned. */
        privateEndpointSubnetworkRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The external IP address of this cluster's master endpoint. */
        publicEndpoint?: string;
      };
      /** @description The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4). */
      privateIpv6GoogleAccess?: string;
      /** @description Enable/Disable Protect API features for the cluster. */
      protectConfig?: {
        /** @description WorkloadConfig defines which actions are enabled for a cluster's workload configurations. */
        workloadConfig?: {
          /** @description Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC. */
          auditMode: string;
        };
        /** @description Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC. */
        workloadVulnerabilityMode?: string;
      };
      /** @description Configuration options for the Release channel feature, which provide more control over automatic upgrades of your GKE clusters. Note that removing this field from your config will not unenroll it. Instead, use the "UNSPECIFIED" channel. */
      releaseChannel?: {
        /** @description The selected release channel. Accepted values are:
         *     * UNSPECIFIED: Not set.
         *     * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
         *     * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
         *     * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky. */
        channel: string;
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Configuration for the ResourceUsageExportConfig feature. */
      resourceUsageExportConfig?: {
        /** @description Parameters for using BigQuery as the destination of resource usage export. */
        bigqueryDestination: {
          /** @description The ID of a BigQuery Dataset. */
          datasetId: string;
        };
        /** @description Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
        enableNetworkEgressMetering?: boolean;
        /** @description Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true. */
        enableResourceConsumptionMetering?: boolean;
      };
      /** @description Defines the config needed to enable/disable features for the Security Posture API. */
      securityPostureConfig?: {
        /** @description Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED and BASIC. */
        mode?: string;
        /** @description Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED and VULNERABILITY_BASIC. */
        vulnerabilityMode?: string;
      };
      /** @description If set, and enabled=true, services with external ips field will not be blocked. */
      serviceExternalIpsConfig?: {
        /** @description When enabled, services with exterenal ips specified will be allowed. */
        enabled: boolean;
      };
      subnetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it. */
      verticalPodAutoscaling?: {
        /** @description Enables vertical pod autoscaling. */
        enabled: boolean;
      };
      /** @description Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. */
      workloadIdentityConfig?: {
        /** @description DEPRECATED. This field will be removed in a future major release as it has been deprecated in the API. Use `workloadPool` instead; `workloadPool` field will supersede this field.
         *     Enables workload identity. */
        identityNamespace?: string;
        /** @description The workload pool to attach all Kubernetes service accounts to. */
        workloadPool?: string;
      };
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
      /** @description The IP address of this cluster's Kubernetes master. */
      endpoint?: string;
      /** @description The fingerprint of the set of labels for this cluster. */
      labelFingerprint?: string;
      /** @description The current version of the master in the cluster. This may be different than the min_master_version set in the config if the master has been updated by GKE. */
      masterVersion?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description DEPRECATED. Basic authentication was removed for GKE cluster versions >= 1.19. The authentication information for accessing the Kubernetes master. Some values in this block are only returned by the API if your service account has permission to get credentials for your GKE cluster. If you see an unexpected diff unsetting your client cert, ensure you have the container.clusters.getCredentials permission. */
        masterAuth?: {
          /** @description Base64 encoded public certificate used by clients to authenticate to the cluster endpoint. */
          clientCertificate?: string;
          /** @description Base64 encoded public certificate that is the root of trust for the cluster. */
          clusterCaCertificate?: string;
        };
        /** @description Configuration for private clusters, clusters with private nodes. */
        privateClusterConfig?: {
          /** @description The internal IP address of this cluster's master endpoint. */
          privateEndpoint?: string;
          /** @description The external IP address of this cluster's master endpoint. */
          publicEndpoint?: string;
        };
      };
      operation?: string;
      /** @description Server-defined URL for the resource. */
      selfLink?: string;
      /** @description The IP address range of the Kubernetes services in this cluster, in CIDR notation (e.g. 1.2.3.4/29). Service addresses are typically put in the last /16 from the container CIDR. */
      servicesIpv4Cidr?: string;
      /** @description The IP address range of the Cloud TPUs in this cluster, in CIDR notation (e.g. 1.2.3.4/29). */
      tpuIpv4CidrBlock?: string;
    };
  };
}
