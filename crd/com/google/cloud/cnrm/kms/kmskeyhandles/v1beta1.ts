import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSKeyHandleV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesKMSKeyHandleV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kms.cnrm.cloud.google.com/v1beta1", kind: "KMSKeyHandle", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesKMSKeyHandleV1beta1Config extends ManifestConfig {
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
    /** @description KMSKeyHandle is the Schema for the KMSKeyHandle API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
  };
}
