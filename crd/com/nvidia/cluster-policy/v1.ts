import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterPolicyV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesClusterPolicyV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesClusterPolicyV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "nvidia.com/v1";
    kind: "ClusterPolicy";
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
    /** @description ClusterPolicySpec defines the desired state of ClusterPolicy */
    spec?: {
      /** @description CCManager component spec */
      ccManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Default CC mode setting for compatible GPUs on the node */
        defaultMode?: string;
        /** @description Enabled indicates if deployment of CC Manager is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description CC Manager image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description CC Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description CC Manager image tag */
        version?: string;
      };
      /** @description CDI configures how the Container Device Interface is used in the cluster */
      cdi?: {
        /** @description Default indicates whether to use CDI as the default mechanism for providing GPU access to containers. */
        default?: boolean;
        /** @description Enabled indicates whether CDI can be used to make GPUs accessible to containers. */
        enabled?: boolean;
      };
      /** @description Daemonset defines common configuration for all Daemonsets */
      daemonsets: {
        /** @description Optional: Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Optional: Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. */
        labels?: {
          [key: string]: string;
        };
        priorityClassName?: string;
        /** @description Optional: Configuration for rolling update of all DaemonSet pods */
        rollingUpdate?: {
          maxUnavailable?: string;
        };
        /** @description Optional: Set tolerations */
        tolerations?: {
          /** @description Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
          effect?: string;
          /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
          key?: string;
          /** @description Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
          operator?: string;
          /**
           * Format: int64
           * @description TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          tolerationSeconds?: number;
          /** @description Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
          value?: string;
        }[];
        updateStrategy?: string;
      };
      /** @description DCGM component spec */
      dcgm: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if deployment of NVIDIA DCGM Hostengine as a separate pod is enabled. */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /**
         * Format: int32
         * @description HostPort represents host port that needs to be bound for DCGM engine (Default: 5555)
         */
        hostPort?: number;
        /** @description NVIDIA DCGM image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA DCGM image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA DCGM image tag */
        version?: string;
      };
      /** @description DCGMExporter spec */
      dcgmExporter: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Optional: Custom metrics configuration for NVIDIA DCGM Exporter */
        config?: {
          /** @description ConfigMap name with file dcgm-metrics.csv for metrics to be collected by NVIDIA DCGM Exporter */
          name?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA DCGM Exporter through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA DCGM Exporter image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA DCGM Exporter image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description Optional: ServiceMonitor configuration for NVIDIA DCGM Exporter */
        serviceMonitor?: {
          /** @description AdditionalLabels to add to ServiceMonitor instance for NVIDIA DCGM Exporter */
          additionalLabels?: {
            [key: string]: string;
          };
          /** @description Enabled indicates if ServiceMonitor is deployed for NVIDIA DCGM Exporter */
          enabled?: boolean;
          /** @description HonorLabels chooses the metric’s labels on collisions with target labels. */
          honorLabels?: boolean;
          /** @description Interval which metrics should be scraped from NVIDIA DCGM Exporter. If not specified Prometheus’ global scrape interval is used. Supported units: y, w, d, h, m, s, ms */
          interval?: string;
          /** @description Relabelings allows to rewrite labels on metric sets for NVIDIA DCGM Exporter */
          relabelings?: {
            /**
             * @description Action to perform based on regex matching. Default is 'replace'. uppercase and lowercase actions require Prometheus >= 2.36.
             * @default replace
             * @enum {string}
             */
            action:
              | "replace"
              | "Replace"
              | "keep"
              | "Keep"
              | "drop"
              | "Drop"
              | "hashmod"
              | "HashMod"
              | "labelmap"
              | "LabelMap"
              | "labeldrop"
              | "LabelDrop"
              | "labelkeep"
              | "LabelKeep"
              | "lowercase"
              | "Lowercase"
              | "uppercase"
              | "Uppercase"
              | "keepequal"
              | "KeepEqual"
              | "dropequal"
              | "DropEqual";
            /**
             * Format: int64
             * @description Modulus to take of the hash of the source label values.
             */
            modulus?: number;
            /** @description Regular expression against which the extracted value is matched. Default is '(.*)' */
            regex?: string;
            /** @description Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
            replacement?: string;
            /** @description Separator placed between concatenated source label values. default is ';'. */
            separator?: string;
            /** @description The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
            sourceLabels?: string[];
            /** @description Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
            targetLabel?: string;
          }[];
        };
        /** @description NVIDIA DCGM Exporter image tag */
        version?: string;
      };
      /** @description DevicePlugin component spec */
      devicePlugin: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Optional: Configuration for the NVIDIA Device Plugin via the ConfigMap */
        config?: {
          /** @description Default config name within the ConfigMap for the NVIDIA Device Plugin  config */
          default?: string;
          /** @description ConfigMap name for NVIDIA Device Plugin config including shared config between plugin and GFD */
          name?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA Device Plugin through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA Device Plugin image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA Device Plugin image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA Device Plugin image tag */
        version?: string;
      };
      /** @description Driver component spec */
      driver: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Optional: Custom certificates configuration for NVIDIA Driver container */
        certConfig?: {
          name?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA Driver through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA Driver image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Optional: Kernel module configuration parameters for the NVIDIA Driver */
        kernelModuleConfig?: {
          name?: string;
        };
        /** @description Optional: Licensing configuration for NVIDIA vGPU licensing */
        licensingConfig?: {
          configMapName?: string;
          /** @description NLSEnabled indicates if NVIDIA Licensing System is used for licensing. */
          nlsEnabled?: boolean;
        };
        /** @description NVIDIA Driver container liveness probe settings */
        livenessProbe?: {
          /**
           * Format: int32
           * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          failureThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          initialDelaySeconds?: number;
          /**
           * Format: int32
           * @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          periodSeconds?: number;
          /**
           * Format: int32
           * @description Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          successThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          timeoutSeconds?: number;
        };
        /** @description Manager represents configuration for NVIDIA Driver Manager initContainer */
        manager?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
          /** @description Image represents NVIDIA Driver Manager image name */
          image?: string;
          /** @description Image pull policy */
          imagePullPolicy?: string;
          /** @description Image pull secrets */
          imagePullSecrets?: string[];
          /** @description Repository represents Driver Managerrepository path */
          repository?: string;
          /** @description Version represents NVIDIA Driver Manager image tag(version) */
          version?: string;
        };
        /** @description GPUDirectRDMASpec defines the properties for nvidia-peermem deployment */
        rdma?: {
          /** @description Enabled indicates if GPUDirect RDMA is enabled through GPU operator */
          enabled?: boolean;
          /** @description UseHostMOFED indicates to use MOFED drivers directly installed on the host to enable GPUDirect RDMA */
          useHostMofed?: boolean;
        };
        /** @description NVIDIA Driver container readiness probe settings */
        readinessProbe?: {
          /**
           * Format: int32
           * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          failureThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          initialDelaySeconds?: number;
          /**
           * Format: int32
           * @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          periodSeconds?: number;
          /**
           * Format: int32
           * @description Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          successThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          timeoutSeconds?: number;
        };
        /** @description Optional: Custom repo configuration for NVIDIA Driver container */
        repoConfig?: {
          configMapName?: string;
        };
        /** @description NVIDIA Driver image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA Driver container startup probe settings */
        startupProbe?: {
          /**
           * Format: int32
           * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
           */
          failureThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          initialDelaySeconds?: number;
          /**
           * Format: int32
           * @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
           */
          periodSeconds?: number;
          /**
           * Format: int32
           * @description Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
           */
          successThreshold?: number;
          /**
           * Format: int32
           * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
           */
          timeoutSeconds?: number;
        };
        /** @description Driver auto-upgrade settings */
        upgradePolicy?: {
          /** @description AutoUpgrade is a global switch for automatic upgrade feature if set to false all other options are ignored */
          autoUpgrade?: boolean;
          /** @description DrainSpec describes configuration for node drain during automatic upgrade */
          drain?: {
            /** @description DeleteEmptyDir indicates if should continue even if there are pods using emptyDir (local data that will be deleted when the node is drained) */
            deleteEmptyDir?: boolean;
            /** @description Enable indicates if node draining is allowed during upgrade */
            enable?: boolean;
            /** @description Force indicates if force draining is allowed */
            force?: boolean;
            /** @description PodSelector specifies a label selector to filter pods on the node that need to be drained For more details on label selectors, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
            podSelector?: string;
            /** @description TimeoutSecond specifies the length of time in seconds to wait before giving up drain, zero means infinite */
            timeoutSeconds?: number;
          };
          /** @description MaxParallelUpgrades indicates how many nodes can be upgraded in parallel 0 means no limit, all nodes will be upgraded in parallel */
          maxParallelUpgrades?: number;
          /** @description MaxUnavailable is the maximum number of nodes with the driver installed, that can be unavailable during the upgrade. Value can be an absolute number (ex: 5) or a percentage of total nodes at the start of upgrade (ex: 10%). Absolute number is calculated from percentage by rounding up. By default, a fixed value of 25% is used. */
          maxUnavailable?: number | string;
          /** @description PodDeletionSpec describes configuration for deletion of pods using special resources during automatic upgrade */
          podDeletion?: {
            /** @description DeleteEmptyDir indicates if should continue even if there are pods using emptyDir (local data that will be deleted when the pod is deleted) */
            deleteEmptyDir?: boolean;
            /** @description Force indicates if force deletion is allowed */
            force?: boolean;
            /** @description TimeoutSecond specifies the length of time in seconds to wait before giving up on pod termination, zero means infinite */
            timeoutSeconds?: number;
          };
          /** @description WaitForCompletionSpec describes the configuration for waiting on job completions */
          waitForCompletion?: {
            /** @description PodSelector specifies a label selector for the pods to wait for completion For more details on label selectors, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
            podSelector?: string;
            /** @description TimeoutSecond specifies the length of time in seconds to wait before giving up on pod termination, zero means infinite */
            timeoutSeconds?: number;
          };
        };
        /** @description UseNvidiaDriverCRD indicates if the deployment of NVIDIA Driver is managed by the NVIDIADriver CRD type */
        useNvidiaDriverCRD?: boolean;
        /** @description UseOpenKernelModules indicates if the open GPU kernel modules should be used */
        useOpenKernelModules?: boolean;
        /** @description UsePrecompiled indicates if deployment of NVIDIA Driver using pre-compiled modules is enabled */
        usePrecompiled?: boolean;
        /** @description NVIDIA Driver image tag */
        version?: string;
        /** @description Optional: Virtual Topology Daemon configuration for NVIDIA vGPU drivers */
        virtualTopology?: {
          /** @description Optional: Config name representing virtual topology daemon configuration file nvidia-topologyd.conf */
          config?: string;
        };
      };
      /** @description GPUDirectStorage defines the spec for GDS components(Experimental) */
      gds?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if GPUDirect Storage is enabled through GPU operator */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA GPUDirect Storage Driver image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA GPUDirect Storage Driver image repository */
        repository?: string;
        /** @description NVIDIA GPUDirect Storage Driver image tag */
        version?: string;
      };
      /** @description GPUFeatureDiscovery spec */
      gfd: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if deployment of GPU Feature Discovery Plugin is enabled. */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description GFD image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description GFD image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description GFD image tag */
        version?: string;
      };
      /** @description KataManager component spec */
      kataManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Kata Manager config */
        config?: {
          /** @description ArtifactsDir is the directory where kata artifacts (e.g. kernel / guest images, configuration, etc.) are placed on the local filesystem. */
          artifactsDir?: string;
          /** @description RuntimeClasses is a list of kata runtime classes to configure. */
          runtimeClasses?: {
            /** @description Artifacts are the kata artifacts associated with the runtime class. */
            artifacts: {
              /** @description PullSecret is the secret used to pull the OCI artifact. */
              pullSecret?: string;
              /** @description URL is the path to the OCI artifact (payload) containing all artifacts associated with a kata runtime class. */
              url: string;
            };
            /** @description Name is the name of the kata runtime class. */
            name: string;
            /** @description NodeSelector specifies the nodeSelector for the RuntimeClass object. This ensures pods running with the RuntimeClass only get scheduled onto nodes which support it. */
            nodeSelector?: {
              [key: string]: string;
            };
          }[];
        };
        /** @description Enabled indicates if deployment of Kata Manager is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description Kata Manager image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Kata Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description Kata Manager image tag */
        version?: string;
      };
      /** @description MIG spec */
      mig?: {
        /** @description Optional: MIGStrategy to apply for GFD and NVIDIA Device Plugin */
        strategy?: string;
      };
      /** @description MIGManager for configuration to deploy MIG Manager */
      migManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Optional: Custom mig-parted configuration for NVIDIA MIG Manager container */
        config?: {
          /** @description Default MIG config to be applied on the node, when there is no config specified with the node label nvidia.com/mig.config */
          default?: string;
          /** @description ConfigMap name */
          name?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA MIG Manager is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description Optional: Custom gpu-clients configuration for NVIDIA MIG Manager container */
        gpuClientsConfig?: {
          /** @description ConfigMap name */
          name?: string;
        };
        /** @description NVIDIA MIG Manager image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA MIG Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA MIG Manager image tag */
        version?: string;
      };
      /** @description NodeStatusExporter spec */
      nodeStatusExporter: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if deployment of Node Status Exporter is enabled. */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description Node Status Exporter image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Node Status Exporterimage repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description Node Status Exporterimage tag */
        version?: string;
      };
      /** @description Operator component spec */
      operator: {
        /** @description Optional: Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Runtime defines container runtime type */
        defaultRuntime: string;
        /** @description InitContainerSpec describes configuration for initContainer image used with all components */
        initContainer?: {
          /** @description Image represents image name */
          image?: string;
          /** @description Image pull policy */
          imagePullPolicy?: string;
          /** @description Image pull secrets */
          imagePullSecrets?: string[];
          /** @description Repository represents image repository path */
          repository?: string;
          /** @description Version represents image tag(version) */
          version?: string;
        };
        /** @description Optional: Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. */
        labels?: {
          [key: string]: string;
        };
        runtimeClass?: string;
        /** @description UseOpenShiftDriverToolkit indicates if DriverToolkit image should be used on OpenShift to build and install driver modules */
        use_ocp_driver_toolkit?: boolean;
      };
      /** @description PSA defines spec for PodSecurityAdmission configuration */
      psa?: {
        /** @description Enabled indicates if PodSecurityAdmission configuration needs to be enabled for all Pods */
        enabled?: boolean;
      };
      /** @description PSP defines spec for handling PodSecurityPolicies */
      psp?: {
        /** @description Enabled indicates if PodSecurityPolicies needs to be enabled for all Pods */
        enabled?: boolean;
      };
      /** @description SandboxDevicePlugin component spec */
      sandboxDevicePlugin?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if deployment of NVIDIA Sandbox Device Plugin through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA Sandbox Device Plugin image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA Sandbox Device Plugin image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA Sandbox Device Plugin image tag */
        version?: string;
      };
      /** @description SandboxWorkloads defines the spec for handling sandbox workloads (i.e. Virtual Machines) */
      sandboxWorkloads?: {
        /** @description DefaultWorkload indicates the default GPU workload type to configure worker nodes in the cluster for */
        defaultWorkload?: string;
        /** @description Enabled indicates if the GPU Operator should manage additional operands required for sandbox workloads (i.e. VFIO Manager, vGPU Manager, and additional device plugins) */
        enabled?: boolean;
      };
      /** @description Toolkit component spec */
      toolkit: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Enabled indicates if deployment of NVIDIA Container Toolkit through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA Container Toolkit image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Toolkit install directory on the host */
        installDir?: string;
        /** @description NVIDIA Container Toolkit image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA Container Toolkit image tag */
        version?: string;
      };
      /** @description Validator defines the spec for operator-validator daemonset */
      validator?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description CUDA validator spec */
        cuda?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description Toolkit validator spec */
        driver?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description Validator image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Plugin validator spec */
        plugin?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description Validator image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description Toolkit validator spec */
        toolkit?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description Validator image tag */
        version?: string;
        /** @description VfioPCI validator spec */
        vfioPCI?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description VGPUDevices validator spec */
        vgpuDevices?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
        /** @description VGPUManager validator spec */
        vgpuManager?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
        };
      };
      /** @description VFIOManager for configuration to deploy VFIO-PCI Manager */
      vfioManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description DriverManager represents configuration for NVIDIA Driver Manager */
        driverManager?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
          /** @description Image represents NVIDIA Driver Manager image name */
          image?: string;
          /** @description Image pull policy */
          imagePullPolicy?: string;
          /** @description Image pull secrets */
          imagePullSecrets?: string[];
          /** @description Repository represents Driver Managerrepository path */
          repository?: string;
          /** @description Version represents NVIDIA Driver Manager image tag(version) */
          version?: string;
        };
        /** @description Enabled indicates if deployment of VFIO Manager is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description VFIO Manager image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description VFIO Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description VFIO Manager image tag */
        version?: string;
      };
      /** @description VGPUDeviceManager spec */
      vgpuDeviceManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description NVIDIA vGPU devices configuration for NVIDIA vGPU Device Manager container */
        config?: {
          /** @description Default config name within the ConfigMap */
          default?: string;
          /** @description ConfigMap name */
          name?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA vGPU Device Manager is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA vGPU Device Manager image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA vGPU Device Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA vGPU Device Manager image tag */
        version?: string;
      };
      /** @description VGPUManager component spec */
      vgpuManager?: {
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description DriverManager represents configuration for NVIDIA Driver Manager initContainer */
        driverManager?: {
          /** @description Optional: List of environment variables */
          env?: {
            /** @description Name of the environment variable. */
            name: string;
            /** @description Value of the environment variable. */
            value?: string;
          }[];
          /** @description Image represents NVIDIA Driver Manager image name */
          image?: string;
          /** @description Image pull policy */
          imagePullPolicy?: string;
          /** @description Image pull secrets */
          imagePullSecrets?: string[];
          /** @description Repository represents Driver Managerrepository path */
          repository?: string;
          /** @description Version represents NVIDIA Driver Manager image tag(version) */
          version?: string;
        };
        /** @description Enabled indicates if deployment of NVIDIA vGPU Manager through operator is enabled */
        enabled?: boolean;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description NVIDIA vGPU Manager  image name */
        image?: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description NVIDIA vGPU Manager image repository */
        repository?: string;
        /** @description Optional: Define resources requests and limits for each pod */
        resources?: {
          /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          limits?: {
            [key: string]: number | string;
          };
          /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          requests?: {
            [key: string]: number | string;
          };
        };
        /** @description NVIDIA vGPU Manager image tag */
        version?: string;
      };
    };
    /** @description ClusterPolicyStatus defines the observed state of ClusterPolicy */
    status?: {
      /** @description Conditions is a list of conditions representing the ClusterPolicy's current state. */
      conditions?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition. This may be an empty string. */
        message: string;
        /**
         * Format: int64
         * @description observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. */
        reason: string;
        /**
         * @description status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "True" | "False" | "Unknown";
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
        type: string;
      }[];
      /** @description Namespace indicates a namespace in which the operator is installed */
      namespace?: string;
      /** @description State indicates status of ClusterPolicy */
      state: string;
    };
  };
}
