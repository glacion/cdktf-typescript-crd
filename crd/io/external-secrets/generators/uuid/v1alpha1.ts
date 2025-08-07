import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class GeneratorsExternalSecretsIoUUIDV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: GeneratorsExternalSecretsIoUUIDV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface GeneratorsExternalSecretsIoUUIDV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "generators.external-secrets.io/v1alpha1";
    kind: "UUID";
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
