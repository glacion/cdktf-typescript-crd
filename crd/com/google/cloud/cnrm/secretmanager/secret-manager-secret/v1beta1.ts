import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretManagerSecretV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSecretManagerSecretV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSecretManagerSecretV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "secretmanager.cnrm.cloud.google.com/v1beta1";
    kind: "SecretManagerSecret";
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
    /** @description SecretManagerSecretSpec defines the desired state of SecretManagerSecret */
    spec?: {
      /** @description Optional. Custom metadata about the secret.
       *
       *      Annotations are distinct from various forms of labels.
       *      Annotations exist to allow client tools to store their own state
       *      information without requiring a database.
       *
       *      Annotation keys must be between 1 and 63 characters long, have a UTF-8
       *      encoding of maximum 128 bytes, begin and end with an alphanumeric character
       *      ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and
       *      alphanumerics in between these symbols.
       *
       *      The total size of annotation keys and values must be less than 16KiB. */
      annotations?: {
        [key: string]: string;
      };
      /** @description Optional. Timestamp in UTC when the [Secret][google.cloud.secretmanager.v1.Secret] is scheduled to expire. This is always provided on output, regardless of what was sent on input. */
      expireTime?: string;
      /** @description Optional. Immutable. The replication policy of the secret data attached to
       *      the [Secret][google.cloud.secretmanager.v1.Secret].
       *
       *      The replication policy cannot be changed after the Secret has been created. */
      replication?: {
        /** @description The [Secret][google.cloud.secretmanager.v1.Secret] will automatically be replicated without any restrictions. */
        auto?: {
          /** @description Optional. The customer-managed encryption configuration of the
           *      [Secret][google.cloud.secretmanager.v1.Secret]. If no configuration is
           *      provided, Google-managed default encryption is used.
           *
           *      Updates to the [Secret][google.cloud.secretmanager.v1.Secret] encryption
           *      configuration only apply to
           *      [SecretVersions][google.cloud.secretmanager.v1.SecretVersion] added
           *      afterwards. They do not apply retroactively to existing
           *      [SecretVersions][google.cloud.secretmanager.v1.SecretVersion]. */
          customerManagedEncryption?: {
            /** @description Required. The resource name of the Cloud KMS CryptoKey used to encrypt
             *      secret payloads.
             *
             *      For secrets using the
             *      [UserManaged][google.cloud.secretmanager.v1.Replication.UserManaged]
             *      replication policy type, Cloud KMS CryptoKeys must reside in the same
             *      location as the [replica location][Secret.UserManaged.Replica.location].
             *
             *      For secrets using the
             *      [Automatic][google.cloud.secretmanager.v1.Replication.Automatic]
             *      replication policy type, Cloud KMS CryptoKeys must reside in `global`.
             *
             *      The expected format is `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`. */
            kmsKeyRef: {
              /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
              external?: string;
              /** @description The `name` of a `KMSCryptoKey` resource. */
              name?: string;
              /** @description The `namespace` of a `KMSCryptoKey` resource. */
              namespace?: string;
            } & (unknown | unknown);
          };
        };
        /** @description The Secret will automatically be replicated without any restrictions. */
        automatic?: boolean;
        /** @description The [Secret][google.cloud.secretmanager.v1.Secret] will only be replicated into the locations specified. */
        userManaged?: {
          /** @description Required. The list of Replicas for this
           *      [Secret][google.cloud.secretmanager.v1.Secret].
           *
           *      Cannot be empty. */
          replicas: {
            /** @description Optional. The customer-managed encryption configuration of the
             *      [User-Managed Replica][Replication.UserManaged.Replica]. If no
             *      configuration is provided, Google-managed default encryption is used.
             *
             *      Updates to the [Secret][google.cloud.secretmanager.v1.Secret]
             *      encryption configuration only apply to
             *      [SecretVersions][google.cloud.secretmanager.v1.SecretVersion] added
             *      afterwards. They do not apply retroactively to existing
             *      [SecretVersions][google.cloud.secretmanager.v1.SecretVersion]. */
            customerManagedEncryption?: {
              /** @description Required. The resource name of the Cloud KMS CryptoKey used to encrypt
               *      secret payloads.
               *
               *      For secrets using the
               *      [UserManaged][google.cloud.secretmanager.v1.Replication.UserManaged]
               *      replication policy type, Cloud KMS CryptoKeys must reside in the same
               *      location as the [replica location][Secret.UserManaged.Replica.location].
               *
               *      For secrets using the
               *      [Automatic][google.cloud.secretmanager.v1.Replication.Automatic]
               *      replication policy type, Cloud KMS CryptoKeys must reside in `global`.
               *
               *      The expected format is `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`. */
              kmsKeyRef: {
                /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
                external?: string;
                /** @description The `name` of a `KMSCryptoKey` resource. */
                name?: string;
                /** @description The `namespace` of a `KMSCryptoKey` resource. */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description The canonical IDs of the location to replicate data. For example: `"us-east1"`. */
            location: string;
          }[];
        };
      };
      /** @description The SecretManagerSecret name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Optional. Rotation policy attached to the [Secret][google.cloud.secretmanager.v1.Secret]. May be excluded if there is no rotation policy. */
      rotation?: {
        /** @description Optional. Timestamp in UTC at which the
         *      [Secret][google.cloud.secretmanager.v1.Secret] is scheduled to rotate.
         *      Cannot be set to less than 300s (5 min) in the future and at most
         *      3153600000s (100 years).
         *
         *      [next_rotation_time][google.cloud.secretmanager.v1.Rotation.next_rotation_time]
         *      MUST  be set if
         *      [rotation_period][google.cloud.secretmanager.v1.Rotation.rotation_period]
         *      is set. */
        nextRotationTime?: string;
        /** @description Input only. The Duration between rotation notifications. Must be in seconds
         *      and at least 3600s (1h) and at most 3153600000s (100 years).
         *
         *      If
         *      [rotation_period][google.cloud.secretmanager.v1.Rotation.rotation_period]
         *      is set,
         *      [next_rotation_time][google.cloud.secretmanager.v1.Rotation.next_rotation_time]
         *      must be set.
         *      [next_rotation_time][google.cloud.secretmanager.v1.Rotation.next_rotation_time]
         *      will be advanced by this period when the service automatically sends
         *      rotation notifications. */
        rotationPeriod?: string;
      };
      /** @description Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions. */
      topics?: {
        topicRef: {
          /** @description If provided must be in the format `projects/[project_id]/topics/[topic_id]`. */
          external?: string;
          /** @description The `metadata.name` field of a `PubSubTopic` resource. */
          name?: string;
          /** @description The `metadata.namespace` field of a `PubSubTopic` resource. */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      /** @description Input only. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". */
      ttl?: string;
      /** @description Optional. Mapping from version alias to version name.
       *
       *      A version alias is a string with a maximum length of 63 characters and can
       *      contain uppercase and lowercase letters, numerals, and the hyphen (`-`)
       *      and underscore ('_') characters. An alias string must start with a
       *      letter and cannot be the string 'latest' or 'NEW'.
       *      No more than 50 aliases can be assigned to a given secret.
       *
       *      Version-Alias pairs will be viewable via GetSecret and modifiable via
       *      UpdateSecret. Access by alias is only be supported on
       *      GetSecretVersion and AccessSecretVersion. */
      versionAliases?: {
        [key: string]: string;
      };
    };
    /** @description SecretManagerSecretStatus defines the config connector machine state of SecretManagerSecret */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description A unique specifier for the SecretManagerSecret resource in GCP. */
      externalRef?: string;
      /** @description [DEPRECATED] Please read from `.status.externalRef` instead. Config Connector will remove the `.status.name` in v1 Version. */
      name?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        versionAliases?: {
          [key: string]: string;
        };
      };
    };
  };
}
