import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEphemeralRunnerV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesEphemeralRunnerV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesEphemeralRunnerV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "actions.github.com/v1alpha1";
    kind?: "EphemeralRunner";
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
    /** @description EphemeralRunnerSpec defines the desired state of EphemeralRunner */
    spec?: {
      githubConfigSecret?: string;
      githubConfigUrl?: string;
      githubServerTLS?: {
        /** @description Required */
        certificateFrom?: {
          /** @description Required */
          configMapKeyRef?: {
            /** @description The key to select. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };
        };
      };
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: {
        annotations?: {
          [key: string]: string;
        };
        finalizers?: string[];
        labels?: {
          [key: string]: string;
        };
        name?: string;
        namespace?: string;
      };
      proxy?: {
        http?: {
          credentialSecretRef?: string;
          /** @description Required */
          url?: string;
        };
        https?: {
          credentialSecretRef?: string;
          /** @description Required */
          url?: string;
        };
        noProxy?: string[];
      };
      proxySecretRef?: string;
      runnerScaleSetId?: number;
      /** @description Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
      spec?: {
        /**
         * Format: int64
         * @description Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
         */
        activeDeadlineSeconds?: number;
        /** @description If specified, the pod's scheduling constraints */
        affinity?: {
          /** @description Describes node affinity scheduling rules for the pod. */
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
          /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
          podAffinity?: {
            /** @description The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /** @description Required. A pod affinity term, associated with the corresponding weight. */
              podAffinityTerm: {
                /** @description A label query over a set of resources, in this case pods. */
                labelSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string;
                    /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                    operator: string;
                    /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                    values?: string[];
                  }[];
                  /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                /** @description A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. */
                namespaceSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string;
                    /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                    operator: string;
                    /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                    values?: string[];
                  }[];
                  /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                /** @description namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                namespaces?: string[];
                /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
                topologyKey: string;
              };
              /**
               * Format: int32
               * @description weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              weight: number;
            }[];
            /** @description If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /** @description A label query over a set of resources, in this case pods. */
              labelSelector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string;
                  /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string;
                  /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                  values?: string[];
                }[];
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string;
                };
              };
              /** @description A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. */
              namespaceSelector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string;
                  /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string;
                  /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                  values?: string[];
                }[];
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string;
                };
              };
              /** @description namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
              namespaces?: string[];
              /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
              topologyKey: string;
            }[];
          };
          /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
          podAntiAffinity?: {
            /** @description The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /** @description Required. A pod affinity term, associated with the corresponding weight. */
              podAffinityTerm: {
                /** @description A label query over a set of resources, in this case pods. */
                labelSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string;
                    /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                    operator: string;
                    /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                    values?: string[];
                  }[];
                  /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                /** @description A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. */
                namespaceSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string;
                    /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                    operator: string;
                    /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                    values?: string[];
                  }[];
                  /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                /** @description namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                namespaces?: string[];
                /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
                topologyKey: string;
              };
              /**
               * Format: int32
               * @description weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              weight: number;
            }[];
            /** @description If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /** @description A label query over a set of resources, in this case pods. */
              labelSelector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string;
                  /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string;
                  /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                  values?: string[];
                }[];
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string;
                };
              };
              /** @description A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. */
              namespaceSelector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string;
                  /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string;
                  /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                  values?: string[];
                }[];
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string;
                };
              };
              /** @description namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
              namespaces?: string[];
              /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
              topologyKey: string;
            }[];
          };
        };
        /** @description AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
        automountServiceAccountToken?: boolean;
        /** @description List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
        containers: {
          /** @description Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          args?: string[];
          /** @description Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          command?: string[];
          /** @description List of environment variables to set in the container. Cannot be updated. */
          env?: {
            /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
            name: string;
            /** @description Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
            value?: string;
            /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
            valueFrom?: {
              /** @description Selects a key of a ConfigMap. */
              configMapKeyRef?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
              fieldRef?: {
                /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                apiVersion?: string;
                /** @description Path of the field to select in the specified API version. */
                fieldPath: string;
              };
              /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
              resourceFieldRef?: {
                /** @description Container name: required for volumes, optional for env vars */
                containerName?: string;
                /** @description Specifies the output format of the exposed resources, defaults to "1" */
                divisor?: number | string;
                /** @description Required: resource to select */
                resource: string;
              };
              /** @description Selects a key of a secret in the pod's namespace */
              secretKeyRef?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
          }[];
          /** @description List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
          envFrom?: {
            /** @description The ConfigMap to select from */
            configMapRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the ConfigMap must be defined */
              optional?: boolean;
            };
            /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
            prefix?: string;
            /** @description The Secret to select from */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret must be defined */
              optional?: boolean;
            };
          }[];
          /** @description Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
          image?: string;
          /** @description Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
          imagePullPolicy?: string;
          /** @description Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
          lifecycle?: {
            /** @description PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            postStart?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
            /** @description PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            preStop?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
          };
          /** @description Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          livenessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
          name: string;
          /** @description List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated. */
          ports?: {
            /**
             * Format: int32
             * @description Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
             */
            containerPort: number;
            /** @description What host IP to bind the external port to. */
            hostIP?: string;
            /**
             * Format: int32
             * @description Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
             */
            hostPort?: number;
            /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
            name?: string;
            /**
             * @description Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
             * @default TCP
             */
            protocol: string;
          }[];
          /** @description Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          readinessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          resources?: {
            /** @description Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *      This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *      This field is immutable. It can only be set for containers. */
            claims?: {
              /** @description Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container. */
              name: string;
            }[];
            /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            limits?: {
              [key: string]: number | string;
            };
            /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            requests?: {
              [key: string]: number | string;
            };
          };
          /** @description SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
          securityContext?: {
            /** @description AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
            allowPrivilegeEscalation?: boolean;
            /** @description The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows. */
            capabilities?: {
              /** @description Added capabilities */
              add?: string[];
              /** @description Removed capabilities */
              drop?: string[];
            };
            /** @description Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
            privileged?: boolean;
            /** @description procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
            procMount?: string;
            /** @description Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
            readOnlyRootFilesystem?: boolean;
            /**
             * Format: int64
             * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsGroup?: number;
            /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
            runAsNonRoot?: boolean;
            /**
             * Format: int64
             * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsUser?: number;
            /** @description The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
            seLinuxOptions?: {
              /** @description Level is SELinux level label that applies to the container. */
              level?: string;
              /** @description Role is a SELinux role label that applies to the container. */
              role?: string;
              /** @description Type is a SELinux type label that applies to the container. */
              type?: string;
              /** @description User is a SELinux user label that applies to the container. */
              user?: string;
            };
            /** @description The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows. */
            seccompProfile?: {
              /** @description localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
              localhostProfile?: string;
              /** @description type indicates which kind of seccomp profile will be applied. Valid options are:
               *      Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied. */
              type: string;
            };
            /** @description The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
            windowsOptions?: {
              /** @description GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
              gmsaCredentialSpec?: string;
              /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
              gmsaCredentialSpecName?: string;
              /** @description HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
              hostProcess?: boolean;
              /** @description The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
              runAsUserName?: string;
            };
          };
          /** @description StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          startupProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
          stdin?: boolean;
          /** @description Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
          stdinOnce?: boolean;
          /** @description Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
          terminationMessagePath?: string;
          /** @description Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
          terminationMessagePolicy?: string;
          /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
          tty?: boolean;
          /** @description volumeDevices is the list of block devices to be used by the container. */
          volumeDevices?: {
            /** @description devicePath is the path inside of the container that the device will be mapped to. */
            devicePath: string;
            /** @description name must match the name of a persistentVolumeClaim in the pod */
            name: string;
          }[];
          /** @description Pod volumes to mount into the container's filesystem. Cannot be updated. */
          volumeMounts?: {
            /** @description Path within the container at which the volume should be mounted.  Must not contain ':'. */
            mountPath: string;
            /** @description mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
            mountPropagation?: string;
            /** @description This must match the Name of a Volume. */
            name: string;
            /** @description Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
            readOnly?: boolean;
            /** @description Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
            subPath?: string;
            /** @description Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
            subPathExpr?: string;
          }[];
          /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
          workingDir?: string;
        }[];
        /** @description Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy. */
        dnsConfig?: {
          /** @description A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
          nameservers?: string[];
          /** @description A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
          options?: {
            /** @description Required. */
            name?: string;
            value?: string;
          }[];
          /** @description A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
          searches?: string[];
        };
        /** @description Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
        dnsPolicy?: string;
        /** @description EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
        enableServiceLinks?: boolean;
        /** @description List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. */
        ephemeralContainers?: {
          /** @description Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          args?: string[];
          /** @description Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          command?: string[];
          /** @description List of environment variables to set in the container. Cannot be updated. */
          env?: {
            /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
            name: string;
            /** @description Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
            value?: string;
            /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
            valueFrom?: {
              /** @description Selects a key of a ConfigMap. */
              configMapKeyRef?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
              fieldRef?: {
                /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                apiVersion?: string;
                /** @description Path of the field to select in the specified API version. */
                fieldPath: string;
              };
              /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
              resourceFieldRef?: {
                /** @description Container name: required for volumes, optional for env vars */
                containerName?: string;
                /** @description Specifies the output format of the exposed resources, defaults to "1" */
                divisor?: number | string;
                /** @description Required: resource to select */
                resource: string;
              };
              /** @description Selects a key of a secret in the pod's namespace */
              secretKeyRef?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
          }[];
          /** @description List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
          envFrom?: {
            /** @description The ConfigMap to select from */
            configMapRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the ConfigMap must be defined */
              optional?: boolean;
            };
            /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
            prefix?: string;
            /** @description The Secret to select from */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret must be defined */
              optional?: boolean;
            };
          }[];
          /** @description Container image name. More info: https://kubernetes.io/docs/concepts/containers/images */
          image?: string;
          /** @description Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
          imagePullPolicy?: string;
          /** @description Lifecycle is not allowed for ephemeral containers. */
          lifecycle?: {
            /** @description PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            postStart?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
            /** @description PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            preStop?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
          };
          /** @description Probes are not allowed for ephemeral containers. */
          livenessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
          name: string;
          /** @description Ports are not allowed for ephemeral containers. */
          ports?: {
            /**
             * Format: int32
             * @description Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
             */
            containerPort: number;
            /** @description What host IP to bind the external port to. */
            hostIP?: string;
            /**
             * Format: int32
             * @description Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
             */
            hostPort?: number;
            /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
            name?: string;
            /**
             * @description Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
             * @default TCP
             */
            protocol: string;
          }[];
          /** @description Probes are not allowed for ephemeral containers. */
          readinessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod. */
          resources?: {
            /** @description Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *      This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *      This field is immutable. It can only be set for containers. */
            claims?: {
              /** @description Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container. */
              name: string;
            }[];
            /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            limits?: {
              [key: string]: number | string;
            };
            /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            requests?: {
              [key: string]: number | string;
            };
          };
          /** @description Optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. */
          securityContext?: {
            /** @description AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
            allowPrivilegeEscalation?: boolean;
            /** @description The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows. */
            capabilities?: {
              /** @description Added capabilities */
              add?: string[];
              /** @description Removed capabilities */
              drop?: string[];
            };
            /** @description Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
            privileged?: boolean;
            /** @description procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
            procMount?: string;
            /** @description Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
            readOnlyRootFilesystem?: boolean;
            /**
             * Format: int64
             * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsGroup?: number;
            /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
            runAsNonRoot?: boolean;
            /**
             * Format: int64
             * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsUser?: number;
            /** @description The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
            seLinuxOptions?: {
              /** @description Level is SELinux level label that applies to the container. */
              level?: string;
              /** @description Role is a SELinux role label that applies to the container. */
              role?: string;
              /** @description Type is a SELinux type label that applies to the container. */
              type?: string;
              /** @description User is a SELinux user label that applies to the container. */
              user?: string;
            };
            /** @description The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows. */
            seccompProfile?: {
              /** @description localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
              localhostProfile?: string;
              /** @description type indicates which kind of seccomp profile will be applied. Valid options are:
               *      Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied. */
              type: string;
            };
            /** @description The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
            windowsOptions?: {
              /** @description GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
              gmsaCredentialSpec?: string;
              /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
              gmsaCredentialSpecName?: string;
              /** @description HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
              hostProcess?: boolean;
              /** @description The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
              runAsUserName?: string;
            };
          };
          /** @description Probes are not allowed for ephemeral containers. */
          startupProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
          stdin?: boolean;
          /** @description Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
          stdinOnce?: boolean;
          /** @description If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
           *      The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined. */
          targetContainerName?: string;
          /** @description Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
          terminationMessagePath?: string;
          /** @description Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
          terminationMessagePolicy?: string;
          /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
          tty?: boolean;
          /** @description volumeDevices is the list of block devices to be used by the container. */
          volumeDevices?: {
            /** @description devicePath is the path inside of the container that the device will be mapped to. */
            devicePath: string;
            /** @description name must match the name of a persistentVolumeClaim in the pod */
            name: string;
          }[];
          /** @description Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
          volumeMounts?: {
            /** @description Path within the container at which the volume should be mounted.  Must not contain ':'. */
            mountPath: string;
            /** @description mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
            mountPropagation?: string;
            /** @description This must match the Name of a Volume. */
            name: string;
            /** @description Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
            readOnly?: boolean;
            /** @description Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
            subPath?: string;
            /** @description Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
            subPathExpr?: string;
          }[];
          /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
          workingDir?: string;
        }[];
        /** @description HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
        hostAliases?: {
          /** @description Hostnames for the above IP address. */
          hostnames?: string[];
          /** @description IP address of the host file entry. */
          ip?: string;
        }[];
        /** @description Use the host's ipc namespace. Optional: Default to false. */
        hostIPC?: boolean;
        /** @description Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
        hostNetwork?: boolean;
        /** @description Use the host's pid namespace. Optional: Default to false. */
        hostPID?: boolean;
        /** @description Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature. */
        hostUsers?: boolean;
        /** @description Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
        hostname?: string;
        /** @description ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
        imagePullSecrets?: {
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
          name?: string;
        }[];
        /** @description List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
        initContainers?: {
          /** @description Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          args?: string[];
          /** @description Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          command?: string[];
          /** @description List of environment variables to set in the container. Cannot be updated. */
          env?: {
            /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
            name: string;
            /** @description Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
            value?: string;
            /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
            valueFrom?: {
              /** @description Selects a key of a ConfigMap. */
              configMapKeyRef?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
              fieldRef?: {
                /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                apiVersion?: string;
                /** @description Path of the field to select in the specified API version. */
                fieldPath: string;
              };
              /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
              resourceFieldRef?: {
                /** @description Container name: required for volumes, optional for env vars */
                containerName?: string;
                /** @description Specifies the output format of the exposed resources, defaults to "1" */
                divisor?: number | string;
                /** @description Required: resource to select */
                resource: string;
              };
              /** @description Selects a key of a secret in the pod's namespace */
              secretKeyRef?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
          }[];
          /** @description List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
          envFrom?: {
            /** @description The ConfigMap to select from */
            configMapRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the ConfigMap must be defined */
              optional?: boolean;
            };
            /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
            prefix?: string;
            /** @description The Secret to select from */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret must be defined */
              optional?: boolean;
            };
          }[];
          /** @description Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
          image?: string;
          /** @description Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
          imagePullPolicy?: string;
          /** @description Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
          lifecycle?: {
            /** @description PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            postStart?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
            /** @description PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            preStop?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
              /** @description HTTPGet specifies the http request to perform. */
              httpGet?: {
                /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
                host?: string;
                /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                httpHeaders?: {
                  /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                  name: string;
                  /** @description The header field value */
                  value: string;
                }[];
                /** @description Path to access on the HTTP server. */
                path?: string;
                /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
                /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
                scheme?: string;
              };
              /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified. */
              tcpSocket?: {
                /** @description Optional: Host name to connect to, defaults to the pod IP. */
                host?: string;
                /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
                port: number | string;
              };
            };
          };
          /** @description Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          livenessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
          name: string;
          /** @description List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated. */
          ports?: {
            /**
             * Format: int32
             * @description Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
             */
            containerPort: number;
            /** @description What host IP to bind the external port to. */
            hostIP?: string;
            /**
             * Format: int32
             * @description Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
             */
            hostPort?: number;
            /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
            name?: string;
            /**
             * @description Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
             * @default TCP
             */
            protocol: string;
          }[];
          /** @description Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          readinessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
          resources?: {
            /** @description Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
             *      This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
             *      This field is immutable. It can only be set for containers. */
            claims?: {
              /** @description Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container. */
              name: string;
            }[];
            /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            limits?: {
              [key: string]: number | string;
            };
            /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
            requests?: {
              [key: string]: number | string;
            };
          };
          /** @description SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
          securityContext?: {
            /** @description AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
            allowPrivilegeEscalation?: boolean;
            /** @description The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows. */
            capabilities?: {
              /** @description Added capabilities */
              add?: string[];
              /** @description Removed capabilities */
              drop?: string[];
            };
            /** @description Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
            privileged?: boolean;
            /** @description procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
            procMount?: string;
            /** @description Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
            readOnlyRootFilesystem?: boolean;
            /**
             * Format: int64
             * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsGroup?: number;
            /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
            runAsNonRoot?: boolean;
            /**
             * Format: int64
             * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
             */
            runAsUser?: number;
            /** @description The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
            seLinuxOptions?: {
              /** @description Level is SELinux level label that applies to the container. */
              level?: string;
              /** @description Role is a SELinux role label that applies to the container. */
              role?: string;
              /** @description Type is a SELinux type label that applies to the container. */
              type?: string;
              /** @description User is a SELinux user label that applies to the container. */
              user?: string;
            };
            /** @description The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows. */
            seccompProfile?: {
              /** @description localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
              localhostProfile?: string;
              /** @description type indicates which kind of seccomp profile will be applied. Valid options are:
               *      Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied. */
              type: string;
            };
            /** @description The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
            windowsOptions?: {
              /** @description GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
              gmsaCredentialSpec?: string;
              /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
              gmsaCredentialSpecName?: string;
              /** @description HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
              hostProcess?: boolean;
              /** @description The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
              runAsUserName?: string;
            };
          };
          /** @description StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          startupProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
            /**
             * Format: int32
             * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            failureThreshold?: number;
            /** @description GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate. */
            grpc?: {
              /**
               * Format: int32
               * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
               */
              port: number;
              /** @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
               *      If this is not specified, the default behavior is defined by gRPC. */
              service?: string;
            };
            /** @description HTTPGet specifies the http request to perform. */
            httpGet?: {
              /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
              host?: string;
              /** @description Custom headers to set in the request. HTTP allows repeated headers. */
              httpHeaders?: {
                /** @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                name: string;
                /** @description The header field value */
                value: string;
              }[];
              /** @description Path to access on the HTTP server. */
              path?: string;
              /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
              /** @description Scheme to use for connecting to the host. Defaults to HTTP. */
              scheme?: string;
            };
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
            /** @description TCPSocket specifies an action involving a TCP port. */
            tcpSocket?: {
              /** @description Optional: Host name to connect to, defaults to the pod IP. */
              host?: string;
              /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
              port: number | string;
            };
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * Format: int32
             * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            timeoutSeconds?: number;
          };
          /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
          stdin?: boolean;
          /** @description Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
          stdinOnce?: boolean;
          /** @description Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
          terminationMessagePath?: string;
          /** @description Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
          terminationMessagePolicy?: string;
          /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
          tty?: boolean;
          /** @description volumeDevices is the list of block devices to be used by the container. */
          volumeDevices?: {
            /** @description devicePath is the path inside of the container that the device will be mapped to. */
            devicePath: string;
            /** @description name must match the name of a persistentVolumeClaim in the pod */
            name: string;
          }[];
          /** @description Pod volumes to mount into the container's filesystem. Cannot be updated. */
          volumeMounts?: {
            /** @description Path within the container at which the volume should be mounted.  Must not contain ':'. */
            mountPath: string;
            /** @description mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
            mountPropagation?: string;
            /** @description This must match the Name of a Volume. */
            name: string;
            /** @description Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
            readOnly?: boolean;
            /** @description Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
            subPath?: string;
            /** @description Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
            subPathExpr?: string;
          }[];
          /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
          workingDir?: string;
        }[];
        /** @description NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
        nodeName?: string;
        /** @description NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
        nodeSelector?: {
          [key: string]: string;
        };
        /** @description Specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set.
         *      If the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions
         *      If the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup */
        os?: {
          /** @description Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
          name: string;
        };
        /** @description Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md */
        overhead?: {
          [key: string]: number | string;
        };
        /** @description PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. */
        preemptionPolicy?: string;
        /**
         * Format: int32
         * @description The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
         */
        priority?: number;
        /** @description If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
        priorityClassName?: string;
        /** @description If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
        readinessGates?: {
          /** @description ConditionType refers to a condition in the pod's condition list with matching type. */
          conditionType: string;
        }[];
        /** @description ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.
         *      This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
         *      This field is immutable. */
        resourceClaims?: {
          /** @description Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL. */
          name: string;
          /** @description Source describes where to find the ResourceClaim. */
          source?: {
            /** @description ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod. */
            resourceClaimName?: string;
            /** @description ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.
             *      The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The name of the ResourceClaim will be <pod name>-<resource name>, where <resource name> is the PodResourceClaim.Name. Pod validation will reject the pod if the concatenated name is not valid for a ResourceClaim (e.g. too long).
             *      An existing ResourceClaim with that name that is not owned by the pod will not be used for the pod to avoid using an unrelated resource by mistake. Scheduling and pod startup are then blocked until the unrelated ResourceClaim is removed.
             *      This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim. */
            resourceClaimTemplateName?: string;
          };
        }[];
        /** @description Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
        restartPolicy?: string;
        /** @description RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class */
        runtimeClassName?: string;
        /** @description If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
        schedulerName?: string;
        /** @description SchedulingGates is an opaque list of values that if specified will block scheduling the pod. More info:  https://git.k8s.io/enhancements/keps/sig-scheduling/3521-pod-scheduling-readiness.
         *      This is an alpha-level feature enabled by PodSchedulingReadiness feature gate. */
        schedulingGates?: {
          /** @description Name of the scheduling gate. Each scheduling gate must have a unique name field. */
          name: string;
        }[];
        /** @description SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field. */
        securityContext?: {
          /**
           * Format: int64
           * @description A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
           *      1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
           *      If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
           */
          fsGroup?: number;
          /** @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows. */
          fsGroupChangePolicy?: string;
          /**
           * Format: int64
           * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
           */
          runAsGroup?: number;
          /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
          runAsNonRoot?: boolean;
          /**
           * Format: int64
           * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
           */
          runAsUser?: number;
          /** @description The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
          seLinuxOptions?: {
            /** @description Level is SELinux level label that applies to the container. */
            level?: string;
            /** @description Role is a SELinux role label that applies to the container. */
            role?: string;
            /** @description Type is a SELinux type label that applies to the container. */
            type?: string;
            /** @description User is a SELinux user label that applies to the container. */
            user?: string;
          };
          /** @description The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows. */
          seccompProfile?: {
            /** @description localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
            localhostProfile?: string;
            /** @description type indicates which kind of seccomp profile will be applied. Valid options are:
             *      Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied. */
            type: string;
          };
          /** @description A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows. */
          supplementalGroups?: number[];
          /** @description Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
          sysctls?: {
            /** @description Name of a property to set */
            name: string;
            /** @description Value of a property to set */
            value: string;
          }[];
          /** @description The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
          windowsOptions?: {
            /** @description GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
            gmsaCredentialSpec?: string;
            /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
            gmsaCredentialSpecName?: string;
            /** @description HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
            hostProcess?: boolean;
            /** @description The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
            runAsUserName?: string;
          };
        };
        /** @description DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
        serviceAccount?: string;
        /** @description ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
        serviceAccountName?: string;
        /** @description If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
        setHostnameAsFQDN?: boolean;
        /** @description Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
        shareProcessNamespace?: boolean;
        /** @description If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
        subdomain?: string;
        /**
         * Format: int64
         * @description Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
         */
        terminationGracePeriodSeconds?: number;
        /** @description If specified, the pod's tolerations. */
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
        /** @description TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
        topologySpreadConstraints?: {
          /** @description LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain. */
          labelSelector?: {
            /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** @description key is the label key that the selector applies to. */
              key: string;
              /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;
              /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
              values?: string[];
            }[];
            /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };
          /** @description MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. */
          matchLabelKeys?: string[];
          /**
           * Format: int32
           * @description MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
           */
          maxSkew: number;
          /**
           * Format: int32
           * @description MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
           *      For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
           *      This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
           */
          minDomains?: number;
          /** @description NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
           *      If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag. */
          nodeAffinityPolicy?: string;
          /** @description NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included.
           *      If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag. */
          nodeTaintsPolicy?: string;
          /** @description TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field. */
          topologyKey: string;
          /** @description WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field. */
          whenUnsatisfiable: string;
        }[];
        /** @description List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
        volumes?: {
          /** @description awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
          awsElasticBlockStore?: {
            /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /**
             * Format: int32
             * @description partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
             */
            partition?: number;
            /** @description readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
            readOnly?: boolean;
            /** @description volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
            volumeID: string;
          };
          /** @description azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
          azureDisk?: {
            /** @description cachingMode is the Host Caching mode: None, Read Only, Read Write. */
            cachingMode?: string;
            /** @description diskName is the Name of the data disk in the blob storage */
            diskName: string;
            /** @description diskURI is the URI of data disk in the blob storage */
            diskURI: string;
            /** @description fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
            fsType?: string;
            /** @description kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
            kind?: string;
            /** @description readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
          };
          /** @description azureFile represents an Azure File Service mount on the host and bind mount to the pod. */
          azureFile?: {
            /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description secretName is the  name of secret that contains Azure Storage Account Name and Key */
            secretName: string;
            /** @description shareName is the azure share Name */
            shareName: string;
          };
          /** @description cephFS represents a Ceph FS mount on the host that shares a pod's lifetime */
          cephfs?: {
            /** @description monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
            monitors: string[];
            /** @description path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
            path?: string;
            /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
            readOnly?: boolean;
            /** @description secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
            secretFile?: string;
            /** @description secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
            user?: string;
          };
          /** @description cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
          cinder?: {
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
            fsType?: string;
            /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
            readOnly?: boolean;
            /** @description secretRef is optional: points to a secret object containing parameters used to connect to OpenStack. */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
            volumeID: string;
          };
          /** @description configMap represents a configMap that should populate this volume */
          configMap?: {
            /**
             * Format: int32
             * @description defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            defaultMode?: number;
            /** @description items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
            items?: {
              /** @description key is the key to project. */
              key: string;
              /**
               * Format: int32
               * @description mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              mode?: number;
              /** @description path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
              path: string;
            }[];
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description optional specify whether the ConfigMap or its keys must be defined */
            optional?: boolean;
          };
          /** @description csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature). */
          csi?: {
            /** @description driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
            driver: string;
            /** @description fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
            fsType?: string;
            /** @description nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed. */
            nodePublishSecretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description readOnly specifies a read-only configuration for the volume. Defaults to false (read/write). */
            readOnly?: boolean;
            /** @description volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
            volumeAttributes?: {
              [key: string]: string;
            };
          };
          /** @description downwardAPI represents downward API about the pod that should populate this volume */
          downwardAPI?: {
            /**
             * Format: int32
             * @description Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            defaultMode?: number;
            /** @description Items is a list of downward API volume file */
            items?: {
              /** @description Required: Selects a field of the pod: only annotations, labels, name and namespace are supported. */
              fieldRef?: {
                /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                apiVersion?: string;
                /** @description Path of the field to select in the specified API version. */
                fieldPath: string;
              };
              /**
               * Format: int32
               * @description Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              mode?: number;
              /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
              path: string;
              /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
              resourceFieldRef?: {
                /** @description Container name: required for volumes, optional for env vars */
                containerName?: string;
                /** @description Specifies the output format of the exposed resources, defaults to "1" */
                divisor?: number | string;
                /** @description Required: resource to select */
                resource: string;
              };
            }[];
          };
          /** @description emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
          emptyDir?: {
            /** @description medium represents what type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
            medium?: string;
            /** @description sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
            sizeLimit?: number | string;
          };
          /** @description ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
           *      Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim).
           *      Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
           *      Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
           *      A pod can use both types of ephemeral volumes and persistent volumes at the same time. */
          ephemeral?: {
            /** @description Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).
             *      An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.
             *      This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.
             *      Required, must not be nil. */
            volumeClaimTemplate?: {
              /** @description May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation. */
              metadata?: {
                annotations?: {
                  [key: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [key: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              /** @description The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here. */
              spec: {
                /** @description accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
                accessModes?: string[];
                /** @description dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource. */
                dataSource?: {
                  /** @description APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
                  apiGroup?: string;
                  /** @description Kind is the type of resource being referenced */
                  kind: string;
                  /** @description Name is the name of resource being referenced */
                  name: string;
                };
                /** @description dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled. */
                dataSourceRef?: {
                  /** @description APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
                  apiGroup?: string;
                  /** @description Kind is the type of resource being referenced */
                  kind: string;
                  /** @description Name is the name of resource being referenced */
                  name: string;
                  /** @description Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled. */
                  namespace?: string;
                };
                /** @description resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources */
                resources?: {
                  /** @description Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
                   *      This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
                   *      This field is immutable. It can only be set for containers. */
                  claims?: {
                    /** @description Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container. */
                    name: string;
                  }[];
                  /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                  limits?: {
                    [key: string]: number | string;
                  };
                  /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                  requests?: {
                    [key: string]: number | string;
                  };
                };
                /** @description selector is a label query over volumes to consider for binding. */
                selector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string;
                    /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
                    operator: string;
                    /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                    values?: string[];
                  }[];
                  /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                /** @description storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
                storageClassName?: string;
                /** @description volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
                volumeMode?: string;
                /** @description volumeName is the binding reference to the PersistentVolume backing this claim. */
                volumeName?: string;
              };
            };
          };
          /** @description fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
          fc?: {
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /**
             * Format: int32
             * @description lun is Optional: FC target lun number
             */
            lun?: number;
            /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description targetWWNs is Optional: FC target worldwide names (WWNs) */
            targetWWNs?: string[];
            /** @description wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
            wwids?: string[];
          };
          /** @description flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
          flexVolume?: {
            /** @description driver is the name of the driver to use for this volume. */
            driver: string;
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
            fsType?: string;
            /** @description options is Optional: this field holds extra command options if any. */
            options?: {
              [key: string]: string;
            };
            /** @description readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
          };
          /** @description flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running */
          flocker?: {
            /** @description datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
            datasetName?: string;
            /** @description datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
            datasetUUID?: string;
          };
          /** @description gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
          gcePersistentDisk?: {
            /** @description fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /**
             * Format: int32
             * @description partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
             */
            partition?: number;
            /** @description pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
            pdName: string;
            /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
            readOnly?: boolean;
          };
          /** @description gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
          gitRepo?: {
            /** @description directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
            directory?: string;
            /** @description repository is the URL */
            repository: string;
            /** @description revision is the commit hash for the specified revision. */
            revision?: string;
          };
          /** @description glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md */
          glusterfs?: {
            /** @description endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
            endpoints: string;
            /** @description path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
            path: string;
            /** @description readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
            readOnly?: boolean;
          };
          /** @description hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write. */
          hostPath?: {
            /** @description path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
            path: string;
            /** @description type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
            type?: string;
          };
          /** @description iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md */
          iscsi?: {
            /** @description chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication */
            chapAuthDiscovery?: boolean;
            /** @description chapAuthSession defines whether support iSCSI Session CHAP authentication */
            chapAuthSession?: boolean;
            /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /** @description initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
            initiatorName?: string;
            /** @description iqn is the target iSCSI Qualified Name. */
            iqn: string;
            /** @description iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
            iscsiInterface?: string;
            /**
             * Format: int32
             * @description lun represents iSCSI Target Lun number.
             */
            lun: number;
            /** @description portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
            portals?: string[];
            /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
            readOnly?: boolean;
            /** @description secretRef is the CHAP Secret for iSCSI target and initiator authentication */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
            targetPortal: string;
          };
          /** @description name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name: string;
          /** @description nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
          nfs?: {
            /** @description path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
            path: string;
            /** @description readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
            readOnly?: boolean;
            /** @description server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
            server: string;
          };
          /** @description persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
          persistentVolumeClaim?: {
            /** @description claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
            claimName: string;
            /** @description readOnly Will force the ReadOnly setting in VolumeMounts. Default false. */
            readOnly?: boolean;
          };
          /** @description photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine */
          photonPersistentDisk?: {
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
            fsType?: string;
            /** @description pdID is the ID that identifies Photon Controller persistent disk */
            pdID: string;
          };
          /** @description portworxVolume represents a portworx volume attached and mounted on kubelets host machine */
          portworxVolume?: {
            /** @description fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
            fsType?: string;
            /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description volumeID uniquely identifies a Portworx volume */
            volumeID: string;
          };
          /** @description projected items for all in one resources secrets, configmaps, and downward API */
          projected?: {
            /**
             * Format: int32
             * @description defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            defaultMode?: number;
            /** @description sources is the list of volume projections */
            sources?: {
              /** @description configMap information about the configMap data to project */
              configMap?: {
                /** @description items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
                items?: {
                  /** @description key is the key to project. */
                  key: string;
                  /**
                   * Format: int32
                   * @description mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
                  path: string;
                }[];
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description optional specify whether the ConfigMap or its keys must be defined */
                optional?: boolean;
              };
              /** @description downwardAPI information about the downwardAPI data to project */
              downwardAPI?: {
                /** @description Items is a list of DownwardAPIVolume file */
                items?: {
                  /** @description Required: Selects a field of the pod: only annotations, labels, name and namespace are supported. */
                  fieldRef?: {
                    /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                    apiVersion?: string;
                    /** @description Path of the field to select in the specified API version. */
                    fieldPath: string;
                  };
                  /**
                   * Format: int32
                   * @description Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                  path: string;
                  /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
                  resourceFieldRef?: {
                    /** @description Container name: required for volumes, optional for env vars */
                    containerName?: string;
                    /** @description Specifies the output format of the exposed resources, defaults to "1" */
                    divisor?: number | string;
                    /** @description Required: resource to select */
                    resource: string;
                  };
                }[];
              };
              /** @description secret information about the secret data to project */
              secret?: {
                /** @description items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
                items?: {
                  /** @description key is the key to project. */
                  key: string;
                  /**
                   * Format: int32
                   * @description mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
                  path: string;
                }[];
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description optional field specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
              /** @description serviceAccountToken is information about the serviceAccountToken data to project */
              serviceAccountToken?: {
                /** @description audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
                audience?: string;
                /**
                 * Format: int64
                 * @description expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
                 */
                expirationSeconds?: number;
                /** @description path is the path relative to the mount point of the file to project the token into. */
                path: string;
              };
            }[];
          };
          /** @description quobyte represents a Quobyte mount on the host that shares a pod's lifetime */
          quobyte?: {
            /** @description group to map volume access to Default is no group */
            group?: string;
            /** @description readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
            readOnly?: boolean;
            /** @description registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
            registry: string;
            /** @description tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
            tenant?: string;
            /** @description user to map volume access to Defaults to serivceaccount user */
            user?: string;
            /** @description volume is a string that references an already created Quobyte volume by name. */
            volume: string;
          };
          /** @description rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md */
          rbd?: {
            /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /** @description image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            image: string;
            /** @description keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            keyring?: string;
            /** @description monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            monitors: string[];
            /** @description pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            pool?: string;
            /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            readOnly?: boolean;
            /** @description secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
            user?: string;
          };
          /** @description scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. */
          scaleIO?: {
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
            fsType?: string;
            /** @description gateway is the host address of the ScaleIO API Gateway. */
            gateway: string;
            /** @description protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. */
            protectionDomain?: string;
            /** @description readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail. */
            secretRef: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description sslEnabled Flag enable/disable SSL communication with Gateway, default false */
            sslEnabled?: boolean;
            /** @description storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
            storageMode?: string;
            /** @description storagePool is the ScaleIO Storage Pool associated with the protection domain. */
            storagePool?: string;
            /** @description system is the name of the storage system as configured in ScaleIO. */
            system: string;
            /** @description volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source. */
            volumeName?: string;
          };
          /** @description secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
          secret?: {
            /**
             * Format: int32
             * @description defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            defaultMode?: number;
            /** @description items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
            items?: {
              /** @description key is the key to project. */
              key: string;
              /**
               * Format: int32
               * @description mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              mode?: number;
              /** @description path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
              path: string;
            }[];
            /** @description optional field specify whether the Secret or its keys must be defined */
            optional?: boolean;
            /** @description secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
            secretName?: string;
          };
          /** @description storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. */
          storageos?: {
            /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
            fsType?: string;
            /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
            readOnly?: boolean;
            /** @description secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted. */
            secretRef?: {
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
            };
            /** @description volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
            volumeName?: string;
            /** @description volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
            volumeNamespace?: string;
          };
          /** @description vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine */
          vsphereVolume?: {
            /** @description fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
            fsType?: string;
            /** @description storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
            storagePolicyID?: string;
            /** @description storagePolicyName is the storage Policy Based Management (SPBM) profile name. */
            storagePolicyName?: string;
            /** @description volumePath is the path that identifies vSphere volume vmdk */
            volumePath: string;
          };
        }[];
      };
    };
    /** @description EphemeralRunnerStatus defines the observed state of EphemeralRunner */
    status?: {
      failures?: {
        [key: string]: boolean;
      };
      jobDisplayName?: string;
      jobRepositoryName?: string;
      /** Format: int64 */
      jobRequestId?: number;
      jobWorkflowRef?: string;
      message?: string;
      /** @description Phase describes phases where EphemeralRunner can be in. The underlying type is a PodPhase, but the meaning is more restrictive
       *      The PodFailed phase should be set only when EphemeralRunner fails to start after multiple retries. That signals that this EphemeralRunner won't work, and manual inspection is required
       *      The PodSucceded phase should be set only when confirmed that EphemeralRunner actually executed the job and has been removed from the service. */
      phase?: string;
      /** @description Turns true only if the runner is online. */
      ready?: boolean;
      reason?: string;
      runnerId?: number;
      runnerJITConfig?: string;
      runnerName?: string;
      /** Format: int64 */
      workflowRunId?: number;
    };
  };
}
