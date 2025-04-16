import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigtableInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigtableInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigtableInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "bigtable.cnrm.cloud.google.com/v1beta1";
    kind?: "BigtableInstance";
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
    /** @description BigtableInstanceSpec defines the desired state of BigtableInstance */
    spec?: {
      /** @description A block of cluster configuration options. This can be specified at least once. */
      cluster?: {
        /** @description A list of Autoscaling configurations. Only one element is used and allowed. */
        autoscalingConfig?: {
          /**
           * Format: int64
           * @description The target CPU utilization for autoscaling. Value must be between 10 and 80.
           */
          cpuTarget: number;
          /**
           * Format: int64
           * @description The maximum number of nodes for autoscaling.
           */
          maxNodes: number;
          /**
           * Format: int64
           * @description The minimum number of nodes for autoscaling.
           */
          minNodes: number;
          /**
           * Format: int64
           * @description The target storage utilization for autoscaling, in GB, for each node in a cluster. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.
           */
          storageTarget?: number;
        };
        /** @description The ID of the Cloud Bigtable cluster. Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers. */
        clusterId: string;
        /** @description Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable
         *     cluster. The requirements for this key are:
         *
         *     1) The Cloud Bigtable service account associated with the project that contains
         *     this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key.
         *     2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster.
         *     3) All clusters within an instance must use the same CMEK key access to this encryption key. */
        kmsKeyRef?: {
          /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
          external?: string;
          /** @description The `name` of a `KMSCryptoKey` resource. */
          name?: string;
          /** @description The `namespace` of a `KMSCryptoKey` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /**
         * Format: int64
         * @description The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.
         */
        numNodes?: number;
        /** @description The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". */
        storageType?: string;
        /** @description The zone to create the Cloud Bigtable cluster in. Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page. */
        zone: string;
      }[];
      /** @description DEPRECATED. This field no longer serves any function and is intended to be dropped in a later version of the resource. */
      deletionProtection?: boolean;
      /** @description Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion. */
      displayName?: string;
      /** @description DEPRECATED. It is recommended to leave this field unspecified since the distinction between "DEVELOPMENT" and "PRODUCTION" instances is going away, and all instances will become "PRODUCTION" instances. This means that new and existing "DEVELOPMENT" instances will be converted to "PRODUCTION" instances. It is recommended for users to use "PRODUCTION" instances in any case, since a 1-node "PRODUCTION" instance is functionally identical to a "DEVELOPMENT" instance, but without the accompanying restrictions. The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". */
      instanceType?: string;
      /** @description The Instance name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description BigtableInstanceStatus defines the config connector machine state of BigtableInstance */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
    };
  };
}
