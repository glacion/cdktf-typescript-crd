import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNetworkPeeringV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeNetworkPeeringV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeNetworkPeering", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeNetworkPeeringV1beta1Config extends ManifestConfig {
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
      /** @description Whether to export the custom routes to the peer network. Defaults to false. */
      exportCustomRoutes?: boolean;
      /** @description Immutable. */
      exportSubnetRoutesWithPublicIp?: boolean;
      /** @description Whether to export the custom routes from the peer network. Defaults to false. */
      importCustomRoutes?: boolean;
      /** @description Immutable. */
      importSubnetRoutesWithPublicIp?: boolean;
      networkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      peerNetworkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]. */
      stackType?: string;
    };
  };
}
