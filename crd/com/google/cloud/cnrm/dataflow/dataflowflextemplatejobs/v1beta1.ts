import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataflowFlexTemplateJobV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataflowFlexTemplateJobV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dataflow.cnrm.cloud.google.com/v1beta1", kind: "DataflowFlexTemplateJob", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataflowFlexTemplateJobV1beta1Config extends ManifestConfig {
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
      /** @description Additional experiment flags for the job. */
      additionalExperiments?: string[];
      /** @description The algorithm to use for autoscaling */
      autoscalingAlgorithm?: string;
      /** @description Cloud Storage path to a file with json serialized ContainerSpec as content. */
      containerSpecGcsPath: string;
      /** @description Whether to enable Streaming Engine for the job. */
      enableStreamingEngine?: boolean;
      /** @description Configuration for VM IPs. */
      ipConfiguration?: string;
      /** @description The Cloud KMS key for the job. */
      kmsKeyNameRef?: {
        /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
        external?: string;
        /** @description The `name` of a `KMSCryptoKey` resource. */
        name?: string;
        /** @description The `namespace` of a `KMSCryptoKey` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The machine type to use for launching the job. The default is n1-standard-1. */
      launcherMachineType?: string;
      /** @description The machine type to use for the job. Defaults to the value from the template if not specified. */
      machineType?: string;
      /**
       * Format: int32
       * @description The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
       */
      maxWorkers?: number;
      /** @description Network to which VMs will be assigned.  If empty or unspecified, the service will use the network "default". */
      networkRef?: {
        /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
        external?: string;
        /** @description The `name` field of a `ComputeNetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeNetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /**
       * Format: int32
       * @description The initial number of Google Compute Engine instances for the job.
       */
      numWorkers?: number;
      /** @description The parameters for FlexTemplate. Ex. {"num_workers":"5"} */
      parameters?: Record<string, never>;
      /** @description Immutable. The region in which the created job should run. */
      region?: string;
      /** @description Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines. */
      sdkContainerImage?: string;
      /** @description The email address of the service account to run the job as. */
      serviceAccountEmailRef?: {
        /** @description The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
      stagingLocation?: string;
      /** @description Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
      subnetworkRef?: {
        /** @description The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector. */
        external?: string;
        /** @description The `name` field of a `ComputeSubnetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeSubnetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
      tempLocation?: string;
      /** @description Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. Only applicable when updating a pipeline. */
      transformNameMapping?: Record<string, never>;
    };
  };
}
