import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultiKueueClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMultiKueueClusterV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "MultiKueueCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMultiKueueClusterV1beta1Config extends ManifestConfig {
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
      /** @description Information how to connect to the cluster. */
      kubeConfig: {
        /** @description Location of the KubeConfig.
         *
         *     If LocationType is Secret then Location is the name of the secret inside the namespace in
         *     which the kueue controller manager is running. The config should be stored in the "kubeconfig" key. */
        location: string;
        /** @description Type of the KubeConfig location. */
        locationType: string;
      };
    };
  };
}
