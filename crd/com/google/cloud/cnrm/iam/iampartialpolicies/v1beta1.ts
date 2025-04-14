import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMPartialPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMPartialPolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMPartialPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMPartialPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Optional. The list of IAM bindings managed by Config Connector. */
      bindings?: {
        /** @description Optional. The condition under which the binding applies. */
        condition?: {
          description?: string;
          expression: string;
          title: string;
        };
        /** @description Optional. The list of IAM users to be bound to the role. */
        members?: ({
          /** @description The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used. */
          member?: string;
          /** @description The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used. */
          memberFrom?: {
            /** @description BigQueryConnectionConnection whose service account is to be bound to the role. Use the Type field to specifie the connection type. For "spark" connetion, the service account is in `status.observedState.spark.serviceAccountID`. For "cloudSQL" connection, the service account is in `status.observedState.cloudSQL.serviceAccountID`. For "cloudResource" connection, the service account is in `status.observedState.cloudResource.serviceAccountID`. */
            bigQueryConnectionConnectionRef?: {
              name: string;
              namespace?: string;
              /**
               * @description Type field specifies the connection type of the BigQueryConnectionConnection resource, whose service account is to be bound to the role.
               * @enum {string}
               */
              type: "spark" | "cloudSQL" | "cloudResource";
            };
            /** @description The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role. */
            logSinkRef?: {
              name: string;
              namespace?: string;
            };
            /** @description The IAMServiceAccount to be bound to the role. */
            serviceAccountRef?: {
              name: string;
              namespace?: string;
            };
            /** @description The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role. */
            serviceIdentityRef?: {
              name: string;
              namespace?: string;
            };
            /** @description The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role. */
            sqlInstanceRef?: {
              name: string;
              namespace?: string;
            };
          } & (unknown | unknown | unknown | unknown | unknown);
        } & (unknown | unknown))[];
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
