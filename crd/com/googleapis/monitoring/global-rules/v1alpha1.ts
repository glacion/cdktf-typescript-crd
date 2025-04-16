import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGlobalRulesV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGlobalRulesV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGlobalRulesV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.googleapis.com/v1alpha1";
    kind?: "GlobalRules";
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
    status?: Record<string, never>;
  };
}
