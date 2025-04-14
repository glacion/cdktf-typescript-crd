import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEdgeNetworkNetworkV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesEdgeNetworkNetworkV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "edgenetwork.cnrm.cloud.google.com/v1beta1", kind: "EdgeNetworkNetwork", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesEdgeNetworkNetworkV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /** @description Immutable. The Google Cloud region to which the target Distributed Cloud Edge zone belongs. */
      location: string;
      /** @description Immutable. IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'. */
      mtu?: number;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The networkId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The name of the target Distributed Cloud Edge zone. */
      zone: string;
    };
  };
}
