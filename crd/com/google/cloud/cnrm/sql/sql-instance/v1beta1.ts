import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSQLInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSQLInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSQLInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "sql.cnrm.cloud.google.com/v1beta1";
    kind: "SQLInstance";
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
      /** @description Create this database as a clone of a source instance. Immutable. */
      cloneSource?: {
        /** @description Binary log coordinates, if specified, identify the position up to which the source instance is cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates. */
        binLogCoordinates?: {
          /** @description Name of the binary log file for a Cloud SQL instance. */
          binLogFileName?: string;
          /**
           * Format: int64
           * @description Position (offset) within the binary log file.
           */
          binLogPosition?: number;
        };
        /** @description (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty. */
        databaseNames?: string[];
        /** @description Timestamp, if specified, identifies the time to which the source instance is cloned. */
        pointInTime?: string;
        /** @description The source SQLInstance to clone */
        sqlInstanceRef?: {
          /** @description The SQLInstance selfLink, when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `SQLInstance` resource. */
          name?: string;
          /** @description The `namespace` field of a `SQLInstance` resource. */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions. */
      databaseVersion?: string;
      encryptionKMSCryptoKeyRef?: {
        /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
        external?: string;
        /** @description The `name` of a `KMSCryptoKey` resource. */
        name?: string;
        /** @description The `namespace` of a `KMSCryptoKey` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. */
      instanceType?: string;
      /** @description Maintenance version. */
      maintenanceVersion?: string;
      masterInstanceRef?: {
        /** @description The SQLInstance selfLink, when not managed by Config Connector. */
        external?: string;
        /** @description The `name` field of a `SQLInstance` resource. */
        name?: string;
        /** @description The `namespace` field of a `SQLInstance` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this. */
      region?: string;
      /** @description The configuration for replication. */
      replicaConfiguration?: {
        /** @description Immutable. PEM representation of the trusted CA's x509 certificate. */
        caCertificate?: string;
        /** @description Immutable. PEM representation of the replica's x509 certificate. */
        clientCertificate?: string;
        /** @description Immutable. PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. */
        clientKey?: string;
        /**
         * Format: int64
         * @description Immutable. The number of seconds between connect retries. MySQL's default is 60 seconds.
         */
        connectRetryInterval?: number;
        /** @description Immutable. Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. */
        dumpFilePath?: string;
        /** @description Immutable. Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres. */
        failoverTarget?: boolean;
        /**
         * Format: int64
         * @description Immutable. Time in ms between replication heartbeats.
         */
        masterHeartbeatPeriod?: number;
        /** @description Immutable. Password for the replication connection. */
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
        };
        /** @description Immutable. Permissible ciphers for use in SSL encryption. */
        sslCipher?: string;
        /** @description Immutable. Username for replication connection. */
        username?: string;
        /** @description Immutable. True if the master's common name value is checked during the SSL handshake. */
        verifyServerCertificate?: boolean;
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Initial root password. Required for MS SQL Server. */
      rootPassword?: {
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
      /** @description The settings to use for the database. The configuration is detailed below. */
      settings: {
        /** @description This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. */
        activationPolicy?: string;
        activeDirectoryConfig?: {
          /** @description Domain name of the Active Directory for SQL Server (e.g., mydomain.com). */
          domain: string;
        };
        advancedMachineFeatures?: {
          /**
           * Format: int64
           * @description The number of threads per physical core. Can be 1 or 2.
           */
          threadsPerCore?: number;
        };
        /** @description DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances. Specifying this field has no-ops; it's recommended to remove this field from your configuration. */
        authorizedGaeApplications?: string[];
        /** @description The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). For all instances, ensure that settings.backup_configuration.enabled is set to true. For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true. For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled is set to true. Defaults to ZONAL. */
        availabilityType?: string;
        backupConfiguration?: {
          backupRetentionSettings?: {
            /**
             * Format: int64
             * @description Number of backups to retain.
             */
            retainedBackups: number;
            /** @description The unit that 'retainedBackups' represents. Defaults to COUNT. */
            retentionUnit?: string;
          };
          /** @description True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL. */
          binaryLogEnabled?: boolean;
          /** @description True if backup configuration is enabled. */
          enabled?: boolean;
          /** @description Location of the backup configuration. */
          location?: string;
          /** @description True if Point-in-time recovery is enabled. */
          pointInTimeRecoveryEnabled?: boolean;
          /** @description HH:MM format time indicating when backup configuration starts. */
          startTime?: string;
          /**
           * Format: int64
           * @description The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.).
           */
          transactionLogRetentionDays?: number;
        };
        /** @description Immutable. The name of server instance collation. */
        collation?: string;
        /** @description Specifies if connections must use Cloud SQL connectors. */
        connectorEnforcement?: string;
        /** @description DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances. Specifying this field has no-ops; it's recommended to remove this field from your configuration. */
        crashSafeReplication?: boolean;
        /** @description Data cache configurations. */
        dataCacheConfig?: {
          /** @description Whether data cache is enabled for the instance. */
          dataCacheEnabled?: boolean;
        };
        databaseFlags?: {
          /** @description Name of the flag. */
          name: string;
          /** @description Value of the flag. */
          value: string;
        }[];
        /** @description Configuration to protect against accidental instance deletion. */
        deletionProtectionEnabled?: boolean;
        denyMaintenancePeriod?: {
          /** @description End date before which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01. */
          endDate: string;
          /** @description Start date after which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01. */
          startDate: string;
          /** @description Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00. */
          time: string;
        };
        /** @description Enables auto-resizing of the storage size. Defaults to true. */
        diskAutoresize?: boolean;
        /**
         * Format: int64
         * @description The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
         */
        diskAutoresizeLimit?: number;
        /**
         * Format: int64
         * @description The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
         */
        diskSize?: number;
        /** @description Immutable. The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD. */
        diskType?: string;
        /** @description The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS. */
        edition?: string;
        /** @description Configuration of Query Insights. */
        insightsConfig?: {
          /** @description True if Query Insights feature is enabled. */
          queryInsightsEnabled?: boolean;
          /**
           * Format: int64
           * @description Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.
           */
          queryPlansPerMinute?: number;
          /**
           * Format: int64
           * @description Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
           */
          queryStringLength?: number;
          /** @description True if Query Insights will record application tags from query when enabled. */
          recordApplicationTags?: boolean;
          /** @description True if Query Insights will record client address when enabled. */
          recordClientAddress?: boolean;
        };
        ipConfiguration?: {
          /** @description The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. */
          allocatedIpRange?: string;
          authorizedNetworks?: {
            expirationTime?: string;
            name?: string;
            value: string;
          }[];
          /** @description Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported. */
          enablePrivatePathForGoogleCloudServices?: boolean;
          /** @description Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured. */
          ipv4Enabled?: boolean;
          privateNetworkRef?: {
            /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
            external?: string;
            /** @description The `name` field of a `ComputeNetwork` resource. */
            name?: string;
            /** @description The `namespace` field of a `ComputeNetwork` resource. */
            namespace?: string;
          } & (unknown | unknown);
          /** @description PSC settings for a Cloud SQL instance. */
          pscConfig?: {
            /** @description List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric). */
            allowedConsumerProjects?: string[];
            /** @description Whether PSC connectivity is enabled for this instance. */
            pscEnabled?: boolean;
          }[];
          requireSsl?: boolean;
          /** @description Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to requireSsl. To change this field, also set the correspoding value in requireSsl if it has been set. */
          sslMode?: string;
        };
        locationPreference?: {
          /** @description A Google App Engine application whose zone to remain in. Must be in the same region as this instance. */
          followGaeApplication?: string;
          /** @description The preferred Compute Engine zone for the secondary/failover. */
          secondaryZone?: string;
          /** @description The preferred compute engine zone. */
          zone?: string;
        };
        /** @description Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time. */
        maintenanceWindow?: {
          /**
           * Format: int64
           * @description Day of week (1-7), starting on Monday.
           */
          day?: number;
          /**
           * Format: int64
           * @description Hour of day (0-23), ignored if day not set.
           */
          hour?: number;
          /** @description Receive updates earlier (canary) or later (stable). */
          updateTrack?: string;
        };
        passwordValidationPolicy?: {
          /** @description Password complexity. */
          complexity?: string;
          /** @description Disallow username as a part of the password. */
          disallowUsernameSubstring?: boolean;
          /** @description Whether the password policy is enabled or not. */
          enablePasswordPolicy: boolean;
          /**
           * Format: int64
           * @description Minimum number of characters allowed.
           */
          minLength?: number;
          /** @description Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. */
          passwordChangeInterval?: string;
          /**
           * Format: int64
           * @description Number of previous passwords that cannot be reused.
           */
          reuseInterval?: number;
        };
        /** @description Pricing plan for this instance, can only be PER_USE. */
        pricingPlan?: string;
        /** @description DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances. Specifying this field has no-ops; it's recommended to remove this field from your configuration. */
        replicationType?: string;
        sqlServerAuditConfig?: {
          /** @description The name of the destination bucket (e.g., gs://mybucket). */
          bucketRef?: {
            /** @description The StorageBucket selfLink, when not managed by Config Connector. */
            external?: string;
            /** @description The `name` field of a `StorageBucket` resource. */
            name?: string;
            /** @description The `namespace` field of a `StorageBucket` resource. */
            namespace?: string;
          } & (unknown | unknown);
          /** @description How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".. */
          retentionInterval?: string;
          /** @description How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
          uploadInterval?: string;
        };
        /** @description The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types. */
        tier: string;
        /** @description Immutable. The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. */
        timeZone?: string;
      };
    };
    status?: {
      /** @description Available Maintenance versions. */
      availableMaintenanceVersions?: string[];
      /** @description Conditions represent the latest available observations of the SQLInstance's current state. */
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
      /** @description The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy. */
      connectionName?: string;
      /** @description The dns name of the instance. */
      dnsName?: string;
      firstIpAddress?: string;
      /** @description The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. */
      instanceType?: string;
      ipAddress?: {
        ipAddress?: string;
        timeToRetire?: string;
        type?: string;
      }[];
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      privateIpAddress?: string;
      /** @description The link to service attachment of PSC instance. */
      pscServiceAttachmentLink?: string;
      publicIpAddress?: string;
      /** @description The URI of the created resource. */
      selfLink?: string;
      serverCaCert?: {
        /** @description The CA Certificate used to connect to the SQL Instance via SSL. */
        cert?: string;
        /** @description The CN valid for the CA Cert. */
        commonName?: string;
        /** @description Creation time of the CA Cert. */
        createTime?: string;
        /** @description Expiration time of the CA Cert. */
        expirationTime?: string;
        /** @description SHA Fingerprint of the CA Cert. */
        sha1Fingerprint?: string;
      };
      /** @description The service account email address assigned to the instance. */
      serviceAccountEmailAddress?: string;
    };
  };
}
