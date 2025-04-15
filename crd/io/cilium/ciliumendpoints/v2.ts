import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumEndpointV2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumEndpointV2Config) {
    super(scope, id, { manifest: { apiVersion: "cilium.io/v2", kind: "CiliumEndpoint", ...manifest }, ...config });
  }
}
export interface KubernetesCiliumEndpointV2Config extends ManifestConfig {
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
    spec: unknown;
  };
}
