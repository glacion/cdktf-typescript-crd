import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSourceRepoRepositoryV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSourceRepoRepositoryV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "sourcerepo.cnrm.cloud.google.com/v1beta1", kind: "SourceRepoRepository", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSourceRepoRepositoryV1beta1Config extends ManifestConfig {
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
      /** @description How this repository publishes a change in the repository through Cloud Pub/Sub.
       *     Keyed by the topic names. */
      pubsubConfigs?: {
        /** @description The format of the Cloud Pub/Sub messages.
         *     - PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
         *     - JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]. */
        messageFormat: string;
        /** @description Service account used for publishing Cloud Pub/Sub messages. This
         *     service account needs to be in the same project as the
         *     pubsubConfig. When added, the caller needs to have
         *     iam.serviceAccounts.actAs permission on this service account. If
         *     unspecified, it defaults to the compute engine default service
         *     account. */
        serviceAccountRef?: {
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        topicRef: {
          /** @description Allowed value: The `name` field of a `PubSubTopic` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
