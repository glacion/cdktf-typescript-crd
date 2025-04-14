import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudBuildWorkerPoolV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudBuildWorkerPoolV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloudbuild.cnrm.cloud.google.com/v1beta1", kind: "CloudBuildWorkerPool", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudBuildWorkerPoolV1beta1Config extends ManifestConfig {
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
  };
}
