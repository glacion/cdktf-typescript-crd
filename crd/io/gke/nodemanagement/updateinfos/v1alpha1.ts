import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesUpdateInfoV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesUpdateInfoV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "nodemanagement.gke.io/v1alpha1", kind: "UpdateInfo", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesUpdateInfoV1alpha1Config extends ManifestConfig {
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
      Type?: string;
      instanceGroupUrl?: string;
      surgeNode?: string;
      targetNode?: string;
      /** Format: date-time */
      validUntil?: string;
    };
  };
}
