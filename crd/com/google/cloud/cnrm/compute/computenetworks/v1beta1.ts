import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNetworkV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeNetworkV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeNetwork", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeNetworkV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec?: {
        /** @description Immutable. When set to 'true', the network is created in "auto subnet mode" and
         *     it will create a subnet for each region automatically across the
         *     '10.128.0.0/9' address range.
         *
         *     When set to 'false', the network is created in "custom subnet mode" so
         *     the user can explicitly connect subnetwork resources. */
        autoCreateSubnetworks?: boolean;
        /** @description If set to 'true', default routes ('0.0.0.0/0') will be deleted
         *     immediately after network creation. Defaults to 'false'. */
        deleteDefaultRoutesOnCreate?: boolean;
        /** @description Immutable. An optional description of this resource. The resource must be
         *     recreated to modify this field. */
        description?: string;
        /** @description Enable ULA internal ipv6 on this network. Enabling this feature will assign
         *     a /48 from google defined ULA prefix fd20::/20. */
        enableUlaInternalIpv6?: boolean;
        /** @description Immutable. When enabling ula internal ipv6, caller optionally can specify the /48 range
         *     they want from the google defined ULA prefix fd20::/20. The input must be a
         *     valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
         *     fail if the speficied /48 is already in used by another resource.
         *     If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field. */
        internalIpv6Range?: string;
        /** @description Immutable. Maximum Transmission Unit in bytes. The default value is 1460 bytes.
         *     The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
         *     Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
         *     with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
         *     with varying MTUs. */
        mtu?: number;
        /** @description Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. */
        networkFirewallPolicyEnforcementOrder?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description The network-wide routing mode to use. If set to 'REGIONAL', this
         *     network's cloud routers will only advertise routes with subnetworks
         *     of this network in the same region as the router. If set to 'GLOBAL',
         *     this network's cloud routers will advertise routes with all
         *     subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]. */
        routingMode?: string;
      };
      status?: {
        /** @description Conditions represent the latest available observation of the resource's current state. */
        conditions?: {
          /** @description Last time the condition transitioned from one status to another. */
          lastTransitionTime?: string;
          /** @description Human-readable message indicating details about last transition. */
          message?: string;
          /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
          reason?: string;
          /** @description Status is the status of the condition. Can be True, False, Unknown. */
          status?: string;
          /** @description Type is the type of the condition. */
          type?: string;
        }[];
        /** @description The gateway address for default routing out of the network. This value
         *     is selected by GCP. */
        gatewayIpv4?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
