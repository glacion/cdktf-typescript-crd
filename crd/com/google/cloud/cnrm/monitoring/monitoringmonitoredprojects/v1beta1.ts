import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringMonitoredProjectV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesMonitoringMonitoredProjectV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "monitoring.cnrm.cloud.google.com/v1beta1",
        kind: "MonitoringMonitoredProject",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesMonitoringMonitoredProjectV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
      metricsScope: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
