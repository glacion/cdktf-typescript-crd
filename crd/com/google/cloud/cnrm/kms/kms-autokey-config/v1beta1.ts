import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSAutokeyConfigV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesKMSAutokeyConfigV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesKMSAutokeyConfigV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "kms.cnrm.cloud.google.com/v1beta1";
    kind: "KMSAutokeyConfig";
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
    /** @description KMSAutokeyConfigSpec defines the desired state of KMSAutokeyConfig */
    spec?: {
      /** @description Immutable. The folder that this resource belongs to. */
      folderRef: {
        /** @description The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set. */
        external?: string;
        /** @description The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set. */
        name?: string;
        /** @description The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Project that this resource belongs to. */
      keyProject?: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
    };
    /** @description KMSAutokeyConfigStatus defines the config connector machine state of KMSAutokeyConfig */
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
      /** @description A unique specifier for the KMSAutokeyConfig resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. Current state of this AutokeyConfig. */
        state?: string;
      };
    };
  };
}
