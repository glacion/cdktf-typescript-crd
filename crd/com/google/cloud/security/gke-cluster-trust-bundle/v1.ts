import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEClusterTrustBundleV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGKEClusterTrustBundleV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGKEClusterTrustBundleV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "security.cloud.google.com/v1";
    kind: "GKEClusterTrustBundle";
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
