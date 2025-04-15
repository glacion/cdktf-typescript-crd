import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesExternalSecretV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesExternalSecretV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesExternalSecretV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "external-secrets.io/v1beta1";
    kind: "ExternalSecret";
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
    /** @description ExternalSecretSpec defines the desired state of ExternalSecret. */
    spec?: {
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
    status?: {
      /** @description Binding represents a servicebinding.io Provisioned Service reference to the secret */
      binding?: {
        /** @description Name of the referent.
         *     This field is effectively required, but due to backwards compatibility is
         *     allowed to be empty. Instances of this type with an empty value here are
         *     almost certainly wrong.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
      };
      conditions?: {
        /** Format: date-time */
        lastTransitionTime?: string;
        message?: string;
        reason?: string;
        status: string;
        type: string;
      }[];
      /**
       * Format: date-time
       * @description refreshTime is the time and date the external secret was fetched and
       *     the target secret updated
       */
      refreshTime?: string | null;
      /** @description SyncedResourceVersion keeps track of the last synced version */
      syncedResourceVersion?: string;
    };
  };
}
