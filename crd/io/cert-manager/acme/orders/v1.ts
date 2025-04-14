import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOrderV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesOrderV1Config) {
    super(scope, id, { manifest: { apiVersion: "acme.cert-manager.io/v1", kind: "Order", ...manifest }, ...config });
  }
}
export interface KubernetesOrderV1Config extends ManifestConfig {
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
      /** @description CommonName is the common name as specified on the DER encoded CSR.
       *     If specified, this value must also be present in `dnsNames` or `ipAddresses`.
       *     This field must match the corresponding field on the DER encoded CSR. */
      commonName?: string;
      /** @description DNSNames is a list of DNS names that should be included as part of the Order
       *     validation process.
       *     This field must match the corresponding field on the DER encoded CSR. */
      dnsNames?: string[];
      /** @description Duration is the duration for the not after date for the requested certificate.
       *     this is set on order creation as pe the ACME spec. */
      duration?: string;
      /** @description IPAddresses is a list of IP addresses that should be included as part of the Order
       *     validation process.
       *     This field must match the corresponding field on the DER encoded CSR. */
      ipAddresses?: string[];
      /** @description IssuerRef references a properly configured ACME-type Issuer which should
       *     be used to create this Order.
       *     If the Issuer does not exist, processing will be retried.
       *     If the Issuer is not an 'ACME' Issuer, an error will be returned and the
       *     Order will be marked as failed. */
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
       * @description Certificate signing request bytes in DER encoding.
       *     This will be used when finalizing the order.
       *     This field must be set on the order.
       */
      request: string;
    };
  };
}
