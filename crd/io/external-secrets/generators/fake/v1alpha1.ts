import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class GeneratorsExternalSecretsIoFakeV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: GeneratorsExternalSecretsIoFakeV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface GeneratorsExternalSecretsIoFakeV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "generators.external-secrets.io/v1alpha1";
    kind: "Fake";
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
    /** @description FakeSpec contains the static data. */
    spec?: {
      /** @description Used to select the correct ESO controller (think: ingress.ingressClassName)
       *     The ESO controller is instantiated with a specific controller name and filters VDS based on this property */
      controller?: string;
      /** @description Data defines the static data returned
       *     by this generator. */
      data?: {
        [key: string]: string;
      };
    };
  };
}
