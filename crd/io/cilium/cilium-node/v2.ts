import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumNodeV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumNodeV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumNodeV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "cilium.io/v2";
    kind?: "CiliumNode";
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
    /** @description Spec defines the desired specification/configuration of the node. */
    spec: {
      /** @description Addresses is the list of all node addresses. */
      addresses?: {
        /** @description IP is an IP of a node */
        ip?: string;
        /** @description Type is the type of the node address */
        type?: string;
      }[];
      /** @description AlibabaCloud is the AlibabaCloud IPAM specific configuration. */
      "alibaba-cloud"?: {
        /** @description AvailabilityZone is the availability zone to use when allocating ENIs. */
        "availability-zone"?: string;
        /** @description CIDRBlock is vpc ipv4 CIDR */
        "cidr-block"?: string;
        /** @description InstanceType is the ECS instance type, e.g. "ecs.g6.2xlarge" */
        "instance-type"?: string;
        /** @description SecurityGroupTags is the list of tags to use when evaluating which security groups to use for the ENI. */
        "security-group-tags"?: {
          [key: string]: string;
        };
        /** @description SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance. */
        "security-groups"?: string[];
        /** @description VPCID is the VPC ID to use when allocating ENIs. */
        "vpc-id"?: string;
        /** @description VSwitchTags is the list of tags to use when evaluating which vSwitch to use for the ENI. */
        "vswitch-tags"?: {
          [key: string]: string;
        };
        /** @description VSwitches is the ID of vSwitch available for ENI */
        vswitches?: string[];
      };
      /** @description Azure is the Azure IPAM specific configuration. */
      azure?: {
        /** @description InterfaceName is the name of the interface the cilium-operator will use to allocate all the IPs on */
        "interface-name"?: string;
      };
      /** @description BootID is a unique node identifier generated on boot */
      bootid?: string;
      /** @description Encryption is the encryption configuration of the node. */
      encryption?: {
        /** @description Key is the index to the key to use for encryption or 0 if encryption is disabled. */
        key?: number;
      };
      /** @description ENI is the AWS ENI specific configuration. */
      eni?: {
        /** @description AvailabilityZone is the availability zone to use when allocating ENIs. */
        "availability-zone"?: string;
        /** @description DeleteOnTermination defines that the ENI should be deleted when the associated instance is terminated. If the parameter is not set the default behavior is to delete the ENI on instance termination. */
        "delete-on-termination"?: boolean;
        /** @description DisablePrefixDelegation determines whether ENI prefix delegation should be disabled on this node. */
        "disable-prefix-delegation"?: boolean;
        /** @description ExcludeInterfaceTags is the list of tags to use when excluding ENIs for Cilium IP allocation. Any interface matching this set of tags will not be managed by Cilium. */
        "exclude-interface-tags"?: {
          [key: string]: string;
        };
        /** @description FirstInterfaceIndex is the index of the first ENI to use for IP allocation, e.g. if the node has eth0, eth1, eth2 and FirstInterfaceIndex is set to 1, then only eth1 and eth2 will be used for IP allocation, eth0 will be ignored for PodIP allocation. */
        "first-interface-index"?: number;
        /** @description InstanceID is the AWS InstanceId of the node. The InstanceID is used to retrieve AWS metadata for the node.
         *      OBSOLETE: This field is obsolete, please use Spec.InstanceID */
        "instance-id"?: string;
        /** @description InstanceType is the AWS EC2 instance type, e.g. "m5.large" */
        "instance-type"?: string;
        /** @description MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs.
         *      OBSOLETE: This field is obsolete, please use Spec.IPAM.MaxAboveWatermark */
        "max-above-watermark"?: number;
        /** @description MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs.
         *      OBSOLETE: This field is obsolete, please use Spec.IPAM.MinAllocate */
        "min-allocate"?: number;
        /** @description NodeSubnetID is the subnet of the primary ENI the instance was brought up with. It is used as a sensible default subnet to create ENIs in. */
        "node-subnet-id"?: string;
        /** @description PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved.
         *      OBSOLETE: This field is obsolete, please use Spec.IPAM.PreAllocate */
        "pre-allocate"?: number;
        /** @description SecurityGroupTags is the list of tags to use when evaliating what AWS security groups to use for the ENI. */
        "security-group-tags"?: {
          [key: string]: string;
        };
        /** @description SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance. */
        "security-groups"?: string[];
        /** @description SubnetIDs is the list of subnet ids to use when evaluating what AWS subnets to use for ENI and IP allocation. */
        "subnet-ids"?: string[];
        /** @description SubnetTags is the list of tags to use when evaluating what AWS subnets to use for ENI and IP allocation. */
        "subnet-tags"?: {
          [key: string]: string;
        };
        /** @description UsePrimaryAddress determines whether an ENI's primary address should be available for allocations on the node */
        "use-primary-address"?: boolean;
        /** @description VpcID is the VPC ID to use when allocating ENIs. */
        "vpc-id"?: string;
      };
      /** @description HealthAddressing is the addressing information for health connectivity checking. */
      health?: {
        /** @description IPv4 is the IPv4 address of the IPv4 health endpoint. */
        ipv4?: string;
        /** @description IPv6 is the IPv6 address of the IPv4 health endpoint. */
        ipv6?: string;
      };
      /** @description IngressAddressing is the addressing information for Ingress listener. */
      ingress?: {
        ipv4?: string;
        ipv6?: string;
      };
      /** @description InstanceID is the identifier of the node. This is different from the node name which is typically the FQDN of the node. The InstanceID typically refers to the identifier used by the cloud provider or some other means of identification. */
      "instance-id"?: string;
      /** @description IPAM is the address management specification. This section can be populated by a user or it can be automatically populated by an IPAM operator. */
      ipam?: {
        /** @description MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs. */
        "max-above-watermark"?: number;
        /** @description MaxAllocate is the maximum number of IPs that can be allocated to the node. When the current amount of allocated IPs will approach this value, the considered value for PreAllocate will decrease down to 0 in order to not attempt to allocate more addresses than defined. */
        "max-allocate"?: number;
        /** @description MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs. */
        "min-allocate"?: number;
        /** @description PodCIDRs is the list of CIDRs available to the node for allocation. When an IP is used, the IP will be added to Status.IPAM.Used */
        podCIDRs?: string[];
        /** @description Pool is the list of IPs available to the node for allocation. When an IP is used, the IP will remain on this list but will be added to Status.IPAM.Used */
        pool?: {
          [key: string]: {
            /** @description Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP
             *      The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used. */
            owner?: string;
            /** @description Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI */
            resource?: string;
          };
        };
        /** @description Pools contains the list of assigned IPAM pools for this node. */
        pools?: {
          /** @description Allocated contains the list of pooled CIDR assigned to this node. The operator will add new pod CIDRs to this field, whereas the agent will remove CIDRs it has released. */
          allocated?: {
            /** @description CIDRs contains a list of pod CIDRs currently allocated from this pool */
            cidrs?: string[];
            /** @description Pool is the name of the IPAM pool backing this allocation */
            pool: string;
          }[];
          /** @description Requested contains a list of IPAM pool requests, i.e. indicates how many addresses this node requests out of each pool listed here. This field is owned and written to by cilium-agent and read by the operator. */
          requested?: {
            /** @description Needed indicates how many IPs out of the above Pool this node requests from the operator. The operator runs a reconciliation loop to ensure each node always has enough PodCIDRs allocated in each pool to fulfill the requested number of IPs here. */
            needed?: {
              /** @description IPv4Addrs contains the number of requested IPv4 addresses out of a given pool */
              "ipv4-addrs"?: number;
              /** @description IPv6Addrs contains the number of requested IPv6 addresses out of a given pool */
              "ipv6-addrs"?: number;
            };
            /** @description Pool is the name of the IPAM pool backing this request */
            pool: string;
          }[];
        };
        /** @description PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved. */
        "pre-allocate"?: number;
      };
      /**
       * Format: int64
       * @description NodeIdentity is the Cilium numeric identity allocated for the node, if any.
       */
      nodeidentity?: number;
    };
    /** @description Status defines the realized specification/configuration and status of the node. */
    status?: {
      /** @description AlibabaCloud is the AlibabaCloud specific status of the node. */
      "alibaba-cloud"?: {
        /** @description ENIs is the list of ENIs on the node */
        enis?: {
          [key: string]: {
            /** @description InstanceID is the InstanceID using this ENI */
            "instance-id"?: string;
            /** @description MACAddress is the mac address of the ENI */
            "mac-address"?: string;
            /** @description NetworkInterfaceID is the ENI id */
            "network-interface-id"?: string;
            /** @description PrimaryIPAddress is the primary IP on ENI */
            "primary-ip-address"?: string;
            /** @description PrivateIPSets is the list of all IPs on the ENI, including PrimaryIPAddress */
            "private-ipsets"?: {
              primary?: boolean;
              "private-ip-address"?: string;
            }[];
            /** @description SecurityGroupIDs is the security group ids used by this ENI */
            "security-groupids"?: string[];
            /** @description Tags is the tags on this ENI */
            tags?: {
              [key: string]: string;
            };
            /** @description Type is the ENI type Primary or Secondary */
            type?: string;
            /** @description VPC is the vpc to which the ENI belongs */
            vpc?: {
              /** @description CIDRBlock is the VPC IPv4 CIDR */
              cidr?: string;
              /** @description IPv6CIDRBlock is the VPC IPv6 CIDR */
              "ipv6-cidr"?: string;
              /** @description SecondaryCIDRs is the list of Secondary CIDRs associated with the VPC */
              "secondary-cidrs"?: string[];
              /** @description VPCID is the vpc to which the ENI belongs */
              "vpc-id"?: string;
            };
            /** @description VSwitch is the vSwitch the ENI is using */
            vswitch?: {
              /** @description CIDRBlock is the vSwitch IPv4 CIDR */
              cidr?: string;
              /** @description IPv6CIDRBlock is the vSwitch IPv6 CIDR */
              "ipv6-cidr"?: string;
              /** @description VSwitchID is the vSwitch to which the ENI belongs */
              "vswitch-id"?: string;
            };
            /** @description ZoneID is the zone to which the ENI belongs */
            "zone-id"?: string;
          };
        };
      };
      /** @description Azure is the Azure specific status of the node. */
      azure?: {
        /** @description Interfaces is the list of interfaces on the node */
        interfaces?: {
          /** @description GatewayIP is the interface's subnet's default route
           *      OBSOLETE: This field is obsolete, please use Gateway field instead. */
          GatewayIP?: string;
          /** @description Addresses is the list of all IPs associated with the interface, including all secondary addresses */
          addresses?: {
            /** @description IP is the ip address of the address */
            ip?: string;
            /** @description State is the provisioning state of the address */
            state?: string;
            /** @description Subnet is the subnet the address belongs to */
            subnet?: string;
          }[];
          /** @description CIDR is the range that the interface belongs to. */
          cidr?: string;
          /** @description Gateway is the interface's subnet's default route */
          gateway?: string;
          /** @description ID is the identifier */
          id?: string;
          /** @description MAC is the mac address */
          mac?: string;
          /** @description Name is the name of the interface */
          name?: string;
          /** @description SecurityGroup is the security group associated with the interface */
          "security-group"?: string;
          /** @description State is the provisioning state */
          state?: string;
        }[];
      };
      /** @description ENI is the AWS ENI specific status of the node. */
      eni?: {
        /** @description ENIs is the list of ENIs on the node */
        enis?: {
          [key: string]: {
            /** @description Addresses is the list of all secondary IPs associated with the ENI */
            addresses?: string[];
            /** @description AvailabilityZone is the availability zone of the ENI */
            "availability-zone"?: string;
            /** @description Description is the description field of the ENI */
            description?: string;
            /** @description ID is the ENI ID */
            id?: string;
            /** @description IP is the primary IP of the ENI */
            ip?: string;
            /** @description MAC is the mac address of the ENI */
            mac?: string;
            /** @description Number is the interface index, it used in combination with FirstInterfaceIndex */
            number?: number;
            /** @description Prefixes is the list of all /28 prefixes associated with the ENI */
            prefixes?: string[];
            /** @description SecurityGroups are the security groups associated with the ENI */
            "security-groups"?: string[];
            /** @description Subnet is the subnet the ENI is associated with */
            subnet?: {
              /** @description CIDR is the CIDR range associated with the subnet */
              cidr?: string;
              /** @description ID is the ID of the subnet */
              id?: string;
            };
            /** @description Tags is the set of tags of the ENI. Used to detect ENIs which should not be managed by Cilium */
            tags?: {
              [key: string]: string;
            };
            /** @description VPC is the VPC information to which the ENI is attached to */
            vpc?: {
              /** @description CIDRs is the list of CIDR ranges associated with the VPC */
              cidrs?: string[];
              /** @description / ID is the ID of a VPC */
              id?: string;
              /** @description PrimaryCIDR is the primary CIDR of the VPC */
              "primary-cidr"?: string;
            };
          };
        };
      };
      /** @description IPAM is the IPAM status of the node. */
      ipam?: {
        /** @description Operator is the Operator status of the node */
        "operator-status"?: {
          /** @description Error is the error message set by cilium-operator. */
          error?: string;
        };
        /** @description PodCIDRs lists the status of each pod CIDR allocated to this node. */
        "pod-cidrs"?: {
          [key: string]: {
            /**
             * @description Status describes the status of a pod CIDR
             * @enum {string}
             */
            status?: "released" | "depleted" | "in-use";
          };
        };
        /** @description ReleaseIPs tracks the state for every IP considered for release. value can be one of the following string : * marked-for-release : Set by operator as possible candidate for IP * ready-for-release  : Acknowledged as safe to release by agent * do-not-release     : IP already in use / not owned by the node. Set by agent * released           : IP successfully released. Set by operator */
        "release-ips"?: {
          [key: string]: "marked-for-release" | "ready-for-release" | "do-not-release" | "released";
        };
        /** @description Used lists all IPs out of Spec.IPAM.Pool which have been allocated and are in use. */
        used?: {
          [key: string]: {
            /** @description Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP
             *      The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used. */
            owner?: string;
            /** @description Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI */
            resource?: string;
          };
        };
      };
    };
  };
}
