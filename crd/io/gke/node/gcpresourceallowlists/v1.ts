import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPResourceAllowlistV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCPResourceAllowlistV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "node.gke.io/v1", kind: "GCPResourceAllowlist", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCPResourceAllowlistV1Config extends ManifestConfig {
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
      allowedResourcePatterns: string[];
    };
  };
}
