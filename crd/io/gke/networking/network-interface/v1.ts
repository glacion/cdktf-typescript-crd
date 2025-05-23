import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkInterfaceV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesNetworkInterfaceV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesNetworkInterfaceV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1";
    kind?: "NetworkInterface";
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
    /** @description NetworkInterfaceSpec is the specification for the NetworkInterface resource. */
    spec?: {
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
    /** @description NetworkInterfaceStatus is the status for the NetworkInterface resource. */
    status?: {
      /** @description Specifies the DNS configuration of the network this interface connects to. */
      dnsConfig?: {
        /** @description A list of nameserver IP addresses.
         *     Duplicated nameservers will be removed. */
        nameservers: string[];
        /** @description A list of DNS search domains for host-name lookup.
         *     Duplicated search paths will be removed. */
        searches?: string[];
      };
      /** @description Gateway4 defines the gateway IPv4 address for the network this interface connects to. */
      gateway4?: string;
      /** @description IpAddresses are the IP addresses assigned to the NetworkInterface. */
      ipAddresses?: string[];
      /** @description MacAddress is the MAC address assigned to the NetworkInterface. */
      macAddress?: string;
      /** @description PodName specifies the current pod name this interface is connected to */
      podName?: string;
      /** @description Routes contains a list of routes for the network this interface connects to. */
      routes?: {
        /** @description To defines a destination IPv4 block in CIDR annotation. e.g. 192.168.0.0/24.
         *     The CIDR 0.0.0.0/0 will be rejected. */
        to: string;
      }[];
    };
  };
}
