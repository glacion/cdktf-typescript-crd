import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeVPNGatewayV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeVPNGatewayV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeVPNGatewayV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeVPNGateway";
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description The network this VPN gateway is accepting traffic for. */
      networkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The region this gateway should sit in. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The stack type for this VPN gateway to identify the IP protocols that are enabled.
       *     If not specified, IPV4_ONLY will be used. Default value: "IPV4_ONLY" Possible values: ["IPV4_ONLY", "IPV4_IPV6"]. */
      stackType?: string;
      /** @description Immutable. A list of interfaces on this VPN gateway. */
      vpnInterfaces?: {
        /** @description Immutable. The numeric ID of this VPN gateway interface. */
        id?: number;
        /** @description Immutable. When this value is present, the VPN Gateway will be used
         *     for IPsec-encrypted Cloud Interconnect; all Egress or Ingress
         *     traffic for this VPN Gateway interface will go through the specified
         *     interconnect attachment resource. Not currently available publicly. */
        interconnectAttachmentRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeInterconnectAttachment` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The external IP address for this VPN gateway interface. */
        ipAddress?: string;
      }[];
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
