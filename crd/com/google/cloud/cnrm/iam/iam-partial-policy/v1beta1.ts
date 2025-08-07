import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IamCnrmCloudGoogleComIAMPartialPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: IamCnrmCloudGoogleComIAMPartialPolicyV1beta1Config) {
    super(scope, id, config);
  }
}
export interface IamCnrmCloudGoogleComIAMPartialPolicyV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMPartialPolicy";
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
    /** @description IAMPartialPolicySpec defines the desired state of IAMPartialPolicy */
    spec?: {
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
    /** @description IAMPartialPolicyStatus defines the observed state of IAMPartialPolicy */
    status?: {
      /** @description AllBindings surfaces all IAM bindings for the referenced resource. */
      allBindings?: {
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
      /** @description LastAppliedBindings is the list of IAM bindings that were most recently applied by Config Connector. */
      lastAppliedBindings?: {
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
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
    };
  };
}
