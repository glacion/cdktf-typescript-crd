import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDLPInspectTemplateV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDLPInspectTemplateV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dlp.cnrm.cloud.google.com/v1beta1", kind: "DLPInspectTemplate", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDLPInspectTemplateV1beta1Config extends ManifestConfig {
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
