import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeVPNTunnelV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeVPNTunnelV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeVPNTunnel", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeVPNTunnelV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. IKE protocol version to use when establishing the VPN tunnel with
       *     peer VPN gateway.
       *     Acceptable IKE versions are 1 or 2. Default version is 2. */
      ikeVersion?: number;
      /** @description Immutable. Local traffic selector to use when establishing the VPN tunnel with
       *     peer VPN gateway. The value should be a CIDR formatted string,
       *     for example '192.168.0.0/16'. The ranges should be disjoint.
       *     Only IPv4 is supported. */
      localTrafficSelector?: string[];
      /** @description Immutable. The interface ID of the external VPN gateway to which this VPN tunnel is connected. */
      peerExternalGatewayInterface?: number;
      /** @description The peer side external VPN gateway to which this VPN tunnel
       *     is connected. */
      peerExternalGatewayRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeExternalVPNGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The peer side HA GCP VPN gateway to which this VPN tunnel is
       *     connected. If provided, the VPN tunnel will automatically use the
       *     same VPN gateway interface ID in the peer GCP VPN gateway. */
      peerGCPGatewayRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. IP address of the peer VPN gateway. Only IPv4 is supported. */
      peerIp?: string;
      /** @description Immutable. The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. */
      region: string;
      /** @description Immutable. Remote traffic selector to use when establishing the VPN tunnel with
       *     peer VPN gateway. The value should be a CIDR formatted string,
       *     for example '192.168.0.0/16'. The ranges should be disjoint.
       *     Only IPv4 is supported. */
      remoteTrafficSelector?: string[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The router to be used for dynamic routing. */
      routerRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeRouter` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Shared secret used to set the secure session between the Cloud VPN
       *     gateway and the peer VPN gateway. */
      sharedSecret: {
        /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
        value?: string;
        /** @description Source for the field's value. Cannot be used if 'value' is specified. */
        valueFrom?: {
          /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
          secretKeyRef?: {
            /** @description Key that identifies the value to be extracted. */
            key: string;
            /** @description Name of the Secret to extract a value from. */
            name: string;
          };
        };
      } & (unknown | unknown);
      /** @description The ComputeTargetVPNGateway with which this VPN tunnel is
       *     associated. */
      targetVPNGatewayRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeTargetVPNGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The interface ID of the VPN gateway with which this VPN tunnel is associated. */
      vpnGatewayInterface?: number;
      /** @description The ComputeVPNGateway with which this VPN tunnel is associated.
       *     This must be used if a High Availability VPN gateway resource is
       *     created. */
      vpnGatewayRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeVPNGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
