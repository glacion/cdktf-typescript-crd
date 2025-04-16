import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPushSecretV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPushSecretV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPushSecretV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "external-secrets.io/v1alpha1";
    kind?: "PushSecret";
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
    /** @description PushSecretSpec configures the behavior of the PushSecret. */
    spec?: {
      /** @description Secret Data that should be pushed to providers */
      data?: {
        /**
         * @description Used to define a conversion Strategy for the secret keys
         * @default None
         * @enum {string}
         */
        conversionStrategy: "None" | "ReverseUnicode";
        /** @description Match a given Secret Key to be pushed to the provider. */
        match: {
          /** @description Remote Refs to push to providers. */
          remoteRef: {
            /** @description Name of the property in the resulting secret */
            property?: string;
            /** @description Name of the resulting provider secret. */
            remoteKey: string;
          };
          /** @description Secret Key to be pushed */
          secretKey?: string;
        };
        /** @description Metadata is metadata attached to the secret.
         *     The structure of metadata is provider specific, please look it up in the provider documentation. */
        metadata?: unknown;
      }[];
      /** @description Deletion Policy to handle Secrets in the provider. */
      deletionPolicy?: string;
      /** @description The Interval to which External Secrets will try to push a secret definition */
      refreshInterval?: string;
      secretStoreRefs: {
        /**
         * @description Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
         * @default SecretStore
         * @enum {string}
         */
        kind: "SecretStore" | "ClusterSecretStore";
        /** @description Optionally, sync to secret stores with label selector */
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
        /** @description Optionally, sync to the SecretStore of the given name */
        name?: string;
      }[];
      /** @description The Secret Selector (k8s source) for the Push Secret */
      selector: {
        /** @description Point to a generator to create a Secret. */
        generatorRef?: {
          /** @description Specify the apiVersion of the generator resource */
          apiVersion?: string;
          /** @description Specify the Kind of the generator resource */
          kind: string;
          /** @description Specify the name of the generator resource */
          name: string;
        };
        /** @description Select a Secret to Push. */
        secret?: {
          /** @description Name of the Secret.
           *     The Secret must exist in the same namespace as the PushSecret manifest. */
          name: string;
        };
      };
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
      /** @description UpdatePolicy to handle Secrets in the provider. */
      updatePolicy?: string;
    };
    /** @description PushSecretStatus indicates the history of the status of PushSecret. */
    status?: {
      conditions?: {
        /** Format: date-time */
        lastTransitionTime?: string;
        message?: string;
        reason?: string;
        status: string;
        /** @description PushSecretConditionType indicates the condition of the PushSecret. */
        type: string;
      }[];
      /**
       * Format: date-time
       * @description refreshTime is the time and date the external secret was fetched and
       *     the target secret updated
       */
      refreshTime?: string | null;
      /** @description Synced PushSecrets, including secrets that already exist in provider.
       *     Matches secret stores to PushSecretData that was stored to that secret store. */
      syncedPushSecrets?: {
        [key: string]: {
          [key: string]: {
            /**
             * @description Used to define a conversion Strategy for the secret keys
             * @default None
             * @enum {string}
             */
            conversionStrategy: "None" | "ReverseUnicode";
            /** @description Match a given Secret Key to be pushed to the provider. */
            match: {
              /** @description Remote Refs to push to providers. */
              remoteRef: {
                /** @description Name of the property in the resulting secret */
                property?: string;
                /** @description Name of the resulting provider secret. */
                remoteKey: string;
              };
              /** @description Secret Key to be pushed */
              secretKey?: string;
            };
            /** @description Metadata is metadata attached to the secret.
             *     The structure of metadata is provider specific, please look it up in the provider documentation. */
            metadata?: unknown;
          };
        };
      };
      /** @description SyncedResourceVersion keeps track of the last synced version. */
      syncedResourceVersion?: string;
    };
  };
}
