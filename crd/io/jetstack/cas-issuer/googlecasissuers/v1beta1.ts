import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGoogleCASIssuerV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGoogleCASIssuerV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cas-issuer.jetstack.io/v1beta1", kind: "GoogleCASIssuer", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGoogleCASIssuerV1beta1Config extends ManifestConfig {
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
      /** @description CaPoolId is the id of the CA pool to issue certificates from */
      caPoolId?: string;
      /** @description CertificateAuthorityId is specific certificate authority to
       *     use to sign. Omit in order to load balance across all CAs
       *     in the pool */
      certificateAuthorityId?: string;
      /** @description CertificateTemplate is specific certificate template to
       *     use. Omit to not specify a template */
      certificateTemplate?: string;
      /** @description Credentials is a reference to a Kubernetes Secret Key that contains Google Service Account Credentials */
      credentials?: {
        /** @description The key of the entry in the Secret resource's `data` field to be used.
         *     Some instances of this field may be defaulted, in others it may be
         *     required. */
        key?: string;
        /** @description Name of the resource being referred to.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name: string;
      };
      /** @description Location is the Google Cloud Project Location */
      location?: string;
      /** @description Project is the Google Cloud Project ID */
      project?: string;
    };
  };
}
