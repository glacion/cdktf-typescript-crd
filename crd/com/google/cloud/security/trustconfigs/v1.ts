import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTrustConfigV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTrustConfigV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "security.cloud.google.com/v1", kind: "TrustConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesTrustConfigV1Config extends ManifestConfig {
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
      /** @description Configuration for trusting identities from a given SPIFFE trust domain.
       *
       *     If there are multiple entries for a given SPIFFE trust domain, the certificate
       *     issuance machinery in the cluster will reject the overall config as invalid.
       *      */
      trustStores?: {
        trustAnchors?: {
          /** @description Retrieve and trust the root certificates of this GCP Certificate Authority
           *     Service CA Pool.  A resource URI of the form
           *     //privateca.googleapis.com/projects/{project}/locations/{location}/caPools/{pool_name}
           *      */
          certificateAuthorityServiceURI?: string;
          /** @description Additional CA certificates to trust.
           *
           *     Each entry is a PEM-encoded certificate to use as a trust anchor.  Each
           *     entry should contain only one certificate; configurations with multiple
           *     certificates per entry will be rejected as invalid.
           *      */
          pemCertificate?: string;
          /** @description An HTTPS endpoint that returns a list of trusted CA certificates in SPIFFE
           *     trust bundle format [1].
           *
           *     [1] https://github.com/spiffe/spiffe/blob/master/standards/SPIFFE_Trust_Domain_and_Bundle.md#4-spiffe-bundle-format
           *      */
          spiffeTrustBundleEndpoint?: string;
        }[];
        /** @description The SPIFFE trust domain to which this trust anchor applies.
         *      */
        trustDomain: string;
      }[];
    };
  };
}
