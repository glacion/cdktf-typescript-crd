import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class SecretsStoreCsiXK8sIoSecretProviderClassPodStatusV1 extends Manifest {
  constructor(scope: Construct, id: string, config: SecretsStoreCsiXK8sIoSecretProviderClassPodStatusV1Config) {
    super(scope, id, config);
  }
}
export interface SecretsStoreCsiXK8sIoSecretProviderClassPodStatusV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "secrets-store.csi.x-k8s.io/v1";
    kind: "SecretProviderClassPodStatus";
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
    /** @description SecretProviderClassPodStatusStatus defines the observed state of SecretProviderClassPodStatus */
    status?: {
      mounted?: boolean;
      objects?: {
        id?: string;
        version?: string;
      }[];
      podName?: string;
      secretProviderClassName?: string;
      targetPath?: string;
    };
  };
}
