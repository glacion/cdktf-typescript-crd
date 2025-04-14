import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeRouterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeRouterV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeRouter", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeRouterV1beta1Config extends ManifestConfig {
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
      spec: {
        /** @description BGP information specific to this router. */
        bgp?: {
          /** @description User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]. */
          advertiseMode?: string;
          /** @description User-specified list of prefix groups to advertise in custom mode.
           *     This field can only be populated if advertiseMode is CUSTOM and
           *     is advertised to all peers of the router. These groups will be
           *     advertised in addition to any specified prefixes. Leave this field
           *     blank to advertise no custom groups.
           *
           *     This enum field has the one valid value: ALL_SUBNETS. */
          advertisedGroups?: string[];
          /** @description User-specified list of individual IP ranges to advertise in
           *     custom mode. This field can only be populated if advertiseMode
           *     is CUSTOM and is advertised to all peers of the router. These IP
           *     ranges will be advertised in addition to any specified groups.
           *     Leave this field blank to advertise no custom IP ranges. */
          advertisedIpRanges?: {
            /** @description User-specified description for the IP range. */
            description?: string;
            /** @description The IP range to advertise. The value must be a
             *     CIDR-formatted string. */
            range: string;
          }[];
          /** @description Local BGP Autonomous System Number (ASN). Must be an RFC6996
           *     private ASN, either 16-bit or 32-bit. The value will be fixed for
           *     this router resource. All VPN tunnels that link to this router
           *     will have the same local ASN. */
          asn: number;
          /** @description The interval in seconds between BGP keepalive messages that are sent
           *     to the peer. Hold time is three times the interval at which keepalive
           *     messages are sent, and the hold time is the maximum number of seconds
           *     allowed to elapse between successive keepalive messages that BGP
           *     receives from a peer.
           *
           *     BGP will use the smaller of either the local hold time value or the
           *     peer's hold time value as the hold time for the BGP connection
           *     between the two peers. If set, this value must be between 20 and 60.
           *     The default is 20. */
          keepaliveInterval?: number;
        };
        /** @description An optional description of this resource. */
        description?: string;
        /** @description Immutable. Indicates if a router is dedicated for use with encrypted VLAN
         *     attachments (interconnectAttachments). */
        encryptedInterconnectRouter?: boolean;
        /** @description A reference to the network to which this router belongs. */
        networkRef: {
          /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Region where the router resides. */
        region: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
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
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
