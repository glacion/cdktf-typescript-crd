import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMWorkloadIdentityPoolV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMWorkloadIdentityPoolV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMWorkloadIdentityPool", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMWorkloadIdentityPoolV1beta1Config extends ManifestConfig {
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
      /** @description A description of the pool. Cannot exceed 256 characters. */
      description?: string;
      /** @description Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
      disabled?: boolean;
      /** @description A display name for the pool. Cannot exceed 32 characters. */
      displayName?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
