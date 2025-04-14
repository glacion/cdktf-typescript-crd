import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRedirectServiceV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesRedirectServiceV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1alpha1", kind: "RedirectService", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesRedirectServiceV1alpha1Config extends ManifestConfig {
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
      /** @description redirect specifies a redirection operation. */
      redirect?: {
        /** @description Provider of the original service. */
        provider?: string;
        /** @description Type of service that needs redirection. */
        type?: string;
      };
    };
  };
}
