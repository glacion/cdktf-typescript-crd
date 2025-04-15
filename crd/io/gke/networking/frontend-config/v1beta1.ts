import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFrontendConfigV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesFrontendConfigV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesFrontendConfigV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1beta1";
    kind: "FrontendConfig";
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
    /** @description FrontendConfigSpec is the spec for a FrontendConfig resource */
    spec?: {
      /** @description HttpsRedirectConfig representing the configuration of Https redirects */
      redirectToHttps?: {
        enabled: boolean;
        /** @description String representing the HTTP response code Options are MOVED_PERMANENTLY_DEFAULT, FOUND, TEMPORARY_REDIRECT, or PERMANENT_REDIRECT */
        responseCodeName?: string;
      };
      sslPolicy?: string;
    };
    status?: Record<string, never>;
  };
}
