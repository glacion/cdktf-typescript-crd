import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProbeV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesProbeV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesProbeV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.coreos.com/v1";
    kind?: "Probe";
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
    /** @description Specification of desired Ingress selection for target discovery by Prometheus. */
    spec: {
      /** @description Authorization section for this endpoint */
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
      /** @description BasicAuth allow an endpoint to authenticate over basic authentication. More info: https://prometheus.io/docs/operating/configuration/#endpoint */
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
      /** @description Secret to mount to read bearer token for scraping targets. The secret needs to be in the same namespace as the probe and accessible by the Prometheus Operator. */
      bearerTokenSecret?: {
        /** @description The key of the secret to select from.  Must be a valid secret key. */
        key: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;
        /** @description Specify whether the Secret or its key must be defined */
        optional?: boolean;
      };
      /** @description Interval at which targets are probed using the configured prober. If not specified Prometheus' global scrape interval is used. */
      interval?: string;
      /** @description The job name assigned to scraped metrics by default. */
      jobName?: string;
      /**
       * Format: int64
       * @description Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit.
       *      It requires Prometheus >= v2.47.0.
       */
      keepDroppedTargets?: number;
      /**
       * Format: int64
       * @description Per-scrape limit on number of labels that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelLimit?: number;
      /**
       * Format: int64
       * @description Per-scrape limit on length of labels name that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelNameLengthLimit?: number;
      /**
       * Format: int64
       * @description Per-scrape limit on length of labels value that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelValueLengthLimit?: number;
      /** @description MetricRelabelConfigs to apply to samples before ingestion. */
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
      /** @description The module to use for probing specifying how to probe the target. Example module configuring in the blackbox exporter: https://github.com/prometheus/blackbox_exporter/blob/master/example.yml */
      module?: string;
      /** @description OAuth2 for the URL. Only valid in Prometheus versions 2.27.0 and newer. */
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
      /** @description Specification for the prober to use for probing targets. The prober.URL parameter is required. Targets cannot be probed if left empty. */
      prober?: {
        /** @description Path to collect metrics from. Defaults to `/probe`. */
        path?: string;
        /** @description Optional ProxyURL. */
        proxyUrl?: string;
        /** @description HTTP scheme to use for scraping. `http` and `https` are the expected values unless you rewrite the `__scheme__` label via relabeling. If empty, Prometheus uses the default value `http`. */
        scheme?: string;
        /** @description Mandatory URL of the prober. */
        url: string;
      };
      /**
       * Format: int64
       * @description SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
       */
      sampleLimit?: number;
      /** @description Timeout for scraping metrics from the Prometheus exporter. If not specified, the Prometheus global scrape timeout is used. */
      scrapeTimeout?: string;
      /**
       * Format: int64
       * @description TargetLimit defines a limit on the number of scraped targets that will be accepted.
       */
      targetLimit?: number;
      /** @description Targets defines a set of static or dynamically discovered targets to probe. */
      targets?: {
        /** @description ingress defines the Ingress objects to probe and the relabeling configuration. If `staticConfig` is also defined, `staticConfig` takes precedence. */
        ingress?: {
          /** @description From which namespaces to select Ingress objects. */
          namespaceSelector?: {
            /** @description Boolean describing whether all namespaces are selected in contrast to a list restricting them. */
            any?: boolean;
            /** @description List of namespace names to select from. */
            matchNames?: string[];
          };
          /** @description RelabelConfigs to apply to the label set of the target before it gets scraped. The original ingress address is available via the `__tmp_prometheus_ingress_address` label. It can be used to customize the probed URL. The original scrape job's name is available via the `__tmp_prometheus_job_name` label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config */
          relabelingConfigs?: {
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
          /** @description Selector to select the Ingress objects. */
          selector?: {
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
        };
        /** @description staticConfig defines the static list of targets to probe and the relabeling configuration. If `ingress` is also defined, `staticConfig` takes precedence. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#static_config. */
        staticConfig?: {
          /** @description Labels assigned to all metrics scraped from the targets. */
          labels?: {
            [key: string]: string;
          };
          /** @description RelabelConfigs to apply to the label set of the targets before it gets scraped. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config */
          relabelingConfigs?: {
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
          /** @description The list of hosts to probe. */
          static?: string[];
        };
      };
      /** @description TLS configuration to use when scraping the endpoint. */
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
        /** @description Disable target certificate validation. */
        insecureSkipVerify?: boolean;
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
    };
  };
}
