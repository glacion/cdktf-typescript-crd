import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ExternalSecretsIoClusterExternalSecretV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ExternalSecretsIoClusterExternalSecretV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ExternalSecretsIoClusterExternalSecretV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "external-secrets.io/v1beta1";
    kind: "ClusterExternalSecret";
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
    /** @description ClusterExternalSecretSpec defines the desired state of ClusterExternalSecret. */
    spec?: {
      /** @description The metadata of the external secrets to be created */
      externalSecretMetadata?: {
        annotations?: {
          [key: string]: string;
        };
        labels?: {
          [key: string]: string;
        };
      };
      /** @description The name of the external secrets to be created.
       *     Defaults to the name of the ClusterExternalSecret */
      externalSecretName?: string;
      /** @description The spec for the ExternalSecrets to be created */
      externalSecretSpec: {
        /** @description Data defines the connection between the Kubernetes Secret keys and the Provider data */
        data?: {
          /** @description RemoteRef points to the remote secret and defines
           *     which secret (version/property/..) to fetch. */
          remoteRef: {
            /**
             * @description Used to define a conversion Strategy
             * @default Default
             * @enum {string}
             */
            conversionStrategy: "Default" | "Unicode";
            /**
             * @description Used to define a decoding Strategy
             * @default None
             * @enum {string}
             */
            decodingStrategy: "Auto" | "Base64" | "Base64URL" | "None";
            /** @description Key is the key used in the Provider, mandatory */
            key: string;
            /**
             * @description Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
             * @default None
             * @enum {string}
             */
            metadataPolicy: "None" | "Fetch";
            /** @description Used to select a specific property of the Provider value (if a map), if supported */
            property?: string;
            /** @description Used to select a specific version of the Provider value, if supported */
            version?: string;
          };
          /** @description The key in the Kubernetes Secret to store the value. */
          secretKey: string;
          /** @description SourceRef allows you to override the source
           *     from which the value will be pulled. */
          sourceRef?: {
            /** @description GeneratorRef points to a generator custom resource.
             *
             *     Deprecated: The generatorRef is not implemented in .data[].
             *     this will be removed with v1. */
            generatorRef?: {
              /**
               * @description Specify the apiVersion of the generator resource
               * @default generators.external-secrets.io/v1alpha1
               */
              apiVersion: string;
              /**
               * @description Specify the Kind of the generator resource
               * @enum {string}
               */
              kind:
                | "ACRAccessToken"
                | "ClusterGenerator"
                | "ECRAuthorizationToken"
                | "Fake"
                | "GCRAccessToken"
                | "GithubAccessToken"
                | "Password"
                | "STSSessionToken"
                | "UUID"
                | "VaultDynamicSecret"
                | "Webhook";
              /** @description Specify the name of the generator resource */
              name: string;
            };
            /** @description SecretStoreRef defines which SecretStore to fetch the ExternalSecret data. */
            storeRef?: {
              /**
               * @description Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
               *     Defaults to `SecretStore`
               * @enum {string}
               */
              kind?: "SecretStore" | "ClusterSecretStore";
              /** @description Name of the SecretStore resource */
              name?: string;
            };
          };
        }[];
        /** @description DataFrom is used to fetch all properties from a specific Provider data
         *     If multiple entries are specified, the Secret keys are merged in the specified order */
        dataFrom?: {
          /** @description Used to extract multiple key/value pairs from one secret
           *     Note: Extract does not support sourceRef.Generator or sourceRef.GeneratorRef. */
          extract?: {
            /**
             * @description Used to define a conversion Strategy
             * @default Default
             * @enum {string}
             */
            conversionStrategy: "Default" | "Unicode";
            /**
             * @description Used to define a decoding Strategy
             * @default None
             * @enum {string}
             */
            decodingStrategy: "Auto" | "Base64" | "Base64URL" | "None";
            /** @description Key is the key used in the Provider, mandatory */
            key: string;
            /**
             * @description Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
             * @default None
             * @enum {string}
             */
            metadataPolicy: "None" | "Fetch";
            /** @description Used to select a specific property of the Provider value (if a map), if supported */
            property?: string;
            /** @description Used to select a specific version of the Provider value, if supported */
            version?: string;
          };
          /** @description Used to find secrets based on tags or regular expressions
           *     Note: Find does not support sourceRef.Generator or sourceRef.GeneratorRef. */
          find?: {
            /**
             * @description Used to define a conversion Strategy
             * @default Default
             * @enum {string}
             */
            conversionStrategy: "Default" | "Unicode";
            /**
             * @description Used to define a decoding Strategy
             * @default None
             * @enum {string}
             */
            decodingStrategy: "Auto" | "Base64" | "Base64URL" | "None";
            /** @description Finds secrets based on the name. */
            name?: {
              /** @description Finds secrets base */
              regexp?: string;
            };
            /** @description A root path to start the find operations. */
            path?: string;
            /** @description Find secrets based on tags. */
            tags?: {
              [key: string]: string;
            };
          };
          /** @description Used to rewrite secret Keys after getting them from the secret Provider
           *     Multiple Rewrite operations can be provided. They are applied in a layered order (first to last) */
          rewrite?: {
            /** @description Used to rewrite with regular expressions.
             *     The resulting key will be the output of a regexp.ReplaceAll operation. */
            regexp?: {
              /** @description Used to define the regular expression of a re.Compiler. */
              source: string;
              /** @description Used to define the target pattern of a ReplaceAll operation. */
              target: string;
            };
            /** @description Used to apply string transformation on the secrets.
             *     The resulting key will be the output of the template applied by the operation. */
            transform?: {
              /** @description Used to define the template to apply on the secret name.
               *     `.value ` will specify the secret name in the template. */
              template: string;
            };
          }[];
          /** @description SourceRef points to a store or generator
           *     which contains secret values ready to use.
           *     Use this in combination with Extract or Find pull values out of
           *     a specific SecretStore.
           *     When sourceRef points to a generator Extract or Find is not supported.
           *     The generator returns a static map of values */
          sourceRef?: {
            /** @description GeneratorRef points to a generator custom resource. */
            generatorRef?: {
              /**
               * @description Specify the apiVersion of the generator resource
               * @default generators.external-secrets.io/v1alpha1
               */
              apiVersion: string;
              /**
               * @description Specify the Kind of the generator resource
               * @enum {string}
               */
              kind:
                | "ACRAccessToken"
                | "ClusterGenerator"
                | "ECRAuthorizationToken"
                | "Fake"
                | "GCRAccessToken"
                | "GithubAccessToken"
                | "Password"
                | "STSSessionToken"
                | "UUID"
                | "VaultDynamicSecret"
                | "Webhook";
              /** @description Specify the name of the generator resource */
              name: string;
            };
            /** @description SecretStoreRef defines which SecretStore to fetch the ExternalSecret data. */
            storeRef?: {
              /**
               * @description Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
               *     Defaults to `SecretStore`
               * @enum {string}
               */
              kind?: "SecretStore" | "ClusterSecretStore";
              /** @description Name of the SecretStore resource */
              name?: string;
            };
          };
        }[];
        /** @description RefreshInterval is the amount of time before the values are read again from the SecretStore provider,
         *     specified as Golang Duration strings.
         *     Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
         *     Example values: "1h", "2h30m", "5d", "10s"
         *     May be set to zero to fetch and create it once. Defaults to 1h. */
        refreshInterval?: string;
        /** @description SecretStoreRef defines which SecretStore to fetch the ExternalSecret data. */
        secretStoreRef?: {
          /** @description Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
           *     Defaults to `SecretStore` */
          kind?: string;
          /** @description Name of the SecretStore resource */
          name?: string;
        };
        /** @description ExternalSecretTarget defines the Kubernetes Secret to be created
         *     There can be only one target per ExternalSecret. */
        target?: {
          /** @description CreationPolicy defines rules on how to create the resulting Secret.
           *     Defaults to "Owner" */
          creationPolicy?: string;
          /** @description DeletionPolicy defines rules on how to delete the resulting Secret.
           *     Defaults to "Retain" */
          deletionPolicy?: string;
          /** @description Immutable defines if the final secret will be immutable */
          immutable?: boolean;
          /** @description The name of the Secret resource to be managed.
           *     Defaults to the .metadata.name of the ExternalSecret resource */
          name?: string;
          /** @description Template defines a blueprint for the created Secret resource. */
          template?: {
            data?: {
              [key: string]: string;
            };
            /** @description EngineVersion specifies the template engine version
             *     that should be used to compile/execute the
             *     template specified in .data and .templateFrom[]. */
            engineVersion?: string;
            mergePolicy?: string;
            /** @description ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint. */
            metadata?: {
              annotations?: {
                [key: string]: string;
              };
              labels?: {
                [key: string]: string;
              };
            };
            templateFrom?: {
              configMap?: {
                /** @description A list of keys in the ConfigMap/Secret to use as templates for Secret data */
                items: {
                  /** @description A key in the ConfigMap/Secret */
                  key: string;
                  /**
                   * @default Values
                   * @enum {string}
                   */
                  templateAs: "Values" | "KeysAndValues";
                }[];
                /** @description The name of the ConfigMap/Secret resource */
                name: string;
              };
              literal?: string;
              secret?: {
                /** @description A list of keys in the ConfigMap/Secret to use as templates for Secret data */
                items: {
                  /** @description A key in the ConfigMap/Secret */
                  key: string;
                  /**
                   * @default Values
                   * @enum {string}
                   */
                  templateAs: "Values" | "KeysAndValues";
                }[];
                /** @description The name of the ConfigMap/Secret resource */
                name: string;
              };
              /**
               * @default Data
               * @enum {string}
               */
              target: "Data" | "Annotations" | "Labels";
            }[];
            type?: string;
          };
        };
      };
      /** @description The labels to select by to find the Namespaces to create the ExternalSecrets in.
       *     Deprecated: Use NamespaceSelectors instead. */
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
      /** @description A list of labels to select by to find the Namespaces to create the ExternalSecrets in. The selectors are ORed. */
      namespaceSelectors?: {
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
      }[];
      /** @description Choose namespaces by name. This field is ORed with anything that NamespaceSelectors ends up choosing. */
      namespaces?: string[];
      /** @description The time in which the controller should reconcile its objects and recheck namespaces for labels. */
      refreshTime?: string;
    };
    /** @description ClusterExternalSecretStatus defines the observed state of ClusterExternalSecret. */
    status?: {
      conditions?: {
        message?: string;
        status: string;
        type: string;
      }[];
      /** @description ExternalSecretName is the name of the ExternalSecrets created by the ClusterExternalSecret */
      externalSecretName?: string;
      /** @description Failed namespaces are the namespaces that failed to apply an ExternalSecret */
      failedNamespaces?: {
        /** @description Namespace is the namespace that failed when trying to apply an ExternalSecret */
        namespace: string;
        /** @description Reason is why the ExternalSecret failed to apply to the namespace */
        reason?: string;
      }[];
      /** @description ProvisionedNamespaces are the namespaces where the ClusterExternalSecret has secrets */
      provisionedNamespaces?: string[];
    };
  };
}
