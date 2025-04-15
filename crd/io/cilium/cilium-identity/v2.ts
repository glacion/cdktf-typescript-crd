import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumIdentityV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumIdentityV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumIdentityV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cilium.io/v2";
    kind: "CiliumIdentity";
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
  };
}
