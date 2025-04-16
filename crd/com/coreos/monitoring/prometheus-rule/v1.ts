import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPrometheusRuleV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPrometheusRuleV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPrometheusRuleV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.coreos.com/v1";
    kind?: "PrometheusRule";
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
    /** @description Specification of desired alerting rule definitions for Prometheus. */
    spec: {
      /** @description Content of Prometheus rule file */
      groups?: {
        /** @description Interval determines how often rules in the group are evaluated. */
        interval?: string;
        /** @description Limit the number of alerts an alerting rule and series a recording rule can produce. Limit is supported starting with Prometheus >= 2.31 and Thanos Ruler >= 0.24. */
        limit?: number;
        /** @description Name of the rule group. */
        name: string;
        /** @description PartialResponseStrategy is only used by ThanosRuler and will be ignored by Prometheus instances. More info: https://github.com/thanos-io/thanos/blob/main/docs/components/rule.md#partial-response */
        partial_response_strategy?: string;
        /** @description List of alerting and recording rules. */
        rules?: {
          /** @description Name of the alert. Must be a valid label value. Only one of `record` and `alert` must be set. */
          alert?: string;
          /** @description Annotations to add to each alert. Only valid for alerting rules. */
          annotations?: {
            [key: string]: string;
          };
          /** @description PromQL expression to evaluate. */
          expr: number | string;
          /** @description Alerts are considered firing once they have been returned for this long. */
          for?: string;
          /** @description KeepFiringFor defines how long an alert will continue firing after the condition that triggered it has cleared. */
          keep_firing_for?: string;
          /** @description Labels to add or overwrite. */
          labels?: {
            [key: string]: string;
          };
          /** @description Name of the time series to output to. Must be a valid metric name. Only one of `record` and `alert` must be set. */
          record?: string;
        }[];
      }[];
    };
  };
}
