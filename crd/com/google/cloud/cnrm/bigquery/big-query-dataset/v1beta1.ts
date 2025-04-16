import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryDatasetV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigQueryDatasetV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigQueryDatasetV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "bigquery.cnrm.cloud.google.com/v1beta1";
    kind?: "BigQueryDataset";
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
    /** @description BigQueryDatasetSpec defines the desired state of BigQueryDataset */
    spec?: {
      /** @description An array of objects that define dataset access for one or more entities. */
      access?: {
        /** @description [Pick one] A grant authorizing all resources of a particular type in a particular dataset access to this dataset. Only views are supported for now. The role field is not required when this field is set. If that dataset is deleted and re-created, its access needs to be granted again via an update operation. */
        dataset?: {
          /** @description The dataset this entry applies to. */
          dataset: {
            /** @description A unique Id for this dataset, without the project name. The Id must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
            datasetId: string;
            /** @description The ID of the project containing this dataset. */
            projectId: string;
          };
          /** @description Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future. */
          targetTypes: string[];
        };
        /** @description [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN". */
        domain?: string;
        /** @description [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP". */
        groupByEmail?: string;
        /** @description [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. */
        iamMember?: string;
        /** @description An IAM role ID that should be granted to the user, group,
         *      or domain specified in this access entry.
         *      The following legacy mappings will be applied:
         *
         *      * `OWNER`: `roles/bigquery.dataOwner`
         *      * `WRITER`: `roles/bigquery.dataEditor`
         *      * `READER`: `roles/bigquery.dataViewer`
         *
         *      This field will accept any of the above formats, but will return only
         *      the legacy format. For example, if you set this field to
         *      "roles/bigquery.dataOwner", it will be returned back as "OWNER". */
        role?: string;
        /** @description [Pick one] A routine from a different dataset to grant access to. Queries executed against that routine will have read access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update operation. */
        routine?: {
          /** @description The ID of the dataset containing this routine. */
          datasetId: string;
          /** @description The ID of the project containing this routine. */
          projectId: string;
          /** @description The Id of the routine. The Id must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
          routineId: string;
        };
        /** @description [Pick one] A special group to grant access to. Possible values include:
         *
         *        * projectOwners: Owners of the enclosing project.
         *        * projectReaders: Readers of the enclosing project.
         *        * projectWriters: Writers of the enclosing project.
         *        * allAuthenticatedUsers: All authenticated BigQuery users.
         *
         *      Maps to similarly-named IAM members. */
        specialGroup?: string;
        /** @description [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL". */
        userByEmail?: string;
        /** @description [Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access to views/tables/routines in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation. */
        view?: {
          /** @description The ID of the dataset containing this table. */
          datasetId: string;
          /** @description The ID of the project containing this table. */
          projectId: string;
          /** @description The Id of the table. The Id can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters.  Certain operations allow suffixing of the table Id with a partition decorator, such as `sample_table$20190123`. */
          tableId: string;
        };
      }[];
      /** @description Optional. Defines the default collation specification of future tables
       *      created in the dataset. If a table is created in this dataset without
       *      table-level default collation, then the table inherits the dataset default
       *      collation, which is applied to the string fields that do not have explicit
       *      collation specified. A change to this field affects only tables created
       *      afterwards, and does not alter the existing tables.
       *      The following values are supported:
       *
       *      * 'und:ci': undetermined locale, case-insensitive.
       *      * '': empty string. Default to case-sensitive behavior. */
      defaultCollation?: string;
      /** @description The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key. */
      defaultEncryptionConfiguration?: {
        /** @description Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. */
        kmsKeyRef?: {
          /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
          external?: string;
          /** @description The `name` of a `KMSCryptoKey` resource. */
          name?: string;
          /** @description The `namespace` of a `KMSCryptoKey` resource. */
          namespace?: string;
        } & (unknown | unknown);
      };
      /**
       * Format: int64
       * @description This default partition expiration, expressed in milliseconds.
       *
       *      When new time-partitioned tables are created in a dataset where this
       *      property is set, the table will inherit this value, propagated as the
       *      `TimePartitioning.expirationMs` property on the new table.  If you set
       *      `TimePartitioning.expirationMs` explicitly when creating a table,
       *      the `defaultPartitionExpirationMs` of the containing dataset is ignored.
       *
       *      When creating a partitioned table, if `defaultPartitionExpirationMs`
       *      is set, the `defaultTableExpirationMs` value is ignored and the table
       *      will not be inherit a table expiration deadline.
       */
      defaultPartitionExpirationMs?: number;
      /**
       * Format: int64
       * @description Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
       */
      defaultTableExpirationMs?: number;
      /** @description Optional. A user-friendly description of the dataset. */
      description?: string;
      /** @description Optional. A descriptive name for the dataset. */
      friendlyName?: string;
      /** @description Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references. */
      isCaseInsensitive?: boolean;
      /** @description Optional. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
      location?: string;
      /** @description Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set. */
      maxTimeTravelHours?: string;
      /** @description  Optional. The project that this resource belongs to. */
      projectRef?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The BigQueryDataset name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Optional. Updates storage_billing_model for the dataset. */
      storageBillingModel?: string;
    };
    /** @description BigQueryDatasetStatus defines the config connector machine state of BigQueryDataset */
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
      /**
       * Format: int64
       * @description Output only. The time when this dataset was created, in milliseconds since the epoch.
       */
      creationTime?: number;
      /** @description Output only. A hash of the resource. */
      etag?: string;
      /** @description A unique specifier for the BigQueryAnalyticsHubDataExchangeListing resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description Output only. The date when this dataset was last modified, in milliseconds since the epoch.
       */
      lastModifiedTime?: number;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Optional. If the location is not specified in the spec, the GCP server defaults to a location and will be captured here. */
        location?: string;
      };
      /** @description Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource. */
      selfLink?: string;
    };
  };
}
