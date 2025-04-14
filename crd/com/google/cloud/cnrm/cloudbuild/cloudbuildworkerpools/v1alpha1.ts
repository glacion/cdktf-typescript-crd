import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudBuildWorkerPoolV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudBuildWorkerPoolV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloudbuild.cnrm.cloud.google.com/v1alpha1", kind: "CloudBuildWorkerPool", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudBuildWorkerPoolV1alpha1Config extends ManifestConfig {
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
    /** @description CloudBuildWorkerPool is the Schema for the CloudBuild WorkerPool API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description CloudBuildWorkerPoolSpec defines the desired state of Instance */
      spec?: {
        displayName?: string;
        location: string;
        name?: string;
        privatePoolV1Config: {
          networkConfig?: {
            egressOption?: string;
            peeredNetworkIPRange?: string;
            peeredNetworkRef: {
              /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
              external?: string;
              /** @description The `name` field of a `ComputeNetwork` resource. */
              name?: string;
              /** @description The `namespace` field of a `ComputeNetwork` resource. */
              namespace?: string;
            } & (unknown | unknown);
          };
          workerConfig: {
            /** Format: int64 */
            diskSizeGb?: number;
            machineType?: string;
          };
        };
        /** @description The Project that this resource belongs to. */
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
        resourceID?: string;
      };
      /** @description CloudBuildWorkerPoolStatus defines the observed state of Instance */
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
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
        /** @description ObservedState is the state of the resource as most recently observed in GCP. */
        observedState?: {
          /**
           * Format: date-time
           * @description The creation timestamp of the workerpool.
           */
          createTime?: string;
          networkConfig?: {
            egressOption?: string;
            peeredNetwork?: string;
            peeredNetworkIPRange?: string;
          };
          /**
           * Format: date-time
           * @description The last update timestamp of the workerpool.
           */
          updateTime?: string;
          workerConfig?: {
            /** Format: int64 */
            diskSizeGb?: number;
            machineType?: string;
          };
        };
      };
    };
  };
}
