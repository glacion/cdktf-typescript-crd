import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumClusterwideNetworkPolicyV2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumClusterwideNetworkPolicyV2Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2", kind: "CiliumClusterwideNetworkPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumClusterwideNetworkPolicyV2Config extends ManifestConfig {
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
