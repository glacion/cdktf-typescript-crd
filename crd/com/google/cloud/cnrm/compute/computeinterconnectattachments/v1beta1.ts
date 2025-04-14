import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeInterconnectAttachmentV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesComputeInterconnectAttachmentV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "compute.cnrm.cloud.google.com/v1beta1",
        kind: "ComputeInterconnectAttachment",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesComputeInterconnectAttachmentV1beta1Config extends ManifestConfig {
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
      /** @description Whether the VLAN attachment is enabled or disabled.  When using
       *     PARTNER type this will Pre-Activate the interconnect attachment. */
      adminEnabled?: boolean;
      /** @description Provisioned bandwidth capacity for the interconnect attachment.
       *     For attachments of type DEDICATED, the user can set the bandwidth.
       *     For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
       *     Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
       *     Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G"]. */
      bandwidth?: string;
      /** @description Immutable. Up to 16 candidate prefixes that can be used to restrict the allocation
       *     of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
       *     All prefixes must be within link-local address space (169.254.0.0/16)
       *     and must be /29 or shorter (/28, /27, etc). Google will attempt to select
       *     an unused /29 from the supplied candidate prefix(es). The request will
       *     fail if all possible /29s are in use on Google's edge. If not supplied,
       *     Google will randomly select an unused /29 from all of link-local space. */
      candidateSubnets?: string[];
      /** @description An optional description of this resource. */
      description?: string;
      /** @description Immutable. Desired availability domain for the attachment. Only available for type
       *     PARTNER, at creation time. For improved reliability, customers should
       *     configure a pair of attachments with one per availability domain. The
       *     selected availability domain will be provided to the Partner via the
       *     pairing key so that the provisioned circuit will lie in the specified
       *     domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY. */
      edgeAvailabilityDomain?: string;
      /** @description Immutable. Indicates the user-supplied encryption option of this interconnect
       *     attachment. Can only be specified at attachment creation for PARTNER or
       *     DEDICATED attachments.
       *
       *     * NONE - This is the default value, which means that the VLAN attachment
       *     carries unencrypted traffic. VMs are able to send traffic to, or receive
       *     traffic from, such a VLAN attachment.
       *
       *     * IPSEC - The VLAN attachment carries only encrypted traffic that is
       *     encrypted by an IPsec device, such as an HA VPN gateway or third-party
       *     IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
       *     such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
       *     attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]. */
      encryption?: string;
      /** @description Immutable. URL of the underlying Interconnect object that this attachment's
       *     traffic will traverse through. Required if type is DEDICATED, must not
       *     be set if type is PARTNER. */
      interconnect?: string;
      ipsecInternalAddresses?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Maximum Transmission Unit (MTU), in bytes, of packets passing through
       *     this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440. */
      mtu?: string;
      /** @description Region where the regional interconnect attachment resides. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The Cloud Router to be used for dynamic routing. This router must
       *     be in the same region as this ComputeInterconnectAttachment. The
       *     ComputeInterconnectAttachment will automatically connect the
       *     interconnect to the network & region within which the Cloud Router
       *     is configured. */
      routerRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeRouter` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The type of InterconnectAttachment you wish to create. Defaults to
       *     DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"]. */
      type?: string;
      /** @description Immutable. The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
       *     using PARTNER type this will be managed upstream. */
      vlanTag8021q?: number;
    };
  };
}
