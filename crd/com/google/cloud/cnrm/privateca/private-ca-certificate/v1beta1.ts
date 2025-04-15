import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPrivateCACertificateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPrivateCACertificateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPrivateCACertificateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "privateca.cnrm.cloud.google.com/v1beta1";
    kind: "PrivateCACertificate";
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
        /** @description The ca_pool for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. */
      certificateAuthorityRef?: {
        /** @description The certificate authority for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `PrivateCACertificateAuthority` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{ca_pool}}/certificateAuthorities/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. */
      certificateTemplateRef?: {
        /** @description Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/*\/locations/*\/certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.
         *
         *     Allowed value: The `selfLink` field of a `PrivateCACertificateTemplate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Immutable. A description of the certificate and key that does not require X.509 or ASN.1. */
      config?: {
        /** @description Immutable. Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR. */
        publicKey?: {
          /** @description Immutable. Required. The format of the public key. Possible values: KEY_FORMAT_UNSPECIFIED, PEM */
          format: string;
          /** @description Immutable. Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field. */
          key: string;
        };
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
          /** @description Immutable. Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. */
          aiaOcspServers?: string[];
          /** @description Immutable. Optional. Describes options in this X509Parameters that are relevant in a CA certificate. */
          caOptions?: {
            /** @description Immutable. Optional. When true, the "CA" in Basic Constraints extension will be set to true. */
            isCa?: boolean;
            /**
             * Format: int64
             * @description Immutable. Optional. Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
             */
            maxIssuerPathLength?: number;
            /** @description Immutable. Optional. When true, the "CA" in Basic Constraints extension will be set to false. If both `is_ca` and `non_ca` are unset, the extension will be omitted from the CA certificate. */
            nonCa?: boolean;
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
      /** @description Immutable. Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain. */
      lifetime: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. Immutable. A pem-encoded X.509 certificate signing request (CSR). */
      pemCsr?: string;
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
      /** @description Immutable. Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used. Possible values: SUBJECT_REQUEST_MODE_UNSPECIFIED, DEFAULT, REFLECTED_SPIFFE */
      subjectMode?: string;
    };
    status?: {
      /** @description Output only. A structured description of the issued X.509 certificate. */
      certificateDescription?: {
        /** @description Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate. */
        aiaIssuingCertificateUrls?: string[];
        /** @description Identifies the subject_key_id of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1 */
        authorityKeyId?: {
          /** @description Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
          keyId?: string;
        };
        /** @description The hash of the x.509 certificate. */
        certFingerprint?: {
          /** @description The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate. */
          sha256Hash?: string;
        };
        /** @description Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13 */
        crlDistributionPoints?: string[];
        /** @description The public key that corresponds to an issued certificate. */
        publicKey?: {
          /** @description Required. The format of the public key. Possible values: KEY_FORMAT_UNSPECIFIED, PEM */
          format?: string;
          /** @description Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field. */
          key?: string;
        };
        /** @description Describes some of the values in a certificate that are related to the subject and lifetime. */
        subjectDescription?: {
          /** @description The serial number encoded in lowercase hexadecimal. */
          hexSerialNumber?: string;
          /** @description For convenience, the actual lifetime of an issued certificate. */
          lifetime?: string;
          /**
           * Format: date-time
           * @description The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second.
           */
          notAfterTime?: string;
          /**
           * Format: date-time
           * @description The time at which the certificate becomes valid.
           */
          notBeforeTime?: string;
          /** @description Contains distinguished name fields such as the common name, location and / organization. */
          subject?: {
            /** @description The "common name" of the subject. */
            commonName?: string;
            /** @description The country code of the subject. */
            countryCode?: string;
            /** @description The locality or city of the subject. */
            locality?: string;
            /** @description The organization of the subject. */
            organization?: string;
            /** @description The organizational_unit of the subject. */
            organizationalUnit?: string;
            /** @description The postal code of the subject. */
            postalCode?: string;
            /** @description The province, territory, or regional state of the subject. */
            province?: string;
            /** @description The street address of the subject. */
            streetAddress?: string;
          };
          /** @description The subject alternative name fields. */
          subjectAltName?: {
            /** @description Contains additional subject alternative name values. */
            customSans?: {
              /** @description Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
              critical?: boolean;
              /** @description Required. The OID for this X.509 extension. */
              objectId?: {
                /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
                objectIdPath?: number[];
              };
              /** @description Required. The value of this X.509 extension. */
              value?: string;
            }[];
            /** @description Contains only valid, fully-qualified host names. */
            dnsNames?: string[];
            /** @description Contains only valid RFC 2822 E-mail addresses. */
            emailAddresses?: string[];
            /** @description Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. */
            ipAddresses?: string[];
            /** @description Contains only valid RFC 3986 URIs. */
            uris?: string[];
          };
        };
        /** @description Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2. */
        subjectKeyId?: {
          /** @description Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
          keyId?: string;
        };
        /** @description Describes some of the technical X.509 fields in a certificate. */
        x509Description?: {
          /** @description Optional. Describes custom X.509 extensions. */
          additionalExtensions?: {
            /** @description Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
            critical?: boolean;
            /** @description Required. The OID for this X.509 extension. */
            objectId?: {
              /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
              objectIdPath?: number[];
            };
            /** @description Required. The value of this X.509 extension. */
            value?: string;
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
              objectIdPath?: number[];
            }[];
          };
          /** @description Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. */
          policyIds?: {
            /** @description Required. The parts of an OID path. The most significant parts of the path come first. */
            objectIdPath?: number[];
          }[];
        };
      };
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
      /**
       * Format: date-time
       * @description Output only. The time at which this Certificate was created.
       */
      createTime?: string;
      /** @description Output only. The resource name of the issuing CertificateAuthority in the format `projects/*\/locations/*\/caPools/*\/certificateAuthorities/*`. */
      issuerCertificateAuthority?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. The pem-encoded, signed X.509 certificate. */
      pemCertificate?: string;
      /** @description Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. */
      pemCertificateChain?: string[];
      /** @description Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present. */
      revocationDetails?: {
        /** @description Indicates why a Certificate was revoked. Possible values: REVOCATION_REASON_UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, PRIVILEGE_WITHDRAWN, ATTRIBUTE_AUTHORITY_COMPROMISE */
        revocationState?: string;
        /**
         * Format: date-time
         * @description The time at which this Certificate was revoked.
         */
        revocationTime?: string;
      };
      /**
       * Format: date-time
       * @description Output only. The time at which this Certificate was updated.
       */
      updateTime?: string;
    };
  };
}
