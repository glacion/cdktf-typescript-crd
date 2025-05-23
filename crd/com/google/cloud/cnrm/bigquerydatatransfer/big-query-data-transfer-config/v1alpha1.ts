import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryDataTransferConfigV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigQueryDataTransferConfigV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigQueryDataTransferConfigV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "bigquerydatatransfer.cnrm.cloud.google.com/v1alpha1";
    kind?: "BigQueryDataTransferConfig";
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
    /** @description BigQueryDataTransferConfigSpec defines the desired state of BigQueryDataTransferConfig */
    spec: {
      /**
       * Format: int32
       * @description The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
       */
      dataRefreshWindowDays?: number;
      /** @description Immutable. Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list */
      dataSourceID: string;
      /** @description The BigQuery target dataset id. */
      datasetRef?: {
        /** @description A reference to an externally managed BigQueryDataset resource. Should be in the format "projects/<projectID>/datasets/<datasetID>". */
        external?: string;
        /** @description The name of a BigQueryDataset resource. */
        name?: string;
        /** @description The namespace of a BigQueryDataset resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Is this config disabled. When set to true, no runs will be scheduled for this transfer config. */
      disabled?: boolean;
      /** @description User specified display name for the data transfer. */
      displayName?: string;
      /** @description Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. */
      emailPreferences?: {
        /** @description If true, email notifications will be sent on transfer run failures. */
        enableFailureEmail?: boolean;
      };
      /** @description The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. */
      encryptionConfiguration?: {
        /** @description The KMS key used for encrypting BigQuery data. */
        kmsKeyRef?: {
          /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
          external?: string;
          /** @description The `name` of a `KMSCryptoKey` resource. */
          name?: string;
          /** @description The `namespace` of a `KMSCryptoKey` resource. */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. */
      location: string;
      /** @description Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq */
      params: {
        [key: string]: string;
      };
      /** @description The Project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. */
      pubSubTopicRef?: {
        /** @description If provided must be in the format `projects/[project_id]/topics/[topic_id]`. */
        external?: string;
        /** @description The `metadata.name` field of a `PubSubTopic` resource. */
        name?: string;
        /** @description The `metadata.namespace` field of a `PubSubTopic` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The BigQueryDataTransferConfig name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Data transfer schedule.
       *      If the data source does not support a custom schedule, this should be
       *      empty. If it is empty, the default value for the data source will be used.
       *      The specified times are in UTC.
       *      Examples of valid format:
       *      `1st,3rd monday of month 15:30`,
       *      `every wed,fri of jan,jun 13:15`, and
       *      `first sunday of quarter 00:00`.
       *      See more explanation about the format here:
       *      https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
       *
       *      NOTE: The minimum interval time between recurring transfers depends on the
       *      data source; refer to the documentation for your data source. */
      schedule?: string;
      /** @description Options customizing the data transfer schedule. */
      scheduleOptions?: {
        /** @description If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored. */
        disableAutoScheduling?: boolean;
        /** @description Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. */
        endTime?: string;
        /** @description Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. */
        startTime?: string;
      };
      /** @description Service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, please refer to https://cloud.google.com/bigquery/docs/use-service-accounts. */
      serviceAccountRef?: {
        /** @description The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
    /** @description BigQueryDataTransferConfigStatus defines the config connector machine state of BigQueryDataTransferConfig */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description A unique specifier for the BigQueryDataTransferConfig resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. Region in which BigQuery dataset is located. */
        datasetRegion?: string;
        /** @description Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. */
        name?: string;
        /** @description Output only. Next time when data transfer will run. */
        nextRunTime?: string;
        /** @description Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. */
        ownerInfo?: {
          /** @description E-mail address of the user. */
          email?: string;
        };
        /** @description Output only. State of the most recently updated transfer run. */
        state?: string;
        /** @description Output only. Data transfer modification time. Ignored by server on input. */
        updateTime?: string;
        /**
         * Format: int64
         * @description Deprecated. Unique ID of the user on whose behalf transfer is done.
         */
        userID?: number;
      };
    };
  };
}
