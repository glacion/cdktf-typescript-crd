import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesExternalSecretV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesExternalSecretV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "external-secrets.io/v1alpha1", kind: "ExternalSecret", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesExternalSecretV1alpha1Config extends ManifestConfig {
  manifest: {
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
    spec: {
      /** @description Data defines the connection between the Kubernetes Secret keys and the Provider data */
      data?: {
        /** @description ExternalSecretDataRemoteRef defines Provider data location. */
        remoteRef: {
          /**
           * @description Used to define a conversion Strategy
           * @default Default
           * @enum {string}
           */
          conversionStrategy: "Default" | "Unicode";
          /** @description Key is the key used in the Provider, mandatory */
          key: string;
          /** @description Used to select a specific property of the Provider value (if a map), if supported */
          property?: string;
          /** @description Used to select a specific version of the Provider value, if supported */
          version?: string;
        };
        /** @description The key in the Kubernetes Secret to store the value. */
        secretKey: string;
      }[];
      /** @description DataFrom is used to fetch all properties from a specific Provider data
       *     If multiple entries are specified, the Secret keys are merged in the specified order */
      dataFrom?: {
        /**
         * @description Used to define a conversion Strategy
         * @default Default
         * @enum {string}
         */
        conversionStrategy: "Default" | "Unicode";
        /** @description Key is the key used in the Provider, mandatory */
        key: string;
        /** @description Used to select a specific property of the Provider value (if a map), if supported */
        property?: string;
        /** @description Used to select a specific version of the Provider value, if supported */
        version?: string;
      }[];
      /** @description RefreshInterval is the amount of time before the values are read again from the SecretStore provider
       *     Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
       *     May be set to zero to fetch and create it once. Defaults to 1h. */
      refreshInterval?: string;
      /** @description SecretStoreRef defines which SecretStore to fetch the ExternalSecret data. */
      secretStoreRef: {
        /** @description Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
         *     Defaults to `SecretStore` */
        kind?: string;
        /** @description Name of the SecretStore resource */
        name?: string;
      };
      /** @description ExternalSecretTarget defines the Kubernetes Secret to be created
       *     There can be only one target per ExternalSecret. */
      target: {
        /** @description CreationPolicy defines rules on how to create the resulting Secret.
         *     Defaults to "Owner" */
        creationPolicy?: string;
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
              }[];
              /** @description The name of the ConfigMap/Secret resource */
              name: string;
            };
            secret?: {
              /** @description A list of keys in the ConfigMap/Secret to use as templates for Secret data */
              items: {
                /** @description A key in the ConfigMap/Secret */
                key: string;
              }[];
              /** @description The name of the ConfigMap/Secret resource */
              name: string;
            };
          }[];
          type?: string;
        };
      };
    };
  };
}
