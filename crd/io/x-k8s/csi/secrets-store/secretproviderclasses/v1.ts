import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretProviderClassV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSecretProviderClassV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "secrets-store.csi.x-k8s.io/v1", kind: "SecretProviderClass", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSecretProviderClassV1Config extends ManifestConfig {
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
    /** @description SecretProviderClass is the Schema for the secretproviderclasses API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description SecretProviderClassSpec defines the desired state of SecretProviderClass */
      spec?: {
        /** @description Configuration for specific provider */
        parameters?: {
          [key: string]: string;
        };
        /** @description Configuration for provider name */
        provider?: string;
        secretObjects?: {
          /** @description annotations of k8s secret object */
          annotations?: {
            [key: string]: string;
          };
          data?: {
            /** @description data field to populate */
            key?: string;
            /** @description name of the object to sync */
            objectName?: string;
          }[];
          /** @description labels of K8s secret object */
          labels?: {
            [key: string]: string;
          };
          /** @description name of the K8s secret object */
          secretName?: string;
          /** @description type of K8s secret object */
          type?: string;
        }[];
      };
      /** @description SecretProviderClassStatus defines the observed state of SecretProviderClass */
      status?: {
        byPod?: {
          /** @description id of the pod that wrote the status */
          id?: string;
          /** @description namespace of the pod that wrote the status */
          namespace?: string;
        }[];
      };
    };
  };
}
