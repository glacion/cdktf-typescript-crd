import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApigeeEnvironmentV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesApigeeEnvironmentV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesApigeeEnvironmentV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "apigee.cnrm.cloud.google.com/v1beta1";
    kind: "ApigeeEnvironment";
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
    /** @description ApigeeEnvironmentSpec defines the desired state of ApigeeEnvironment */
    spec: {
      /** @description Reference to parent Apigee Organization. */
      apigeeOrganizationRef: {
        /** @description A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}". */
        external?: string;
        /** @description The name of a ApigeeOrganization resource. */
        name?: string;
        /** @description The namespace of a ApigeeOrganization resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Description of the environment. */
      description?: string;
      /** @description Optional. Display name for this environment. */
      displayName?: string;
      /** @description Optional. Key-value pairs that may be used for customizing the environment. */
      properties?: {
        [key: string]: string;
      };
      /** @description The ApigeeEnvironment name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description ApigeeEnvironmentStatus defines the config connector machine state of ApigeeEnvironment */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
       * Format: int64
       * @description Output only. Creation time of this environment as milliseconds since epoch.
       */
      createdAt?: number;
      /** @description A unique specifier for the ApigeeEnvironment resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description Output only. Last modification time of this environment as milliseconds since epoch.
       */
      lastModifiedAt?: number;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: Record<string, never>;
      /** @description Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use. */
      state?: string;
    };
  };
}
