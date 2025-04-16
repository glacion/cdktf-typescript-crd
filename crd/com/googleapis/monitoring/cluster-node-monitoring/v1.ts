import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterNodeMonitoringV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesClusterNodeMonitoringV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesClusterNodeMonitoringV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.googleapis.com/v1";
    kind?: "ClusterNodeMonitoring";
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
    /** @description Specification of desired node selection for target discovery by
     *     Prometheus. */
    spec: {
      /** @description The endpoints to scrape on the selected nodes. */
      endpoints: {
        /**
         * @description Interval at which to scrape metrics. Must be a valid Prometheus duration.
         * @default 1m
         */
        interval: string;
        /** @description Relabeling rules for metrics scraped from this endpoint. Relabeling rules that
         *     override protected target labels (project_id, location, cluster, namespace, job,
         *     instance, or __address__) are not permitted. The labelmap action is not permitted
         *     in general. */
        metricRelabeling?: {
          /** @description Action to perform based on regex matching. Defaults to 'replace'. */
          action?: string;
          /**
           * Format: int64
           * @description Modulus to take of the hash of the source label values.
           */
          modulus?: number;
          /** @description Regular expression against which the extracted value is matched. Defaults to '(.*)'. */
          regex?: string;
          /** @description Replacement value against which a regex replace is performed if the
           *     regular expression matches. Regex capture groups are available. Defaults to '$1'. */
          replacement?: string;
          /** @description Separator placed between concatenated source label values. Defaults to ';'. */
          separator?: string;
          /** @description The source labels select values from existing labels. Their content is concatenated
           *     using the configured separator and matched against the configured regular expression
           *     for the replace, keep, and drop actions. */
          sourceLabels?: string[];
          /** @description Label to which the resulting value is written in a replace action.
           *     It is mandatory for replace actions. Regex capture groups are available. */
          targetLabel?: string;
        }[];
        /** @description HTTP GET params to use when scraping. */
        params?: {
          [key: string]: string[];
        };
        /** @description HTTP path to scrape metrics from. Defaults to "/metrics". */
        path?: string;
        /** @description Protocol scheme to use to scrape. */
        scheme?: string;
        /** @description Timeout for metrics scrapes. Must be a valid Prometheus duration.
         *     Must not be larger then the scrape interval. */
        timeout?: string;
        /** @description TLS configures the scrape request's TLS settings. */
        tls?: {
          /** @description InsecureSkipVerify disables target certificate validation. */
          insecureSkipVerify?: boolean;
        };
      }[];
      /** @description Limits to apply at scrape time. */
      limits?: {
        /**
         * Format: int64
         * @description Maximum label name length.
         *     Uses Prometheus default if left unspecified.
         */
        labelNameLength?: number;
        /**
         * Format: int64
         * @description Maximum label value length.
         *     Uses Prometheus default if left unspecified.
         */
        labelValueLength?: number;
        /**
         * Format: int64
         * @description Maximum number of labels accepted for a single sample.
         *     Uses Prometheus default if left unspecified.
         */
        labels?: number;
        /**
         * Format: int64
         * @description Maximum number of samples accepted within a single scrape.
         *     Uses Prometheus default if left unspecified.
         */
        samples?: number;
      };
      /** @description Label selector that specifies which nodes are selected for this monitoring
       *     configuration. If left empty all nodes are selected. */
      selector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /** @description operator represents a key's relationship to a set of values.
           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
          operator: string;
          /** @description values is an array of string values. If the operator is In or NotIn,
           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
           *     the values array must be empty. This array is replaced during a strategic
           *     merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
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
}
