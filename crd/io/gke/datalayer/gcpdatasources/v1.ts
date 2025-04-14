import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPDataSourceV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCPDataSourceV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "datalayer.gke.io/v1", kind: "GCPDataSource", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCPDataSourceV1Config extends ManifestConfig {
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
      cloudStorage?: {
        serviceAccountName?: string;
        uri?: string;
      };
    };
  };
}
