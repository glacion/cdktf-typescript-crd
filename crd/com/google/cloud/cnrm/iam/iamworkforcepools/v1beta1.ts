import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMWorkforcePoolV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMWorkforcePoolV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMWorkforcePool", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMWorkforcePoolV1beta1Config extends ManifestConfig {
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
      /** @description A user-specified description of the pool. Cannot exceed 256 characters. */
      description?: string;
      /** @description Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
      disabled?: boolean;
      /** @description A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. */
      displayName?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Organization that this resource belongs to. Only one of [organizationRef] may be specified. */
      organizationRef: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
        external?: string;
        /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials will have a default duration of one hour (3600s). */
      sessionDuration?: string;
    };
  };
}
