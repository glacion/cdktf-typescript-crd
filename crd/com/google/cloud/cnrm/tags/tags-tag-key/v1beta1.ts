import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class TagsCnrmCloudGoogleComTagsTagKeyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: TagsCnrmCloudGoogleComTagsTagKeyV1beta1Config) {
    super(scope, id, config);
  }
}
export interface TagsCnrmCloudGoogleComTagsTagKeyV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "tags.cnrm.cloud.google.com/v1beta1";
    kind: "TagsTagKey";
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
      /** @description Output only. Creation time.
       *
       *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
      createTime?: string;
      /** @description The generated numeric id for the TagKey. */
      name?: string;
      /** @description Output only. Namespaced name of the TagKey. */
      namespacedName?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Update time.
       *
       *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
      updateTime?: string;
    };
  };
}
