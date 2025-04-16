import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesUUIDV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesUUIDV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesUUIDV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "generators.external-secrets.io/v1alpha1";
    kind?: "UUID";
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
    /** @description UUIDSpec controls the behavior of the uuid generator. */
    spec?: Record<string, never>;
  };
}
