import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerDNSAuthorizationV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerDNSAuthorizationV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1alpha1",
        kind: "CertificateManagerDNSAuthorization",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerDNSAuthorizationV1alpha1Config extends ManifestConfig {
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
      /** @description Immutable. A domain which is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for "example.com" can be used to issue certificates for "example.com" and "*.example.com". */
      domain: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
