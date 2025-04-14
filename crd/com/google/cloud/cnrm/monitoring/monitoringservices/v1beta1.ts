import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringServiceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMonitoringServiceV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.cnrm.cloud.google.com/v1beta1", kind: "MonitoringService", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMonitoringServiceV1beta1Config extends ManifestConfig {
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
      /** @description Name used for UI elements listing this Service. */
      displayName?: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Configuration for how to query telemetry on a Service. */
      telemetry?: {
        /** @description The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. */
        resourceName?: string;
      };
    };
  };
}
