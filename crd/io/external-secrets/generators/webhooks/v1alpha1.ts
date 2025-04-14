import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWebhookV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWebhookV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "Webhook", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesWebhookV1alpha1Config extends ManifestConfig {
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
    /** @description Webhook connects to a third party API server to handle the secrets generation
     *     configuration parameters in spec.
     *     You can specify the server, the token, and additional body parameters.
     *     See documentation for the full API specification for requests and responses. */
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
      /** @description WebhookSpec controls the behavior of the external generator. Any body parameters should be passed to the server through the parameters field. */
      spec?: {
        /** @description Body */
        body?: string;
        /**
         * Format: byte
         * @description PEM encoded CA bundle used to validate webhook server certificate. Only used
         *     if the Server URL is using HTTPS protocol. This parameter is ignored for
         *     plain HTTP protocol connection. If not set the system root certificates
         *     are used to validate the TLS connection.
         */
        caBundle?: string;
        /** @description The provider for the CA bundle to use to validate webhook server certificate. */
        caProvider?: {
          /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
          key?: string;
          /** @description The name of the object located at the provider type. */
          name: string;
          /** @description The namespace the Provider type is in. */
          namespace?: string;
          /** @description The type of provider to use such as "Secret", or "ConfigMap". */
          type: string;
        };
        /** @description Headers */
        headers?: {
          [key: string]: string;
        };
        /** @description Webhook Method */
        method?: string;
        /** @description Result formatting */
        result: {
          /** @description Json path of return value */
          jsonPath?: string;
        };
        /** @description Secrets to fill in templates
         *     These secrets will be passed to the templating function as key value pairs under the given name */
        secrets?: {
          /** @description Name of this secret in templates */
          name: string;
          /** @description Secret ref to fill in credentials */
          secretRef: {
            /** @description The key where the token is found. */
            key?: string;
            /** @description The name of the Secret resource being referred to. */
            name?: string;
          };
        }[];
        /** @description Timeout */
        timeout?: string;
        /** @description Webhook url to call */
        url: string;
      };
    };
  };
}
