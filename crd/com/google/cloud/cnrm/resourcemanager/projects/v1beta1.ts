import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProjectV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesProjectV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "resourcemanager.cnrm.cloud.google.com/v1beta1", kind: "Project", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesProjectV1beta1Config extends ManifestConfig {
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
