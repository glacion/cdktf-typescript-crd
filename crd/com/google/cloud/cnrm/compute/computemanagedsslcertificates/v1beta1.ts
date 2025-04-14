import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeManagedSSLCertificateV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesComputeManagedSSLCertificateV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "compute.cnrm.cloud.google.com/v1beta1",
        kind: "ComputeManagedSSLCertificate",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesComputeManagedSSLCertificateV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. Properties relevant to a managed certificate.  These will be used if the
       *     certificate is managed (as indicated by a value of 'MANAGED' in 'type'). */
      managed?: {
        /** @description Immutable. Domains for which a managed SSL certificate will be valid.  Currently,
         *     there can be up to 100 domains in this list. */
        domains: string[];
      };
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
      /** @description Immutable. Enum field whose value is always 'MANAGED' - used to signal to the API
       *     which type this is. Default value: "MANAGED" Possible values: ["MANAGED"]. */
      type?: string;
    };
  };
}
