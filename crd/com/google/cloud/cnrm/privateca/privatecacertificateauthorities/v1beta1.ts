import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPrivateCACertificateAuthorityV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesPrivateCACertificateAuthorityV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "privateca.cnrm.cloud.google.com/v1beta1",
        kind: "PrivateCACertificateAuthority",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesPrivateCACertificateAuthorityV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. */
      caPoolRef: {
        /** @description The caPool for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Required. Immutable. The config used to create a self-signed X.509 certificate or CSR. */
      config: {
        /** @description Immutable. Required. Specifies some of the values in a certificate that are related to the subject. */
        subjectConfig: {
          /** @description Immutable. Required. Contains distinguished name fields such as the common name, location and organization. */
          subject: {
            /** @description Immutable. The "common name" of the subject. */
            commonName?: string;
            /** @description Immutable. The country code of the subject. */
            countryCode?: string;
            /** @description Immutable. The locality or city of the subject. */
            locality?: string;
            /** @description Immutable. The organization of the subject. */
            organization?: string;
            /** @description Immutable. The organizational_unit of the subject. */
            organizationalUnit?: string;
            /** @description Immutable. The postal code of the subject. */
            postalCode?: string;
            /** @description Immutable. The province, territory, or regional state of the subject. */
            province?: string;
            /** @description Immutable. The street address of the subject. */
            streetAddress?: string;
          };
          /** @description Immutable. Optional. The subject alternative name fields. */
          subjectAltName?: {
            /** @description Immutable. Contains additional subject alternative name values. */
            customSans?: {
              /** @description Immutable. Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
              critical?: boolean;
              /** @description Immutable. Required. The OID for this X.509 extension. */
              objectId: {
                /** @description Immutable. Required. The parts of an OID path. The most significant parts of the path come first. */
                objectIdPath: number[];
              };
              /** @description Immutable. Required. The value of this X.509 extension. */
              value: string;
            }[];
            /** @description Immutable. Contains only valid, fully-qualified host names. */
            dnsNames?: string[];
            /** @description Immutable. Contains only valid RFC 2822 E-mail addresses. */
            emailAddresses?: string[];
            /** @description Immutable. Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. */
            ipAddresses?: string[];
            /** @description Immutable. Contains only valid RFC 3986 URIs. */
            uris?: string[];
          };
        };
        /** @description Immutable. Required. Describes how some of the technical X.509 fields in a certificate should be populated. */
        x509Config: {
          /** @description Immutable. Optional. Describes custom X.509 extensions. */
          additionalExtensions?: {
            /** @description Immutable. Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
            critical?: boolean;
            /** @description Immutable. Required. The OID for this X.509 extension. */
            objectId: {
              /** @description Immutable. Required. The parts of an OID path. The most significant parts of the path come first. */
              objectIdPath: number[];
            };
            /** @description Immutable. Required. The value of this X.509 extension. */
            value: string;
          }[];
          /** @description Immutable. Optional. Describes options in this X509Parameters that are relevant in a CA certificate. */
          caOptions?: {
            /** @description Immutable. Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate. */
            isCa?: boolean;
            /**
             * Format: int64
             * @description Immutable. Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
             */
            maxIssuerPathLength?: number;
            /** @description Immutable. Optional. When true, the "path length constraint" in Basic Constraints extension will be set to 0. if both max_issuer_path_length and zero_max_issuer_path_length are unset, the max path length will be omitted from the CA certificate. */
            zeroMaxIssuerPathLength?: boolean;
          };
          /** @description Immutable. Optional. Indicates the intended use for keys that correspond to a certificate. */
          keyUsage?: {
            /** @description Immutable. Describes high-level ways in which a key may be used. */
            baseKeyUsage?: {
              /** @description Immutable. The key may be used to sign certificates. */
              certSign?: boolean;
              /** @description Immutable. The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". */
              contentCommitment?: boolean;
              /** @description Immutable. The key may be used sign certificate revocation lists. */
              crlSign?: boolean;
              /** @description Immutable. The key may be used to encipher data. */
              dataEncipherment?: boolean;
              /** @description Immutable. The key may be used to decipher only. */
              decipherOnly?: boolean;
              /** @description Immutable. The key may be used for digital signatures. */
              digitalSignature?: boolean;
              /** @description Immutable. The key may be used to encipher only. */
              encipherOnly?: boolean;
              /** @description Immutable. The key may be used in a key agreement protocol. */
              keyAgreement?: boolean;
              /** @description Immutable. The key may be used to encipher other keys. */
              keyEncipherment?: boolean;
            };
            /** @description Immutable. Detailed scenarios in which a key may be used. */
            extendedKeyUsage?: {
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. */
              clientAuth?: boolean;
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". */
              codeSigning?: boolean;
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". */
              emailProtection?: boolean;
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". */
              ocspSigning?: boolean;
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. */
              serverAuth?: boolean;
              /** @description Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". */
              timeStamping?: boolean;
            };
            /** @description Immutable. Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message. */
            unknownExtendedKeyUsages?: {
              /** @description Immutable. Required. The parts of an OID path. The most significant parts of the path come first. */
              objectIdPath: number[];
            }[];
          };
          /** @description Immutable. Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. */
          policyIds?: {
            /** @description Immutable. Required. The parts of an OID path. The most significant parts of the path come first. */
            objectIdPath: number[];
          }[];
        };
      };
      /** @description Immutable. */
      gcsBucketRef?: {
        /** @description Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
         *
         *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR. */
      keySpec: {
        /** @description Immutable. The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`. Possible values: RSA_PSS_2048_SHA256, RSA_PSS_3072_SHA256, RSA_PSS_4096_SHA256, RSA_PKCS1_2048_SHA256, RSA_PKCS1_3072_SHA256, RSA_PKCS1_4096_SHA256, EC_P256_SHA256, EC_P384_SHA384 */
        algorithm?: string;
        /** @description Immutable. */
        cloudKmsKeyVersionRef?: {
          /** @description The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties. */
          external?: string;
          /** @description [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
           *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Required. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. */
      lifetime: string;
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
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Required. Immutable. The Type of this CertificateAuthority. Possible values: SELF_SIGNED, SUBORDINATE */
      type: string;
    };
  };
}
