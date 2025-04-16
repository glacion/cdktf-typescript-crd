import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIdentityMembershipV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCloudIdentityMembershipV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCloudIdentityMembershipV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "cloudidentity.cnrm.cloud.google.com/v1beta1";
    kind?: "CloudIdentityMembership";
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
    /** @description CloudIdentityMembershipSpec defines the desired state of CloudIdentityMembership */
    spec: {
      /** @description Immutable. */
      groupRef: {
        /** @description A reference to an externally managed CloudIdentityGroup resource. Should be in the format "groups/{{groupID}}". */
        external?: string;
        /** @description The name of a CloudIdentityGroup resource. */
        name?: string;
        /** @description The namespace of a CloudIdentityGroup resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned. */
      memberKey?: {
        /** @description Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
        id: string;
        /** @description Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
        namespace?: string;
      };
      /** @description Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned. */
      preferredMemberKey: {
        /** @description Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
        id: string;
        /** @description Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
        namespace?: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`. */
      roles: {
        /** @description The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value. */
        expiryDetail?: {
          /**
           * Format: date-time
           * @description The time at which the `MembershipRole` will expire.
           */
          expireTime?: string;
        };
        /** @description The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`. */
        name: string;
        /** @description Evaluations of restrictions applied to parent group on this membership. */
        restrictionEvaluations?: {
          /** @description Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation. */
          memberRestrictionEvaluation?: {
            /** @description Output only. The current state of the restriction */
            state?: string;
          };
        };
      }[];
    };
    /** @description CloudIdentityMembershipStatus defines the config connector machine state of CloudIdentityMembership */
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
      /**
       * Format: date-time
       * @description Output only. The time when the `Membership` was created.
       */
      createTime?: string;
      /** @description Output only. Delivery setting associated with the membership. Possible values: DELIVERY_SETTING_UNSPECIFIED, ALL_MAIL, DIGEST, DAILY, NONE, DISABLED */
      deliverySetting?: string;
      /** @description Output only. The display name of this member, if available */
      displayName?: {
        /** @description Output only. Member's family name */
        familyName?: string;
        /** @description Output only. Localized UTF-16 full name for the member. Localization is done based on the language in the request and the language of the stored display name. */
        fullName?: string;
        /** @description Output only. Member's given name */
        givenName?: string;
      };
      /** @description A unique Config Connector specifier for the resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description Output only. The type of the membership. Possible values: OWNER_TYPE_UNSPECIFIED, OWNER_TYPE_CUSTOMER, OWNER_TYPE_PARTNER */
      type?: string;
      /**
       * Format: date-time
       * @description Output only. The time when the `Membership` was last updated.
       */
      updateTime?: string;
    };
  };
}
