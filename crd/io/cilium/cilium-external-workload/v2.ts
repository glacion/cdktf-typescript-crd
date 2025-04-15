import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumExternalWorkloadV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumExternalWorkloadV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumExternalWorkloadV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cilium.io/v2";
    kind: "CiliumExternalWorkload";
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
    /** @description Spec is the desired configuration of the external Cilium workload. */
    spec?: {
      /** @description IPv4AllocCIDR is the range of IPv4 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint. */
      "ipv4-alloc-cidr"?: string;
      /** @description IPv6AllocCIDR is the range of IPv6 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint. */
      "ipv6-alloc-cidr"?: string;
    };
    /** @description Status is the most recent status of the external Cilium workload. It is a read-only field. */
    status?: {
      /**
       * Format: int64
       * @description ID is the numeric identity allocated for the external workload.
       */
      id?: number;
      /** @description IP is the IP address of the workload. Empty if the workload has not registered. */
      ip?: string;
    };
  };
}
