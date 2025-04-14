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
  };
}
