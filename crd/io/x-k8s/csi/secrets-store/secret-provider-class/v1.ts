import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretProviderClassV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSecretProviderClassV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSecretProviderClassV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "secrets-store.csi.x-k8s.io/v1";
    kind: "SecretProviderClass";
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
}
