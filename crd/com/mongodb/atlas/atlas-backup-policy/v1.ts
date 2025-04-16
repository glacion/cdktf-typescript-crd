import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasBackupPolicyV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAtlasBackupPolicyV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAtlasBackupPolicyV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "atlas.mongodb.com/v1";
    kind?: "AtlasBackupPolicy";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    /** @description AtlasBackupPolicySpec defines the desired state of AtlasBackupPolicy */
    spec?: {
      /** @description A list of BackupPolicy items */
      items: {
        /**
         * @description Desired frequency of the new backup policy item specified by FrequencyType. A value of 1 specifies the first instance of the corresponding FrequencyType.
         *     The only accepted value you can set for frequency interval with NVMe clusters is 12.
         * @enum {integer}
         */
        frequencyInterval:
          | 1
          | 2
          | 3
          | 4
          | 5
          | 6
          | 7
          | 8
          | 9
          | 10
          | 11
          | 12
          | 13
          | 14
          | 15
          | 16
          | 17
          | 18
          | 19
          | 20
          | 21
          | 22
          | 23
          | 24
          | 25
          | 26
          | 27
          | 28
          | 40;
        /**
         * @description Frequency associated with the backup policy item. One of the following values: hourly, daily, weekly or monthly. You cannot specify multiple hourly and daily backup policy items.
         * @enum {string}
         */
        frequencyType: "hourly" | "daily" | "weekly" | "monthly" | "yearly";
        /**
         * @description Scope of the backup policy item: days, weeks, or months
         * @enum {string}
         */
        retentionUnit: "days" | "weeks" | "months" | "years";
        /** @description Value to associate with RetentionUnit */
        retentionValue: number;
      }[];
    };
    status?: {
      /** @description DeploymentID of the deployment using the backup policy */
      backupScheduleIDs?: string[];
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
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
    };
  };
}
