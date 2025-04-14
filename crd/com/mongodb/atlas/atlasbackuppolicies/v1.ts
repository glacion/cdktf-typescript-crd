import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasBackupPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasBackupPolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasBackupPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasBackupPolicyV1Config extends ManifestConfig {
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
  };
}
