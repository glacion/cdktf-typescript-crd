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
    /** @description CiliumExternalWorkload is a Kubernetes Custom Resource that contains a specification for an external workload that can join the cluster.  The name of the CRD is the FQDN of the external workload, and it needs to match the name in the workload registration. The labels on the CRD object are the labels that will be used to allocate a Cilium Identity for the external workload. If 'io.kubernetes.pod.namespace' or 'io.kubernetes.pod.name' labels are not explicitly specified, they will be defaulted to 'default' and <workload name>, respectively. 'io.cilium.k8s.policy.cluster' will always be defined as the name of the current cluster, which defaults to "default". */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata: Record<string, never>;
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
  };
}
