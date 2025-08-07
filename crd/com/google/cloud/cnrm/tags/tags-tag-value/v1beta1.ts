import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class TagsCnrmCloudGoogleComTagsTagValueV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: TagsCnrmCloudGoogleComTagsTagValueV1beta1Config) {
    super(scope, id, config);
  }
}
export interface TagsCnrmCloudGoogleComTagsTagValueV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "tags.cnrm.cloud.google.com/v1beta1";
    kind: "TagsTagValue";
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
      /** @description The generated numeric id for the TagValue. */
      name?: string;
      /** @description Output only. Namespaced name of the TagValue. Will be in the format {parentNamespace}/{tagKeyShortName}/{shortName}. */
      namespacedName?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Update time.
       *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
      updateTime?: string;
    };
  };
}
