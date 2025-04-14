import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMAuditConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMAuditConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMAuditConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMAuditConfigV1beta1Config extends ManifestConfig {
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
      /** @description Required. The configuration for logging of each type of permission. */
      auditLogConfigs: {
        /** @description Identities that do not cause logging for this type of permission. The format is the same as that for 'members' in IAMPolicy/IAMPolicyMember. */
        exemptedMembers?: string[];
        /** @description Permission type for which logging is to be configured. Must be one of 'DATA_READ', 'DATA_WRITE', or 'ADMIN_READ'. */
        logType: string;
      }[];
      /** @description Immutable. Required. The GCP resource to set the IAMAuditConfig on (e.g. project). */
      resourceRef: {
        apiVersion?: string;
        external?: string;
        kind: string;
        name?: string;
        namespace?: string;
      };
      /** @description Immutable. Required. The service for which to enable Data Access audit logs. The special value 'allServices' covers all services. Note that if there are audit configs covering both 'allServices' and a specific service, then the union of the two audit configs is used for that service: the 'logTypes' specified in each 'auditLogConfig' are enabled, and the 'exemptedMembers' in each 'auditLogConfig' are exempted. */
      service: string;
    };
  };
}
