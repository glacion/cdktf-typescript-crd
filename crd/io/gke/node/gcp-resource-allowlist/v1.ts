import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPResourceAllowlistV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGCPResourceAllowlistV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGCPResourceAllowlistV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "node.gke.io/v1";
    kind: "GCPResourceAllowlist";
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
    /** @description GCPResourceAllowlistSpec defines the desired state of GCPResourceAllowlist */
    spec?: {
      allowedResourcePatterns: string[];
    };
    /** @description GCPResourceAllowlistStatus defines the observed state of GCPResourceAllowlist */
    status?: Record<string, never>;
  };
}
