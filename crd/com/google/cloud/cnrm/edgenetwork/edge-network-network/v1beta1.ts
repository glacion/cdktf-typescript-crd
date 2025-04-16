import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEdgeNetworkNetworkV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesEdgeNetworkNetworkV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesEdgeNetworkNetworkV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "edgenetwork.cnrm.cloud.google.com/v1beta1";
    kind?: "EdgeNetworkNetwork";
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
      /** @description Immutable. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /** @description Immutable. The Google Cloud region to which the target Distributed Cloud Edge zone belongs. */
      location: string;
      /** @description Immutable. IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'. */
      mtu?: number;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The networkId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The name of the target Distributed Cloud Edge zone. */
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
      /** @description The time when the subnet was created.
       *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
       *     fractional digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'. */
      createTime?: string;
      /** @description The canonical name of this resource, with format
       *     'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The time when the subnet was last updated.
       *     A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
       *     fractional digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'. */
      updateTime?: string;
    };
  };
}
