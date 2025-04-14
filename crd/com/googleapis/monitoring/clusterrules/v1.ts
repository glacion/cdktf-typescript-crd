import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterRulesV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterRulesV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.googleapis.com/v1", kind: "ClusterRules", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterRulesV1Config extends ManifestConfig {
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
  manifest: {
    /** @description ClusterRules defines Prometheus alerting and recording rules that are scoped
     *     to the current cluster. Only metric data from the current cluster is processed
     *     and all rule results have their project_id and cluster label preserved
     *     for query processing.
     *     If the location label is not preserved by the rule, it defaults to the cluster's location. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description Specification of rules to record and alert on. */
      spec: {
        /** @description A list of Prometheus rule groups. */
        groups: {
          /** @description The interval at which to evaluate the rules. Must be a valid Prometheus duration. */
          interval: string;
          /** @description The name of the rule group. */
          name: string;
          /** @description A list of rules that are executed sequentially as part of this group. */
          rules: {
            /** @description Name of the alert to evaluate the expression as.
             *     Only one of `record` and `alert` must be set. */
            alert?: string;
            /** @description A set of annotations to attach to alerts produced by the query expression.
             *     Only valid if `alert` is set. */
            annotations?: {
              [key: string]: string;
            };
            /** @description The PromQL expression to evaluate. */
            expr: string;
            /** @description The duration to wait before a firing alert produced by this rule is sent to Alertmanager.
             *     Only valid if `alert` is set. */
            for?: string;
            /** @description A set of labels to attach to the result of the query expression. */
            labels?: {
              [key: string]: string;
            };
            /** @description Record the result of the expression to this metric name.
             *     Only one of `record` and `alert` must be set. */
            record?: string;
          }[];
        }[];
      };
      /** @description Most recently observed status of the resource. */
      status?: {
        /** @description Represents the latest available observations of a podmonitor's current state. */
        conditions?: {
          /**
           * Format: date-time
           * @description Last time the condition transitioned from one status to another.
           */
          lastTransitionTime?: string;
          /**
           * Format: date-time
           * @description The last time this condition was updated.
           */
          lastUpdateTime?: string;
          /** @description A human-readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description MonitoringConditionType is the type of MonitoringCondition. */
          type: string;
        }[];
        /**
         * Format: int64
         * @description The generation observed by the controller.
         */
        observedGeneration?: number;
      };
    };
  };
}
