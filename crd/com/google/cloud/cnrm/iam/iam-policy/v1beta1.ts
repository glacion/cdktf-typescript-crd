import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IamCnrmCloudGoogleComIAMPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: IamCnrmCloudGoogleComIAMPolicyV1beta1Config) {
    super(scope, id, config);
  }
}
export interface IamCnrmCloudGoogleComIAMPolicyV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMPolicy";
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
    /** @description IAMPolicySpec defines the desired state of IAMPolicy */
    spec?: {
      /** @description Optional. The list of IAM audit configs. */
      auditConfigs?: {
        /** @description Required. The configuration for logging of each type of permission. */
        auditLogConfigs: {
          /** @description Identities that do not cause logging for this type of permission. The format is the same as that for 'members' in IAMPolicy/IAMPolicyMember. */
          exemptedMembers?: string[];
          /** @description Permission type for which logging is to be configured. Must be one of 'DATA_READ', 'DATA_WRITE', or 'ADMIN_READ'. */
          logType: string;
        }[];
        /** @description Required. The service for which to enable Data Access audit logs. The special value 'allServices' covers all services. Note that if there are audit configs covering both 'allServices' and a specific service, then the union of the two audit configs is used for that service: the 'logTypes' specified in each 'auditLogConfig' are enabled, and the 'exemptedMembers' in each 'auditLogConfig' are exempted. */
        service: string;
      }[];
      /** @description Optional. The list of IAM bindings. */
      bindings?: {
        /** @description Optional. The condition under which the binding applies. */
        condition?: {
          description?: string;
          expression: string;
          title: string;
        };
        /** @description Optional. The list of IAM users to be bound to the role. */
        members?: string[];
        /** @description Required. The role to bind the users to. */
        role: string;
      }[];
      /** @description Immutable. Required. The GCP resource to set the IAM policy on. */
      resourceRef: {
        apiVersion?: string;
        external?: string;
        kind: string;
        name?: string;
        namespace?: string;
      } & (unknown | unknown | unknown);
    };
    /** @description IAMPolicyStatus defines the observed state of IAMPolicy */
    status?: {
      /** @description Conditions represent the latest available observations of the IAM policy's current state. */
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
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
    };
  };
}
