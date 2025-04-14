import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkInterfaceV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkInterfaceV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "NetworkInterface", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesNetworkInterfaceV1Config extends ManifestConfig {
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
      /** @description IpAddresses specifies the static IP addresses on this NetworkInterface.
       *     Each IPAddress may contain subnet mask. If subnet mask is not included, /32 is taken as default.
       *     For example, IPAddress input 1.2.3.4 will be taken as 1.2.3.4/32. Alternatively, the input can be 1.2.3.4/24
       *     with subnet mask of /24. */
      ipAddresses?: string[];
      /** @description Macddress specifies the static MAC address on this NetworkInterface. */
      macAddress?: string;
      /** @description NetworkName refers to a network object that this NetworkInterface is connected. */
      networkName: string;
    };
  };
}
