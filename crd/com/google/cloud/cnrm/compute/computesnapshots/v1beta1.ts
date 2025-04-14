import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeSnapshotV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeSnapshotV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeSnapshot", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeSnapshotV1beta1Config extends ManifestConfig {
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
        /** @description Immutable. Creates the new snapshot in the snapshot chain labeled with the
         *     specified name. The chain name must be 1-63 characters long and
         *     comply with RFC1035. This is an uncommon option only for advanced
         *     service owners who needs to create separate snapshot chains, for
         *     example, for chargeback tracking.  When you describe your snapshot
         *     resource, this field is visible only if it has a non-empty value. */
        chainName?: string;
        /** @description Immutable. An optional description of this resource. */
        description?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Immutable. Encrypts the snapshot using a customer-supplied encryption key.
         *
         *     After you encrypt a snapshot using a customer-supplied key, you must
         *     provide the same key if you use the snapshot later. For example, you
         *     must provide the encryption key when you create a disk from the
         *     encrypted snapshot in a future request.
         *
         *     Customer-supplied encryption keys do not protect access to metadata of
         *     the snapshot.
         *
         *     If you do not provide an encryption key when creating the snapshot,
         *     then the snapshot will be encrypted using an automatically generated
         *     key and you do not need to provide a key to use the snapshot later. */
        snapshotEncryptionKey?: {
          /** @description The encryption key that is stored in Google Cloud KMS. */
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
          /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
           *     encryption key that protects this resource. */
          sha256?: string;
        };
        /** @description Immutable. The customer-supplied encryption key of the source snapshot. Required
         *     if the source snapshot is protected by a customer-supplied encryption
         *     key. */
        sourceDiskEncryptionKey?: {
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
        };
        /** @description A reference to the disk used to create this snapshot. */
        sourceDiskRef: {
          /** @description Allowed value: The `name` field of a `ComputeDisk` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Cloud Storage bucket storage location of the snapshot (regional or multi-regional). */
        storageLocations?: string[];
        /** @description Immutable. A reference to the zone where the disk is hosted. */
        zone?: string;
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
        /** @description Size of the snapshot, specified in GB. */
        diskSizeGb?: number;
        /** @description The fingerprint used for optimistic locking of this resource. Used
         *     internally during updates. */
        labelFingerprint?: string;
        /** @description A list of public visible licenses that apply to this snapshot. This
         *     can be because the original image had licenses attached (such as a
         *     Windows image).  snapshotEncryptionKey nested object Encrypts the
         *     snapshot using a customer-supplied encryption key. */
        licenses?: string[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
        /** @description The unique identifier for the resource. */
        snapshotId?: number;
        /** @description A size of the storage used by the snapshot. As snapshots share
         *     storage, this number is expected to change with snapshot
         *     creation/deletion. */
        storageBytes?: number;
      };
    };
  };
}
