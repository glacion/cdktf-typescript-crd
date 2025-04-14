import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAlloyDBBackupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAlloyDBBackupV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "alloydb.cnrm.cloud.google.com/v1beta1", kind: "AlloyDBBackup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAlloyDBBackupV1beta1Config extends ManifestConfig {
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
        /** @description The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}). */
        clusterNameRef: {
          /** @description Allowed value: The `name` field of an `AlloyDBCluster` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. User-provided description of the backup. */
        description?: string;
        /** @description EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
        encryptionConfig?: {
          /** @description Immutable. The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]. */
          kmsKeyName?: string;
        };
        /** @description Immutable. The location where the alloydb backup should reside. */
        location: string;
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description Allowed value: The `name` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The backupId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
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
        /** @description Time the Backup was created in UTC. */
        createTime?: string;
        /** @description EncryptionInfo describes the encryption information of a cluster or a backup. */
        encryptionInfo?: {
          /** @description Output only. Type of encryption. */
          encryptionType?: string;
          /** @description Output only. Cloud KMS key versions that are being used to protect the database or the backup. */
          kmsKeyVersions?: string[];
        }[];
        /** @description A hash of the resource. */
        etag?: string;
        /** @description Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backupId}. */
        name?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description If true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance. */
        reconciling?: boolean;
        /** @description The current state of the backup. */
        state?: string;
        /** @description Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
        uid?: string;
        /** @description Time the Backup was updated in UTC. */
        updateTime?: string;
      };
    };
  };
}
