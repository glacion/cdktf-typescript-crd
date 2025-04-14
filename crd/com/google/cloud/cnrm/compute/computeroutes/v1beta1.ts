import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeRouteV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeRouteV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeRoute", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeRouteV1beta1Config extends ManifestConfig {
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
  };
}
