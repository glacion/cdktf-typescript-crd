import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputeAddressV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ComputeCnrmCloudGoogleComComputeAddressV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputeAddressV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeAddress";
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
    spec: {
      /** @description Immutable. The static external IP address represented by this resource.
       *     The IP address must be inside the specified subnetwork,
       *     if any. Set by the API if undefined. */
      address?: string;
      /** @description Immutable. The type of address to reserve.
       *     Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]. */
      addressType?: string;
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. */
      ipVersion?: string;
      /** @description Immutable. The endpoint type of this address, which should be VM or NETLB. This is
       *     used for deciding which type of endpoint this address can be used after
       *     the external IPv6 address reservation. Possible values: ["VM", "NETLB"]. */
      ipv6EndpointType?: string;
      /** @description Location represents the geographical location of the ComputeAddress. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description The network in which to reserve the address. If global, the address
       *     must be within the RFC1918 IP space. The network cannot be deleted
       *     if there are any reserved IP ranges referring to it. This field can
       *     only be used with INTERNAL type with the VPC_PEERING and
       *     IPSEC_INTERCONNECT purposes. */
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The networking tier used for configuring this address. If this field is not
       *     specified, it is assumed to be PREMIUM.
       *     This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]. */
      networkTier?: string;
      /** @description Immutable. The prefix length if the resource represents an IP range. */
      prefixLength?: number;
      /** @description Immutable. The purpose of this resource, which can be one of the following values.
       *
       *     * GCE_ENDPOINT for addresses that are used by VM instances, alias IP
       *     ranges, load balancers, and similar resources.
       *
       *     * SHARED_LOADBALANCER_VIP for an address that can be used by multiple
       *     internal load balancers.
       *
       *     * VPC_PEERING for addresses that are reserved for VPC peer networks.
       *
       *     * IPSEC_INTERCONNECT for addresses created from a private IP range that
       *     are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
       *     configuration. These addresses are regional resources.
       *
       *     * PRIVATE_SERVICE_CONNECT for a private network address that is used to
       *     configure Private Service Connect. Only global internal addresses can use
       *     this purpose.
       *
       *
       *     This should only be set when using an Internal address. */
      purpose?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The subnetwork in which to reserve the address. If an IP address is
       *     specified, it must be within the subnetwork's IP range.  This field
       *     can only be used with INTERNAL type with GCE_ENDPOINT/DNS_RESOLVER
       *     purposes. */
      subnetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description The fingerprint used for optimistic locking of this resource.  Used
       *     internally during updates. */
      labelFingerprint?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description Immutable. The static external IP address represented by this resource.
         *     The IP address must be inside the specified subnetwork,
         *     if any. Set by the API if undefined. */
        address?: string;
      };
      selfLink?: string;
      /** @description The URLs of the resources that are using this address. */
      users?: string[];
    };
  };
}
