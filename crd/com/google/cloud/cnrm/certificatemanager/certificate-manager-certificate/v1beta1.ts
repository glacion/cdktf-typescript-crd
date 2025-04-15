import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerCertificateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCertificateManagerCertificateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCertificateManagerCertificateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "certificatemanager.cnrm.cloud.google.com/v1beta1";
    kind: "CertificateManagerCertificate";
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
      /** @description A human-readable description of the resource. */
      description?: string;
      /** @description Immutable. The Certificate Manager location. If not specified, "global" is used. */
      location: string;
      /** @description Immutable. Configuration and state of a Managed Certificate.
       *     Certificate Manager provisions and renews Managed Certificates
       *     automatically, for as long as it's authorized to do so. */
      managed?: {
        /** @description Detailed state of the latest authorization attempt for each domain
         *     specified for this Managed Certificate. */
        authorizationAttemptInfo?: {
          /** @description Human readable explanation for reaching the state. Provided to help
           *     address the configuration issues.
           *     Not guaranteed to be stable. For programmatic access use 'failure_reason' field. */
          details?: string;
          /** @description Domain name of the authorization attempt. */
          domain?: string;
          /** @description Reason for failure of the authorization attempt for the domain. */
          failureReason?: string;
          /** @description State of the domain for managed certificate issuance. */
          state?: string;
        }[];
        dnsAuthorizationsRefs?: ({
          /** @description Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description Immutable. The domains for which a managed SSL certificate will be generated.
         *     Wildcard domains are only supported with DNS challenge resolution. */
        domains?: string[];
        /** @description Only the `external` field is supported to configure the reference.
         *
         *     Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/*\/locations/*\/certificateIssuanceConfigs/*.
         *     If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
         *     Either issuanceConfig or dnsAuthorizations should be specified, but not both. */
        issuanceConfigRef?: {
          /** @description Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Information about issues with provisioning this Managed Certificate. */
        provisioningIssue?: {
          /** @description Human readable explanation about the issue. Provided to help address
           *     the configuration issues.
           *     Not guaranteed to be stable. For programmatic access use 'reason' field. */
          details?: string;
          /** @description Reason for provisioning failures. */
          reason?: string;
        }[];
        /** @description A state of this Managed Certificate. */
        state?: string;
      };
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The scope of the certificate.
       *
       *     DEFAULT: Certificates with default scope are served from core Google data centers.
       *     If unsure, choose this option.
       *
       *     EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates,
       *     served from non-core Google data centers.
       *
       *     ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
       *     see https://cloud.google.com/compute/docs/regions-zones. */
      scope?: string;
      /** @description Immutable. Certificate data for a SelfManaged Certificate.
       *     SelfManaged Certificates are uploaded by the user. Updating such
       *     certificates before they expire remains the user's responsibility. */
      selfManaged?: {
        /** @description DEPRECATED. `certificate_pem` is deprecated. Use `pem_certificate` instead. Immutable. The certificate chain in PEM-encoded form.
         *
         *     Leaf certificate comes first, followed by intermediate ones if any. */
        certificatePem?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description Immutable. The certificate chain in PEM-encoded form.
         *
         *     Leaf certificate comes first, followed by intermediate ones if any. */
        pemCertificate?: string;
        /** @description Immutable. The private key of the leaf certificate in PEM-encoded form. */
        pemPrivateKey?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description DEPRECATED. `private_key_pem` is deprecated. Use `pem_private_key` instead. Immutable. The private key of the leaf certificate in PEM-encoded form. */
        privateKeyPem?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
      };
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
