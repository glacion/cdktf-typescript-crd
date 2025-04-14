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
  };
}
