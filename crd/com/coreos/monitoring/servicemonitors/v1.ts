import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceMonitorV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesServiceMonitorV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.coreos.com/v1", kind: "ServiceMonitor", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesServiceMonitorV1Config extends ManifestConfig {
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
    /** @description ServiceMonitor defines monitoring for a set of services. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description Specification of desired Service selection for target discovery by Prometheus. */
      spec: {
        /** @description `attachMetadata` defines additional metadata which is added to the discovered targets.
         *      It requires Prometheus >= v2.37.0. */
        attachMetadata?: {
          /** @description When set to true, Prometheus must have the `get` permission on the `Nodes` objects. */
          node?: boolean;
        };
        /** @description List of endpoints part of this ServiceMonitor. */
        endpoints?: {
          /** @description `authorization` configures the Authorization header credentials to use when scraping the target.
           *      Cannot be set at the same time as `basicAuth`, or `oauth2`. */
          authorization?: {
            /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
            credentials?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description Defines the authentication type. The value is case-insensitive.
             *      "Basic" is not a supported value.
             *      Default: "Bearer" */
            type?: string;
          };
          /** @description `basicAuth` configures the Basic Authentication credentials to use when scraping the target.
           *      Cannot be set at the same time as `authorization`, or `oauth2`. */
          basicAuth?: {
            /** @description `password` specifies a key of a Secret containing the password for authentication. */
            password?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description `username` specifies a key of a Secret containing the username for authentication. */
            username?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description File to read bearer token for scraping the target.
           *      Deprecated: use `authorization` instead. */
          bearerTokenFile?: string;
          /** @description `bearerTokenSecret` specifies a key of a Secret containing the bearer token for scraping targets. The secret needs to be in the same namespace as the ServiceMonitor object and readable by the Prometheus Operator.
           *      Deprecated: use `authorization` instead. */
          bearerTokenSecret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `enableHttp2` can be used to disable HTTP2 when scraping the target. */
          enableHttp2?: boolean;
          /** @description When true, the pods which are not running (e.g. either in Failed or Succeeded state) are dropped during the target discovery.
           *      If unset, the filtering is enabled.
           *      More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase */
          filterRunning?: boolean;
          /** @description `followRedirects` defines whether the scrape requests should follow HTTP 3xx redirects. */
          followRedirects?: boolean;
          /** @description When true, `honorLabels` preserves the metric's labels when they collide with the target's labels. */
          honorLabels?: boolean;
          /** @description `honorTimestamps` controls whether Prometheus preserves the timestamps when exposed by the target. */
          honorTimestamps?: boolean;
          /** @description Interval at which Prometheus scrapes the metrics from the target.
           *      If empty, Prometheus uses the global scrape interval. */
          interval?: string;
          /** @description `metricRelabelings` configures the relabeling rules to apply to the samples before ingestion. */
          metricRelabelings?: {
            /**
             * @description Action to perform based on the regex matching.
             *      `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0. `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
             *      Default: "Replace"
             * @default replace
             * @enum {string}
             */
            action:
              | "replace"
              | "Replace"
              | "keep"
              | "Keep"
              | "drop"
              | "Drop"
              | "hashmod"
              | "HashMod"
              | "labelmap"
              | "LabelMap"
              | "labeldrop"
              | "LabelDrop"
              | "labelkeep"
              | "LabelKeep"
              | "lowercase"
              | "Lowercase"
              | "uppercase"
              | "Uppercase"
              | "keepequal"
              | "KeepEqual"
              | "dropequal"
              | "DropEqual";
            /**
             * Format: int64
             * @description Modulus to take of the hash of the source label values.
             *      Only applicable when the action is `HashMod`.
             */
            modulus?: number;
            /** @description Regular expression against which the extracted value is matched. */
            regex?: string;
            /** @description Replacement value against which a Replace action is performed if the regular expression matches.
             *      Regex capture groups are available. */
            replacement?: string;
            /** @description Separator is the string between concatenated SourceLabels. */
            separator?: string;
            /** @description The source labels select values from existing labels. Their content is concatenated using the configured Separator and matched against the configured regular expression. */
            sourceLabels?: string[];
            /** @description Label to which the resulting string is written in a replacement.
             *      It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`, `KeepEqual` and `DropEqual` actions.
             *      Regex capture groups are available. */
            targetLabel?: string;
          }[];
          /** @description `oauth2` configures the OAuth2 settings to use when scraping the target.
           *      It requires Prometheus >= 2.27.0.
           *      Cannot be set at the same time as `authorization`, or `basicAuth`. */
          oauth2?: {
            /** @description `clientId` specifies a key of a Secret or ConfigMap containing the OAuth2 client's ID. */
            clientId: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
            /** @description `clientSecret` specifies a key of a Secret containing the OAuth2 client's secret. */
            clientSecret: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description `endpointParams` configures the HTTP parameters to append to the token URL. */
            endpointParams?: {
              [key: string]: string;
            };
            /** @description `scopes` defines the OAuth2 scopes used for the token request. */
            scopes?: string[];
            /** @description `tokenURL` configures the URL to fetch the token from. */
            tokenUrl: string;
          };
          /** @description params define optional HTTP URL parameters. */
          params?: {
            [key: string]: string[];
          };
          /** @description HTTP path from which to scrape for metrics.
           *      If empty, Prometheus uses the default value (e.g. `/metrics`). */
          path?: string;
          /** @description Name of the Service port which this endpoint refers to.
           *      It takes precedence over `targetPort`. */
          port?: string;
          /** @description `proxyURL` configures the HTTP Proxy URL (e.g. "http://proxyserver:2195") to go through when scraping the target. */
          proxyUrl?: string;
          /** @description `relabelings` configures the relabeling rules to apply the target's metadata labels.
           *      The Operator automatically adds relabelings for a few standard Kubernetes fields.
           *      The original scrape job's name is available via the `__tmp_prometheus_job_name` label.
           *      More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config */
          relabelings?: {
            /**
             * @description Action to perform based on the regex matching.
             *      `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0. `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
             *      Default: "Replace"
             * @default replace
             * @enum {string}
             */
            action:
              | "replace"
              | "Replace"
              | "keep"
              | "Keep"
              | "drop"
              | "Drop"
              | "hashmod"
              | "HashMod"
              | "labelmap"
              | "LabelMap"
              | "labeldrop"
              | "LabelDrop"
              | "labelkeep"
              | "LabelKeep"
              | "lowercase"
              | "Lowercase"
              | "uppercase"
              | "Uppercase"
              | "keepequal"
              | "KeepEqual"
              | "dropequal"
              | "DropEqual";
            /**
             * Format: int64
             * @description Modulus to take of the hash of the source label values.
             *      Only applicable when the action is `HashMod`.
             */
            modulus?: number;
            /** @description Regular expression against which the extracted value is matched. */
            regex?: string;
            /** @description Replacement value against which a Replace action is performed if the regular expression matches.
             *      Regex capture groups are available. */
            replacement?: string;
            /** @description Separator is the string between concatenated SourceLabels. */
            separator?: string;
            /** @description The source labels select values from existing labels. Their content is concatenated using the configured Separator and matched against the configured regular expression. */
            sourceLabels?: string[];
            /** @description Label to which the resulting string is written in a replacement.
             *      It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`, `KeepEqual` and `DropEqual` actions.
             *      Regex capture groups are available. */
            targetLabel?: string;
          }[];
          /**
           * @description HTTP scheme to use for scraping.
           *      `http` and `https` are the expected values unless you rewrite the `__scheme__` label via relabeling.
           *      If empty, Prometheus uses the default value `http`.
           * @enum {string}
           */
          scheme?: "http" | "https";
          /** @description Timeout after which Prometheus considers the scrape to be failed.
           *      If empty, Prometheus uses the global scrape timeout unless it is less than the target's scrape interval value in which the latter is used. */
          scrapeTimeout?: string;
          /** @description Name or number of the target port of the `Pod` object behind the Service, the port must be specified with container port property.
           *      Deprecated: use `port` instead. */
          targetPort?: number | string;
          /** @description TLS configuration to use when scraping the target. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
            /** @description Path to the CA cert in the Prometheus container to use for the targets. */
            caFile?: string;
            /** @description Client certificate to present when doing client-authentication. */
            cert?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
            /** @description Path to the client cert file in the Prometheus container for the targets. */
            certFile?: string;
            /** @description Disable target certificate validation. */
            insecureSkipVerify?: boolean;
            /** @description Path to the client key file in the Prometheus container for the targets. */
            keyFile?: string;
            /** @description Secret containing the client key file for the targets. */
            keySecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `trackTimestampsStaleness` defines whether Prometheus tracks staleness of the metrics that have an explicit timestamp present in scraped data. Has no effect if `honorTimestamps` is false.
           *      It requires Prometheus >= v2.48.0. */
          trackTimestampsStaleness?: boolean;
        }[];
        /** @description `jobLabel` selects the label from the associated Kubernetes `Service` object which will be used as the `job` label for all metrics.
         *      For example if `jobLabel` is set to `foo` and the Kubernetes `Service` object is labeled with `foo: bar`, then Prometheus adds the `job="bar"` label to all ingested metrics.
         *      If the value of this field is empty or if the label doesn't exist for the given Service, the `job` label of the metrics defaults to the name of the associated Kubernetes `Service`. */
        jobLabel?: string;
        /**
         * Format: int64
         * @description Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit.
         *      It requires Prometheus >= v2.47.0.
         */
        keepDroppedTargets?: number;
        /**
         * Format: int64
         * @description Per-scrape limit on number of labels that will be accepted for a sample.
         *      It requires Prometheus >= v2.27.0.
         */
        labelLimit?: number;
        /**
         * Format: int64
         * @description Per-scrape limit on length of labels name that will be accepted for a sample.
         *      It requires Prometheus >= v2.27.0.
         */
        labelNameLengthLimit?: number;
        /**
         * Format: int64
         * @description Per-scrape limit on length of labels value that will be accepted for a sample.
         *      It requires Prometheus >= v2.27.0.
         */
        labelValueLengthLimit?: number;
        /** @description Selector to select which namespaces the Kubernetes `Endpoints` objects are discovered from. */
        namespaceSelector?: {
          /** @description Boolean describing whether all namespaces are selected in contrast to a list restricting them. */
          any?: boolean;
          /** @description List of namespace names to select from. */
          matchNames?: string[];
        };
        /** @description `podTargetLabels` defines the labels which are transferred from the associated Kubernetes `Pod` object onto the ingested metrics. */
        podTargetLabels?: string[];
        /**
         * Format: int64
         * @description `sampleLimit` defines a per-scrape limit on the number of scraped samples that will be accepted.
         */
        sampleLimit?: number;
        /** @description Label selector to select the Kubernetes `Endpoints` objects. */
        selector: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
        /** @description `targetLabels` defines the labels which are transferred from the associated Kubernetes `Service` object onto the ingested metrics. */
        targetLabels?: string[];
        /**
         * Format: int64
         * @description `targetLimit` defines a limit on the number of scraped targets that will be accepted.
         */
        targetLimit?: number;
      };
    };
  };
}
