import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNodeGroupV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeNodeGroupV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeNodeGroupV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeNodeGroup";
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
      /** @description Immutable. If you use sole-tenant nodes for your workloads, you can use the node
       *     group autoscaler to automatically manage the sizes of your node groups. */
      autoscalingPolicy?: {
        /** @description Immutable. Maximum size of the node group. Set to a value less than or equal
         *     to 100 and greater than or equal to min-nodes. */
        maxNodes?: number;
        /** @description Immutable. Minimum size of the node group. Must be less
         *     than or equal to max-nodes. The default value is 0. */
        minNodes?: number;
        /** @description Immutable. The autoscaling mode. Set to one of the following:
         *       - OFF: Disables the autoscaler.
         *       - ON: Enables scaling in and scaling out.
         *       - ONLY_SCALE_OUT: Enables only scaling out.
         *       You must use this mode if your node groups are configured to
         *       restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]. */
        mode?: string;
      };
      /** @description Immutable. An optional textual description of the resource. */
      description?: string;
      /** @description Immutable. The initial number of nodes in the node group. One of 'initial_size' or 'size' must be specified. */
      initialSize?: number;
      /** @description Immutable. Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. */
      maintenancePolicy?: string;
      /** @description Immutable. contains properties for the timeframe of maintenance. */
      maintenanceWindow?: {
        /** @description Immutable. instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. */
        startTime: string;
      };
      /** @description The node template to which this node group belongs. */
      nodeTemplateRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNodeTemplate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Share settings for the node group. */
      shareSettings?: {
        /** @description Immutable. A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS. */
        projectMap?: {
          /** @description The key of this project config in the parent map. */
          idRef: {
            /** @description Allowed value: The `name` field of a `Project` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description The project id/number should be the same as the key of this project
           *     config in the project map. */
          projectIdRef: {
            /** @description Allowed value: The `name` field of a `Project` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
        /** @description Immutable. Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. */
        shareType: string;
      };
      /** @description Immutable. The total number of nodes in the node group. One of 'initial_size' or 'size' must be specified. */
      size?: number;
      /** @description Immutable. Zone where this node group is located. */
      zone: string;
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
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
