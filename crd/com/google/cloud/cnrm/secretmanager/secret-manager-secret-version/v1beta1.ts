import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretManagerSecretVersionV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSecretManagerSecretVersionV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSecretManagerSecretVersionV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "secretmanager.cnrm.cloud.google.com/v1beta1";
    kind: "SecretManagerSecretVersion";
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
    /** @description SecretManagerSecretVersionSpec defines the desired state of SecretManagerSecretVersion */
    spec: {
      /** @description DEPRECATED. You do not need to set this field in direct reconciler mode. Use delete-policy annotation instead. https://cloud.google.com/config-connector/docs/how-to/managing-deleting-resources#keeping_resources_after_deletion The deletion policy for the secret version. Setting 'ABANDON' allows the resource to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be disabled rather than deleted. Default is 'DELETE'. Possible values are: * DELETE * DISABLE * ABANDON. */
      deletionPolicy?: string;
      /** @description Should enable or disable the current SecretVersion. - Enabled version can be accessed and described. - Disabled version cannot be accessed, but the secret's contents still exist */
      enabled?: boolean;
      /** @description DEPRECATED. You do not need to set this field in direct reconciler mode. */
      isSecretDataBase64?: boolean;
      /** @description The SecretVersion number. If given, Config Connector acquires the resource from the Secret Manager service. If not given, Config Connector adds a new secret version to the GCP service, and you can find out the version number from `status.observedState.version` */
      resourceID?: string;
      /** @description The actual secret data. Config Connector supports secret data stored in Kubernetes secret or plain data (base64) */
      secretData?: {
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
      };
      /** @description The resource name of the [Secret][google.cloud.secretmanager.v1.Secret] to create a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] for. */
      secretRef?: {
        /** @description A reference to an externally managed SecretManagerSecret resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/secrets/{{secretID}}". */
        external?: string;
        /** @description The name of a SecretManagerSecret resource. */
        name?: string;
        /** @description The namespace of a SecretManagerSecret resource. */
        namespace?: string;
      } & (unknown | unknown);
    };
    /** @description SecretManagerSecretVersionStatus defines the config connector machine state of SecretManagerSecretVersion */
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
      /** @description DEPRECATING NOTE: Please use status.observedState.createTime instead. */
      createTime?: string;
      /** @description DEPRECATING NOTE: Please use status.observedState.destroyTime instead. */
      destroyTime?: string;
      /** @description A unique specifier for the SecretManagerSecretVersion resource in GCP. */
      externalRef?: string;
      /** @description DEPRECATING NOTE: Please use status.observedState.name instead. */
      name?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. True if payload checksum specified in [SecretPayload][google.cloud.secretmanager.v1.SecretPayload] object has been received by [SecretManagerService][google.cloud.secretmanager.v1.SecretManagerService] on [SecretManagerService.AddSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion]. */
        clientSpecifiedPayloadChecksum?: boolean;
        /** @description Output only. The time at which the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] was created. */
        createTime?: string;
        /** @description Output only. The customer-managed encryption status of the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. Only populated if customer-managed encryption is used and [Secret][google.cloud.secretmanager.v1.Secret] is a Regionalised Secret. */
        customerManagedEncryption?: {
          /** @description Required. The resource name of the Cloud KMS CryptoKeyVersion used to encrypt the secret payload, in the following format: `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/versions/*`. */
          kmsKeyVersionName?: string;
        };
        /** @description Output only. The time this [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] was destroyed. Only present if [state][google.cloud.secretmanager.v1.SecretVersion.state] is [DESTROYED][google.cloud.secretmanager.v1.SecretVersion.State.DESTROYED]. */
        destroyTime?: string;
        /** @description Output only. The resource name of the
         *     [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] in the
         *     format `projects/*\/secrets/*\/versions/*`.
         *
         *     [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] IDs in a
         *     [Secret][google.cloud.secretmanager.v1.Secret] start at 1 and are
         *     incremented for each subsequent version of the secret. */
        name?: string;
        /** @description The replication status of the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. */
        replicationStatus?: {
          /** @description Describes the replication status of a
           *      [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] with
           *      automatic replication.
           *
           *      Only populated if the parent
           *      [Secret][google.cloud.secretmanager.v1.Secret] has an automatic
           *      replication policy. */
          automatic?: {
            /** @description Output only. The customer-managed encryption status of the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. Only populated if customer-managed encryption is used. */
            customerManagedEncryption?: {
              /** @description Required. The resource name of the Cloud KMS CryptoKeyVersion used to encrypt the secret payload, in the following format: `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/versions/*`. */
              kmsKeyVersionName?: string;
            };
          };
          /** @description Describes the replication status of a
           *      [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] with
           *      user-managed replication.
           *
           *      Only populated if the parent
           *      [Secret][google.cloud.secretmanager.v1.Secret] has a user-managed
           *      replication policy. */
          userManaged?: {
            /** @description Output only. The list of replica statuses for the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. */
            replicas?: {
              /** @description Output only. The customer-managed encryption status of the [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. Only populated if customer-managed encryption is used. */
              customerManagedEncryption?: {
                /** @description Required. The resource name of the Cloud KMS CryptoKeyVersion used to encrypt the secret payload, in the following format: `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/versions/*`. */
                kmsKeyVersionName?: string;
              };
              /** @description Output only. The canonical ID of the replica location. For example: `"us-east1"`. */
              location?: string;
            }[];
          };
        };
        /** @description Optional. Output only. Scheduled destroy time for secret version. This is a part of the Delayed secret version destroy feature. For a Secret with a valid version destroy TTL, when a secert version is destroyed, the version is moved to disabled state and it is scheduled for destruction. The version is destroyed only after the `scheduled_destroy_time`. */
        scheduledDestroyTime?: string;
      };
      /** @description DEPRECATED. */
      version?: string;
    };
  };
}
