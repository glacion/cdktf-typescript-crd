import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPrivilegedAccessManagerEntitlementV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesPrivilegedAccessManagerEntitlementV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "privilegedaccessmanager.cnrm.cloud.google.com/v1alpha1",
        kind: "PrivilegedAccessManagerEntitlement",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesPrivilegedAccessManagerEntitlementV1alpha1Config extends ManifestConfig {
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
      /** @description Optional. Additional email addresses to be notified based on actions taken. */
      additionalNotificationTargets?: {
        /** @description Optional. Additional email addresses to be notified when a principal (requester) is granted access. */
        adminEmailRecipients?: string[];
        /** @description Optional. Additional email address to be notified about an eligible entitlement. */
        requesterEmailRecipients?: string[];
      };
      /** @description Optional. The approvals needed before access are granted to a requester. No approvals are needed if this field is null. */
      approvalWorkflow?: {
        /** @description An approval workflow where users designated as approvers review and act on the grants. */
        manualApprovals: {
          /** @description Optional. Whether the approvers need to provide a justification for their actions. */
          requireApproverJustification?: boolean;
          /** @description Optional. List of approval steps in this workflow. These steps are followed in the specified order sequentially. Only 1 step is supported. */
          steps?: {
            /**
             * Format: int32
             * @description Required. How many users from the above list need to approve. If there aren't enough distinct users in the list, then the workflow indefinitely blocks. Should always be greater than 0. 1 is the only supported value.
             */
            approvalsNeeded: number;
            /** @description Optional. Additional email addresses to be notified when a grant is pending approval. */
            approverEmailRecipients?: string[];
            /** @description Optional. The potential set of approvers in this step. This list must contain at most one entry. */
            approvers?: {
              /** @description Optional. Users who are allowed for the operation. Each entry should be a valid v1 IAM principal identifier. The format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1 */
              principals: string[];
            }[];
          }[];
        };
      };
      /** @description Who can create grants using this entitlement. This list should contain at most one entry. */
      eligibleUsers: {
        /** @description Optional. Users who are allowed for the operation. Each entry should be a valid v1 IAM principal identifier. The format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1 */
        principals: string[];
      }[];
      /** @description Immutable. The Folder that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set. */
      folderRef?: {
        /** @description The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set. */
        external?: string;
        /** @description The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set. */
        name?: string;
        /** @description The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Location of the resource. */
      location: string;
      /** @description Required. The maximum amount of time that access is granted for a request. A requester can ask for a duration less than this, but never more. */
      maxRequestDuration: string;
      /** @description Immutable. The Organization that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set. */
      organizationRef?: {
        /** @description The 'name' field of an organization, when not managed by Config Connector. */
        external: string;
      };
      /** @description The access granted to a requester on successful approval. */
      privilegedAccess: {
        /** @description Access to a Google Cloud resource through IAM. */
        gcpIAMAccess: {
          /** @description Required. Role bindings that are created on successful grant. */
          roleBindings: {
            /** @description Optional. The expression field of the IAM condition to be associated
             *     with the role. If specified, a user with an active grant for this
             *     entitlement is able to access the resource only if this condition
             *     evaluates to true for their request.
             *
             *     This field uses the same CEL format as IAM and supports all attributes
             *     that IAM supports, except tags. More details can be found at
             *     https://cloud.google.com/iam/docs/conditions-overview#attributes. */
            conditionExpression?: string;
            /** @description Required. IAM role to be granted. More details can be found at https://cloud.google.com/iam/docs/roles-overview. */
            role: string;
          }[];
        };
      };
      /** @description Immutable. The Project that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set. */
      projectRef?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Required. The manner in which the requester should provide a justification for requesting access. */
      requesterJustificationConfig: {
        /** @description NotMandatory justification type means the justification isn't required and can be provided in any of the supported formats. The user must explicitly opt out using this field if a justification from the requester isn't mandatory. The only accepted value is `{}` (empty struct). Either 'notMandatory' or 'unstructured' field must be set. */
        notMandatory?: Record<string, never>;
        /** @description Unstructured justification type means the justification is in the format of a string. If this is set, the server allows the requester to provide a justification but doesn't validate it. The only accepted value is `{}` (empty struct). Either 'notMandatory' or 'unstructured' field must be set. */
        unstructured?: Record<string, never>;
      };
      /** @description The PrivilegedAccessManagerEntitlement name. If not given, the 'metadata.name' will be used. */
      resourceID?: string;
    };
  };
}
