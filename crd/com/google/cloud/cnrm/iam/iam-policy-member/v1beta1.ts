import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IamCnrmCloudGoogleComIAMPolicyMemberV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: IamCnrmCloudGoogleComIAMPolicyMemberV1beta1Config) {
    super(scope, id, config);
  }
}
export interface IamCnrmCloudGoogleComIAMPolicyMemberV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMPolicyMember";
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
    /** @description IAMPolicyMemberSpec defines the desired state of IAMPolicyMember */
    spec?: {
      /** @description Immutable. Optional. The condition under which the binding applies. */
      condition?: {
        description?: string;
        expression: string;
        title: string;
      };
      /** @description Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used. */
      member?: string;
      /** @description Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used. */
      memberFrom?: {
        /** @description BigQueryConnectionConnection whose service account is to be bound to the role. Use the Type field to specifie the connection type. For "spark" connetion, the service account is in `status.observedState.spark.serviceAccountID`. For "cloudSQL" connection, the service account is in `status.observedState.cloudSQL.serviceAccountID`. For "cloudResource" connection, the service account is in `status.observedState.cloudResource.serviceAccountID`. */
        bigQueryConnectionConnectionRef?: {
          name: string;
          namespace?: string;
          /** @description Type field specifies the connection type of the BigQueryConnectionConnection resource, whose service account is to be bound to the role. */
          type: string;
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
      /** @description Immutable. Required. The GCP resource to set the IAM policy on. */
      resourceRef: {
        apiVersion?: string;
        external?: string;
        kind: string;
        name?: string;
        namespace?: string;
      } & (unknown | unknown | unknown);
      /** @description Immutable. Required. The role for which the Member will be bound. */
      role: string;
    } & (unknown | unknown);
    /** @description IAMPolicyMemberStatus defines the observed state of IAMPolicyMember */
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
