import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAuditV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAuditV1Config) {
    super(scope, id, { manifest: { apiVersion: "warden.gke.io/v1", kind: "Audit", ...manifest }, ...config });
  }
}
export interface KubernetesAuditV1Config extends ManifestConfig {
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
    spec: object;
  };
}
