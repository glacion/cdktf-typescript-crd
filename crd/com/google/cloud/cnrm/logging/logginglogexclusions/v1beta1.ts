import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLoggingLogExclusionV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesLoggingLogExclusionV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "logging.cnrm.cloud.google.com/v1beta1", kind: "LoggingLogExclusion", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesLoggingLogExclusionV1beta1Config extends ManifestConfig {
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
    spec: object;
  };
}
