import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMPolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMPolicyV1beta1Config extends ManifestConfig {
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
  };
}
