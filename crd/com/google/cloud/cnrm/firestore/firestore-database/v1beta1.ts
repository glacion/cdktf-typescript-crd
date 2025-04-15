import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFirestoreDatabaseV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesFirestoreDatabaseV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesFirestoreDatabaseV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "firestore.cnrm.cloud.google.com/v1beta1";
    kind: "FirestoreDatabase";
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
    /** @description FirestoreDatabaseSpec defines the desired state of FirestoreDatabase */
    spec?: {
      /** @description The concurrency control mode to use for this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#concurrencymode for more info. */
      concurrencyMode?: string;
      /** @description The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. */
      locationID?: string;
      /** @description Whether to enable the PITR feature on this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#pointintimerecoveryenablement for more info. */
      pointInTimeRecoveryEnablement?: string;
      /** @description Immutable. The Project that this resource belongs to. */
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
      /** @description The FirestoreDatabase name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description FirestoreDatabaseStatus defines the config connector machine state of FirestoreDatabase */
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
      /** @description A unique specifier for the FirestoreDatabase resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time. */
        createTime?: string;
        /** @description Output only. The earliest timestamp at which older versions of the data can
         *      be read from the database. See [version_retention_period] above; this field
         *      is populated with `now - version_retention_period`.
         *
         *      This value is continuously updated, and becomes stale the moment it is
         *      queried. If you are using this value to recover data, make sure to account
         *      for the time from the moment when the value is queried to the moment when
         *      you initiate the recovery. */
        earliestVersionTime?: string;
        /** @description This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
        etag?: string;
        /** @description Output only. The key_prefix for this database. This key_prefix is used, in
         *      combination with the project id ("<key prefix>~<project id>") to construct
         *      the application id that is returned from the Cloud Datastore APIs in Google
         *      App Engine first generation runtimes.
         *
         *      This value may be empty in which case the appid to use for URL-encoded keys
         *      is the project_id (eg: foo instead of v~foo). */
        keyPrefix?: string;
        /** @description Output only. The system-generated UUID4 for this Database. */
        uid?: string;
        /** @description Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database. */
        updateTime?: string;
        /** @description Output only. The period during which past versions of data are retained in
         *      the database.
         *
         *      Any [read][google.firestore.v1.GetDocumentRequest.read_time]
         *      or [query][google.firestore.v1.ListDocumentsRequest.read_time] can specify
         *      a `read_time` within this window, and will read the state of the database
         *      at that time.
         *
         *      If the PITR feature is enabled, the retention period is 7 days. Otherwise,
         *      the retention period is 1 hour. */
        versionRetentionPeriod?: string;
      };
    };
  };
}
