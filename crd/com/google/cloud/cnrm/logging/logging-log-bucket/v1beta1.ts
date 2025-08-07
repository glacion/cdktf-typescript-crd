import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class LoggingCnrmCloudGoogleComLoggingLogBucketV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: LoggingCnrmCloudGoogleComLoggingLogBucketV1beta1Config) {
    super(scope, id, config);
  }
}
export interface LoggingCnrmCloudGoogleComLoggingLogBucketV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "logging.cnrm.cloud.google.com/v1beta1";
    kind: "LoggingLogBucket";
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
      /** @description Immutable. The BillingAccount that this resource belongs to. Only one of [billingAccountRef, folderRef, organizationRef, projectRef] may be specified. */
      billingAccountRef?: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`). */
        external?: string;
        /** @description [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Describes this bucket. */
      description?: string;
      /** @description  Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the Log Analytics page using SQL queries. Cannot be disabled once enabled. */
      enableAnalytics?: boolean;
      /** @description Immutable. The Folder that this resource belongs to. Only one of [billingAccountRef, folderRef, organizationRef, projectRef] may be specified. */
      folderRef?: {
        /** @description Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1. */
      location: string;
      /** @description Whether the bucket has been locked. The retention period on a locked bucket may not be changed. Locked buckets may only be deleted if they are empty. */
      locked?: boolean;
      /** @description Immutable. The Organization that this resource belongs to. Only one of [billingAccountRef, folderRef, organizationRef, projectRef] may be specified. */
      organizationRef?: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
        external?: string;
        /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Project that this resource belongs to. Only one of [billingAccountRef, folderRef, organizationRef, projectRef] may be specified. */
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
      /**
       * Format: int64
       * @description Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
       */
      retentionDays?: number;
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
       * @description Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.
       */
      createTime?: string;
      /** @description Output only. The bucket lifecycle state. Possible values: LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED */
      lifecycleState?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /**
       * Format: date-time
       * @description Output only. The last update timestamp of the bucket.
       */
      updateTime?: string;
    };
  };
}
