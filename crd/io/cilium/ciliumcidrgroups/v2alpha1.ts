import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumCIDRGroupV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumCIDRGroupV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2alpha1", kind: "CiliumCIDRGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumCIDRGroupV2alpha1Config extends ManifestConfig {
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
      /** @description ExternalCIDRs is a list of CIDRs selecting peers outside the clusters. */
      externalCIDRs: string[];
    };
  };
}
