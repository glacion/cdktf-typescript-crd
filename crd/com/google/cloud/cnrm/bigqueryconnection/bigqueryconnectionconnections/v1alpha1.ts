import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryConnectionConnectionV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesBigQueryConnectionConnectionV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "bigqueryconnection.cnrm.cloud.google.com/v1alpha1",
        kind: "BigQueryConnectionConnection",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesBigQueryConnectionConnectionV1alpha1Config extends ManifestConfig {
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
      /** @description Amazon Web Services (AWS) properties. */
      aws?: {
        /** @description Authentication using Google owned service account to assume into customer's AWS IAM Role. */
        accessRole: {
          /** @description The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. */
          iamRoleID: string;
        };
      };
      /** @description Azure properties. */
      azure?: {
        /** @description The id of customer's directory that host the data. */
        customerTenantID: string;
        /** @description The client ID of the user's Azure Active Directory Application used for a federated connection. */
        federatedApplicationClientID?: string;
      };
      /** @description Use Cloud Resource properties. */
      cloudResource?: Record<string, never>;
      /** @description Cloud SQL properties. */
      cloudSQL?: {
        /** @description Cloud SQL credential. */
        credential: {
          /** @description The Kubernetes Secret object that stores the "username" and "password" information. The Secret type has to be `kubernetes.io/basic-auth`. */
          secretRef?: {
            /** @description The `metadata.name` field of a Kubernetes `Secret` */
            name: string;
            /** @description The `metadata.namespace` field of a Kubernetes `Secret`. */
            namespace?: string;
          };
        };
        /** @description Reference to the SQL Database. */
        databaseRef: {
          /** @description The SQL Database name, when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `SQLDatabase` resource. */
          name?: string;
          /** @description The `namespace` field of a `SQLDatabase` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Reference to the Cloud SQL instance ID. */
        instanceRef: {
          /** @description The SQLInstance selfLink, when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `SQLInstance` resource. */
          name?: string;
          /** @description The `namespace` field of a `SQLInstance` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Type of the Cloud SQL database. */
        type: string;
      };
      /** @description Cloud Spanner properties. */
      cloudSpanner?: {
        /** @description Reference to a spanner database ID. */
        databaseRef: {
          /** @description The Spanner Database selfLink, when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `SpannerDatabase` resource. */
          name?: string;
          /** @description The `namespace` field of a `SpannerDatabase` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Optional. Cloud Spanner database role for fine-grained access control.
         *      The Cloud Spanner admin should have provisioned the database role with
         *      appropriate permissions, such as `SELECT` and `INSERT`. Other users should
         *      only use roles provided by their Cloud Spanner admins.
         *
         *      For more details, see [About fine-grained access control]
         *      (https://cloud.google.com/spanner/docs/fgac-about).
         *
         *      REQUIRES: The database role name must start with a letter, and can only
         *      contain letters, numbers, and underscores. */
        databaseRole?: string;
        /**
         * Format: int32
         * @description Allows setting max parallelism per query when executing on Spanner
         *      independent compute resources. If unspecified, default values of
         *      parallelism are chosen that are dependent on the Cloud Spanner instance
         *      configuration.
         *
         *      REQUIRES: `use_parallelism` must be set.
         *      REQUIRES: Either `use_data_boost` or `use_serverless_analytics` must be
         *      set.
         */
        maxParallelism?: number;
        /** @description If set, the request will be executed via Spanner independent compute
         *      resources.
         *      REQUIRES: `use_parallelism` must be set.
         *
         *      NOTE: `use_serverless_analytics` will be deprecated. Prefer
         *      `use_data_boost` over `use_serverless_analytics`. */
        useDataBoost?: boolean;
        /** @description If parallelism should be used when reading from Cloud Spanner */
        useParallelism?: boolean;
        /** @description If the serverless analytics service should be used to read data from Cloud Spanner. Note: `use_parallelism` must be set when using serverless analytics. */
        useServerlessAnalytics?: boolean;
      };
      /** @description User provided description. */
      description?: string;
      /** @description User provided display name for the connection. */
      friendlyName?: string;
      /** @description Immutable. */
      location: string;
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
      /** @description Immutable. Optional. The BigQuery Connection ID used for resource creation or acquisition. For creation: If specified, this value is used as the connection ID. If not provided, a UUID will be generated and assigned as the connection ID. For acquisition: This field must be provided to identify the connection resource to acquire. */
      resourceID?: string;
      /** @description Spark properties. */
      spark?: {
        /** @description Optional. Dataproc Metastore Service configuration for the connection. */
        metastoreService?: {
          /** @description Optional. Resource name of an existing Dataproc Metastore service.
           *
           *      Example:
           *
           *      * `projects/[project_id]/locations/[region]/services/[service_id]` */
          metastoreServiceRef?: {
            /** @description The self-link of an existing Dataproc Metastore service , when not managed by Config Connector. */
            external: string;
          };
        };
        /** @description Optional. Spark History Server configuration for the connection. */
        sparkHistoryServer?: {
          /** @description Optional. Resource name of an existing Dataproc Cluster to act as a Spark
           *      History Server for the connection.
           *
           *      Example:
           *
           *      * `projects/[project_id]/regions/[region]/clusters/[cluster_name]` */
          dataprocClusterRef?: {
            /** @description The self-link of an existing Dataproc Cluster to act as a Spark History Server for the connection , when not managed by Config Connector. */
            external?: string;
            /** @description The `name` field of a Dataproc Cluster. */
            name?: string;
            /** @description The `namespace` field of a Dataproc Cluster. */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
    };
  };
}
