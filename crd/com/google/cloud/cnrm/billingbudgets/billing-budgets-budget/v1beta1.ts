import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class BillingbudgetsCnrmCloudGoogleComBillingBudgetsBudgetV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: BillingbudgetsCnrmCloudGoogleComBillingBudgetsBudgetV1beta1Config) {
    super(scope, id, config);
  }
}
export interface BillingbudgetsCnrmCloudGoogleComBillingBudgetsBudgetV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "billingbudgets.cnrm.cloud.google.com/v1beta1";
    kind: "BillingBudgetsBudget";
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
      /** @description Optional. Rules to apply to notifications sent based on budget spend and thresholds. */
      allUpdatesRule?: {
        /** @description Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. */
        disableDefaultIamRecipients?: boolean;
        monitoringNotificationChannels?: ({
          /** @description Allowed value: The Google Cloud resource name of a `MonitoringNotificationChannel` resource (format: `projects/{{project}}/notificationChannels/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        pubsubTopicRef?: {
          /** @description Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions.
           *
           *     Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format. */
        schemaVersion?: string;
      };
      /** @description Required. Budgeted amount. */
      amount: {
        /** @description Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a . */
        lastPeriodAmount?: Record<string, never>;
        /** @description A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output. */
        specifiedAmount?: {
          /** @description Immutable. The three-letter currency code defined in ISO 4217. */
          currencyCode?: string;
          /**
           * Format: int64
           * @description Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
           */
          nanos?: number;
          /**
           * Format: int64
           * @description The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
           */
          units?: number;
        };
      };
      /** @description Immutable. */
      billingAccountRef: {
        /** @description The billing account of the resource
         *
         *     Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`). */
        external?: string;
        /** @description [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. */
      budgetFilter?: {
        /** @description Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on. Possible values: CALENDAR_PERIOD_UNSPECIFIED, MONTH, QUARTER, YEAR */
        calendarPeriod?: string;
        /** @description Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values. If Filter.credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty. */
        creditTypes?: string[];
        /** @description Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`. */
        creditTypesTreatment?: string;
        /** @description Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur. */
        customPeriod?: {
          /** @description Immutable. Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date. */
          endDate?: {
            /**
             * Format: int64
             * @description Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
             */
            day?: number;
            /**
             * Format: int64
             * @description Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
             */
            month?: number;
            /**
             * Format: int64
             * @description Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
             */
            year?: number;
          };
          /** @description Immutable. Required. The start date must be after January 1, 2017. */
          startDate: {
            /**
             * Format: int64
             * @description Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
             */
            day?: number;
            /**
             * Format: int64
             * @description Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
             */
            month?: number;
            /**
             * Format: int64
             * @description Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
             */
            year?: number;
          };
        };
        /** @description Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage. */
        labels?: {
          [key: string]: {
            /** @description Immutable. The values of the label */
            values?: string[];
          };
        };
        projects?: ({
          /** @description Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api. */
        services?: string[];
        subaccounts?: ({
          external?: string;
          /** @description [WARNING] CloudBillingBillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
           *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
      };
      /** @description User data for display name in UI. The name must be less than or equal to 60 characters. */
      displayName?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. */
      thresholdRules?: {
        /** @description Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. Possible values: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND */
        spendBasis?: string;
        /**
         * Format: double
         * @description Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
         */
        thresholdPercent: number;
      }[];
    };
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
      /** @description Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes. */
      etag?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
