import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOperatorConfigV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesOperatorConfigV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.googleapis.com/v1", kind: "OperatorConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesOperatorConfigV1Config extends ManifestConfig {
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
