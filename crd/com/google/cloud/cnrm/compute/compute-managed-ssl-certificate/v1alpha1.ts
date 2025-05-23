import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeManagedSSLCertificateV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeManagedSSLCertificateV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeManagedSSLCertificateV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1alpha1";
    kind?: "ComputeManagedSSLCertificate";
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. Properties relevant to a managed certificate.  These will be used if the
       *     certificate is managed (as indicated by a value of 'MANAGED' in 'type'). */
      managed?: {
        /** @description Immutable. Domains for which a managed SSL certificate will be valid.  Currently,
         *     there can be up to 100 domains in this list. */
        domains: string[];
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
      /** @description Immutable. Enum field whose value is always 'MANAGED' - used to signal to the API
       *     which type this is. Default value: "MANAGED" Possible values: ["MANAGED"]. */
      type?: string;
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
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description The unique identifier for the resource. */
        certificateID?: number;
        /** @description Creation timestamp in RFC3339 text format. */
        creationTimestamp?: string;
        /** @description Expire time of the certificate in RFC3339 text format. */
        expireTime?: string;
        selfLink?: string;
        /** @description Domains associated with the certificate via Subject Alternative Name. */
        subjectAlternativeNames?: string[];
      };
    };
  };
}
