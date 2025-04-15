import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigtableAppProfileV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigtableAppProfileV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigtableAppProfileV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "bigtable.cnrm.cloud.google.com/v1beta1";
    kind: "BigtableAppProfile";
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
    spec?: {
      /** @description Long form description of the use case for this app profile. */
      description?: string;
      /** @description The instance to create the app profile within. */
      instanceRef?: {
        /** @description Allowed value: The `name` field of a `BigtableInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible. */
      multiClusterRoutingClusterIds?: string[];
      /** @description If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
       *     in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
       *     consistency to improve availability. */
      multiClusterRoutingUseAny?: boolean;
      /** @description Immutable. Optional. The appProfileId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Use a single-cluster routing policy. */
      singleClusterRouting?: {
        /** @description If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
         *     It is unsafe to send these requests to the same table/row/column in multiple clusters. */
        allowTransactionalWrites?: boolean;
        /** @description The cluster to which read/write requests should be routed. */
        clusterId: string;
      };
      /** @description The standard options used for isolating this app profile's traffic from other use cases. */
      standardIsolation?: {
        /** @description The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. */
        priority: string;
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
      /** @description The unique name of the requested app profile. Values are of the form 'projects/<project>/instances/<instance>/appProfiles/<appProfileId>'. */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
