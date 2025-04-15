import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryTableV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigQueryTableV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigQueryTableV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "bigquery.cnrm.cloud.google.com/v1beta1";
    kind: "BigQueryTable";
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
      /** @description Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order. */
      clustering?: string[];
      datasetRef: {
        /** @description Allowed value: The `name` field of a `BigQueryDataset` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The field description. */
      description?: string;
      /** @description Immutable. Specifies how the table should be encrypted. If left blank, the table will be encrypted with a Google-managed key; that process is transparent to the user. */
      encryptionConfiguration?: {
        kmsKeyRef: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The self link or full name of the kms key version used to encrypt this table. */
        kmsKeyVersion?: string;
      };
      /** @description The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. */
      expirationTime?: number;
      /** @description Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table. */
      externalDataConfiguration?: {
        /** @description Let BigQuery try to autodetect the schema and format of the table. */
        autodetect: boolean;
        /** @description Additional options if source_format is set to "AVRO". */
        avroOptions?: {
          /** @description If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). */
          useAvroLogicalTypes: boolean;
        };
        /** @description The compression type of the data source. Valid values are "NONE" or "GZIP". */
        compression?: string;
        /** @description The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}". */
        connectionId?: string;
        /** @description Additional properties to set if source_format is set to "CSV". */
        csvOptions?: {
          /** @description Indicates if BigQuery should accept rows that are missing trailing optional columns. */
          allowJaggedRows?: boolean;
          /** @description Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
          allowQuotedNewlines?: boolean;
          /** @description The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. */
          encoding?: string;
          /** @description The separator for fields in a CSV file. */
          fieldDelimiter?: string;
          quote: string;
          /** @description The number of rows at the top of a CSV file that BigQuery will skip when reading the data. */
          skipLeadingRows?: number;
        };
        /** @description Specifies how source URIs are interpreted for constructing the file set to load.  By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems. */
        fileSetSpecType?: string;
        /** @description Additional options if source_format is set to "GOOGLE_SHEETS". */
        googleSheetsOptions?: {
          /** @description Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20". */
          range?: string;
          /** @description The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set. */
          skipLeadingRows?: number;
        };
        /** @description When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification. */
        hivePartitioningOptions?: {
          /** @description When set, what mode of hive partitioning to use when reading data. */
          mode?: string;
          /** @description If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
          requirePartitionFilter?: boolean;
          /** @description When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins. */
          sourceUriPrefix?: string;
        };
        /** @description Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. */
        ignoreUnknownValues?: boolean;
        /** @description Additional properties to set if sourceFormat is set to JSON.". */
        jsonOptions?: {
          /** @description The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. */
          encoding?: string;
        };
        /** @description The maximum number of bad records that BigQuery can ignore when reading data. */
        maxBadRecords?: number;
        /** @description Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. */
        metadataCacheMode?: string;
        /** @description Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted. */
        objectMetadata?: string;
        /** @description Additional properties to set if sourceFormat is set to PARQUET.". */
        parquetOptions?: {
          /** @description Indicates whether to use schema inference specifically for Parquet LIST logical type. */
          enableListInference?: boolean;
          /** @description Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. */
          enumAsString?: boolean;
        };
        /** @description When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC. */
        referenceFileSchemaUri?: string;
        /** @description Immutable. A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables. */
        schema?: string;
        /** @description  Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". */
        sourceFormat?: string;
        /** @description A list of the fully-qualified URIs that point to your data in Google Cloud. */
        sourceUris: string[];
      };
      /** @description A descriptive name for the table. */
      friendlyName?: string;
      /** @description If specified, configures this table as a materialized view. */
      materializedView?: {
        /** @description Immutable. Allow non incremental materialized view definition. The default value is false. */
        allowNonIncrementalDefinition?: boolean;
        /** @description Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. */
        enableRefresh?: boolean;
        /** @description Immutable. A query whose result is persisted. */
        query: string;
        /** @description Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. */
        refreshIntervalMs?: number;
      };
      /** @description The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type. */
      maxStaleness?: string;
      /** @description If specified, configures range-based partitioning for this table. */
      rangePartitioning?: {
        /** @description Immutable. The field used to determine how to create a range-based partition. */
        field: string;
        /** @description Information required to partition based on ranges. Structure is documented below. */
        range: {
          /** @description End of the range partitioning, exclusive. */
          end: number;
          /** @description The width of each range within the partition. */
          interval: number;
          /** @description Start of the range partitioning, inclusive. */
          start: number;
        };
      };
      /** @description If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
      requirePartitionFilter?: boolean;
      /** @description Immutable. Optional. The tableId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description A JSON schema for the table. */
      schema?: string;
      /** @description Defines the primary key and foreign keys. */
      tableConstraints?: {
        /** @description Present only if the table has a foreign key. The foreign key is not enforced. */
        foreignKeys?: {
          /** @description The pair of the foreign key column and primary key column. */
          columnReferences: {
            /** @description The column in the primary key that are referenced by the referencingColumn. */
            referencedColumn: string;
            /** @description The column that composes the foreign key. */
            referencingColumn: string;
          };
          /** @description Set only if the foreign key constraint is named. */
          name?: string;
          /** @description The table that holds the primary key and is referenced by this foreign key. */
          referencedTable: {
            /** @description The ID of the dataset containing this table. */
            datasetId: string;
            /** @description The ID of the project containing this table. */
            projectId: string;
            /** @description The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123. */
            tableId: string;
          };
        }[];
        /** @description Represents a primary key constraint on a table's columns. Present only if the table has a primary key. The primary key is not enforced. */
        primaryKey?: {
          /** @description The columns that are composed of the primary key constraint. */
          columns: string[];
        };
      };
      /** @description If specified, configures time-based partitioning for this table. */
      timePartitioning?: {
        /** @description Number of milliseconds for which to keep the storage for a partition. */
        expirationMs?: number;
        /** @description Immutable. The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time. */
        field?: string;
        /** @description DEPRECATED. This field is deprecated; please use the top level field with the same name instead. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
        requirePartitionFilter?: boolean;
        /** @description The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. */
        type: string;
      };
      /** @description If specified, configures this table as a view. */
      view?: {
        /** @description A query that BigQuery executes when the view is referenced. */
        query: string;
        /** @description Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL. */
        useLegacySql?: boolean;
      };
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
      /** @description The time when this table was created, in milliseconds since the epoch. */
      creationTime?: number;
      /** @description A hash of the resource. */
      etag?: string;
      /** @description The time when this table was last modified, in milliseconds since the epoch. */
      lastModifiedTime?: number;
      /** @description The geographic location where the table resides. This value is inherited from the dataset. */
      location?: string;
      /** @description The geographic location where the table resides. This value is inherited from the dataset. */
      numBytes?: number;
      /** @description The number of bytes in the table that are considered "long-term storage". */
      numLongTermBytes?: number;
      /** @description The number of rows of data in this table, excluding any data in the streaming buffer. */
      numRows?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The URI of the created resource. */
      selfLink?: string;
      /** @description Describes the table type. */
      type?: string;
    };
  };
}
