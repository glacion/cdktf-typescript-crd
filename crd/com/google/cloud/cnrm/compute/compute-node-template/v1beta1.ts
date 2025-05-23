import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNodeTemplateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeNodeTemplateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeNodeTemplateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeNodeTemplate";
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
      /** @description Immutable. CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. */
      cpuOvercommitType?: string;
      /** @description Immutable. An optional textual description of the resource. */
      description?: string;
      /** @description Immutable. Node type to use for nodes group that are created from this template.
       *     Only one of nodeTypeFlexibility and nodeType can be specified. */
      nodeType?: string;
      /** @description Immutable. Flexible properties for the desired node type. Node groups that
       *     use this node template will create nodes of a type that matches
       *     these properties. Only one of nodeTypeFlexibility and nodeType can
       *     be specified. */
      nodeTypeFlexibility?: {
        /** @description Immutable. Number of virtual CPUs to use. */
        cpus?: string;
        /** @description Use local SSD. */
        localSsd?: string;
        /** @description Immutable. Physical memory available to the node, defined in MB. */
        memory?: string;
      };
      /** @description Immutable. Region where nodes using the node template will be created.
       *     If it is not provided, the provider region is used. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The server binding policy for nodes using this template. Determines
       *     where the nodes should restart following a maintenance event. */
      serverBinding?: {
        /** @description Immutable. Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER',
         *     nodes using this template will restart on any physical server
         *     following a maintenance event.
         *
         *     If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
         *     will restart on the same physical server following a maintenance
         *     event, instead of being live migrated to or restarted on a new
         *     physical server. This option may be useful if you are using
         *     software licenses tied to the underlying server characteristics
         *     such as physical sockets or cores, to avoid the need for
         *     additional licenses when maintenance occurs. However, VMs on such
         *     nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]. */
        type: string;
      };
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
