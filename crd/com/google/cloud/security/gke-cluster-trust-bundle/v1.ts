import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class SecurityCloudGoogleComGKEClusterTrustBundleV1 extends Manifest {
  constructor(scope: Construct, id: string, config: SecurityCloudGoogleComGKEClusterTrustBundleV1Config) {
    super(scope, id, config);
  }
}
export interface SecurityCloudGoogleComGKEClusterTrustBundleV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "security.cloud.google.com/v1";
    kind: "GKEClusterTrustBundle";
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
    spec: {
      /** @description The trust bundle certificates, which are concatenated with "\n".
       *      */
      trustBundle?: string;
    };
  };
}
