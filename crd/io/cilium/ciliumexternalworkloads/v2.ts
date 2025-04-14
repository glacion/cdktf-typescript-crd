import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumExternalWorkloadV2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumExternalWorkloadV2Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2", kind: "CiliumExternalWorkload", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumExternalWorkloadV2Config extends ManifestConfig {
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
      /** @description IPv4AllocCIDR is the range of IPv4 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint. */
      "ipv4-alloc-cidr"?: string;
      /** @description IPv6AllocCIDR is the range of IPv6 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint. */
      "ipv6-alloc-cidr"?: string;
    };
  };
}
