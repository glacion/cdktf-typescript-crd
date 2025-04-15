import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudBuildWorkerPoolV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCloudBuildWorkerPoolV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCloudBuildWorkerPoolV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cloudbuild.cnrm.cloud.google.com/v1beta1";
    kind: "CloudBuildWorkerPool";
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
    /** @description CloudBuildWorkerPoolSpec defines the desired state of Instance */
    spec?: {
      /** @description A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. */
      displayName?: string;
      location: string;
      /** @description Legacy Private Pool configuration. */
      privatePoolV1Config: {
        /** @description Network configuration for the pool. */
        networkConfig?: {
          /** @description Option to configure network egress for the workers. */
          egressOption?: string;
          /** @description Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. */
          peeredNetworkIPRange?: string;
          /** @description Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. */
          peeredNetworkRef?: {
            /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
            external?: string;
            /** @description The `name` field of a `ComputeNetwork` resource. */
            name?: string;
            /** @description The `namespace` field of a `ComputeNetwork` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Machine configuration for the workers in the pool. */
        workerConfig: {
          /**
           * Format: int64
           * @description Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 2000. If `0` is specified, Cloud Build will use a standard disk size.
           */
          diskSizeGb?: number;
          /** @description Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default. */
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
      /** @description The GCP resource identifier. If not given, the metadata.name will be used. */
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
      /** @description A unique Config Connector specifier for the resource in GCP. */
      externalRef?: string;
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
        /** @description The Checksum computed by the server, using weak indicator. */
        etag?: string;
        /** @description Network configuration for the pool. */
        networkConfig?: {
          /** @description Option to configure network egress for the workers. */
          egressOption?: string;
          /** @description Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. */
          peeredNetwork?: string;
          /** @description Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. */
          peeredNetworkIPRange?: string;
        };
        /**
         * Format: date-time
         * @description The last update timestamp of the workerpool.
         */
        updateTime?: string;
        /** @description Machine configuration for the workers in the pool. */
        workerConfig: {
          /**
           * Format: int64
           * @description Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 2000. If `0` is specified, Cloud Build will use a standard disk size.
           */
          diskSizeGb?: number;
          /** @description Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default. */
          machineType?: string;
        };
      };
    };
  };
}
