import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesManagedKafkaClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesManagedKafkaClusterV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "managedkafka.cnrm.cloud.google.com/v1beta1", kind: "ManagedKafkaCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesManagedKafkaClusterV1beta1Config extends ManifestConfig {
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
  };
}
