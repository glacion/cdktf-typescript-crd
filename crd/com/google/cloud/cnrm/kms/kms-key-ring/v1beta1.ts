import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KmsCnrmCloudGoogleComKMSKeyRingV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: KmsCnrmCloudGoogleComKMSKeyRingV1beta1Config) {
    super(scope, id, config);
  }
}
export interface KmsCnrmCloudGoogleComKMSKeyRingV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "kms.cnrm.cloud.google.com/v1beta1";
    kind: "KMSKeyRing";
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
      /** @description Immutable. The location for the KeyRing. A full list of valid locations can be found by running 'gcloud kms locations list'. */
      location: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
    status?: {
      /** @description Conditions represent the latest available observations of the KMSKeyRing's current state. */
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
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description The self link of the created KeyRing in the format projects/{project}/locations/{location}/keyRings/{name}. */
      selfLink?: string;
    };
  };
}
