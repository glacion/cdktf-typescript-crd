import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeRouteV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeRouteV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeRouteV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeRoute";
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
      /** @description Immutable. An optional description of this resource. Provide this property
       *     when you create the resource. */
      description?: string;
      /** @description Immutable. The destination range of outgoing packets that this route applies to.
       *     Only IPv4 is supported. */
      destRange: string;
      /** @description The network that this route applies to. */
      networkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. URL to a gateway that should handle matching packets.
       *     Currently, you can only specify the internet gateway, using a full or
       *     partial valid URL:
       *     * 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
       *     * 'projects/project/global/gateways/default-internet-gateway'
       *     * 'global/gateways/default-internet-gateway'
       *     * The string 'default-internet-gateway'. */
      nextHopGateway?: string;
      /** @description A forwarding rule of type loadBalancingScheme=INTERNAL that should
       *     handle matching packets.  Note that this can only be used when the
       *     destinationRange is a public (non-RFC 1918) IP CIDR range. */
      nextHopILBRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeForwardingRule` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Instance that should handle matching packets. */
      nextHopInstanceRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Network IP address of an instance that should handle matching packets. */
      nextHopIp?: string;
      /** @description The ComputeVPNTunnel that should handle matching packets */
      nextHopVPNTunnelRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeVPNTunnel` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The priority of this route. Priority is used to break ties in cases
       *     where there is more than one matching route of equal prefix length.
       *
       *     In the case of two routes with equal prefix length, the one with the
       *     lowest-numbered priority value wins.
       *
       *     Default value is 1000. Valid range is 0 through 65535. */
      priority?: number;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. A list of instance tags to which this route applies. */
      tags?: string[];
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
      /** @description URL to a Network that should handle matching packets. */
      nextHopNetwork?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
