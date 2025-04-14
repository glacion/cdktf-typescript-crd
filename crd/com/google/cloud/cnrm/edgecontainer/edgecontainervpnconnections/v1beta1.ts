import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEdgeContainerVpnConnectionV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesEdgeContainerVpnConnectionV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "edgecontainer.cnrm.cloud.google.com/v1beta1",
        kind: "EdgeContainerVpnConnection",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesEdgeContainerVpnConnectionV1beta1Config extends ManifestConfig {
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
      clusterRef: {
        /** @description Allowed value: The `name` field of an `EdgeContainerCluster` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs. */
      enableHighAvailability?: boolean;
      /** @description Immutable. Google Cloud Platform location. */
      location: string;
      /** @description Immutable. NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
       *     This is empty if NAT is not used. */
      natGatewayIp?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The VPN connection Cloud Router name. */
      router?: string;
      /** @description Immutable. The network ID of VPC to connect to. */
      vpc?: string;
      /** @description Project detail of the VPC network. Required if VPC is in a different project than the cluster project. */
      vpcProject?: {
        /** @description Immutable. The project of the VPC to connect to. If not specified, it is the same as the cluster project. */
        projectId?: string;
      };
    };
  };
}
