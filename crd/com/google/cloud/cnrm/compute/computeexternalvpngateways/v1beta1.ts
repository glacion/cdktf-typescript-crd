import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeExternalVPNGatewayV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeExternalVPNGatewayV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeExternalVPNGateway", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeExternalVPNGatewayV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. A list of interfaces on this external VPN gateway. */
      interface?: {
        /** @description Immutable. The numeric ID for this interface. Allowed values are based on the redundancy type
         *     of this external VPN gateway
         *     * '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
         *     * '0, 1 - TWO_IPS_REDUNDANCY'
         *     * '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'. */
        id?: number;
        /** @description Immutable. IP address of the interface in the external VPN gateway.
         *     Only IPv4 is supported. This IP address can be either from
         *     your on-premise gateway or another Cloud provider's VPN gateway,
         *     it cannot be an IP address from Google Compute Engine. */
        ipAddress?: string;
      }[];
      /** @description Immutable. Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. */
      redundancyType?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
