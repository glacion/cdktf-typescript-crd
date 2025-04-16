import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesScaledObjectV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesScaledObjectV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesScaledObjectV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "keda.sh/v1alpha1";
    kind?: "ScaledObject";
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
    /** @description ScaledObjectSpec is the spec for a ScaledObject resource */
    spec: {
      /** @description AdvancedConfig specifies advance scaling options */
      advanced?: {
        /** @description HorizontalPodAutoscalerConfig specifies horizontal scale config */
        horizontalPodAutoscalerConfig?: {
          /** @description HorizontalPodAutoscalerBehavior configures the scaling behavior of the target
           *     in both Up and Down directions (scaleUp and scaleDown fields respectively). */
          behavior?: {
            /** @description scaleDown is scaling policy for scaling Down.
             *     If not set, the default value is to allow to scale down to minReplicas pods, with a
             *     300 second stabilization window (i.e., the highest recommendation for
             *     the last 300sec is used). */
            scaleDown?: {
              /** @description policies is a list of potential scaling polices which can be used during scaling.
               *     At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
              policies?: {
                /**
                 * Format: int32
                 * @description periodSeconds specifies the window of time for which the policy should hold true.
                 *     PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                 */
                periodSeconds: number;
                /** @description type is used to specify the scaling policy. */
                type: string;
                /**
                 * Format: int32
                 * @description value contains the amount of change which is permitted by the policy.
                 *     It must be greater than zero
                 */
                value: number;
              }[];
              /** @description selectPolicy is used to specify which policy should be used.
               *     If not set, the default value Max is used. */
              selectPolicy?: string;
              /**
               * Format: int32
               * @description stabilizationWindowSeconds is the number of seconds for which past recommendations should be
               *     considered while scaling up or scaling down.
               *     StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour).
               *     If not set, use the default values:
               *     - For scale up: 0 (i.e. no stabilization is done).
               *     - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
               */
              stabilizationWindowSeconds?: number;
            };
            /** @description scaleUp is scaling policy for scaling Up.
             *     If not set, the default value is the higher of:
             *       * increase no more than 4 pods per 60 seconds
             *       * double the number of pods per 60 seconds
             *     No stabilization is used. */
            scaleUp?: {
              /** @description policies is a list of potential scaling polices which can be used during scaling.
               *     At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
              policies?: {
                /**
                 * Format: int32
                 * @description periodSeconds specifies the window of time for which the policy should hold true.
                 *     PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                 */
                periodSeconds: number;
                /** @description type is used to specify the scaling policy. */
                type: string;
                /**
                 * Format: int32
                 * @description value contains the amount of change which is permitted by the policy.
                 *     It must be greater than zero
                 */
                value: number;
              }[];
              /** @description selectPolicy is used to specify which policy should be used.
               *     If not set, the default value Max is used. */
              selectPolicy?: string;
              /**
               * Format: int32
               * @description stabilizationWindowSeconds is the number of seconds for which past recommendations should be
               *     considered while scaling up or scaling down.
               *     StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour).
               *     If not set, use the default values:
               *     - For scale up: 0 (i.e. no stabilization is done).
               *     - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
               */
              stabilizationWindowSeconds?: number;
            };
          };
          name?: string;
        };
        restoreToOriginalReplicaCount?: boolean;
        /** @description ScalingModifiers describes advanced scaling logic options like formula */
        scalingModifiers?: {
          activationTarget?: string;
          formula?: string;
          /** @description MetricTargetType specifies the type of metric being targeted, and should be either
           *     "Value", "AverageValue", or "Utilization" */
          metricType?: string;
          target?: string;
        };
      };
      /** Format: int32 */
      cooldownPeriod?: number;
      /** @description Fallback is the spec for fallback options */
      fallback?: {
        /** Format: int32 */
        failureThreshold: number;
        /** Format: int32 */
        replicas: number;
      };
      /** Format: int32 */
      idleReplicaCount?: number;
      /** Format: int32 */
      initialCooldownPeriod?: number;
      /** Format: int32 */
      maxReplicaCount?: number;
      /** Format: int32 */
      minReplicaCount?: number;
      /** Format: int32 */
      pollingInterval?: number;
      /** @description ScaleTarget holds the reference to the scale target Object */
      scaleTargetRef: {
        apiVersion?: string;
        envSourceContainerName?: string;
        kind?: string;
        name: string;
      };
      triggers: {
        /** @description AuthenticationRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that
         *     is used to authenticate the scaler with the environment */
        authenticationRef?: {
          /** @description Kind of the resource being referred to. Defaults to TriggerAuthentication. */
          kind?: string;
          name: string;
        };
        metadata: {
          [key: string]: string;
        };
        /** @description MetricTargetType specifies the type of metric being targeted, and should be either
         *     "Value", "AverageValue", or "Utilization" */
        metricType?: string;
        name?: string;
        type: string;
        useCachedMetrics?: boolean;
      }[];
    };
    /** @description ScaledObjectStatus is the status for a ScaledObject resource */
    status?: {
      authenticationsTypes?: string;
      compositeScalerName?: string;
      /** @description Conditions an array representation to store multiple Conditions */
      conditions?: {
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type of condition */
        type: string;
      }[];
      externalMetricNames?: string[];
      health?: {
        [key: string]: {
          /** Format: int32 */
          numberOfFailures?: number;
          /** @description HealthStatusType is an indication of whether the health status is happy or failing */
          status?: string;
        };
      };
      hpaName?: string;
      /** Format: date-time */
      lastActiveTime?: string;
      /** Format: int32 */
      originalReplicaCount?: number;
      /** Format: int32 */
      pausedReplicaCount?: number;
      resourceMetricNames?: string[];
      /** @description GroupVersionKindResource provides unified structure for schema.GroupVersionKind and Resource */
      scaleTargetGVKR?: {
        group: string;
        kind: string;
        resource: string;
        version: string;
      };
      scaleTargetKind?: string;
      triggersTypes?: string;
    };
  };
}
