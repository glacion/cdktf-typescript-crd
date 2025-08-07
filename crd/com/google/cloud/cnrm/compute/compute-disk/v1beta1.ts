import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputeDiskV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ComputeCnrmCloudGoogleComComputeDiskV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputeDiskV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeDisk";
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
      /** @description Immutable. A nested object resource. */
      asyncPrimaryDisk?: {
        /** @description Immutable. Primary disk for asynchronous disk replication. */
        diskRef: {
          /** @description Allowed value: The `selfLink` field of a `ComputeDisk` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. An optional description of this resource. Provide this property when
       *     you create the resource. */
      description?: string;
      /** @description Immutable. Encrypts the disk using a customer-supplied encryption key.
       *
       *     After you encrypt a disk with a customer-supplied key, you must
       *     provide the same key if you use the disk later (e.g. to create a disk
       *     snapshot or an image, or to attach the disk to a virtual machine).
       *
       *     Customer-supplied encryption keys do not protect access to metadata of
       *     the disk.
       *
       *     If you do not provide an encryption key when creating the disk, then
       *     the disk will be encrypted using an automatically generated key and
       *     you do not need to provide a key to use the disk later. */
      diskEncryptionKey?: {
        /** @description The encryption key used to encrypt the disk. Your project's Compute
         *     Engine System service account
         *     ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com')
         *     must have 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this
         *     feature. See
         *     https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys */
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The service account used for the encryption request for the given KMS key.
         *     If absent, the Compute Engine Service Agent service account is used. */
        kmsKeyServiceAccountRef?: {
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Specifies a 256-bit customer-supplied encryption key, encoded in
         *     RFC 4648 base64 to either encrypt or decrypt this resource. */
        rawKey?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description Immutable. Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
         *     customer-supplied encryption key to either encrypt or decrypt
         *     this resource. You can provide either the rawKey or the rsaEncryptedKey. */
        rsaEncryptedKey?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
         *     encryption key that protects this resource. */
        sha256?: string;
      };
      /** @description Immutable. Whether this disk is using confidential compute mode.
       *     Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true. */
      enableConfidentialCompute?: boolean;
      /** @description Immutable. A list of features to enable on the guest operating system.
       *     Applicable only for bootable disks. */
      guestOsFeatures?: {
        /** @description Immutable. The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE"]. */
        type: string;
      }[];
      /** @description The image from which to initialize this disk. */
      imageRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeImage` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description DEPRECATED. `interface` is deprecated. This field is no longer used and can be safely removed from your configurations; disk interfaces are automatically determined on attachment. Immutable. Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. */
      interface?: string;
      /** @description Immutable. Any applicable license URI. */
      licenses?: string[];
      /** @description Location represents the geographical location of the ComputeDisk. Specify a region name or a zone name. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. Indicates whether or not the disk can be read/write attached to more than one instance. */
      multiWriter?: boolean;
      /** @description Immutable. Physical block size of the persistent disk, in bytes. If not present
       *     in a request, a default value is used. Currently supported sizes
       *     are 4096 and 16384, other sizes may be added in the future.
       *     If an unsupported value is requested, the error message will list
       *     the supported values for the caller's project. */
      physicalBlockSizeBytes?: number;
      /** @description The project that this resource belongs to. */
      projectRef?: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Indicates how many IOPS must be provisioned for the disk.
       *     Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
       *     allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it. */
      provisionedIops?: number;
      /** @description Indicates how much Throughput must be provisioned for the disk.
       *     Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
       *     allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it. */
      provisionedThroughput?: number;
      /** @description Immutable. URLs of the zones where the disk should be replicated to. */
      replicaZones?: string[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      resourcePolicies?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Size of the persistent disk, specified in GB. You can specify this
       *     field when creating a persistent disk using the 'image' or
       *     'snapshot' parameter, or specify it alone to create an empty
       *     persistent disk.
       *
       *     If you specify this field along with 'image' or 'snapshot',
       *     the value must not be less than the size of the image
       *     or the size of the snapshot.
       *
       *     Upsizing the disk is mutable, but downsizing the disk
       *     requires re-creating the resource. */
      size?: number;
      /** @description The source snapshot used to create this disk. */
      snapshotRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSnapshot` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The source disk used to create this disk. */
      sourceDiskRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeDisk` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The customer-supplied encryption key of the source image. Required if
       *     the source image is protected by a customer-supplied encryption key. */
      sourceImageEncryptionKey?: {
        /** @description The encryption key used to encrypt the disk. Your project's Compute
         *     Engine System service account
         *     ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com')
         *     must have 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this
         *     feature. See
         *     https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys */
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The service account used for the encryption request for the given KMS key.
         *     If absent, the Compute Engine Service Agent service account is used. */
        kmsKeyServiceAccountRef?: {
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Specifies a 256-bit customer-supplied encryption key, encoded in
         *     RFC 4648 base64 to either encrypt or decrypt this resource. */
        rawKey?: string;
        /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
         *     encryption key that protects this resource. */
        sha256?: string;
      };
      /** @description Immutable. The customer-supplied encryption key of the source snapshot. Required
       *     if the source snapshot is protected by a customer-supplied encryption
       *     key. */
      sourceSnapshotEncryptionKey?: {
        /** @description The encryption key used to encrypt the disk. Your project's Compute
         *     Engine System service account
         *     ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com')
         *     must have 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this
         *     feature. See
         *     https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys */
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The service account used for the encryption request for the given KMS key.
         *     If absent, the Compute Engine Service Agent service account is used. */
        kmsKeyServiceAccountRef?: {
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Specifies a 256-bit customer-supplied encryption key, encoded in
         *     RFC 4648 base64 to either encrypt or decrypt this resource. */
        rawKey?: string;
        /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
         *     encryption key that protects this resource. */
        sha256?: string;
      };
      /** @description Immutable. URL of the disk type resource describing which disk type to use to
       *     create the disk. Provide this when creating the disk. */
      type?: string;
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
      creationTimestamp?: string;
      /** @description The fingerprint used for optimistic locking of this resource.  Used
       *     internally during updates. */
      labelFingerprint?: string;
      /** @description Last attach timestamp in RFC3339 text format. */
      lastAttachTimestamp?: string;
      /** @description Last detach timestamp in RFC3339 text format. */
      lastDetachTimestamp?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
      /** @description The ID value of the disk used to create this image. This value may
       *     be used to determine whether the image was taken from the current
       *     or a previous instance of a given disk name. */
      sourceDiskId?: string;
      /** @description The ID value of the image used to create this disk. This value
       *     identifies the exact image that was used to create this persistent
       *     disk. For example, if you created the persistent disk from an image
       *     that was later deleted and recreated under the same name, the source
       *     image ID would identify the exact version of the image that was used. */
      sourceImageId?: string;
      /** @description The unique ID of the snapshot used to create this disk. This value
       *     identifies the exact snapshot that was used to create this persistent
       *     disk. For example, if you created the persistent disk from a snapshot
       *     that was later deleted and recreated under the same name, the source
       *     snapshot ID would identify the exact version of the snapshot that was
       *     used. */
      sourceSnapshotId?: string;
      /** @description Links to the users of the disk (attached instances) in form:
       *     project/zones/zone/instances/instance. */
      users?: string[];
    };
  };
}
