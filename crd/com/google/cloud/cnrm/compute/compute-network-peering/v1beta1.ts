import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputeNetworkPeeringV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ComputeCnrmCloudGoogleComComputeNetworkPeeringV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputeNetworkPeeringV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeNetworkPeering";
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
      /** @description Whether to export the custom routes to the peer network. Defaults to false. */
      exportCustomRoutes?: boolean;
      /** @description Immutable. */
      exportSubnetRoutesWithPublicIp?: boolean;
      /** @description Whether to export the custom routes from the peer network. Defaults to false. */
      importCustomRoutes?: boolean;
      /** @description Immutable. */
      importSubnetRoutesWithPublicIp?: boolean;
      networkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      peerNetworkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]. */
      stackType?: string;
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
      /** @description State for the peering, either ACTIVE or INACTIVE. The peering is ACTIVE when there's a matching configuration in the peer network. */
      state?: string;
      /** @description Details about the current state of the peering. */
      stateDetails?: string;
    };
  };
}
