import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAlloyDBInstanceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAlloyDBInstanceV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "alloydb.cnrm.cloud.google.com/v1beta1", kind: "AlloyDBInstance", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAlloyDBInstanceV1beta1Config extends ManifestConfig {
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
      /** @description Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. */
      annotations?: {
        [key: string]: string;
      };
      /** @description Availability type of an Instance. If empty, defaults to REGIONAL for primary instances.
       *
       *     For read pools, availabilityType is always UNSPECIFIED. Instances in the
       *     read pools are evenly distributed across available zones within the region
       *     (i.e. read pools with more than one node will have a node in at least two zones).
       *     Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. */
      availabilityType?: string;
      /** @description The AlloyDBInstance cluster that this resource belongs to. */
      clusterRef: {
        /** @description If provided must be in the format `projects/[projectId]/locations/[location]/clusters/[clusterId]`. */
        external?: string;
        /** @description The `metadata.name` field of a `AlloyDBCluster` resource. */
        name?: string;
        /** @description The `metadata.namespace` field of a `AlloyDBCluster` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary. */
      databaseFlags?: {
        [key: string]: string;
      };
      /** @description User-settable and human-readable display name for the Instance. */
      displayName?: string;
      /** @description The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. */
      gceZone?: string;
      /** @description Not recommended. We recommend that you use `instanceTypeRef` instead. The type of the instance. Possible values: [PRIMARY, READ_POOL, SECONDARY] */
      instanceType?: string;
      /** @description The type of instance.
       *     Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]
       *
       *     For PRIMARY and SECONDARY instances, set the value to refer to the name of the associated cluster.
       *     This is recommended because the instance type of primary and secondary instances is tied to the cluster type of the associated cluster.
       *     If the secondary cluster is promoted to primary cluster, then the associated secondary instance also becomes primary instance.
       *     Example:
       *     instanceTypeRef:
       *       name: clusterName
       *     For instances of type READ_POOL, set the value using external keyword.
       *     Example:
       *     instanceTypeRef:
       *       external: READ_POOL
       *     If the instance type is SECONDARY, the delete instance operation does not delete the secondary instance but abandons it instead.
       *     Use deletionPolicy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance. */
      instanceTypeRef?: {
        /** @description The type of instance. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"] */
        external?: string;
        /** @description The `metadata.name` field of a `AlloyDBCluster` resource. */
        name?: string;
        /** @description The `metadata.namespace` field of a `AlloyDBCluster` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Configurations for the machines that host the underlying database engine. */
      machineConfig?: {
        /**
         * Format: int32
         * @description The number of CPU's in the VM instance.
         */
        cpuCount?: number;
      };
      /** @description Instance level network configuration. */
      networkConfig?: {
        /** @description Optional. A list of external network authorized to access this instance. This field is only allowed to be set when 'enablePublicIp' is set to true. */
        authorizedExternalNetworks?: {
          /** @description CIDR range for one authorzied network of the instance. */
          cidrRange?: string;
        }[];
        /** @description Optional. Enabling an outbound public IP address to support a database server sending requests out into the internet. */
        enableOutboundPublicIp?: boolean;
        /** @description Optional. Enabling public ip for the instance. If a user wishes to disable this, please also clear the list of the authorized external networks set on the same instance. */
        enablePublicIp?: boolean;
      };
      /** @description Read pool specific config. If the instance type is READ_POOL, this configuration must be provided. */
      readPoolConfig?: {
        /**
         * Format: int32
         * @description Read capacity, i.e. number of nodes in a read pool instance.
         */
        nodeCount?: number;
      };
      /** @description Optional. The instanceId of the resource. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
