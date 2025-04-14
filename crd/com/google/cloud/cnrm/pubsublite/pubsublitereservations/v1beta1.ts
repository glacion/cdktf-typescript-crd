import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPubSubLiteReservationV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesPubSubLiteReservationV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "pubsublite.cnrm.cloud.google.com/v1beta1", kind: "PubSubLiteReservation", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesPubSubLiteReservationV1beta1Config extends ManifestConfig {
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
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The region of the pubsub lite reservation. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The reserved throughput capacity. Every unit of throughput capacity is
       *     equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
       *     messages. */
      throughputCapacity: number;
    };
  };
}
