import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageNotificationV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesStorageNotificationV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "storage.cnrm.cloud.google.com/v1beta1", kind: "StorageNotification", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesStorageNotificationV1beta1Config extends ManifestConfig {
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
  };
}
