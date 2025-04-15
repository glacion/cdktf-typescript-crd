import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIdentityGroupV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCloudIdentityGroupV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCloudIdentityGroupV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cloudidentity.cnrm.cloud.google.com/v1beta1";
    kind: "CloudIdentityGroup";
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
    /** @description CloudIdentityGroupSpec defines the desired state of CloudIdentityGroup */
    spec: {
      /** @description An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters. */
      description?: string;
      /** @description The display name of the `Group`. */
      displayName?: string;
      /** @description Immutable. EntityKey of the Group. */
      groupKey: {
        /** @description Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
        id: string;
        /** @description Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
        namespace?: string;
      };
      /** @description Immutable. The initial configuration options for creating a Group. See the [API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig) for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]. */
      initialGroupConfig?: string;
      /** @description One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value. Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added. Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic. Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value. */
      labels: {
        [key: string]: string;
      };
      /** @description Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
      parent: string;
      /** @description Immutable. The CloudIdentityGroup name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description CloudIdentityGroupStatus defines the config connector machine state of CloudIdentityGroup */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description The time when the `Group` was created. */
      createTime?: string;
      /** @description A unique Config Connector specifier for the resource in GCP. */
      externalRef?: string;
      /** @description The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
      name?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Additional group keys associated with the Group. */
        additionalGroupKeys?: {
          /** @description Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
          id: string;
          /** @description Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
          namespace?: string;
        }[];
      };
      /** @description The time when the `Group` was last updated. */
      updateTime?: string;
    };
  };
}
