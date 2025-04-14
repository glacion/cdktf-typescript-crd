import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeResourcePolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeResourcePolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeResourcePolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeResourcePolicyV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. Provide this property when you create the resource. */
      description?: string;
      /** @description Immutable. Replication consistency group for asynchronous disk replication. */
      diskConsistencyGroupPolicy?: {
        /** @description Immutable. Enable disk consistency on the resource policy. */
        enabled: boolean;
      };
      /** @description Immutable. Resource policy for instances used for placement configuration. */
      groupPlacementPolicy?: {
        /** @description Immutable. The number of availability domains instances will be spread across. If two instances are in different
         *     availability domain, they will not be put in the same low latency network. */
        availabilityDomainCount?: number;
        /** @description Immutable. Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
         *     Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
         *     with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
         *     attached. Possible values: ["COLLOCATED"]. */
        collocation?: string;
        /** @description Immutable. Specifies the number of max logical switches. */
        maxDistance?: number;
        /** @description Immutable. Number of VMs in this placement group. Google does not recommend that you use this field
         *     unless you use a compact policy and you want your policy to work only if it contains this
         *     exact number of VMs. */
        vmCount?: number;
      };
      /** @description Immutable. Resource policy for scheduling instance operations. */
      instanceSchedulePolicy?: {
        /** @description Immutable. The expiration time of the schedule. The timestamp is an RFC3339 string. */
        expirationTime?: string;
        /** @description Immutable. The start time of the schedule. The timestamp is an RFC3339 string. */
        startTime?: string;
        /** @description Immutable. Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
         *     from the tz database: http://en.wikipedia.org/wiki/Tz_database. */
        timeZone: string;
        /** @description Immutable. Specifies the schedule for starting instances. */
        vmStartSchedule?: {
          /** @description Immutable. Specifies the frequency for the operation, using the unix-cron format. */
          schedule: string;
        };
        /** @description Immutable. Specifies the schedule for stopping instances. */
        vmStopSchedule?: {
          /** @description Immutable. Specifies the frequency for the operation, using the unix-cron format. */
          schedule: string;
        };
      };
      /** @description Immutable. Region where resource policy resides. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Policy for creating snapshots of persistent disks. */
      snapshotSchedulePolicy?: {
        /** @description Immutable. Retention policy applied to snapshots created by this resource policy. */
        retentionPolicy?: {
          /** @description Immutable. Maximum age of the snapshot that is allowed to be kept. */
          maxRetentionDays: number;
          /** @description Immutable. Specifies the behavior to apply to scheduled snapshots when
           *     the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]. */
          onSourceDiskDelete?: string;
        };
        /** @description Immutable. Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'. */
        schedule: {
          /** @description Immutable. The policy will execute every nth day at the specified time. */
          dailySchedule?: {
            /** @description Immutable. Defines a schedule with units measured in days. The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1. */
            daysInCycle: number;
            /** @description Immutable. This must be in UTC format that resolves to one of
             *     00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
             *     both 13:00-5 and 08:00 are valid. */
            startTime: string;
          };
          /** @description Immutable. The policy will execute every nth hour starting at the specified time. */
          hourlySchedule?: {
            /** @description Immutable. The number of hours between snapshots. */
            hoursInCycle: number;
            /** @description Immutable. Time within the window to start the operations.
             *     It must be in an hourly format "HH:MM",
             *     where HH : [00-23] and MM : [00] GMT.
             *     eg: 21:00. */
            startTime: string;
          };
          /** @description Immutable. Allows specifying a snapshot time for each day of the week. */
          weeklySchedule?: {
            /** @description Immutable. May contain up to seven (one for each day of the week) snapshot times. */
            dayOfWeeks: {
              /** @description Immutable. The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. */
              day: string;
              /** @description Immutable. Time within the window to start the operations.
               *     It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT. */
              startTime: string;
            }[];
          };
        };
        /** @description Immutable. Properties with which the snapshots are created, such as labels. */
        snapshotProperties?: {
          /** @description Immutable. Creates the new snapshot in the snapshot chain labeled with the
           *     specified name. The chain name must be 1-63 characters long and comply
           *     with RFC1035. */
          chainName?: string;
          /** @description Immutable. Whether to perform a 'guest aware' snapshot. */
          guestFlush?: boolean;
          /** @description Immutable. A set of key-value pairs. */
          labels?: {
            [key: string]: string;
          };
          /** @description Immutable. Cloud Storage bucket location to store the auto snapshot
           *     (regional or multi-regional). */
          storageLocations?: string[];
        };
      };
    };
  };
}
