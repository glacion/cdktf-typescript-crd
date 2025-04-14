import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageTransferJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesStorageTransferJobV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "storagetransfer.cnrm.cloud.google.com/v1beta1",
        kind: "StorageTransferJob",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesStorageTransferJobV1beta1Config extends ManifestConfig {
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
      /** @description Unique description to identify the Transfer Job. */
      description: string;
      /** @description Notification configuration. */
      notificationConfig?: {
        /** @description Event types for which a notification is desired. If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED". */
        eventTypes?: string[];
        /** @description The desired format of the notification message payloads. One of "NONE" or "JSON". */
        payloadFormat: string;
        /** @description The PubSubTopic to which to publish notifications. */
        topicRef: {
          /** @description Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run. */
      schedule?: {
        /** @description Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
        repeatInterval?: string;
        /** @description The last day the recurring transfer will be run. If schedule_end_date is the same as schedule_start_date, the transfer will be executed only once. */
        scheduleEndDate?: {
          /** @description Day of month. Must be from 1 to 31 and valid for the year and month. */
          day: number;
          /** @description Month of year. Must be from 1 to 12. */
          month: number;
          /** @description Year of date. Must be from 1 to 9999. */
          year: number;
        };
        /** @description The first day the recurring transfer is scheduled to run. If schedule_start_date is in the past, the transfer will run for the first time on the following day. */
        scheduleStartDate: {
          /** @description Day of month. Must be from 1 to 31 and valid for the year and month. */
          day: number;
          /** @description Month of year. Must be from 1 to 12. */
          month: number;
          /** @description Year of date. Must be from 1 to 9999. */
          year: number;
        };
        /** @description The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. */
        startTimeOfDay?: {
          /** @description Hours of day in 24 hour format. Should be from 0 to 23. */
          hours: number;
          /** @description Minutes of hour of day. Must be from 0 to 59. */
          minutes: number;
          /** @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
          nanos: number;
          /** @description Seconds of minutes of the time. Must normally be from 0 to 59. */
          seconds: number;
        };
      };
      /** @description Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. */
      status?: string;
      /** @description Transfer specification. */
      transferSpec: {
        /** @description An AWS S3 data source. */
        awsS3DataSource?: {
          /** @description AWS credentials block. */
          awsAccessKey?: {
            /** @description AWS Key ID. */
            accessKeyId: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
            /** @description AWS Secret Access Key. */
            secretAccessKey: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
          };
          /** @description S3 Bucket name. */
          bucketName: string;
          /** @description S3 Bucket path in bucket to transfer. */
          path?: string;
          /** @description The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project. */
          roleArn?: string;
        };
        /** @description An Azure Blob Storage data source. */
        azureBlobStorageDataSource?: {
          /** @description  Credentials used to authenticate API requests to Azure. */
          azureCredentials: {
            /** @description Azure shared access signature. */
            sasToken: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
          };
          /** @description The container to transfer from the Azure Storage account. */
          container: string;
          /** @description Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
          path?: string;
          /** @description The name of the Azure Storage account. */
          storageAccount: string;
        };
        /** @description A Google Cloud Storage data sink. */
        gcsDataSink?: {
          bucketRef: {
            /** @description Allowed value: The `name` field of a `StorageBucket` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Google Cloud Storage path in bucket to transfer. */
          path?: string;
        };
        /** @description A Google Cloud Storage data source. */
        gcsDataSource?: {
          bucketRef: {
            /** @description Allowed value: The `name` field of a `StorageBucket` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Google Cloud Storage path in bucket to transfer. */
          path?: string;
        };
        /** @description A HTTP URL data source. */
        httpDataSource?: {
          /** @description The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. */
          listUrl: string;
        };
        /** @description Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' last_modification_time do not exclude objects in a data sink. */
        objectConditions?: {
          /** @description exclude_prefixes must follow the requirements described for include_prefixes. */
          excludePrefixes?: string[];
          /** @description If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions. */
          includePrefixes?: string[];
          /** @description If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
          lastModifiedBefore?: string;
          /** @description If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
          lastModifiedSince?: string;
          /** @description A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
          maxTimeElapsedSinceLastModification?: string;
          /** @description A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
          minTimeElapsedSinceLastModification?: string;
        };
        /** @description A POSIX filesystem data sink. */
        posixDataSink?: {
          /** @description Root directory path to the filesystem. */
          rootDirectory: string;
        };
        /** @description A POSIX filesystem data source. */
        posixDataSource?: {
          /** @description Root directory path to the filesystem. */
          rootDirectory: string;
        };
        /** @description Immutable. Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. */
        sinkAgentPoolName?: string;
        /** @description Immutable. Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. */
        sourceAgentPoolName?: string;
        /** @description Characteristics of how to treat files from datasource and sink during job. If the option delete_objects_unique_in_sink is true, object conditions based on objects' last_modification_time are ignored and do not exclude objects in a data source or a data sink. */
        transferOptions?: {
          /** @description Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive. */
          deleteObjectsFromSourceAfterTransfer?: boolean;
          /** @description Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive. */
          deleteObjectsUniqueInSink?: boolean;
          /** @description Whether overwriting objects that already exist in the sink is allowed. */
          overwriteObjectsAlreadyExistingInSink?: boolean;
          /** @description When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. */
          overwriteWhen?: string;
        };
      };
    };
  };
}
