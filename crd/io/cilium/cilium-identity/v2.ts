import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CiliumIoCiliumIdentityV2 extends Manifest {
  constructor(scope: Construct, id: string, config: CiliumIoCiliumIdentityV2Config) {
    super(scope, id, config);
  }
}
export interface CiliumIoCiliumIdentityV2Config extends ManifestConfig {
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
      namespace?: string;
    };
  };
}
