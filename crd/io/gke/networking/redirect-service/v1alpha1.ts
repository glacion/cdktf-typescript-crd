import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRedirectServiceV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesRedirectServiceV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesRedirectServiceV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1alpha1";
    kind?: "RedirectService";
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
    /** @description Spec is the desired configuration for Google redirect service. */
    spec?: {
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
