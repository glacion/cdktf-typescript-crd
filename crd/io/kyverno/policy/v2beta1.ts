import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPolicyV2beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPolicyV2beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPolicyV2beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "kyverno.io/v2beta1";
    kind?: "Policy";
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
    /** @description Spec defines policy behaviors and contains one or more rules. */
    spec: {
      /** @description Admission controls if rules are applied during admission.
       *     Optional. Default value is "true". */
      admission?: boolean;
      /** @description ApplyRules controls how rules in a policy are applied. Rule are processed in
       *     the order of declaration. When set to `One` processing stops after a rule has
       *     been applied i.e. the rule matches and results in a pass, fail, or error. When
       *     set to `All` all rules in the policy are processed. The default is `All`. */
      applyRules?: string;
      /** @description Background controls if rules are applied to existing resources during a background scan.
       *     Optional. Default value is "true". The value must be set to "false" if the policy rule
       *     uses variables that are only available in the admission review request (e.g. user name). */
      background?: boolean;
      /** @description EmitWarning enables API response warnings for mutate policy rules or validate policy rules with validationFailureAction set to Audit.
       *     Enabling this option will extend admission request processing times. The default value is "false". */
      emitWarning?: boolean;
      /** @description Deprecated, use failurePolicy under the webhookConfiguration instead. */
      failurePolicy?: string;
      /** @description Deprecated, use generateExisting under the generate rule instead */
      generateExisting?: boolean;
      /** @description Deprecated, use generateExisting instead */
      generateExistingOnPolicyUpdate?: boolean;
      /** @description Deprecated, use mutateExistingOnPolicyUpdate under the mutate rule instead */
      mutateExistingOnPolicyUpdate?: boolean;
      /** @description Rules is a list of Rule instances. A Policy contains multiple rules and
       *     each rule can validate, mutate, or generate resources. */
      rules?: {
        /** @description CELPreconditions are used to determine if a policy rule should be applied by evaluating a
         *     set of CEL conditions. It can only be used with the validate.cel subrule */
        celPreconditions?: {
          /** @description Expression represents the expression which will be evaluated by CEL. Must evaluate to bool.
           *     CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:
           *
           *     'object' - The object from the incoming request. The value is null for DELETE requests.
           *     'oldObject' - The existing object. The value is null for CREATE requests.
           *     'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest).
           *     'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
           *       See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
           *     'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
           *       request resource.
           *     Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/
           *
           *     Required. */
          expression: string;
          /** @description Name is an identifier for this match condition, used for strategic merging of MatchConditions,
           *     as well as providing an identifier for logging purposes. A good name should be descriptive of
           *     the associated expression.
           *     Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and
           *     must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or
           *     '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an
           *     optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')
           *
           *     Required. */
          name: string;
        }[];
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
        /** @description ExcludeResources defines when this policy rule should not be applied. The exclude
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
        /** @description Generation is used to create new resources. */
        generate?: {
          /** @description APIVersion specifies resource apiVersion. */
          apiVersion?: string;
          /** @description Clone specifies the source resource used to populate each generated resource.
           *     At most one of Data or Clone can be specified. If neither are provided, the generated
           *     resource will be created with default data only. */
          clone?: {
            /** @description Name specifies name of the resource. */
            name?: string;
            /** @description Namespace specifies source resource namespace. */
            namespace?: string;
          };
          /** @description CloneList specifies the list of source resource used to populate each generated resource. */
          cloneList?: {
            /** @description Kinds is a list of resource kinds. */
            kinds?: string[];
            /** @description Namespace specifies source resource namespace. */
            namespace?: string;
            /** @description Selector is a label selector. Label keys and values in `matchLabels`.
             *     wildcard characters are not supported. */
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
          /** @description Data provides the resource declaration used to populate each generated resource.
           *     At most one of Data or Clone must be specified. If neither are provided, the generated
           *     resource will be created with default data only. */
          data?: unknown;
          /** @description ForEach applies generate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
          foreach?: {
            /** @description APIVersion specifies resource apiVersion. */
            apiVersion?: string;
            /** @description Clone specifies the source resource used to populate each generated resource.
             *     At most one of Data or Clone can be specified. If neither are provided, the generated
             *     resource will be created with default data only. */
            clone?: {
              /** @description Name specifies name of the resource. */
              name?: string;
              /** @description Namespace specifies source resource namespace. */
              namespace?: string;
            };
            /** @description CloneList specifies the list of source resource used to populate each generated resource. */
            cloneList?: {
              /** @description Kinds is a list of resource kinds. */
              kinds?: string[];
              /** @description Namespace specifies source resource namespace. */
              namespace?: string;
              /** @description Selector is a label selector. Label keys and values in `matchLabels`.
               *     wildcard characters are not supported. */
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
            /** @description Data provides the resource declaration used to populate each generated resource.
             *     At most one of Data or Clone must be specified. If neither are provided, the generated
             *     resource will be created with default data only. */
            data?: unknown;
            /** @description Kind specifies resource kind. */
            kind?: string;
            /** @description List specifies a JMESPath expression that results in one or more elements
             *     to which the validation logic is applied. */
            list?: string;
            /** @description Name specifies the resource name. */
            name?: string;
            /** @description Namespace specifies resource namespace. */
            namespace?: string;
            /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
             *     set of conditions. The declaration can contain nested `any` or `all` statements.
             *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
            preconditions?: {
              /** @description AllConditions enable variable-based conditional rule execution. This is useful for
               *     finer control of when an rule is applied. A condition can reference object data
               *     using JMESPath notation.
               *     Here, all of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
               *     Here, at least one of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
            /** @description UID specifies the resource uid. */
            uid?: string;
          }[];
          /** @description GenerateExisting controls whether to trigger the rule in existing resources
           *     If is set to "true" the rule will be triggered and applied to existing matched resources. */
          generateExisting?: boolean;
          /** @description Kind specifies resource kind. */
          kind?: string;
          /** @description Name specifies the resource name. */
          name?: string;
          /** @description Namespace specifies resource namespace. */
          namespace?: string;
          /** @description OrphanDownstreamOnPolicyDelete controls whether generated resources should be deleted when the rule that generated
           *     them is deleted with synchronization enabled. This option is only applicable to generate rules of the data type.
           *     See https://kyverno.io/docs/writing-policies/generate/#data-examples.
           *     Defaults to "false" if not specified. */
          orphanDownstreamOnPolicyDelete?: boolean;
          /** @description Synchronize controls if generated resources should be kept in-sync with their source resource.
           *     If Synchronize is set to "true" changes to generated resources will be overwritten with resource
           *     data from Data or the resource specified in the Clone declaration.
           *     Optional. Defaults to "false" if not specified. */
          synchronize?: boolean;
          /** @description UID specifies the resource uid. */
          uid?: string;
        };
        /** @description ImageExtractors defines a mapping from kinds to ImageExtractorConfigs.
         *     This config is only valid for verifyImages rules. */
        imageExtractors?: {
          [key: string]: {
            /** @description JMESPath is an optional JMESPath expression to apply to the image value.
             *     This is useful when the extracted image begins with a prefix like 'docker://'.
             *     The 'trim_prefix' function may be used to trim the prefix: trim_prefix(@, 'docker://').
             *     Note - Image digest mutation may not be used when applying a JMESPAth to an image. */
            jmesPath?: string;
            /** @description Key is an optional name of the field within 'path' that will be used to uniquely identify an image.
             *     Note - this field MUST be unique. */
            key?: string;
            /** @description Name is the entry the image will be available under 'images.<name>' in the context.
             *     If this field is not defined, image entries will appear under 'images.custom'. */
            name?: string;
            /** @description Path is the path to the object containing the image field in a custom resource.
             *     It should be slash-separated. Each slash-separated key must be a valid YAML key or a wildcard '*'.
             *     Wildcard keys are expanded in case of arrays or objects. */
            path: string;
            /** @description Value is an optional name of the field within 'path' that points to the image URI.
             *     This is useful when a custom 'key' is also defined. */
            value?: string;
          }[];
        };
        /** @description MatchResources defines when this policy rule should be applied. The match
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
        /** @description Mutation is used to modify matching resources. */
        mutate?: {
          /** @description ForEach applies mutation rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
          foreach?: {
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
            /** @description Foreach declares a nested foreach iterator */
            foreach?: unknown;
            /** @description List specifies a JMESPath expression that results in one or more elements
             *     to which the validation logic is applied. */
            list?: string;
            /**
             * @description Order defines the iteration order on the list.
             *     Can be Ascending to iterate from first to last element or Descending to iterate in from last to first element.
             * @enum {string}
             */
            order?: "Ascending" | "Descending";
            /** @description PatchStrategicMerge is a strategic merge patch used to modify resources.
             *     See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/
             *     and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/. */
            patchStrategicMerge?: unknown;
            /** @description PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources.
             *     See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/. */
            patchesJson6902?: string;
            /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
             *     set of conditions. The declaration can contain nested `any` or `all` statements.
             *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
            preconditions?: {
              /** @description AllConditions enable variable-based conditional rule execution. This is useful for
               *     finer control of when an rule is applied. A condition can reference object data
               *     using JMESPath notation.
               *     Here, all of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
               *     Here, at least one of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
          }[];
          /** @description MutateExistingOnPolicyUpdate controls if the mutateExisting rule will be applied on policy events. */
          mutateExistingOnPolicyUpdate?: boolean;
          /** @description PatchStrategicMerge is a strategic merge patch used to modify resources.
           *     See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/
           *     and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/. */
          patchStrategicMerge?: unknown;
          /** @description PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources.
           *     See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/. */
          patchesJson6902?: string;
          /** @description Targets defines the target resources to be mutated. */
          targets?: {
            /** @description APIVersion specifies resource apiVersion. */
            apiVersion?: string;
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
            /** @description Kind specifies resource kind. */
            kind?: string;
            /** @description Name specifies the resource name. */
            name?: string;
            /** @description Namespace specifies resource namespace. */
            namespace?: string;
            /** @description Preconditions are used to determine if a policy rule should be applied by evaluating a
             *     set of conditions. The declaration can contain nested `any` or `all` statements. A direct list
             *     of conditions (without `any` or `all` statements is supported for backwards compatibility but
             *     will be deprecated in the next major release.
             *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
            preconditions?: unknown;
            /** @description Selector allows you to select target resources with their labels. */
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
            /** @description UID specifies the resource uid. */
            uid?: string;
          }[];
        };
        /** @description Name is a label to identify the rule, It must be unique within the policy. */
        name: string;
        /** @description Preconditions are used to determine if a policy rule should be applied by evaluating a
         *     set of conditions. The declaration can contain nested `any` or `all` statements.
         *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
        preconditions?: {
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
        /**
         * @description SkipBackgroundRequests bypasses admission requests that are sent by the background controller.
         *     The default value is set to "true", it must be set to "false" to apply
         *     generate and mutateExisting rules to those requests.
         * @default true
         */
        skipBackgroundRequests: boolean;
        /** @description Validation is used to validate matching resources. */
        validate?: {
          /** @description AnyPattern specifies list of validation patterns. At least one of the patterns
           *     must be satisfied for the validation rule to succeed. */
          anyPattern?: unknown;
          /** @description Assert defines a kyverno-json assertion tree. */
          assert?: Record<string, never>;
          /** @description CEL allows validation checks using the Common Expression Language (https://kubernetes.io/docs/reference/using-api/cel/). */
          cel?: {
            /** @description AuditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. */
            auditAnnotations?: {
              /** @description key specifies the audit annotation key. The audit annotation keys of
               *     a ValidatingAdmissionPolicy must be unique. The key must be a qualified
               *     name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.
               *
               *     The key is combined with the resource name of the
               *     ValidatingAdmissionPolicy to construct an audit annotation key:
               *     "{ValidatingAdmissionPolicy name}/{key}".
               *
               *     If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy
               *     and the same audit annotation key, the annotation key will be identical.
               *     In this case, the first annotation written with the key will be included
               *     in the audit event and all subsequent annotations with the same key
               *     will be discarded.
               *
               *     Required. */
              key: string;
              /** @description valueExpression represents the expression which is evaluated by CEL to
               *     produce an audit annotation value. The expression must evaluate to either
               *     a string or null value. If the expression evaluates to a string, the
               *     audit annotation is included with the string value. If the expression
               *     evaluates to null or empty string the audit annotation will be omitted.
               *     The valueExpression may be no longer than 5kb in length.
               *     If the result of the valueExpression is more than 10kb in length, it
               *     will be truncated to 10kb.
               *
               *     If multiple ValidatingAdmissionPolicyBinding resources match an
               *     API request, then the valueExpression will be evaluated for
               *     each binding. All unique values produced by the valueExpressions
               *     will be joined together in a comma-separated list.
               *
               *     Required. */
              valueExpression: string;
            }[];
            /** @description Expressions is a list of CELExpression types. */
            expressions?: {
              /** @description Expression represents the expression which will be evaluated by CEL.
               *     ref: https://github.com/google/cel-spec
               *     CEL expressions have access to the contents of the API request/response, organized into CEL variables as well as some other useful variables:
               *
               *     - 'object' - The object from the incoming request. The value is null for DELETE requests.
               *     - 'oldObject' - The existing object. The value is null for CREATE requests.
               *     - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)).
               *     - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind.
               *     - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources.
               *     - 'variables' - Map of composited variables, from its name to its lazily evaluated value.
               *       For example, a variable named 'foo' can be accessed as 'variables.foo'.
               *     - 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
               *       See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
               *     - 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
               *       request resource.
               *
               *     The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the
               *     object. No other metadata properties are accessible.
               *
               *     Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible.
               *     Accessible property names are escaped according to the following rules when accessed in the expression:
               *     - '__' escapes to '__underscores__'
               *     - '.' escapes to '__dot__'
               *     - '-' escapes to '__dash__'
               *     - '/' escapes to '__slash__'
               *     - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:
               *     	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",
               *     	  "import", "let", "loop", "package", "namespace", "return".
               *     Examples:
               *       - Expression accessing a property named "namespace": {"Expression": "object.__namespace__ > 0"}
               *       - Expression accessing a property named "x-prop": {"Expression": "object.x__dash__prop > 0"}
               *       - Expression accessing a property named "redact__d": {"Expression": "object.redact__underscores__d > 0"}
               *
               *     Equality on arrays with list type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1].
               *     Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:
               *       - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and
               *         non-intersecting elements in `Y` are appended, retaining their partial order.
               *       - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values
               *         are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with
               *         non-intersecting keys are appended, retaining their partial order.
               *     Required. */
              expression: string;
              /** @description Message represents the message displayed when validation fails. The message is required if the Expression contains
               *     line breaks. The message must not contain line breaks.
               *     If unset, the message is "failed rule: {Rule}".
               *     e.g. "must be a URL with the host matching spec.host"
               *     If the Expression contains line breaks. Message is required.
               *     The message must not contain line breaks.
               *     If unset, the message is "failed Expression: {Expression}". */
              message?: string;
              /** @description messageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails.
               *     Since messageExpression is used as a failure message, it must evaluate to a string.
               *     If both message and messageExpression are present on a validation, then messageExpression will be used if validation fails.
               *     If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced
               *     as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string
               *     that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and
               *     the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged.
               *     messageExpression has access to all the same variables as the `expression` except for 'authorizer' and 'authorizer.requestResource'.
               *     Example:
               *     "object.x must be less than max ("+string(params.max)+")" */
              messageExpression?: string;
              /** @description Reason represents a machine-readable description of why this validation failed.
               *     If this is the first validation in the list to fail, this reason, as well as the
               *     corresponding HTTP response code, are used in the
               *     HTTP response to the client.
               *     The currently supported reasons are: "Unauthorized", "Forbidden", "Invalid", "RequestEntityTooLarge".
               *     If not set, StatusReasonInvalid is used in the response to the client. */
              reason?: string;
            }[];
            /** @description ParamKind is a tuple of Group Kind and Version. */
            paramKind?: {
              /** @description APIVersion is the API group version the resources belong to.
               *     In format of "group/version".
               *     Required. */
              apiVersion?: string;
              /** @description Kind is the API kind the resources belong to.
               *     Required. */
              kind?: string;
            };
            /** @description ParamRef references a parameter resource. */
            paramRef?: {
              /** @description name is the name of the resource being referenced.
               *
               *     One of `name` or `selector` must be set, but `name` and `selector` are
               *     mutually exclusive properties. If one is set, the other must be unset.
               *
               *     A single parameter used for all admission requests can be configured
               *     by setting the `name` field, leaving `selector` blank, and setting namespace
               *     if `paramKind` is namespace-scoped. */
              name?: string;
              /** @description namespace is the namespace of the referenced resource. Allows limiting
               *     the search for params to a specific namespace. Applies to both `name` and
               *     `selector` fields.
               *
               *     A per-namespace parameter may be used by specifying a namespace-scoped
               *     `paramKind` in the policy and leaving this field empty.
               *
               *     - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this
               *     field results in a configuration error.
               *
               *     - If `paramKind` is namespace-scoped, the namespace of the object being
               *     evaluated for admission will be used when this field is left unset. Take
               *     care that if this is left empty the binding must not match any cluster-scoped
               *     resources, which will result in an error. */
              namespace?: string;
              /** @description `parameterNotFoundAction` controls the behavior of the binding when the resource
               *     exists, and name or selector is valid, but there are no parameters
               *     matched by the binding. If the value is set to `Allow`, then no
               *     matched parameters will be treated as successful validation by the binding.
               *     If set to `Deny`, then no matched parameters will be subject to the
               *     `failurePolicy` of the policy.
               *
               *     Allowed values are `Allow` or `Deny`
               *
               *     Required */
              parameterNotFoundAction?: string;
              /** @description selector can be used to match multiple param objects based on their labels.
               *     Supply selector: {} to match all resources of the ParamKind.
               *
               *     If multiple params are found, they are all evaluated with the policy expressions
               *     and the results are ANDed together.
               *
               *     One of `name` or `selector` must be set, but `name` and `selector` are
               *     mutually exclusive properties. If one is set, the other must be unset. */
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
            /** @description Variables contain definitions of variables that can be used in composition of other expressions.
             *     Each variable is defined as a named CEL expression.
             *     The variables defined here will be available under `variables` in other expressions of the policy. */
            variables?: {
              /** @description Expression is the expression that will be evaluated as the value of the variable.
               *     The CEL expression has access to the same identifiers as the CEL expressions in Validation. */
              expression: string;
              /** @description Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables.
               *     The variable can be accessed in other expressions through `variables`
               *     For example, if name is "foo", the variable will be available as `variables.foo` */
              name: string;
            }[];
          };
          /** @description Deny defines conditions used to pass or fail a validation rule. */
          deny?: {
            /** @description Multiple conditions can be declared under an `any` or `all` statement.
             *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
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
          };
          /**
           * @description FailureAction defines if a validation policy rule violation should block
           *     the admission review request (Enforce), or allow (Audit) the admission review request
           *     and report an error in a policy report. Optional.
           *     Allowed values are Audit or Enforce.
           * @enum {string}
           */
          failureAction?: "Audit" | "Enforce";
          /** @description FailureActionOverrides is a Cluster Policy attribute that specifies FailureAction
           *     namespace-wise. It overrides FailureAction for the specified namespaces. */
          failureActionOverrides?: {
            /**
             * @description ValidationFailureAction defines the policy validation failure action
             * @enum {string}
             */
            action?: "audit" | "enforce" | "Audit" | "Enforce";
            /** @description A label selector is a label query over a set of resources. The result of matchLabels and
             *     matchExpressions are ANDed. An empty label selector matches all objects. A null
             *     label selector matches no objects. */
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
            namespaces?: string[];
          }[];
          /** @description ForEach applies validate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
          foreach?: {
            /** @description AnyPattern specifies list of validation patterns. At least one of the patterns
             *     must be satisfied for the validation rule to succeed. */
            anyPattern?: unknown;
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
            /** @description Deny defines conditions used to pass or fail a validation rule. */
            deny?: {
              /** @description Multiple conditions can be declared under an `any` or `all` statement. A direct list
               *     of conditions (without `any` or `all` statements) is also supported for backwards compatibility
               *     but will be deprecated in the next major release.
               *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
              conditions?: unknown;
            };
            /** @description ElementScope specifies whether to use the current list element as the scope for validation. Defaults to "true" if not specified.
             *     When set to "false", "request.object" is used as the validation scope within the foreach
             *     block to allow referencing other elements in the subtree. */
            elementScope?: boolean;
            /** @description Foreach declares a nested foreach iterator */
            foreach?: unknown;
            /** @description List specifies a JMESPath expression that results in one or more elements
             *     to which the validation logic is applied. */
            list?: string;
            /** @description Pattern specifies an overlay-style pattern used to check resources. */
            pattern?: unknown;
            /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
             *     set of conditions. The declaration can contain nested `any` or `all` statements.
             *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
            preconditions?: {
              /** @description AllConditions enable variable-based conditional rule execution. This is useful for
               *     finer control of when an rule is applied. A condition can reference object data
               *     using JMESPath notation.
               *     Here, all of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
               *     Here, at least one of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
          }[];
          /** @description Manifest specifies conditions for manifest verification */
          manifests?: {
            /** @description AnnotationDomain is custom domain of annotation for message and signature. Default is "cosign.sigstore.dev". */
            annotationDomain?: string;
            /** @description Attestors specified the required attestors (i.e. authorities) */
            attestors?: {
              /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
               *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
               *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
              count?: number;
              /** @description Entries contains the available attestors. An attestor can be a static key,
               *     attributes for keyless verification, or a nested attestor declaration. */
              entries?: {
                /** @description Annotations are used for image verification.
                 *     Every specified key-value pair must exist and match in the verified payload.
                 *     The payload may contain other key-value pairs. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
                attestor?: unknown;
                /** @description Certificates specifies one or more certificates. */
                certificates?: {
                  /** @description Cert is an optional PEM-encoded public certificate. */
                  cert?: string;
                  /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                  certChain?: string;
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                };
                /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
                 *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
                keyless?: {
                  /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                  additionalExtensions?: {
                    [key: string]: string;
                  };
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Issuer is the certificate issuer used for keyless signing. */
                  issuer?: string;
                  /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                  issuerRegExp?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Roots is an optional set of PEM encoded trusted root certificates.
                   *     If not provided, the system roots are used. */
                  roots?: string;
                  /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                  subject?: string;
                  /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                  subjectRegExp?: string;
                };
                /** @description Keys specifies one or more public keys. */
                keys?: {
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                   *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                  kms?: string;
                  /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                   *     specified or can be a variable reference to a key specified in a ConfigMap (see
                   *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                   *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                   *     The named Secret must specify a key `cosign.pub` containing the public key used for
                   *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                   *     When multiple keys are specified each key is processed as a separate staticKey entry
                   *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                  publicKeys?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Reference to a Secret resource that contains a public key */
                  secret?: {
                    /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                    name: string;
                    /** @description Namespace name where the Secret exists. */
                    namespace: string;
                  };
                  /**
                   * @description Deprecated. Use attestor.signatureAlgorithm instead.
                   * @default sha256
                   */
                  signatureAlgorithm: string;
                };
                /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
                 *     If specified Repository will override other OCI image repository locations for this Attestor. */
                repository?: string;
                /**
                 * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
                 * @default sha256
                 */
                signatureAlgorithm: string;
              }[];
            }[];
            /** @description DryRun configuration */
            dryRun?: {
              enable?: boolean;
              namespace?: string;
            };
            /** @description Fields which will be ignored while comparing manifests. */
            ignoreFields?: {
              fields?: string[];
              objects?: {
                group?: string;
                kind?: string;
                name?: string;
                namespace?: string;
                version?: string;
              }[];
            }[];
            /** @description Repository is an optional alternate OCI repository to use for resource bundle reference.
             *     The repository can be overridden per Attestor or Attestation. */
            repository?: string;
          };
          /** @description Message specifies a custom message to be displayed on failure. */
          message?: string;
          /** @description Pattern specifies an overlay-style pattern used to check resources. */
          pattern?: unknown;
          /** @description PodSecurity applies exemptions for Kubernetes Pod Security admission
           *     by specifying exclusions for Pod Security Standards controls. */
          podSecurity?: {
            /** @description Exclude specifies the Pod Security Standard controls to be excluded. */
            exclude?: {
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
            /**
             * @description Level defines the Pod Security Standard level to be applied to workloads.
             *     Allowed values are privileged, baseline, and restricted.
             * @enum {string}
             */
            level?: "privileged" | "baseline" | "restricted";
            /**
             * @description Version defines the Pod Security Standard versions that Kubernetes supports.
             *     Allowed values are v1.19, v1.20, v1.21, v1.22, v1.23, v1.24, v1.25, v1.26, v1.27, v1.28, v1.29, latest. Defaults to latest.
             * @enum {string}
             */
            version?:
              | "v1.19"
              | "v1.20"
              | "v1.21"
              | "v1.22"
              | "v1.23"
              | "v1.24"
              | "v1.25"
              | "v1.26"
              | "v1.27"
              | "v1.28"
              | "v1.29"
              | "latest";
          };
        };
        /** @description VerifyImages is used to verify image signatures and mutate them to add a digest */
        verifyImages?: {
          /** @description Attestations are optional checks for signed in-toto Statements used to verify the image.
           *     See https://github.com/in-toto/attestation. Kyverno fetches signed attestations from the
           *     OCI registry and decodes them into a list of Statement declarations. */
          attestations?: {
            /** @description Attestors specify the required attestors (i.e. authorities). */
            attestors?: {
              /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
               *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
               *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
              count?: number;
              /** @description Entries contains the available attestors. An attestor can be a static key,
               *     attributes for keyless verification, or a nested attestor declaration. */
              entries?: {
                /** @description Annotations are used for image verification.
                 *     Every specified key-value pair must exist and match in the verified payload.
                 *     The payload may contain other key-value pairs. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
                attestor?: unknown;
                /** @description Certificates specifies one or more certificates. */
                certificates?: {
                  /** @description Cert is an optional PEM-encoded public certificate. */
                  cert?: string;
                  /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                  certChain?: string;
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                };
                /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
                 *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
                keyless?: {
                  /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                  additionalExtensions?: {
                    [key: string]: string;
                  };
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Issuer is the certificate issuer used for keyless signing. */
                  issuer?: string;
                  /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                  issuerRegExp?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Roots is an optional set of PEM encoded trusted root certificates.
                   *     If not provided, the system roots are used. */
                  roots?: string;
                  /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                  subject?: string;
                  /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                  subjectRegExp?: string;
                };
                /** @description Keys specifies one or more public keys. */
                keys?: {
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                   *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                  kms?: string;
                  /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                   *     specified or can be a variable reference to a key specified in a ConfigMap (see
                   *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                   *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                   *     The named Secret must specify a key `cosign.pub` containing the public key used for
                   *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                   *     When multiple keys are specified each key is processed as a separate staticKey entry
                   *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                  publicKeys?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Reference to a Secret resource that contains a public key */
                  secret?: {
                    /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                    name: string;
                    /** @description Namespace name where the Secret exists. */
                    namespace: string;
                  };
                  /**
                   * @description Deprecated. Use attestor.signatureAlgorithm instead.
                   * @default sha256
                   */
                  signatureAlgorithm: string;
                };
                /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
                 *     If specified Repository will override other OCI image repository locations for this Attestor. */
                repository?: string;
                /**
                 * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
                 * @default sha256
                 */
                signatureAlgorithm: string;
              }[];
            }[];
            /** @description Conditions are used to verify attributes within a Predicate. If no Conditions are specified
             *     the attestation check is satisfied as long there are predicates that match the predicate type. */
            conditions?: {
              /** @description AllConditions enable variable-based conditional rule execution. This is useful for
               *     finer control of when an rule is applied. A condition can reference object data
               *     using JMESPath notation.
               *     Here, all of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
               *     Here, at least one of the conditions need to pass */
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
                  | "In"
                  | "AnyIn"
                  | "AllIn"
                  | "NotIn"
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
            }[];
            /** @description Name is the variable name. */
            name?: string;
            /** @description Deprecated in favour of 'Type', to be removed soon */
            predicateType?: string;
            /** @description Type defines the type of attestation contained within the Statement. */
            type?: string;
          }[];
          /** @description Attestors specified the required attestors (i.e. authorities) */
          attestors?: {
            /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
             *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
             *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
            count?: number;
            /** @description Entries contains the available attestors. An attestor can be a static key,
             *     attributes for keyless verification, or a nested attestor declaration. */
            entries?: {
              /** @description Annotations are used for image verification.
               *     Every specified key-value pair must exist and match in the verified payload.
               *     The payload may contain other key-value pairs. */
              annotations?: {
                [key: string]: string;
              };
              /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
              attestor?: unknown;
              /** @description Certificates specifies one or more certificates. */
              certificates?: {
                /** @description Cert is an optional PEM-encoded public certificate. */
                cert?: string;
                /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                certChain?: string;
                /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                 *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                ctlog?: {
                  /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                   *     timestamp. Default is false. Set to true if this was opted out during signing. */
                  ignoreSCT?: boolean;
                  /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                  pubkey?: string;
                  /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                   *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                   *     may contain the leaf TSA certificate if not present in the timestamurce. */
                  tsaCertChain?: string;
                };
                /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                 *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                rekor?: {
                  /** @description IgnoreTlog skips transparency log verification. */
                  ignoreTlog?: boolean;
                  /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                   *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                  pubkey?: string;
                  /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                  url?: string;
                };
              };
              /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
               *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
              keyless?: {
                /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                additionalExtensions?: {
                  [key: string]: string;
                };
                /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                 *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                ctlog?: {
                  /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                   *     timestamp. Default is false. Set to true if this was opted out during signing. */
                  ignoreSCT?: boolean;
                  /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                  pubkey?: string;
                  /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                   *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                   *     may contain the leaf TSA certificate if not present in the timestamurce. */
                  tsaCertChain?: string;
                };
                /** @description Issuer is the certificate issuer used for keyless signing. */
                issuer?: string;
                /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                issuerRegExp?: string;
                /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                 *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                rekor?: {
                  /** @description IgnoreTlog skips transparency log verification. */
                  ignoreTlog?: boolean;
                  /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                   *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                  pubkey?: string;
                  /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                  url?: string;
                };
                /** @description Roots is an optional set of PEM encoded trusted root certificates.
                 *     If not provided, the system roots are used. */
                roots?: string;
                /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                subject?: string;
                /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                subjectRegExp?: string;
              };
              /** @description Keys specifies one or more public keys. */
              keys?: {
                /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                 *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                ctlog?: {
                  /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                   *     timestamp. Default is false. Set to true if this was opted out during signing. */
                  ignoreSCT?: boolean;
                  /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                  pubkey?: string;
                  /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                   *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                   *     may contain the leaf TSA certificate if not present in the timestamurce. */
                  tsaCertChain?: string;
                };
                /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                 *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                kms?: string;
                /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                 *     specified or can be a variable reference to a key specified in a ConfigMap (see
                 *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                 *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                 *     The named Secret must specify a key `cosign.pub` containing the public key used for
                 *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                 *     When multiple keys are specified each key is processed as a separate staticKey entry
                 *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                publicKeys?: string;
                /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                 *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                rekor?: {
                  /** @description IgnoreTlog skips transparency log verification. */
                  ignoreTlog?: boolean;
                  /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                   *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                  pubkey?: string;
                  /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                  url?: string;
                };
                /** @description Reference to a Secret resource that contains a public key */
                secret?: {
                  /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                  name: string;
                  /** @description Namespace name where the Secret exists. */
                  namespace: string;
                };
                /**
                 * @description Deprecated. Use attestor.signatureAlgorithm instead.
                 * @default sha256
                 */
                signatureAlgorithm: string;
              };
              /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
               *     If specified Repository will override other OCI image repository locations for this Attestor. */
              repository?: string;
              /**
               * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
               * @default sha256
               */
              signatureAlgorithm: string;
            }[];
          }[];
          /**
           * @description Allowed values are Audit or Enforce.
           * @enum {string}
           */
          failureAction?: "Audit" | "Enforce";
          /** @description ImageReferences is a list of matching image reference patterns. At least one pattern in the
           *     list must match the image for the rule to apply. Each image reference consists of a registry
           *     address (defaults to docker.io), repository, image, and tag (defaults to latest).
           *     Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. */
          imageReferences?: string[];
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
          /**
           * @description MutateDigest enables replacement of image tags with digests.
           *     Defaults to true.
           * @default true
           */
          mutateDigest: boolean;
          /** @description Repository is an optional alternate OCI repository to use for image signatures and attestations that match this rule.
           *     If specified Repository will override the default OCI image repository configured for the installation.
           *     The repository can also be overridden per Attestor or Attestation. */
          repository?: string;
          /**
           * @description Required validates that images are verified i.e. have matched passed a signature or attestation check.
           * @default true
           */
          required: boolean;
          /** @description SkipImageReferences is a list of matching image reference patterns that should be skipped.
           *     At least one pattern in the list must match the image for the rule to be skipped. Each image reference
           *     consists of a registry address (defaults to docker.io), repository, image, and tag (defaults to latest).
           *     Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. */
          skipImageReferences?: string[];
          /**
           * @description Type specifies the method of signature validation. The allowed options
           *     are Cosign and Notary. By default Cosign is used if a type is not specified.
           * @enum {string}
           */
          type?: "Cosign" | "SigstoreBundle" | "Notary";
          /**
           * @description UseCache enables caching of image verify responses for this rule
           * @default true
           */
          useCache: boolean;
          /** @description Validation checks conditions across multiple image
           *     verification attestations or context entries */
          validate?: {
            /** @description Deny defines conditions used to pass or fail a validation rule. */
            deny?: {
              /** @description Multiple conditions can be declared under an `any` or `all` statement. A direct list
               *     of conditions (without `any` or `all` statements) is also supported for backwards compatibility
               *     but will be deprecated in the next major release.
               *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
              conditions?: unknown;
            };
            /** @description Message specifies a custom message to be displayed on failure. */
            message?: string;
          };
          /**
           * @description VerifyDigest validates that images have a digest.
           * @default true
           */
          verifyDigest: boolean;
        }[];
      }[];
      /** @description Deprecated. */
      schemaValidation?: boolean;
      /** @description UseServerSideApply controls whether to use server-side apply for generate rules
       *     If is set to "true" create & update for generate rules will use apply instead of create/update.
       *     Defaults to "false" if not specified. */
      useServerSideApply?: boolean;
      /** @description Deprecated, use validationFailureAction under the validate rule instead. */
      validationFailureAction?: string;
      /** @description Deprecated, use validationFailureActionOverrides under the validate rule instead. */
      validationFailureActionOverrides?: {
        /**
         * @description ValidationFailureAction defines the policy validation failure action
         * @enum {string}
         */
        action?: "audit" | "enforce" | "Audit" | "Enforce";
        /** @description A label selector is a label query over a set of resources. The result of matchLabels and
         *     matchExpressions are ANDed. An empty label selector matches all objects. A null
         *     label selector matches no objects. */
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
        namespaces?: string[];
      }[];
      /** @description WebhookConfiguration specifies the custom configuration for Kubernetes admission webhookconfiguration. */
      webhookConfiguration?: {
        /** @description FailurePolicy defines how unexpected policy errors and webhook response timeout errors are handled.
         *     Rules within the same policy share the same failure behavior.
         *     This field should not be accessed directly, instead `GetFailurePolicy()` should be used.
         *     Allowed values are Ignore or Fail. Defaults to Fail. */
        failurePolicy?: string;
        /** @description MatchCondition configures admission webhook matchConditions.
         *     Requires Kubernetes 1.27 or later. */
        matchConditions?: {
          /** @description Expression represents the expression which will be evaluated by CEL. Must evaluate to bool.
           *     CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:
           *
           *     'object' - The object from the incoming request. The value is null for DELETE requests.
           *     'oldObject' - The existing object. The value is null for CREATE requests.
           *     'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest).
           *     'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
           *       See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
           *     'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
           *       request resource.
           *     Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/
           *
           *     Required. */
          expression: string;
          /** @description Name is an identifier for this match condition, used for strategic merging of MatchConditions,
           *     as well as providing an identifier for logging purposes. A good name should be descriptive of
           *     the associated expression.
           *     Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and
           *     must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or
           *     '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an
           *     optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')
           *
           *     Required. */
          name: string;
        }[];
        /**
         * Format: int32
         * @description TimeoutSeconds specifies the maximum time in seconds allowed to apply this policy.
         *     After the configured time expires, the admission request may fail, or may simply ignore the policy results,
         *     based on the failure policy. The default timeout is 10s, the value must be between 1 and 30 seconds.
         */
        timeoutSeconds?: number;
      };
      /**
       * Format: int32
       * @description Deprecated, use webhookTimeoutSeconds under webhookConfiguration instead.
       */
      webhookTimeoutSeconds?: number;
    };
    /** @description Status contains policy runtime data. */
    status?: {
      /** @description AutogenStatus contains autogen status information. */
      autogen?: {
        /** @description Rules is a list of Rule instances. It contains auto generated rules added for pod controllers */
        rules?: {
          /** @description CELPreconditions are used to determine if a policy rule should be applied by evaluating a
           *     set of CEL conditions. It can only be used with the validate.cel subrule */
          celPreconditions?: {
            /** @description Expression represents the expression which will be evaluated by CEL. Must evaluate to bool.
             *     CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:
             *
             *     'object' - The object from the incoming request. The value is null for DELETE requests.
             *     'oldObject' - The existing object. The value is null for CREATE requests.
             *     'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest).
             *     'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
             *       See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
             *     'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
             *       request resource.
             *     Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/
             *
             *     Required. */
            expression: string;
            /** @description Name is an identifier for this match condition, used for strategic merging of MatchConditions,
             *     as well as providing an identifier for logging purposes. A good name should be descriptive of
             *     the associated expression.
             *     Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and
             *     must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or
             *     '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an
             *     optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')
             *
             *     Required. */
            name: string;
          }[];
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
          /** @description ExcludeResources defines when this policy rule should not be applied. The exclude
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
            /** @description ClusterRoles is the list of cluster-wide role names for the user. */
            clusterRoles?: string[];
            /** @description ResourceDescription contains information about the resource being created or modified.
             *     Requires at least one tag to be specified when under MatchResources.
             *     Specifying ResourceDescription directly under match is being deprecated.
             *     Please specify under "any" or "all" instead. */
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
          };
          /** @description Generation is used to create new resources. */
          generate?: {
            /** @description APIVersion specifies resource apiVersion. */
            apiVersion?: string;
            /** @description Clone specifies the source resource used to populate each generated resource.
             *     At most one of Data or Clone can be specified. If neither are provided, the generated
             *     resource will be created with default data only. */
            clone?: {
              /** @description Name specifies name of the resource. */
              name?: string;
              /** @description Namespace specifies source resource namespace. */
              namespace?: string;
            };
            /** @description CloneList specifies the list of source resource used to populate each generated resource. */
            cloneList?: {
              /** @description Kinds is a list of resource kinds. */
              kinds?: string[];
              /** @description Namespace specifies source resource namespace. */
              namespace?: string;
              /** @description Selector is a label selector. Label keys and values in `matchLabels`.
               *     wildcard characters are not supported. */
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
            /** @description Data provides the resource declaration used to populate each generated resource.
             *     At most one of Data or Clone must be specified. If neither are provided, the generated
             *     resource will be created with default data only. */
            data?: unknown;
            /** @description ForEach applies generate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
            foreach?: {
              /** @description APIVersion specifies resource apiVersion. */
              apiVersion?: string;
              /** @description Clone specifies the source resource used to populate each generated resource.
               *     At most one of Data or Clone can be specified. If neither are provided, the generated
               *     resource will be created with default data only. */
              clone?: {
                /** @description Name specifies name of the resource. */
                name?: string;
                /** @description Namespace specifies source resource namespace. */
                namespace?: string;
              };
              /** @description CloneList specifies the list of source resource used to populate each generated resource. */
              cloneList?: {
                /** @description Kinds is a list of resource kinds. */
                kinds?: string[];
                /** @description Namespace specifies source resource namespace. */
                namespace?: string;
                /** @description Selector is a label selector. Label keys and values in `matchLabels`.
                 *     wildcard characters are not supported. */
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
              /** @description Data provides the resource declaration used to populate each generated resource.
               *     At most one of Data or Clone must be specified. If neither are provided, the generated
               *     resource will be created with default data only. */
              data?: unknown;
              /** @description Kind specifies resource kind. */
              kind?: string;
              /** @description List specifies a JMESPath expression that results in one or more elements
               *     to which the validation logic is applied. */
              list?: string;
              /** @description Name specifies the resource name. */
              name?: string;
              /** @description Namespace specifies resource namespace. */
              namespace?: string;
              /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
               *     set of conditions. The declaration can contain nested `any` or `all` statements.
               *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
              preconditions?: {
                /** @description AllConditions enable variable-based conditional rule execution. This is useful for
                 *     finer control of when an rule is applied. A condition can reference object data
                 *     using JMESPath notation.
                 *     Here, all of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
                 *     Here, at least one of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
              /** @description UID specifies the resource uid. */
              uid?: string;
            }[];
            /** @description GenerateExisting controls whether to trigger the rule in existing resources
             *     If is set to "true" the rule will be triggered and applied to existing matched resources. */
            generateExisting?: boolean;
            /** @description Kind specifies resource kind. */
            kind?: string;
            /** @description Name specifies the resource name. */
            name?: string;
            /** @description Namespace specifies resource namespace. */
            namespace?: string;
            /** @description OrphanDownstreamOnPolicyDelete controls whether generated resources should be deleted when the rule that generated
             *     them is deleted with synchronization enabled. This option is only applicable to generate rules of the data type.
             *     See https://kyverno.io/docs/writing-policies/generate/#data-examples.
             *     Defaults to "false" if not specified. */
            orphanDownstreamOnPolicyDelete?: boolean;
            /** @description Synchronize controls if generated resources should be kept in-sync with their source resource.
             *     If Synchronize is set to "true" changes to generated resources will be overwritten with resource
             *     data from Data or the resource specified in the Clone declaration.
             *     Optional. Defaults to "false" if not specified. */
            synchronize?: boolean;
            /** @description UID specifies the resource uid. */
            uid?: string;
          };
          /** @description ImageExtractors defines a mapping from kinds to ImageExtractorConfigs.
           *     This config is only valid for verifyImages rules. */
          imageExtractors?: {
            [key: string]: {
              /** @description JMESPath is an optional JMESPath expression to apply to the image value.
               *     This is useful when the extracted image begins with a prefix like 'docker://'.
               *     The 'trim_prefix' function may be used to trim the prefix: trim_prefix(@, 'docker://').
               *     Note - Image digest mutation may not be used when applying a JMESPAth to an image. */
              jmesPath?: string;
              /** @description Key is an optional name of the field within 'path' that will be used to uniquely identify an image.
               *     Note - this field MUST be unique. */
              key?: string;
              /** @description Name is the entry the image will be available under 'images.<name>' in the context.
               *     If this field is not defined, image entries will appear under 'images.custom'. */
              name?: string;
              /** @description Path is the path to the object containing the image field in a custom resource.
               *     It should be slash-separated. Each slash-separated key must be a valid YAML key or a wildcard '*'.
               *     Wildcard keys are expanded in case of arrays or objects. */
              path: string;
              /** @description Value is an optional name of the field within 'path' that points to the image URI.
               *     This is useful when a custom 'key' is also defined. */
              value?: string;
            }[];
          };
          /** @description MatchResources defines when this policy rule should be applied. The match
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
            /** @description ClusterRoles is the list of cluster-wide role names for the user. */
            clusterRoles?: string[];
            /** @description ResourceDescription contains information about the resource being created or modified.
             *     Requires at least one tag to be specified when under MatchResources.
             *     Specifying ResourceDescription directly under match is being deprecated.
             *     Please specify under "any" or "all" instead. */
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
          };
          /** @description Mutation is used to modify matching resources. */
          mutate?: {
            /** @description ForEach applies mutation rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
            foreach?: {
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
              /** @description Foreach declares a nested foreach iterator */
              foreach?: unknown;
              /** @description List specifies a JMESPath expression that results in one or more elements
               *     to which the validation logic is applied. */
              list?: string;
              /**
               * @description Order defines the iteration order on the list.
               *     Can be Ascending to iterate from first to last element or Descending to iterate in from last to first element.
               * @enum {string}
               */
              order?: "Ascending" | "Descending";
              /** @description PatchStrategicMerge is a strategic merge patch used to modify resources.
               *     See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/
               *     and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/. */
              patchStrategicMerge?: unknown;
              /** @description PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources.
               *     See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/. */
              patchesJson6902?: string;
              /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
               *     set of conditions. The declaration can contain nested `any` or `all` statements.
               *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
              preconditions?: {
                /** @description AllConditions enable variable-based conditional rule execution. This is useful for
                 *     finer control of when an rule is applied. A condition can reference object data
                 *     using JMESPath notation.
                 *     Here, all of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
                 *     Here, at least one of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
            }[];
            /** @description MutateExistingOnPolicyUpdate controls if the mutateExisting rule will be applied on policy events. */
            mutateExistingOnPolicyUpdate?: boolean;
            /** @description PatchStrategicMerge is a strategic merge patch used to modify resources.
             *     See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/
             *     and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/. */
            patchStrategicMerge?: unknown;
            /** @description PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources.
             *     See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/. */
            patchesJson6902?: string;
            /** @description Targets defines the target resources to be mutated. */
            targets?: {
              /** @description APIVersion specifies resource apiVersion. */
              apiVersion?: string;
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
              /** @description Kind specifies resource kind. */
              kind?: string;
              /** @description Name specifies the resource name. */
              name?: string;
              /** @description Namespace specifies resource namespace. */
              namespace?: string;
              /** @description Preconditions are used to determine if a policy rule should be applied by evaluating a
               *     set of conditions. The declaration can contain nested `any` or `all` statements. A direct list
               *     of conditions (without `any` or `all` statements is supported for backwards compatibility but
               *     will be deprecated in the next major release.
               *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
              preconditions?: unknown;
              /** @description Selector allows you to select target resources with their labels. */
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
              /** @description UID specifies the resource uid. */
              uid?: string;
            }[];
          };
          /** @description Name is a label to identify the rule, It must be unique within the policy. */
          name: string;
          /** @description Preconditions are used to determine if a policy rule should be applied by evaluating a
           *     set of conditions. The declaration can contain nested `any` or `all` statements. A direct list
           *     of conditions (without `any` or `all` statements is supported for backwards compatibility but
           *     will be deprecated in the next major release.
           *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
          preconditions?: unknown;
          /** @description ReportProperties are the additional properties from the rule that will be added to the policy report result */
          reportProperties?: {
            [key: string]: string;
          };
          /**
           * @description SkipBackgroundRequests bypasses admission requests that are sent by the background controller.
           *     The default value is set to "true", it must be set to "false" to apply
           *     generate and mutateExisting rules to those requests.
           * @default true
           */
          skipBackgroundRequests: boolean;
          /** @description Validation is used to validate matching resources. */
          validate?: {
            /**
             * @description AllowExistingViolations allows prexisting violating resources to continue violating a policy.
             * @default true
             */
            allowExistingViolations: boolean;
            /** @description AnyPattern specifies list of validation patterns. At least one of the patterns
             *     must be satisfied for the validation rule to succeed. */
            anyPattern?: unknown;
            /** @description Assert defines a kyverno-json assertion tree. */
            assert?: Record<string, never>;
            /** @description CEL allows validation checks using the Common Expression Language (https://kubernetes.io/docs/reference/using-api/cel/). */
            cel?: {
              /** @description AuditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. */
              auditAnnotations?: {
                /** @description key specifies the audit annotation key. The audit annotation keys of
                 *     a ValidatingAdmissionPolicy must be unique. The key must be a qualified
                 *     name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.
                 *
                 *     The key is combined with the resource name of the
                 *     ValidatingAdmissionPolicy to construct an audit annotation key:
                 *     "{ValidatingAdmissionPolicy name}/{key}".
                 *
                 *     If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy
                 *     and the same audit annotation key, the annotation key will be identical.
                 *     In this case, the first annotation written with the key will be included
                 *     in the audit event and all subsequent annotations with the same key
                 *     will be discarded.
                 *
                 *     Required. */
                key: string;
                /** @description valueExpression represents the expression which is evaluated by CEL to
                 *     produce an audit annotation value. The expression must evaluate to either
                 *     a string or null value. If the expression evaluates to a string, the
                 *     audit annotation is included with the string value. If the expression
                 *     evaluates to null or empty string the audit annotation will be omitted.
                 *     The valueExpression may be no longer than 5kb in length.
                 *     If the result of the valueExpression is more than 10kb in length, it
                 *     will be truncated to 10kb.
                 *
                 *     If multiple ValidatingAdmissionPolicyBinding resources match an
                 *     API request, then the valueExpression will be evaluated for
                 *     each binding. All unique values produced by the valueExpressions
                 *     will be joined together in a comma-separated list.
                 *
                 *     Required. */
                valueExpression: string;
              }[];
              /** @description Expressions is a list of CELExpression types. */
              expressions?: {
                /** @description Expression represents the expression which will be evaluated by CEL.
                 *     ref: https://github.com/google/cel-spec
                 *     CEL expressions have access to the contents of the API request/response, organized into CEL variables as well as some other useful variables:
                 *
                 *     - 'object' - The object from the incoming request. The value is null for DELETE requests.
                 *     - 'oldObject' - The existing object. The value is null for CREATE requests.
                 *     - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)).
                 *     - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind.
                 *     - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources.
                 *     - 'variables' - Map of composited variables, from its name to its lazily evaluated value.
                 *       For example, a variable named 'foo' can be accessed as 'variables.foo'.
                 *     - 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
                 *       See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
                 *     - 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
                 *       request resource.
                 *
                 *     The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the
                 *     object. No other metadata properties are accessible.
                 *
                 *     Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible.
                 *     Accessible property names are escaped according to the following rules when accessed in the expression:
                 *     - '__' escapes to '__underscores__'
                 *     - '.' escapes to '__dot__'
                 *     - '-' escapes to '__dash__'
                 *     - '/' escapes to '__slash__'
                 *     - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:
                 *     	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",
                 *     	  "import", "let", "loop", "package", "namespace", "return".
                 *     Examples:
                 *       - Expression accessing a property named "namespace": {"Expression": "object.__namespace__ > 0"}
                 *       - Expression accessing a property named "x-prop": {"Expression": "object.x__dash__prop > 0"}
                 *       - Expression accessing a property named "redact__d": {"Expression": "object.redact__underscores__d > 0"}
                 *
                 *     Equality on arrays with list type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1].
                 *     Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:
                 *       - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and
                 *         non-intersecting elements in `Y` are appended, retaining their partial order.
                 *       - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values
                 *         are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with
                 *         non-intersecting keys are appended, retaining their partial order.
                 *     Required. */
                expression: string;
                /** @description Message represents the message displayed when validation fails. The message is required if the Expression contains
                 *     line breaks. The message must not contain line breaks.
                 *     If unset, the message is "failed rule: {Rule}".
                 *     e.g. "must be a URL with the host matching spec.host"
                 *     If the Expression contains line breaks. Message is required.
                 *     The message must not contain line breaks.
                 *     If unset, the message is "failed Expression: {Expression}". */
                message?: string;
                /** @description messageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails.
                 *     Since messageExpression is used as a failure message, it must evaluate to a string.
                 *     If both message and messageExpression are present on a validation, then messageExpression will be used if validation fails.
                 *     If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced
                 *     as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string
                 *     that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and
                 *     the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged.
                 *     messageExpression has access to all the same variables as the `expression` except for 'authorizer' and 'authorizer.requestResource'.
                 *     Example:
                 *     "object.x must be less than max ("+string(params.max)+")" */
                messageExpression?: string;
                /** @description Reason represents a machine-readable description of why this validation failed.
                 *     If this is the first validation in the list to fail, this reason, as well as the
                 *     corresponding HTTP response code, are used in the
                 *     HTTP response to the client.
                 *     The currently supported reasons are: "Unauthorized", "Forbidden", "Invalid", "RequestEntityTooLarge".
                 *     If not set, StatusReasonInvalid is used in the response to the client. */
                reason?: string;
              }[];
              /** @description ParamKind is a tuple of Group Kind and Version. */
              paramKind?: {
                /** @description APIVersion is the API group version the resources belong to.
                 *     In format of "group/version".
                 *     Required. */
                apiVersion?: string;
                /** @description Kind is the API kind the resources belong to.
                 *     Required. */
                kind?: string;
              };
              /** @description ParamRef references a parameter resource. */
              paramRef?: {
                /** @description name is the name of the resource being referenced.
                 *
                 *     One of `name` or `selector` must be set, but `name` and `selector` are
                 *     mutually exclusive properties. If one is set, the other must be unset.
                 *
                 *     A single parameter used for all admission requests can be configured
                 *     by setting the `name` field, leaving `selector` blank, and setting namespace
                 *     if `paramKind` is namespace-scoped. */
                name?: string;
                /** @description namespace is the namespace of the referenced resource. Allows limiting
                 *     the search for params to a specific namespace. Applies to both `name` and
                 *     `selector` fields.
                 *
                 *     A per-namespace parameter may be used by specifying a namespace-scoped
                 *     `paramKind` in the policy and leaving this field empty.
                 *
                 *     - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this
                 *     field results in a configuration error.
                 *
                 *     - If `paramKind` is namespace-scoped, the namespace of the object being
                 *     evaluated for admission will be used when this field is left unset. Take
                 *     care that if this is left empty the binding must not match any cluster-scoped
                 *     resources, which will result in an error. */
                namespace?: string;
                /** @description `parameterNotFoundAction` controls the behavior of the binding when the resource
                 *     exists, and name or selector is valid, but there are no parameters
                 *     matched by the binding. If the value is set to `Allow`, then no
                 *     matched parameters will be treated as successful validation by the binding.
                 *     If set to `Deny`, then no matched parameters will be subject to the
                 *     `failurePolicy` of the policy.
                 *
                 *     Allowed values are `Allow` or `Deny`
                 *
                 *     Required */
                parameterNotFoundAction?: string;
                /** @description selector can be used to match multiple param objects based on their labels.
                 *     Supply selector: {} to match all resources of the ParamKind.
                 *
                 *     If multiple params are found, they are all evaluated with the policy expressions
                 *     and the results are ANDed together.
                 *
                 *     One of `name` or `selector` must be set, but `name` and `selector` are
                 *     mutually exclusive properties. If one is set, the other must be unset. */
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
              /** @description Variables contain definitions of variables that can be used in composition of other expressions.
               *     Each variable is defined as a named CEL expression.
               *     The variables defined here will be available under `variables` in other expressions of the policy. */
              variables?: {
                /** @description Expression is the expression that will be evaluated as the value of the variable.
                 *     The CEL expression has access to the same identifiers as the CEL expressions in Validation. */
                expression: string;
                /** @description Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables.
                 *     The variable can be accessed in other expressions through `variables`
                 *     For example, if name is "foo", the variable will be available as `variables.foo` */
                name: string;
              }[];
            };
            /** @description Deny defines conditions used to pass or fail a validation rule. */
            deny?: {
              /** @description Multiple conditions can be declared under an `any` or `all` statement. A direct list
               *     of conditions (without `any` or `all` statements) is also supported for backwards compatibility
               *     but will be deprecated in the next major release.
               *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
              conditions?: unknown;
            };
            /**
             * @description FailureAction defines if a validation policy rule violation should block
             *     the admission review request (Enforce), or allow (Audit) the admission review request
             *     and report an error in a policy report. Optional.
             *     Allowed values are Audit or Enforce.
             * @enum {string}
             */
            failureAction?: "Audit" | "Enforce";
            /** @description FailureActionOverrides is a Cluster Policy attribute that specifies FailureAction
             *     namespace-wise. It overrides FailureAction for the specified namespaces. */
            failureActionOverrides?: {
              /**
               * @description ValidationFailureAction defines the policy validation failure action
               * @enum {string}
               */
              action?: "audit" | "enforce" | "Audit" | "Enforce";
              /** @description A label selector is a label query over a set of resources. The result of matchLabels and
               *     matchExpressions are ANDed. An empty label selector matches all objects. A null
               *     label selector matches no objects. */
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
              namespaces?: string[];
            }[];
            /** @description ForEach applies validate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic. */
            foreach?: {
              /** @description AnyPattern specifies list of validation patterns. At least one of the patterns
               *     must be satisfied for the validation rule to succeed. */
              anyPattern?: unknown;
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
              /** @description Deny defines conditions used to pass or fail a validation rule. */
              deny?: {
                /** @description Multiple conditions can be declared under an `any` or `all` statement. A direct list
                 *     of conditions (without `any` or `all` statements) is also supported for backwards compatibility
                 *     but will be deprecated in the next major release.
                 *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
                conditions?: unknown;
              };
              /** @description ElementScope specifies whether to use the current list element as the scope for validation. Defaults to "true" if not specified.
               *     When set to "false", "request.object" is used as the validation scope within the foreach
               *     block to allow referencing other elements in the subtree. */
              elementScope?: boolean;
              /** @description Foreach declares a nested foreach iterator */
              foreach?: unknown;
              /** @description List specifies a JMESPath expression that results in one or more elements
               *     to which the validation logic is applied. */
              list?: string;
              /** @description Pattern specifies an overlay-style pattern used to check resources. */
              pattern?: unknown;
              /** @description AnyAllConditions are used to determine if a policy rule should be applied by evaluating a
               *     set of conditions. The declaration can contain nested `any` or `all` statements.
               *     See: https://kyverno.io/docs/writing-policies/preconditions/ */
              preconditions?: {
                /** @description AllConditions enable variable-based conditional rule execution. This is useful for
                 *     finer control of when an rule is applied. A condition can reference object data
                 *     using JMESPath notation.
                 *     Here, all of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
                 *     Here, at least one of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
            }[];
            /** @description Manifest specifies conditions for manifest verification */
            manifests?: {
              /** @description AnnotationDomain is custom domain of annotation for message and signature. Default is "cosign.sigstore.dev". */
              annotationDomain?: string;
              /** @description Attestors specified the required attestors (i.e. authorities) */
              attestors?: {
                /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
                 *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
                 *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
                count?: number;
                /** @description Entries contains the available attestors. An attestor can be a static key,
                 *     attributes for keyless verification, or a nested attestor declaration. */
                entries?: {
                  /** @description Annotations are used for image verification.
                   *     Every specified key-value pair must exist and match in the verified payload.
                   *     The payload may contain other key-value pairs. */
                  annotations?: {
                    [key: string]: string;
                  };
                  /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
                  attestor?: unknown;
                  /** @description Certificates specifies one or more certificates. */
                  certificates?: {
                    /** @description Cert is an optional PEM-encoded public certificate. */
                    cert?: string;
                    /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                    certChain?: string;
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                  };
                  /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
                   *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
                  keyless?: {
                    /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                    additionalExtensions?: {
                      [key: string]: string;
                    };
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description Issuer is the certificate issuer used for keyless signing. */
                    issuer?: string;
                    /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                    issuerRegExp?: string;
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                    /** @description Roots is an optional set of PEM encoded trusted root certificates.
                     *     If not provided, the system roots are used. */
                    roots?: string;
                    /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                    subject?: string;
                    /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                    subjectRegExp?: string;
                  };
                  /** @description Keys specifies one or more public keys. */
                  keys?: {
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                     *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                    kms?: string;
                    /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                     *     specified or can be a variable reference to a key specified in a ConfigMap (see
                     *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                     *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                     *     The named Secret must specify a key `cosign.pub` containing the public key used for
                     *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                     *     When multiple keys are specified each key is processed as a separate staticKey entry
                     *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                    publicKeys?: string;
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                    /** @description Reference to a Secret resource that contains a public key */
                    secret?: {
                      /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                      name: string;
                      /** @description Namespace name where the Secret exists. */
                      namespace: string;
                    };
                    /**
                     * @description Deprecated. Use attestor.signatureAlgorithm instead.
                     * @default sha256
                     */
                    signatureAlgorithm: string;
                  };
                  /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
                   *     If specified Repository will override other OCI image repository locations for this Attestor. */
                  repository?: string;
                  /**
                   * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
                   * @default sha256
                   */
                  signatureAlgorithm: string;
                }[];
              }[];
              /** @description DryRun configuration */
              dryRun?: {
                enable?: boolean;
                namespace?: string;
              };
              /** @description Fields which will be ignored while comparing manifests. */
              ignoreFields?: {
                fields?: string[];
                objects?: {
                  group?: string;
                  kind?: string;
                  name?: string;
                  namespace?: string;
                  version?: string;
                }[];
              }[];
              /** @description Repository is an optional alternate OCI repository to use for resource bundle reference.
               *     The repository can be overridden per Attestor or Attestation. */
              repository?: string;
            };
            /** @description Message specifies a custom message to be displayed on failure. */
            message?: string;
            /** @description Pattern specifies an overlay-style pattern used to check resources. */
            pattern?: unknown;
            /** @description PodSecurity applies exemptions for Kubernetes Pod Security admission
             *     by specifying exclusions for Pod Security Standards controls. */
            podSecurity?: {
              /** @description Exclude specifies the Pod Security Standard controls to be excluded. */
              exclude?: {
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
              /**
               * @description Level defines the Pod Security Standard level to be applied to workloads.
               *     Allowed values are privileged, baseline, and restricted.
               * @enum {string}
               */
              level?: "privileged" | "baseline" | "restricted";
              /**
               * @description Version defines the Pod Security Standard versions that Kubernetes supports.
               *     Allowed values are v1.19, v1.20, v1.21, v1.22, v1.23, v1.24, v1.25, v1.26, v1.27, v1.28, v1.29, latest. Defaults to latest.
               * @enum {string}
               */
              version?:
                | "v1.19"
                | "v1.20"
                | "v1.21"
                | "v1.22"
                | "v1.23"
                | "v1.24"
                | "v1.25"
                | "v1.26"
                | "v1.27"
                | "v1.28"
                | "v1.29"
                | "latest";
            };
          };
          /** @description VerifyImages is used to verify image signatures and mutate them to add a digest */
          verifyImages?: {
            /** @description Deprecated. */
            additionalExtensions?: {
              [key: string]: string;
            };
            /** @description Deprecated. Use annotations per Attestor instead. */
            annotations?: {
              [key: string]: string;
            };
            /** @description Attestations are optional checks for signed in-toto Statements used to verify the image.
             *     See https://github.com/in-toto/attestation. Kyverno fetches signed attestations from the
             *     OCI registry and decodes them into a list of Statement declarations. */
            attestations?: {
              /** @description Attestors specify the required attestors (i.e. authorities). */
              attestors?: {
                /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
                 *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
                 *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
                count?: number;
                /** @description Entries contains the available attestors. An attestor can be a static key,
                 *     attributes for keyless verification, or a nested attestor declaration. */
                entries?: {
                  /** @description Annotations are used for image verification.
                   *     Every specified key-value pair must exist and match in the verified payload.
                   *     The payload may contain other key-value pairs. */
                  annotations?: {
                    [key: string]: string;
                  };
                  /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
                  attestor?: unknown;
                  /** @description Certificates specifies one or more certificates. */
                  certificates?: {
                    /** @description Cert is an optional PEM-encoded public certificate. */
                    cert?: string;
                    /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                    certChain?: string;
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                  };
                  /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
                   *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
                  keyless?: {
                    /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                    additionalExtensions?: {
                      [key: string]: string;
                    };
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description Issuer is the certificate issuer used for keyless signing. */
                    issuer?: string;
                    /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                    issuerRegExp?: string;
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                    /** @description Roots is an optional set of PEM encoded trusted root certificates.
                     *     If not provided, the system roots are used. */
                    roots?: string;
                    /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                    subject?: string;
                    /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                    subjectRegExp?: string;
                  };
                  /** @description Keys specifies one or more public keys. */
                  keys?: {
                    /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                     *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                    ctlog?: {
                      /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                       *     timestamp. Default is false. Set to true if this was opted out during signing. */
                      ignoreSCT?: boolean;
                      /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                      pubkey?: string;
                      /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                       *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                       *     may contain the leaf TSA certificate if not present in the timestamurce. */
                      tsaCertChain?: string;
                    };
                    /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                     *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                    kms?: string;
                    /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                     *     specified or can be a variable reference to a key specified in a ConfigMap (see
                     *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                     *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                     *     The named Secret must specify a key `cosign.pub` containing the public key used for
                     *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                     *     When multiple keys are specified each key is processed as a separate staticKey entry
                     *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                    publicKeys?: string;
                    /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                     *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                    rekor?: {
                      /** @description IgnoreTlog skips transparency log verification. */
                      ignoreTlog?: boolean;
                      /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                       *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                      pubkey?: string;
                      /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                      url?: string;
                    };
                    /** @description Reference to a Secret resource that contains a public key */
                    secret?: {
                      /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                      name: string;
                      /** @description Namespace name where the Secret exists. */
                      namespace: string;
                    };
                    /**
                     * @description Deprecated. Use attestor.signatureAlgorithm instead.
                     * @default sha256
                     */
                    signatureAlgorithm: string;
                  };
                  /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
                   *     If specified Repository will override other OCI image repository locations for this Attestor. */
                  repository?: string;
                  /**
                   * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
                   * @default sha256
                   */
                  signatureAlgorithm: string;
                }[];
              }[];
              /** @description Conditions are used to verify attributes within a Predicate. If no Conditions are specified
               *     the attestation check is satisfied as long there are predicates that match the predicate type. */
              conditions?: {
                /** @description AllConditions enable variable-based conditional rule execution. This is useful for
                 *     finer control of when an rule is applied. A condition can reference object data
                 *     using JMESPath notation.
                 *     Here, all of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
                 *     Here, at least one of the conditions need to pass */
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
                    | "In"
                    | "AnyIn"
                    | "AllIn"
                    | "NotIn"
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
              }[];
              /** @description Name is the variable name. */
              name?: string;
              /** @description Deprecated in favour of 'Type', to be removed soon */
              predicateType?: string;
              /** @description Type defines the type of attestation contained within the Statement. */
              type?: string;
            }[];
            /** @description Attestors specified the required attestors (i.e. authorities) */
            attestors?: {
              /** @description Count specifies the required number of entries that must match. If the count is null, all entries must match
               *     (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a
               *     value N, then N must be less than or equal to the size of entries, and at least N entries must match. */
              count?: number;
              /** @description Entries contains the available attestors. An attestor can be a static key,
               *     attributes for keyless verification, or a nested attestor declaration. */
              entries?: {
                /** @description Annotations are used for image verification.
                 *     Every specified key-value pair must exist and match in the verified payload.
                 *     The payload may contain other key-value pairs. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Attestor is a nested set of Attestor used to specify a more complex set of match authorities. */
                attestor?: unknown;
                /** @description Certificates specifies one or more certificates. */
                certificates?: {
                  /** @description Cert is an optional PEM-encoded public certificate. */
                  cert?: string;
                  /** @description CertChain is an optional PEM encoded set of certificates used to verify. */
                  certChain?: string;
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                };
                /** @description Keyless is a set of attribute used to verify a Sigstore keyless attestor.
                 *     See https://github.com/sigstore/cosign/blob/main/KEYLESS.md. */
                keyless?: {
                  /** @description AdditionalExtensions are certificate-extensions used for keyless signing. */
                  additionalExtensions?: {
                    [key: string]: string;
                  };
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description Issuer is the certificate issuer used for keyless signing. */
                  issuer?: string;
                  /** @description IssuerRegExp is the regular expression to match certificate issuer used for keyless signing. */
                  issuerRegExp?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Roots is an optional set of PEM encoded trusted root certificates.
                   *     If not provided, the system roots are used. */
                  roots?: string;
                  /** @description Subject is the verified identity used for keyless signing, for example the email address. */
                  subject?: string;
                  /** @description SubjectRegExp is the regular expression to match identity used for keyless signing, for example the email address. */
                  subjectRegExp?: string;
                };
                /** @description Keys specifies one or more public keys. */
                keys?: {
                  /** @description CTLog (certificate timestamp log) provides a configuration for validation of Signed Certificate
                   *     Timestamps (SCTs). If the value is unset, the default behavior by Cosign is used. */
                  ctlog?: {
                    /** @description IgnoreSCT defines whether to use the Signed Certificate Timestamp (SCT) log to check for a certificate
                     *     timestamp. Default is false. Set to true if this was opted out during signing. */
                    ignoreSCT?: boolean;
                    /** @description PubKey, if set, is used to validate SCTs against a custom source. */
                    pubkey?: string;
                    /** @description TSACertChain, if set, is the PEM-encoded certificate chain file for the RFC3161 timestamp authority. Must
                     *     contain the root CA certificate. Optionally may contain intermediate CA certificates, and
                     *     may contain the leaf TSA certificate if not present in the timestamurce. */
                    tsaCertChain?: string;
                  };
                  /** @description KMS provides the URI to the public key stored in a Key Management System. See:
                   *     https://github.com/sigstore/cosign/blob/main/KMS.md */
                  kms?: string;
                  /** @description Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly
                   *     specified or can be a variable reference to a key specified in a ConfigMap (see
                   *     https://kyverno.io/docs/writing-policies/variables/), or reference a standard Kubernetes Secret
                   *     elsewhere in the cluster by specifying it in the format "k8s://<namespace>/<secret_name>".
                   *     The named Secret must specify a key `cosign.pub` containing the public key used for
                   *     verification, (see https://github.com/sigstore/cosign/blob/main/KMS.md#kubernetes-secret).
                   *     When multiple keys are specified each key is processed as a separate staticKey entry
                   *     (.attestors[*].entries.keys) within the set of attestors and the count is applied across the keys. */
                  publicKeys?: string;
                  /** @description Rekor provides configuration for the Rekor transparency log service. If an empty object
                   *     is provided the public instance of Rekor (https://rekor.sigstore.dev) is used. */
                  rekor?: {
                    /** @description IgnoreTlog skips transparency log verification. */
                    ignoreTlog?: boolean;
                    /** @description RekorPubKey is an optional PEM-encoded public key to use for a custom Rekor.
                     *     If set, this will be used to validate transparency log signatures from a custom Rekor. */
                    pubkey?: string;
                    /** @description URL is the address of the transparency log. Defaults to the public Rekor log instance https://rekor.sigstore.dev. */
                    url?: string;
                  };
                  /** @description Reference to a Secret resource that contains a public key */
                  secret?: {
                    /** @description Name of the secret. The provided secret must contain a key named cosign.pub. */
                    name: string;
                    /** @description Namespace name where the Secret exists. */
                    namespace: string;
                  };
                  /**
                   * @description Deprecated. Use attestor.signatureAlgorithm instead.
                   * @default sha256
                   */
                  signatureAlgorithm: string;
                };
                /** @description Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule.
                 *     If specified Repository will override other OCI image repository locations for this Attestor. */
                repository?: string;
                /**
                 * @description Specify signature algorithm for public keys. Supported values are sha224, sha256, sha384 and sha512.
                 * @default sha256
                 */
                signatureAlgorithm: string;
              }[];
            }[];
            /** @description CosignOCI11 enables the experimental OCI 1.1 behaviour in cosign image verification.
             *     Defaults to false. */
            cosignOCI11?: boolean;
            /**
             * @description Allowed values are Audit or Enforce.
             * @enum {string}
             */
            failureAction?: "Audit" | "Enforce";
            /** @description Deprecated. Use ImageReferences instead. */
            image?: string;
            /** @description ImageReferences is a list of matching image reference patterns. At least one pattern in the
             *     list must match the image for the rule to apply. Each image reference consists of a registry
             *     address (defaults to docker.io), repository, image, and tag (defaults to latest).
             *     Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. */
            imageReferences?: string[];
            /** @description ImageRegistryCredentials provides credentials that will be used for authentication with registry. */
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
            /** @description Deprecated. Use KeylessAttestor instead. */
            issuer?: string;
            /** @description Deprecated. Use StaticKeyAttestor instead. */
            key?: string;
            /**
             * @description MutateDigest enables replacement of image tags with digests.
             *     Defaults to true.
             * @default true
             */
            mutateDigest: boolean;
            /** @description Repository is an optional alternate OCI repository to use for image signatures and attestations that match this rule.
             *     If specified Repository will override the default OCI image repository configured for the installation.
             *     The repository can also be overridden per Attestor or Attestation. */
            repository?: string;
            /**
             * @description Required validates that images are verified i.e. have matched passed a signature or attestation check.
             * @default true
             */
            required: boolean;
            /** @description Deprecated. Use KeylessAttestor instead. */
            roots?: string;
            /** @description SkipImageReferences is a list of matching image reference patterns that should be skipped.
             *     At least one pattern in the list must match the image for the rule to be skipped. Each image reference
             *     consists of a registry address (defaults to docker.io), repository, image, and tag (defaults to latest).
             *     Wildcards ('*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. */
            skipImageReferences?: string[];
            /** @description Deprecated. Use KeylessAttestor instead. */
            subject?: string;
            /**
             * @description Type specifies the method of signature validation. The allowed options
             *     are Cosign, Sigstore Bundle and Notary. By default Cosign is used if a type is not specified.
             * @enum {string}
             */
            type?: "Cosign" | "SigstoreBundle" | "Notary";
            /**
             * @description UseCache enables caching of image verify responses for this rule.
             * @default true
             */
            useCache: boolean;
            /** @description Validation checks conditions across multiple image
             *     verification attestations or context entries */
            validate?: {
              /** @description Deny defines conditions used to pass or fail a validation rule. */
              deny?: {
                /** @description Multiple conditions can be declared under an `any` or `all` statement. A direct list
                 *     of conditions (without `any` or `all` statements) is also supported for backwards compatibility
                 *     but will be deprecated in the next major release.
                 *     See: https://kyverno.io/docs/writing-policies/validate/#deny-rules */
                conditions?: unknown;
              };
              /** @description Message specifies a custom message to be displayed on failure. */
              message?: string;
            };
            /**
             * @description VerifyDigest validates that images have a digest.
             * @default true
             */
            verifyDigest: boolean;
          }[];
        }[];
      };
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
      /** @description Deprecated in favor of Conditions */
      ready?: boolean;
      /** @description RuleCountStatus contains four variables which describes counts for
       *     validate, generate, mutate and verify images rules */
      rulecount?: {
        /** @description Count for generate rules in policy */
        generate: number;
        /** @description Count for mutate rules in policy */
        mutate: number;
        /** @description Count for validate rules in policy */
        validate: number;
        /** @description Count for verify image rules in policy */
        verifyimages: number;
      };
      /** @description ValidatingAdmissionPolicy contains status information */
      validatingadmissionpolicy?: {
        /** @description Generated indicates whether a validating admission policy is generated from the policy or not */
        generated: boolean;
        /** @description Message is a human readable message indicating details about the generation of validating admission policy
         *     It is an empty string when validating admission policy is successfully generated. */
        message: string;
      };
    };
  };
}
