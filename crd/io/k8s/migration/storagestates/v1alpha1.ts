import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageStateV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesStorageStateV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "migration.k8s.io/v1alpha1", kind: "StorageState", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesStorageStateV1alpha1Config extends ManifestConfig {
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
      /** @description The resource this storageState is about. */
      resource?: {
        /** @description The name of the group. */
        group?: string;
        /** @description The name of the resource. */
        resource?: string;
      };
    };
  };
}
