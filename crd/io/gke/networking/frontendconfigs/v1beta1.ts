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
  manifest: {
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
  };
}
