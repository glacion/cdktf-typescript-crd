import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSKeyHandleV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesKMSKeyHandleV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kms.cnrm.cloud.google.com/v1alpha1", kind: "KMSKeyHandle", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesKMSKeyHandleV1alpha1Config extends ManifestConfig {
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
      /** @description Location name to create KeyHandle */
      location?: string;
      /** @description Project hosting KMSKeyHandle */
      projectRef?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The KMS Key Handle ID used for resource creation or acquisition. For creation: If specified, this value is used as the key handle ID. If not provided, a UUID will be generated and assigned as the key handle ID. For acquisition: This field must be provided to identify the key handle resource to acquire. */
      resourceID?: string;
      /** @description Indicates the resource type that the resulting [CryptoKey][] is meant to protect, e.g. `{SERVICE}.googleapis.com/{TYPE}`. See documentation for supported resource types https://cloud.google.com/kms/docs/autokey-overview#compatible-services. */
      resourceTypeSelector?: string;
    };
  };
}
