import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KyvernoIoPolicyExceptionV2beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: KyvernoIoPolicyExceptionV2beta1Config) {
    super(scope, id, config);
  }
}
export interface KyvernoIoPolicyExceptionV2beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "kyverno.io/v2beta1";
    kind: "PolicyException";
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
    /** @description Spec declares policy exception behaviors. */
    spec: {
      /** @description Background controls if exceptions are applied to existing policies during a background scan.
       *     Optional. Default value is "true". The value must be set to "false" if the policy rule
       *     uses variables that are only available in the admission review request (e.g. user name). */
      background?: boolean;
      /** @description Conditions are used to determine if a resource applies to the exception by evaluating a
       *     set of conditions. The declaration can contain nested `any` or `all` statements. */
      conditions?: {
        /** @description AllConditions enable variable-based conditional rule execution. This is useful for
         *     finer control of when an rule is applied. A condition can reference object data
         *     using JMESPath notation.
         *     Here, all of the conditions need to pass. */
        all?: {
          /** @description Key is the context entry (using JMESPath) for conditional rule evaluation. */
          key?: unknown;
          /** @description Message is an optional display message */
          message?: string;
          /**
           * @description Operator is the conditional operation to perform. Valid operators are:
           *     Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals,
           *     GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan,
           *     DurationLessThanOrEquals, DurationLessThan
           * @enum {string}
           */
          operator?:
            | "Equals"
            | "NotEquals"
            | "AnyIn"
            | "AllIn"
            | "AnyNotIn"
            | "AllNotIn"
            | "GreaterThanOrEquals"
            | "GreaterThan"
            | "LessThanOrEquals"
            | "LessThan"
            | "DurationGreaterThanOrEquals"
            | "DurationGreaterThan"
            | "DurationLessThanOrEquals"
            | "DurationLessThan";
          /** @description Value is the conditional value, or set of values. The values can be fixed set
           *     or can be variables declared using JMESPath. */
          value?: unknown;
        }[];
        /** @description AnyConditions enable variable-based conditional rule execution. This is useful for
         *     finer control of when an rule is applied. A condition can reference object data
         *     using JMESPath notation.
         *     Here, at least one of the conditions need to pass. */
        any?: {
          /** @description Key is the context entry (using JMESPath) for conditional rule evaluation. */
          key?: unknown;
          /** @description Message is an optional display message */
          message?: string;
          /**
           * @description Operator is the conditional operation to perform. Valid operators are:
           *     Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals,
           *     GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan,
           *     DurationLessThanOrEquals, DurationLessThan
           * @enum {string}
           */
          operator?:
            | "Equals"
            | "NotEquals"
            | "AnyIn"
            | "AllIn"
            | "AnyNotIn"
            | "AllNotIn"
            | "GreaterThanOrEquals"
            | "GreaterThan"
            | "LessThanOrEquals"
            | "LessThan"
            | "DurationGreaterThanOrEquals"
            | "DurationGreaterThan"
            | "DurationLessThanOrEquals"
            | "DurationLessThan";
          /** @description Value is the conditional value, or set of values. The values can be fixed set
           *     or can be variables declared using JMESPath. */
          value?: unknown;
        }[];
      };
      /** @description Exceptions is a list policy/rules to be excluded */
      exceptions: {
        /** @description PolicyName identifies the policy to which the exception is applied.
         *     The policy name uses the format <namespace>/<name> unless it
         *     references a ClusterPolicy. */
        policyName: string;
        /** @description RuleNames identifies the rules to which the exception is applied. */
        ruleNames: string[];
      }[];
      /** @description Match defines match clause used to check if a resource applies to the exception */
      match: {
        /** @description All allows specifying resources which will be ANDed */
        all?: {
          /** @description ClusterRoles is the list of cluster-wide role names for the user. */
          clusterRoles?: string[];
          /** @description ResourceDescription contains information about the resource being created or modified. */
          resources?: {
            /** @description Annotations is a  map of annotations (key-value pairs of type string). Annotation keys
             *     and values support the wildcard characters "*" (matches zero or many characters) and
             *     "?" (matches at least one character). */
            annotations?: {
              [key: string]: string;
            };
            /** @description Kinds is a list of resource kinds. */
            kinds?: string[];
            /** @description Name is the name of the resource. The name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character).
             *     NOTE: "Name" is being deprecated in favor of "Names". */
            name?: string;
            /** @description Names are the names of the resources. Each name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character). */
            names?: string[];
            /** @description NamespaceSelector is a label selector for the resource namespace. Label keys and values
             *     in `matchLabels` support the wildcard characters `*` (matches zero or many characters)
             *     and `?` (matches one character).Wildcards allows writing label selectors like
             *     ["storage.k8s.io/*": "*"]. Note that using ["*" : "*"] matches any key and value but
             *     does not match an empty label set. */
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
            /** @description Namespaces is a list of namespaces names. Each name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character). */
            namespaces?: string[];
            /** @description Operations can contain values ["CREATE, "UPDATE", "CONNECT", "DELETE"], which are used to match a specific action. */
            operations?: ("CREATE" | "CONNECT" | "UPDATE" | "DELETE")[];
            /** @description Selector is a label selector. Label keys and values in `matchLabels` support the wildcard
             *     characters `*` (matches zero or many characters) and `?` (matches one character).
             *     Wildcards allows writing label selectors like ["storage.k8s.io/*": "*"]. Note that
             *     using ["*" : "*"] matches any key and value but does not match an empty label set. */
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
          };
          /** @description Roles is the list of namespaced role names for the user. */
          roles?: string[];
          /** @description Subjects is the list of subject names like users, user groups, and service accounts. */
          subjects?: {
            /** @description APIGroup holds the API group of the referenced subject.
             *     Defaults to "" for ServiceAccount subjects.
             *     Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
            apiGroup?: string;
            /** @description Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount".
             *     If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
            kind: string;
            /** @description Name of the object being referenced. */
            name: string;
            /** @description Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty
             *     the Authorizer should report an error. */
            namespace?: string;
          }[];
        }[];
        /** @description Any allows specifying resources which will be ORed */
        any?: {
          /** @description ClusterRoles is the list of cluster-wide role names for the user. */
          clusterRoles?: string[];
          /** @description ResourceDescription contains information about the resource being created or modified. */
          resources?: {
            /** @description Annotations is a  map of annotations (key-value pairs of type string). Annotation keys
             *     and values support the wildcard characters "*" (matches zero or many characters) and
             *     "?" (matches at least one character). */
            annotations?: {
              [key: string]: string;
            };
            /** @description Kinds is a list of resource kinds. */
            kinds?: string[];
            /** @description Name is the name of the resource. The name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character).
             *     NOTE: "Name" is being deprecated in favor of "Names". */
            name?: string;
            /** @description Names are the names of the resources. Each name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character). */
            names?: string[];
            /** @description NamespaceSelector is a label selector for the resource namespace. Label keys and values
             *     in `matchLabels` support the wildcard characters `*` (matches zero or many characters)
             *     and `?` (matches one character).Wildcards allows writing label selectors like
             *     ["storage.k8s.io/*": "*"]. Note that using ["*" : "*"] matches any key and value but
             *     does not match an empty label set. */
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
            /** @description Namespaces is a list of namespaces names. Each name supports wildcard characters
             *     "*" (matches zero or many characters) and "?" (at least one character). */
            namespaces?: string[];
            /** @description Operations can contain values ["CREATE, "UPDATE", "CONNECT", "DELETE"], which are used to match a specific action. */
            operations?: ("CREATE" | "CONNECT" | "UPDATE" | "DELETE")[];
            /** @description Selector is a label selector. Label keys and values in `matchLabels` support the wildcard
             *     characters `*` (matches zero or many characters) and `?` (matches one character).
             *     Wildcards allows writing label selectors like ["storage.k8s.io/*": "*"]. Note that
             *     using ["*" : "*"] matches any key and value but does not match an empty label set. */
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
          };
          /** @description Roles is the list of namespaced role names for the user. */
          roles?: string[];
          /** @description Subjects is the list of subject names like users, user groups, and service accounts. */
          subjects?: {
            /** @description APIGroup holds the API group of the referenced subject.
             *     Defaults to "" for ServiceAccount subjects.
             *     Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
            apiGroup?: string;
            /** @description Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount".
             *     If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
            kind: string;
            /** @description Name of the object being referenced. */
            name: string;
            /** @description Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty
             *     the Authorizer should report an error. */
            namespace?: string;
          }[];
        }[];
      };
      /** @description PodSecurity specifies the Pod Security Standard controls to be excluded.
       *     Applicable only to policies that have validate.podSecurity subrule. */
      podSecurity?: {
        /**
         * @description ControlName specifies the name of the Pod Security Standard control.
         *     See: https://kubernetes.io/docs/concepts/security/pod-security-standards/
         * @enum {string}
         */
        controlName:
          | "HostProcess"
          | "Host Namespaces"
          | "Privileged Containers"
          | "Capabilities"
          | "HostPath Volumes"
          | "Host Ports"
          | "AppArmor"
          | "SELinux"
          | "/proc Mount Type"
          | "Seccomp"
          | "Sysctls"
          | "Volume Types"
          | "Privilege Escalation"
          | "Running as Non-root"
          | "Running as Non-root user";
        /** @description Images selects matching containers and applies the container level PSS.
         *     Each image is the image name consisting of the registry address, repository, image, and tag.
         *     Empty list matches no containers, PSS checks are applied at the pod level only.
         *     Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. */
        images?: string[];
        /** @description RestrictedField selects the field for the given Pod Security Standard control.
         *     When not set, all restricted fields for the control are selected. */
        restrictedField?: string;
        /** @description Values defines the allowed values that can be excluded. */
        values?: string[];
      }[];
    };
  };
}
