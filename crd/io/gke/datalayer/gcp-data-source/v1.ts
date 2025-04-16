import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPDataSourceV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGCPDataSourceV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGCPDataSourceV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "datalayer.gke.io/v1";
    kind?: "GCPDataSource";
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
    spec?: {
      cloudStorage?: {
        serviceAccountName?: string;
        uri?: string;
      };
    };
    status?: {
      error?: string;
      instanceHandle?: string;
    };
  };
}
