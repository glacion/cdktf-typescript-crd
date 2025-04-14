import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPubSubTopicV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesPubSubTopicV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "pubsub.cnrm.cloud.google.com/v1beta1", kind: "PubSubTopic", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesPubSubTopicV1beta1Config extends ManifestConfig {
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
      /** @description The KMSCryptoKey to be used to protect access to messages published
       *     on this topic. Your project's Pub/Sub service account
       *     ('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com')
       *     must have 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this
       *     feature. */
      kmsKeyRef?: {
        /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Indicates the minimum duration to retain a message after it is published
       *     to the topic. If this field is set, messages published to the topic in
       *     the last messageRetentionDuration are always available to subscribers.
       *     For instance, it allows any attached subscription to seek to a timestamp
       *     that is up to messageRetentionDuration in the past. If this field is not
       *     set, message retention is controlled by settings on individual subscriptions.
       *     Cannot be more than 31 days or less than 10 minutes. */
      messageRetentionDuration?: string;
      /** @description Policy constraining the set of Google Cloud Platform regions where
       *     messages published to the topic may be stored. If not present, then no
       *     constraints are in effect. */
      messageStoragePolicy?: {
        /** @description A list of IDs of GCP regions where messages that are published to
         *     the topic may be persisted in storage. Messages published by
         *     publishers running in non-allowed GCP regions (or running outside
         *     of GCP altogether) will be routed for storage in one of the
         *     allowed regions. An empty list means that no regions are allowed,
         *     and is not a valid configuration. */
        allowedPersistenceRegions: string[];
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Settings for validating messages published against a schema. */
      schemaSettings?: {
        /** @description The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. */
        encoding?: string;
        schemaRef: {
          /** @description Allowed value: string of the format `projects/{{project}}/schemas/{{value}}`, where {{value}} is the `name` field of a `PubSubSchema` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
    };
  };
}
