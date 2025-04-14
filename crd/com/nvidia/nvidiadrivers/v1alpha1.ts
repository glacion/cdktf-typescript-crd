import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNVIDIADriverV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNVIDIADriverV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "nvidia.com/v1alpha1", kind: "NVIDIADriver", ...manifest }, ...config });
  }
}
export interface KubernetesNVIDIADriverV1alpha1Config extends ManifestConfig {
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
  manifest: {
    /** @description NVIDIADriver is the Schema for the nvidiadrivers API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description NVIDIADriverSpec defines the desired state of NVIDIADriver */
      spec?: {
        /** @description Optional: Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Optional: List of arguments */
        args?: string[];
        /** @description Optional: Custom certificates configuration for NVIDIA Driver container */
        certConfig?: {
          name?: string;
        };
        /** @description DriverType defines NVIDIA driver type */
        driverType: string;
        /** @description Optional: List of environment variables */
        env?: {
          /** @description Name of the environment variable. */
          name: string;
          /** @description Value of the environment variable. */
          value?: string;
        }[];
        /** @description GPUDirectStorage defines the spec for GDS driver */
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
        /** @description NVIDIA Driver container image name */
        image: string;
        /** @description Image pull policy */
        imagePullPolicy?: string;
        /** @description Image pull secrets */
        imagePullSecrets?: string[];
        /** @description Optional: Kernel module configuration parameters for the NVIDIA Driver */
        kernelModuleConfig?: {
          name?: string;
        };
        /** @description Optional: Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. */
        labels?: {
          [key: string]: string;
        };
        /** @description Optional: Licensing configuration for NVIDIA vGPU licensing */
        licensingConfig?: {
          name?: string;
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
        /** @description Affinity specifies node affinity rules for driver pods */
        nodeAffinity?: {
          /** @description The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /** @description A node selector term, associated with the corresponding weight. */
            preference: {
              /** @description A list of node selector requirements by node's labels. */
              matchExpressions?: {
                /** @description The label key that the selector applies to. */
                key: string;
                /** @description Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                operator: string;
                /** @description An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description A list of node selector requirements by node's fields. */
              matchFields?: {
                /** @description The label key that the selector applies to. */
                key: string;
                /** @description Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                operator: string;
                /** @description An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
            };
            /**
             * Format: int32
             * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
          }[];
          /** @description If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node. */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /** @description Required. A list of node selector terms. The terms are ORed. */
            nodeSelectorTerms: {
              /** @description A list of node selector requirements by node's labels. */
              matchExpressions?: {
                /** @description The label key that the selector applies to. */
                key: string;
                /** @description Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                operator: string;
                /** @description An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description A list of node selector requirements by node's fields. */
              matchFields?: {
                /** @description The label key that the selector applies to. */
                key: string;
                /** @description Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                operator: string;
                /** @description An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
            }[];
          };
        };
        /** @description NodeSelector specifies a selector for installation of NVIDIA driver */
        nodeSelector?: {
          [key: string]: string;
        };
        /** @description Optional: Set priorityClassName */
        priorityClassName?: string;
        /** @description GPUDirectRDMA defines the spec for NVIDIA Peer Memory driver */
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
          name?: string;
        };
        /** @description NVIDIA Driver repository */
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
        /** @description UseOpenKernelModules indicates if the open GPU kernel modules should be used */
        useOpenKernelModules?: boolean;
        /** @description UsePrecompiled indicates if deployment of NVIDIA Driver using pre-compiled modules is enabled */
        usePrecompiled?: boolean;
        /** @description NVIDIA Driver version (or just branch for precompiled drivers) */
        version?: string;
        /** @description Optional: Virtual Topology Daemon configuration for NVIDIA vGPU drivers */
        virtualTopologyConfig?: {
          /** @description Optional: Config name representing virtual topology daemon configuration file nvidia-topologyd.conf */
          name?: string;
        };
      };
      /** @description NVIDIADriverStatus defines the observed state of NVIDIADriver */
      status?: {
        /** @description Conditions is a list of conditions representing the NVIDIADriver's current state. */
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
        /** @description Namespace indicates a namespace in which the operator and driver are installed */
        namespace?: string;
        /** @description INSERT ADDITIONAL STATUS FIELD - define observed state of cluster Important: Run "make" to regenerate code after modifying this file State indicates status of NVIDIADriver instance */
        state: string;
      };
    };
  };
}
