import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOrderV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesOrderV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesOrderV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "acme.cert-manager.io/v1";
    kind?: "Order";
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
    status?: {
      /** @description Authorizations contains data returned from the ACME server on what
       *     authorizations must be completed in order to validate the DNS names
       *     specified on the Order. */
      authorizations?: {
        /** @description Challenges specifies the challenge types offered by the ACME server.
         *     One of these challenge types will be selected when validating the DNS
         *     name and an appropriate Challenge resource will be created to perform
         *     the ACME challenge process. */
        challenges?: {
          /** @description Token is the token that must be presented for this challenge.
           *     This is used to compute the 'key' that must also be presented. */
          token: string;
          /** @description Type is the type of challenge being offered, e.g. 'http-01', 'dns-01',
           *     'tls-sni-01', etc.
           *     This is the raw value retrieved from the ACME server.
           *     Only 'http-01' and 'dns-01' are supported by cert-manager, other values
           *     will be ignored. */
          type: string;
          /** @description URL is the URL of this challenge. It can be used to retrieve additional
           *     metadata about the Challenge from the ACME server. */
          url: string;
        }[];
        /** @description Identifier is the DNS name to be validated as part of this authorization */
        identifier?: string;
        /**
         * @description InitialState is the initial state of the ACME authorization when first
         *     fetched from the ACME server.
         *     If an Authorization is already 'valid', the Order controller will not
         *     create a Challenge resource for the authorization. This will occur when
         *     working with an ACME server that enables 'authz reuse' (such as Let's
         *     Encrypt's production endpoint).
         *     If not set and 'identifier' is set, the state is assumed to be pending
         *     and a Challenge will be created.
         * @enum {string}
         */
        initialState?: "errored" | "expired" | "invalid" | "pending" | "processing" | "ready" | "valid";
        /** @description URL is the URL of the Authorization that must be completed */
        url: string;
        /** @description Wildcard will be true if this authorization is for a wildcard DNS name.
         *     If this is true, the identifier will be the *non-wildcard* version of
         *     the DNS name.
         *     For example, if '*.example.com' is the DNS name being validated, this
         *     field will be 'true' and the 'identifier' field will be 'example.com'. */
        wildcard?: boolean;
      }[];
      /**
       * Format: byte
       * @description Certificate is a copy of the PEM encoded certificate for this Order.
       *     This field will be populated after the order has been successfully
       *     finalized with the ACME server, and the order has transitioned to the
       *     'valid' state.
       */
      certificate?: string;
      /**
       * Format: date-time
       * @description FailureTime stores the time that this order failed.
       *     This is used to influence garbage collection and back-off.
       */
      failureTime?: string;
      /** @description FinalizeURL of the Order.
       *     This is used to obtain certificates for this order once it has been completed. */
      finalizeURL?: string;
      /** @description Reason optionally provides more information about a why the order is in
       *     the current state. */
      reason?: string;
      /** @description State contains the current state of this Order resource.
       *     States 'success' and 'expired' are 'final' */
      state?: string;
      /** @description URL of the Order.
       *     This will initially be empty when the resource is first created.
       *     The Order controller will populate this field when the Order is first processed.
       *     This field will be immutable after it is initially set. */
      url?: string;
    };
  };
}
