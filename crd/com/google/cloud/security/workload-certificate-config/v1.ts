import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadCertificateConfigV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkloadCertificateConfigV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkloadCertificateConfigV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "security.cloud.google.com/v1";
    kind: "WorkloadCertificateConfig";
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
          /** @description List of fallback Certificate Authority Service CA Pool URIs, each URI of the form
           *     //privateca.googleapis.com/projects/{project}/locations/{location}/caPools/{pool_name}
           *      */
          fallbackURIs?: string[];
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
      /** @description Length of time (in seconds) that issued certificates should be valid for.
       *
       *     Certificate issuers default to 86400 (24 hours) if this value is not specified.
       *     Certificate issuance implementations may enforce minimum and maximum bounds on
       *     this value.
       *      */
      validityDurationSeconds?: number;
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
         *       this WorkloadCertificateConfig; if the Ready condition is set to
         *       status=True with an observedGeneration equal to the current
         *       .metadata.generation of the WorkloadCertificateConfig, it can be used for
         *       issuing certificates.
         *
         *       If the Ready condition is set to status=False, check the reason and
         *       message fields for an explanation of why the controller rejected your
         *       configuration.
         *      */
        type?: string;
      }[];
    };
  };
}
