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
    /** @description AtlasBackupSchedule is the Schema for the atlasbackupschedules API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AtlasBackupScheduleSpec defines the desired state of AtlasBackupSchedule */
      spec?: {
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
      status?: {
        /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
        conditions: {
          /**
           * Format: date-time
           * @description Last time the condition transitioned from one status to another.
           */
          lastTransitionTime?: string;
          /** @description A human readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description Type of Atlas Custom Resource condition. */
          type: string;
        }[];
        deploymentID?: string[];
        /**
         * Format: int64
         * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
         *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
         */
        observedGeneration?: number;
      };
    };
  };
}
