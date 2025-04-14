import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataprocClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataprocClusterV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dataproc.cnrm.cloud.google.com/v1beta1", kind: "DataprocCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataprocClusterV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The cluster config. Note that Dataproc may set default values, and values may change when clusters are updated. */
      config?: {
        /** @description Immutable. Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset. */
        autoscalingConfig?: {
          /** @description Immutable. */
          policyRef?: {
            /** @description Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` * `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
             *
             *     Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Optional. The config for Dataproc metrics. */
        dataprocMetricConfig?: {
          /** @description Immutable. Required. Metrics sources to enable. */
          metrics: {
            /** @description Immutable. Optional. Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course (for the `SPARK` metric source, any [Spark metric] (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified). Provide metrics in the following format: `METRIC_SOURCE:INSTANCE:GROUP:METRIC` Use camelcase as appropriate. Examples: ``` yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used ``` Notes: * Only the specified overridden metrics will be collected for the metric source. For example, if one or more `spark:executive` metrics are listed as metric overrides, other `SPARK` metrics will not be collected. The collection of the default metrics for other OSS metric sources is unaffected. For example, if both `SPARK` andd `YARN` metric sources are enabled, and overrides are provided for Spark metrics only, all default YARN metrics will be collected. */
            metricOverrides?: string[];
            /** @description Immutable. Required. Default metrics are collected unless `metricOverrides` are specified for the metric source (see [Available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information). Possible values: METRIC_SOURCE_UNSPECIFIED, MONITORING_AGENT_DEFAULTS, HDFS, SPARK, YARN, SPARK_HISTORY_SERVER, HIVESERVER2 */
            metricSource: string;
          }[];
        };
        /** @description Immutable. Optional. Encryption settings for the cluster. */
        encryptionConfig?: {
          /** @description Immutable. */
          gcePdKmsKeyRef?: {
            /** @description Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
             *
             *     Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Optional. Port/endpoint configuration for this cluster */
        endpointConfig?: {
          /** @description Immutable. Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. */
          enableHttpPortAccess?: boolean;
        };
        /** @description Immutable. Optional. The shared Compute Engine config settings for all instances in a cluster. */
        gceClusterConfig?: {
          /** @description Immutable. Optional. Confidential Instance Config for clusters using [Confidential VMs](https://cloud.google.com/compute/confidential-vm/docs). */
          confidentialInstanceConfig?: {
            /** @description Immutable. Optional. Defines whether the instance should have confidential compute enabled. */
            enableConfidentialCompute?: boolean;
          };
          /** @description Immutable. Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses. */
          internalIPOnly?: boolean;
          /** @description Immutable. The Compute Engine metadata entries to add to all instances (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
          metadata?: {
            [key: string]: string;
          };
          /** @description Immutable. */
          networkRef?: {
            /** @description Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` * `projects/[project_id]/regions/global/default` * `default`
             *
             *     Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Optional. Node Group Affinity for sole-tenant clusters. */
          nodeGroupAffinity?: {
            /** @description Immutable. */
            nodeGroupRef: {
              /** @description Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`
               *
               *     Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Immutable. Optional. The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL */
          privateIPv6GoogleAccess?: string;
          /** @description Immutable. Optional. Reservation Affinity for consuming Zonal reservation. */
          reservationAffinity?: {
            /** @description Immutable. Optional. Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION */
            consumeReservationType?: string;
            /** @description Immutable. Optional. Corresponds to the label key of reservation resource. */
            key?: string;
            /** @description Immutable. Optional. Corresponds to the label values of reservation resource. */
            values?: string[];
          };
          /** @description Immutable. */
          serviceAccountRef?: {
            /** @description Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
             *
             *     Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control */
          serviceAccountScopes?: string[];
          /** @description Immutable. Optional. Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). */
          shieldedInstanceConfig?: {
            /** @description Immutable. Optional. Defines whether instances have integrity monitoring enabled. */
            enableIntegrityMonitoring?: boolean;
            /** @description Immutable. Optional. Defines whether instances have Secure Boot enabled. */
            enableSecureBoot?: boolean;
            /** @description Immutable. Optional. Defines whether instances have the vTPM enabled. */
            enableVtpm?: boolean;
          };
          /** @description Immutable. */
          subnetworkRef?: {
            /** @description Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` * `sub0`
             *
             *     Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The Compute Engine tags to add to all instances (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
          tags?: string[];
          /** @description Immutable. Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]` * `projects/[project_id]/zones/[zone]` * `us-central1-f` */
          zone?: string;
        };
        /** @description Immutable. Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi */
        initializationActions?: {
          /** @description Immutable. Required. Cloud Storage URI of executable file. */
          executableFile: string;
          /** @description Immutable. Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
          executionTimeout?: string;
        }[];
        /** @description Immutable. Optional. Lifecycle setting for the cluster. */
        lifecycleConfig?: {
          /**
           * Format: date-time
           * @description Immutable. Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
           */
          autoDeleteTime?: string;
          /** @description Immutable. Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). */
          autoDeleteTtl?: string;
          /** @description Immutable. Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). */
          idleDeleteTtl?: string;
        };
        /** @description Immutable. Optional. The Compute Engine config settings for the master instance in a cluster. */
        masterConfig?: {
          /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
          accelerators?: {
            /**
             * Format: int64
             * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
             */
            acceleratorCount?: number;
            /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
            acceleratorType?: string;
          }[];
          /** @description Immutable. Optional. Disk option config settings. */
          diskConfig?: {
            /**
             * Format: int64
             * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
             */
            bootDiskSizeGb?: number;
            /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
            bootDiskType?: string;
            /** @description Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
            localSsdInterface?: string;
            /**
             * Format: int64
             * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
             */
            numLocalSsds?: number;
          };
          /** @description Immutable. */
          imageRef?: {
            /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
             *
             *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
          machineType?: string;
          /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
          minCpuPlatform?: string;
          /**
           * Format: int64
           * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
           */
          numInstances?: number;
          /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
          preemptibility?: string;
        };
        /** @description Immutable. Optional. Metastore configuration. */
        metastoreConfig?: {
          /** @description Immutable. */
          dataprocMetastoreServiceRef: {
            /** @description Required. Resource name of an existing Dataproc Metastore service. Example: * `projects/[project_id]/locations/[dataproc_region]/services/[service-name]` */
            external?: string;
            /** @description [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
             *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Optional. The Compute Engine config settings for additional worker instances in a cluster. */
        secondaryWorkerConfig?: {
          /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
          accelerators?: {
            /**
             * Format: int64
             * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
             */
            acceleratorCount?: number;
            /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
            acceleratorType?: string;
          }[];
          /** @description Immutable. Optional. Disk option config settings. */
          diskConfig?: {
            /**
             * Format: int64
             * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
             */
            bootDiskSizeGb?: number;
            /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
            bootDiskType?: string;
            /** @description Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
            localSsdInterface?: string;
            /**
             * Format: int64
             * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
             */
            numLocalSsds?: number;
          };
          /** @description Immutable. */
          imageRef?: {
            /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
             *
             *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
          machineType?: string;
          /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
          minCpuPlatform?: string;
          /**
           * Format: int64
           * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
           */
          numInstances?: number;
          /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
          preemptibility?: string;
        };
        /** @description Immutable. Optional. Security settings for the cluster. */
        securityConfig?: {
          /** @description Immutable. Optional. Identity related configuration, including service account based secure multi-tenancy user mappings. */
          identityConfig?: {
            /** @description Immutable. Required. Map of user to service account. */
            userServiceAccountMapping: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Optional. Kerberos related configuration. */
          kerberosConfig?: {
            /** @description Immutable. Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
            crossRealmTrustAdminServer?: string;
            /** @description Immutable. Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
            crossRealmTrustKdc?: string;
            /** @description Immutable. Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
            crossRealmTrustRealm?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
            crossRealmTrustSharedPassword?: string;
            /** @description Immutable. Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster. */
            enableKerberos?: boolean;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
            kdcDbKey?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
            keyPassword?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
            keystore?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc. */
            keystorePassword?: string;
            /** @description Immutable. */
            kmsKeyRef?: {
              /** @description Optional. The uri of the KMS key used to encrypt various sensitive files.
               *
               *     Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
            realm?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
            rootPrincipalPassword?: string;
            /**
             * Format: int64
             * @description Immutable. Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
             */
            tgtLifetimeHours?: number;
            /** @description Immutable. Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
            truststore?: string;
            /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
            truststorePassword?: string;
          };
        };
        /** @description Immutable. Optional. The config settings for software inside the cluster. */
        softwareConfig?: {
          /** @description Immutable. Optional. The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
          imageVersion?: string;
          /** @description Immutable. Optional. The set of components to activate on the cluster. */
          optionalComponents?: string[];
          /** @description Immutable. Optional. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings: * capacity-scheduler: `capacity-scheduler.xml` * core: `core-site.xml` * distcp: `distcp-default.xml` * hdfs: `hdfs-site.xml` * hive: `hive-site.xml` * mapred: `mapred-site.xml` * pig: `pig.properties` * spark: `spark-defaults.conf` * yarn: `yarn-site.xml` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
          properties?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. */
        stagingBucketRef?: {
          /** @description Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
           *
           *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. */
        tempBucketRef?: {
          /** @description Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
           *
           *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The Compute Engine config settings for worker instances in a cluster. */
        workerConfig?: {
          /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
          accelerators?: {
            /**
             * Format: int64
             * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
             */
            acceleratorCount?: number;
            /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
            acceleratorType?: string;
          }[];
          /** @description Immutable. Optional. Disk option config settings. */
          diskConfig?: {
            /**
             * Format: int64
             * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
             */
            bootDiskSizeGb?: number;
            /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
            bootDiskType?: string;
            /** @description Immutable. Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See [local SSD performance](https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
            localSsdInterface?: string;
            /**
             * Format: int64
             * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
             */
            numLocalSsds?: number;
          };
          /** @description Immutable. */
          imageRef?: {
            /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
             *
             *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
          machineType?: string;
          /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
          minCpuPlatform?: string;
          /**
           * Format: int64
           * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
           */
          numInstances?: number;
          /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
          preemptibility?: string;
        };
      };
      /** @description Immutable. The location for the resource, usually a GCP region. */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef?: {
        /** @description Required. The Google Cloud Platform project ID that the cluster belongs to.
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Optional. The virtual cluster config is used when creating a Dataproc cluster that does not directly control the underlying compute resources, for example, when creating a [Dataproc-on-GKE cluster](https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke). Dataproc may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified. */
      virtualClusterConfig?: {
        /** @description Immutable. Optional. Configuration of auxiliary services used by this cluster. */
        auxiliaryServicesConfig?: {
          /** @description Immutable. Optional. The Hive Metastore configuration for this workload. */
          metastoreConfig?: {
            /** @description Immutable. */
            dataprocMetastoreServiceRef: {
              /** @description Required. Resource name of an existing Dataproc Metastore service. Example: * `projects/[project_id]/locations/[dataproc_region]/services/[service-name]` */
              external?: string;
              /** @description [WARNING] DataprocMetastoreService not yet supported in Config Connector, use 'external' field to reference existing resources.
               *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Immutable. Optional. The Spark History Server configuration for the workload. */
          sparkHistoryServerConfig?: {
            /** @description Immutable. */
            dataprocClusterRef?: {
              /** @description Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. Example: * `projects/[project_id]/regions/[region]/clusters/[cluster_name]`
               *
               *     Allowed value: The `selfLink` field of a `DataprocCluster` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
        };
        /** @description Immutable. Required. The configuration for running the Dataproc cluster on Kubernetes. */
        kubernetesClusterConfig: {
          /** @description Immutable. Required. The configuration for running the Dataproc cluster on GKE. */
          gkeClusterConfig: {
            /** @description Immutable. */
            gkeClusterTargetRef?: {
              /** @description Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
               *
               *     Allowed value: The `selfLink` field of a `ContainerCluster` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the `DEFAULT` GkeNodePoolTarget.Role. If a `GkeNodePoolTarget` is not specified, Dataproc constructs a `DEFAULT` `GkeNodePoolTarget`. Each role can be given to only one `GkeNodePoolTarget`. All node pools must have the same location settings. */
            nodePoolTarget?: {
              /** @description Immutable. Input only. The configuration for the GKE node pool. If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail. If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values. This is an input only field. It will not be returned by the API. */
              nodePoolConfig?: {
                /** @description Immutable. Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present. */
                autoscaling?: {
                  /**
                   * Format: int64
                   * @description Immutable. The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. **Note:** Quota must be sufficient to scale up the cluster.
                   */
                  maxNodeCount?: number;
                  /**
                   * Format: int64
                   * @description Immutable. The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count.
                   */
                  minNodeCount?: number;
                };
                /** @description Immutable. Optional. The node pool configuration. */
                config?: {
                  /** @description Immutable. Optional. A list of [hardware accelerators](https://cloud.google.com/compute/docs/gpus) to attach to each node. */
                  accelerators?: {
                    /**
                     * Format: int64
                     * @description Immutable. The number of accelerator cards exposed to an instance.
                     */
                    acceleratorCount?: number;
                    /** @description Immutable. The accelerator type resource namename (see GPUs on Compute Engine). */
                    acceleratorType?: string;
                    /** @description Immutable. Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
                    gpuPartitionSize?: string;
                  }[];
                  /** @description Immutable. Optional. The [Customer Managed Encryption Key (CMEK)] (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: `projects/KEY_PROJECT_ID/locations/LOCATION/keyRings/RING_NAME/cryptoKeys/KEY_NAME`. */
                  bootDiskKmsKey?: string;
                  /** @description Immutable. Optional. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk. */
                  ephemeralStorageConfig?: {
                    /**
                     * Format: int64
                     * @description Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.
                     */
                    localSsdCount?: number;
                  };
                  /**
                   * Format: int64
                   * @description Immutable. Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see [Adding Local SSDs](https://cloud.google.com/compute/docs/disks/local-ssd)).
                   */
                  localSsdCount?: number;
                  /** @description Immutable. Optional. The name of a Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). */
                  machineType?: string;
                  /** @description Immutable. Optional. [Minimum CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge". */
                  minCpuPlatform?: string;
                  /** @description Immutable. Optional. Whether the nodes are created as legacy [preemptible VM instances] (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the `CONTROLLER` [role] (/dataproc/docs/reference/rest/v1/projects.regions.clusters#role) or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
                  preemptible?: boolean;
                  /** @description Immutable. Optional. Whether the nodes are created as [Spot VM instances] (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the `CONTROLLER` [role](/dataproc/docs/reference/rest/v1/projects.regions.clusters#role) or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
                  spot?: boolean;
                };
                /** @description Immutable. Optional. The list of Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located. **Note:** All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region. If a location is not specified during node pool creation, Dataproc on GKE will choose the zone. */
                locations?: string[];
              };
              /** @description Immutable. */
              nodePoolRef: {
                /** @description Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
                 *
                 *     Allowed value: The `selfLink` field of a `ContainerNodePool` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Required. The roles associated with the GKE node pool. */
              roles: string[];
            }[];
          };
          /** @description Immutable. Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used. */
          kubernetesNamespace?: string;
          /** @description Immutable. Optional. The software configuration for this Dataproc cluster running on Kubernetes. */
          kubernetesSoftwareConfig?: {
            /** @description Immutable. The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified. */
            componentVersion?: {
              [key: string]: string;
            };
            /** @description Immutable. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `spark:spark.kubernetes.container.image`. The following are supported prefixes and their mappings: * spark: `spark-defaults.conf` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
            properties?: {
              [key: string]: string;
            };
          };
        };
        /** @description Immutable. */
        stagingBucketRef?: {
          /** @description Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging and temp buckets](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). **This field requires a Cloud Storage bucket name, not a `gs://...` URI to a Cloud Storage bucket.**
           *
           *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
    };
  };
}
