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
  };
}
