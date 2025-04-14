import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVolumeSnapshotClassV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVolumeSnapshotClassV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "snapshot.storage.k8s.io/v1beta1", kind: "VolumeSnapshotClass", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVolumeSnapshotClassV1beta1Config extends ManifestConfig {
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
