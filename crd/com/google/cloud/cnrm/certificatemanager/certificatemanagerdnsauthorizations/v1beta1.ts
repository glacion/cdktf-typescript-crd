import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerDNSAuthorizationV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerDNSAuthorizationV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1beta1",
        kind: "CertificateManagerDNSAuthorization",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerDNSAuthorizationV1beta1Config extends ManifestConfig {
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
  manifest: {
    /** @description CertificateManagerDNSAuthorization is the Schema for the CertificateManagerDNSAuthorization API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description CertificateManagerDNSAuthorizationSpec defines the desired state of CertificateManagerDNSAuthorization */
      spec: {
        /** @description A human-readable description of the resource. */
        description?: string;
        /** @description Immutable. A domain which is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for "example.com" can be used to issue certificates for "example.com" and "*.example.com". */
        domain: string;
        /** @description Immutable. Optional. Location represents the geographical location of the DnsAuthorization. If not specified, "global" is used. */
        location?: string;
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description The `projectID` field of a project, when not managed by Config Connector. */
          external?: string;
          /** @description The kind of the Project resource; optional but must be `Project` if provided. */
          kind?: string;
          /** @description The `name` field of a `Project` resource. */
          name?: string;
          /** @description The `namespace` field of a `Project` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
      };
      /** @description CertificateManagerDNSAuthorizationStatus defines the config connector machine state of CertificateManagerDNSAuthorization */
      status?: {
        /** @description Conditions represent the latest available observations of the CertificateManagerDNSAuthorization's current state. */
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
        /** @description The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate. */
        dnsResourceRecord?: {
          /** @description Output only. Data of the DNS Resource Record. */
          data?: string;
          /** @description Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com` */
          name?: string;
          /** @description Output only. Type of the DNS Resource Record. Currently always set to "CNAME". */
          type?: string;
        }[];
        /** @description A unique specifier for the CertificateManagerDNSAuthorization resource in GCP. */
        externalRef?: string;
        /**
         * Format: int64
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
      };
    };
  };
}
