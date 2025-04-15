import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRedisClusterV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesRedisClusterV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesRedisClusterV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "redis.cnrm.cloud.google.com/v1beta1";
    kind: "RedisCluster";
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
    /** @description RedisClusterSpec defines the desired state of RedisCluster */
    spec?: {
      /** @description Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. */
      authorizationMode?: string;
      /** @description Optional. The delete operation will fail when the value is set to true. */
      deletionProtectionEnabled?: boolean;
      /** @description Immutable. Location of the resource. */
      location: string;
      /** @description Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node. */
      nodeType?: string;
      /** @description Optional. Persistence config (RDB, AOF) for the cluster. */
      persistenceConfig?: {
        /** @description Optional. AOF configuration. This field will be ignored if mode is not AOF. */
        aofConfig?: {
          /** @description Optional. fsync configuration. */
          appendFsync?: string;
        };
        /** @description Optional. The mode of persistence. */
        mode?: string;
        /** @description Optional. RDB configuration. This field will be ignored if mode is not RDB. */
        rdbConfig?: {
          /** @description Optional. Period between RDB snapshots. */
          rdbSnapshotPeriod?: string;
          /** @description Optional. The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. */
          rdbSnapshotStartTime?: string;
        };
      };
      /** @description Immutable. The Project that this resource belongs to. */
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
      /** @description Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported. */
      pscConfigs?: {
        /** @description Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. */
        networkRef: {
          /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
          external?: string;
          /** @description The `name` field of a `ComputeNetwork` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeNetwork` resource. */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      /** @description Optional. Key/Value pairs of customer overrides for mutable Redis Configs */
      redisConfigs?: {
        [key: string]: string;
      };
      /**
       * Format: int32
       * @description Optional. The number of replica nodes per shard.
       */
      replicaCount?: number;
      /** @description The RedisCluster name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /**
       * Format: int32
       * @description Required. Number of shards for the Redis cluster.
       */
      shardCount?: number;
      /** @description Optional. The in-transit encryption for the Redis cluster. If not provided, encryption  is disabled for the cluster. */
      transitEncryptionMode?: string;
      /** @description Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. */
      zoneDistributionConfig?: {
        /** @description Optional. The mode of zone distribution. Defaults to MULTI_ZONE, when not specified. */
        mode?: string;
        /** @description Optional. When SINGLE ZONE distribution is selected, zone field would be used to allocate all resources in that zone. This is not applicable to MULTI_ZONE, and would be ignored for MULTI_ZONE clusters. */
        zone?: string;
      };
    };
    /** @description RedisClusterStatus defines the config connector machine state of RedisCluster */
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
      /** @description A unique specifier for the RedisCluster resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. The timestamp associated with the cluster creation request. */
        createTime?: string;
        /** @description Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported. */
        discoveryEndpoints?: {
          /** @description Output only. Address of the exposed Redis endpoint used by clients to connect to the service. The address could be either IP or hostname. */
          address?: string;
          /**
           * Format: int32
           * @description Output only. The port number of the exposed Redis endpoint.
           */
          port?: number;
          /** @description Output only. Customer configuration for where the endpoint is created and accessed from. */
          pscConfig?: {
            /** @description Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. */
            network?: string;
          };
        }[];
        /** @description Output only. Precise value of redis memory size in GB for the entire cluster. */
        preciseSizeGb?: number;
        /** @description Output only. PSC connections for discovery of the cluster topology and accessing the cluster. */
        pscConnections?: {
          /** @description Output only. The IP allocated on the consumer network for the PSC forwarding rule. */
          address?: string;
          /** @description Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. */
          forwardingRule?: string;
          /** @description The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. */
          network?: string;
          /** @description Output only. The consumer project_id where the forwarding rule is created from. */
          projectID?: string;
          /** @description Output only. The PSC connection id of the forwarding rule connected to the service attachment. */
          pscConnectionID?: string;
        }[];
        /**
         * Format: int32
         * @description Output only. Redis memory size in GB for the entire cluster rounded up to the next integer.
         */
        sizeGb?: number;
        /** @description Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED */
        state?: string;
        /** @description Output only. Additional information about the current state of the cluster. */
        stateInfo?: {
          /** @description Describes ongoing update on the cluster when cluster state is UPDATING. */
          updateInfo?: {
            /**
             * Format: int32
             * @description Target number of replica nodes per shard.
             */
            targetReplicaCount?: number;
            /**
             * Format: int32
             * @description Target number of shards for redis cluster
             */
            targetShardCount?: number;
          };
        };
        /** @description Output only. System assigned, unique identifier for the cluster. */
        uid?: string;
      };
    };
  };
}
