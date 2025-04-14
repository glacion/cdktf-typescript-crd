import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkV1Config) {
    super(scope, id, { manifest: { apiVersion: "networking.gke.io/v1", kind: "Network", ...manifest }, ...config });
  }
}
export interface KubernetesNetworkV1Config extends ManifestConfig {
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
      /** @description IPAMMode specifies the IPAM mode for the network. Valid options include: internal, external */
      IPAMMode?: string;
      /** @description Specifies the DNS configuration of the network. Required if ExternalDHCP4 is false or not set on L2 type network. */
      dnsConfig?: {
        /** @description A list of nameserver IP addresses. Duplicated nameservers will be removed. */
        nameservers: string[];
        /** @description A list of DNS search domains for host-name lookup. Duplicated search paths will be removed. */
        searches?: string[];
      };
      /** @description ExternalDHCP4 indicates whether the IPAM is static or allocation by the external DHCP server */
      externalDHCP4?: boolean;
      /** @description Gateway4 defines the gateway IPv4 address for the network. Required if ExternalDHCP4 is false or not set on L2 type network. */
      gateway4?: string;
      /** @description L2NetworkConfig includes all the network config related to L2 type network */
      l2NetworkConfig?: {
        /**
         * Format: int32
         * @description PrefixLength4 denotes the IPv4 prefix length of the range corresponding to the network. It is used to assign IPs to the pods for multi-networking. This field is required when IPAM is handled internally and dynamically via CCC. It's disallowed for other cases. For static IP, the prefix length is set as part of the address in NetworkInterface object.
         */
        prefixLength4?: number;
        /**
         * Format: int32
         * @description VlanID is the vlan ID used for the network. If unspecified, vlan tagging is not enabled.
         */
        vlanID?: number;
      };
      /** @description NetworkLifecycle specifies who manages the lifecycle of the network. This field can only be used when L2NetworkConfig.VlanID is specified. Otherwise the value will be ignored. If L2NetworkConfig.VlanID is specified and this field is empty, the value is assumed to be AnthosManaged. */
      networkLifecycle?: string;
      /** @description NodeInterfaceMatcher defines the matcher to discover the corresponding node interface associated with the network. This field is required for L2 network. */
      nodeInterfaceMatcher?: {
        /** @description InterfaceName specifies the interface name to search on the node. */
        interfaceName?: string;
      };
      /** @description ParametersRef is a reference to a resource that contains vendor or implementation specific configurations for the network. */
      parametersRef?: {
        /** @description Group is the API group of k8s resource, e.g. "networking.k8s.io". */
        group: string;
        /** @description Kind is kind of the referent, e.g. "networkpolicy". */
        kind: string;
        /** @description Name is the name of the resource object. */
        name: string;
        /** @description Namespace is the namespace of the referent. This field is required when referring to a Namespace-scoped resource and MUST be unset when referring to a Cluster-scoped resource. */
        namespace?: string;
      };
      /** @description Provider specifies the provider implementing this network, e.g. "GKE". */
      provider?: string;
      /** @description Routes contains a list of routes for the network. */
      routes?: {
        /** @description To defines a destination IPv4 block in CIDR annotation. e.g. 192.168.0.0/24. The CIDR 0.0.0.0/0 will be rejected. */
        to: string;
      }[];
      /** @description Type defines type of network. Valid options include: L2, L3, Device. L2 network type enables L2 connectivity on the network. L3 network type enables L3 connectivity on the network. Device network type enables direct device access on the network. */
      type: string;
    };
  };
}
