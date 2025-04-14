import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLoggingLogViewV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesLoggingLogViewV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "logging.cnrm.cloud.google.com/v1beta1", kind: "LoggingLogView", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesLoggingLogViewV1beta1Config extends ManifestConfig {
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
