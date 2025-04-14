import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPubSubSchemaV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesPubSubSchemaV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "pubsub.cnrm.cloud.google.com/v1beta1", kind: "PubSubSchema", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesPubSubSchemaV1beta1Config extends ManifestConfig {
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
      /** @description The definition of the schema.
       *     This should contain a string representing the full definition of the schema
       *     that is a valid schema definition of the type specified in type. */
      definition?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The type of the schema definition Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "PROTOCOL_BUFFER", "AVRO"]. */
      type?: string;
    };
  };
}
