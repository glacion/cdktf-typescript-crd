import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIdentityMembershipV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudIdentityMembershipV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "cloudidentity.cnrm.cloud.google.com/v1beta1",
        kind: "CloudIdentityMembership",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCloudIdentityMembershipV1beta1Config extends ManifestConfig {
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
  };
}
