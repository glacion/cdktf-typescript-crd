import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRedisClusterV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesRedisClusterV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "redis.cnrm.cloud.google.com/v1alpha1", kind: "RedisCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesRedisClusterV1alpha1Config extends ManifestConfig {
  manifest: {
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
  };
}
