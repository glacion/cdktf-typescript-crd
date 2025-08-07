import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class Wgpolicyk8sIoClusterPolicyReportV1alpha2 extends Manifest {
  constructor(scope: Construct, id: string, config: Wgpolicyk8sIoClusterPolicyReportV1alpha2Config) {
    super(scope, id, config);
  }
}
export interface Wgpolicyk8sIoClusterPolicyReportV1alpha2Config extends ManifestConfig {
  manifest: {
    apiVersion: "wgpolicyk8s.io/v1alpha2";
    kind: "ClusterPolicyReport";
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
    /** @description PolicyReportResult provides result details */
    results?: {
      /** @description Category indicates policy category */
      category?: string;
      /** @description Description is a short user friendly message for the policy rule */
      message?: string;
      /** @description Policy is the name or identifier of the policy */
      policy: string;
      /** @description Properties provides additional information for the policy rule */
      properties?: {
        [key: string]: string;
      };
      /** @description SubjectSelector is an optional label selector for checked Kubernetes resources.
       *     For example, a policy result may apply to all pods that match a label.
       *     Either a Subject or a SubjectSelector can be specified.
       *     If neither are provided, the result is assumed to be for the policy report scope. */
      resourceSelector?: {
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
      /** @description Subjects is an optional reference to the checked Kubernetes resources */
      resources?: {
        /** @description API version of the referent. */
        apiVersion?: string;
        /** @description If referring to a piece of an object instead of an entire object, this string
         *     should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
         *     For example, if the object reference is to a container within a pod, this would take on a value like:
         *     "spec.containers{name}" (where "name" refers to the name of the container that triggered
         *     the event) or if no container name is specified "spec.containers[2]" (container with
         *     index 2 in this pod). This syntax is chosen only to have some well-defined way of
         *     referencing a part of an object. */
        fieldPath?: string;
        /** @description Kind of the referent.
         *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
        kind?: string;
        /** @description Name of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
        /** @description Specific resourceVersion to which this reference is made, if any.
         *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
        resourceVersion?: string;
        /** @description UID of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
        uid?: string;
      }[];
      /**
       * @description Result indicates the outcome of the policy rule execution
       * @enum {string}
       */
      result?: "pass" | "fail" | "warn" | "error" | "skip";
      /** @description Rule is the name or identifier of the rule within the policy */
      rule?: string;
      /** @description Scored indicates if this result is scored */
      scored?: boolean;
      /**
       * @description Severity indicates policy check result criticality
       * @enum {string}
       */
      severity?: "critical" | "high" | "low" | "medium" | "info";
      /** @description Source is an identifier for the policy engine that manages this report */
      source?: string;
      /** @description Timestamp indicates the time the result was found */
      timestamp?: {
        /**
         * Format: int32
         * @description Non-negative fractions of a second at nanosecond resolution. Negative
         *     second values with fractions must still have non-negative nanos values
         *     that count forward in time. Must be from 0 to 999,999,999
         *     inclusive. This field may be limited in precision depending on context.
         */
        nanos: number;
        /**
         * Format: int64
         * @description Represents seconds of UTC time since Unix epoch
         *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         *     9999-12-31T23:59:59Z inclusive.
         */
        seconds: number;
      };
    }[];
    /** @description Scope is an optional reference to the report scope (e.g. a Deployment, Namespace, or Node) */
    scope?: {
      /** @description API version of the referent. */
      apiVersion?: string;
      /** @description If referring to a piece of an object instead of an entire object, this string
       *     should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
       *     For example, if the object reference is to a container within a pod, this would take on a value like:
       *     "spec.containers{name}" (where "name" refers to the name of the container that triggered
       *     the event) or if no container name is specified "spec.containers[2]" (container with
       *     index 2 in this pod). This syntax is chosen only to have some well-defined way of
       *     referencing a part of an object. */
      fieldPath?: string;
      /** @description Kind of the referent.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      /** @description Name of the referent.
       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
      name?: string;
      /** @description Namespace of the referent.
       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
      namespace?: string;
      /** @description Specific resourceVersion to which this reference is made, if any.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
      resourceVersion?: string;
      /** @description UID of the referent.
       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
      uid?: string;
    };
    /** @description ScopeSelector is an optional selector for multiple scopes (e.g. Pods).
     *     Either one of, or none of, but not both of, Scope or ScopeSelector should be specified. */
    scopeSelector?: {
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
    /** @description PolicyReportSummary provides a summary of results */
    summary?: {
      /** @description Error provides the count of policies that could not be evaluated */
      error?: number;
      /** @description Fail provides the count of policies whose requirements were not met */
      fail?: number;
      /** @description Pass provides the count of policies whose requirements were met */
      pass?: number;
      /** @description Skip indicates the count of policies that were not selected for evaluation */
      skip?: number;
      /** @description Warn provides the count of non-scored policies whose requirements were not met */
      warn?: number;
    };
  };
}
