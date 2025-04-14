import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasBackupCompliancePolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasBackupCompliancePolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasBackupCompliancePolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasBackupCompliancePolicyV1Config extends ManifestConfig {
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
      /** @description Email address of the user who authorized to update the Backup Compliance Policy settings. */
      authorizedEmail: string;
      /** @description First name of the user who authorized to updated the Backup Compliance Policy settings. */
      authorizedUserFirstName: string;
      /** @description Last name of the user who authorized to updated the Backup Compliance Policy settings. */
      authorizedUserLastName: string;
      /** @description Flag that indicates whether to prevent cluster users from deleting backups copied to other regions, even if those additional snapshot regions are removed. */
      copyProtectionEnabled?: boolean;
      /** @description Flag that indicates whether Encryption at Rest using Customer Key Management is required for all clusters with a Backup Compliance Policy. */
      encryptionAtRestEnabled?: boolean;
      /** @description Specifications for on-demand policy. */
      onDemandPolicy?: {
        /** @description Scope of the backup policy item: days, weeks, or months */
        retentionUnit: string;
        /** @description Value to associate with RetentionUnit */
        retentionValue: number;
      };
      /** @description Flag that indicates whether to overwrite non complying backup policies with the new data protection settings or not. */
      overwriteBackupPolicies?: boolean;
      /** @description Flag that indicates whether the cluster uses Continuous Cloud Backups with a Backup Compliance Policy. */
      pointInTimeEnabled?: boolean;
      /** @description Number of previous days that you can restore back to with Continuous Cloud Backup with a Backup Compliance Policy. This parameter applies only to Continuous Cloud Backups with a Backup Compliance Policy. */
      restoreWindowDays?: number;
      /** @description List that contains the specifications for one scheduled policy. */
      scheduledPolicyItems?: {
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
  };
}
