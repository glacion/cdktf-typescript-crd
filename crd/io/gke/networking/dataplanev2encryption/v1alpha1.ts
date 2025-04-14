import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataplaneV2EncryptionV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataplaneV2EncryptionV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1alpha1", kind: "DataplaneV2Encryption", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataplaneV2EncryptionV1alpha1Config extends ManifestConfig {
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
    /** @description DataplaneV2Encryption describes the specification to be used for node-to-node encryption. */
    spec: {
      metadata?: {
        name?: string;
      };
      /** @description Spec is the desired configuration for node-to-node encryption. */
      spec?: {
        /** @description Enable node-to-node encryption. */
        enabled: boolean;
        /** @description Type of encryption to be used. */
        type: string;
      };
    };
  };
}
