import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateRequestV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCertificateRequestV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cert-manager.io/v1", kind: "CertificateRequest", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCertificateRequestV1Config extends ManifestConfig {
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
  };
}
