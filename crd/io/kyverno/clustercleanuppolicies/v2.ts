import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterCleanupPolicyV2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterCleanupPolicyV2Config) {
    super(scope, id, {
      manifest: { apiVersion: "kyverno.io/v2", kind: "ClusterCleanupPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterCleanupPolicyV2Config extends ManifestConfig {
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
    /** @description ClusterCleanupPolicy defines rule for resource cleanup. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description Spec declares policy behaviors. */
      spec: {
        /** @description Conditions defines the conditions used to select the resources which will be cleaned up. */
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
        /** @description Context defines variables and data sources that can be used during rule execution. */
        context?: ({
          /** @description APICall is an HTTP request to the Kubernetes API server, or other JSON web service.
           *     The data returned is stored in the context with the name for the context entry. */
          apiCall?: {
            /** @description The data object specifies the POST data sent to the server.
             *     Only applicable when the method field is set to POST. */
            data?: {
              /** @description Key is a unique identifier for the data value */
              key: string;
              /** @description Value is the data value */
              value: unknown;
            }[];
            /** @description Default is an optional arbitrary JSON object that the context
             *     value is set to, if the apiCall returns error. */
            default?: unknown;
            /** @description JMESPath is an optional JSON Match Expression that can be used to
             *     transform the JSON response returned from the server. For example
             *     a JMESPath of "items | length(@)" applied to the API server response
             *     for the URLPath "/apis/apps/v1/deployments" will return the total count
             *     of deployments across all namespaces. */
            jmesPath?: string;
            /**
             * @description Method is the HTTP request type (GET or POST). Defaults to GET.
             * @default GET
             * @enum {string}
             */
            method: "GET" | "POST";
            /** @description Service is an API call to a JSON web service.
             *     This is used for non-Kubernetes API server calls.
             *     It's mutually exclusive with the URLPath field. */
            service?: {
              /** @description CABundle is a PEM encoded CA bundle which will be used to validate
               *     the server certificate. */
              caBundle?: string;
              /** @description Headers is a list of optional HTTP headers to be included in the request. */
              headers?: {
                /** @description Key is the header key */
                key: string;
                /** @description Value is the header value */
                value: string;
              }[];
              /** @description URL is the JSON web service URL. A typical form is
               *     `https://{service}.{namespace}:{port}/{path}`. */
              url: string;
            };
            /** @description URLPath is the URL path to be used in the HTTP GET or POST request to the
             *     Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments").
             *     The format required is the same format used by the `kubectl get --raw` command.
             *     See https://kyverno.io/docs/writing-policies/external-data-sources/#variables-from-kubernetes-api-server-calls
             *     for details.
             *     It's mutually exclusive with the Service field. */
            urlPath?: string;
          };
          /** @description ConfigMap is the ConfigMap reference. */
          configMap?: {
            /** @description Name is the ConfigMap name. */
            name: string;
            /** @description Namespace is the ConfigMap namespace. */
            namespace?: string;
          };
          /** @description GlobalContextEntryReference is a reference to a cached global context entry. */
          globalReference?: {
            /** @description JMESPath is an optional JSON Match Expression that can be used to
             *     transform the JSON response returned from the server. For example
             *     a JMESPath of "items | length(@)" applied to the API server response
             *     for the URLPath "/apis/apps/v1/deployments" will return the total count
             *     of deployments across all namespaces. */
            jmesPath?: string;
            /** @description Name of the global context entry */
            name: string;
          };
          /** @description ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image
           *     details. */
          imageRegistry?: {
            /** @description ImageRegistryCredentials provides credentials that will be used for authentication with registry */
            imageRegistryCredentials?: {
              /** @description AllowInsecureRegistry allows insecure access to a registry. */
              allowInsecureRegistry?: boolean;
              /** @description Providers specifies a list of OCI Registry names, whose authentication providers are provided.
               *     It can be of one of these values: default,google,azure,amazon,github. */
              providers?: ("default" | "amazon" | "azure" | "google" | "github")[];
              /** @description Secrets specifies a list of secrets that are provided for credentials.
               *     Secrets must live in the Kyverno namespace. */
              secrets?: string[];
            };
            /** @description JMESPath is an optional JSON Match Expression that can be used to
             *     transform the ImageData struct returned as a result of processing
             *     the image reference. */
            jmesPath?: string;
            /** @description Reference is image reference to a container image in the registry.
             *     Example: ghcr.io/kyverno/kyverno:latest */
            reference: string;
          };
          /** @description Name is the variable name. */
          name: string;
          /** @description Variable defines an arbitrary JMESPath context variable that can be defined inline. */
          variable?: {
            /** @description Default is an optional arbitrary JSON object that the variable may take if the JMESPath
             *     expression evaluates to nil */
            default?: unknown;
            /** @description JMESPath is an optional JMESPath Expression that can be used to
             *     transform the variable. */
            jmesPath?: string;
            /** @description Value is any arbitrary JSON object representable in YAML or JSON form. */
            value?: unknown;
          };
        } & (unknown | unknown | unknown | unknown | unknown))[];
        /** @description ExcludeResources defines when cleanuppolicy should not be applied. The exclude
         *     criteria can include resource information (e.g. kind, name, namespace, labels)
         *     and admission review request information like the name or role. */
        exclude?: {
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
        /** @description MatchResources defines when cleanuppolicy should be applied. The match
         *     criteria can include resource information (e.g. kind, name, namespace, labels)
         *     and admission review request information like the user name or role.
         *     At least one kind is required. */
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
        /** @description The schedule in Cron format */
        schedule: string;
      };
      /** @description Status contains policy runtime data. */
      status?: {
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
        /** Format: date-time */
        lastExecutionTime?: string;
      };
    };
  };
}
