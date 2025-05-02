import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPodMonitoringV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesPodMonitoringV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesPodMonitoringV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.googleapis.com/v1";
    kind?: "PodMonitoring";
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
    /** @description Specification of desired Pod selection for target discovery by
     *     Prometheus. */
    spec: {
      /** @description The endpoints to scrape on the selected pods. */
      endpoints: {
        /** @description Authorization is the HTTP authorization credentials for the targets. */
        authorization?: {
          /** @description Credentials uses the secret as the credentials (token) for the authentication header. */
          credentials?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description Type is the authentication type. Defaults to Bearer.
           *     Basic will cause an error, as the BasicAuth object should be used instead. */
          type?: string;
        };
        /** @description BasicAuth is the HTTP basic authentication credentials for the targets. */
        basicAuth?: {
          /** @description Password uses the secret as the BasicAuth password. */
          password?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description Username is the BasicAuth username. */
          username?: string;
        };
        /**
         * @description Interval at which to scrape metrics. Must be a valid Prometheus duration.
         * @default 1m
         */
        interval: string;
        /** @description Relabeling rules for metrics scraped from this endpoint. Relabeling rules that
         *     override protected target labels (project_id, location, cluster, namespace, job,
         *     instance, top_level_controller, top_level_controller_type, or __address__) are
         *     not permitted. The labelmap action is not permitted in general. */
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
        /** @description OAuth2 is the OAuth2 client credentials used to fetch a token for the targets. */
        oauth2?: {
          /** @description ClientID is the public identifier for the client. */
          clientID?: string;
          /** @description ClientSecret uses the secret as the client secret token. */
          clientSecret?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description EndpointParams are additional parameters to append to the token URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description ProxyURL is the HTTP proxy server to use to connect to the targets.
           *
           *
           *     Encoded passwords are not supported. */
          proxyUrl?: string;
          /** @description Scopes represents the scopes for the token request. */
          scopes?: string[];
          /** @description TLS configures the token request's TLS settings. */
          tlsConfig?: {
            /** @description SecretSelector references a secret from a secret provider e.g. Kubernetes Secret. Only one
             *     provider can be used at a time. */
            ca?: {
              /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
              secret?: {
                /** @description Key of the secret to select from. Must be a valid secret key. */
                key: string;
                /** @description Name of the secret to select from. */
                name: string;
              };
            };
            /** @description Cert uses the secret as the certificate for client authentication to the server. */
            cert?: {
              /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
              secret?: {
                /** @description Key of the secret to select from. Must be a valid secret key. */
                key: string;
                /** @description Name of the secret to select from. */
                name: string;
              };
            };
            /** @description InsecureSkipVerify disables target certificate validation. */
            insecureSkipVerify?: boolean;
            /** @description Key uses the secret as the private key for client authentication to the server. */
            key?: {
              /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
              secret?: {
                /** @description Key of the secret to select from. Must be a valid secret key. */
                key: string;
                /** @description Name of the secret to select from. */
                name: string;
              };
            };
            /** @description MaxVersion is the maximum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1),
             *     TLS12 (TLS 1.2), TLS13 (TLS 1.3).
             *
             *
             *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
             *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
            maxVersion?: string;
            /** @description MinVersion is the minimum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1),
             *     TLS12 (TLS 1.2), TLS13 (TLS 1.3).
             *
             *
             *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
             *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
            minVersion?: string;
            /** @description ServerName is used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description TokenURL is the URL to fetch the token from. */
          tokenURL?: string;
        };
        /** @description HTTP GET params to use when scraping. */
        params?: {
          [key: string]: string[];
        };
        /** @description HTTP path to scrape metrics from. Defaults to "/metrics". */
        path?: string;
        /** @description Name or number of the port to scrape.
         *     The container metadata label is only populated if the port is referenced by name
         *     because port numbers are not unique across containers. */
        port: number | string;
        /** @description ProxyURL is the HTTP proxy server to use to connect to the targets.
         *
         *
         *     Encoded passwords are not supported. */
        proxyUrl?: string;
        /** @description Protocol scheme to use to scrape. */
        scheme?: string;
        /** @description Timeout for metrics scrapes. Must be a valid Prometheus duration.
         *     Must not be larger than the scrape interval. */
        timeout?: string;
        /** @description TLS configures the scrape request's TLS settings. */
        tls?: {
          /** @description SecretSelector references a secret from a secret provider e.g. Kubernetes Secret. Only one
           *     provider can be used at a time. */
          ca?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description Cert uses the secret as the certificate for client authentication to the server. */
          cert?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description InsecureSkipVerify disables target certificate validation. */
          insecureSkipVerify?: boolean;
          /** @description Key uses the secret as the private key for client authentication to the server. */
          key?: {
            /** @description Secret represents reference to a given key from certain Secret in a given namespace. */
            secret?: {
              /** @description Key of the secret to select from. Must be a valid secret key. */
              key: string;
              /** @description Name of the secret to select from. */
              name: string;
            };
          };
          /** @description MaxVersion is the maximum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1),
           *     TLS12 (TLS 1.2), TLS13 (TLS 1.3).
           *
           *
           *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
           *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
          maxVersion?: string;
          /** @description MinVersion is the minimum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1),
           *     TLS12 (TLS 1.2), TLS13 (TLS 1.3).
           *
           *
           *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
           *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
          minVersion?: string;
          /** @description ServerName is used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description FilterRunning will drop any pods that are in the "Failed" or "Succeeded"
       *     pod lifecycle.
       *     See: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase */
      filterRunning?: boolean;
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
      /** @description Label selector that specifies which pods are selected for this monitoring
       *     configuration. */
      selector: {
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
      /** @description Labels to add to the Prometheus target for discovered endpoints.
       *     The `instance` label is always set to `<pod_name>:<port>` or `<node_name>:<port>`
       *     if the scraped pod is controlled by a DaemonSet. */
      targetLabels?: {
        /** @description Labels to transfer from the Kubernetes Pod to Prometheus target labels.
         *     Mappings are applied in order. */
        fromPod?: {
          /** @description Kubernetes resource label to remap. */
          from: string;
          /** @description Remapped Prometheus target label.
           *     Defaults to the same name as `From`. */
          to?: string;
        }[];
        /** @description Pod metadata labels that are set on all scraped targets.
         *     Permitted keys are `pod`, `container`, and `node` for PodMonitoring and
         *     `pod`, `container`, `node`, and `namespace` for ClusterPodMonitoring. The `container`
         *     label is only populated if the scrape port is referenced by name.
         *     Defaults to [pod, container, top_level_controller_name, top_level_controller_type] for
         *     PodMonitoring and [namespace, pod, container, top_level_controller_name, top_level_controller_type]
         *     for ClusterPodMonitoring.
         *     If set to null, it will be interpreted as the empty list for PodMonitoring
         *     and to [namespace] for ClusterPodMonitoring. This is for backwards-compatibility
         *     only. */
        metadata?: string[];
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
      /** @description Represents the latest available observations of target state for each ScrapeEndpoint. */
      endpointStatuses?: {
        /**
         * Format: int64
         * @description Total number of active targets.
         */
        activeTargets?: number;
        /** @description Fraction of collectors included in status, bounded [0,1].
         *     Ideally, this should always be 1. Anything less can
         *     be considered a problem and should be investigated. */
        collectorsFraction?: string;
        /**
         * Format: date-time
         * @description Last time this status was updated.
         */
        lastUpdateTime?: string;
        /** @description The name of the ScrapeEndpoint. */
        name: string;
        /** @description A fixed sample of targets grouped by error type. */
        sampleGroups?: {
          /**
           * Format: int32
           * @description Total count of similar errors.
           */
          count?: number;
          /** @description Targets emitting the error message. */
          sampleTargets?: {
            /** @description Health status. */
            health?: string;
            /** @description The label set, keys and values, of the target. */
            labels?: {
              [key: string]: string;
            };
            /** @description Error message. */
            lastError?: string;
            /** @description Scrape duration in seconds. */
            lastScrapeDurationSeconds?: string;
          }[];
        }[];
        /**
         * Format: int64
         * @description Total number of active, unhealthy targets.
         */
        unhealthyTargets?: number;
      }[];
      /**
       * Format: int64
       * @description The generation observed by the controller.
       */
      observedGeneration?: number;
    };
  };
}
