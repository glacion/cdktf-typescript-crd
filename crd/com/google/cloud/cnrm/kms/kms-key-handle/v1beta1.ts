import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSKeyHandleV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesKMSKeyHandleV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesKMSKeyHandleV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "kms.cnrm.cloud.google.com/v1beta1";
    kind?: "KMSKeyHandle";
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
    /** @description KMSKeyHandleSpec defines the desired state of KMSKeyHandle */
    spec: {
      /** @description Location name to create KeyHandle */
      location?: string;
      /** @description Project hosting KMSKeyHandle */
      projectRef?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The KMS Key Handle ID used for resource creation or acquisition. For creation: If specified, this value is used as the key handle ID. If not provided, a UUID will be generated and assigned as the key handle ID. For acquisition: This field must be provided to identify the key handle resource to acquire. */
      resourceID?: string;
      /** @description Indicates the resource type that the resulting [CryptoKey][] is meant to protect, e.g. `{SERVICE}.googleapis.com/{TYPE}`. See documentation for supported resource types https://cloud.google.com/kms/docs/autokey-overview#compatible-services. */
      resourceTypeSelector?: string;
    };
    /** @description KMSKeyHandleStatus defines the config connector machine state of KMSKeyHandle */
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
      /** @description A unique specifier for the KMSKeyHandle resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        kmsKey?: string;
      };
    };
  };
}
