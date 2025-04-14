import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSpannerInstanceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSpannerInstanceV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "spanner.cnrm.cloud.google.com/v1beta1", kind: "SpannerInstance", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSpannerInstanceV1beta1Config extends ManifestConfig {
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
      /** @description Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node_count and processing_units are treated as OUTPUT_ONLY fields and reflect the current compute capacity allocated to the instance. */
      autoscalingConfig?: {
        /** @description Required. Autoscaling limits for an instance. */
        autoscalingLimits?: {
          /**
           * Format: int32
           * @description Maximum number of nodes allocated to the instance. If set, this number should be greater than or equal to min_nodes.
           */
          maxNodes?: number;
          /**
           * Format: int32
           * @description Maximum number of processing units allocated to the instance. If set, this number should be multiples of 1000 and be greater than or equal to min_processing_units.
           */
          maxProcessingUnits?: number;
          /**
           * Format: int32
           * @description Minimum number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.
           */
          minNodes?: number;
          /**
           * Format: int32
           * @description Minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.
           */
          minProcessingUnits?: number;
        };
        /** @description Required. The autoscaling targets for an instance. */
        autoscalingTargets?: {
          /**
           * Format: int32
           * @description Required. The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
           */
          highPriorityCpuUtilizationPercent?: number;
          /**
           * Format: int32
           * @description Required. The target storage utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 100] inclusive.
           */
          storageUtilizationPercent?: number;
        };
      };
      /** @description Immutable. The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. It determines where your data is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc. In order to obtain a valid list please consult the [Configuration section of the docs](https://cloud.google.com/spanner/docs/instances). */
      config: string;
      /** @description The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length. */
      displayName: string;
      /** @description Optional. The `Edition` of the current instance. Currently accepted values are EDITION_UNSPECIFIED, STANDARD, ENTERPRISE, ENTERPRISE_PLUS */
      edition?: string;
      /** Format: int32 */
      numNodes?: number;
      /** Format: int32 */
      processingUnits?: number;
      /** @description The SpannerInstance name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
