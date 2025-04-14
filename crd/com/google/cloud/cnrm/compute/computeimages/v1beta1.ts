import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeImageV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeImageV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeImage", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeImageV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. Provide this property when
       *     you create the resource. */
      description?: string;
      /** @description The source disk to create this image based on.
       *     You must provide either this property or the
       *     rawDisk.source property but not both to create an image. */
      diskRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeDisk` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Size of the image when restored onto a persistent disk (in GB). */
      diskSizeGb?: number;
      /** @description Immutable. The name of the image family to which this image belongs. You can
       *     create disks by specifying an image family instead of a specific
       *     image name. The image family always returns its latest image that is
       *     not deprecated. The name of the image family must comply with
       *     RFC1035. */
      family?: string;
      /** @description Immutable. A list of features to enable on the guest operating system.
       *     Applicable only for bootable images. */
      guestOsFeatures?: {
        /** @description Immutable. The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE"]. */
        type: string;
      }[];
      /** @description Immutable. Encrypts the image using a customer-supplied encryption key.
       *
       *     After you encrypt an image with a customer-supplied key, you must
       *     provide the same key if you use the image later (e.g. to create a
       *     disk from the image). */
      imageEncryptionKey?: {
        /** @description The self link of the encryption key that is stored in Google Cloud
         *     KMS. */
        kmsKeySelfLinkRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The service account being used for the encryption request for the
         *     given KMS key. If absent, the Compute Engine default service account
         *     is used. */
        kmsKeyServiceAccountRef?: {
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Any applicable license URI. */
      licenses?: string[];
      /** @description Immutable. The parameters of the raw disk image. */
      rawDisk?: {
        /** @description Immutable. The format used to encode and transmit the block device, which
         *     should be TAR. This is just a container and transmission format
         *     and not a runtime format. Provided by the client when the disk
         *     image is created. Default value: "TAR" Possible values: ["TAR"]. */
        containerType?: string;
        /** @description Immutable. An optional SHA1 checksum of the disk image before unpackaging.
         *     This is provided by the client when the disk image is created. */
        sha1?: string;
        /** @description Immutable. The full Google Cloud Storage URL where disk storage is stored
         *     You must provide either this property or the sourceDisk property
         *     but not both. */
        source: string;
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The source image used to create this image. */
      sourceImageRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeImage` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The source snapshot used to create this image. */
      sourceSnapshotRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSnapshot` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Cloud Storage bucket storage location of the image
       *     (regional or multi-regional).
       *     Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. */
      storageLocations?: string[];
    };
  };
}
