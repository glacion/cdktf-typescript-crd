import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSriovNetworkNodeStateV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSriovNetworkNodeStateV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSriovNetworkNodeStateV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1";
    kind?: "SriovNetworkNodeState";
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
    /** @description SriovNetworkNodeStateSpec defines the desired state of SriovNetworkNodeState */
    spec?: {
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
    /** @description SriovNetworkNodeStateStatus defines the observed state of SriovNetworkNodeState */
    status?: {
      interfaces?: {
        Vfs?: {
          Vlan?: number;
          assigned?: string;
          deviceID?: string;
          driver?: string;
          mac?: string;
          mtu?: number;
          name?: string;
          pciAddress: string;
          vendor?: string;
          vfID: number;
        }[];
        deviceID?: string;
        driver?: string;
        eSwitchMode?: string;
        linkSpeed?: string;
        linkType?: string;
        mac?: string;
        mtu?: number;
        name?: string;
        netFilter?: string;
        numVfs?: number;
        pciAddress: string;
        totalvfs?: number;
        vendor?: string;
      }[];
      lastSyncError?: string;
      syncStatus?: string;
    };
  };
}
