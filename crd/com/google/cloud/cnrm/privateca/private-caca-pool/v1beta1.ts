import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPrivateCACAPoolV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPrivateCACAPoolV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPrivateCACAPoolV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "privateca.cnrm.cloud.google.com/v1beta1";
    kind?: "PrivateCACAPool";
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
      /** @description Optional. The IssuancePolicy to control how Certificates will be issued from this CaPool. */
      issuancePolicy?: {
        /** @description Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates. */
        allowedIssuanceModes?: {
          /** @description Optional. When true, allows callers to create Certificates by specifying a CertificateConfig. */
          allowConfigBasedIssuance?: boolean;
          /** @description Optional. When true, allows callers to create Certificates by specifying a CSR. */
          allowCsrBasedIssuance?: boolean;
        };
        /** @description Optional. If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here. Otherwise, any key may be used. */
        allowedKeyTypes?: {
          /** @description Represents an allowed Elliptic Curve key type. */
          ellipticCurve?: {
            /** @description Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. Possible values: EC_SIGNATURE_ALGORITHM_UNSPECIFIED, ECDSA_P256, ECDSA_P384, EDDSA_25519 */
            signatureAlgorithm?: string;
          };
          /** @description Represents an allowed RSA key type. */
          rsa?: {
            /**
             * Format: int64
             * @description Optional. The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes.
             */
            maxModulusSize?: number;
            /**
             * Format: int64
             * @description Optional. The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply.
             */
            minModulusSize?: number;
          };
        }[];
        /** @description Optional. A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate request uses a CertificateTemplate that defines conflicting predefined_values for the same properties, the certificate issuance request will fail. */
        baselineValues?: {
          /** @description Optional. Describes custom X.509 extensions. */
          additionalExtensions?: {
            /** @description Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
            critical?: boolean;
            /** @description Required. The OID for this X.509 extension. */
            objectId: {
              /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
              objectIdPath: number[];
            };
            /** @description Required. The value of this X.509 extension. */
            value: string;
          }[];
          /** @description Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. */
          aiaOcspServers?: string[];
          /** @description Optional. Describes options in this X509Parameters that are relevant in a CA certificate. */
          caOptions?: {
            /** @description Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate. */
            isCa?: boolean;
            /**
             * Format: int64
             * @description Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
             */
            maxIssuerPathLength?: number;
            /** @description Optional. When true, the "path length constraint" in Basic Constraints extension will be set to 0. if both max_issuer_path_length and zero_max_issuer_path_length are unset, the max path length will be omitted from the CA certificate. */
            zeroMaxIssuerPathLength?: boolean;
          };
          /** @description Optional. Indicates the intended use for keys that correspond to a certificate. */
          keyUsage?: {
            /** @description Describes high-level ways in which a key may be used. */
            baseKeyUsage?: {
              /** @description The key may be used to sign certificates. */
              certSign?: boolean;
              /** @description The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". */
              contentCommitment?: boolean;
              /** @description The key may be used sign certificate revocation lists. */
              crlSign?: boolean;
              /** @description The key may be used to encipher data. */
              dataEncipherment?: boolean;
              /** @description The key may be used to decipher only. */
              decipherOnly?: boolean;
              /** @description The key may be used for digital signatures. */
              digitalSignature?: boolean;
              /** @description The key may be used to encipher only. */
              encipherOnly?: boolean;
              /** @description The key may be used in a key agreement protocol. */
              keyAgreement?: boolean;
              /** @description The key may be used to encipher other keys. */
              keyEncipherment?: boolean;
            };
            /** @description Detailed scenarios in which a key may be used. */
            extendedKeyUsage?: {
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. */
              clientAuth?: boolean;
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". */
              codeSigning?: boolean;
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". */
              emailProtection?: boolean;
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". */
              ocspSigning?: boolean;
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. */
              serverAuth?: boolean;
              /** @description Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". */
              timeStamping?: boolean;
            };
            /** @description Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message. */
            unknownExtendedKeyUsages?: {
              /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
              objectIdPath: number[];
            }[];
          };
          /** @description Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. */
          policyIds?: {
            /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
            objectIdPath: number[];
          }[];
        };
        /** @description Optional. Describes constraints on identities that may appear in Certificates issued through this CaPool. If this is omitted, then this CaPool will not add restrictions on a certificate's identity. */
        identityConstraints?: {
          /** @description Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded. */
          allowSubjectAltNamesPassthrough: boolean;
          /** @description Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded. */
          allowSubjectPassthrough: boolean;
          /** @description Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel */
          celExpression?: {
            /** @description Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
            description?: string;
            /** @description Textual representation of an expression in Common Expression Language syntax. */
            expression?: string;
            /** @description Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
            location?: string;
            /** @description Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
            title?: string;
          };
        };
        /** @description Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
        maximumLifetime?: string;
        /** @description Optional. Describes the set of X.509 extensions that may appear in a Certificate issued through this CaPool. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If a certificate request uses a CertificateTemplate with predefined_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this CaPool will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CaPool's baseline_values. */
        passthroughExtensions?: {
          /** @description Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions. */
          additionalExtensions?: {
            /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
            objectIdPath: number[];
          }[];
          /** @description Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions. */
          knownExtensions?: string[];
        };
      };
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool. */
      publishingOptions?: {
        /** @description Optional. When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. */
        publishCaCert?: boolean;
        /** @description Optional. When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. */
        publishCrl?: boolean;
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Required. Immutable. The Tier of this CaPool. Possible values: TIER_UNSPECIFIED, ENTERPRISE, DEVOPS */
      tier: string;
    };
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
