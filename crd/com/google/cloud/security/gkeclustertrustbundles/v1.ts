import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEClusterTrustBundleV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKEClusterTrustBundleV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "security.cloud.google.com/v1", kind: "GKEClusterTrustBundle", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGKEClusterTrustBundleV1Config extends ManifestConfig {
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
      /** @description The trust bundle certificates, which are concatenated with "\n".
       *      */
      trustBundle?: string;
    };
  };
}
