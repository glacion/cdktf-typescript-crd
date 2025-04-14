import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGoogleCASIssuerV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGoogleCASIssuerV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cas-issuer.jetstack.io/v1beta1", kind: "GoogleCASIssuer", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGoogleCASIssuerV1beta1Config extends ManifestConfig {
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
    /** @description GoogleCASIssuer is the Schema for the googlecasissuers API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description GoogleCASIssuerSpec defines the desired state of GoogleCASIssuer */
      spec?: {
        /** @description CaPoolId is the id of the CA pool to issue certificates from */
        caPoolId?: string;
        /** @description CertificateAuthorityId is specific certificate authority to
         *     use to sign. Omit in order to load balance across all CAs
         *     in the pool */
        certificateAuthorityId?: string;
        /** @description CertificateTemplate is specific certificate template to
         *     use. Omit to not specify a template */
        certificateTemplate?: string;
        /** @description Credentials is a reference to a Kubernetes Secret Key that contains Google Service Account Credentials */
        credentials?: {
          /** @description The key of the entry in the Secret resource's `data` field to be used.
           *     Some instances of this field may be defaulted, in others it may be
           *     required. */
          key?: string;
          /** @description Name of the resource being referred to.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name: string;
        };
        /** @description Location is the Google Cloud Project Location */
        location?: string;
        /** @description Project is the Google Cloud Project ID */
        project?: string;
      };
      status?: {
        /** @description List of status conditions to indicate the status of an Issuer.
         *     Known condition types are `Ready`. */
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
           *     with respect to the current state of the Issuer.
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
          /** @description Type of the condition, known values are (`Ready`). */
          type: string;
        }[];
      };
    };
  };
}
