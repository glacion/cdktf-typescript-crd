import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkloadV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkloadV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "kueue.x-k8s.io/v1beta1";
    kind?: "Workload";
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
    /** @description WorkloadSpec defines the desired state of Workload */
    spec?: {
      /** @description Active determines if a workload can be admitted into a queue.
       *     Changing active from true to false will evict any running workloads.
       *     Possible values are:
       *
       *       - false: indicates that a workload should never be admitted and evicts running workloads
       *       - true: indicates that a workload can be evaluated for admission into it's respective queue.
       *
       *     Defaults to true */
      active?: boolean;
      /**
       * Format: int32
       * @description maximumExecutionTimeSeconds if provided, determines the maximum time, in seconds,
       *     the workload can be admitted before it's automatically deactivated.
       *
       *     If unspecified, no execution time limit is enforced on the Workload.
       */
      maximumExecutionTimeSeconds?: number;
      /** @description podSets is a list of sets of homogeneous pods, each described by a Pod spec
       *     and a count.
       *     There must be at least one element and at most 8.
       *     podSets cannot be changed. */
      podSets: {
        /**
         * Format: int32
         * @description count is the number of pods for the spec.
         * @default 1
         */
        count: number;
        /**
         * Format: int32
         * @description minCount is the minimum number of pods for the spec acceptable
         *     if the workload supports partial admission.
         *
         *     If not provided, partial admission for the current PodSet is not
         *     enabled.
         *
         *     Only one podSet within the workload can use this.
         *
         *     This is an alpha field and requires enabling PartialAdmission feature gate.
         */
        minCount?: number;
        /**
         * @description name is the PodSet name.
         * @default main
         */
        name: string;
        /** @description template is the Pod template.
         *
         *     The only allowed fields in template.metadata are labels and annotations.
         *
         *     If requests are omitted for a container or initContainer,
         *     they default to the limits if they are explicitly specified for the
         *     container or initContainer.
         *
         *     During admission, the rules in nodeSelector and
         *     nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution that match
         *     the keys in the nodeLabels from the ResourceFlavors considered for this
         *     Workload are used to filter the ResourceFlavors that can be assigned to
         *     this podSet. */
        template: {
          /** @description Standard object's metadata.
           *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
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
          /** @description Specification of the desired behavior of the pod.
           *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
          spec?: {
            /**
             * Format: int64
             * @description Optional duration in seconds the pod may be active on the node relative to
             *     StartTime before the system will actively try to mark it failed and kill associated containers.
             *     Value must be a positive integer.
             */
            activeDeadlineSeconds?: number;
            /** @description If specified, the pod's scheduling constraints */
            affinity?: {
              /** @description Describes node affinity scheduling rules for the pod. */
              nodeAffinity?: {
                /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                 *     the affinity expressions specified by this field, but it may choose
                 *     a node that violates one or more of the expressions. The node that is
                 *     most preferred is the one with the greatest sum of weights, i.e.
                 *     for each node that meets all of the scheduling requirements (resource
                 *     request, requiredDuringScheduling affinity expressions, etc.),
                 *     compute a sum by iterating through the elements of this field and adding
                 *     "weight" to the sum if the node matches the corresponding matchExpressions; the
                 *     node(s) with the highest sum are the most preferred. */
                preferredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description A node selector term, associated with the corresponding weight. */
                  preference: {
                    /** @description A list of node selector requirements by node's labels. */
                    matchExpressions?: {
                      /** @description The label key that the selector applies to. */
                      key: string;
                      /** @description Represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                      operator: string;
                      /** @description An array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. If the operator is Gt or Lt, the values
                       *     array must have a single element, which will be interpreted as an integer.
                       *     This array is replaced during a strategic merge patch. */
                      values?: string[];
                    }[];
                    /** @description A list of node selector requirements by node's fields. */
                    matchFields?: {
                      /** @description The label key that the selector applies to. */
                      key: string;
                      /** @description Represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                      operator: string;
                      /** @description An array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. If the operator is Gt or Lt, the values
                       *     array must have a single element, which will be interpreted as an integer.
                       *     This array is replaced during a strategic merge patch. */
                      values?: string[];
                    }[];
                  };
                  /**
                   * Format: int32
                   * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                   */
                  weight: number;
                }[];
                /** @description If the affinity requirements specified by this field are not met at
                 *     scheduling time, the pod will not be scheduled onto the node.
                 *     If the affinity requirements specified by this field cease to be met
                 *     at some point during pod execution (e.g. due to an update), the system
                 *     may or may not try to eventually evict the pod from its node. */
                requiredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description Required. A list of node selector terms. The terms are ORed. */
                  nodeSelectorTerms: {
                    /** @description A list of node selector requirements by node's labels. */
                    matchExpressions?: {
                      /** @description The label key that the selector applies to. */
                      key: string;
                      /** @description Represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                      operator: string;
                      /** @description An array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. If the operator is Gt or Lt, the values
                       *     array must have a single element, which will be interpreted as an integer.
                       *     This array is replaced during a strategic merge patch. */
                      values?: string[];
                    }[];
                    /** @description A list of node selector requirements by node's fields. */
                    matchFields?: {
                      /** @description The label key that the selector applies to. */
                      key: string;
                      /** @description Represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                      operator: string;
                      /** @description An array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. If the operator is Gt or Lt, the values
                       *     array must have a single element, which will be interpreted as an integer.
                       *     This array is replaced during a strategic merge patch. */
                      values?: string[];
                    }[];
                  }[];
                };
              };
              /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
              podAffinity?: {
                /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                 *     the affinity expressions specified by this field, but it may choose
                 *     a node that violates one or more of the expressions. The node that is
                 *     most preferred is the one with the greatest sum of weights, i.e.
                 *     for each node that meets all of the scheduling requirements (resource
                 *     request, requiredDuringScheduling affinity expressions, etc.),
                 *     compute a sum by iterating through the elements of this field and adding
                 *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                 *     node(s) with the highest sum are the most preferred. */
                preferredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description Required. A pod affinity term, associated with the corresponding weight. */
                  podAffinityTerm: {
                    /** @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods. */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string;
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                    matchLabelKeys?: string[];
                    /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                    mismatchLabelKeys?: string[];
                    /** @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces. */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string;
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                    namespaces?: string[];
                    /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed. */
                    topologyKey: string;
                  };
                  /**
                   * Format: int32
                   * @description weight associated with matching the corresponding podAffinityTerm,
                   *     in the range 1-100.
                   */
                  weight: number;
                }[];
                /** @description If the affinity requirements specified by this field are not met at
                 *     scheduling time, the pod will not be scheduled onto the node.
                 *     If the affinity requirements specified by this field cease to be met
                 *     at some point during pod execution (e.g. due to a pod label update), the
                 *     system may or may not try to eventually evict the pod from its node.
                 *     When there are multiple elements, the lists of nodes corresponding to each
                 *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                requiredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description A label query over a set of resources, in this case pods.
                   *     If it's null, this PodAffinityTerm matches with no Pods. */
                  labelSelector?: {
                    /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                    matchExpressions?: {
                      /** @description key is the label key that the selector applies to. */
                      key: string;
                      /** @description operator represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                      operator: string;
                      /** @description values is an array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. This array is replaced during a strategic
                       *     merge patch. */
                      values?: string[];
                    }[];
                    /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                     *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                    matchLabels?: {
                      [key: string]: string;
                    };
                  };
                  /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                   *     be taken into consideration. The keys are used to lookup values from the
                   *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                   *     to select the group of existing pods which pods will be taken into consideration
                   *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   *     pod labels will be ignored. The default value is empty.
                   *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                   *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                   *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                  matchLabelKeys?: string[];
                  /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                   *     be taken into consideration. The keys are used to lookup values from the
                   *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                   *     to select the group of existing pods which pods will be taken into consideration
                   *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   *     pod labels will be ignored. The default value is empty.
                   *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                   *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                   *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                  mismatchLabelKeys?: string[];
                  /** @description A label query over the set of namespaces that the term applies to.
                   *     The term is applied to the union of the namespaces selected by this field
                   *     and the ones listed in the namespaces field.
                   *     null selector and null or empty namespaces list means "this pod's namespace".
                   *     An empty selector ({}) matches all namespaces. */
                  namespaceSelector?: {
                    /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                    matchExpressions?: {
                      /** @description key is the label key that the selector applies to. */
                      key: string;
                      /** @description operator represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                      operator: string;
                      /** @description values is an array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. This array is replaced during a strategic
                       *     merge patch. */
                      values?: string[];
                    }[];
                    /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                     *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                    matchLabels?: {
                      [key: string]: string;
                    };
                  };
                  /** @description namespaces specifies a static list of namespace names that the term applies to.
                   *     The term is applied to the union of the namespaces listed in this field
                   *     and the ones selected by namespaceSelector.
                   *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                  namespaces?: string[];
                  /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                   *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                   *     whose value of the label with key topologyKey matches that of any node on which any of the
                   *     selected pods is running.
                   *     Empty topologyKey is not allowed. */
                  topologyKey: string;
                }[];
              };
              /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
              podAntiAffinity?: {
                /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                 *     the anti-affinity expressions specified by this field, but it may choose
                 *     a node that violates one or more of the expressions. The node that is
                 *     most preferred is the one with the greatest sum of weights, i.e.
                 *     for each node that meets all of the scheduling requirements (resource
                 *     request, requiredDuringScheduling anti-affinity expressions, etc.),
                 *     compute a sum by iterating through the elements of this field and adding
                 *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                 *     node(s) with the highest sum are the most preferred. */
                preferredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description Required. A pod affinity term, associated with the corresponding weight. */
                  podAffinityTerm: {
                    /** @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods. */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string;
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                    matchLabelKeys?: string[];
                    /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                    mismatchLabelKeys?: string[];
                    /** @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces. */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string;
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                    namespaces?: string[];
                    /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed. */
                    topologyKey: string;
                  };
                  /**
                   * Format: int32
                   * @description weight associated with matching the corresponding podAffinityTerm,
                   *     in the range 1-100.
                   */
                  weight: number;
                }[];
                /** @description If the anti-affinity requirements specified by this field are not met at
                 *     scheduling time, the pod will not be scheduled onto the node.
                 *     If the anti-affinity requirements specified by this field cease to be met
                 *     at some point during pod execution (e.g. due to a pod label update), the
                 *     system may or may not try to eventually evict the pod from its node.
                 *     When there are multiple elements, the lists of nodes corresponding to each
                 *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                requiredDuringSchedulingIgnoredDuringExecution?: {
                  /** @description A label query over a set of resources, in this case pods.
                   *     If it's null, this PodAffinityTerm matches with no Pods. */
                  labelSelector?: {
                    /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                    matchExpressions?: {
                      /** @description key is the label key that the selector applies to. */
                      key: string;
                      /** @description operator represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                      operator: string;
                      /** @description values is an array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. This array is replaced during a strategic
                       *     merge patch. */
                      values?: string[];
                    }[];
                    /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                     *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                    matchLabels?: {
                      [key: string]: string;
                    };
                  };
                  /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                   *     be taken into consideration. The keys are used to lookup values from the
                   *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                   *     to select the group of existing pods which pods will be taken into consideration
                   *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   *     pod labels will be ignored. The default value is empty.
                   *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                   *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                   *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                  matchLabelKeys?: string[];
                  /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                   *     be taken into consideration. The keys are used to lookup values from the
                   *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                   *     to select the group of existing pods which pods will be taken into consideration
                   *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   *     pod labels will be ignored. The default value is empty.
                   *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                   *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                   *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                  mismatchLabelKeys?: string[];
                  /** @description A label query over the set of namespaces that the term applies to.
                   *     The term is applied to the union of the namespaces selected by this field
                   *     and the ones listed in the namespaces field.
                   *     null selector and null or empty namespaces list means "this pod's namespace".
                   *     An empty selector ({}) matches all namespaces. */
                  namespaceSelector?: {
                    /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                    matchExpressions?: {
                      /** @description key is the label key that the selector applies to. */
                      key: string;
                      /** @description operator represents a key's relationship to a set of values.
                       *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                      operator: string;
                      /** @description values is an array of string values. If the operator is In or NotIn,
                       *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                       *     the values array must be empty. This array is replaced during a strategic
                       *     merge patch. */
                      values?: string[];
                    }[];
                    /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                     *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                     *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                    matchLabels?: {
                      [key: string]: string;
                    };
                  };
                  /** @description namespaces specifies a static list of namespace names that the term applies to.
                   *     The term is applied to the union of the namespaces listed in this field
                   *     and the ones selected by namespaceSelector.
                   *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                  namespaces?: string[];
                  /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                   *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                   *     whose value of the label with key topologyKey matches that of any node on which any of the
                   *     selected pods is running.
                   *     Empty topologyKey is not allowed. */
                  topologyKey: string;
                }[];
              };
            };
            /** @description AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
            automountServiceAccountToken?: boolean;
            /** @description List of containers belonging to the pod.
             *     Containers cannot currently be added or removed.
             *     There must be at least one container in a Pod.
             *     Cannot be updated. */
            containers: {
              /** @description Arguments to the entrypoint.
               *     The container image's CMD is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              args?: string[];
              /** @description Entrypoint array. Not executed within a shell.
               *     The container image's ENTRYPOINT is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              command?: string[];
              /** @description List of environment variables to set in the container.
               *     Cannot be updated. */
              env?: {
                /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
                name: string;
                /** @description Variable references $(VAR_NAME) are expanded
                 *     using the previously defined environment variables in the container and
                 *     any service environment variables. If a variable cannot be resolved,
                 *     the reference in the input string will be unchanged. Double $$ are reduced
                 *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
                 *     "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
                 *     Escaped references will never be expanded, regardless of whether the variable
                 *     exists or not.
                 *     Defaults to "". */
                value?: string;
                /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
                valueFrom?: {
                  /** @description Selects a key of a ConfigMap. */
                  configMapKeyRef?: {
                    /** @description The key to select. */
                    key: string;
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the ConfigMap or its key must be defined */
                    optional?: boolean;
                  };
                  /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
                   *     spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
                  fieldRef?: {
                    /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                    apiVersion?: string;
                    /** @description Path of the field to select in the specified API version. */
                    fieldPath: string;
                  };
                  /** @description Selects a resource of the container: only resources limits and requests
                   *     (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
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
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the Secret or its key must be defined */
                    optional?: boolean;
                  };
                };
              }[];
              /** @description List of sources to populate environment variables in the container.
               *     The keys defined within a source must be a C_IDENTIFIER. All invalid keys
               *     will be reported as an event when the container is starting. When a key exists in multiple
               *     sources, the value associated with the last source will take precedence.
               *     Values defined by an Env with a duplicate key will take precedence.
               *     Cannot be updated. */
              envFrom?: {
                /** @description The ConfigMap to select from */
                configMapRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the ConfigMap must be defined */
                  optional?: boolean;
                };
                /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
                prefix?: string;
                /** @description The Secret to select from */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the Secret must be defined */
                  optional?: boolean;
                };
              }[];
              /** @description Container image name.
               *     More info: https://kubernetes.io/docs/concepts/containers/images
               *     This field is optional to allow higher level config management to default or override
               *     container images in workload controllers like Deployments and StatefulSets. */
              image?: string;
              /** @description Image pull policy.
               *     One of Always, Never, IfNotPresent.
               *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
              imagePullPolicy?: string;
              /** @description Actions that the management system should take in response to container lifecycle events.
               *     Cannot be updated. */
              lifecycle?: {
                /** @description PostStart is called immediately after a container is created. If the handler fails,
                 *     the container is terminated and restarted according to its restart policy.
                 *     Other management of the container blocks until the hook completes.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                postStart?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
                /** @description PreStop is called immediately before a container is terminated due to an
                 *     API request or management event such as liveness/startup probe failure,
                 *     preemption, resource contention, etc. The handler is not called if the
                 *     container crashes or exits. The Pod's termination grace period countdown begins before the
                 *     PreStop hook is executed. Regardless of the outcome of the handler, the
                 *     container will eventually terminate within the Pod's termination grace
                 *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
                 *     or until the termination grace period is reached.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                preStop?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
              };
              /** @description Periodic probe of container liveness.
               *     Container will be restarted if the probe fails.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              livenessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Name of the container specified as a DNS_LABEL.
               *     Each container in a pod must have a unique name (DNS_LABEL).
               *     Cannot be updated. */
              name: string;
              /** @description List of ports to expose from the container. Not specifying a port here
               *     DOES NOT prevent that port from being exposed. Any port which is
               *     listening on the default "0.0.0.0" address inside a container will be
               *     accessible from the network.
               *     Modifying this array with strategic merge patch may corrupt the data.
               *     For more information See https://github.com/kubernetes/kubernetes/issues/108255.
               *     Cannot be updated. */
              ports?: {
                /**
                 * Format: int32
                 * @description Number of port to expose on the pod's IP address.
                 *     This must be a valid port number, 0 < x < 65536.
                 */
                containerPort: number;
                /** @description What host IP to bind the external port to. */
                hostIP?: string;
                /**
                 * Format: int32
                 * @description Number of port to expose on the host.
                 *     If specified, this must be a valid port number, 0 < x < 65536.
                 *     If HostNetwork is specified, this must match ContainerPort.
                 *     Most containers do not need this.
                 */
                hostPort?: number;
                /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
                 *     named port in a pod must have a unique name. Name for the port that can be
                 *     referred to by services. */
                name?: string;
                /**
                 * @description Protocol for port. Must be UDP, TCP, or SCTP.
                 *     Defaults to "TCP".
                 * @default TCP
                 */
                protocol: string;
              }[];
              /** @description Periodic probe of container service readiness.
               *     Container will be removed from service endpoints if the probe fails.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              readinessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Resources resize policy for the container. */
              resizePolicy?: {
                /** @description Name of the resource to which this resource resize policy applies.
                 *     Supported values: cpu, memory. */
                resourceName: string;
                /** @description Restart policy to apply when specified resource is resized.
                 *     If not specified, it defaults to NotRequired. */
                restartPolicy: string;
              }[];
              /** @description Compute Resources required by this container.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
              resources?: {
                /** @description Claims lists the names of resources, defined in spec.resourceClaims,
                 *     that are used by this container.
                 *
                 *     This is an alpha field and requires enabling the
                 *     DynamicResourceAllocation feature gate.
                 *
                 *     This field is immutable. It can only be set for containers. */
                claims?: {
                  /** @description Name must match the name of one entry in pod.spec.resourceClaims of
                   *     the Pod where this field is used. It makes that resource available
                   *     inside a container. */
                  name: string;
                  /** @description Request is the name chosen for a request in the referenced claim.
                   *     If empty, everything from the claim is made available, otherwise
                   *     only the result of this request. */
                  request?: string;
                }[];
                /** @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                limits?: {
                  [key: string]: number | string;
                };
                /** @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                requests?: {
                  [key: string]: number | string;
                };
              };
              /** @description RestartPolicy defines the restart behavior of individual containers in a pod.
               *     This field may only be set for init containers, and the only allowed value is "Always".
               *     For non-init containers or when this field is not specified,
               *     the restart behavior is defined by the Pod's restart policy and the container type.
               *     Setting the RestartPolicy as "Always" for the init container will have the following effect:
               *     this init container will be continually restarted on
               *     exit until all regular containers have terminated. Once all regular
               *     containers have completed, all init containers with restartPolicy "Always"
               *     will be shut down. This lifecycle differs from normal init containers and
               *     is often referred to as a "sidecar" container. Although this init
               *     container still starts in the init container sequence, it does not wait
               *     for the container to complete before proceeding to the next init
               *     container. Instead, the next init container starts immediately after this
               *     init container is started, or after any startupProbe has successfully
               *     completed. */
              restartPolicy?: string;
              /** @description SecurityContext defines the security options the container should be run with.
               *     If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
               *     More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
              securityContext?: {
                /** @description AllowPrivilegeEscalation controls whether a process can gain more
                 *     privileges than its parent process. This bool directly controls if
                 *     the no_new_privs flag will be set on the container process.
                 *     AllowPrivilegeEscalation is true always when the container is:
                 *     1) run as Privileged
                 *     2) has CAP_SYS_ADMIN
                 *     Note that this field cannot be set when spec.os.name is windows. */
                allowPrivilegeEscalation?: boolean;
                /** @description appArmorProfile is the AppArmor options to use by this container. If set, this profile
                 *     overrides the pod's appArmorProfile.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                appArmorProfile?: {
                  /** @description localhostProfile indicates a profile loaded on the node that should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must match the loaded name of the profile.
                   *     Must be set if and only if type is "Localhost". */
                  localhostProfile?: string;
                  /** @description type indicates which kind of AppArmor profile will be applied.
                   *     Valid options are:
                   *       Localhost - a profile pre-loaded on the node.
                   *       RuntimeDefault - the container runtime's default profile.
                   *       Unconfined - no AppArmor enforcement. */
                  type: string;
                };
                /** @description The capabilities to add/drop when running containers.
                 *     Defaults to the default set of capabilities granted by the container runtime.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                capabilities?: {
                  /** @description Added capabilities */
                  add?: string[];
                  /** @description Removed capabilities */
                  drop?: string[];
                };
                /** @description Run container in privileged mode.
                 *     Processes in privileged containers are essentially equivalent to root on the host.
                 *     Defaults to false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                privileged?: boolean;
                /** @description procMount denotes the type of proc mount to use for the containers.
                 *     The default value is Default which uses the container runtime defaults for
                 *     readonly paths and masked paths.
                 *     This requires the ProcMountType feature flag to be enabled.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                procMount?: string;
                /** @description Whether this container has a read-only root filesystem.
                 *     Default is false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                readOnlyRootFilesystem?: boolean;
                /**
                 * Format: int64
                 * @description The GID to run the entrypoint of the container process.
                 *     Uses runtime default if unset.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsGroup?: number;
                /** @description Indicates that the container must run as a non-root user.
                 *     If true, the Kubelet will validate the image at runtime to ensure that it
                 *     does not run as UID 0 (root) and fail to start the container if it does.
                 *     If unset or false, no such validation will be performed.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                runAsNonRoot?: boolean;
                /**
                 * Format: int64
                 * @description The UID to run the entrypoint of the container process.
                 *     Defaults to user specified in image metadata if unspecified.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsUser?: number;
                /** @description The SELinux context to be applied to the container.
                 *     If unspecified, the container runtime will allocate a random SELinux context for each
                 *     container.  May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows. */
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
                /** @description The seccomp options to use by this container. If seccomp options are
                 *     provided at both the pod & container level, the container options
                 *     override the pod options.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                seccompProfile?: {
                  /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                   *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                  localhostProfile?: string;
                  /** @description type indicates which kind of seccomp profile will be applied.
                   *     Valid options are:
                   *
                   *     Localhost - a profile defined in a file on the node should be used.
                   *     RuntimeDefault - the container runtime default profile should be used.
                   *     Unconfined - no profile should be applied. */
                  type: string;
                };
                /** @description The Windows specific settings applied to all containers.
                 *     If unspecified, the options from the PodSecurityContext will be used.
                 *     If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is linux. */
                windowsOptions?: {
                  /** @description GMSACredentialSpec is where the GMSA admission webhook
                   *     (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the
                   *     GMSA credential spec named by the GMSACredentialSpecName field. */
                  gmsaCredentialSpec?: string;
                  /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
                  gmsaCredentialSpecName?: string;
                  /** @description HostProcess determines if a container should be run as a 'Host Process' container.
                   *     All of a Pod's containers must have the same effective HostProcess value
                   *     (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).
                   *     In addition, if HostProcess is true then HostNetwork must also be set to true. */
                  hostProcess?: boolean;
                  /** @description The UserName in Windows to run the entrypoint of the container process.
                   *     Defaults to the user specified in image metadata if unspecified.
                   *     May also be set in PodSecurityContext. If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                  runAsUserName?: string;
                };
              };
              /** @description StartupProbe indicates that the Pod has successfully initialized.
               *     If specified, no other probes are executed until this completes successfully.
               *     If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
               *     This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
               *     when it might take a long time to load data or warm a cache, than during steady-state operation.
               *     This cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              startupProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this
               *     is not set, reads from stdin in the container will always result in EOF.
               *     Default is false. */
              stdin?: boolean;
              /** @description Whether the container runtime should close the stdin channel after it has been opened by
               *     a single attach. When stdin is true the stdin stream will remain open across multiple attach
               *     sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
               *     first client attaches to stdin, and then remains open and accepts data until the client disconnects,
               *     at which time stdin is closed and remains closed until the container is restarted. If this
               *     flag is false, a container processes that reads from stdin will never receive an EOF.
               *     Default is false */
              stdinOnce?: boolean;
              /** @description Optional: Path at which the file to which the container's termination message
               *     will be written is mounted into the container's filesystem.
               *     Message written is intended to be brief final status, such as an assertion failure message.
               *     Will be truncated by the node if greater than 4096 bytes. The total message length across
               *     all containers will be limited to 12kb.
               *     Defaults to /dev/termination-log.
               *     Cannot be updated. */
              terminationMessagePath?: string;
              /** @description Indicate how the termination message should be populated. File will use the contents of
               *     terminationMessagePath to populate the container status message on both success and failure.
               *     FallbackToLogsOnError will use the last chunk of container log output if the termination
               *     message file is empty and the container exited with an error.
               *     The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
               *     Defaults to File.
               *     Cannot be updated. */
              terminationMessagePolicy?: string;
              /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true.
               *     Default is false. */
              tty?: boolean;
              /** @description volumeDevices is the list of block devices to be used by the container. */
              volumeDevices?: {
                /** @description devicePath is the path inside of the container that the device will be mapped to. */
                devicePath: string;
                /** @description name must match the name of a persistentVolumeClaim in the pod */
                name: string;
              }[];
              /** @description Pod volumes to mount into the container's filesystem.
               *     Cannot be updated. */
              volumeMounts?: {
                /** @description Path within the container at which the volume should be mounted.  Must
                 *     not contain ':'. */
                mountPath: string;
                /** @description mountPropagation determines how mounts are propagated from the host
                 *     to container and the other way around.
                 *     When not set, MountPropagationNone is used.
                 *     This field is beta in 1.10.
                 *     When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
                 *     (which defaults to None). */
                mountPropagation?: string;
                /** @description This must match the Name of a Volume. */
                name: string;
                /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
                 *     Defaults to false. */
                readOnly?: boolean;
                /** @description RecursiveReadOnly specifies whether read-only mounts should be handled
                 *     recursively.
                 *
                 *     If ReadOnly is false, this field has no meaning and must be unspecified.
                 *
                 *     If ReadOnly is true, and this field is set to Disabled, the mount is not made
                 *     recursively read-only.  If this field is set to IfPossible, the mount is made
                 *     recursively read-only, if it is supported by the container runtime.  If this
                 *     field is set to Enabled, the mount is made recursively read-only if it is
                 *     supported by the container runtime, otherwise the pod will not be started and
                 *     an error will be generated to indicate the reason.
                 *
                 *     If this field is set to IfPossible or Enabled, MountPropagation must be set to
                 *     None (or be unspecified, which defaults to None).
                 *
                 *     If this field is not specified, it is treated as an equivalent of Disabled. */
                recursiveReadOnly?: string;
                /** @description Path within the volume from which the container's volume should be mounted.
                 *     Defaults to "" (volume's root). */
                subPath?: string;
                /** @description Expanded path within the volume from which the container's volume should be mounted.
                 *     Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
                 *     Defaults to "" (volume's root).
                 *     SubPathExpr and SubPath are mutually exclusive. */
                subPathExpr?: string;
              }[];
              /** @description Container's working directory.
               *     If not specified, the container runtime's default will be used, which
               *     might be configured in the container image.
               *     Cannot be updated. */
              workingDir?: string;
            }[];
            /** @description Specifies the DNS parameters of a pod.
             *     Parameters specified here will be merged to the generated DNS
             *     configuration based on DNSPolicy. */
            dnsConfig?: {
              /** @description A list of DNS name server IP addresses.
               *     This will be appended to the base nameservers generated from DNSPolicy.
               *     Duplicated nameservers will be removed. */
              nameservers?: string[];
              /** @description A list of DNS resolver options.
               *     This will be merged with the base options generated from DNSPolicy.
               *     Duplicated entries will be removed. Resolution options given in Options
               *     will override those that appear in the base DNSPolicy. */
              options?: {
                /** @description Name is this DNS resolver option's name.
                 *     Required. */
                name?: string;
                /** @description Value is this DNS resolver option's value. */
                value?: string;
              }[];
              /** @description A list of DNS search domains for host-name lookup.
               *     This will be appended to the base search paths generated from DNSPolicy.
               *     Duplicated search paths will be removed. */
              searches?: string[];
            };
            /** @description Set DNS policy for the pod.
             *     Defaults to "ClusterFirst".
             *     Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'.
             *     DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.
             *     To have DNS options set along with hostNetwork, you have to specify DNS policy
             *     explicitly to 'ClusterFirstWithHostNet'. */
            dnsPolicy?: string;
            /** @description EnableServiceLinks indicates whether information about services should be injected into pod's
             *     environment variables, matching the syntax of Docker links.
             *     Optional: Defaults to true. */
            enableServiceLinks?: boolean;
            /** @description List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing
             *     pod to perform user-initiated actions such as debugging. This list cannot be specified when
             *     creating a pod, and it cannot be modified by updating the pod spec. In order to add an
             *     ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. */
            ephemeralContainers?: {
              /** @description Arguments to the entrypoint.
               *     The image's CMD is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              args?: string[];
              /** @description Entrypoint array. Not executed within a shell.
               *     The image's ENTRYPOINT is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              command?: string[];
              /** @description List of environment variables to set in the container.
               *     Cannot be updated. */
              env?: {
                /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
                name: string;
                /** @description Variable references $(VAR_NAME) are expanded
                 *     using the previously defined environment variables in the container and
                 *     any service environment variables. If a variable cannot be resolved,
                 *     the reference in the input string will be unchanged. Double $$ are reduced
                 *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
                 *     "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
                 *     Escaped references will never be expanded, regardless of whether the variable
                 *     exists or not.
                 *     Defaults to "". */
                value?: string;
                /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
                valueFrom?: {
                  /** @description Selects a key of a ConfigMap. */
                  configMapKeyRef?: {
                    /** @description The key to select. */
                    key: string;
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the ConfigMap or its key must be defined */
                    optional?: boolean;
                  };
                  /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
                   *     spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
                  fieldRef?: {
                    /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                    apiVersion?: string;
                    /** @description Path of the field to select in the specified API version. */
                    fieldPath: string;
                  };
                  /** @description Selects a resource of the container: only resources limits and requests
                   *     (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
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
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the Secret or its key must be defined */
                    optional?: boolean;
                  };
                };
              }[];
              /** @description List of sources to populate environment variables in the container.
               *     The keys defined within a source must be a C_IDENTIFIER. All invalid keys
               *     will be reported as an event when the container is starting. When a key exists in multiple
               *     sources, the value associated with the last source will take precedence.
               *     Values defined by an Env with a duplicate key will take precedence.
               *     Cannot be updated. */
              envFrom?: {
                /** @description The ConfigMap to select from */
                configMapRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the ConfigMap must be defined */
                  optional?: boolean;
                };
                /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
                prefix?: string;
                /** @description The Secret to select from */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the Secret must be defined */
                  optional?: boolean;
                };
              }[];
              /** @description Container image name.
               *     More info: https://kubernetes.io/docs/concepts/containers/images */
              image?: string;
              /** @description Image pull policy.
               *     One of Always, Never, IfNotPresent.
               *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
              imagePullPolicy?: string;
              /** @description Lifecycle is not allowed for ephemeral containers. */
              lifecycle?: {
                /** @description PostStart is called immediately after a container is created. If the handler fails,
                 *     the container is terminated and restarted according to its restart policy.
                 *     Other management of the container blocks until the hook completes.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                postStart?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
                /** @description PreStop is called immediately before a container is terminated due to an
                 *     API request or management event such as liveness/startup probe failure,
                 *     preemption, resource contention, etc. The handler is not called if the
                 *     container crashes or exits. The Pod's termination grace period countdown begins before the
                 *     PreStop hook is executed. Regardless of the outcome of the handler, the
                 *     container will eventually terminate within the Pod's termination grace
                 *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
                 *     or until the termination grace period is reached.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                preStop?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
              };
              /** @description Probes are not allowed for ephemeral containers. */
              livenessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Name of the ephemeral container specified as a DNS_LABEL.
               *     This name must be unique among all containers, init containers and ephemeral containers. */
              name: string;
              /** @description Ports are not allowed for ephemeral containers. */
              ports?: {
                /**
                 * Format: int32
                 * @description Number of port to expose on the pod's IP address.
                 *     This must be a valid port number, 0 < x < 65536.
                 */
                containerPort: number;
                /** @description What host IP to bind the external port to. */
                hostIP?: string;
                /**
                 * Format: int32
                 * @description Number of port to expose on the host.
                 *     If specified, this must be a valid port number, 0 < x < 65536.
                 *     If HostNetwork is specified, this must match ContainerPort.
                 *     Most containers do not need this.
                 */
                hostPort?: number;
                /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
                 *     named port in a pod must have a unique name. Name for the port that can be
                 *     referred to by services. */
                name?: string;
                /**
                 * @description Protocol for port. Must be UDP, TCP, or SCTP.
                 *     Defaults to "TCP".
                 * @default TCP
                 */
                protocol: string;
              }[];
              /** @description Probes are not allowed for ephemeral containers. */
              readinessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Resources resize policy for the container. */
              resizePolicy?: {
                /** @description Name of the resource to which this resource resize policy applies.
                 *     Supported values: cpu, memory. */
                resourceName: string;
                /** @description Restart policy to apply when specified resource is resized.
                 *     If not specified, it defaults to NotRequired. */
                restartPolicy: string;
              }[];
              /** @description Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources
               *     already allocated to the pod. */
              resources?: {
                /** @description Claims lists the names of resources, defined in spec.resourceClaims,
                 *     that are used by this container.
                 *
                 *     This is an alpha field and requires enabling the
                 *     DynamicResourceAllocation feature gate.
                 *
                 *     This field is immutable. It can only be set for containers. */
                claims?: {
                  /** @description Name must match the name of one entry in pod.spec.resourceClaims of
                   *     the Pod where this field is used. It makes that resource available
                   *     inside a container. */
                  name: string;
                  /** @description Request is the name chosen for a request in the referenced claim.
                   *     If empty, everything from the claim is made available, otherwise
                   *     only the result of this request. */
                  request?: string;
                }[];
                /** @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                limits?: {
                  [key: string]: number | string;
                };
                /** @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                requests?: {
                  [key: string]: number | string;
                };
              };
              /** @description Restart policy for the container to manage the restart behavior of each
               *     container within a pod.
               *     This may only be set for init containers. You cannot set this field on
               *     ephemeral containers. */
              restartPolicy?: string;
              /** @description Optional: SecurityContext defines the security options the ephemeral container should be run with.
               *     If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. */
              securityContext?: {
                /** @description AllowPrivilegeEscalation controls whether a process can gain more
                 *     privileges than its parent process. This bool directly controls if
                 *     the no_new_privs flag will be set on the container process.
                 *     AllowPrivilegeEscalation is true always when the container is:
                 *     1) run as Privileged
                 *     2) has CAP_SYS_ADMIN
                 *     Note that this field cannot be set when spec.os.name is windows. */
                allowPrivilegeEscalation?: boolean;
                /** @description appArmorProfile is the AppArmor options to use by this container. If set, this profile
                 *     overrides the pod's appArmorProfile.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                appArmorProfile?: {
                  /** @description localhostProfile indicates a profile loaded on the node that should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must match the loaded name of the profile.
                   *     Must be set if and only if type is "Localhost". */
                  localhostProfile?: string;
                  /** @description type indicates which kind of AppArmor profile will be applied.
                   *     Valid options are:
                   *       Localhost - a profile pre-loaded on the node.
                   *       RuntimeDefault - the container runtime's default profile.
                   *       Unconfined - no AppArmor enforcement. */
                  type: string;
                };
                /** @description The capabilities to add/drop when running containers.
                 *     Defaults to the default set of capabilities granted by the container runtime.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                capabilities?: {
                  /** @description Added capabilities */
                  add?: string[];
                  /** @description Removed capabilities */
                  drop?: string[];
                };
                /** @description Run container in privileged mode.
                 *     Processes in privileged containers are essentially equivalent to root on the host.
                 *     Defaults to false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                privileged?: boolean;
                /** @description procMount denotes the type of proc mount to use for the containers.
                 *     The default value is Default which uses the container runtime defaults for
                 *     readonly paths and masked paths.
                 *     This requires the ProcMountType feature flag to be enabled.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                procMount?: string;
                /** @description Whether this container has a read-only root filesystem.
                 *     Default is false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                readOnlyRootFilesystem?: boolean;
                /**
                 * Format: int64
                 * @description The GID to run the entrypoint of the container process.
                 *     Uses runtime default if unset.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsGroup?: number;
                /** @description Indicates that the container must run as a non-root user.
                 *     If true, the Kubelet will validate the image at runtime to ensure that it
                 *     does not run as UID 0 (root) and fail to start the container if it does.
                 *     If unset or false, no such validation will be performed.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                runAsNonRoot?: boolean;
                /**
                 * Format: int64
                 * @description The UID to run the entrypoint of the container process.
                 *     Defaults to user specified in image metadata if unspecified.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsUser?: number;
                /** @description The SELinux context to be applied to the container.
                 *     If unspecified, the container runtime will allocate a random SELinux context for each
                 *     container.  May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows. */
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
                /** @description The seccomp options to use by this container. If seccomp options are
                 *     provided at both the pod & container level, the container options
                 *     override the pod options.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                seccompProfile?: {
                  /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                   *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                  localhostProfile?: string;
                  /** @description type indicates which kind of seccomp profile will be applied.
                   *     Valid options are:
                   *
                   *     Localhost - a profile defined in a file on the node should be used.
                   *     RuntimeDefault - the container runtime default profile should be used.
                   *     Unconfined - no profile should be applied. */
                  type: string;
                };
                /** @description The Windows specific settings applied to all containers.
                 *     If unspecified, the options from the PodSecurityContext will be used.
                 *     If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is linux. */
                windowsOptions?: {
                  /** @description GMSACredentialSpec is where the GMSA admission webhook
                   *     (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the
                   *     GMSA credential spec named by the GMSACredentialSpecName field. */
                  gmsaCredentialSpec?: string;
                  /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
                  gmsaCredentialSpecName?: string;
                  /** @description HostProcess determines if a container should be run as a 'Host Process' container.
                   *     All of a Pod's containers must have the same effective HostProcess value
                   *     (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).
                   *     In addition, if HostProcess is true then HostNetwork must also be set to true. */
                  hostProcess?: boolean;
                  /** @description The UserName in Windows to run the entrypoint of the container process.
                   *     Defaults to the user specified in image metadata if unspecified.
                   *     May also be set in PodSecurityContext. If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                  runAsUserName?: string;
                };
              };
              /** @description Probes are not allowed for ephemeral containers. */
              startupProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this
               *     is not set, reads from stdin in the container will always result in EOF.
               *     Default is false. */
              stdin?: boolean;
              /** @description Whether the container runtime should close the stdin channel after it has been opened by
               *     a single attach. When stdin is true the stdin stream will remain open across multiple attach
               *     sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
               *     first client attaches to stdin, and then remains open and accepts data until the client disconnects,
               *     at which time stdin is closed and remains closed until the container is restarted. If this
               *     flag is false, a container processes that reads from stdin will never receive an EOF.
               *     Default is false */
              stdinOnce?: boolean;
              /** @description If set, the name of the container from PodSpec that this ephemeral container targets.
               *     The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container.
               *     If not set then the ephemeral container uses the namespaces configured in the Pod spec.
               *
               *     The container runtime must implement support for this feature. If the runtime does not
               *     support namespace targeting then the result of setting this field is undefined. */
              targetContainerName?: string;
              /** @description Optional: Path at which the file to which the container's termination message
               *     will be written is mounted into the container's filesystem.
               *     Message written is intended to be brief final status, such as an assertion failure message.
               *     Will be truncated by the node if greater than 4096 bytes. The total message length across
               *     all containers will be limited to 12kb.
               *     Defaults to /dev/termination-log.
               *     Cannot be updated. */
              terminationMessagePath?: string;
              /** @description Indicate how the termination message should be populated. File will use the contents of
               *     terminationMessagePath to populate the container status message on both success and failure.
               *     FallbackToLogsOnError will use the last chunk of container log output if the termination
               *     message file is empty and the container exited with an error.
               *     The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
               *     Defaults to File.
               *     Cannot be updated. */
              terminationMessagePolicy?: string;
              /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true.
               *     Default is false. */
              tty?: boolean;
              /** @description volumeDevices is the list of block devices to be used by the container. */
              volumeDevices?: {
                /** @description devicePath is the path inside of the container that the device will be mapped to. */
                devicePath: string;
                /** @description name must match the name of a persistentVolumeClaim in the pod */
                name: string;
              }[];
              /** @description Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers.
               *     Cannot be updated. */
              volumeMounts?: {
                /** @description Path within the container at which the volume should be mounted.  Must
                 *     not contain ':'. */
                mountPath: string;
                /** @description mountPropagation determines how mounts are propagated from the host
                 *     to container and the other way around.
                 *     When not set, MountPropagationNone is used.
                 *     This field is beta in 1.10.
                 *     When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
                 *     (which defaults to None). */
                mountPropagation?: string;
                /** @description This must match the Name of a Volume. */
                name: string;
                /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
                 *     Defaults to false. */
                readOnly?: boolean;
                /** @description RecursiveReadOnly specifies whether read-only mounts should be handled
                 *     recursively.
                 *
                 *     If ReadOnly is false, this field has no meaning and must be unspecified.
                 *
                 *     If ReadOnly is true, and this field is set to Disabled, the mount is not made
                 *     recursively read-only.  If this field is set to IfPossible, the mount is made
                 *     recursively read-only, if it is supported by the container runtime.  If this
                 *     field is set to Enabled, the mount is made recursively read-only if it is
                 *     supported by the container runtime, otherwise the pod will not be started and
                 *     an error will be generated to indicate the reason.
                 *
                 *     If this field is set to IfPossible or Enabled, MountPropagation must be set to
                 *     None (or be unspecified, which defaults to None).
                 *
                 *     If this field is not specified, it is treated as an equivalent of Disabled. */
                recursiveReadOnly?: string;
                /** @description Path within the volume from which the container's volume should be mounted.
                 *     Defaults to "" (volume's root). */
                subPath?: string;
                /** @description Expanded path within the volume from which the container's volume should be mounted.
                 *     Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
                 *     Defaults to "" (volume's root).
                 *     SubPathExpr and SubPath are mutually exclusive. */
                subPathExpr?: string;
              }[];
              /** @description Container's working directory.
               *     If not specified, the container runtime's default will be used, which
               *     might be configured in the container image.
               *     Cannot be updated. */
              workingDir?: string;
            }[];
            /** @description HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts
             *     file if specified. */
            hostAliases?: {
              /** @description Hostnames for the above IP address. */
              hostnames?: string[];
              /** @description IP address of the host file entry. */
              ip: string;
            }[];
            /** @description Use the host's ipc namespace.
             *     Optional: Default to false. */
            hostIPC?: boolean;
            /** @description Host networking requested for this pod. Use the host's network namespace.
             *     If this option is set, the ports that will be used must be specified.
             *     Default to false. */
            hostNetwork?: boolean;
            /** @description Use the host's pid namespace.
             *     Optional: Default to false. */
            hostPID?: boolean;
            /** @description Use the host's user namespace.
             *     Optional: Default to true.
             *     If set to true or not present, the pod will be run in the host user namespace, useful
             *     for when the pod needs a feature only available to the host user namespace, such as
             *     loading a kernel module with CAP_SYS_MODULE.
             *     When set to false, a new userns is created for the pod. Setting false is useful for
             *     mitigating container breakout vulnerabilities even allowing users to run their
             *     containers as root without actually having root privileges on the host.
             *     This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature. */
            hostUsers?: boolean;
            /** @description Specifies the hostname of the Pod
             *     If not specified, the pod's hostname will be set to a system-defined value. */
            hostname?: string;
            /** @description ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
             *     If specified, these secrets will be passed to individual puller implementations for them to use.
             *     More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
            imagePullSecrets?: {
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
            }[];
            /** @description List of initialization containers belonging to the pod.
             *     Init containers are executed in order prior to containers being started. If any
             *     init container fails, the pod is considered to have failed and is handled according
             *     to its restartPolicy. The name for an init container or normal container must be
             *     unique among all containers.
             *     Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes.
             *     The resourceRequirements of an init container are taken into account during scheduling
             *     by finding the highest request/limit for each resource type, and then using the max of
             *     of that value or the sum of the normal containers. Limits are applied to init containers
             *     in a similar fashion.
             *     Init containers cannot currently be added or removed.
             *     Cannot be updated.
             *     More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
            initContainers?: {
              /** @description Arguments to the entrypoint.
               *     The container image's CMD is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              args?: string[];
              /** @description Entrypoint array. Not executed within a shell.
               *     The container image's ENTRYPOINT is used if this is not provided.
               *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
               *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
               *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
               *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
               *     of whether the variable exists or not. Cannot be updated.
               *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
              command?: string[];
              /** @description List of environment variables to set in the container.
               *     Cannot be updated. */
              env?: {
                /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
                name: string;
                /** @description Variable references $(VAR_NAME) are expanded
                 *     using the previously defined environment variables in the container and
                 *     any service environment variables. If a variable cannot be resolved,
                 *     the reference in the input string will be unchanged. Double $$ are reduced
                 *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
                 *     "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
                 *     Escaped references will never be expanded, regardless of whether the variable
                 *     exists or not.
                 *     Defaults to "". */
                value?: string;
                /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
                valueFrom?: {
                  /** @description Selects a key of a ConfigMap. */
                  configMapKeyRef?: {
                    /** @description The key to select. */
                    key: string;
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the ConfigMap or its key must be defined */
                    optional?: boolean;
                  };
                  /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
                   *     spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
                  fieldRef?: {
                    /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                    apiVersion?: string;
                    /** @description Path of the field to select in the specified API version. */
                    fieldPath: string;
                  };
                  /** @description Selects a resource of the container: only resources limits and requests
                   *     (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
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
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description Specify whether the Secret or its key must be defined */
                    optional?: boolean;
                  };
                };
              }[];
              /** @description List of sources to populate environment variables in the container.
               *     The keys defined within a source must be a C_IDENTIFIER. All invalid keys
               *     will be reported as an event when the container is starting. When a key exists in multiple
               *     sources, the value associated with the last source will take precedence.
               *     Values defined by an Env with a duplicate key will take precedence.
               *     Cannot be updated. */
              envFrom?: {
                /** @description The ConfigMap to select from */
                configMapRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the ConfigMap must be defined */
                  optional?: boolean;
                };
                /** @description An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
                prefix?: string;
                /** @description The Secret to select from */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                  /** @description Specify whether the Secret must be defined */
                  optional?: boolean;
                };
              }[];
              /** @description Container image name.
               *     More info: https://kubernetes.io/docs/concepts/containers/images
               *     This field is optional to allow higher level config management to default or override
               *     container images in workload controllers like Deployments and StatefulSets. */
              image?: string;
              /** @description Image pull policy.
               *     One of Always, Never, IfNotPresent.
               *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
              imagePullPolicy?: string;
              /** @description Actions that the management system should take in response to container lifecycle events.
               *     Cannot be updated. */
              lifecycle?: {
                /** @description PostStart is called immediately after a container is created. If the handler fails,
                 *     the container is terminated and restarted according to its restart policy.
                 *     Other management of the container blocks until the hook completes.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                postStart?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
                /** @description PreStop is called immediately before a container is terminated due to an
                 *     API request or management event such as liveness/startup probe failure,
                 *     preemption, resource contention, etc. The handler is not called if the
                 *     container crashes or exits. The Pod's termination grace period countdown begins before the
                 *     PreStop hook is executed. Regardless of the outcome of the handler, the
                 *     container will eventually terminate within the Pod's termination grace
                 *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
                 *     or until the termination grace period is reached.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
                preStop?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /** @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                    command?: string[];
                  };
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead. */
                    host?: string;
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /** @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                      name: string;
                      /** @description The header field value */
                      value: string;
                    }[];
                    /** @description Path to access on the HTTP server. */
                    path?: string;
                    /** @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                    /** @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP. */
                    scheme?: string;
                  };
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number;
                  };
                  /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified. */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string;
                    /** @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME. */
                    port: number | string;
                  };
                };
              };
              /** @description Periodic probe of container liveness.
               *     Container will be restarted if the probe fails.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              livenessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Name of the container specified as a DNS_LABEL.
               *     Each container in a pod must have a unique name (DNS_LABEL).
               *     Cannot be updated. */
              name: string;
              /** @description List of ports to expose from the container. Not specifying a port here
               *     DOES NOT prevent that port from being exposed. Any port which is
               *     listening on the default "0.0.0.0" address inside a container will be
               *     accessible from the network.
               *     Modifying this array with strategic merge patch may corrupt the data.
               *     For more information See https://github.com/kubernetes/kubernetes/issues/108255.
               *     Cannot be updated. */
              ports?: {
                /**
                 * Format: int32
                 * @description Number of port to expose on the pod's IP address.
                 *     This must be a valid port number, 0 < x < 65536.
                 */
                containerPort: number;
                /** @description What host IP to bind the external port to. */
                hostIP?: string;
                /**
                 * Format: int32
                 * @description Number of port to expose on the host.
                 *     If specified, this must be a valid port number, 0 < x < 65536.
                 *     If HostNetwork is specified, this must match ContainerPort.
                 *     Most containers do not need this.
                 */
                hostPort?: number;
                /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
                 *     named port in a pod must have a unique name. Name for the port that can be
                 *     referred to by services. */
                name?: string;
                /**
                 * @description Protocol for port. Must be UDP, TCP, or SCTP.
                 *     Defaults to "TCP".
                 * @default TCP
                 */
                protocol: string;
              }[];
              /** @description Periodic probe of container service readiness.
               *     Container will be removed from service endpoints if the probe fails.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              readinessProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Resources resize policy for the container. */
              resizePolicy?: {
                /** @description Name of the resource to which this resource resize policy applies.
                 *     Supported values: cpu, memory. */
                resourceName: string;
                /** @description Restart policy to apply when specified resource is resized.
                 *     If not specified, it defaults to NotRequired. */
                restartPolicy: string;
              }[];
              /** @description Compute Resources required by this container.
               *     Cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
              resources?: {
                /** @description Claims lists the names of resources, defined in spec.resourceClaims,
                 *     that are used by this container.
                 *
                 *     This is an alpha field and requires enabling the
                 *     DynamicResourceAllocation feature gate.
                 *
                 *     This field is immutable. It can only be set for containers. */
                claims?: {
                  /** @description Name must match the name of one entry in pod.spec.resourceClaims of
                   *     the Pod where this field is used. It makes that resource available
                   *     inside a container. */
                  name: string;
                  /** @description Request is the name chosen for a request in the referenced claim.
                   *     If empty, everything from the claim is made available, otherwise
                   *     only the result of this request. */
                  request?: string;
                }[];
                /** @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                limits?: {
                  [key: string]: number | string;
                };
                /** @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                requests?: {
                  [key: string]: number | string;
                };
              };
              /** @description RestartPolicy defines the restart behavior of individual containers in a pod.
               *     This field may only be set for init containers, and the only allowed value is "Always".
               *     For non-init containers or when this field is not specified,
               *     the restart behavior is defined by the Pod's restart policy and the container type.
               *     Setting the RestartPolicy as "Always" for the init container will have the following effect:
               *     this init container will be continually restarted on
               *     exit until all regular containers have terminated. Once all regular
               *     containers have completed, all init containers with restartPolicy "Always"
               *     will be shut down. This lifecycle differs from normal init containers and
               *     is often referred to as a "sidecar" container. Although this init
               *     container still starts in the init container sequence, it does not wait
               *     for the container to complete before proceeding to the next init
               *     container. Instead, the next init container starts immediately after this
               *     init container is started, or after any startupProbe has successfully
               *     completed. */
              restartPolicy?: string;
              /** @description SecurityContext defines the security options the container should be run with.
               *     If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
               *     More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
              securityContext?: {
                /** @description AllowPrivilegeEscalation controls whether a process can gain more
                 *     privileges than its parent process. This bool directly controls if
                 *     the no_new_privs flag will be set on the container process.
                 *     AllowPrivilegeEscalation is true always when the container is:
                 *     1) run as Privileged
                 *     2) has CAP_SYS_ADMIN
                 *     Note that this field cannot be set when spec.os.name is windows. */
                allowPrivilegeEscalation?: boolean;
                /** @description appArmorProfile is the AppArmor options to use by this container. If set, this profile
                 *     overrides the pod's appArmorProfile.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                appArmorProfile?: {
                  /** @description localhostProfile indicates a profile loaded on the node that should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must match the loaded name of the profile.
                   *     Must be set if and only if type is "Localhost". */
                  localhostProfile?: string;
                  /** @description type indicates which kind of AppArmor profile will be applied.
                   *     Valid options are:
                   *       Localhost - a profile pre-loaded on the node.
                   *       RuntimeDefault - the container runtime's default profile.
                   *       Unconfined - no AppArmor enforcement. */
                  type: string;
                };
                /** @description The capabilities to add/drop when running containers.
                 *     Defaults to the default set of capabilities granted by the container runtime.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                capabilities?: {
                  /** @description Added capabilities */
                  add?: string[];
                  /** @description Removed capabilities */
                  drop?: string[];
                };
                /** @description Run container in privileged mode.
                 *     Processes in privileged containers are essentially equivalent to root on the host.
                 *     Defaults to false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                privileged?: boolean;
                /** @description procMount denotes the type of proc mount to use for the containers.
                 *     The default value is Default which uses the container runtime defaults for
                 *     readonly paths and masked paths.
                 *     This requires the ProcMountType feature flag to be enabled.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                procMount?: string;
                /** @description Whether this container has a read-only root filesystem.
                 *     Default is false.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                readOnlyRootFilesystem?: boolean;
                /**
                 * Format: int64
                 * @description The GID to run the entrypoint of the container process.
                 *     Uses runtime default if unset.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsGroup?: number;
                /** @description Indicates that the container must run as a non-root user.
                 *     If true, the Kubelet will validate the image at runtime to ensure that it
                 *     does not run as UID 0 (root) and fail to start the container if it does.
                 *     If unset or false, no such validation will be performed.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                runAsNonRoot?: boolean;
                /**
                 * Format: int64
                 * @description The UID to run the entrypoint of the container process.
                 *     Defaults to user specified in image metadata if unspecified.
                 *     May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows.
                 */
                runAsUser?: number;
                /** @description The SELinux context to be applied to the container.
                 *     If unspecified, the container runtime will allocate a random SELinux context for each
                 *     container.  May also be set in PodSecurityContext.  If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is windows. */
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
                /** @description The seccomp options to use by this container. If seccomp options are
                 *     provided at both the pod & container level, the container options
                 *     override the pod options.
                 *     Note that this field cannot be set when spec.os.name is windows. */
                seccompProfile?: {
                  /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                   *     The profile must be preconfigured on the node to work.
                   *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                   *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                  localhostProfile?: string;
                  /** @description type indicates which kind of seccomp profile will be applied.
                   *     Valid options are:
                   *
                   *     Localhost - a profile defined in a file on the node should be used.
                   *     RuntimeDefault - the container runtime default profile should be used.
                   *     Unconfined - no profile should be applied. */
                  type: string;
                };
                /** @description The Windows specific settings applied to all containers.
                 *     If unspecified, the options from the PodSecurityContext will be used.
                 *     If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
                 *     Note that this field cannot be set when spec.os.name is linux. */
                windowsOptions?: {
                  /** @description GMSACredentialSpec is where the GMSA admission webhook
                   *     (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the
                   *     GMSA credential spec named by the GMSACredentialSpecName field. */
                  gmsaCredentialSpec?: string;
                  /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
                  gmsaCredentialSpecName?: string;
                  /** @description HostProcess determines if a container should be run as a 'Host Process' container.
                   *     All of a Pod's containers must have the same effective HostProcess value
                   *     (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).
                   *     In addition, if HostProcess is true then HostNetwork must also be set to true. */
                  hostProcess?: boolean;
                  /** @description The UserName in Windows to run the entrypoint of the container process.
                   *     Defaults to the user specified in image metadata if unspecified.
                   *     May also be set in PodSecurityContext. If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                  runAsUserName?: string;
                };
              };
              /** @description StartupProbe indicates that the Pod has successfully initialized.
               *     If specified, no other probes are executed until this completes successfully.
               *     If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
               *     This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
               *     when it might take a long time to load data or warm a cache, than during steady-state operation.
               *     This cannot be updated.
               *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
              startupProbe?: {
                /** @description Exec specifies a command to execute in the container. */
                exec?: {
                  /** @description Command is the command line to execute inside the container, the working directory for the
                   *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                   *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                   *     a shell, you need to explicitly call out to that shell.
                   *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                  command?: string[];
                };
                /**
                 * Format: int32
                 * @description Minimum consecutive failures for the probe to be considered failed after having succeeded.
                 *     Defaults to 3. Minimum value is 1.
                 */
                failureThreshold?: number;
                /** @description GRPC specifies a GRPC HealthCheckRequest. */
                grpc?: {
                  /**
                   * Format: int32
                   * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
                   */
                  port: number;
                  /**
                   * @description Service is the name of the service to place in the gRPC HealthCheckRequest
                   *     (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                   *
                   *     If this is not specified, the default behavior is defined by gRPC.
                   * @default
                   */
                  service: string;
                };
                /** @description HTTPGet specifies an HTTP GET request to perform. */
                httpGet?: {
                  /** @description Host name to connect to, defaults to the pod IP. You probably want to set
                   *     "Host" in httpHeaders instead. */
                  host?: string;
                  /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                  httpHeaders?: {
                    /** @description The header field name.
                     *     This will be canonicalized upon output, so case-variant names will be understood as the same header. */
                    name: string;
                    /** @description The header field value */
                    value: string;
                  }[];
                  /** @description Path to access on the HTTP server. */
                  path?: string;
                  /** @description Name or number of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                  /** @description Scheme to use for connecting to the host.
                   *     Defaults to HTTP. */
                  scheme?: string;
                };
                /**
                 * Format: int32
                 * @description Number of seconds after the container has started before liveness probes are initiated.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                initialDelaySeconds?: number;
                /**
                 * Format: int32
                 * @description How often (in seconds) to perform the probe.
                 *     Default to 10 seconds. Minimum value is 1.
                 */
                periodSeconds?: number;
                /**
                 * Format: int32
                 * @description Minimum consecutive successes for the probe to be considered successful after having failed.
                 *     Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                successThreshold?: number;
                /** @description TCPSocket specifies a connection to a TCP port. */
                tcpSocket?: {
                  /** @description Optional: Host name to connect to, defaults to the pod IP. */
                  host?: string;
                  /** @description Number or name of the port to access on the container.
                   *     Number must be in the range 1 to 65535.
                   *     Name must be an IANA_SVC_NAME. */
                  port: number | string;
                };
                /**
                 * Format: int64
                 * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
                 *     The grace period is the duration in seconds after the processes running in the pod are sent
                 *     a termination signal and the time when the processes are forcibly halted with a kill signal.
                 *     Set this value longer than the expected cleanup time for your process.
                 *     If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this
                 *     value overrides the value provided by the pod spec.
                 *     Value must be non-negative integer. The value zero indicates stop immediately via
                 *     the kill signal (no opportunity to shut down).
                 *     This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate.
                 *     Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                terminationGracePeriodSeconds?: number;
                /**
                 * Format: int32
                 * @description Number of seconds after which the probe times out.
                 *     Defaults to 1 second. Minimum value is 1.
                 *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                timeoutSeconds?: number;
              };
              /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this
               *     is not set, reads from stdin in the container will always result in EOF.
               *     Default is false. */
              stdin?: boolean;
              /** @description Whether the container runtime should close the stdin channel after it has been opened by
               *     a single attach. When stdin is true the stdin stream will remain open across multiple attach
               *     sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
               *     first client attaches to stdin, and then remains open and accepts data until the client disconnects,
               *     at which time stdin is closed and remains closed until the container is restarted. If this
               *     flag is false, a container processes that reads from stdin will never receive an EOF.
               *     Default is false */
              stdinOnce?: boolean;
              /** @description Optional: Path at which the file to which the container's termination message
               *     will be written is mounted into the container's filesystem.
               *     Message written is intended to be brief final status, such as an assertion failure message.
               *     Will be truncated by the node if greater than 4096 bytes. The total message length across
               *     all containers will be limited to 12kb.
               *     Defaults to /dev/termination-log.
               *     Cannot be updated. */
              terminationMessagePath?: string;
              /** @description Indicate how the termination message should be populated. File will use the contents of
               *     terminationMessagePath to populate the container status message on both success and failure.
               *     FallbackToLogsOnError will use the last chunk of container log output if the termination
               *     message file is empty and the container exited with an error.
               *     The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
               *     Defaults to File.
               *     Cannot be updated. */
              terminationMessagePolicy?: string;
              /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true.
               *     Default is false. */
              tty?: boolean;
              /** @description volumeDevices is the list of block devices to be used by the container. */
              volumeDevices?: {
                /** @description devicePath is the path inside of the container that the device will be mapped to. */
                devicePath: string;
                /** @description name must match the name of a persistentVolumeClaim in the pod */
                name: string;
              }[];
              /** @description Pod volumes to mount into the container's filesystem.
               *     Cannot be updated. */
              volumeMounts?: {
                /** @description Path within the container at which the volume should be mounted.  Must
                 *     not contain ':'. */
                mountPath: string;
                /** @description mountPropagation determines how mounts are propagated from the host
                 *     to container and the other way around.
                 *     When not set, MountPropagationNone is used.
                 *     This field is beta in 1.10.
                 *     When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
                 *     (which defaults to None). */
                mountPropagation?: string;
                /** @description This must match the Name of a Volume. */
                name: string;
                /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
                 *     Defaults to false. */
                readOnly?: boolean;
                /** @description RecursiveReadOnly specifies whether read-only mounts should be handled
                 *     recursively.
                 *
                 *     If ReadOnly is false, this field has no meaning and must be unspecified.
                 *
                 *     If ReadOnly is true, and this field is set to Disabled, the mount is not made
                 *     recursively read-only.  If this field is set to IfPossible, the mount is made
                 *     recursively read-only, if it is supported by the container runtime.  If this
                 *     field is set to Enabled, the mount is made recursively read-only if it is
                 *     supported by the container runtime, otherwise the pod will not be started and
                 *     an error will be generated to indicate the reason.
                 *
                 *     If this field is set to IfPossible or Enabled, MountPropagation must be set to
                 *     None (or be unspecified, which defaults to None).
                 *
                 *     If this field is not specified, it is treated as an equivalent of Disabled. */
                recursiveReadOnly?: string;
                /** @description Path within the volume from which the container's volume should be mounted.
                 *     Defaults to "" (volume's root). */
                subPath?: string;
                /** @description Expanded path within the volume from which the container's volume should be mounted.
                 *     Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
                 *     Defaults to "" (volume's root).
                 *     SubPathExpr and SubPath are mutually exclusive. */
                subPathExpr?: string;
              }[];
              /** @description Container's working directory.
               *     If not specified, the container runtime's default will be used, which
               *     might be configured in the container image.
               *     Cannot be updated. */
              workingDir?: string;
            }[];
            /** @description NodeName indicates in which node this pod is scheduled.
             *     If empty, this pod is a candidate for scheduling by the scheduler defined in schedulerName.
             *     Once this field is set, the kubelet for this node becomes responsible for the lifecycle of this pod.
             *     This field should not be used to express a desire for the pod to be scheduled on a specific node.
             *     https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename */
            nodeName?: string;
            /** @description NodeSelector is a selector which must be true for the pod to fit on a node.
             *     Selector which must match a node's labels for the pod to be scheduled on that node.
             *     More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
            nodeSelector?: {
              [key: string]: string;
            };
            /** @description Specifies the OS of the containers in the pod.
             *     Some pod and container fields are restricted if this is set.
             *
             *     If the OS field is set to linux, the following fields must be unset:
             *     -securityContext.windowsOptions
             *
             *     If the OS field is set to windows, following fields must be unset:
             *     - spec.hostPID
             *     - spec.hostIPC
             *     - spec.hostUsers
             *     - spec.securityContext.appArmorProfile
             *     - spec.securityContext.seLinuxOptions
             *     - spec.securityContext.seccompProfile
             *     - spec.securityContext.fsGroup
             *     - spec.securityContext.fsGroupChangePolicy
             *     - spec.securityContext.sysctls
             *     - spec.shareProcessNamespace
             *     - spec.securityContext.runAsUser
             *     - spec.securityContext.runAsGroup
             *     - spec.securityContext.supplementalGroups
             *     - spec.securityContext.supplementalGroupsPolicy
             *     - spec.containers[*].securityContext.appArmorProfile
             *     - spec.containers[*].securityContext.seLinuxOptions
             *     - spec.containers[*].securityContext.seccompProfile
             *     - spec.containers[*].securityContext.capabilities
             *     - spec.containers[*].securityContext.readOnlyRootFilesystem
             *     - spec.containers[*].securityContext.privileged
             *     - spec.containers[*].securityContext.allowPrivilegeEscalation
             *     - spec.containers[*].securityContext.procMount
             *     - spec.containers[*].securityContext.runAsUser
             *     - spec.containers[*].securityContext.runAsGroup */
            os?: {
              /** @description Name is the name of the operating system. The currently supported values are linux and windows.
               *     Additional value may be defined in future and can be one of:
               *     https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration
               *     Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
              name: string;
            };
            /** @description Overhead represents the resource overhead associated with running a pod for a given RuntimeClass.
             *     This field will be autopopulated at admission time by the RuntimeClass admission controller. If
             *     the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests.
             *     The RuntimeClass admission controller will reject Pod create requests which have the overhead already
             *     set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value
             *     defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero.
             *     More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md */
            overhead?: {
              [key: string]: number | string;
            };
            /** @description PreemptionPolicy is the Policy for preempting pods with lower priority.
             *     One of Never, PreemptLowerPriority.
             *     Defaults to PreemptLowerPriority if unset. */
            preemptionPolicy?: string;
            /**
             * Format: int32
             * @description The priority value. Various system components use this field to find the
             *     priority of the pod. When Priority Admission Controller is enabled, it
             *     prevents users from setting this field. The admission controller populates
             *     this field from PriorityClassName.
             *     The higher the value, the higher the priority.
             */
            priority?: number;
            /** @description If specified, indicates the pod's priority. "system-node-critical" and
             *     "system-cluster-critical" are two special keywords which indicate the
             *     highest priorities with the former being the highest priority. Any other
             *     name must be defined by creating a PriorityClass object with that name.
             *     If not specified, the pod priority will be default or zero if there is no
             *     default. */
            priorityClassName?: string;
            /** @description If specified, all readiness gates will be evaluated for pod readiness.
             *     A pod is ready when all its containers are ready AND
             *     all conditions specified in the readiness gates have status equal to "True"
             *     More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
            readinessGates?: {
              /** @description ConditionType refers to a condition in the pod's condition list with matching type. */
              conditionType: string;
            }[];
            /** @description ResourceClaims defines which ResourceClaims must be allocated
             *     and reserved before the Pod is allowed to start. The resources
             *     will be made available to those containers which consume them
             *     by name.
             *
             *     This is an alpha field and requires enabling the
             *     DynamicResourceAllocation feature gate.
             *
             *     This field is immutable. */
            resourceClaims?: {
              /** @description Name uniquely identifies this resource claim inside the pod.
               *     This must be a DNS_LABEL. */
              name: string;
              /** @description ResourceClaimName is the name of a ResourceClaim object in the same
               *     namespace as this pod.
               *
               *     Exactly one of ResourceClaimName and ResourceClaimTemplateName must
               *     be set. */
              resourceClaimName?: string;
              /** @description ResourceClaimTemplateName is the name of a ResourceClaimTemplate
               *     object in the same namespace as this pod.
               *
               *     The template will be used to create a new ResourceClaim, which will
               *     be bound to this pod. When this pod is deleted, the ResourceClaim
               *     will also be deleted. The pod name and resource name, along with a
               *     generated component, will be used to form a unique name for the
               *     ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
               *
               *     This field is immutable and no changes will be made to the
               *     corresponding ResourceClaim by the control plane after creating the
               *     ResourceClaim.
               *
               *     Exactly one of ResourceClaimName and ResourceClaimTemplateName must
               *     be set. */
              resourceClaimTemplateName?: string;
            }[];
            /** @description Resources is the total amount of CPU and Memory resources required by all
             *     containers in the pod. It supports specifying Requests and Limits for
             *     "cpu" and "memory" resource names only. ResourceClaims are not supported.
             *
             *     This field enables fine-grained control over resource allocation for the
             *     entire pod, allowing resource sharing among containers in a pod.
             *
             *     This is an alpha field and requires enabling the PodLevelResources feature
             *     gate. */
            resources?: {
              /** @description Claims lists the names of resources, defined in spec.resourceClaims,
               *     that are used by this container.
               *
               *     This is an alpha field and requires enabling the
               *     DynamicResourceAllocation feature gate.
               *
               *     This field is immutable. It can only be set for containers. */
              claims?: {
                /** @description Name must match the name of one entry in pod.spec.resourceClaims of
                 *     the Pod where this field is used. It makes that resource available
                 *     inside a container. */
                name: string;
                /** @description Request is the name chosen for a request in the referenced claim.
                 *     If empty, everything from the claim is made available, otherwise
                 *     only the result of this request. */
                request?: string;
              }[];
              /** @description Limits describes the maximum amount of compute resources allowed.
               *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
              limits?: {
                [key: string]: number | string;
              };
              /** @description Requests describes the minimum amount of compute resources required.
               *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
               *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
               *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
              requests?: {
                [key: string]: number | string;
              };
            };
            /** @description Restart policy for all containers within the pod.
             *     One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted.
             *     Default to Always.
             *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
            restartPolicy?: string;
            /** @description RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used
             *     to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run.
             *     If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an
             *     empty definition that uses the default runtime handler.
             *     More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class */
            runtimeClassName?: string;
            /** @description If specified, the pod will be dispatched by specified scheduler.
             *     If not specified, the pod will be dispatched by default scheduler. */
            schedulerName?: string;
            /** @description SchedulingGates is an opaque list of values that if specified will block scheduling the pod.
             *     If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the
             *     scheduler will not attempt to schedule the pod.
             *
             *     SchedulingGates can only be set at pod creation time, and be removed only afterwards. */
            schedulingGates?: {
              /** @description Name of the scheduling gate.
               *     Each scheduling gate must have a unique name field. */
              name: string;
            }[];
            /** @description SecurityContext holds pod-level security attributes and common container settings.
             *     Optional: Defaults to empty.  See type description for default values of each field. */
            securityContext?: {
              /** @description appArmorProfile is the AppArmor options to use by the containers in this pod.
               *     Note that this field cannot be set when spec.os.name is windows. */
              appArmorProfile?: {
                /** @description localhostProfile indicates a profile loaded on the node that should be used.
                 *     The profile must be preconfigured on the node to work.
                 *     Must match the loaded name of the profile.
                 *     Must be set if and only if type is "Localhost". */
                localhostProfile?: string;
                /** @description type indicates which kind of AppArmor profile will be applied.
                 *     Valid options are:
                 *       Localhost - a profile pre-loaded on the node.
                 *       RuntimeDefault - the container runtime's default profile.
                 *       Unconfined - no AppArmor enforcement. */
                type: string;
              };
              /**
               * Format: int64
               * @description A special supplemental group that applies to all containers in a pod.
               *     Some volume types allow the Kubelet to change the ownership of that volume
               *     to be owned by the pod:
               *
               *     1. The owning GID will be the FSGroup
               *     2. The setgid bit is set (new files created in the volume will be owned by FSGroup)
               *     3. The permission bits are OR'd with rw-rw----
               *
               *     If unset, the Kubelet will not modify the ownership and permissions of any volume.
               *     Note that this field cannot be set when spec.os.name is windows.
               */
              fsGroup?: number;
              /** @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume
               *     before being exposed inside Pod. This field will only apply to
               *     volume types which support fsGroup based ownership(and permissions).
               *     It will have no effect on ephemeral volume types such as: secret, configmaps
               *     and emptydir.
               *     Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used.
               *     Note that this field cannot be set when spec.os.name is windows. */
              fsGroupChangePolicy?: string;
              /**
               * Format: int64
               * @description The GID to run the entrypoint of the container process.
               *     Uses runtime default if unset.
               *     May also be set in SecurityContext.  If set in both SecurityContext and
               *     PodSecurityContext, the value specified in SecurityContext takes precedence
               *     for that container.
               *     Note that this field cannot be set when spec.os.name is windows.
               */
              runAsGroup?: number;
              /** @description Indicates that the container must run as a non-root user.
               *     If true, the Kubelet will validate the image at runtime to ensure that it
               *     does not run as UID 0 (root) and fail to start the container if it does.
               *     If unset or false, no such validation will be performed.
               *     May also be set in SecurityContext.  If set in both SecurityContext and
               *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
              runAsNonRoot?: boolean;
              /**
               * Format: int64
               * @description The UID to run the entrypoint of the container process.
               *     Defaults to user specified in image metadata if unspecified.
               *     May also be set in SecurityContext.  If set in both SecurityContext and
               *     PodSecurityContext, the value specified in SecurityContext takes precedence
               *     for that container.
               *     Note that this field cannot be set when spec.os.name is windows.
               */
              runAsUser?: number;
              /** @description seLinuxChangePolicy defines how the container's SELinux label is applied to all volumes used by the Pod.
               *     It has no effect on nodes that do not support SELinux or to volumes does not support SELinux.
               *     Valid values are "MountOption" and "Recursive".
               *
               *     "Recursive" means relabeling of all files on all Pod volumes by the container runtime.
               *     This may be slow for large volumes, but allows mixing privileged and unprivileged Pods sharing the same volume on the same node.
               *
               *     "MountOption" mounts all eligible Pod volumes with `-o context` mount option.
               *     This requires all Pods that share the same volume to use the same SELinux label.
               *     It is not possible to share the same volume among privileged and unprivileged Pods.
               *     Eligible volumes are in-tree FibreChannel and iSCSI volumes, and all CSI volumes
               *     whose CSI driver announces SELinux support by setting spec.seLinuxMount: true in their
               *     CSIDriver instance. Other volumes are always re-labelled recursively.
               *     "MountOption" value is allowed only when SELinuxMount feature gate is enabled.
               *
               *     If not specified and SELinuxMount feature gate is enabled, "MountOption" is used.
               *     If not specified and SELinuxMount feature gate is disabled, "MountOption" is used for ReadWriteOncePod volumes
               *     and "Recursive" for all other volumes.
               *
               *     This field affects only Pods that have SELinux label set, either in PodSecurityContext or in SecurityContext of all containers.
               *
               *     All Pods that use the same volume should use the same seLinuxChangePolicy, otherwise some pods can get stuck in ContainerCreating state.
               *     Note that this field cannot be set when spec.os.name is windows. */
              seLinuxChangePolicy?: string;
              /** @description The SELinux context to be applied to all containers.
               *     If unspecified, the container runtime will allocate a random SELinux context for each
               *     container.  May also be set in SecurityContext.  If set in
               *     both SecurityContext and PodSecurityContext, the value specified in SecurityContext
               *     takes precedence for that container.
               *     Note that this field cannot be set when spec.os.name is windows. */
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
              /** @description The seccomp options to use by the containers in this pod.
               *     Note that this field cannot be set when spec.os.name is windows. */
              seccompProfile?: {
                /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                 *     The profile must be preconfigured on the node to work.
                 *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                 *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                localhostProfile?: string;
                /** @description type indicates which kind of seccomp profile will be applied.
                 *     Valid options are:
                 *
                 *     Localhost - a profile defined in a file on the node should be used.
                 *     RuntimeDefault - the container runtime default profile should be used.
                 *     Unconfined - no profile should be applied. */
                type: string;
              };
              /** @description A list of groups applied to the first process run in each container, in
               *     addition to the container's primary GID and fsGroup (if specified).  If
               *     the SupplementalGroupsPolicy feature is enabled, the
               *     supplementalGroupsPolicy field determines whether these are in addition
               *     to or instead of any group memberships defined in the container image.
               *     If unspecified, no additional groups are added, though group memberships
               *     defined in the container image may still be used, depending on the
               *     supplementalGroupsPolicy field.
               *     Note that this field cannot be set when spec.os.name is windows. */
              supplementalGroups?: number[];
              /** @description Defines how supplemental groups of the first container processes are calculated.
               *     Valid values are "Merge" and "Strict". If not specified, "Merge" is used.
               *     (Alpha) Using the field requires the SupplementalGroupsPolicy feature gate to be enabled
               *     and the container runtime must implement support for this feature.
               *     Note that this field cannot be set when spec.os.name is windows. */
              supplementalGroupsPolicy?: string;
              /** @description Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported
               *     sysctls (by the container runtime) might fail to launch.
               *     Note that this field cannot be set when spec.os.name is windows. */
              sysctls?: {
                /** @description Name of a property to set */
                name: string;
                /** @description Value of a property to set */
                value: string;
              }[];
              /** @description The Windows specific settings applied to all containers.
               *     If unspecified, the options within a container's SecurityContext will be used.
               *     If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
               *     Note that this field cannot be set when spec.os.name is linux. */
              windowsOptions?: {
                /** @description GMSACredentialSpec is where the GMSA admission webhook
                 *     (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the
                 *     GMSA credential spec named by the GMSACredentialSpecName field. */
                gmsaCredentialSpec?: string;
                /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
                gmsaCredentialSpecName?: string;
                /** @description HostProcess determines if a container should be run as a 'Host Process' container.
                 *     All of a Pod's containers must have the same effective HostProcess value
                 *     (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).
                 *     In addition, if HostProcess is true then HostNetwork must also be set to true. */
                hostProcess?: boolean;
                /** @description The UserName in Windows to run the entrypoint of the container process.
                 *     Defaults to the user specified in image metadata if unspecified.
                 *     May also be set in PodSecurityContext. If set in both SecurityContext and
                 *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                runAsUserName?: string;
              };
            };
            /** @description DeprecatedServiceAccount is a deprecated alias for ServiceAccountName.
             *     Deprecated: Use serviceAccountName instead. */
            serviceAccount?: string;
            /** @description ServiceAccountName is the name of the ServiceAccount to use to run this pod.
             *     More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
            serviceAccountName?: string;
            /** @description If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default).
             *     In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname).
             *     In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN.
             *     If a pod does not have FQDN, this has no effect.
             *     Default to false. */
            setHostnameAsFQDN?: boolean;
            /** @description Share a single process namespace between all of the containers in a pod.
             *     When this is set containers will be able to view and signal processes from other containers
             *     in the same pod, and the first process in each container will not be assigned PID 1.
             *     HostPID and ShareProcessNamespace cannot both be set.
             *     Optional: Default to false. */
            shareProcessNamespace?: boolean;
            /** @description If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>".
             *     If not specified, the pod will not have a domainname at all. */
            subdomain?: string;
            /**
             * Format: int64
             * @description Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request.
             *     Value must be non-negative integer. The value zero indicates stop immediately via
             *     the kill signal (no opportunity to shut down).
             *     If this value is nil, the default grace period will be used instead.
             *     The grace period is the duration in seconds after the processes running in the pod are sent
             *     a termination signal and the time when the processes are forcibly halted with a kill signal.
             *     Set this value longer than the expected cleanup time for your process.
             *     Defaults to 30 seconds.
             */
            terminationGracePeriodSeconds?: number;
            /** @description If specified, the pod's tolerations. */
            tolerations?: {
              /** @description Effect indicates the taint effect to match. Empty means match all taint effects.
               *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
              effect?: string;
              /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
               *     If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
              key?: string;
              /** @description Operator represents a key's relationship to the value.
               *     Valid operators are Exists and Equal. Defaults to Equal.
               *     Exists is equivalent to wildcard for value, so that a pod can
               *     tolerate all taints of a particular category. */
              operator?: string;
              /**
               * Format: int64
               * @description TolerationSeconds represents the period of time the toleration (which must be
               *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
               *     it is not set, which means tolerate the taint forever (do not evict). Zero and
               *     negative values will be treated as 0 (evict immediately) by the system.
               */
              tolerationSeconds?: number;
              /** @description Value is the taint value the toleration matches to.
               *     If the operator is Exists, the value should be empty, otherwise just a regular string. */
              value?: string;
            }[];
            /** @description TopologySpreadConstraints describes how a group of pods ought to spread across topology
             *     domains. Scheduler will schedule pods in a way which abides by the constraints.
             *     All topologySpreadConstraints are ANDed. */
            topologySpreadConstraints?: {
              /** @description LabelSelector is used to find matching pods.
               *     Pods that match this label selector are counted to determine the number of pods
               *     in their corresponding topology domain. */
              labelSelector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string;
                  /** @description operator represents a key's relationship to a set of values.
                   *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string;
                  /** @description values is an array of string values. If the operator is In or NotIn,
                   *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                   *     the values array must be empty. This array is replaced during a strategic
                   *     merge patch. */
                  values?: string[];
                }[];
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                 *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                 *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string;
                };
              };
              /** @description MatchLabelKeys is a set of pod label keys to select the pods over which
               *     spreading will be calculated. The keys are used to lookup values from the
               *     incoming pod labels, those key-value labels are ANDed with labelSelector
               *     to select the group of existing pods over which spreading will be calculated
               *     for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
               *     MatchLabelKeys cannot be set when LabelSelector isn't set.
               *     Keys that don't exist in the incoming pod labels will
               *     be ignored. A null or empty list means only match against labelSelector.
               *
               *     This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default). */
              matchLabelKeys?: string[];
              /**
               * Format: int32
               * @description MaxSkew describes the degree to which pods may be unevenly distributed.
               *     When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference
               *     between the number of matching pods in the target topology and the global minimum.
               *     The global minimum is the minimum number of matching pods in an eligible domain
               *     or zero if the number of eligible domains is less than MinDomains.
               *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
               *     labelSelector spread as 2/2/1:
               *     In this case, the global minimum is 1.
               *     | zone1 | zone2 | zone3 |
               *     |  P P  |  P P  |   P   |
               *     - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
               *     scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
               *     violate MaxSkew(1).
               *     - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
               *     When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence
               *     to topologies that satisfy it.
               *     It's a required field. Default value is 1 and 0 is not allowed.
               */
              maxSkew: number;
              /**
               * Format: int32
               * @description MinDomains indicates a minimum number of eligible domains.
               *     When the number of eligible domains with matching topology keys is less than minDomains,
               *     Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
               *     And when the number of eligible domains with matching topology keys equals or greater than minDomains,
               *     this value has no effect on scheduling.
               *     As a result, when the number of eligible domains is less than minDomains,
               *     scheduler won't schedule more than maxSkew Pods to those domains.
               *     If value is nil, the constraint behaves as if MinDomains is equal to 1.
               *     Valid values are integers greater than 0.
               *     When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
               *
               *     For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same
               *     labelSelector spread as 2/2/2:
               *     | zone1 | zone2 | zone3 |
               *     |  P P  |  P P  |  P P  |
               *     The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0.
               *     In this situation, new pod with the same labelSelector cannot be scheduled,
               *     because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones,
               *     it will violate MaxSkew.
               */
              minDomains?: number;
              /** @description NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
               *     when calculating pod topology spread skew. Options are:
               *     - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
               *     - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
               *
               *     If this value is nil, the behavior is equivalent to the Honor policy.
               *     This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag. */
              nodeAffinityPolicy?: string;
              /** @description NodeTaintsPolicy indicates how we will treat node taints when calculating
               *     pod topology spread skew. Options are:
               *     - Honor: nodes without taints, along with tainted nodes for which the incoming pod
               *     has a toleration, are included.
               *     - Ignore: node taints are ignored. All nodes are included.
               *
               *     If this value is nil, the behavior is equivalent to the Ignore policy.
               *     This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag. */
              nodeTaintsPolicy?: string;
              /** @description TopologyKey is the key of node labels. Nodes that have a label with this key
               *     and identical values are considered to be in the same topology.
               *     We consider each <key, value> as a "bucket", and try to put balanced number
               *     of pods into each bucket.
               *     We define a domain as a particular instance of a topology.
               *     Also, we define an eligible domain as a domain whose nodes meet the requirements of
               *     nodeAffinityPolicy and nodeTaintsPolicy.
               *     e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
               *     And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
               *     It's a required field. */
              topologyKey: string;
              /** @description WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
               *     the spread constraint.
               *     - DoNotSchedule (default) tells the scheduler not to schedule it.
               *     - ScheduleAnyway tells the scheduler to schedule the pod in any location,
               *       but giving higher precedence to topologies that would help reduce the
               *       skew.
               *     A constraint is considered "Unsatisfiable" for an incoming pod
               *     if and only if every possible node assignment for that pod would violate
               *     "MaxSkew" on some topology.
               *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
               *     labelSelector spread as 3/1/1:
               *     | zone1 | zone2 | zone3 |
               *     | P P P |   P   |   P   |
               *     If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
               *     to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
               *     MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
               *     won't make it *more* imbalanced.
               *     It's a required field. */
              whenUnsatisfiable: string;
            }[];
            /** @description List of volumes that can be mounted by containers belonging to the pod.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes */
            volumes?: {
              /** @description awsElasticBlockStore represents an AWS Disk resource that is attached to a
               *     kubelet's host machine and then exposed to the pod.
               *     Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree
               *     awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver.
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
              awsElasticBlockStore?: {
                /** @description fsType is the filesystem type of the volume that you want to mount.
                 *     Tip: Ensure that the filesystem type is supported by the host operating system.
                 *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
                fsType?: string;
                /**
                 * Format: int32
                 * @description partition is the partition in the volume that you want to mount.
                 *     If omitted, the default is to mount by volume name.
                 *     Examples: For volume /dev/sda1, you specify the partition as "1".
                 *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                 */
                partition?: number;
                /** @description readOnly value true will force the readOnly setting in VolumeMounts.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
                readOnly?: boolean;
                /** @description volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume).
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
                volumeID: string;
              };
              /** @description azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
               *     Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type
               *     are redirected to the disk.csi.azure.com CSI driver. */
              azureDisk?: {
                /** @description cachingMode is the Host Caching mode: None, Read Only, Read Write. */
                cachingMode?: string;
                /** @description diskName is the Name of the data disk in the blob storage */
                diskName: string;
                /** @description diskURI is the URI of data disk in the blob storage */
                diskURI: string;
                /**
                 * @description fsType is Filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 * @default ext4
                 */
                fsType: string;
                /** @description kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
                kind?: string;
                /**
                 * @description readOnly Defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts.
                 * @default false
                 */
                readOnly: boolean;
              };
              /** @description azureFile represents an Azure File Service mount on the host and bind mount to the pod.
               *     Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type
               *     are redirected to the file.csi.azure.com CSI driver. */
              azureFile?: {
                /** @description readOnly defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description secretName is the  name of secret that contains Azure Storage Account Name and Key */
                secretName: string;
                /** @description shareName is the azure share Name */
                shareName: string;
              };
              /** @description cephFS represents a Ceph FS mount on the host that shares a pod's lifetime.
               *     Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported. */
              cephfs?: {
                /** @description monitors is Required: Monitors is a collection of Ceph monitors
                 *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
                monitors: string[];
                /** @description path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
                path?: string;
                /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts.
                 *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
                readOnly?: boolean;
                /** @description secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret
                 *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
                secretFile?: string;
                /** @description secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty.
                 *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description user is optional: User is the rados user name, default is admin
                 *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
                user?: string;
              };
              /** @description cinder represents a cinder volume attached and mounted on kubelets host machine.
               *     Deprecated: Cinder is deprecated. All operations for the in-tree cinder type
               *     are redirected to the cinder.csi.openstack.org CSI driver.
               *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
              cinder?: {
                /** @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
                fsType?: string;
                /** @description readOnly defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts.
                 *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
                readOnly?: boolean;
                /** @description secretRef is optional: points to a secret object containing parameters used to connect
                 *     to OpenStack. */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description volumeID used to identify the volume in cinder.
                 *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
                volumeID: string;
              };
              /** @description configMap represents a configMap that should populate this volume */
              configMap?: {
                /**
                 * Format: int32
                 * @description defaultMode is optional: mode bits used to set permissions on created files by default.
                 *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                 *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                 *     Defaults to 0644.
                 *     Directories within the path are not affected by this setting.
                 *     This might be in conflict with other options that affect the file
                 *     mode, like fsGroup, and the result can be other mode bits set.
                 */
                defaultMode?: number;
                /** @description items if unspecified, each key-value pair in the Data field of the referenced
                 *     ConfigMap will be projected into the volume as a file whose name is the
                 *     key and content is the value. If specified, the listed keys will be
                 *     projected into the specified paths, and unlisted keys will not be
                 *     present. If a key is specified which is not present in the ConfigMap,
                 *     the volume setup will error unless it is marked optional. Paths must be
                 *     relative and may not contain the '..' path or start with '..'. */
                items?: {
                  /** @description key is the key to project. */
                  key: string;
                  /**
                   * Format: int32
                   * @description mode is Optional: mode bits used to set permissions on this file.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     If not specified, the volume defaultMode will be used.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description path is the relative path of the file to map the key to.
                   *     May not be an absolute path.
                   *     May not contain the path element '..'.
                   *     May not start with the string '..'. */
                  path: string;
                }[];
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description optional specify whether the ConfigMap or its keys must be defined */
                optional?: boolean;
              };
              /** @description csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers. */
              csi?: {
                /** @description driver is the name of the CSI driver that handles this volume.
                 *     Consult with your admin for the correct name as registered in the cluster. */
                driver: string;
                /** @description fsType to mount. Ex. "ext4", "xfs", "ntfs".
                 *     If not provided, the empty value is passed to the associated CSI driver
                 *     which will determine the default filesystem to apply. */
                fsType?: string;
                /** @description nodePublishSecretRef is a reference to the secret object containing
                 *     sensitive information to pass to the CSI driver to complete the CSI
                 *     NodePublishVolume and NodeUnpublishVolume calls.
                 *     This field is optional, and  may be empty if no secret is required. If the
                 *     secret object contains more than one secret, all secret references are passed. */
                nodePublishSecretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description readOnly specifies a read-only configuration for the volume.
                 *     Defaults to false (read/write). */
                readOnly?: boolean;
                /** @description volumeAttributes stores driver-specific properties that are passed to the CSI
                 *     driver. Consult your driver's documentation for supported values. */
                volumeAttributes?: {
                  [key: string]: string;
                };
              };
              /** @description downwardAPI represents downward API about the pod that should populate this volume */
              downwardAPI?: {
                /**
                 * Format: int32
                 * @description Optional: mode bits to use on created files by default. Must be a
                 *     Optional: mode bits used to set permissions on created files by default.
                 *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                 *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                 *     Defaults to 0644.
                 *     Directories within the path are not affected by this setting.
                 *     This might be in conflict with other options that affect the file
                 *     mode, like fsGroup, and the result can be other mode bits set.
                 */
                defaultMode?: number;
                /** @description Items is a list of downward API volume file */
                items?: {
                  /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                  fieldRef?: {
                    /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                    apiVersion?: string;
                    /** @description Path of the field to select in the specified API version. */
                    fieldPath: string;
                  };
                  /**
                   * Format: int32
                   * @description Optional: mode bits used to set permissions on this file, must be an octal value
                   *     between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     If not specified, the volume defaultMode will be used.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                  path: string;
                  /** @description Selects a resource of the container: only resources limits and requests
                   *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
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
              /** @description emptyDir represents a temporary directory that shares a pod's lifetime.
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
              emptyDir?: {
                /** @description medium represents what type of storage medium should back this directory.
                 *     The default is "" which means to use the node's default medium.
                 *     Must be an empty string (default) or Memory.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
                medium?: string;
                /** @description sizeLimit is the total amount of local storage required for this EmptyDir volume.
                 *     The size limit is also applicable for memory medium.
                 *     The maximum usage on memory medium EmptyDir would be the minimum value between
                 *     the SizeLimit specified here and the sum of memory limits of all containers in a pod.
                 *     The default is nil which means that the limit is undefined.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
                sizeLimit?: number | string;
              };
              /** @description ephemeral represents a volume that is handled by a cluster storage driver.
               *     The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts,
               *     and deleted when the pod is removed.
               *
               *     Use this if:
               *     a) the volume is only needed while the pod runs,
               *     b) features of normal volumes like restoring from snapshot or capacity
               *        tracking are needed,
               *     c) the storage driver is specified through a storage class, and
               *     d) the storage driver supports dynamic volume provisioning through
               *        a PersistentVolumeClaim (see EphemeralVolumeSource for more
               *        information on the connection between this volume type
               *        and PersistentVolumeClaim).
               *
               *     Use PersistentVolumeClaim or one of the vendor-specific
               *     APIs for volumes that persist for longer than the lifecycle
               *     of an individual pod.
               *
               *     Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to
               *     be used that way - see the documentation of the driver for
               *     more information.
               *
               *     A pod can use both types of ephemeral volumes and
               *     persistent volumes at the same time. */
              ephemeral?: {
                /** @description Will be used to create a stand-alone PVC to provision the volume.
                 *     The pod in which this EphemeralVolumeSource is embedded will be the
                 *     owner of the PVC, i.e. the PVC will be deleted together with the
                 *     pod.  The name of the PVC will be `<pod name>-<volume name>` where
                 *     `<volume name>` is the name from the `PodSpec.Volumes` array
                 *     entry. Pod validation will reject the pod if the concatenated name
                 *     is not valid for a PVC (for example, too long).
                 *
                 *     An existing PVC with that name that is not owned by the pod
                 *     will *not* be used for the pod to avoid using an unrelated
                 *     volume by mistake. Starting the pod is then blocked until
                 *     the unrelated PVC is removed. If such a pre-created PVC is
                 *     meant to be used by the pod, the PVC has to updated with an
                 *     owner reference to the pod once the pod exists. Normally
                 *     this should not be necessary, but it may be useful when
                 *     manually reconstructing a broken cluster.
                 *
                 *     This field is read-only and no changes will be made by Kubernetes
                 *     to the PVC after it has been created.
                 *
                 *     Required, must not be nil. */
                volumeClaimTemplate?: {
                  /** @description May contain labels and annotations that will be copied into the PVC
                   *     when creating it. No other fields are allowed and will be rejected during
                   *     validation. */
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
                  /** @description The specification for the PersistentVolumeClaim. The entire content is
                   *     copied unchanged into the PVC that gets created from this
                   *     template. The same fields as in a PersistentVolumeClaim
                   *     are also valid here. */
                  spec: {
                    /** @description accessModes contains the desired access modes the volume should have.
                     *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
                    accessModes?: string[];
                    /** @description dataSource field can be used to specify either:
                     *     * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                     *     * An existing PVC (PersistentVolumeClaim)
                     *     If the provisioner or an external controller can support the specified data source,
                     *     it will create a new volume based on the contents of the specified data source.
                     *     When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                     *     and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                     *     If the namespace is specified, then dataSourceRef will not be copied to dataSource. */
                    dataSource?: {
                      /** @description APIGroup is the group for the resource being referenced.
                       *     If APIGroup is not specified, the specified Kind must be in the core API group.
                       *     For any other third-party types, APIGroup is required. */
                      apiGroup?: string;
                      /** @description Kind is the type of resource being referenced */
                      kind: string;
                      /** @description Name is the name of resource being referenced */
                      name: string;
                    };
                    /** @description dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                     *     volume is desired. This may be any object from a non-empty API group (non
                     *     core object) or a PersistentVolumeClaim object.
                     *     When this field is specified, volume binding will only succeed if the type of
                     *     the specified object matches some installed volume populator or dynamic
                     *     provisioner.
                     *     This field will replace the functionality of the dataSource field and as such
                     *     if both fields are non-empty, they must have the same value. For backwards
                     *     compatibility, when namespace isn't specified in dataSourceRef,
                     *     both fields (dataSource and dataSourceRef) will be set to the same
                     *     value automatically if one of them is empty and the other is non-empty.
                     *     When namespace is specified in dataSourceRef,
                     *     dataSource isn't set to the same value and must be empty.
                     *     There are three important differences between dataSource and dataSourceRef:
                     *     * While dataSource only allows two specific types of objects, dataSourceRef
                     *       allows any non-core object, as well as PersistentVolumeClaim objects.
                     *     * While dataSource ignores disallowed values (dropping them), dataSourceRef
                     *       preserves all values, and generates an error if a disallowed value is
                     *       specified.
                     *     * While dataSource only allows local objects, dataSourceRef allows objects
                     *       in any namespaces.
                     *     (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                     *     (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled. */
                    dataSourceRef?: {
                      /** @description APIGroup is the group for the resource being referenced.
                       *     If APIGroup is not specified, the specified Kind must be in the core API group.
                       *     For any other third-party types, APIGroup is required. */
                      apiGroup?: string;
                      /** @description Kind is the type of resource being referenced */
                      kind: string;
                      /** @description Name is the name of resource being referenced */
                      name: string;
                      /** @description Namespace is the namespace of resource being referenced
                       *     Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                       *     (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled. */
                      namespace?: string;
                    };
                    /** @description resources represents the minimum resources the volume should have.
                     *     If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                     *     that are lower than previous value but must still be higher than capacity recorded in the
                     *     status field of the claim.
                     *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources */
                    resources?: {
                      /** @description Limits describes the maximum amount of compute resources allowed.
                       *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                      limits?: {
                        [key: string]: number | string;
                      };
                      /** @description Requests describes the minimum amount of compute resources required.
                       *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                       *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                       *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
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
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description storageClassName is the name of the StorageClass required by the claim.
                     *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
                    storageClassName?: string;
                    /** @description volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                     *     If specified, the CSI driver will create or update the volume with the attributes defined
                     *     in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                     *     it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
                     *     will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
                     *     If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
                     *     will be set by the persistentvolume controller if it exists.
                     *     If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                     *     set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                     *     exists.
                     *     More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                     *     (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default). */
                    volumeAttributesClassName?: string;
                    /** @description volumeMode defines what type of volume is required by the claim.
                     *     Value of Filesystem is implied when not included in claim spec. */
                    volumeMode?: string;
                    /** @description volumeName is the binding reference to the PersistentVolume backing this claim. */
                    volumeName?: string;
                  };
                };
              };
              /** @description fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
              fc?: {
                /** @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
                fsType?: string;
                /**
                 * Format: int32
                 * @description lun is Optional: FC target lun number
                 */
                lun?: number;
                /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description targetWWNs is Optional: FC target worldwide names (WWNs) */
                targetWWNs?: string[];
                /** @description wwids Optional: FC volume world wide identifiers (wwids)
                 *     Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
                wwids?: string[];
              };
              /** @description flexVolume represents a generic volume resource that is
               *     provisioned/attached using an exec based plugin.
               *     Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead. */
              flexVolume?: {
                /** @description driver is the name of the driver to use for this volume. */
                driver: string;
                /** @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
                fsType?: string;
                /** @description options is Optional: this field holds extra command options if any. */
                options?: {
                  [key: string]: string;
                };
                /** @description readOnly is Optional: defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description secretRef is Optional: secretRef is reference to the secret object containing
                 *     sensitive information to pass to the plugin scripts. This may be
                 *     empty if no secret object is specified. If the secret object
                 *     contains more than one secret, all secrets are passed to the plugin
                 *     scripts. */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
              };
              /** @description flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running.
               *     Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported. */
              flocker?: {
                /** @description datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker
                 *     should be considered as deprecated */
                datasetName?: string;
                /** @description datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
                datasetUUID?: string;
              };
              /** @description gcePersistentDisk represents a GCE Disk resource that is attached to a
               *     kubelet's host machine and then exposed to the pod.
               *     Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree
               *     gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver.
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
              gcePersistentDisk?: {
                /** @description fsType is filesystem type of the volume that you want to mount.
                 *     Tip: Ensure that the filesystem type is supported by the host operating system.
                 *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
                fsType?: string;
                /**
                 * Format: int32
                 * @description partition is the partition in the volume that you want to mount.
                 *     If omitted, the default is to mount by volume name.
                 *     Examples: For volume /dev/sda1, you specify the partition as "1".
                 *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                 */
                partition?: number;
                /** @description pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
                pdName: string;
                /** @description readOnly here will force the ReadOnly setting in VolumeMounts.
                 *     Defaults to false.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
                readOnly?: boolean;
              };
              /** @description gitRepo represents a git repository at a particular revision.
               *     Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an
               *     EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir
               *     into the Pod's container. */
              gitRepo?: {
                /** @description directory is the target directory name.
                 *     Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the
                 *     git repository.  Otherwise, if specified, the volume will contain the git repository in
                 *     the subdirectory with the given name. */
                directory?: string;
                /** @description repository is the URL */
                repository: string;
                /** @description revision is the commit hash for the specified revision. */
                revision?: string;
              };
              /** @description glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.
               *     Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported.
               *     More info: https://examples.k8s.io/volumes/glusterfs/README.md */
              glusterfs?: {
                /** @description endpoints is the endpoint name that details Glusterfs topology.
                 *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
                endpoints: string;
                /** @description path is the Glusterfs volume path.
                 *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
                path: string;
                /** @description readOnly here will force the Glusterfs volume to be mounted with read-only permissions.
                 *     Defaults to false.
                 *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
                readOnly?: boolean;
              };
              /** @description hostPath represents a pre-existing file or directory on the host
               *     machine that is directly exposed to the container. This is generally
               *     used for system agents or other privileged things that are allowed
               *     to see the host machine. Most containers will NOT need this.
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
              hostPath?: {
                /** @description path of the directory on the host.
                 *     If the path is a symlink, it will follow the link to the real path.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
                path: string;
                /** @description type for HostPath Volume
                 *     Defaults to ""
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
                type?: string;
              };
              /** @description image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine.
               *     The volume is resolved at pod startup depending on which PullPolicy value is provided:
               *
               *     - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
               *     - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
               *     - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
               *
               *     The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation.
               *     A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message.
               *     The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field.
               *     The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images.
               *     The volume will be mounted read-only (ro) and non-executable files (noexec).
               *     Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath).
               *     The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type. */
              image?: {
                /** @description Policy for pulling OCI objects. Possible values are:
                 *     Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                 *     Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                 *     IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                 *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. */
                pullPolicy?: string;
                /** @description Required: Image or artifact reference to be used.
                 *     Behaves in the same way as pod.spec.containers[*].image.
                 *     Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets.
                 *     More info: https://kubernetes.io/docs/concepts/containers/images
                 *     This field is optional to allow higher level config management to default or override
                 *     container images in workload controllers like Deployments and StatefulSets. */
                reference?: string;
              };
              /** @description iscsi represents an ISCSI Disk resource that is attached to a
               *     kubelet's host machine and then exposed to the pod.
               *     More info: https://examples.k8s.io/volumes/iscsi/README.md */
              iscsi?: {
                /** @description chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication */
                chapAuthDiscovery?: boolean;
                /** @description chapAuthSession defines whether support iSCSI Session CHAP authentication */
                chapAuthSession?: boolean;
                /** @description fsType is the filesystem type of the volume that you want to mount.
                 *     Tip: Ensure that the filesystem type is supported by the host operating system.
                 *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
                fsType?: string;
                /** @description initiatorName is the custom iSCSI Initiator Name.
                 *     If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface
                 *     <target portal>:<volume name> will be created for the connection. */
                initiatorName?: string;
                /** @description iqn is the target iSCSI Qualified Name. */
                iqn: string;
                /**
                 * @description iscsiInterface is the interface Name that uses an iSCSI transport.
                 *     Defaults to 'default' (tcp).
                 * @default default
                 */
                iscsiInterface: string;
                /**
                 * Format: int32
                 * @description lun represents iSCSI Target Lun number.
                 */
                lun: number;
                /** @description portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port
                 *     is other than default (typically TCP ports 860 and 3260). */
                portals?: string[];
                /** @description readOnly here will force the ReadOnly setting in VolumeMounts.
                 *     Defaults to false. */
                readOnly?: boolean;
                /** @description secretRef is the CHAP Secret for iSCSI target and initiator authentication */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port
                 *     is other than default (typically TCP ports 860 and 3260). */
                targetPortal: string;
              };
              /** @description name of the volume.
               *     Must be a DNS_LABEL and unique within the pod.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
              /** @description nfs represents an NFS mount on the host that shares a pod's lifetime
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
              nfs?: {
                /** @description path that is exported by the NFS server.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
                path: string;
                /** @description readOnly here will force the NFS export to be mounted with read-only permissions.
                 *     Defaults to false.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
                readOnly?: boolean;
                /** @description server is the hostname or IP address of the NFS server.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
                server: string;
              };
              /** @description persistentVolumeClaimVolumeSource represents a reference to a
               *     PersistentVolumeClaim in the same namespace.
               *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
              persistentVolumeClaim?: {
                /** @description claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                 *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
                claimName: string;
                /** @description readOnly Will force the ReadOnly setting in VolumeMounts.
                 *     Default false. */
                readOnly?: boolean;
              };
              /** @description photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.
               *     Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported. */
              photonPersistentDisk?: {
                /** @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
                fsType?: string;
                /** @description pdID is the ID that identifies Photon Controller persistent disk */
                pdID: string;
              };
              /** @description portworxVolume represents a portworx volume attached and mounted on kubelets host machine.
               *     Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type
               *     are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate
               *     is on. */
              portworxVolume?: {
                /** @description fSType represents the filesystem type to mount
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
                fsType?: string;
                /** @description readOnly defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description volumeID uniquely identifies a Portworx volume */
                volumeID: string;
              };
              /** @description projected items for all in one resources secrets, configmaps, and downward API */
              projected?: {
                /**
                 * Format: int32
                 * @description defaultMode are the mode bits used to set permissions on created files by default.
                 *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                 *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                 *     Directories within the path are not affected by this setting.
                 *     This might be in conflict with other options that affect the file
                 *     mode, like fsGroup, and the result can be other mode bits set.
                 */
                defaultMode?: number;
                /** @description sources is the list of volume projections. Each entry in this list
                 *     handles one source. */
                sources?: {
                  /** @description ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                   *     of ClusterTrustBundle objects in an auto-updating file.
                   *
                   *     Alpha, gated by the ClusterTrustBundleProjection feature gate.
                   *
                   *     ClusterTrustBundle objects can either be selected by name, or by the
                   *     combination of signer name and a label selector.
                   *
                   *     Kubelet performs aggressive normalization of the PEM contents written
                   *     into the pod filesystem.  Esoteric PEM features such as inter-block
                   *     comments and block headers are stripped.  Certificates are deduplicated.
                   *     The ordering of certificates within the file is arbitrary, and Kubelet
                   *     may change the order over time. */
                  clusterTrustBundle?: {
                    /** @description Select all ClusterTrustBundles that match this label selector.  Only has
                     *     effect if signerName is set.  Mutually-exclusive with name.  If unset,
                     *     interpreted as "match nothing".  If set but empty, interpreted as "match
                     *     everything". */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string;
                        /** @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                        operator: string;
                        /** @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch. */
                        values?: string[];
                      }[];
                      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                      matchLabels?: {
                        [key: string]: string;
                      };
                    };
                    /** @description Select a single ClusterTrustBundle by object name.  Mutually-exclusive
                     *     with signerName and labelSelector. */
                    name?: string;
                    /** @description If true, don't block pod startup if the referenced ClusterTrustBundle(s)
                     *     aren't available.  If using name, then the named ClusterTrustBundle is
                     *     allowed not to exist.  If using signerName, then the combination of
                     *     signerName and labelSelector is allowed to match zero
                     *     ClusterTrustBundles. */
                    optional?: boolean;
                    /** @description Relative path from the volume root to write the bundle. */
                    path: string;
                    /** @description Select all ClusterTrustBundles that match this signer name.
                     *     Mutually-exclusive with name.  The contents of all selected
                     *     ClusterTrustBundles will be unified and deduplicated. */
                    signerName?: string;
                  };
                  /** @description configMap information about the configMap data to project */
                  configMap?: {
                    /** @description items if unspecified, each key-value pair in the Data field of the referenced
                     *     ConfigMap will be projected into the volume as a file whose name is the
                     *     key and content is the value. If specified, the listed keys will be
                     *     projected into the specified paths, and unlisted keys will not be
                     *     present. If a key is specified which is not present in the ConfigMap,
                     *     the volume setup will error unless it is marked optional. Paths must be
                     *     relative and may not contain the '..' path or start with '..'. */
                    items?: {
                      /** @description key is the key to project. */
                      key: string;
                      /**
                       * Format: int32
                       * @description mode is Optional: mode bits used to set permissions on this file.
                       *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                       *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                       *     If not specified, the volume defaultMode will be used.
                       *     This might be in conflict with other options that affect the file
                       *     mode, like fsGroup, and the result can be other mode bits set.
                       */
                      mode?: number;
                      /** @description path is the relative path of the file to map the key to.
                       *     May not be an absolute path.
                       *     May not contain the path element '..'.
                       *     May not start with the string '..'. */
                      path: string;
                    }[];
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description optional specify whether the ConfigMap or its keys must be defined */
                    optional?: boolean;
                  };
                  /** @description downwardAPI information about the downwardAPI data to project */
                  downwardAPI?: {
                    /** @description Items is a list of DownwardAPIVolume file */
                    items?: {
                      /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                      fieldRef?: {
                        /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                        apiVersion?: string;
                        /** @description Path of the field to select in the specified API version. */
                        fieldPath: string;
                      };
                      /**
                       * Format: int32
                       * @description Optional: mode bits used to set permissions on this file, must be an octal value
                       *     between 0000 and 0777 or a decimal value between 0 and 511.
                       *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                       *     If not specified, the volume defaultMode will be used.
                       *     This might be in conflict with other options that affect the file
                       *     mode, like fsGroup, and the result can be other mode bits set.
                       */
                      mode?: number;
                      /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                      path: string;
                      /** @description Selects a resource of the container: only resources limits and requests
                       *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
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
                    /** @description items if unspecified, each key-value pair in the Data field of the referenced
                     *     Secret will be projected into the volume as a file whose name is the
                     *     key and content is the value. If specified, the listed keys will be
                     *     projected into the specified paths, and unlisted keys will not be
                     *     present. If a key is specified which is not present in the Secret,
                     *     the volume setup will error unless it is marked optional. Paths must be
                     *     relative and may not contain the '..' path or start with '..'. */
                    items?: {
                      /** @description key is the key to project. */
                      key: string;
                      /**
                       * Format: int32
                       * @description mode is Optional: mode bits used to set permissions on this file.
                       *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                       *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                       *     If not specified, the volume defaultMode will be used.
                       *     This might be in conflict with other options that affect the file
                       *     mode, like fsGroup, and the result can be other mode bits set.
                       */
                      mode?: number;
                      /** @description path is the relative path of the file to map the key to.
                       *     May not be an absolute path.
                       *     May not contain the path element '..'.
                       *     May not start with the string '..'. */
                      path: string;
                    }[];
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string;
                    /** @description optional field specify whether the Secret or its key must be defined */
                    optional?: boolean;
                  };
                  /** @description serviceAccountToken is information about the serviceAccountToken data to project */
                  serviceAccountToken?: {
                    /** @description audience is the intended audience of the token. A recipient of a token
                     *     must identify itself with an identifier specified in the audience of the
                     *     token, and otherwise should reject the token. The audience defaults to the
                     *     identifier of the apiserver. */
                    audience?: string;
                    /**
                     * Format: int64
                     * @description expirationSeconds is the requested duration of validity of the service
                     *     account token. As the token approaches expiration, the kubelet volume
                     *     plugin will proactively rotate the service account token. The kubelet will
                     *     start trying to rotate the token if the token is older than 80 percent of
                     *     its time to live or if the token is older than 24 hours.Defaults to 1 hour
                     *     and must be at least 10 minutes.
                     */
                    expirationSeconds?: number;
                    /** @description path is the path relative to the mount point of the file to project the
                     *     token into. */
                    path: string;
                  };
                }[];
              };
              /** @description quobyte represents a Quobyte mount on the host that shares a pod's lifetime.
               *     Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported. */
              quobyte?: {
                /** @description group to map volume access to
                 *     Default is no group */
                group?: string;
                /** @description readOnly here will force the Quobyte volume to be mounted with read-only permissions.
                 *     Defaults to false. */
                readOnly?: boolean;
                /** @description registry represents a single or multiple Quobyte Registry services
                 *     specified as a string as host:port pair (multiple entries are separated with commas)
                 *     which acts as the central registry for volumes */
                registry: string;
                /** @description tenant owning the given Quobyte volume in the Backend
                 *     Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
                tenant?: string;
                /** @description user to map volume access to
                 *     Defaults to serivceaccount user */
                user?: string;
                /** @description volume is a string that references an already created Quobyte volume by name. */
                volume: string;
              };
              /** @description rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.
               *     Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported.
               *     More info: https://examples.k8s.io/volumes/rbd/README.md */
              rbd?: {
                /** @description fsType is the filesystem type of the volume that you want to mount.
                 *     Tip: Ensure that the filesystem type is supported by the host operating system.
                 *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
                fsType?: string;
                /** @description image is the rados image name.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
                image: string;
                /**
                 * @description keyring is the path to key ring for RBDUser.
                 *     Default is /etc/ceph/keyring.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                 * @default /etc/ceph/keyring
                 */
                keyring: string;
                /** @description monitors is a collection of Ceph monitors.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
                monitors: string[];
                /**
                 * @description pool is the rados pool name.
                 *     Default is rbd.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                 * @default rbd
                 */
                pool: string;
                /** @description readOnly here will force the ReadOnly setting in VolumeMounts.
                 *     Defaults to false.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
                readOnly?: boolean;
                /** @description secretRef is name of the authentication secret for RBDUser. If provided
                 *     overrides keyring.
                 *     Default is nil.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /**
                 * @description user is the rados user name.
                 *     Default is admin.
                 *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                 * @default admin
                 */
                user: string;
              };
              /** @description scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
               *     Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported. */
              scaleIO?: {
                /**
                 * @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs".
                 *     Default is "xfs".
                 * @default xfs
                 */
                fsType: string;
                /** @description gateway is the host address of the ScaleIO API Gateway. */
                gateway: string;
                /** @description protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. */
                protectionDomain?: string;
                /** @description readOnly Defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description secretRef references to the secret for ScaleIO user and other
                 *     sensitive information. If this is not provided, Login operation will fail. */
                secretRef: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description sslEnabled Flag enable/disable SSL communication with Gateway, default false */
                sslEnabled?: boolean;
                /**
                 * @description storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
                 *     Default is ThinProvisioned.
                 * @default ThinProvisioned
                 */
                storageMode: string;
                /** @description storagePool is the ScaleIO Storage Pool associated with the protection domain. */
                storagePool?: string;
                /** @description system is the name of the storage system as configured in ScaleIO. */
                system: string;
                /** @description volumeName is the name of a volume already created in the ScaleIO system
                 *     that is associated with this volume source. */
                volumeName?: string;
              };
              /** @description secret represents a secret that should populate this volume.
               *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
              secret?: {
                /**
                 * Format: int32
                 * @description defaultMode is Optional: mode bits used to set permissions on created files by default.
                 *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                 *     YAML accepts both octal and decimal values, JSON requires decimal values
                 *     for mode bits. Defaults to 0644.
                 *     Directories within the path are not affected by this setting.
                 *     This might be in conflict with other options that affect the file
                 *     mode, like fsGroup, and the result can be other mode bits set.
                 */
                defaultMode?: number;
                /** @description items If unspecified, each key-value pair in the Data field of the referenced
                 *     Secret will be projected into the volume as a file whose name is the
                 *     key and content is the value. If specified, the listed keys will be
                 *     projected into the specified paths, and unlisted keys will not be
                 *     present. If a key is specified which is not present in the Secret,
                 *     the volume setup will error unless it is marked optional. Paths must be
                 *     relative and may not contain the '..' path or start with '..'. */
                items?: {
                  /** @description key is the key to project. */
                  key: string;
                  /**
                   * Format: int32
                   * @description mode is Optional: mode bits used to set permissions on this file.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     If not specified, the volume defaultMode will be used.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /** @description path is the relative path of the file to map the key to.
                   *     May not be an absolute path.
                   *     May not contain the path element '..'.
                   *     May not start with the string '..'. */
                  path: string;
                }[];
                /** @description optional field specify whether the Secret or its keys must be defined */
                optional?: boolean;
                /** @description secretName is the name of the secret in the pod's namespace to use.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
                secretName?: string;
              };
              /** @description storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
               *     Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. */
              storageos?: {
                /** @description fsType is the filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
                fsType?: string;
                /** @description readOnly defaults to false (read/write). ReadOnly here will force
                 *     the ReadOnly setting in VolumeMounts. */
                readOnly?: boolean;
                /** @description secretRef specifies the secret to use for obtaining the StorageOS API
                 *     credentials.  If not specified, default values will be attempted. */
                secretRef?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                };
                /** @description volumeName is the human-readable name of the StorageOS volume.  Volume
                 *     names are only unique within a namespace. */
                volumeName?: string;
                /** @description volumeNamespace specifies the scope of the volume within StorageOS.  If no
                 *     namespace is specified then the Pod's namespace will be used.  This allows the
                 *     Kubernetes name scoping to be mirrored within StorageOS for tighter integration.
                 *     Set VolumeName to any name to override the default behaviour.
                 *     Set to "default" if you are not using namespaces within StorageOS.
                 *     Namespaces that do not pre-exist within StorageOS will be created. */
                volumeNamespace?: string;
              };
              /** @description vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.
               *     Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type
               *     are redirected to the csi.vsphere.vmware.com CSI driver. */
              vsphereVolume?: {
                /** @description fsType is filesystem type to mount.
                 *     Must be a filesystem type supported by the host operating system.
                 *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
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
        /** @description topologyRequest defines the topology request for the PodSet. */
        topologyRequest?: {
          /** @description PodIndexLabel indicates the name of the label indexing the pods.
           *     For example, in the context of
           *     - kubernetes job this is: kubernetes.io/job-completion-index
           *     - JobSet: kubernetes.io/job-completion-index (inherited from Job)
           *     - Kubeflow: training.kubeflow.org/replica-index */
          podIndexLabel?: string;
          /** @description preferred indicates the topology level preferred by the PodSet, as
           *     indicated by the `kueue.x-k8s.io/podset-preferred-topology` PodSet
           *     annotation. */
          preferred?: string;
          /** @description required indicates the topology level required by the PodSet, as
           *     indicated by the `kueue.x-k8s.io/podset-required-topology` PodSet
           *     annotation. */
          required?: string;
          /**
           * Format: int32
           * @description SubGroupIndexLabel indicates the count of replicated Jobs (groups) within a PodSet.
           *     For example, in the context of JobSet this value is read from jobset.sigs.k8s.io/replicatedjob-replicas.
           */
          subGroupCount?: number;
          /** @description SubGroupIndexLabel indicates the name of the label indexing the instances of replicated Jobs (groups)
           *     within a PodSet. For example, in the context of JobSet this is jobset.sigs.k8s.io/job-index. */
          subGroupIndexLabel?: string;
          /** @description unconstrained indicates that Kueue has the freedom to schedule the PodSet within
           *     the entire available capacity, without constraints on the compactness of the placement.
           *     This is indicated by the `kueue.x-k8s.io/podset-unconstrained-topology` PodSet annotation. */
          unconstrained?: boolean;
        };
      }[];
      /**
       * Format: int32
       * @description Priority determines the order of access to the resources managed by the
       *     ClusterQueue where the workload is queued.
       *     The priority value is populated from PriorityClassName.
       *     The higher the value, the higher the priority.
       *     If priorityClassName is specified, priority must not be null.
       */
      priority?: number;
      /** @description If specified, indicates the workload's priority.
       *     "system-node-critical" and "system-cluster-critical" are two special
       *     keywords which indicate the highest priorities with the former being
       *     the highest priority. Any other name must be defined by creating a
       *     PriorityClass object with that name. If not specified, the workload
       *     priority will be default or zero if there is no default. */
      priorityClassName?: string;
      /** @description priorityClassSource determines whether the priorityClass field refers to a pod PriorityClass or kueue.x-k8s.io/workloadpriorityclass.
       *     Workload's PriorityClass can accept the name of a pod priorityClass or a workloadPriorityClass.
       *     When using pod PriorityClass, a priorityClassSource field has the scheduling.k8s.io/priorityclass value. */
      priorityClassSource?: string;
      /** @description queueName is the name of the LocalQueue the Workload is associated with.
       *     queueName cannot be changed while .status.admission is not null. */
      queueName?: string;
    };
    /** @description WorkloadStatus defines the observed state of Workload */
    status?: {
      /**
       * Format: int32
       * @description accumulatedPastExexcutionTimeSeconds holds the total time, in seconds, the workload spent
       *     in Admitted state, in the previous `Admit` - `Evict` cycles.
       */
      accumulatedPastExexcutionTimeSeconds?: number;
      /** @description admission holds the parameters of the admission of the workload by a
       *     ClusterQueue. admission can be set back to null, but its fields cannot be
       *     changed once set. */
      admission?: {
        /** @description clusterQueue is the name of the ClusterQueue that admitted this workload. */
        clusterQueue: string;
        /** @description PodSetAssignments hold the admission results for each of the .spec.podSets entries. */
        podSetAssignments: {
          /**
           * Format: int32
           * @description count is the number of pods taken into account at admission time.
           *     This field will not change in case of quota reclaim.
           *     Value could be missing for Workloads created before this field was added,
           *     in that case spec.podSets[*].count value will be used.
           */
          count?: number;
          /** @description Flavors are the flavors assigned to the workload for each resource. */
          flavors?: {
            [key: string]: string;
          };
          /**
           * @description Name is the name of the podSet. It should match one of the names in .spec.podSets.
           * @default main
           */
          name: string;
          /** @description resourceUsage keeps track of the total resources all the pods in the podset need to run.
           *
           *     Beside what is provided in podSet's specs, this calculation takes into account
           *     the LimitRange defaults and RuntimeClass overheads at the moment of admission.
           *     This field will not change in case of quota reclaim. */
          resourceUsage?: {
            [key: string]: number | string;
          };
          /** @description topologyAssignment indicates the topology assignment divided into
           *     topology domains corresponding to the lowest level of the topology.
           *     The assignment specifies the number of Pods to be scheduled per topology
           *     domain and specifies the node selectors for each topology domain, in the
           *     following way: the node selector keys are specified by the levels field
           *     (same for all domains), and the corresponding node selector value is
           *     specified by the domains.values subfield. If the TopologySpec.Levels field contains
           *     "kubernetes.io/hostname" label, topologyAssignment will contain data only for
           *     this label, and omit higher levels in the topology
           *
           *     Example:
           *
           *     topologyAssignment:
           *       levels:
           *       - cloud.provider.com/topology-block
           *       - cloud.provider.com/topology-rack
           *       domains:
           *       - values: [block-1, rack-1]
           *         count: 4
           *       - values: [block-1, rack-2]
           *         count: 2
           *
           *     Here:
           *     - 4 Pods are to be scheduled on nodes matching the node selector:
           *       cloud.provider.com/topology-block: block-1
           *       cloud.provider.com/topology-rack: rack-1
           *     - 2 Pods are to be scheduled on nodes matching the node selector:
           *       cloud.provider.com/topology-block: block-1
           *       cloud.provider.com/topology-rack: rack-2
           *
           *     Example:
           *     Below there is an equivalent of the above example assuming, Topology
           *     object defines kubernetes.io/hostname as the lowest level in topology.
           *     Hence we omit higher level of topologies, since the hostname label
           *     is sufficient to explicitly identify a proper node.
           *
           *     topologyAssignment:
           *       levels:
           *       - kubernetes.io/hostname
           *       domains:
           *       - values: [hostname-1]
           *         count: 4
           *       - values: [hostname-2]
           *         count: 2 */
          topologyAssignment?: {
            /** @description domains is a list of topology assignments split by topology domains at
             *     the lowest level of the topology. */
            domains: {
              /**
               * Format: int32
               * @description count indicates the number of Pods to be scheduled in the topology
               *     domain indicated by the values field.
               */
              count: number;
              /** @description values is an ordered list of node selector values describing a topology
               *     domain. The values correspond to the consecutive topology levels, from
               *     the highest to the lowest. */
              values: string[];
            }[];
            /** @description levels is an ordered list of keys denoting the levels of the assigned
             *     topology (i.e. node label keys), from the highest to the lowest level of
             *     the topology. */
            levels: string[];
          };
        }[];
      };
      /** @description admissionChecks list all the admission checks required by the workload and the current status */
      admissionChecks?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another.
         *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition.
         *     This may be an empty string. */
        message: string;
        /** @description name identifies the admission check. */
        name: string;
        podSetUpdates?: {
          annotations?: {
            [key: string]: string;
          };
          labels?: {
            [key: string]: string;
          };
          /** @description Name of the PodSet to modify. Should match to one of the Workload's PodSets. */
          name: string;
          nodeSelector?: {
            [key: string]: string;
          };
          tolerations?: {
            /** @description Effect indicates the taint effect to match. Empty means match all taint effects.
             *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
            effect?: string;
            /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
             *     If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
            key?: string;
            /** @description Operator represents a key's relationship to the value.
             *     Valid operators are Exists and Equal. Defaults to Equal.
             *     Exists is equivalent to wildcard for value, so that a pod can
             *     tolerate all taints of a particular category. */
            operator?: string;
            /**
             * Format: int64
             * @description TolerationSeconds represents the period of time the toleration (which must be
             *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             *     it is not set, which means tolerate the taint forever (do not evict). Zero and
             *     negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds?: number;
            /** @description Value is the taint value the toleration matches to.
             *     If the operator is Exists, the value should be empty, otherwise just a regular string. */
            value?: string;
          }[];
        }[];
        /**
         * @description state of the admissionCheck, one of Pending, Ready, Retry, Rejected
         * @enum {string}
         */
        state: "Pending" | "Ready" | "Retry" | "Rejected";
      }[];
      /** @description conditions hold the latest available observations of the Workload
       *     current state.
       *
       *     The type of the condition could be:
       *
       *     - Admitted: the Workload was admitted through a ClusterQueue.
       *     - Finished: the associated workload finished running (failed or succeeded).
       *     - PodsReady: at least `.spec.podSets[*].count` Pods are ready or have
       *     succeeded. */
      conditions?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another.
         *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition.
         *     This may be an empty string. */
        message: string;
        /**
         * Format: int64
         * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
         *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
         *     with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
         *     Producers of specific condition types may define expected values and meanings for this field,
         *     and whether the values are considered a guaranteed API.
         *     The value should be a CamelCase string.
         *     This field may not be empty. */
        reason: string;
        /**
         * @description status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "True" | "False" | "Unknown";
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
        type: string;
      }[];
      /** @description reclaimablePods keeps track of the number pods within a podset for which
       *     the resource reservation is no longer needed. */
      reclaimablePods?: {
        /**
         * Format: int32
         * @description count is the number of pods for which the requested resources are no longer needed.
         */
        count: number;
        /** @description name is the PodSet name. */
        name: string;
      }[];
      /** @description requeueState holds the re-queue state
       *     when a workload meets Eviction with PodsReadyTimeout reason. */
      requeueState?: {
        /**
         * Format: int32
         * @description count records the number of times a workload has been re-queued
         *     When a deactivated (`.spec.activate`=`false`) workload is reactivated (`.spec.activate`=`true`),
         *     this count would be reset to null.
         */
        count?: number;
        /**
         * Format: date-time
         * @description requeueAt records the time when a workload will be re-queued.
         *     When a deactivated (`.spec.activate`=`false`) workload is reactivated (`.spec.activate`=`true`),
         *     this time would be reset to null.
         */
        requeueAt?: string;
      };
      /** @description resourceRequests provides a detailed view of the resources that were
       *     requested by a non-admitted workload when it was considered for admission.
       *     If admission is non-null, resourceRequests will be empty because
       *     admission.resourceUsage contains the detailed information. */
      resourceRequests?: {
        /**
         * @description name is the name of the podSet. It should match one of the names in .spec.podSets.
         * @default main
         */
        name: string;
        /** @description resources is the total resources all the pods in the podset need to run.
         *
         *     Beside what is provided in podSet's specs, this value also takes into account
         *     the LimitRange defaults and RuntimeClass overheads at the moment of consideration
         *     and the application of resource.excludeResourcePrefixes and resource.transformations. */
        resources?: {
          [key: string]: number | string;
        };
      }[];
    };
  };
}
