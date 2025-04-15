import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTrustConfigV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesTrustConfigV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesTrustConfigV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "security.cloud.google.com/v1alpha1";
    kind: "TrustConfig";
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
    status?: {
      conditions?: {
        /** @description The time at which this condition last changed status, in the format "2021-01-29T01:13:35Z".
         *      */
        lastTransitionTime?: string;
        /** @description Human-readable description of the condition's last transition.
         *      */
        message?: string;
        /** @description If set, this represents the .metadata.generation that the condition was set
         *     based upon.
         *
         *     For instance, if .metadata.generation is currently 12, but the
         *     .status.condition[x].observedGeneration is 9, the condition is out of date
         *     with respect to the current state of the instance.
         *      */
        observedGeneration?: number;
        /** @description Machine-readable description of the condition's last transition.
         *      */
        reason?: string;
        /** @description Is the condition true or false?
         *
         *     One of "True", "False", or "Unknown".
         *      */
        status?: string;
        /** @description Known values:
         *
         *     * "Ready": The certificate issuance machinery has validated and rendered
         *       this TrustConfig; if the Ready condition is set to status=True with an
         *       observedGeneration equal to the current .metadata.generation of the
         *       TrustConfig, the rendered trust anchors will be published to pods.
         *
         *       If the Ready condition is set to status=False, check the reason and
         *       message fields for an explanation of why the controller rejected your
         *       configuration.
         *      */
        type?: string;
      }[];
      /** @description Holds the actual set of trust anchor certificates for each trust domain.
       *
       *     Updated by the controller based on .spec.trustStores --- the node agent does not
       *     necessarily have the connectivity or access necessary to retrieve certificates
       *     from external systems.
       *      */
      renderedTrustStores?: {
        trustAnchors?: {
          pemCertificates?: string[];
        }[];
        trustDomain: string;
      }[];
    };
  };
}
