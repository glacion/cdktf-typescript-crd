import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGlobalContextEntryV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGlobalContextEntryV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kyverno.io/v2alpha1", kind: "GlobalContextEntry", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGlobalContextEntryV2alpha1Config extends ManifestConfig {
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
