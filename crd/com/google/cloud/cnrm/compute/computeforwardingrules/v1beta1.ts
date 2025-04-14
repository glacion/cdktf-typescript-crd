import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeForwardingRuleV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeForwardingRuleV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeForwardingRule", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeForwardingRuleV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. This field can only be used:
       *     * If 'IPProtocol' is one of TCP, UDP, or SCTP.
       *     * By internal TCP/UDP load balancers, backend service-based network load
       *     balancers, and internal and external protocol forwarding.
       *
       *     This option should be set to TRUE when the Forwarding Rule
       *     IPProtocol is set to L3_DEFAULT.
       *
       *     Set this field to true to allow packets addressed to any port or packets
       *     lacking destination port information (for example, UDP fragments after the
       *     first fragment) to be forwarded to the backends configured with this
       *     forwarding rule.
       *
       *     The 'ports', 'port_range', and
       *     'allPorts' fields are mutually exclusive. */
      allPorts?: boolean;
      /** @description This field is used along with the 'backend_service' field for
       *     internal load balancing or with the 'target' field for internal
       *     TargetInstance.
       *
       *     If the field is set to 'TRUE', clients can access ILB from all
       *     regions.
       *
       *     Otherwise only allows access from clients in the same region as the
       *     internal load balancer. */
      allowGlobalAccess?: boolean;
      /** @description This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. */
      allowPscGlobalAccess?: boolean;
      /** @description A ComputeBackendService to receive the matched traffic. This is used only for internal load balancing. */
      backendServiceRef?: {
        /** @description The value of an externally managed ComputeBackendService resource. */
        external?: string;
        /** @description The name of a ComputeBackendService resource. */
        name?: string;
        /** @description The namespace of a ComputeBackendService resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. Provide this property when you create the resource. */
      description?: string;
      /** @description The IP address that this forwarding rule is serving on behalf of.
       *
       *     Addresses are restricted based on the forwarding rule's load
       *     balancing scheme (EXTERNAL or INTERNAL) and scope (global or
       *     regional).
       *
       *     When the load balancing scheme is EXTERNAL, for global forwarding
       *     rules, the address must be a global IP, and for regional forwarding
       *     rules, the address must live in the same region as the forwarding
       *     rule. If this field is empty, an ephemeral IPv4 address from the
       *     same scope (global or regional) will be assigned. A regional
       *     forwarding rule supports IPv4 only. A global forwarding rule
       *     supports either IPv4 or IPv6.
       *
       *     When the load balancing scheme is INTERNAL, this can only be an RFC
       *     1918 IP address belonging to the network/subnet configured for the
       *     forwarding rule. By default, if this field is empty, an ephemeral
       *     internal IP address will be automatically allocated from the IP
       *     range of the subnet or network configured for this forwarding rule. */
      ipAddress?: {
        addressRef?: {
          /** @description The ComputeAddress selflink in the form "projects/{{project}}/regions/{{region}}/addresses/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeAddress` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeAddress` resource. */
          namespace?: string;
        } & (unknown | unknown);
        ip?: string;
      };
      /** @description Immutable. The IP protocol to which this rule applies.
       *
       *     For protocol forwarding, valid
       *     options are 'TCP', 'UDP', 'ESP',
       *     'AH', 'SCTP', 'ICMP' and
       *     'L3_DEFAULT'.
       *
       *     The valid IP protocols are different for different load balancing products
       *     as described in [Load balancing
       *     features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).
       *
       *     A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
       *     backend service with UNSPECIFIED protocol.
       *     A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]. */
      ipProtocol?: string;
      /** @description Immutable. The IP address version that will be used by this forwarding rule.
       *     Valid options are IPV4 and IPV6.
       *
       *     If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]. */
      ipVersion?: string;
      /** @description Immutable. Indicates whether or not this load balancer can be used as a collector for
       *     packet mirroring. To prevent mirroring loops, instances behind this
       *     load balancer will not have their traffic mirrored even if a
       *     'PacketMirroring' rule applies to them.
       *
       *     This can only be set to true for load balancers that have their
       *     'loadBalancingScheme' set to 'INTERNAL'. */
      isMirroringCollector?: boolean;
      /** @description Immutable. Specifies the forwarding rule type.
       *
       *     Must set to empty for private service connect forwarding rule. For more information about forwarding rules, refer to
       *     [Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED", ""]. */
      loadBalancingScheme?: string;
      /** @description Location represents the geographical location of the ComputeForwardingRule. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. Opaque filter criteria used by Loadbalancer to restrict routing
       *     configuration to a limited set xDS compliant clients. In their xDS
       *     requests to Loadbalancer, xDS clients present node metadata. If a
       *     match takes place, the relevant routing configuration is made available
       *     to those proxies.
       *
       *     For each metadataFilter in this list, if its filterMatchCriteria is set
       *     to MATCH_ANY, at least one of the filterLabels must match the
       *     corresponding label provided in the metadata. If its filterMatchCriteria
       *     is set to MATCH_ALL, then all of its filterLabels must match with
       *     corresponding labels in the provided metadata.
       *
       *     metadataFilters specified here can be overridden by those specified in
       *     the UrlMap that this ForwardingRule references.
       *
       *     metadataFilters only applies to Loadbalancers that have their
       *     loadBalancingScheme set to INTERNAL_SELF_MANAGED. */
      metadataFilters?: {
        /** @description Immutable. The list of label value pairs that must match labels in the
         *     provided metadata based on filterMatchCriteria
         *
         *     This list must not be empty and can have at the most 64 entries. */
        filterLabels: {
          /** @description Immutable. Name of the metadata label. The length must be between 1 and 1024 characters, inclusive. */
          name: string;
          /** @description Immutable. The value that the label must match. The value has a maximum length of 1024 characters. */
          value: string;
        }[];
        /** @description Immutable. Specifies how individual filterLabel matches within the list of
         *     filterLabels contribute towards the overall metadataFilter match.
         *
         *     MATCH_ANY - At least one of the filterLabels must have a matching
         *     label in the provided metadata.
         *     MATCH_ALL - All filterLabels must have matching labels in the
         *     provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]. */
        filterMatchCriteria: string;
      }[];
      /** @description This field is not used for external load balancing. For internal load balancing, this field identifies the network that the load balanced IP should belong to for this forwarding rule. If this field is not specified, the default network will be used. */
      networkRef?: {
        /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
        external?: string;
        /** @description The `name` field of a `ComputeNetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeNetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. This signifies the networking tier used for configuring
       *     this load balancer and can only take the following values:
       *     'PREMIUM', 'STANDARD'.
       *
       *     For regional ForwardingRule, the valid values are 'PREMIUM' and
       *     'STANDARD'. For GlobalForwardingRule, the valid value is
       *     'PREMIUM'.
       *
       *     If this field is not specified, it is assumed to be 'PREMIUM'.
       *     If 'IPAddress' is specified, this value must be equal to the
       *     networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]. */
      networkTier?: string;
      /** @description Immutable. This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field. */
      noAutomateDnsZone?: boolean;
      /** @description Immutable. This field can only be used:
       *
       *     * If 'IPProtocol' is one of TCP, UDP, or SCTP.
       *     * By backend service-based network load balancers, target pool-based
       *     network load balancers, internal proxy load balancers, external proxy load
       *     balancers, Traffic Director, external protocol forwarding, and Classic VPN.
       *     Some products have restrictions on what ports can be used. See
       *     [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
       *     for details.
       *
       *     Only packets addressed to ports in the specified range will be forwarded to
       *     the backends configured with this forwarding rule.
       *
       *     The 'ports' and 'port_range' fields are mutually exclusive.
       *
       *     For external forwarding rules, two or more forwarding rules cannot use the
       *     same '[IPAddress, IPProtocol]' pair, and cannot have
       *     overlapping 'portRange's.
       *
       *     For internal forwarding rules within the same VPC network, two or more
       *     forwarding rules cannot use the same '[IPAddress, IPProtocol]'
       *     pair, and cannot have overlapping 'portRange's. */
      portRange?: string;
      /** @description Immutable. This field can only be used:
       *
       *     * If 'IPProtocol' is one of TCP, UDP, or SCTP.
       *     * By internal TCP/UDP load balancers, backend service-based network load
       *     balancers, internal protocol forwarding and when protocol is not L3_DEFAULT.
       *
       *     You can specify a list of up to five ports by number, separated by commas.
       *     The ports can be contiguous or discontiguous. Only packets addressed to
       *     these ports will be forwarded to the backends configured with this
       *     forwarding rule.
       *
       *     For external forwarding rules, two or more forwarding rules cannot use the
       *     same '[IPAddress, IPProtocol]' pair, and cannot share any values
       *     defined in 'ports'.
       *
       *     For internal forwarding rules within the same VPC network, two or more
       *     forwarding rules cannot use the same '[IPAddress, IPProtocol]'
       *     pair, and cannot share any values defined in 'ports'.
       *
       *     The 'ports' and 'port_range' fields are mutually exclusive. */
      ports?: string[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Service Directory resources to register this forwarding rule with.
       *
       *     Currently, only supports a single Service Directory resource. */
      serviceDirectoryRegistrations?: {
        /** @description Immutable. Service Directory namespace to register the forwarding rule under. */
        namespace?: string;
        /** @description Immutable. Service Directory service to register the forwarding rule under. */
        service?: string;
      }[];
      /** @description Immutable. An optional prefix to the service name for this Forwarding Rule.
       *     If specified, will be the first label of the fully qualified service
       *     name.
       *
       *     The label must be 1-63 characters long, and comply with RFC1035.
       *     Specifically, the label must be 1-63 characters long and match the
       *     regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
       *     character must be a lowercase letter, and all following characters
       *     must be a dash, lowercase letter, or digit, except the last
       *     character, which cannot be a dash.
       *
       *     This field is only used for INTERNAL load balancing. */
      serviceLabel?: string;
      /** @description Immutable. If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24). */
      sourceIpRanges?: string[];
      /** @description Immutable. The subnetwork that the load balanced IP should belong to for this
       *     forwarding rule. This field is only used for internal load
       *     balancing.
       *
       *     If the network specified is in auto subnet mode, this field is
       *     optional. However, if the network is in custom subnet mode, a
       *     subnetwork must be specified. */
      subnetworkRef?: {
        /** @description The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector. */
        external?: string;
        /** @description The `name` field of a `ComputeSubnetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeSubnetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The target resource to receive the matched traffic. The forwarded traffic must be of a type appropriate to the target object. For INTERNAL_SELF_MANAGED load balancing, only HTTP and HTTPS targets are valid. */
      target?: {
        googleAPIsBundle?: string;
        serviceAttachmentRef?: {
          /** @description The ComputeServiceAttachment selflink in the form "projects/{{project}}/regions/{{region}}/serviceAttachments/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeServiceAttachment` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeServiceAttachment` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetGRPCProxyRef?: {
          /** @description The ComputeTargetGrpcProxy selflink in the form "projects/{{project}}/global/targetGrpcProxies/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetGrpcProxy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetGrpcProxy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetHTTPProxyRef?: {
          /** @description The ComputeTargetHTTPProxy selflink in the form "projects/{{project}}/global/targetHttpProxies/{{name}}" or "projects/{{project}}/regions/{{region}}/targetHttpProxies/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetHTTPProxy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetHTTPProxy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetHTTPSProxyRef?: {
          /** @description The ComputeTargetHTTPSProxy selflink in the form "projects/{{project}}/global/targetHttpProxies/{{name}}" or "projects/{{project}}/regions/{{region}}/targetHttpProxies/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetHTTPSProxy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetHTTPSProxy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetSSLProxyRef?: {
          /** @description The ComputeTargetSSLProxy selflink in the form "projects/{{project}}/global/targetSslProxies/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetSSLProxy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetSSLProxy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetTCPProxyRef?: {
          /** @description The ComputeTargetTCPProxy selflink in the form "projects/{{project}}/global/targetTcpProxies/{{name}}" or "projects/{{project}}/regions/{{region}}/targetTcpProxies/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetTCPProxy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetTCPProxy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        targetVPNGatewayRef?: {
          /** @description The ComputeTargetVPNGateway selflink in the form "projects/{{project}}/regions/{{region}}/targetVpnGateways/{{name}}" when not managed by Config Connector. */
          external?: string;
          /** @description The `name` field of a `ComputeTargetVPNGateway` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeTargetVPNGateway` resource. */
          namespace?: string;
        } & (unknown | unknown);
      };
    };
  };
}
