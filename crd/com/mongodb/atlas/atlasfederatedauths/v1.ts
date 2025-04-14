import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasFederatedAuthV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasFederatedAuthV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasFederatedAuth", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasFederatedAuthV1Config extends ManifestConfig {
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
      /** @description Connection secret with API credentials for configuring the federation.
       *     These credentials must have OrganizationOwner permissions. */
      connectionSecretRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /** @description The collection of unique ids representing the identity providers that can be used for data access in this organization.
       *     Currently connected data access identity providers missing from the this field will be disconnected. */
      dataAccessIdentityProviders?: string[];
      /** @description Approved domains that restrict users who can join the organization based on their email address. */
      domainAllowList?: string[];
      /** @description Prevent users in the federation from accessing organizations outside of the federation, and creating new organizations.
       *     This option applies to the entire federation.
       *     See more information at https://www.mongodb.com/docs/atlas/security/federation-advanced-options/#restrict-user-membership-to-the-federation */
      domainRestrictionEnabled?: boolean;
      enabled?: boolean;
      /** @description Atlas roles that are granted to a user in this organization after authenticating. */
      postAuthRoleGrants?: string[];
      /** @description Map IDP groups to Atlas roles. */
      roleMappings?: {
        /** @description ExternalGroupName is the name of the IDP group to which this mapping applies. */
        externalGroupName?: string;
        /** @description RoleAssignments define the roles within projects that should be given to members of the group. */
        roleAssignments?: {
          /** @description The Atlas project in the same org in which the role should be given. */
          projectName?: string;
          /**
           * @description The role in Atlas that should be given to group members.
           * @enum {string}
           */
          role?:
            | "ORG_MEMBER"
            | "ORG_READ_ONLY"
            | "ORG_BILLING_ADMIN"
            | "ORG_GROUP_CREATOR"
            | "ORG_OWNER"
            | "ORG_BILLING_READ_ONLY"
            | "ORG_TEAM_MEMBERS_ADMIN"
            | "GROUP_AUTOMATION_ADMIN"
            | "GROUP_BACKUP_ADMIN"
            | "GROUP_MONITORING_ADMIN"
            | "GROUP_OWNER"
            | "GROUP_READ_ONLY"
            | "GROUP_USER_ADMIN"
            | "GROUP_BILLING_ADMIN"
            | "GROUP_DATA_ACCESS_ADMIN"
            | "GROUP_DATA_ACCESS_READ_ONLY"
            | "GROUP_DATA_ACCESS_READ_WRITE"
            | "GROUP_CHARTS_ADMIN"
            | "GROUP_CLUSTER_MANAGER"
            | "GROUP_SEARCH_INDEX_EDITOR";
        }[];
      }[];
      ssoDebugEnabled?: boolean;
    };
  };
}
