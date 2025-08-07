import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class LoggingCnrmCloudGoogleComLoggingLogExclusionV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: LoggingCnrmCloudGoogleComLoggingLogExclusionV1beta1Config) {
    super(scope, id, config);
  }
}
export interface LoggingCnrmCloudGoogleComLoggingLogExclusionV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "logging.cnrm.cloud.google.com/v1beta1";
    kind: "LoggingLogExclusion";
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
    spec: {
      /** @description Immutable. The BillingAccount that this resource belongs to. Only one of [projectRef, folderRef, organizationRef, billingAccountRef] may be specified. */
      billingAccountRef?: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`). */
        external?: string;
        /** @description [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. A description of this exclusion. */
      description?: string;
      /** @description Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field. */
      disabled?: boolean;
      /** @description Required. An (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries. For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets: `"resource.type=gcs_bucket severity */
      filter: string;
      /** @description Immutable. The Folder that this resource belongs to. Only one of [projectRef, folderRef, organizationRef, billingAccountRef] may be specified. */
      folderRef?: {
        /** @description Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Organization that this resource belongs to. Only one of [projectRef, folderRef, organizationRef, billingAccountRef] may be specified. */
      organizationRef?: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
        external?: string;
        /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Project that this resource belongs to. Only one of [projectRef, folderRef, organizationRef, billingAccountRef] may be specified. */
      projectRef?: {
        /** @description Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    } & (unknown | unknown | unknown | unknown);
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
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
       * @description Output only. The creation timestamp of the exclusion. This field may not be present for older exclusions.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /**
       * Format: date-time
       * @description Output only. The last update timestamp of the exclusion. This field may not be present for older exclusions.
       */
      updateTime?: string;
    };
  };
}
