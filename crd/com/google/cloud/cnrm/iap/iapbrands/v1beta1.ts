import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAPBrandV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAPBrandV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iap.cnrm.cloud.google.com/v1beta1", kind: "IAPBrand", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAPBrandV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. Application name displayed on OAuth consent screen. */
      applicationTitle?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Support email displayed on the OAuth consent screen. */
      supportEmail?: string;
    };
  };
}
