import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKENetworkParamSetV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKENetworkParamSetV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "GKENetworkParamSet", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGKENetworkParamSetV1Config extends ManifestConfig {
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
    /** @description GKENetworkParamSet represent GKE specific parameters for the network. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description GKENetworkParamSetSpec contains the specifications for network object */
      spec?: {
        /** @description DeviceMode indicates the mode in which the devices will be used by the Pod. This field is required and valid only for "Device" typed network. Mutually exclusive with NetworkAttachment. */
        deviceMode?: string;
        /** @description NetworkAttachment specifies the network attachment to connect to. Mutually exclusive with VPC, VPCSubnet, DeviceMode, and PodIPv4Ranges. */
        networkAttachment?: string;
        /** @description PodIPv4Ranges specify the names of the secondary ranges of the VPC subnet used to allocate pod IPs for the network. This field is required and valid only for L3 typed network. Mutually exclusive with NetworkAttachment. */
        podIPv4Ranges?: {
          rangeNames: string[];
        };
        /** @description VPC specifies the VPC to which the network belongs. This field is required when not connecting across a network attachment. Mutually exclusive with NetworkAttachment. */
        vpc?: string;
        /** @description VPCSubnet is the path of the VPC subnet. Must be set if specifying VPC. Mutually exclusive with NetworkAttachment. */
        vpcSubnet?: string;
      };
      /** @description GKENetworkParamSetStatus contains the status information related to the network. */
      status?: {
        /** @description Conditions is a field representing the current conditions of the GKENetworkParamSet.
         *      Known condition types are:
         *      * "Ready" */
        conditions?: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string;
          /** @description message is a human readable message indicating details about the transition. This may be an empty string. */
          message: string;
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
           */
          observedGeneration?: number;
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. */
          reason: string;
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown";
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
          type: string;
        }[];
        /** @description NetworkName specifies which Network object is currently referencing this GKENetworkParamSet */
        networkName?: string;
        /** @description PodCIDRs specifies the CIDRs from which IPs will be used for Pod interfaces */
        podCIDRs?: {
          cidrBlocks: string[];
        };
      };
    };
  };
}
