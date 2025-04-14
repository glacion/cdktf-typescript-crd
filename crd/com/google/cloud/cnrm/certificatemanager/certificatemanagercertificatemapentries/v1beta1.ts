import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerCertificateMapEntryV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerCertificateMapEntryV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1beta1",
        kind: "CertificateManagerCertificateMapEntry",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerCertificateMapEntryV1beta1Config extends ManifestConfig {
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
      certificatesRefs: ({
        /** @description Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificates/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerCertificate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description A human-readable description of the resource. */
      description?: string;
      /** @description Immutable. A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com)
       *     for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
       *     selecting a proper certificate. */
      hostname?: string;
      /** @description A map entry that is inputted into the certificate map. */
      mapRef: {
        /** @description Allowed value: The `name` field of a `CertificateManagerCertificateMap` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. A predefined matcher for particular cases, other than SNI selection. */
      matcher?: string;
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
