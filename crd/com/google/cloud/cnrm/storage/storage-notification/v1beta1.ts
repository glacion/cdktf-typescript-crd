import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageNotificationV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesStorageNotificationV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesStorageNotificationV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "storage.cnrm.cloud.google.com/v1beta1";
    kind?: "StorageNotification";
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
      bucketRef: {
        /** @description Allowed value: The `name` field of a `StorageBucket` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable.  A set of key/value attribute pairs to attach to each Cloud Pub/Sub message published for this notification subscription. */
      customAttributes?: {
        [key: string]: string;
      };
      /** @description Immutable. List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: "OBJECT_FINALIZE", "OBJECT_METADATA_UPDATE", "OBJECT_DELETE", "OBJECT_ARCHIVE". */
      eventTypes?: string[];
      /** @description Immutable. Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix. */
      objectNamePrefix?: string;
      /** @description Immutable. The desired content of the Payload. One of "JSON_API_V1" or "NONE". */
      payloadFormat: string;
      /** @description Immutable. Optional. The service-generated notificationId of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      topicRef: {
        /** @description Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description The ID of the created notification. */
      notificationId?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The URI of the created resource. */
      selfLink?: string;
    };
  };
}
