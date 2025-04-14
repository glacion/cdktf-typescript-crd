import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFrontendConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFrontendConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1beta1", kind: "FrontendConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFrontendConfigV1beta1Config extends ManifestConfig {
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
      /** @description HttpsRedirectConfig representing the configuration of Https redirects */
      redirectToHttps?: {
        enabled: boolean;
        /** @description String representing the HTTP response code Options are MOVED_PERMANENTLY_DEFAULT, FOUND, TEMPORARY_REDIRECT, or PERMANENT_REDIRECT */
        responseCodeName?: string;
      };
      sslPolicy?: string;
    };
  };
}
