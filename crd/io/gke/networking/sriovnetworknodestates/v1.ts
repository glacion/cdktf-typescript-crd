import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSriovNetworkNodeStateV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSriovNetworkNodeStateV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "SriovNetworkNodeState", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSriovNetworkNodeStateV1Config extends ManifestConfig {
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
      dpConfigVersion?: string;
      interfaces?: {
        eSwitchMode?: string;
        linkType?: string;
        mtu?: number;
        name?: string;
        numVfs?: number;
        pciAddress: string;
        vfGroups?: {
          deviceType?: string;
          isRdma?: boolean;
          mtu?: number;
          policyName?: string;
          resourceName?: string;
          vfRange?: string;
        }[];
      }[];
    };
  };
}
