import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputePacketMirroringV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ComputeCnrmCloudGoogleComComputePacketMirroringV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputePacketMirroringV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputePacketMirroring";
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
      /** @description The Forwarding Rule resource of type `loadBalancingScheme=INTERNAL` that will be used as collector for mirrored traffic. The specified forwarding rule must have `isMirroringCollector` set to true. */
      collectorIlb: {
        urlRef: {
          /** @description Resource URL to the forwarding rule representing the ILB configured as destination of the mirrored traffic.
           *
           *     Allowed value: The `selfLink` field of a `ComputeForwardingRule` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description An optional description of this resource. Provide this property when you create the resource. */
      description?: string;
      /** @description Indicates whether or not this packet mirroring takes effect. If set to FALSE, this packet mirroring policy will not be enforced on the network. The default is TRUE. */
      enable?: string;
      /** @description Filter for mirrored traffic. If unspecified, all traffic is mirrored. */
      filter?: {
        /** @description IP CIDR ranges that apply as filter on the source (ingress) or destination (egress) IP in the IP header. Only IPv4 is supported. If no ranges are specified, all traffic that matches the specified IPProtocols is mirrored. If neither cidrRanges nor IPProtocols is specified, all traffic is mirrored. */
        cidrRanges?: string[];
        /** @description Direction of traffic to mirror, either INGRESS, EGRESS, or BOTH. The default is BOTH. */
        direction?: string;
        /** @description Protocols that apply as filter on mirrored traffic. If no protocols are specified, all traffic that matches the specified CIDR ranges is mirrored. If neither cidrRanges nor IPProtocols is specified, all traffic is mirrored. */
        ipProtocols?: string[];
      };
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description PacketMirroring mirroredResourceInfos. MirroredResourceInfo specifies a set of mirrored VM instances, subnetworks and/or tags for which traffic from/to all VM instances will be mirrored. */
      mirroredResources: {
        /** @description A set of virtual machine instances that are being mirrored. They must live in zones contained in the same region as this packetMirroring. Note that this config will apply only to those network interfaces of the Instances that belong to the network specified in this packetMirroring. You may specify a maximum of 50 Instances. */
        instances?: {
          /** @description Immutable. Output only. Unique identifier for the instance; defined by the server. */
          canonicalUrl?: string;
          urlRef?: {
            /** @description Resource URL to the virtual machine instance which is being mirrored.
             *
             *     Allowed value: The `selfLink` field of a `ComputeInstance` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
        /** @description Immutable. A set of subnetworks for which traffic from/to all VM instances will be mirrored. They must live in the same region as this packetMirroring. You may specify a maximum of 5 subnetworks. */
        subnetworks?: {
          /** @description Immutable. Output only. Unique identifier for the subnetwork; defined by the server. */
          canonicalUrl?: string;
          /** @description Immutable. */
          urlRef?: {
            /** @description Resource URL to the subnetwork for which traffic from/to all VM instances will be mirrored.
             *
             *     Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
        /** @description A set of mirrored tags. Traffic from/to all VM instances that have one or more of these tags will be mirrored. */
        tags?: string[];
      };
      /** @description Immutable. Specifies the mirrored VPC network. Only packets in this network will be mirrored. All mirrored VMs should have a NIC in the given network. All mirrored subnetworks should belong to the given network. */
      network: {
        /** @description Immutable. */
        urlRef: {
          /** @description URL of the network resource.
           *
           *     Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /**
       * Format: int64
       * @description The priority of applying this configuration. Priority is used to break ties in cases where there is more than one matching rule. In the case of two rules that apply for a given Instance, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
       */
      priority?: number;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
    status?: {
      collectorIlb?: {
        /** @description Output only. Unique identifier for the forwarding rule; defined by the server. */
        canonicalUrl?: string;
      };
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
      /**
       * Format: int64
       * @description Output only. The unique identifier for the resource. This identifier is defined by the server.
       */
      id?: number;
      network?: {
        /** @description Output only. Unique identifier for the network; defined by the server. */
        canonicalUrl?: string;
      };
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description URI of the region where the packetMirroring resides. */
      region?: string;
      /** @description Server-defined URL for the resource. */
      selfLink?: string;
    };
  };
}
