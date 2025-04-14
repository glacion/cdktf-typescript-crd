import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumEndpointSliceV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumEndpointSliceV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2alpha1", kind: "CiliumEndpointSlice", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumEndpointSliceV2alpha1Config extends ManifestConfig {
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
