import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class BigqueryconnectionCnrmCloudGoogleComBigQueryConnectionConnectionV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: BigqueryconnectionCnrmCloudGoogleComBigQueryConnectionConnectionV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface BigqueryconnectionCnrmCloudGoogleComBigQueryConnectionConnectionV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "bigqueryconnection.cnrm.cloud.google.com/v1beta1";
    kind: "BigQueryConnectionConnection";
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
    /** @description BigQueryConnectionConnectionSpec defines the desired state to connect BigQuery to external resources */
    spec?: {
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
    /** @description BigQueryConnectionConnectionStatus defines the config connector machine state of BigQueryConnectionConnection */
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
      /** @description A unique specifier for the BigQueryConnectionConnection resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        aws?: {
          accessRole?: {
            /** @description A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role. */
            identity?: string;
          };
        };
        azure?: {
          /** @description The name of the Azure Active Directory Application. */
          application?: string;
          /** @description The client id of the Azure Active Directory Application. */
          clientID?: string;
          /** @description A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application. */
          identity?: string;
          /** @description The object id of the Azure Active Directory Application. */
          objectID?: string;
          /** @description The URL user will be redirected to after granting consent during connection setup. */
          redirectUri?: string;
        };
        cloudResource?: {
          /** @description  The account ID of the service created for the purpose of this
           *      connection.
           *
           *      The service account does not have any permissions associated with it
           *      when it is created. After creation, customers delegate permissions
           *      to the service account. When the connection is used in the context of an
           *      operation in BigQuery, the service account will be used to connect to the
           *      desired resources in GCP.
           *
           *      The account ID is in the form of:
           *        <service-1234>@gcp-sa-bigquery-cloudresource.iam.gserviceaccount.com */
          serviceAccountID?: string;
        };
        cloudSQL?: {
          /** @description The account ID of the service used for the purpose of this connection.
           *
           *      When the connection is used in the context of an operation in
           *      BigQuery, this service account will serve as the identity being used for
           *      connecting to the CloudSQL instance specified in this connection. */
          serviceAccountID?: string;
        };
        /** @description The description for the connection. */
        description?: string;
        /** @description The display name for the connection. */
        friendlyName?: string;
        /** @description Output only. True, if credential is configured for this connection. */
        hasCredential?: boolean;
        spark?: {
          /** @description  The account ID of the service created for the purpose of this
           *      connection.
           *
           *      The service account does not have any permissions associated with it when
           *      it is created. After creation, customers delegate permissions to the
           *      service account. When the connection is used in the context of a stored
           *      procedure for Apache Spark in BigQuery, the service account is used to
           *      connect to the desired resources in Google Cloud.
           *
           *      The account ID is in the form of:
           *      bqcx-<projectnumber>-<uniqueid>@gcp-sa-bigquery-consp.iam.gserviceaccount.com */
          serviceAccountID?: string;
        };
      };
    };
  };
}
