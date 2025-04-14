import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRunJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesRunJobV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "run.cnrm.cloud.google.com/v1beta1", kind: "RunJob", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesRunJobV1beta1Config extends ManifestConfig {
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
      /** @description Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
       *
       *     Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
       *     All system annotations in v1 now have a corresponding field in v2 Job.
       *
       *     This field follows Kubernetes annotations' namespacing, limits, and rules. */
      annotations?: {
        [key: string]: string;
      };
      /** @description Settings for the Binary Authorization feature. */
      binaryAuthorization?: {
        /** @description If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass. */
        breakglassJustification?: string;
        /** @description If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. */
        useDefault?: boolean;
      };
      /** @description Arbitrary identifier for the API client. */
      client?: string;
      /** @description Arbitrary version identifier for the API client. */
      clientVersion?: string;
      /** @description The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
       *     If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
       *
       *     For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. */
      launchStage?: string;
      /** @description Immutable. The location of the cloud run job. */
      location: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The template used to create executions for this Job. */
      template: {
        /** @description Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
         *
         *     Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
         *     All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.
         *
         *     This field follows Kubernetes annotations' namespacing, limits, and rules. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Specifies the maximum desired number of tasks the execution should run at given time. Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism. */
        parallelism?: number;
        /** @description Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/. */
        taskCount?: number;
        /** @description Describes the task(s) that will be created when executing an execution. */
        template: {
          /** @description Holds the single container that defines the unit of execution for this task. */
          containers?: {
            /** @description Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell. */
            args?: string[];
            /** @description Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell. */
            command?: string[];
            /** @description List of environment variables to set in the container. */
            env?: {
              /** @description Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. */
              name: string;
              /** @description Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes. */
              value?: string;
              /** @description Source for the environment variable's value. */
              valueSource?: {
                /** @description Selects a secret and a specific version from Cloud Secret Manager. */
                secretKeyRef?: {
                  /** @description The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project. */
                  secretRef: {
                    /** @description Allowed value: The `name` field of a `SecretManagerSecret` resource. */
                    external?: string;
                    /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                    name?: string;
                    /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                    namespace?: string;
                  } & (unknown | unknown);
                  /** @description The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version. */
                  versionRef: {
                    /** @description Allowed value: The `version` field of a `SecretManagerSecretVersion` resource. */
                    external?: string;
                    /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                    name?: string;
                    /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                    namespace?: string;
                  } & (unknown | unknown);
                };
              };
            }[];
            /** @description URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. */
            image: string;
            /** @description DEPRECATED. `liveness_probe` is deprecated. This field is not supported by the Cloud Run API. Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             *     This field is not supported in Cloud Run Job currently. */
            livenessProbe?: {
              /** @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
              failureThreshold?: number;
              /** @description HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified. */
              httpGet?: {
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. */
                  name: string;
                  /** @description The header field value. */
                  value?: string;
                }[];
                /** @description Path to access on the HTTP server. Defaults to '/'. */
                path?: string;
              };
              /** @description Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes. */
              initialDelaySeconds?: number;
              /** @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds. */
              periodSeconds?: number;
              /** @description TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified. */
              tcpSocket?: {
                /** @description Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080. */
                port?: number;
              };
              /** @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes. */
              timeoutSeconds?: number;
            };
            /** @description Name of the container specified as a DNS_LABEL. */
            name?: string;
            /** @description List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
             *
             *     If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
            ports?: {
              /** @description Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. */
              containerPort?: number;
              /** @description If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
              name?: string;
            }[];
            /** @description Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources. */
            resources?: {
              /** @description Only memory and CPU are supported. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go. */
              limits?: {
                [key: string]: string;
              };
            };
            /** @description DEPRECATED. `startup_probe` is deprecated. This field is not supported by the Cloud Run API. Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             *     This field is not supported in Cloud Run Job currently. */
            startupProbe?: {
              /** @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
              failureThreshold?: number;
              /** @description HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified. */
              httpGet?: {
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. */
                  name: string;
                  /** @description The header field value. */
                  value?: string;
                }[];
                /** @description Path to access on the HTTP server. Defaults to '/'. */
                path?: string;
              };
              /** @description Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes. */
              initialDelaySeconds?: number;
              /** @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds. */
              periodSeconds?: number;
              /** @description TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified. */
              tcpSocket?: {
                /** @description Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080. */
                port?: number;
              };
              /** @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes. */
              timeoutSeconds?: number;
            };
            /** @description Volume to mount into the container's filesystem. */
            volumeMounts?: {
              /** @description Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run. */
              mountPath: string;
              /** @description This must match the Name of a Volume. */
              name: string;
            }[];
            /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
            workingDir?: string;
          }[];
          /** @description A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek */
          encryptionKeyRef?: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. */
          executionEnvironment?: string;
          /** @description Number of retries allowed per Task, before marking this Task failed. */
          maxRetries?: number;
          /** @description Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
          serviceAccountRef?: {
            /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
           *
           *     A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". */
          timeout?: string;
          /** @description A list of Volumes to make available to containers. */
          volumes?: {
            /** @description For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. */
            cloudSqlInstance?: {
              instanceRefs?: ({
                /** @description Allowed value: The `connectionName` field of a `SQLInstance` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown))[];
            };
            /** @description Ephemeral storage used as a shared volume. */
            emptyDir?: {
              /** @description The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. */
              medium?: string;
              /** @description Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir. */
              sizeLimit?: string;
            };
            /** @description Volume's name. */
            name: string;
            /** @description Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret. */
            secret?: {
              /** @description Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. */
              defaultMode?: number;
              /** @description If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version. */
              items?: {
                /** @description Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. */
                mode?: number;
                /** @description The relative path of the secret in the container. */
                path: string;
                /** @description The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version */
                versionRef: {
                  /** @description Allowed value: The `version` field of a `SecretManagerSecretVersion` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
              /** @description The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project. */
              secretRef: {
                /** @description Allowed value: The `name` field of a `SecretManagerSecret` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            };
          }[];
          /** @description VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. */
          vpcAccess?: {
            /** @description VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. */
            connectorRef?: {
              /** @description Allowed value: The `selfLink` field of a `VPCAccessConnector` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. */
            egress?: string;
            /** @description Direct VPC egress settings. Currently only single network interface is supported. */
            networkInterfaces?: {
              /** @description The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both
               *     network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
               *     looked up from the subnetwork. */
              networkRef?: {
                /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both
               *     network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
               *     subnetwork with the same name with the network will be used. */
              subnetworkRef?: {
                /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Network tags applied to this Cloud Run job. */
              tags?: string[];
            }[];
          };
        };
      };
    };
  };
}
