import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class DataflowCnrmCloudGoogleComDataflowJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: DataflowCnrmCloudGoogleComDataflowJobV1beta1Config) {
    super(scope, id, config);
  }
}
export interface DataflowCnrmCloudGoogleComDataflowJobV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "dataflow.cnrm.cloud.google.com/v1beta1";
    kind: "DataflowJob";
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
      /** @description List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. */
      additionalExperiments?: string[];
      /** @description Indicates if the job should use the streaming engine feature. */
      enableStreamingEngine?: boolean;
      /** @description The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". */
      ipConfiguration?: string;
      /** @description The name for the Cloud KMS key for the job. */
      kmsKeyRef?: {
        /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The machine type to use for the job. */
      machineType?: string;
      /** @description Immutable. The number of workers permitted to work on the job. More workers may improve processing speed at additional cost. */
      maxWorkers?: number;
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Key/Value pairs to be passed to the Dataflow job (as used in the template). */
      parameters?: Record<string, never>;
      /** @description Immutable. The region in which the created job should run. */
      region?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      serviceAccountRef?: {
        /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      subnetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data. */
      tempGcsLocation: string;
      /** @description The Google Cloud Storage path to the Dataflow job template. */
      templateGcsPath: string;
      /** @description Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. */
      transformNameMapping?: Record<string, never>;
      /** @description Immutable. The zone in which the created job should run. If it is not provided, the provider zone is used. */
      zone?: string;
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
      /** @description The unique ID of this job. */
      jobId?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The current state of the resource, selected from the JobState enum. */
      state?: string;
      /** @description The type of this job, selected from the JobType enum. */
      type?: string;
    };
  };
}
