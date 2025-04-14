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
  };
}
