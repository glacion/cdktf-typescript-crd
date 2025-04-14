import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerCertificateMapV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerCertificateMapV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1alpha1",
        kind: "CertificateManagerCertificateMap",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerCertificateMapV1alpha1Config extends ManifestConfig {
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
      /** @description A human-readable description of the resource. */
      description?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
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
