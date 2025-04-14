import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTagsTagKeyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTagsTagKeyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "tags.cnrm.cloud.google.com/v1beta1", kind: "TagsTagKey", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesTagsTagKeyV1beta1Config extends ManifestConfig {
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
      /** @description User-assigned description of the TagKey. Must not exceed 256 characters. */
      description?: string;
      /** @description Immutable. Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}. */
      parent: string;
      /** @description Immutable. Optional. A purpose cannot be changed once set.
       *
       *     A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. Possible values: ["GCE_FIREWALL"]. */
      purpose?: string;
      /** @description Immutable. Optional. Purpose data cannot be changed once set.
       *
       *     Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: 'network = "<project-name>/<vpc-name>"'. */
      purposeData?: {
        [key: string]: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
       *
       *     The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
      shortName: string;
    };
  };
}
