import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadCertificateConfigV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesWorkloadCertificateConfigV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: { apiVersion: "security.cloud.google.com/v1alpha1", kind: "WorkloadCertificateConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesWorkloadCertificateConfigV1alpha1Config extends ManifestConfig {
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
      /** @description Controls which CA workload certificates are issued against.
       *
       *     One and only one sub-object should be specified.
       *      */
      certificateAuthorityConfig: {
        /** @description Issue certificates from a GCP Certificate Authority Service CA Pool.
         *      */
        certificateAuthorityServiceConfig?: {
          /** @description GCP Certificate Authority Service CA Pool URI of the form
           *     //privateca.googleapis.com/projects/{project}/locations/{location}/caPools/{pool_name}
           *      */
          endpointURI?: string;
        };
        meshCAConfig?: Record<string, never>;
      } & (unknown | unknown);
      /** @description The key algorithm to use when generating key-pairs for workload certificates.
       *      */
      keyAlgorithm?: {
        ecdsa?: {
          /** @description The name of the ECDSA curve to use.
           *
           *     The certificate issuance machinery in the cluster is only guaranteed to
           *     accept the values "P256" and "P384".
           *      */
          curve: string;
        };
        rsa?: {
          /** @description The number of bits to use in the workload's RSA key modulus.
           *
           *     The certificate issuance machinery in the cluster may enforce a range of
           *     allowed values.
           *      */
          modulusSize: number;
        };
      } & (unknown | unknown);
      /** @description Start trying to renew certificates when this much percentage of certificate validity duration
       *     is remaining.
       *
       *     Certificate issuers default to 50 percent (12 hours) if this value is not specified.
       *
       *     Must be between 0 and 100. Certificate issuance implementations may enforce a narrower range.
       *      */
      rotationWindowPercentage?: number;
      trustDomain: string;
      /** @description Length of time (in seconds) that issued certificates should be valid for.
       *
       *     Certificate issuers default to 86400 (24 hours) if this value is not specified.
       *     Certificate issuance implementations may enforce minimum and maximum bounds on
       *     this value.
       *      */
      validityDurationSeconds?: number;
    };
  };
}
