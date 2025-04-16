import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkstationV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkstationV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkstationV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "workstations.cnrm.cloud.google.com/v1alpha1";
    kind?: "Workstation";
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
    /** @description WorkstationSpec defines the desired state of Workstation */
    spec: {
      /** @description Optional. Client-specified annotations. */
      annotations?: {
        /** @description Key for the annotation. */
        key?: string;
        /** @description Value for the annotation. */
        value?: string;
      }[];
      /** @description Optional. Human-readable name for this workstation. */
      displayName?: string;
      /** @description Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. */
      labels?: {
        /** @description Key for the label. */
        key?: string;
        /** @description Value for the label. */
        value?: string;
      }[];
      /** @description Parent is a reference to the parent WorkstationConfig for this Workstation. */
      parentRef: {
        /** @description A reference to an externally managed WorkstationConfig resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/workstationClusters/{{workstationclusterID}}/workstationConfigs/{{workstationconfigID}}". */
        external?: string;
        /** @description The name of a WorkstationConfig resource. */
        name?: string;
        /** @description The namespace of a WorkstationConfig resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Workstation name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description WorkstationStatus defines the config connector machine state of Workstation */
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
      /** @description A unique specifier for the Workstation resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. Time when this workstation was created. */
        createTime?: string;
        /** @description Output only. Time when this workstation was soft-deleted. */
        deleteTime?: string;
        /** @description Output only. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
        etag?: string;
        /** @description Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`. */
        host?: string;
        /** @description Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state. */
        startTime?: string;
        /** @description Output only. Current state of the workstation. */
        state?: string;
        /** @description Output only. A system-assigned unique identifier for this workstation. */
        uid?: string;
        /** @description Output only. Time when this workstation was most recently updated. */
        updateTime?: string;
      };
    };
  };
}
