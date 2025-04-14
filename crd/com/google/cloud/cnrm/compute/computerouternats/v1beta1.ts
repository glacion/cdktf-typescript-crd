import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeRouterNATV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeRouterNATV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeRouterNAT", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeRouterNATV1beta1Config extends ManifestConfig {
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
      drainNatIps?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Enable Dynamic Port Allocation.
       *     If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
       *     If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
       *     If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
       *     If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
       *
       *     Mutually exclusive with enableEndpointIndependentMapping. */
      enableDynamicPortAllocation?: boolean;
      /** @description Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information
       *     see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). */
      enableEndpointIndependentMapping?: boolean;
      /** @description Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. */
      icmpIdleTimeoutSec?: number;
      /** @description Configuration for logging on NAT. */
      logConfig?: {
        /** @description Indicates whether or not to export logs. */
        enable: boolean;
        /** @description Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. */
        filter: string;
      };
      /** @description Maximum number of ports allocated to a VM from this NAT.
       *     This field can only be set when enableDynamicPortAllocation is enabled. */
      maxPortsPerVm?: number;
      /** @description Minimum number of ports allocated to a VM from this NAT. */
      minPortsPerVm?: number;
      /** @description How external IPs should be allocated for this NAT. Valid values are
       *     'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
       *     Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]. */
      natIpAllocateOption: string;
      natIps?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Immutable. Region where the router and NAT reside. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The Cloud Router in which this NAT will be configured. */
      routerRef: {
        /** @description Allowed value: The `name` field of a `ComputeRouter` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A list of rules associated with this NAT. */
      rules?: {
        /** @description The action to be enforced for traffic that matches this rule. */
        action?: {
          sourceNatActiveIpsRefs?: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeAddress` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          sourceNatDrainIpsRefs?: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeAddress` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
        /** @description An optional description of this rule. */
        description?: string;
        /** @description CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.
         *     If it evaluates to true, the corresponding action is enforced.
         *
         *     The following examples are valid match expressions for public NAT:
         *
         *     "inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"
         *
         *     "destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"
         *
         *     The following example is a valid match expression for private NAT:
         *
         *     "nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'". */
        match: string;
        /** @description An integer uniquely identifying a rule in the list.
         *     The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT. */
        ruleNumber: number;
      }[];
      /** @description How NAT should be configured per Subnetwork.
       *     If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
       *     IP ranges in every Subnetwork are allowed to Nat.
       *     If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
       *     ranges in every Subnetwork are allowed to Nat.
       *     'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
       *     (specified in the field subnetwork below). Note that if this field
       *     contains ALL_SUBNETWORKS_ALL_IP_RANGES or
       *     ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
       *     other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]. */
      sourceSubnetworkIpRangesToNat: string;
      /** @description One or more subnetwork NAT configurations. Only used if
       *     'source_subnetwork_ip_ranges_to_nat' is set to 'LIST_OF_SUBNETWORKS'. */
      subnetwork?: {
        /** @description List of the secondary ranges of the subnetwork that are allowed
         *     to use NAT. This can be populated only if
         *     'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
         *     sourceIpRangesToNat. */
        secondaryIpRangeNames?: string[];
        /** @description List of options for which source IPs in the subnetwork
         *     should have NAT enabled. Supported values include:
         *     'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
         *     'PRIMARY_IP_RANGE'. */
        sourceIpRangesToNat: string[];
        /** @description The subnetwork to NAT. */
        subnetworkRef: {
          /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      /** @description Timeout (in seconds) for TCP established connections.
       *     Defaults to 1200s if not set. */
      tcpEstablishedIdleTimeoutSec?: number;
      /** @description Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
       *     Defaults to 120s if not set. */
      tcpTimeWaitTimeoutSec?: number;
      /** @description Timeout (in seconds) for TCP transitory connections.
       *     Defaults to 30s if not set. */
      tcpTransitoryIdleTimeoutSec?: number;
      /** @description Timeout (in seconds) for UDP connections. Defaults to 30s if not set. */
      udpIdleTimeoutSec?: number;
    };
  };
}
