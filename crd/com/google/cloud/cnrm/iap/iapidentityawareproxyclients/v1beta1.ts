import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAPIdentityAwareProxyClientV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesIAPIdentityAwareProxyClientV1beta1Config,
  ) {
    super(scope, id, {
      manifest: { apiVersion: "iap.cnrm.cloud.google.com/v1beta1", kind: "IAPIdentityAwareProxyClient", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAPIdentityAwareProxyClientV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. */
      brandRef: {
        /** @description The brand for the resource
         *
         *     Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Human-friendly name given to the OAuth client. */
      displayName?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
