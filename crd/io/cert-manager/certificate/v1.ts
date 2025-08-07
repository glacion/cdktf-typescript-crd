import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CertManagerIoCertificateV1 extends Manifest {
  constructor(scope: Construct, id: string, config: CertManagerIoCertificateV1Config) {
    super(scope, id, config);
  }
}
export interface CertManagerIoCertificateV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "cert-manager.io/v1";
    kind: "Certificate";
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
    /** @description Specification of the desired state of the Certificate resource.
     *     https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
    spec?: {
      /** @description Defines extra output formats of the private key and signed certificate chain
       *     to be written to this Certificate's target Secret.
       *
       *     This is a Beta Feature enabled by default. It can be disabled with the
       *     `--feature-gates=AdditionalCertificateOutputFormats=false` option set on both
       *     the controller and webhook components. */
      additionalOutputFormats?: {
        /**
         * @description Type is the name of the format type that should be written to the
         *     Certificate's target Secret.
         * @enum {string}
         */
        type: "CombinedPEM" | "DER";
      }[];
      /** @description Requested common name X509 certificate subject attribute.
       *     More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6
       *     NOTE: TLS clients will ignore this value when any subject alternative name is
       *     set (see https://tools.ietf.org/html/rfc6125#section-6.4.4).
       *
       *     Should have a length of 64 characters or fewer to avoid generating invalid CSRs.
       *     Cannot be set if the `literalSubject` field is set. */
      commonName?: string;
      /** @description Requested DNS subject alternative names. */
      dnsNames?: string[];
      /** @description Requested 'duration' (i.e. lifetime) of the Certificate. Note that the
       *     issuer may choose to ignore the requested duration, just like any other
       *     requested attribute.
       *
       *     If unset, this defaults to 90 days.
       *     Minimum accepted duration is 1 hour.
       *     Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration. */
      duration?: string;
      /** @description Requested email subject alternative names. */
      emailAddresses?: string[];
      /** @description Whether the KeyUsage and ExtKeyUsage extensions should be set in the encoded CSR.
       *
       *     This option defaults to true, and should only be disabled if the target
       *     issuer does not support CSRs with these X509 KeyUsage/ ExtKeyUsage extensions. */
      encodeUsagesInRequest?: boolean;
      /** @description Requested IP address subject alternative names. */
      ipAddresses?: string[];
      /** @description Requested basic constraints isCA value.
       *     The isCA value is used to set the `isCA` field on the created CertificateRequest
       *     resources. Note that the issuer may choose to ignore the requested isCA value, just
       *     like any other requested attribute.
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
      /** @description Additional keystore output formats to be stored in the Certificate's Secret. */
      keystores?: {
        /** @description JKS configures options for storing a JKS keystore in the
         *     `spec.secretName` Secret resource. */
        jks?: {
          /** @description Alias specifies the alias of the key in the keystore, required by the JKS format.
           *     If not provided, the default alias `certificate` will be used. */
          alias?: string;
          /** @description Create enables JKS keystore creation for the Certificate.
           *     If true, a file named `keystore.jks` will be created in the target
           *     Secret resource, encrypted using the password stored in
           *     `passwordSecretRef`.
           *     The keystore file will be updated immediately.
           *     If the issuer provided a CA certificate, a file named `truststore.jks`
           *     will also be created in the target Secret resource, encrypted using the
           *     password stored in `passwordSecretRef`
           *     containing the issuing Certificate Authority */
          create: boolean;
          /** @description PasswordSecretRef is a reference to a key in a Secret resource
           *     containing the password used to encrypt the JKS keystore. */
          passwordSecretRef: {
            /** @description The key of the entry in the Secret resource's `data` field to be used.
             *     Some instances of this field may be defaulted, in others it may be
             *     required. */
            key?: string;
            /** @description Name of the resource being referred to.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name: string;
          };
        };
        /** @description PKCS12 configures options for storing a PKCS12 keystore in the
         *     `spec.secretName` Secret resource. */
        pkcs12?: {
          /** @description Create enables PKCS12 keystore creation for the Certificate.
           *     If true, a file named `keystore.p12` will be created in the target
           *     Secret resource, encrypted using the password stored in
           *     `passwordSecretRef`.
           *     The keystore file will be updated immediately.
           *     If the issuer provided a CA certificate, a file named `truststore.p12` will
           *     also be created in the target Secret resource, encrypted using the
           *     password stored in `passwordSecretRef` containing the issuing Certificate
           *     Authority */
          create: boolean;
          /** @description PasswordSecretRef is a reference to a key in a Secret resource
           *     containing the password used to encrypt the PKCS12 keystore. */
          passwordSecretRef: {
            /** @description The key of the entry in the Secret resource's `data` field to be used.
             *     Some instances of this field may be defaulted, in others it may be
             *     required. */
            key?: string;
            /** @description Name of the resource being referred to.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name: string;
          };
          /** @description Profile specifies the key and certificate encryption algorithms and the HMAC algorithm
           *     used to create the PKCS12 keystore. Default value is `LegacyRC2` for backward compatibility.
           *
           *     If provided, allowed values are:
           *     `LegacyRC2`: Deprecated. Not supported by default in OpenSSL 3 or Java 20.
           *     `LegacyDES`: Less secure algorithm. Use this option for maximal compatibility.
           *     `Modern2023`: Secure algorithm. Use this option in case you have to always use secure algorithms
           *     (eg. because of company policy). Please note that the security of the algorithm is not that important
           *     in reality, because the unencrypted certificate and private key are also stored in the Secret. */
          profile?: string;
        };
      };
      /** @description Requested X.509 certificate subject, represented using the LDAP "String
       *     Representation of a Distinguished Name" [1].
       *     Important: the LDAP string format also specifies the order of the attributes
       *     in the subject, this is important when issuing certs for LDAP authentication.
       *     Example: `CN=foo,DC=corp,DC=example,DC=com`
       *     More info [1]: https://datatracker.ietf.org/doc/html/rfc4514
       *     More info: https://github.com/cert-manager/cert-manager/issues/3203
       *     More info: https://github.com/cert-manager/cert-manager/issues/4424
       *
       *     Cannot be set if the `subject` or `commonName` field is set. */
      literalSubject?: string;
      /** @description x.509 certificate NameConstraint extension which MUST NOT be used in a non-CA certificate.
       *     More Info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.10
       *
       *     This is an Alpha Feature and is only enabled with the
       *     `--feature-gates=NameConstraints=true` option set on both
       *     the controller and webhook components. */
      nameConstraints?: {
        /** @description if true then the name constraints are marked critical. */
        critical?: boolean;
        /** @description Excluded contains the constraints which must be disallowed. Any name matching a
         *     restriction in the excluded field is invalid regardless
         *     of information appearing in the permitted */
        excluded?: {
          /** @description DNSDomains is a list of DNS domains that are permitted or excluded. */
          dnsDomains?: string[];
          /** @description EmailAddresses is a list of Email Addresses that are permitted or excluded. */
          emailAddresses?: string[];
          /** @description IPRanges is a list of IP Ranges that are permitted or excluded.
           *     This should be a valid CIDR notation. */
          ipRanges?: string[];
          /** @description URIDomains is a list of URI domains that are permitted or excluded. */
          uriDomains?: string[];
        };
        /** @description Permitted contains the constraints in which the names must be located. */
        permitted?: {
          /** @description DNSDomains is a list of DNS domains that are permitted or excluded. */
          dnsDomains?: string[];
          /** @description EmailAddresses is a list of Email Addresses that are permitted or excluded. */
          emailAddresses?: string[];
          /** @description IPRanges is a list of IP Ranges that are permitted or excluded.
           *     This should be a valid CIDR notation. */
          ipRanges?: string[];
          /** @description URIDomains is a list of URI domains that are permitted or excluded. */
          uriDomains?: string[];
        };
      };
      /** @description `otherNames` is an escape hatch for SAN that allows any type. We currently restrict the support to string like otherNames, cf RFC 5280 p 37
       *     Any UTF8 String valued otherName can be passed with by setting the keys oid: x.x.x.x and UTF8Value: somevalue for `otherName`.
       *     Most commonly this would be UPN set with oid: 1.3.6.1.4.1.311.20.2.3
       *     You should ensure that any OID passed is valid for the UTF8String type as we do not explicitly validate this. */
      otherNames?: {
        /** @description OID is the object identifier for the otherName SAN.
         *     The object identifier must be expressed as a dotted string, for
         *     example, "1.2.840.113556.1.4.221". */
        oid?: string;
        /** @description utf8Value is the string value of the otherName SAN.
         *     The utf8Value accepts any valid UTF8 string to set as value for the otherName SAN. */
        utf8Value?: string;
      }[];
      /** @description Private key options. These include the key algorithm and size, the used
       *     encoding and the rotation policy. */
      privateKey?: {
        /** @description Algorithm is the private key algorithm of the corresponding private key
         *     for this certificate.
         *
         *     If provided, allowed values are either `RSA`, `ECDSA` or `Ed25519`.
         *     If `algorithm` is specified and `size` is not provided,
         *     key size of 2048 will be used for `RSA` key algorithm and
         *     key size of 256 will be used for `ECDSA` key algorithm.
         *     key size is ignored when using the `Ed25519` key algorithm. */
        algorithm?: string;
        /** @description The private key cryptography standards (PKCS) encoding for this
         *     certificate's private key to be encoded in.
         *
         *     If provided, allowed values are `PKCS1` and `PKCS8` standing for PKCS#1
         *     and PKCS#8, respectively.
         *     Defaults to `PKCS1` if not specified. */
        encoding?: string;
        /** @description RotationPolicy controls how private keys should be regenerated when a
         *     re-issuance is being processed.
         *
         *     If set to `Never`, a private key will only be generated if one does not
         *     already exist in the target `spec.secretName`. If one does exist but it
         *     does not have the correct algorithm or size, a warning will be raised
         *     to await user intervention.
         *     If set to `Always`, a private key matching the specified requirements
         *     will be generated whenever a re-issuance occurs.
         *     Default is `Never` for backward compatibility. */
        rotationPolicy?: string;
        /** @description Size is the key bit size of the corresponding private key for this certificate.
         *
         *     If `algorithm` is set to `RSA`, valid values are `2048`, `4096` or `8192`,
         *     and will default to `2048` if not specified.
         *     If `algorithm` is set to `ECDSA`, valid values are `256`, `384` or `521`,
         *     and will default to `256` if not specified.
         *     If `algorithm` is set to `Ed25519`, Size is ignored.
         *     No other values are allowed. */
        size?: number;
      };
      /** @description How long before the currently issued certificate's expiry cert-manager should
       *     renew the certificate. For example, if a certificate is valid for 60 minutes,
       *     and `renewBefore=10m`, cert-manager will begin to attempt to renew the certificate
       *     50 minutes after it was issued (i.e. when there are 10 minutes remaining until
       *     the certificate is no longer valid).
       *
       *     NOTE: The actual lifetime of the issued certificate is used to determine the
       *     renewal time. If an issuer returns a certificate with a different lifetime than
       *     the one requested, cert-manager will use the lifetime of the issued certificate.
       *
       *     If unset, this defaults to 1/3 of the issued certificate's lifetime.
       *     Minimum accepted value is 5 minutes.
       *     Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
       *     Cannot be set if the `renewBeforePercentage` field is set. */
      renewBefore?: string;
      /**
       * Format: int32
       * @description `renewBeforePercentage` is like `renewBefore`, except it is a relative percentage
       *     rather than an absolute duration. For example, if a certificate is valid for 60
       *     minutes, and  `renewBeforePercentage=25`, cert-manager will begin to attempt to
       *     renew the certificate 45 minutes after it was issued (i.e. when there are 15
       *     minutes (25%) remaining until the certificate is no longer valid).
       *
       *     NOTE: The actual lifetime of the issued certificate is used to determine the
       *     renewal time. If an issuer returns a certificate with a different lifetime than
       *     the one requested, cert-manager will use the lifetime of the issued certificate.
       *
       *     Value must be an integer in the range (0,100). The minimum effective
       *     `renewBefore` derived from the `renewBeforePercentage` and `duration` fields is 5
       *     minutes.
       *     Cannot be set if the `renewBefore` field is set.
       */
      renewBeforePercentage?: number;
      /**
       * Format: int32
       * @description The maximum number of CertificateRequest revisions that are maintained in
       *     the Certificate's history. Each revision represents a single `CertificateRequest`
       *     created by this Certificate, either when it was created, renewed, or Spec
       *     was changed. Revisions will be removed by oldest first if the number of
       *     revisions exceeds this number.
       *
       *     If set, revisionHistoryLimit must be a value of `1` or greater.
       *     If unset (`nil`), revisions will not be garbage collected.
       *     Default value is `nil`.
       */
      revisionHistoryLimit?: number;
      /** @description Name of the Secret resource that will be automatically created and
       *     managed by this Certificate resource. It will be populated with a
       *     private key and certificate, signed by the denoted issuer. The Secret
       *     resource lives in the same namespace as the Certificate resource. */
      secretName: string;
      /** @description Defines annotations and labels to be copied to the Certificate's Secret.
       *     Labels and annotations on the Secret will be changed as they appear on the
       *     SecretTemplate when added or removed. SecretTemplate annotations are added
       *     in conjunction with, and cannot overwrite, the base set of annotations
       *     cert-manager sets on the Certificate's Secret. */
      secretTemplate?: {
        /** @description Annotations is a key value map to be copied to the target Kubernetes Secret. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Labels is a key value map to be copied to the target Kubernetes Secret. */
        labels?: {
          [key: string]: string;
        };
      };
      /** @description Requested set of X509 certificate subject attributes.
       *     More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6
       *
       *     The common name attribute is specified separately in the `commonName` field.
       *     Cannot be set if the `literalSubject` field is set. */
      subject?: {
        /** @description Countries to be used on the Certificate. */
        countries?: string[];
        /** @description Cities to be used on the Certificate. */
        localities?: string[];
        /** @description Organizational Units to be used on the Certificate. */
        organizationalUnits?: string[];
        /** @description Organizations to be used on the Certificate. */
        organizations?: string[];
        /** @description Postal codes to be used on the Certificate. */
        postalCodes?: string[];
        /** @description State/Provinces to be used on the Certificate. */
        provinces?: string[];
        /** @description Serial number to be used on the Certificate. */
        serialNumber?: string;
        /** @description Street addresses to be used on the Certificate. */
        streetAddresses?: string[];
      };
      /** @description Requested URI subject alternative names. */
      uris?: string[];
      /** @description Requested key usages and extended key usages.
       *     These usages are used to set the `usages` field on the created CertificateRequest
       *     resources. If `encodeUsagesInRequest` is unset or set to `true`, the usages
       *     will additionally be encoded in the `request` field which contains the CSR blob.
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
    };
    /** @description Status of the Certificate.
     *     This is set and managed automatically.
     *     Read-only.
     *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
    status?: {
      /** @description List of status conditions to indicate the status of certificates.
       *     Known condition types are `Ready` and `Issuing`. */
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
        /**
         * Format: int64
         * @description If set, this represents the .metadata.generation that the condition was
         *     set based upon.
         *     For instance, if .metadata.generation is currently 12, but the
         *     .status.condition[x].observedGeneration is 9, the condition is out of date
         *     with respect to the current state of the Certificate.
         */
        observedGeneration?: number;
        /** @description Reason is a brief machine readable explanation for the condition's last
         *     transition. */
        reason?: string;
        /**
         * @description Status of the condition, one of (`True`, `False`, `Unknown`).
         * @enum {string}
         */
        status: "False" | "True" | "Unknown";
        /** @description Type of the condition, known values are (`Ready`, `Issuing`). */
        type: string;
      }[];
      /** @description The number of continuous failed issuance attempts up till now. This
       *     field gets removed (if set) on a successful issuance and gets set to
       *     1 if unset and an issuance has failed. If an issuance has failed, the
       *     delay till the next issuance will be calculated using formula
       *     time.Hour * 2 ^ (failedIssuanceAttempts - 1). */
      failedIssuanceAttempts?: number;
      /**
       * Format: date-time
       * @description LastFailureTime is set only if the latest issuance for this
       *     Certificate failed and contains the time of the failure. If an
       *     issuance has failed, the delay till the next issuance will be
       *     calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts -
       *     1). If the latest issuance has succeeded this field will be unset.
       */
      lastFailureTime?: string;
      /** @description The name of the Secret resource containing the private key to be used
       *     for the next certificate iteration.
       *     The keymanager controller will automatically set this field if the
       *     `Issuing` condition is set to `True`.
       *     It will automatically unset this field when the Issuing condition is
       *     not set or False. */
      nextPrivateKeySecretName?: string;
      /**
       * Format: date-time
       * @description The expiration time of the certificate stored in the secret named
       *     by this resource in `spec.secretName`.
       */
      notAfter?: string;
      /**
       * Format: date-time
       * @description The time after which the certificate stored in the secret named
       *     by this resource in `spec.secretName` is valid.
       */
      notBefore?: string;
      /**
       * Format: date-time
       * @description RenewalTime is the time at which the certificate will be next
       *     renewed.
       *     If not set, no upcoming renewal is scheduled.
       */
      renewalTime?: string;
      /** @description The current 'revision' of the certificate as issued.
       *
       *     When a CertificateRequest resource is created, it will have the
       *     `cert-manager.io/certificate-revision` set to one greater than the
       *     current value of this field.
       *
       *     Upon issuance, this field will be set to the value of the annotation
       *     on the CertificateRequest resource used to issue the certificate.
       *
       *     Persisting the value on the CertificateRequest resource allows the
       *     certificates controller to know whether a request is part of an old
       *     issuance or if it is part of the ongoing revision's issuance by
       *     checking if the revision value in the annotation is greater than this
       *     field. */
      revision?: number;
    };
  };
}
