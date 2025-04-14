import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSKeyRingV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesKMSKeyRingV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kms.cnrm.cloud.google.com/v1beta1", kind: "KMSKeyRing", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesKMSKeyRingV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The location for the KeyRing. A full list of valid locations can be found by running 'gcloud kms locations list'. */
      location: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
