import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAlloyDBClusterV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAlloyDBClusterV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "alloydb.cnrm.cloud.google.com/v1alpha1", kind: "AlloyDBCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAlloyDBClusterV1alpha1Config extends ManifestConfig {
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
    /** @description AlloyDBCluster is the Schema for the AlloyDBCluster API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AlloyDBClusterSpec defines the desired state of AlloyDBCluster */
      spec: {
        /** @description The automated backup policy for this cluster.
         *
         *      If no policy is provided then the default policy will be used. If backups
         *      are supported for the cluster, the default policy takes one backup a day,
         *      has a backup window of 1 hour, and retains backups for 14 days.
         *      For more information on the defaults, consult the
         *      documentation for the message type. */
        automatedBackupPolicy?: {
          /** @description The length of the time window during which a backup can be
           *      taken. If a backup does not succeed within this time window, it will be
           *      canceled and considered failed.
           *
           *      The backup window must be at least 5 minutes long. There is no upper bound
           *      on the window. If not set, it defaults to 1 hour. */
          backupWindow?: string;
          /** @description Whether automated automated backups are enabled. If not set, defaults to true. */
          enabled?: boolean;
          /** @description Optional. The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will then use default encryption scheme to protect the user data. */
          encryptionConfig?: {
            /** @description The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
            kmsKeyNameRef?: {
              /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
              external?: string;
              /** @description The `name` of a `KMSCryptoKey` resource. */
              name?: string;
              /** @description The `namespace` of a `KMSCryptoKey` resource. */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Labels to apply to backups created using this configuration. */
          labels?: {
            [key: string]: string;
          };
          /** @description The location where the backup will be stored. Currently, the only supported
           *      option is to store the backup in the same region as the cluster.
           *
           *      If empty, defaults to the region of the cluster. */
          location?: string;
          /** @description Quantity-based Backup retention policy to retain recent backups. */
          quantityBasedRetention?: {
            /**
             * Format: int32
             * @description The number of backups to retain.
             */
            count?: number;
          };
          /** @description Time-based Backup retention policy. */
          timeBasedRetention?: {
            /** @description The retention period. */
            retentionPeriod?: string;
          };
          /** @description Weekly schedule for the Backup. */
          weeklySchedule?: {
            /** @description The days of the week to perform a backup.
             *
             *      If this field is left empty, the default of every day of the week is
             *      used. */
            daysOfWeek?: string[];
            /** @description The times during the day to start a backup. The start times are assumed
             *      to be in UTC and to be an exact hour (e.g., 04:00:00).
             *
             *      If no start times are provided, a single fixed start time is chosen
             *      arbitrarily. */
            startTimes: {
              /**
               * Format: int32
               * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
               */
              hours?: number;
              /**
               * Format: int32
               * @description Minutes of hour of day. Must be from 0 to 59.
               */
              minutes?: number;
              /**
               * Format: int32
               * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
               */
              nanos?: number;
              /**
               * Format: int32
               * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
               */
              seconds?: number;
            }[];
          };
        };
        /** @description The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]. */
        clusterType?: string;
        /** @description Optional. Continuous backup configuration for this cluster. */
        continuousBackupConfig?: {
          /** @description Whether ContinuousBackup is enabled. */
          enabled?: boolean;
          /** @description The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will then use default encryption scheme to protect the user data. */
          encryptionConfig?: {
            /** @description The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
            kmsKeyNameRef?: {
              /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
              external?: string;
              /** @description The `name` of a `KMSCryptoKey` resource. */
              name?: string;
              /** @description The `namespace` of a `KMSCryptoKey` resource. */
              namespace?: string;
            } & (unknown | unknown);
          };
          /**
           * Format: int32
           * @description The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
           */
          recoveryWindowDays?: number;
        };
        /** @description Policy to determine if the cluster should be deleted forcefully. Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster. Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance. */
        deletionPolicy?: string;
        /** @description User-settable and human-readable display name for the Cluster. */
        displayName?: string;
        /** @description Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data. */
        encryptionConfig?: {
          /** @description The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
          kmsKeyNameRef?: {
            /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
            external?: string;
            /** @description The `name` of a `KMSCryptoKey` resource. */
            name?: string;
            /** @description The `namespace` of a `KMSCryptoKey` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored. */
        initialUser?: {
          /** @description The initial password for the user. */
          password: {
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
          };
          /** @description The database username. */
          user?: string;
        };
        /** @description Immutable. The location where the alloydb cluster should reside. */
        location: string;
        /** @description Optional. The maintenance update policy determines when to allow or deny updates. */
        maintenanceUpdatePolicy?: {
          /** @description Preferred windows to perform maintenance. Currently limited to 1. */
          maintenanceWindows?: {
            /** @description Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. */
            day: string;
            /** @description Preferred time to start the maintenance operation on the specified day. Maintenance will start within 1 hour of this time. */
            startTime: {
              /**
               * Format: int32
               * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
               */
              hours?: number;
              /**
               * Format: int32
               * @description Minutes of hour of day. Must be from 0 to 59.
               */
              minutes?: number;
              /**
               * Format: int32
               * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
               */
              nanos?: number;
              /**
               * Format: int32
               * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
               */
              seconds?: number;
            };
          }[];
        };
        networkConfig?: {
          /** @description Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. Field name is intended to be consistent with Cloud SQL. */
          allocatedIpRange?: string;
          /** @description Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project_number}/global/networks/{network_id}`. This is required to create a cluster. */
          networkRef?: {
            /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
            external?: string;
            /** @description The `name` field of a `ComputeNetwork` resource. */
            name?: string;
            /** @description The `namespace` field of a `ComputeNetwork` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project}/global/networks/{network_id}`. This is required to create a cluster. Deprecated, use network_config.network instead. */
        networkRef?: {
          /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
          external?: string;
          /** @description The `name` field of a `ComputeNetwork` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeNetwork` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description The `projectID` field of a project, when not managed by Config Connector. */
          external?: string;
          /** @description The kind of the Project resource; optional but must be `Project` if provided. */
          kind?: string;
          /** @description The `name` field of a `Project` resource. */
          name?: string;
          /** @description The `namespace` field of a `Project` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The AlloyDBCluster name. If not given, the metadata.name will be used. */
        resourceID?: string;
        /** @description Immutable. The source when restoring from a backup. Conflicts with 'restoreContinuousBackupSource', both can't be set together. */
        restoreBackupSource?: {
          /** @description Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} */
          backupNameRef: {
            /** @description If provided must be in the format `projects/[projectId]/locations/[location]/backups/[backupId]`. */
            external?: string;
            /** @description The `metadata.name` field of a `AlloyDBBackup` resource. */
            name?: string;
            /** @description The `metadata.namespace` field of a `AlloyDBBackup` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. The source when restoring via point in time recovery (PITR). Conflicts with 'restoreBackupSource', both can't be set together. */
        restoreContinuousBackupSource?: {
          /** @description (Required) The name of the source cluster that this cluster is restored from. */
          clusterRef: {
            /** @description If provided must be in the format `projects/[projectId]/locations/[location]/clusters/[clusterId]`. */
            external?: string;
            /** @description The `metadata.name` field of a `AlloyDBCluster` resource. */
            name?: string;
            /** @description The `metadata.namespace` field of a `AlloyDBCluster` resource. */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The point in time that this cluster is restored to, in RFC 3339 format. */
          pointInTime: string;
        };
        /** @description Cross Region replication config specific to SECONDARY cluster. */
        secondaryConfig?: {
          /** @description The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} */
          primaryClusterNameRef: {
            /** @description If provided must be in the format `projects/[projectId]/locations/[location]/clusters/[clusterId]`. */
            external?: string;
            /** @description The `metadata.name` field of a `AlloyDBCluster` resource. */
            name?: string;
            /** @description The `metadata.namespace` field of a `AlloyDBCluster` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
      /** @description AlloyDBClusterStatus defines the config connector machine state of AlloyDBCluster */
      status?: {
        /** @description Output only. Cluster created from backup. */
        backupSource?: {
          /** @description The name of the backup resource. */
          backupName?: string;
        }[];
        /** @description Conditions represent the latest available observations of the object's current state. */
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
        /** @description Output only. Continuous backup properties for this cluster. */
        continuousBackupInfo?: {
          /** @description Output only. The earliest restorable time that can be restored to. Output only field. */
          earliestRestorableTime?: string;
          /** @description Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled. */
          enabledTime?: string;
          /** @description Output only. The encryption information for the WALs and backups required for ContinuousBackup. */
          encryptionInfo?: {
            /** @description Output only. Type of encryption. */
            encryptionType?: string;
            /** @description Output only. Cloud KMS key versions that are being used to protect the database or the backup. */
            kmsKeyVersions?: string[];
          }[];
          /** @description Output only. Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request. */
          schedule?: string[];
        }[];
        /** @description The database engine major version. This is an output-only field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation. */
        databaseVersion?: string;
        /** @description Output only. The encryption information for the cluster. */
        encryptionInfo?: {
          /** @description Output only. Type of encryption. */
          encryptionType?: string;
          /** @description Output only. Cloud KMS key versions that are being used to protect the database or the backup. */
          kmsKeyVersions?: string[];
        }[];
        /** @description Output only. Cluster created via DMS migration. */
        migrationSource?: {
          /** @description Output only. The host and port of the on-premises instance in host:port format */
          hostPort?: string;
          /** @description Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster. */
          referenceId?: string;
          /** @description Output only. Type of migration source. */
          sourceType?: string;
        }[];
        /** @description Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region} */
        name?: string;
        /**
         * Format: int64
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
        /** @description ObservedState is the state of the resource as most recently observed in GCP. */
        observedState?: {
          /** @description Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster` */
          clusterType?: string;
        };
        /** @description Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
        uid?: string;
      };
    };
  };
}
