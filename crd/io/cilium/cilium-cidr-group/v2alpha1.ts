import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumCIDRGroupV2alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumCIDRGroupV2alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumCIDRGroupV2alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cilium.io/v2alpha1";
    kind: "CiliumCIDRGroup";
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
