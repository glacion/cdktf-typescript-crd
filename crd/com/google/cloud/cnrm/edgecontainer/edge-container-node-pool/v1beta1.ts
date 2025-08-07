import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class EdgecontainerCnrmCloudGoogleComEdgeContainerNodePoolV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: EdgecontainerCnrmCloudGoogleComEdgeContainerNodePoolV1beta1Config) {
    super(scope, id, config);
  }
}
export interface EdgecontainerCnrmCloudGoogleComEdgeContainerNodePoolV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "edgecontainer.cnrm.cloud.google.com/v1beta1";
    kind: "EdgeContainerNodePool";
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
      clusterRef: {
        /** @description Allowed value: The `name` field of an `EdgeContainerCluster` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Local disk encryption options. This field is only used when enabling CMEK support. */
      localDiskEncryption?: {
        /** @description The Cloud KMS CryptoKeyVersion currently in use for protecting node local disks. Only applicable if kmsKey is set. */
        kmsKeyActiveVersion?: string;
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Availability of the Cloud KMS CryptoKey. If not KEY_AVAILABLE, then nodes may go offline as they cannot access their local data.
         *     This can be caused by a lack of permissions to use the key, or if the key is disabled or deleted. */
        kmsKeyState?: string;
      };
      /** @description Immutable. The location of the resource. */
      location: string;
      /** @description Only machines matching this filter will be allowed to join the node pool.
       *     The filtering language accepts strings like "name=<name>", and is
       *     documented in more detail in [AIP-160](https://google.aip.dev/160). */
      machineFilter?: string;
      /** @description Configuration for each node in the NodePool. */
      nodeConfig?: {
        /** @description "The Kubernetes node labels". */
        labels?: {
          [key: string]: string;
        };
      };
      /** @description The number of nodes in the pool. */
      nodeCount: number;
      /** @description Immutable. Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. */
      nodeLocation: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
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
      /** @description The time when the node pool was created. */
      createTime?: string;
      /** @description The lowest release version among all worker nodes. */
      nodeVersion?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The time when the node pool was last updated. */
      updateTime?: string;
    };
  };
}
