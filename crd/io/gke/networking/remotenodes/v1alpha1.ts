import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRemoteNodeV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesRemoteNodeV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1alpha1", kind: "RemoteNode", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesRemoteNodeV1alpha1Config extends ManifestConfig {
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
      /** @description LIst of CIDRs used by the node for pods. */
      podCIDRs?: string[];
      /** @description Public key used by the node for encrypton tunnnel. */
      "public-key"?: string;
      /** @description IP address used by the node for the purpose of encryption tunnel. */
      "tunnel-ip"?: string;
    };
  };
}
