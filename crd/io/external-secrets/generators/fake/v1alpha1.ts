import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFakeV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesFakeV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesFakeV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "generators.external-secrets.io/v1alpha1";
    kind?: "Fake";
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
