import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLoggingLogSinkV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesLoggingLogSinkV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesLoggingLogSinkV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "logging.cnrm.cloud.google.com/v1beta1";
    kind: "LoggingLogSink";
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
      /** @description Options that affect sinks exporting data to BigQuery. */
      bigqueryOptions?: {
        /** @description Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
        usePartitionedTables: boolean;
      };
      /** @description A description of this sink. The maximum length of the description is 8000 characters. */
      description?: string;
      destination: {
        bigQueryDatasetRef?: {
          /** @description Allowed value: string of the format `bigquery.googleapis.com/projects/{{project}}/datasets/{{value}}`, where {{value}} is the `name` field of a `BigQueryDataset` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Only `external` field is supported to configure the reference. */
        loggingLogBucketRef?: {
          /** @description Allowed value: string of the format `logging.googleapis.com/projects/{{project}}/locations/{{location}}/buckets/{{value}}`, where {{value}} is the `name` field of a `LoggingLogBucket` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        pubSubTopicRef?: {
          /** @description Allowed value: string of the format `pubsub.googleapis.com/projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        storageBucketRef?: {
          /** @description Allowed value: string of the format `storage.googleapis.com/{{value}}`, where {{value}} is the `name` field of a `StorageBucket` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      } & (unknown | unknown | unknown | unknown);
      /** @description If set to True, then this sink is disabled and it does not export any log entries. */
      disabled?: boolean;
      /** @description Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both filter and one of exclusion's filters, it will not be exported. */
      exclusions?: {
        /** @description A description of this exclusion. */
        description?: string;
        /** @description If set to True, then this exclusion is disabled and it does not exclude any log entries. */
        disabled?: boolean;
        /** @description An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries. */
        filter: string;
        /** @description A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
        name: string;
      }[];
      /** @description The filter to apply when exporting logs. Only log entries that match the filter are exported. */
      filter?: string;
      /** @description The folder in which to create the sink. Only one of projectRef,
       *     folderRef, or organizationRef may be specified. */
      folderRef?: {
        /** @description Allowed value: The `folderId` field of a `Folder` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Whether or not to include children organizations in the sink export. If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included. */
      includeChildren?: boolean;
      /** @description The organization in which to create the sink. Only one of projectRef,
       *     folderRef, or organizationRef may be specified. */
      organizationRef?: {
        /** @description Allowed value: The `name` field of an `Organization` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The project in which to create the sink. Only one of projectRef,
       *     folderRef, or organizationRef may be specified. */
      projectRef?: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Whether or not to create a unique identity associated with this sink. If false (the default), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true, then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true. */
      uniqueWriterIdentity?: boolean;
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The identity associated with this sink. This identity must be granted write access to the configured destination. */
      writerIdentity?: string;
    };
  };
}
