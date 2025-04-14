import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTagsTagValueV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTagsTagValueV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "tags.cnrm.cloud.google.com/v1beta1", kind: "TagsTagValue", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesTagsTagValueV1beta1Config extends ManifestConfig {
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
      /** @description User-assigned description of the TagValue. Must not exceed 256 characters. */
      description?: string;
      parentRef: {
        /** @description Allowed value: string of the format `tagKeys/{{value}}`, where {{value}} is the `name` field of a `TagsTagKey` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey.
       *
       *     The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
      shortName: string;
    };
  };
}
