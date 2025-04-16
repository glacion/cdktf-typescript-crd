import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringGroupV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMonitoringGroupV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMonitoringGroupV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.cnrm.cloud.google.com/v1beta1";
    kind?: "MonitoringGroup";
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
