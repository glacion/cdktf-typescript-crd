import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceNetworkEndpointGroupV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesServiceNetworkEndpointGroupV1beta1Config,
  ) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1beta1", kind: "ServiceNetworkEndpointGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesServiceNetworkEndpointGroupV1beta1Config extends ManifestConfig {
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
    spec: Record;
  };
}
