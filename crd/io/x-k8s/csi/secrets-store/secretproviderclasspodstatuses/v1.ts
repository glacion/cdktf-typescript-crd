import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretProviderClassPodStatusV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSecretProviderClassPodStatusV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "secrets-store.csi.x-k8s.io/v1", kind: "SecretProviderClassPodStatus", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSecretProviderClassPodStatusV1Config extends ManifestConfig {
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
    spec: unknown;
  };
}
