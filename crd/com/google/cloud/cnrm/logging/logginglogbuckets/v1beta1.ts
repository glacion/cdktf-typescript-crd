import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesLoggingLogBucketV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesLoggingLogBucketV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "logging.cnrm.cloud.google.com/v1beta1", kind: "LoggingLogBucket", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesLoggingLogBucketV1beta1Config extends ManifestConfig {
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
