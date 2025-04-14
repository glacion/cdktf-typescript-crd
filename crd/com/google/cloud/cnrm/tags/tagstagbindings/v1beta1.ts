import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTagsTagBindingV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTagsTagBindingV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "tags.cnrm.cloud.google.com/v1beta1", kind: "TagsTagBinding", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesTagsTagBindingV1beta1Config extends ManifestConfig {
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
      parentRef: {
        /** @description Allowed value: string of the format `//cloudresourcemanager.googleapis.com/projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      tagValueRef: {
        /** @description Allowed value: string of the format `tagValues/{{value}}`, where {{value}} is the `name` field of a `TagsTagValue` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
