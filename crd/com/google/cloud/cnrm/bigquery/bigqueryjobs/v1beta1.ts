import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesBigQueryJobV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "bigquery.cnrm.cloud.google.com/v1beta1", kind: "BigQueryJob", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesBigQueryJobV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. Copies a table. */
      copy?: {
        /** @description Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
         *     CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
         *     CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
         *     Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]. */
        createDisposition?: string;
        /** @description Immutable. Custom encryption configuration (e.g., Cloud KMS keys). */
        destinationEncryptionConfiguration?: {
          /** @description Describes the Cloud KMS encryption key that will be used to protect
           *     destination BigQuery table. The BigQuery Service Account associated
           *     with your project requires access to this encryption key. */
          kmsKeyRef: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Describes the Cloud KMS encryption key version used to protect destination BigQuery table. */
          kmsKeyVersion?: string;
        };
        /** @description Immutable. The destination table. */
        destinationTable?: {
          /** @description A reference to the table. */
          tableRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryTable` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Source tables to copy. */
        sourceTables: {
          /** @description A reference to the table. */
          tableRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryTable` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
        /** @description Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
         *     WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
         *     WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
         *     WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
         *     Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
         *     Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]. */
        writeDisposition?: string;
      };
      /** @description Immutable. Configures an extract job. */
      extract?: {
        /** @description Immutable. The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
         *     The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. */
        compression?: string;
        /** @description Immutable. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
         *     The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
         *     The default value for models is SAVED_MODEL. */
        destinationFormat?: string;
        /** @description Immutable. A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. */
        destinationUris: string[];
        /** @description Immutable. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
         *     Default is ','. */
        fieldDelimiter?: string;
        /** @description Immutable. Whether to print out a header row in the results. Default is true. */
        printHeader?: boolean;
        /** @description Immutable. A reference to the table being exported. */
        sourceTable?: {
          /** @description A reference to the table. */
          tableRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryTable` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Whether to use logical types when extracting to AVRO format. */
        useAvroLogicalTypes?: boolean;
      };
      /** @description Immutable. Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. */
      jobTimeoutMs?: string;
      /** @description Immutable. Configures a load job. */
      load?: {
        /** @description Immutable. Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
         *     If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
         *     an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats. */
        allowJaggedRows?: boolean;
        /** @description Immutable. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
         *     The default value is false. */
        allowQuotedNewlines?: boolean;
        /** @description Immutable. Indicates if we should automatically infer the options and schema for CSV and JSON sources. */
        autodetect?: boolean;
        /** @description Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
         *     CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
         *     CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
         *     Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]. */
        createDisposition?: string;
        /** @description Immutable. Custom encryption configuration (e.g., Cloud KMS keys). */
        destinationEncryptionConfiguration?: {
          /** @description Describes the Cloud KMS encryption key that will be used to protect
           *     destination BigQuery table. The BigQuery Service Account associated
           *     with your project requires access to this encryption key. */
          kmsKeyRef: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Describes the Cloud KMS encryption key version used to protect destination BigQuery table. */
          kmsKeyVersion?: string;
        };
        /** @description Immutable. The destination table to load the data into. */
        destinationTable: {
          /** @description A reference to the table. */
          tableRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryTable` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
         *     The default value is UTF-8. BigQuery decodes the data after the raw, binary data
         *     has been split using the values of the quote and fieldDelimiter properties. */
        encoding?: string;
        /** @description Immutable. The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
         *     To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
         *     the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
         *     data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
         *     The default value is a comma (','). */
        fieldDelimiter?: string;
        /** @description Immutable. Indicates if BigQuery should allow extra values that are not represented in the table schema.
         *     If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
         *     and if there are too many bad records, an invalid error is returned in the job result.
         *     The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
         *     CSV: Trailing columns
         *     JSON: Named values that don't match any column names. */
        ignoreUnknownValues?: boolean;
        /** @description Immutable. If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.
         *     For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
         *     GeoJSON: set to GEOJSON. */
        jsonExtension?: string;
        /** @description Immutable. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
         *     an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. */
        maxBadRecords?: number;
        /** @description Immutable. Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value
         *     when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
         *     empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
         *     an empty value. */
        nullMarker?: string;
        /** @description Immutable. Parquet Options for load and make external tables. */
        parquetOptions?: {
          /** @description Immutable. If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. */
          enableListInference?: boolean;
          /** @description Immutable. If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. */
          enumAsString?: boolean;
        };
        /** @description Immutable. If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
         *     Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
         *     If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result. */
        projectionFields?: string[];
        /** @description Immutable. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
         *     and then uses the first byte of the encoded string to split the data in its raw, binary state.
         *     The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
         *     If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
        quote?: string;
        /** @description Immutable. Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
         *     supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
         *     when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
         *     For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
         *     ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
         *     ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
        schemaUpdateOptions?: string[];
        /** @description Immutable. The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
         *     The default value is 0. This property is useful if you have header rows in the file that should be skipped.
         *     When autodetect is on, the behavior is the following:
         *     skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
         *     the row is read as data. Otherwise data is read starting from the second row.
         *     skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
         *     skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
         *     row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
        skipLeadingRows?: number;
        /** @description Immutable. The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
         *     For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
         *     For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
         *     The default value is CSV. */
        sourceFormat?: string;
        /** @description Immutable. The fully-qualified URIs that point to your data in Google Cloud.
         *     For Google Cloud Storage URIs: Each URI can contain one '\*' wildcard character
         *     and it must come after the 'bucket' name. Size limits related to load jobs apply
         *     to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
         *     specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
         *     For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\*' wildcard character is not allowed. */
        sourceUris: string[];
        /** @description Immutable. Time-based partitioning specification for the destination table. */
        timePartitioning?: {
          /** @description Immutable. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value. */
          expirationMs?: string;
          /** @description Immutable. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
           *     The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
           *     A wrapper is used here because an empty string is an invalid value. */
          field?: string;
          /** @description Immutable. The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
           *     but in OnePlatform the field will be treated as unset. */
          type: string;
        };
        /** @description Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
         *     WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
         *     WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
         *     WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
         *     Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
         *     Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]. */
        writeDisposition?: string;
      };
      /** @description Immutable. The geographic location of the job. The default value is US. */
      location?: string;
      /** @description Immutable. Configures a query job. */
      query?: {
        /** @description Immutable. If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
         *     Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
         *     However, you must still set destinationTable when result size exceeds the allowed maximum response size. */
        allowLargeResults?: boolean;
        /** @description Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
         *     CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
         *     CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
         *     Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]. */
        createDisposition?: string;
        /** @description Immutable. Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter behavior of unqualified dataset names. */
        defaultDataset?: {
          /** @description A reference to the dataset. */
          datasetRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryDataset` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Custom encryption configuration (e.g., Cloud KMS keys). */
        destinationEncryptionConfiguration?: {
          /** @description Describes the Cloud KMS encryption key that will be used to protect
           *     destination BigQuery table. The BigQuery Service Account associated
           *     with your project requires access to this encryption key. */
          kmsKeyRef: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Describes the Cloud KMS encryption key version used to protect destination BigQuery table. */
          kmsKeyVersion?: string;
        };
        /** @description Immutable. Describes the table where the query results should be stored.
         *     This property must be set for large results that exceed the maximum response size.
         *     For queries that produce anonymous (cached) results, this field will be populated by BigQuery. */
        destinationTable?: {
          /** @description A reference to the table. */
          tableRef: {
            /** @description Allowed value: The `selfLink` field of a `BigQueryTable` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
         *     allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened. */
        flattenResults?: boolean;
        /** @description Immutable. Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
         *     If unspecified, this will be set to your project default. */
        maximumBillingTier?: number;
        /** @description Immutable. Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
         *     If unspecified, this will be set to your project default. */
        maximumBytesBilled?: string;
        /** @description Immutable. Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
        parameterMode?: string;
        /** @description Immutable. Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. */
        priority?: string;
        /** @description Immutable. SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
         *     *NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
         *     ('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'. */
        query: string;
        /** @description Immutable. Allows the schema of the destination table to be updated as a side effect of the query job.
         *     Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
         *     when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
         *     specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
         *     One or more of the following values are specified:
         *     ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
         *     ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
        schemaUpdateOptions?: string[];
        /** @description Immutable. Options controlling the execution of scripts. */
        scriptOptions?: {
          /** @description Immutable. Determines which statement in the script represents the "key result",
           *     used to populate the schema and query results of the script job. Possible values: ["LAST", "FIRST_SELECT"]. */
          keyResultStatement?: string;
          /** @description Immutable. Limit on the number of bytes billed per statement. Exceeding this budget results in an error. */
          statementByteBudget?: string;
          /** @description Immutable. Timeout period for each statement in a script. */
          statementTimeoutMs?: string;
        };
        /** @description Immutable. Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
         *     If set to false, the query will use BigQuery's standard SQL. */
        useLegacySql?: boolean;
        /** @description Immutable. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
         *     tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
         *     The default value is true. */
        useQueryCache?: boolean;
        /** @description Immutable. Describes user-defined function resources used in the query. */
        userDefinedFunctionResources?: {
          /** @description Immutable. An inline resource that contains code for a user-defined function (UDF).
           *     Providing a inline code resource is equivalent to providing a URI for a file containing the same code. */
          inlineCode?: string;
          /** @description Immutable. A code resource to load from a Google Cloud Storage URI (gs://bucket/path). */
          resourceUri?: string;
        }[];
        /** @description Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
         *     WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
         *     WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
         *     WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
         *     Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
         *     Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]. */
        writeDisposition?: string;
      };
      /** @description Immutable. Optional. The jobId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
