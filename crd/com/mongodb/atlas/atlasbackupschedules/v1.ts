import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasBackupScheduleV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasBackupScheduleV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasBackupSchedule", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasBackupScheduleV1Config extends ManifestConfig {
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
      /** @description Specify true to enable automatic export of cloud backup snapshots to the AWS bucket. You must also define the export policy using export. If omitted, defaults to false. */
      autoExportEnabled?: boolean;
      /** @description Copy backups to other regions for increased resiliency and faster restores. */
      copySettings?: {
        /**
         * @description Identifies the cloud provider that stores the snapshot copy.
         * @default AWS
         * @enum {string}
         */
        cloudProvider: "AWS" | "GCP" | "AZURE";
        /** @description List that describes which types of snapshots to copy. */
        frequencies?: string[];
        /** @description Target region to copy snapshots belonging to replicationSpecId to. */
        regionName?: string;
        /** @description Flag that indicates whether to copy the oplogs to the target region. */
        shouldCopyOplogs?: boolean;
      }[];
      /** @description Export policy for automatically exporting cloud backup snapshots to AWS bucket. */
      export?: {
        /** @description Unique Atlas identifier of the AWS bucket which was granted access to export backup snapshot */
        exportBucketId: string;
        frequencyType: string;
      };
      /** @description A reference (name & namespace) for backup policy in the desired updated backup policy. */
      policy: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /**
       * Format: int64
       * @description UTC Hour of day between 0 and 23, inclusive, representing which hour of the day that Atlas takes snapshots for backup policy items
       */
      referenceHourOfDay?: number;
      /**
       * Format: int64
       * @description UTC Minutes after ReferenceHourOfDay that Atlas takes snapshots for backup policy items. Must be between 0 and 59, inclusive.
       */
      referenceMinuteOfHour?: number;
      /**
       * Format: int64
       * @description Number of days back in time you can restore to with Continuous Cloud Backup accuracy. Must be a positive, non-zero integer. Applies to continuous cloud backups only.
       */
      restoreWindowDays?: number;
      /** @description Specify true to apply the retention changes in the updated backup policy to snapshots that Atlas took previously. */
      updateSnapshots?: boolean;
      /** @description Specify true to use organization and project names instead of organization and project UUIDs in the path for the metadata files that Atlas uploads to your S3 bucket after it finishes exporting the snapshots */
      useOrgAndGroupNamesInExportPrefix?: boolean;
    };
  };
}
