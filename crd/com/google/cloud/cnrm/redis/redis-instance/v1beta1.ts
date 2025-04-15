import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRedisInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesRedisInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesRedisInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "redis.cnrm.cloud.google.com/v1beta1";
    kind: "RedisInstance";
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
      /** @description Immutable. Only applicable to STANDARD_HA tier which protects the instance
       *     against zonal failures by provisioning it across two zones.
       *     If provided, it must be a different zone from the one provided in
       *     [locationId]. */
      alternativeLocationId?: string;
      /** @description Optional. Indicates whether OSS Redis AUTH is enabled for the
       *     instance. If set to "true" AUTH is enabled on the instance.
       *     Default value is "false" meaning AUTH is disabled. */
      authEnabled?: boolean;
      /** @description Output only. AUTH String set on the instance. This field will only be populated if auth_enabled is true. */
      authString?: string;
      /** @description The network to which the instance is connected. If left
       *     unspecified, the default network will be used. */
      authorizedNetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]. */
      connectMode?: string;
      /** @description Immutable. Optional. The KMS key reference that you want to use to
       *     encrypt the data at rest for this Redis instance. If this is
       *     provided, CMEK is enabled. */
      customerManagedKeyRef?: {
        /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description An arbitrary and optional user-provided name for the instance. */
      displayName?: string;
      /** @description Immutable. The zone where the instance will be provisioned. If not provided,
       *     the service will choose a zone for the instance. For STANDARD_HA tier,
       *     instances will be created across two zones for protection against
       *     zonal failures. If [alternativeLocationId] is also provided, it must
       *     be different from [locationId]. */
      locationId?: string;
      /** @description Maintenance policy for an instance. */
      maintenancePolicy?: {
        /** @description Output only. The time when the policy was created.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        createTime?: string;
        /** @description Optional. Description of what this policy is for.
         *     Create/Update methods return INVALID_ARGUMENT if the
         *     length is greater than 512. */
        description?: string;
        /** @description Output only. The time when the policy was last updated.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        updateTime?: string;
        /** @description Optional. Maintenance window that is applied to resources covered by this policy.
         *     Minimum 1. For the current version, the maximum number
         *     of weekly_window is expected to be one. */
        weeklyMaintenanceWindow?: {
          /** @description Required. The day of week that maintenance updates occur.
           *
           *     - DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
           *     - MONDAY: Monday
           *     - TUESDAY: Tuesday
           *     - WEDNESDAY: Wednesday
           *     - THURSDAY: Thursday
           *     - FRIDAY: Friday
           *     - SATURDAY: Saturday
           *     - SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. */
          day: string;
          /** @description Output only. Duration of the maintenance window.
           *     The current window is fixed at 1 hour.
           *     A duration in seconds with up to nine fractional digits,
           *     terminated by 's'. Example: "3.5s". */
          duration?: string;
          /** @description Required. Start time of the window in UTC time. */
          startTime: {
            /** @description Hours of day in 24 hour format. Should be from 0 to 23.
             *     An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
            hours?: number;
            /** @description Minutes of hour of day. Must be from 0 to 59. */
            minutes?: number;
            /** @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
            nanos?: number;
            /** @description Seconds of minutes of the time. Must normally be from 0 to 59.
             *     An API may allow the value 60 if it allows leap-seconds. */
            seconds?: number;
          };
        }[];
      };
      /** @description Upcoming maintenance schedule. */
      maintenanceSchedule?: {
        /** @description Output only. The end time of any upcoming scheduled maintenance for this instance.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        endTime?: string;
        /** @description Output only. The deadline that the maintenance schedule start time
         *     can not go beyond, including reschedule.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        scheduleDeadlineTime?: string;
        /** @description Output only. The start time of any upcoming scheduled maintenance for this instance.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        startTime?: string;
      }[];
      /** @description Redis memory size in GiB. */
      memorySizeGb: number;
      /** @description Persistence configuration for an instance. */
      persistenceConfig?: {
        /** @description Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
         *
         *     - DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
         *     - RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]. */
        persistenceMode?: string;
        /** @description Output only. The next time that a snapshot attempt is scheduled to occur.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
         *     to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        rdbNextSnapshotTime?: string;
        /** @description Optional. Available snapshot periods for scheduling.
         *
         *     - ONE_HOUR:	Snapshot every 1 hour.
         *     - SIX_HOURS:	Snapshot every 6 hours.
         *     - TWELVE_HOURS:	Snapshot every 12 hours.
         *     - TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]. */
        rdbSnapshotPeriod?: string;
        /** @description Optional. Date and time that the first snapshot was/will be attempted,
         *     and to which future snapshots will be aligned. If not provided,
         *     the current time will be used.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
         *     and up to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        rdbSnapshotStartTime?: string;
      };
      /** @description Optional. Read replica mode. Can only be specified when trying to create the instance.
       *     If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
       *     - READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
       *     instance cannot scale up or down the number of replicas.
       *     - READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
       *     can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]. */
      readReplicasMode?: string;
      /** @description Redis configuration parameters, according to http://redis.io/topics/config.
       *     Please check Memorystore documentation for the list of supported parameters:
       *     https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs. */
      redisConfigs?: {
        [key: string]: string;
      };
      /** @description The version of Redis software. If not provided, latest supported
       *     version will be used. Please check the API documentation linked
       *     at the top for the latest valid values. */
      redisVersion?: string;
      /** @description Immutable. The name of the Redis region of the instance. */
      region: string;
      /** @description Optional. The number of replica nodes. The valid range for the Standard Tier with
       *     read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
       *     for a Standard Tier instance, the only valid value is 1 and the default is 1.
       *     The valid value for basic tier is 0 and the default is also 0. */
      replicaCount?: number;
      /** @description Immutable. The CIDR range of internal addresses that are reserved for this
       *     instance. If not provided, the service will choose an unused /29
       *     block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
       *     unique and non-overlapping with existing subnets in an authorized
       *     network. */
      reservedIpRange?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional. Additional IP range for node placement. Required when enabling read replicas on
       *     an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
       *     "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
       *     range associated with the private service access connection, or "auto". */
      secondaryIpRange?: string;
      /** @description Immutable. The service tier of the instance. Must be one of these values:
       *
       *     - BASIC: standalone instance
       *     - STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]. */
      tier?: string;
      /** @description Immutable. The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
       *
       *     - SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]. */
      transitEncryptionMode?: string;
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
      /** @description The time the instance was created in RFC3339 UTC "Zulu" format,
       *     accurate to nanoseconds. */
      createTime?: string;
      /** @description The current zone where the Redis endpoint is placed.
       *     For Basic Tier instances, this will always be the same as the
       *     [locationId] provided by the user at creation time. For Standard Tier
       *     instances, this can be either [locationId] or [alternativeLocationId]
       *     and can change after a failover event. */
      currentLocationId?: string;
      /** @description Hostname or IP address of the exposed Redis endpoint used by clients
       *     to connect to the service. */
      host?: string;
      /** @description Upcoming maintenance schedule. */
      maintenanceSchedule?: {
        /** @description Output only. The end time of any upcoming scheduled maintenance for this instance.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        endTime?: string;
        /** @description Output only. The deadline that the maintenance schedule start time
         *     can not go beyond, including reschedule.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        scheduleDeadlineTime?: string;
        /** @description Output only. The start time of any upcoming scheduled maintenance for this instance.
         *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
         *     resolution and up to nine fractional digits. */
        startTime?: string;
      }[];
      /** @description Output only. Info per node. */
      nodes?: {
        /** @description Node identifying string. e.g. 'node-0', 'node-1'. */
        id?: string;
        /** @description Location of the node. */
        zone?: string;
      }[];
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description Output only. AUTH String set on the instance. This field will only be populated if auth_enabled is true. */
        authString?: string;
      };
      /** @description Output only. Cloud IAM identity used by import / export operations
       *     to transfer data to/from Cloud Storage. Format is "serviceAccount:".
       *     The value may change over time for a given instance so should be
       *     checked before each import/export operation. */
      persistenceIamIdentity?: string;
      /** @description The port number of the exposed Redis endpoint. */
      port?: number;
      /** @description Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only.
       *     Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes
       *     will exhibit some lag behind the primary. Write requests must target 'host'. */
      readEndpoint?: string;
      /** @description Output only. The port number of the exposed readonly redis endpoint. Standard tier only.
       *     Write requests should target 'port'. */
      readEndpointPort?: number;
      /** @description List of server CA certificates for the instance. */
      serverCaCerts?: {
        /** @description The certificate data in PEM format. */
        cert?: string;
        /** @description The time when the certificate was created. */
        createTime?: string;
        /** @description The time when the certificate expires. */
        expireTime?: string;
        /** @description Serial number, as extracted from the certificate. */
        serialNumber?: string;
        /** @description Sha1 Fingerprint of the certificate. */
        sha1Fingerprint?: string;
      }[];
    };
  };
}
