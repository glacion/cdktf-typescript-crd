import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMemcacheInstanceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMemcacheInstanceV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "memcache.cnrm.cloud.google.com/v1beta1", kind: "MemcacheInstance", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMemcacheInstanceV1beta1Config extends ManifestConfig {
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
        /** @description A user-visible name for the instance. */
        displayName?: string;
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
          /** @description Output only. The time when the policy was updated.
           *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
           *     resolution and up to nine fractional digits. */
          updateTime?: string;
          /** @description Required. Maintenance window that is applied to resources covered by this policy.
           *     Minimum 1. For the current version, the maximum number of weekly_maintenance_windows
           *     is expected to be one. */
          weeklyMaintenanceWindow: {
            /** @description Required. The day of week that maintenance updates occur.
             *     - DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
             *     - MONDAY: Monday
             *     - TUESDAY: Tuesday
             *     - WEDNESDAY: Wednesday
             *     - THURSDAY: Thursday
             *     - FRIDAY: Friday
             *     - SATURDAY: Saturday
             *     - SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. */
            day: string;
            /** @description Required. The length of the maintenance window, ranging from 3 hours to 8 hours.
             *     A duration in seconds with up to nine fractional digits,
             *     terminated by 's'. Example: "3.5s". */
            duration: string;
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
        /** @description Immutable. User-specified parameters for this memcache instance. */
        memcacheParameters?: {
          /** @description This is a unique ID associated with this set of parameters. */
          id?: string;
          /** @description User-defined set of parameters to use in the memcache process. */
          params?: {
            [key: string]: string;
          };
        };
        /** @description The major version of Memcached software. If not provided, latest supported version will be used.
         *     Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
         *     determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]. */
        memcacheVersion?: string;
        /** @description The full name of the network to connect the instance to. */
        networkRef?: {
          /** @description Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Configuration for memcache nodes. */
        nodeConfig: {
          /** @description Number of CPUs per node. */
          cpuCount: number;
          /** @description Memory size in Mebibytes for each memcache node. */
          memorySizeMb: number;
        };
        /** @description Number of nodes in the memcache instance. */
        nodeCount: number;
        /** @description Immutable. The region of the Memcache instance. If it is not provided, the provider region is used. */
        region: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Immutable. Zones where memcache nodes should be provisioned.  If not
         *     provided, all zones will be used. */
        zones?: string[];
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
        /** @description Creation timestamp in RFC3339 text format. */
        createTime?: string;
        /** @description Endpoint for Discovery API. */
        discoveryEndpoint?: string;
        /** @description Output only. Published maintenance schedule. */
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
        /** @description The full version of memcached server running on this instance. */
        memcacheFullVersion?: string;
        /** @description Additional information about the instance state, if available. */
        memcacheNodes?: {
          /** @description Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node. */
          host?: string;
          /** @description Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name. */
          nodeId?: string;
          /** @description The port number of the Memcached server on this node. */
          port?: number;
          /** @description Current state of the Memcached node. */
          state?: string;
          /** @description Location (GCP Zone) for the Memcached node. */
          zone?: string;
        }[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
      };
    };
  };
}
