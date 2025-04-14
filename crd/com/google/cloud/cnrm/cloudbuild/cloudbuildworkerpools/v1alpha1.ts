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
  };
}
