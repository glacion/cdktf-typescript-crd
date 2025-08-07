import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CertManagerIoCertificateRequestV1 extends Manifest {
  constructor(scope: Construct, id: string, config: CertManagerIoCertificateRequestV1Config) {
    super(scope, id, config);
  }
}
export interface CertManagerIoCertificateRequestV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "cert-manager.io/v1";
    kind: "CertificateRequest";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    /** @description Specification of the desired state of the CertificateRequest resource.
     *     https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
    spec?: {
      /** @description Requested 'duration' (i.e. lifetime) of the Certificate. Note that the
       *     issuer may choose to ignore the requested duration, just like any other
       *     requested attribute. */
      duration?: string;
      /** @description Extra contains extra attributes of the user that created the CertificateRequest.
       *     Populated by the cert-manager webhook on creation and immutable. */
      extra?: {
        [key: string]: string[];
      };
      /** @description Groups contains group membership of the user that created the CertificateRequest.
       *     Populated by the cert-manager webhook on creation and immutable. */
      groups?: string[];
      /** @description Requested basic constraints isCA value. Note that the issuer may choose
       *     to ignore the requested isCA value, just like any other requested attribute.
       *
       *     NOTE: If the CSR in the `Request` field has a BasicConstraints extension,
       *     it must have the same isCA value as specified here.
       *
       *     If true, this will automatically add the `cert sign` usage to the list
       *     of requested `usages`. */
      isCA?: boolean;
      /** @description Reference to the issuer responsible for issuing the certificate.
       *     If the issuer is namespace-scoped, it must be in the same namespace
       *     as the Certificate. If the issuer is cluster-scoped, it can be used
       *     from any namespace.
       *
       *     The `name` field of the reference must always be specified. */
      issuerRef: {
        /** @description Group of the resource being referred to. */
        group?: string;
        /** @description Kind of the resource being referred to. */
        kind?: string;
        /** @description Name of the resource being referred to. */
        name: string;
      };
      /**
       * Format: byte
       * @description The PEM-encoded X.509 certificate signing request to be submitted to the
       *     issuer for signing.
       *
       *     If the CSR has a BasicConstraints extension, its isCA attribute must
       *     match the `isCA` value of this CertificateRequest.
       *     If the CSR has a KeyUsage extension, its key usages must match the
       *     key usages in the `usages` field of this CertificateRequest.
       *     If the CSR has a ExtKeyUsage extension, its extended key usages
       *     must match the extended key usages in the `usages` field of this
       *     CertificateRequest.
       */
      request: string;
      /** @description UID contains the uid of the user that created the CertificateRequest.
       *     Populated by the cert-manager webhook on creation and immutable. */
      uid?: string;
      /** @description Requested key usages and extended key usages.
       *
       *     NOTE: If the CSR in the `Request` field has uses the KeyUsage or
       *     ExtKeyUsage extension, these extensions must have the same values
       *     as specified here without any additional values.
       *
       *     If unset, defaults to `digital signature` and `key encipherment`. */
      usages?: (
        | "any"
        | "cert sign"
        | "client auth"
        | "code signing"
        | "content commitment"
        | "crl sign"
        | "data encipherment"
        | "decipher only"
        | "digital signature"
        | "email protection"
        | "encipher only"
        | "ipsec end system"
        | "ipsec tunnel"
        | "ipsec user"
        | "key agreement"
        | "key encipherment"
        | "microsoft sgc"
        | "netscape sgc"
        | "ocsp signing"
        | "s/mime"
        | "server auth"
        | "signing"
        | "timestamping"
      )[];
      /** @description Username contains the name of the user that created the CertificateRequest.
       *     Populated by the cert-manager webhook on creation and immutable. */
      username?: string;
    };
    /** @description Status of the CertificateRequest.
     *     This is set and managed automatically.
     *     Read-only.
     *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
    status?: {
      /**
       * Format: byte
       * @description The PEM encoded X.509 certificate of the signer, also known as the CA
       *     (Certificate Authority).
       *     This is set on a best-effort basis by different issuers.
       *     If not set, the CA is assumed to be unknown/not available.
       */
      ca?: string;
      /**
       * Format: byte
       * @description The PEM encoded X.509 certificate resulting from the certificate
       *     signing request.
       *     If not set, the CertificateRequest has either not been completed or has
       *     failed. More information on failure can be found by checking the
       *     `conditions` field.
       */
      certificate?: string;
      /** @description List of status conditions to indicate the status of a CertificateRequest.
       *     Known condition types are `Ready`, `InvalidRequest`, `Approved` and `Denied`. */
      conditions?: {
        /**
         * Format: date-time
         * @description LastTransitionTime is the timestamp corresponding to the last status
         *     change of this condition.
         */
        lastTransitionTime?: string;
        /** @description Message is a human readable description of the details of the last
         *     transition, complementing reason. */
        message?: string;
        /** @description Reason is a brief machine readable explanation for the condition's last
         *     transition. */
        reason?: string;
        /**
         * @description Status of the condition, one of (`True`, `False`, `Unknown`).
         * @enum {string}
         */
        status: "False" | "True" | "Unknown";
        /** @description Type of the condition, known values are (`Ready`, `InvalidRequest`,
         *     `Approved`, `Denied`). */
        type: string;
      }[];
      /**
       * Format: date-time
       * @description FailureTime stores the time that this CertificateRequest failed. This is
       *     used to influence garbage collection and back-off.
       */
      failureTime?: string;
    };
  };
}
