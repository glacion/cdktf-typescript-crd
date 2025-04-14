import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesScrapeConfigV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesScrapeConfigV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.coreos.com/v1alpha1", kind: "ScrapeConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesScrapeConfigV1alpha1Config extends ManifestConfig {
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
    /** @description ScrapeConfig defines a namespaced Prometheus scrape_config to be aggregated across multiple namespaces into the Prometheus configuration. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description ScrapeConfigSpec is a specification of the desired configuration for a scrape configuration. */
      spec: {
        /** @description Authorization header to use on every scrape request. */
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
        /** @description AzureSDConfigs defines a list of Azure service discovery configurations. */
        azureSDConfigs?: {
          /**
           * @description # The authentication method, either OAuth or ManagedIdentity. See https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview
           * @enum {string}
           */
          authenticationMethod?: "OAuth" | "ManagedIdentity";
          /** @description Optional client ID. Only required with the OAuth authentication method. */
          clientID?: string;
          /** @description Optional client secret. Only required with the OAuth authentication method. */
          clientSecret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The Azure environment. */
          environment?: string;
          /** @description The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. */
          port?: number;
          /** @description RefreshInterval configures the refresh interval at which Prometheus will re-read the instance list. */
          refreshInterval?: string;
          /** @description Optional resource group name. Limits discovery to this resource group. */
          resourceGroup?: string;
          /** @description The subscription ID. Always required. */
          subscriptionID: string;
          /** @description Optional tenant ID. Only required with the OAuth authentication method. */
          tenantID?: string;
        }[];
        /** @description BasicAuth information to use on every scrape request. */
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
        /** @description ConsulSDConfigs defines a list of Consul service discovery configurations. */
        consulSDConfigs?: {
          /** @description Allow stale Consul results (see https://www.consul.io/api/features/consistency.html). Will reduce load on Consul. If unset, Prometheus uses its default value. */
          allowStale?: boolean;
          /** @description Authorization header configuration to authenticate against the Consul Server. */
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
          /** @description BasicAuth information to authenticate against the Consul Server. More info: https://prometheus.io/docs/operating/configuration/#endpoints */
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
          /** @description Consul Datacenter name, if not provided it will use the local Consul Agent Datacenter. */
          datacenter?: string;
          /** @description Whether to enable HTTP2. If unset, Prometheus uses its default value. */
          enableHTTP2?: boolean;
          /** @description Configure whether HTTP requests follow HTTP 3xx redirects. If unset, Prometheus uses its default value. */
          followRedirects?: boolean;
          /** @description Namespaces are only supported in Consul Enterprise. */
          namespace?: string;
          /** @description Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. */
          noProxy?: string;
          /** @description Node metadata key/value pairs to filter nodes for a given service. */
          nodeMeta?: {
            [key: string]: string;
          };
          /** @description Optional OAuth 2.0 configuration. */
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
          /** @description Admin Partitions are only supported in Consul Enterprise. */
          partition?: string;
          /** @description Specifies headers to send to proxies during CONNECT requests. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description Use proxy URL indicated by environment variables (HTTP_PROXY, https_proxy, HTTPs_PROXY, https_proxy, and no_proxy) If unset, Prometheus uses its default value. */
          proxyFromEnvironment?: boolean;
          /** @description Optional proxy URL. */
          proxyUrl?: string;
          /** @description The time after which the provided names are refreshed. On large setup it might be a good idea to increase this value because the catalog will change all the time. If unset, Prometheus uses its default value. */
          refreshInterval?: string;
          /**
           * @description HTTP Scheme default "http"
           * @enum {string}
           */
          scheme?: "HTTP" | "HTTPS";
          /** @description A valid string consisting of a hostname or IP followed by an optional port number. */
          server: string;
          /** @description A list of services for which targets are retrieved. If omitted, all services are scraped. */
          services?: string[];
          /** @description The string by which Consul tags are joined into the tag label. If unset, Prometheus uses its default value. */
          tagSeparator?: string;
          /** @description An optional list of tags used to filter nodes for a given service. Services must contain all tags in the list. */
          tags?: string[];
          /** @description TLS Config */
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
          /** @description Consul ACL TokenRef, if not provided it will use the ACL from the local Consul Agent. */
          tokenRef?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        }[];
        /** @description DNSSDConfigs defines a list of DNS service discovery configurations. */
        dnsSDConfigs?: {
          /** @description A list of DNS domain names to be queried. */
          names: string[];
          /** @description The port number used if the query type is not SRV Ignored for SRV records */
          port?: number;
          /** @description RefreshInterval configures the time after which the provided names are refreshed. If not set, Prometheus uses its default value. */
          refreshInterval?: string;
          /**
           * @description The type of DNS query to perform. One of SRV, A, AAAA or MX. If not set, Prometheus uses its default value.
           * @enum {string}
           */
          type?: "SRV" | "A" | "AAAA" | "MX";
        }[];
        /** @description EC2SDConfigs defines a list of EC2 service discovery configurations. */
        ec2SDConfigs?: {
          /** @description AccessKey is the AWS API key. */
          accessKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Filters can be used optionally to filter the instance list by other criteria. Available filter criteria can be found here: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html Filter API documentation: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Filter.html */
          filters?: {
            name: string;
            values: string[];
          }[];
          /** @description The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. */
          port?: number;
          /** @description RefreshInterval configures the refresh interval at which Prometheus will re-read the instance list. */
          refreshInterval?: string;
          /** @description The AWS region */
          region?: string;
          /** @description AWS Role ARN, an alternative to using AWS API keys. */
          roleARN?: string;
          /** @description SecretKey is the AWS API secret. */
          secretKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        }[];
        /** @description FileSDConfigs defines a list of file service discovery configurations. */
        fileSDConfigs?: {
          /** @description List of files to be used for file discovery. Recommendation: use absolute paths. While relative paths work, the prometheus-operator project makes no guarantees about the working directory where the configuration file is stored. Files must be mounted using Prometheus.ConfigMaps or Prometheus.Secrets. */
          files: string[];
          /** @description RefreshInterval configures the refresh interval at which Prometheus will reload the content of the files. */
          refreshInterval?: string;
        }[];
        /** @description GCESDConfigs defines a list of GCE service discovery configurations. */
        gceSDConfigs?: {
          /** @description Filter can be used optionally to filter the instance list by other criteria Syntax of this filter is described in the filter query parameter section: https://cloud.google.com/compute/docs/reference/latest/instances/list */
          filter?: string;
          /** @description The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. */
          port?: number;
          /** @description The Google Cloud Project ID */
          project: string;
          /** @description RefreshInterval configures the refresh interval at which Prometheus will re-read the instance list. */
          refreshInterval?: string;
          /** @description The tag separator is used to separate the tags on concatenation */
          tagSeparator?: string;
          /** @description The zone of the scrape targets. If you need multiple zones use multiple GCESDConfigs. */
          zone: string;
        }[];
        /** @description HonorLabels chooses the metric's labels on collisions with target labels. */
        honorLabels?: boolean;
        /** @description HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data. */
        honorTimestamps?: boolean;
        /** @description HTTPSDConfigs defines a list of HTTP service discovery configurations. */
        httpSDConfigs?: {
          /** @description Authorization header configuration to authenticate against the target HTTP endpoint. */
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
          /** @description BasicAuth information to authenticate against the target HTTP endpoint. More info: https://prometheus.io/docs/operating/configuration/#endpoints */
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
          /** @description RefreshInterval configures the refresh interval at which Prometheus will re-query the endpoint to update the target list. */
          refreshInterval?: string;
          /** @description TLS configuration applying to the target HTTP endpoint. */
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
          /** @description URL from which the targets are fetched. */
          url: string;
        }[];
        /**
         * Format: int64
         * @description Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit.
         *      It requires Prometheus >= v2.47.0.
         */
        keepDroppedTargets?: number;
        /** @description KubernetesSDConfigs defines a list of Kubernetes service discovery configurations. */
        kubernetesSDConfigs?: {
          /**
           * @description Role of the Kubernetes entities that should be discovered.
           * @enum {string}
           */
          role:
            | "Node"
            | "node"
            | "Service"
            | "service"
            | "Pod"
            | "pod"
            | "Endpoints"
            | "endpoints"
            | "EndpointSlice"
            | "endpointslice"
            | "Ingress"
            | "ingress";
          /** @description Selector to select objects. */
          selectors?: {
            field?: string;
            label?: string;
            /**
             * @description Role is role of the service in Kubernetes.
             * @enum {string}
             */
            role:
              | "Node"
              | "node"
              | "Service"
              | "service"
              | "Pod"
              | "pod"
              | "Endpoints"
              | "endpoints"
              | "EndpointSlice"
              | "endpointslice"
              | "Ingress"
              | "ingress";
          }[];
        }[];
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
        /** @description MetricsPath HTTP path to scrape for metrics. If empty, Prometheus uses the default value (e.g. /metrics). */
        metricsPath?: string;
        /** @description Optional HTTP URL parameters */
        params?: {
          [key: string]: string[];
        };
        /** @description RelabelConfigs defines how to rewrite the target's labels before scraping. Prometheus Operator automatically adds relabelings for a few standard Kubernetes fields. The original scrape job's name is available via the `__tmp_prometheus_job_name` label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config */
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
         * Format: int64
         * @description SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
         */
        sampleLimit?: number;
        /** @description Configures the protocol scheme used for requests. If empty, Prometheus uses HTTP by default. */
        scheme?: string;
        /** @description ScrapeInterval is the interval between consecutive scrapes. */
        scrapeInterval?: string;
        /** @description ScrapeTimeout is the number of seconds to wait until a scrape request times out. */
        scrapeTimeout?: string;
        /** @description StaticConfigs defines a list of static targets with a common label set. */
        staticConfigs?: {
          /** @description Labels assigned to all metrics scraped from the targets. */
          labels?: {
            [key: string]: string;
          };
          /** @description List of targets for this static configuration. */
          targets?: string[];
        }[];
        /**
         * Format: int64
         * @description TargetLimit defines a limit on the number of scraped targets that will be accepted.
         */
        targetLimit?: number;
        /** @description TLS configuration to use on every scrape request */
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
        /** @description TrackTimestampsStaleness whether Prometheus tracks staleness of the metrics that have an explicit timestamp present in scraped data. Has no effect if `honorTimestamps` is false. It requires Prometheus >= v2.48.0. */
        trackTimestampsStaleness?: boolean;
      };
    };
  };
}
