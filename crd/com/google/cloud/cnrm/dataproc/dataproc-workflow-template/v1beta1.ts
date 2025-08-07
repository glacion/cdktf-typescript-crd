import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class DataprocCnrmCloudGoogleComDataprocWorkflowTemplateV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: DataprocCnrmCloudGoogleComDataprocWorkflowTemplateV1beta1Config) {
    super(scope, id, config);
  }
}
export interface DataprocCnrmCloudGoogleComDataprocWorkflowTemplateV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "dataproc.cnrm.cloud.google.com/v1beta1";
    kind: "DataprocWorkflowTemplate";
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
      /** @description Immutable. Optional. Timeout duration for the DAG of jobs, expressed in seconds (see [JSON representation of duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a [managed cluster](/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted. */
      dagTimeout?: string;
      /** @description Immutable. Required. The Directed Acyclic Graph of Jobs to submit. */
      jobs: {
        /** @description Immutable. Optional. Job is a Hadoop job. */
        hadoopJob?: {
          /** @description Immutable. Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip. */
          archiveUris?: string[];
          /** @description Immutable. Optional. The arguments to pass to the driver. Do not include arguments, such as `-libjars` or `-Dfoo=bar`, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
          args?: string[];
          /** @description Immutable. Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks. */
          fileUris?: string[];
          /** @description Immutable. Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in `jar_file_uris`. */
          mainClass?: string;
          /** @description Immutable. The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar' */
          mainJarFileUri?: string;
          /** @description Immutable. Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. */
          properties?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Optional. Job is a Hive job. */
        hiveJob?: {
          /** @description Immutable. Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries. */
          continueOnFailure?: boolean;
          /** @description Immutable. Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
          properties?: {
            [key: string]: string;
          };
          /** @description Immutable. The HCFS URI of the script that contains Hive queries. */
          queryFileUri?: string;
          /** @description Immutable. A list of queries. */
          queryList?: {
            /** @description Immutable. Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
            queries: string[];
          };
          /** @description Immutable. Optional. Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`). */
          scriptVariables?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Optional. The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: p{Ll}p{Lo}{0,62} Label values must be between 1 and 63 characters long, and must conform to the following regular expression: [p{Ll}p{Lo}p{N}_-]{0,63} No more than 32 labels can be associated with a given job. */
        labels?: {
          [key: string]: string;
        };
        /** @description Immutable. Optional. Job is a Pig job. */
        pigJob?: {
          /** @description Immutable. Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries. */
          continueOnFailure?: boolean;
          /** @description Immutable. Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
          properties?: {
            [key: string]: string;
          };
          /** @description Immutable. The HCFS URI of the script that contains the Pig queries. */
          queryFileUri?: string;
          /** @description Immutable. A list of queries. */
          queryList?: {
            /** @description Immutable. Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
            queries: string[];
          };
          /** @description Immutable. Optional. Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`). */
          scriptVariables?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow. */
        prerequisiteStepIds?: string[];
        /** @description Immutable. Optional. Job is a Presto job. */
        prestoJob?: {
          /** @description Immutable. Optional. Presto client tags to attach to this query */
          clientTags?: string[];
          /** @description Immutable. Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries. */
          continueOnFailure?: boolean;
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats */
          outputFormat?: string;
          /** @description Immutable. Optional. A mapping of property names to values. Used to set Presto [session properties](https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI */
          properties?: {
            [key: string]: string;
          };
          /** @description Immutable. The HCFS URI of the script that contains SQL queries. */
          queryFileUri?: string;
          /** @description Immutable. A list of queries. */
          queryList?: {
            /** @description Immutable. Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
            queries: string[];
          };
        };
        /** @description Immutable. Optional. Job is a PySpark job. */
        pysparkJob?: {
          /** @description Immutable. Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
          archiveUris?: string[];
          /** @description Immutable. Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
          args?: string[];
          /** @description Immutable. Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
          fileUris?: string[];
          /** @description Immutable. Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
          mainPythonFileUri: string;
          /** @description Immutable. Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
          properties?: {
            [key: string]: string;
          };
          /** @description Immutable. Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
          pythonFileUris?: string[];
        };
        /** @description Immutable. Optional. Job scheduling configuration. */
        scheduling?: {
          /**
           * Format: int64
           * @description Immutable. Optional. Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window. Maximum value is 10.
           */
          maxFailuresPerHour?: number;
          /**
           * Format: int64
           * @description Immutable. Optional. Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. Maximum value is 240.
           */
          maxFailuresTotal?: number;
        };
        /** @description Immutable. Optional. Job is a Spark job. */
        sparkJob?: {
          /** @description Immutable. Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
          archiveUris?: string[];
          /** @description Immutable. Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
          args?: string[];
          /** @description Immutable. Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
          fileUris?: string[];
          /** @description Immutable. Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in `jar_file_uris`. */
          mainClass?: string;
          /** @description Immutable. The HCFS URI of the jar file that contains the main class. */
          mainJarFileUri?: string;
          /** @description Immutable. Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
          properties?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Optional. Job is a SparkR job. */
        sparkRJob?: {
          /** @description Immutable. Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
          archiveUris?: string[];
          /** @description Immutable. Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
          args?: string[];
          /** @description Immutable. Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
          fileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
          mainRFileUri: string;
          /** @description Immutable. Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
          properties?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Optional. Job is a SparkSql job. */
        sparkSqlJob?: {
          /** @description Immutable. Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
          jarFileUris?: string[];
          /** @description Immutable. Optional. The runtime log config for job execution. */
          loggingConfig?: {
            /** @description Immutable. The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
            driverLogLevels?: {
              [key: string]: string;
            };
          };
          /** @description Immutable. Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten. */
          properties?: {
            [key: string]: string;
          };
          /** @description Immutable. The HCFS URI of the script that contains SQL queries. */
          queryFileUri?: string;
          /** @description Immutable. A list of queries. */
          queryList?: {
            /** @description Immutable. Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
            queries: string[];
          };
          /** @description Immutable. Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`). */
          scriptVariables?: {
            [key: string]: string;
          };
        };
        /** @description Immutable. Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in prerequisiteStepIds field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
        stepId: string;
      }[];
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated. */
      parameters?: {
        /** @description Immutable. Optional. Brief description of the parameter. Must not exceed 1024 characters. */
        description?: string;
        /** @description Immutable. Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as `placement.clusterSelector.zone`. Also, field paths can reference fields using the following syntax: * Values in maps can be referenced by key: * labels['key'] * placement.clusterSelector.clusterLabels['key'] * placement.managedCluster.labels['key'] * placement.clusterSelector.clusterLabels['key'] * jobs['step-id'].labels['key'] * Jobs in the jobs list can be referenced by step-id: * jobs['step-id'].hadoopJob.mainJarFileUri * jobs['step-id'].hiveJob.queryFileUri * jobs['step-id'].pySparkJob.mainPythonFileUri * jobs['step-id'].hadoopJob.jarFileUris[0] * jobs['step-id'].hadoopJob.archiveUris[0] * jobs['step-id'].hadoopJob.fileUris[0] * jobs['step-id'].pySparkJob.pythonFileUris[0] * Items in repeated fields can be referenced by a zero-based index: * jobs['step-id'].sparkJob.args[0] * Other examples: * jobs['step-id'].hadoopJob.properties['key'] * jobs['step-id'].hadoopJob.args[0] * jobs['step-id'].hiveJob.scriptVariables['key'] * jobs['step-id'].hadoopJob.mainJarFileUri * placement.clusterSelector.zone It may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: - placement.clusterSelector.clusterLabels - jobs['step-id'].sparkJob.args */
        fields: string[];
        /** @description Immutable. Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. */
        name: string;
        /** @description Immutable. Optional. Validation rules to be applied to this parameter's value. */
        validation?: {
          /** @description Immutable. Validation based on regular expressions. */
          regex?: {
            /** @description Immutable. Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient). */
            regexes: string[];
          };
          /** @description Immutable. Validation based on a list of allowed values. */
          values?: {
            /** @description Immutable. Required. List of allowed values for the parameter. */
            values: string[];
          };
        };
      }[];
      /** @description Immutable. Required. WorkflowTemplate scheduling information. */
      placement: {
        /** @description Immutable. Optional. A selector that chooses target cluster for jobs based on metadata. The selector is evaluated at the time each job is submitted. */
        clusterSelector?: {
          /** @description Immutable. Required. The cluster labels. Cluster must have all labels to match. */
          clusterLabels: {
            [key: string]: string;
          };
          /** @description Immutable. Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster. If unspecified, the zone of the first cluster matching the selector is used. */
          zone?: string;
        };
        /** @description Immutable. A cluster that is managed by the workflow. */
        managedCluster?: {
          /** @description Immutable. Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix. The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. */
          clusterName: string;
          /** @description Immutable. Required. The cluster configuration. */
          config: {
            /** @description Immutable. Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset. */
            autoscalingConfig?: {
              /** @description Immutable. */
              policyRef?: {
                /** @description Optional. The autoscaling policy used by the cluster. Only resource names including projectid and location (region) are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` * `projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]` Note that the policy must be in the same project and Dataproc region.
                 *
                 *     Allowed value: The Google Cloud resource name of a `DataprocAutoscalingPolicy` resource (format: `projects/{{project}}/locations/{{location}}/autoscalingPolicies/{{name}}`). */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description Immutable. Optional. Encryption settings for the cluster. */
            encryptionConfig?: {
              /** @description Immutable. */
              gcePdKmsKeyRef?: {
                /** @description Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
                 *
                 *     Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description Immutable. Optional. Port/endpoint configuration for this cluster */
            endpointConfig?: {
              /** @description Immutable. Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. */
              enableHttpPortAccess?: boolean;
            };
            /** @description Immutable. Optional. The shared Compute Engine config settings for all instances in a cluster. */
            gceClusterConfig?: {
              /** @description Immutable. Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses. */
              internalIPOnly?: boolean;
              /** @description Immutable. The Compute Engine metadata entries to add to all instances (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
              metadata?: {
                [key: string]: string;
              };
              /** @description Immutable. */
              networkRef?: {
                /** @description Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information). A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default` * `projects/[project_id]/regions/global/default` * `default`
                 *
                 *     Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Optional. Node Group Affinity for sole-tenant clusters. */
              nodeGroupAffinity?: {
                /** @description Immutable. */
                nodeGroupRef: {
                  /** @description Required. The URI of a sole-tenant [node group resource](https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on. A full URL, partial URI, or node group name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1` * `node-group-1`
                   *
                   *     Allowed value: The `selfLink` field of a `ComputeNodeGroup` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              };
              /** @description Immutable. Optional. The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL */
              privateIPv6GoogleAccess?: string;
              /** @description Immutable. Optional. Reservation Affinity for consuming Zonal reservation. */
              reservationAffinity?: {
                /** @description Immutable. Optional. Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION */
                consumeReservationType?: string;
                /** @description Immutable. Optional. Corresponds to the label key of reservation resource. */
                key?: string;
                /** @description Immutable. Optional. Corresponds to the label values of reservation resource. */
                values?: string[];
              };
              /** @description Immutable. */
              serviceAccountRef?: {
                /** @description Optional. The [Dataproc service account](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see [VM Data Plane identity](https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
                 *
                 *     Allowed value: The `email` field of an `IAMServiceAccount` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control */
              serviceAccountScopes?: string[];
              /** @description Immutable. Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs. */
              shieldedInstanceConfig?: {
                /** @description Immutable. Optional. Defines whether instances have integrity monitoring enabled. Integrity monitoring compares the most recent boot measurements to the integrity policy baseline and returns a pair of pass/fail results depending on whether they match or not. */
                enableIntegrityMonitoring?: boolean;
                /** @description Immutable. Optional. Defines whether the instances have Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. */
                enableSecureBoot?: boolean;
                /** @description Immutable. Optional. Defines whether the instance have the vTPM enabled. Virtual Trusted Platform Module protects objects like keys, certificates and enables Measured Boot by performing the measurements needed to create a known good boot baseline, called the integrity policy baseline. */
                enableVtpm?: boolean;
              };
              /** @description Immutable. */
              subnetworkRef?: {
                /** @description Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` * `sub0`
                 *
                 *     Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. The Compute Engine tags to add to all instances (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
              tags?: string[];
              /** @description Immutable. Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]` * `projects/[project_id]/zones/[zone]` * `us-central1-f` */
              zone?: string;
            };
            /** @description Immutable. Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's `role` metadata to run an executable on a master or worker node, as shown below using `curl` (you can also use `wget`): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi */
            initializationActions?: {
              /** @description Immutable. Required. Cloud Storage URI of executable file. */
              executableFile?: string;
              /** @description Immutable. Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
              executionTimeout?: string;
            }[];
            /** @description Immutable. Optional. Lifecycle setting for the cluster. */
            lifecycleConfig?: {
              /**
               * Format: date-time
               * @description Immutable. Optional. The time when cluster will be auto-deleted (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
               */
              autoDeleteTime?: string;
              /** @description Immutable. Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). */
              autoDeleteTtl?: string;
              /** @description Immutable. Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). */
              idleDeleteTtl?: string;
            };
            /** @description Immutable. Optional. The Compute Engine config settings for the master instance in a cluster. */
            masterConfig?: {
              /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
              accelerators?: {
                /**
                 * Format: int64
                 * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
                 */
                acceleratorCount?: number;
                /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
                acceleratorType?: string;
              }[];
              /** @description Immutable. Optional. Disk option config settings. */
              diskConfig?: {
                /**
                 * Format: int64
                 * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
                 */
                bootDiskSizeGb?: number;
                /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
                bootDiskType?: string;
                /**
                 * Format: int64
                 * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
                 */
                numLocalSsds?: number;
              };
              /** @description Immutable. */
              imageRef?: {
                /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
                 *
                 *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
              machineType?: string;
              /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
              minCpuPlatform?: string;
              /**
               * Format: int64
               * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
               */
              numInstances?: number;
              /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
              preemptibility?: string;
            };
            /** @description Immutable. Optional. The Compute Engine config settings for additional worker instances in a cluster. */
            secondaryWorkerConfig?: {
              /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
              accelerators?: {
                /**
                 * Format: int64
                 * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
                 */
                acceleratorCount?: number;
                /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
                acceleratorType?: string;
              }[];
              /** @description Immutable. Optional. Disk option config settings. */
              diskConfig?: {
                /**
                 * Format: int64
                 * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
                 */
                bootDiskSizeGb?: number;
                /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
                bootDiskType?: string;
                /**
                 * Format: int64
                 * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
                 */
                numLocalSsds?: number;
              };
              /** @description Immutable. */
              imageRef?: {
                /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
                 *
                 *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
              machineType?: string;
              /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
              minCpuPlatform?: string;
              /**
               * Format: int64
               * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
               */
              numInstances?: number;
              /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
              preemptibility?: string;
            };
            /** @description Immutable. Optional. Security settings for the cluster. */
            securityConfig?: {
              /** @description Immutable. Optional. Kerberos related configuration. */
              kerberosConfig?: {
                /** @description Immutable. Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
                crossRealmTrustAdminServer?: string;
                /** @description Immutable. Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
                crossRealmTrustKdc?: string;
                /** @description Immutable. Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
                crossRealmTrustRealm?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
                crossRealmTrustSharedPassword?: string;
                /** @description Immutable. Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster. */
                enableKerberos?: boolean;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
                kdcDbKey?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
                keyPassword?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
                keystore?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc. */
                keystorePassword?: string;
                /** @description Immutable. */
                kmsKeyRef?: {
                  /** @description Optional. The uri of the KMS key used to encrypt various sensitive files.
                   *
                   *     Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description Immutable. Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
                realm?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
                rootPrincipalPassword?: string;
                /**
                 * Format: int64
                 * @description Immutable. Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
                 */
                tgtLifetimeHours?: number;
                /** @description Immutable. Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
                truststore?: string;
                /** @description Immutable. Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
                truststorePassword?: string;
              };
            };
            /** @description Immutable. Optional. The config settings for software inside the cluster. */
            softwareConfig?: {
              /** @description Immutable. Optional. The version of software inside the cluster. It must be one of the supported [Dataproc Versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the ["preview" version](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
              imageVersion?: string;
              /** @description Immutable. Optional. The set of components to activate on the cluster. */
              optionalComponents?: string[];
              /** @description Immutable. Optional. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. The following are supported prefixes and their mappings: * capacity-scheduler: `capacity-scheduler.xml` * core: `core-site.xml` * distcp: `distcp-default.xml` * hdfs: `hdfs-site.xml` * hive: `hive-site.xml` * mapred: `mapred-site.xml` * pig: `pig.properties` * spark: `spark-defaults.conf` * yarn: `yarn-site.xml` For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
              properties?: {
                [key: string]: string;
              };
            };
            /** @description Immutable. */
            stagingBucketRef?: {
              /** @description Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see [Dataproc staging bucket](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
               *
               *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. */
            tempBucketRef?: {
              /** @description Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket. **This field requires a Cloud Storage bucket name, not a URI to a Cloud Storage bucket.**
               *
               *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. Optional. The Compute Engine config settings for worker instances in a cluster. */
            workerConfig?: {
              /** @description Immutable. Optional. The Compute Engine accelerator configuration for these instances. */
              accelerators?: {
                /**
                 * Format: int64
                 * @description Immutable. The number of the accelerator cards of this type exposed to this instance.
                 */
                acceleratorCount?: number;
                /** @description Immutable. Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80` * `nvidia-tesla-k80` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`. */
                acceleratorType?: string;
              }[];
              /** @description Immutable. Optional. Disk option config settings. */
              diskConfig?: {
                /**
                 * Format: int64
                 * @description Immutable. Optional. Size in GB of the boot disk (default is 500GB).
                 */
                bootDiskSizeGb?: number;
                /** @description Immutable. Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types). */
                bootDiskType?: string;
                /**
                 * Format: int64
                 * @description Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
                 */
                numLocalSsds?: number;
              };
              /** @description Immutable. */
              imageRef?: {
                /** @description Optional. The Compute Engine image resource used for cluster instances. The URI can represent an image or image family. Image examples: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]` * `projects/[project_id]/global/images/[image-id]` * `image-id` Image family examples. Dataproc will use the most recent image from the family: * `https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]` * `projects/[project_id]/global/images/family/[custom-image-family-name]` If the URI is unspecified, it will be inferred from `SoftwareConfig.image_version` or the system default.
                 *
                 *     Allowed value: The `selfLink` field of a `ComputeImage` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. Optional. The Compute Engine machine type used for cluster instances. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2` * `n1-standard-2` **Auto Zone Exception**: If you are using the Dataproc [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, `n1-standard-2`. */
              machineType?: string;
              /** @description Immutable. Optional. Specifies the minimum cpu platform for the Instance Group. See [Dataproc -> Minimum CPU Platform](https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
              minCpuPlatform?: string;
              /**
               * Format: int64
               * @description Immutable. Optional. The number of VM instances in the instance group. For [HA cluster](/dataproc/docs/concepts/configuring-clusters/high-availability) [master_config](#FIELDS.master_config) groups, **must be set to 3**. For standard cluster [master_config](#FIELDS.master_config) groups, **must be set to 1**.
               */
              numInstances?: number;
              /** @description Immutable. Optional. Specifies the preemptibility of the instance group. The default value for master and worker groups is `NON_PREEMPTIBLE`. This default cannot be changed. The default value for secondary instances is `PREEMPTIBLE`. Possible values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE */
              preemptibility?: string;
            };
          };
          /** @description Immutable. Optional. The labels to associate with this cluster. Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: p{Ll}p{Lo}{0,62} Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: [p{Ll}p{Lo}p{N}_-]{0,63} No more than 32 labels can be associated with a given cluster. */
          labels?: {
            [key: string]: string;
          };
        };
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef?: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
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
      /**
       * Format: date-time
       * @description Output only. The time template was created.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      placement?: {
        managedCluster?: {
          config?: {
            endpointConfig?: {
              /** @description Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true. */
              httpPorts?: {
                [key: string]: string;
              };
            };
            lifecycleConfig?: {
              /**
               * Format: date-time
               * @description Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
               */
              idleStartTime?: string;
            };
            masterConfig?: {
              /** @description Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group. */
              instanceNames?: string[];
              /** @description Output only. Specifies that this instance group contains preemptible instances. */
              isPreemptible?: boolean;
              /** @description Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups. */
              managedGroupConfig?: {
                /** @description Output only. The name of the Instance Group Manager for this group. */
                instanceGroupManagerName?: string;
                /** @description Output only. The name of the Instance Template used for the Managed Instance Group. */
                instanceTemplateName?: string;
              };
            };
            secondaryWorkerConfig?: {
              /** @description Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group. */
              instanceNames?: string[];
              /** @description Output only. Specifies that this instance group contains preemptible instances. */
              isPreemptible?: boolean;
              /** @description Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups. */
              managedGroupConfig?: {
                /** @description Output only. The name of the Instance Group Manager for this group. */
                instanceGroupManagerName?: string;
                /** @description Output only. The name of the Instance Template used for the Managed Instance Group. */
                instanceTemplateName?: string;
              };
            };
            workerConfig?: {
              /** @description Output only. The list of instance names. Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group. */
              instanceNames?: string[];
              /** @description Output only. Specifies that this instance group contains preemptible instances. */
              isPreemptible?: boolean;
              /** @description Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups. */
              managedGroupConfig?: {
                /** @description Output only. The name of the Instance Group Manager for this group. */
                instanceGroupManagerName?: string;
                /** @description Output only. The name of the Instance Template used for the Managed Instance Group. */
                instanceTemplateName?: string;
              };
            };
          };
        };
      };
      /**
       * Format: date-time
       * @description Output only. The time template was last updated.
       */
      updateTime?: string;
      /**
       * Format: int64
       * @description Output only. The current version of this workflow template.
       */
      version?: number;
    };
  };
}
