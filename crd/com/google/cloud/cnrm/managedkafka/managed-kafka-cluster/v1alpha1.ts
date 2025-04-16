import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesManagedKafkaClusterV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesManagedKafkaClusterV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesManagedKafkaClusterV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "managedkafka.cnrm.cloud.google.com/v1alpha1";
    kind?: "ManagedKafkaCluster";
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
    /** @description ManagedKafkaClusterSpec defines the desired state of ManagedKafkaCluster */
    spec: {
      /** @description Required. Capacity configuration for the Kafka cluster. */
      capacityConfig: {
        /**
         * Format: int64
         * @description Required. The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).
         */
        memoryBytes: number;
        /**
         * Format: int64
         * @description Required. The number of vCPUs to provision for the cluster. Minimum: 3.
         */
        vcpuCount: number;
      };
      /** @description Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform. */
      gcpConfig: {
        /** @description Required. Access configuration for the Kafka cluster. */
        accessConfig: {
          /** @description Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka cluster. Minimum of 1 network is required. Maximum 10 networks can be specified. */
          networkConfigs: {
            /** @description Required. Reference to the VPC subnet in which to create Private Service Connect
             *      (PSC) endpoints for the Kafka brokers and bootstrap address.
             *
             *      The subnet must be located in the same region as the Kafka cluster. The
             *      project may differ. Multiple subnets from the same parent network must not
             *      be specified.
             *
             *      The CIDR range of the subnet must be within the IPv4 address ranges for
             *      private networks, as specified in RFC 1918. */
            subnetworkRef: {
              /** @description The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector. */
              external?: string;
              /** @description The `name` field of a `ComputeSubnetwork` resource. */
              name?: string;
              /** @description The `namespace` field of a `ComputeSubnetwork` resource. */
              namespace?: string;
            } & (unknown | unknown);
          }[];
        };
        /** @description Optional. Immutable. The Cloud KMS Key name to use for encryption. The key must be located in the same region as the cluster and cannot be changed. */
        kmsKeyRef?: {
          /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
          external?: string;
          /** @description The `name` of a `KMSCryptoKey` resource. */
          name?: string;
          /** @description The `namespace` of a `KMSCryptoKey` resource. */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Optional. Labels as key value pairs. */
      labels?: {
        [key: string]: string;
      };
      location: string;
      /** @description The Project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Rebalance configuration for the Kafka cluster. */
      rebalanceConfig?: {
        /** @description Optional. The rebalance behavior for the cluster. When not specified, defaults to `NO_REBALANCE`. */
        mode?: string;
      };
      /** @description The GCP resource identifier. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description ManagedKafkaClusterStatus defines the config connector machine state of ManagedKafkaCluster */
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
      /** @description A unique specifier for the ManagedKafkaCluster resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. The time when the cluster was created. */
        createTime?: string;
        /** @description Output only. The current state of the cluster. */
        state?: string;
        /** @description Output only. The time when the cluster was last updated. */
        updateTime?: string;
      };
    };
  };
}
