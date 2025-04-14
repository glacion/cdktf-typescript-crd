import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFakeV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFakeV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "Fake", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFakeV1alpha1Config extends ManifestConfig {
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
