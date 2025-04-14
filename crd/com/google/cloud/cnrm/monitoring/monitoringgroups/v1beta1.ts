import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringGroupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMonitoringGroupV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.cnrm.cloud.google.com/v1beta1", kind: "MonitoringGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMonitoringGroupV1beta1Config extends ManifestConfig {
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
      /** @description A user-assigned name for this group, used only for display purposes. */
      displayName: string;
      /** @description The filter used to determine which monitored resources belong to this group. */
      filter: string;
      /** @description If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters. */
      isCluster?: boolean;
      parentRef?: {
        /** @description The name of the group's parent, if it has one. The format is: projects/ For groups with no parent, `parent_name` is the empty string, ``.
         *
         *     Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef?: {
        /** @description The project of the group
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
