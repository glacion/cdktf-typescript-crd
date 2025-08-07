import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoDataplaneV2EncryptionV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoDataplaneV2EncryptionV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoDataplaneV2EncryptionV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1alpha1";
    kind: "DataplaneV2Encryption";
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
    /** @description Spec is the desired configuration for node-to-node encryption. */
    spec?: {
      /** @description Enable node-to-node encryption. */
      enabled: boolean;
      /** @description Type of encryption to be used. */
      type: string;
    };
  };
}
