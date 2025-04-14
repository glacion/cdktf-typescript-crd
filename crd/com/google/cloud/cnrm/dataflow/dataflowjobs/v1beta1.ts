import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataflowJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataflowJobV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dataflow.cnrm.cloud.google.com/v1beta1", kind: "DataflowJob", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataflowJobV1beta1Config extends ManifestConfig {
  manifest: {
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
  };
}
