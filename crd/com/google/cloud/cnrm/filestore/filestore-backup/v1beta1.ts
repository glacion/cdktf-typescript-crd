import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class FilestoreCnrmCloudGoogleComFilestoreBackupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: FilestoreCnrmCloudGoogleComFilestoreBackupV1beta1Config) {
    super(scope, id, config);
  }
}
export interface FilestoreCnrmCloudGoogleComFilestoreBackupV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "filestore.cnrm.cloud.google.com/v1beta1";
    kind: "FilestoreBackup";
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
    spec: {
      /** @description A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Name of the file share in the source Cloud Filestore instance that the backup is created from. */
      sourceFileShare: string;
      /** @description Immutable. */
      sourceInstanceRef: {
        /** @description The resource name of the source Cloud Filestore instance, in the format projects/{project_number}/locations/{location_id}/instances/{instance_id}, used to create this backup.
         *
         *     Allowed value: The Google Cloud resource name of a `FilestoreInstance` resource (format: `projects/{{project}}/locations/{{location}}/instances/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
    status?: {
      /**
       * Format: int64
       * @description Output only. Capacity of the source file share when the backup was created.
       */
      capacityGb?: number;
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
      /**
       * Format: date-time
       * @description Output only. The time when the backup was created.
       */
      createTime?: string;
      /**
       * Format: int64
       * @description Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage.
       */
      downloadBytes?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. The service tier of the source Cloud Filestore instance that this backup is created from. Possible values: TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD */
      sourceInstanceTier?: string;
      /** @description Output only. The backup state. Possible values: STATE_UNSPECIFIED, CREATING, READY, REPAIRING, DELETING, ERROR, RESTORING */
      state?: string;
      /**
       * Format: int64
       * @description Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.
       */
      storageBytes?: number;
    };
  };
}
