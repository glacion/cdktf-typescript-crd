import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAllowlistSynchronizerV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAllowlistSynchronizerV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "auto.gke.io/v1", kind: "AllowlistSynchronizer", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAllowlistSynchronizerV1Config extends ManifestConfig {
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
      /** @description AllowlistPaths specifies the list of paths within the bucket to synchronize */
      allowlistPaths: string[];
    };
  };
}
