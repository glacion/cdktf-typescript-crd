import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoRemoteNodeV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoRemoteNodeV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoRemoteNodeV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1alpha1";
    kind: "RemoteNode";
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
    /** @description Spec is a subset of runtime configuration node is another cluster. */
    spec?: {
      /** @description LIst of CIDRs used by the node for pods. */
      podCIDRs?: string[];
      /** @description Public key used by the node for encrypton tunnnel. */
      "public-key"?: string;
      /** @description IP address used by the node for the purpose of encryption tunnel. */
      "tunnel-ip"?: string;
    };
  };
}
