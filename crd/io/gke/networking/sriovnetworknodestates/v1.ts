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
  manifest: {
    /** @description SriovNetworkNodeState is the Schema for the sriovnetworknodestates API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
  };
}
