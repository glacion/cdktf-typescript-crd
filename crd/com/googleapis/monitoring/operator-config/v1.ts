import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOperatorConfigV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesOperatorConfigV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesOperatorConfigV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.googleapis.com/v1";
    kind?: "OperatorConfig";
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
    /** @description Collection specifies how the operator configures collection, including
     *     scraping and an integrated export to Google Cloud Monitoring. */
    collection?: {
      /** @description Compression enables compression of metrics collection data */
      compression?: string;
      /** @description A reference to GCP service account credentials with which Prometheus collectors
       *     are run. It needs to have metric write permissions for all project IDs to which
       *     data is written.
       *     Within GKE, this can typically be left empty if the compute default
       *     service account has the required permissions. */
      credentials?: {
        /** @description The key of the secret to select from.  Must be a valid secret key. */
        key: string;
        /** @description Name of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         *     TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;
        /** @description Specify whether the Secret or its key must be defined */
        optional?: boolean;
      };
      /** @description ExternalLabels specifies external labels that are attached to all scraped
       *     data before being written to Google Cloud Monitoring or any other additional exports
       *     specified in the OperatorConfig. The precedence behavior matches that of Prometheus. */
      externalLabels?: {
        [key: string]: string;
      };
      /** @description Filter limits which metric data is sent to Cloud Monitoring (it doesn't apply to additional exports). */
      filter?: {
        /** @description A list of Prometheus time series matchers. Every time series must match at least one
         *     of the matchers to be exported. This field can be used equivalently to the match[]
         *     parameter of the Prometheus federation endpoint to selectively export data.
         *     Example: `["{job!='foobar'}", "{__name__!~'container_foo.*|container_bar.*'}"]` */
        matchOneOf?: string[];
      };
      /** @description Configuration to scrape the metric endpoints of the Kubelets. */
      kubeletScraping?: {
        /** @description The interval at which the metric endpoints are scraped. */
        interval: string;
        /** @description TLSInsecureSkipVerify disables verifying the target cert.
         *     This can be useful for clusters provisioned with kubeadm. */
        tlsInsecureSkipVerify?: boolean;
      };
    };
    /** @description Exports is an EXPERIMENTAL feature that specifies additional, optional endpoints to export to,
     *     on top of Google Cloud Monitoring collection.
     *     Note: To disable integrated export to Google Cloud Monitoring specify a non-matching filter in the "collection.filter" field. */
    exports?: {
      /** @description The URL of the endpoint that supports Prometheus Remote Write to export samples to. */
      url: string;
    }[];
    /** @description Features holds configuration for optional managed-collection features. */
    features?: {
      /** @description Settings for the collector configuration propagation. */
      config?: {
        /** @description Compression enables compression of the config data propagated by the operator to collectors
         *     and the rule-evaluator. It is recommended to use the gzip option when using a large number of
         *     ClusterPodMonitoring, PodMonitoring, GlobalRules, ClusterRules, and/or Rules. */
        compression?: string;
      };
      /** @description Configuration of target status reporting. */
      targetStatus?: {
        /** @description Enable target status reporting. */
        enabled?: boolean;
      };
    };
    /** @description ManagedAlertmanager holds information for configuring the managed instance of Alertmanager. */
    managedAlertmanager?: {
      /** @description ConfigSecret refers to the name of a single-key Secret in the public namespace that
       *     holds the managed Alertmanager config file. */
      configSecret?: {
        /** @description The key of the secret to select from.  Must be a valid secret key. */
        key: string;
        /** @description Name of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         *     TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;
        /** @description Specify whether the Secret or its key must be defined */
        optional?: boolean;
      };
      /** @description ExternalURL is the URL under which Alertmanager is externally reachable (for example, if
       *     Alertmanager is served via a reverse proxy). Used for generating relative and absolute
       *     links back to Alertmanager itself. If the URL has a path portion, it will be used to
       *     prefix all HTTP endpoints served by Alertmanager, otherwise relevant URL components will
       *     be derived automatically.
       *
       *
       *     If no URL is provided, Alertmanager will point to the Google Cloud Metric Explorer page. */
      externalURL?: string;
    };
    /** @description Rules specifies how the operator configures and deploys rule-evaluator. */
    rules?: {
      /** @description Alerting contains how the rule-evaluator configures alerting. */
      alerting?: {
        /** @description Alertmanagers contains endpoint configuration for designated Alertmanagers. */
        alertmanagers?: {
          /** @description Version of the Alertmanager API that rule-evaluator uses to send alerts. It
           *     can be "v1" or "v2". */
          apiVersion?: string;
          /** @description Authorization section for this alertmanager endpoint */
          authorization?: {
            /** @description The secret's key that contains the credentials of the request */
            credentials?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               *     TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description Set the authentication type. Defaults to Bearer, Basic will cause an
             *     error */
            type?: string;
          };
          /** @description Name of Endpoints object in Namespace. */
          name: string;
          /** @description Namespace of Endpoints object. */
          namespace: string;
          /** @description Prefix for the HTTP path alerts are pushed to. */
          pathPrefix?: string;
          /** @description Port the Alertmanager API is exposed on. */
          port: number | string;
          /** @description Scheme to use when firing alerts. */
          scheme?: string;
          /** @description Timeout is a per-target Alertmanager timeout when pushing alerts. */
          timeout?: string;
          /** @description TLS Config to use for alertmanager connection. */
          tls?: {
            /** @description Struct containing the CA cert to use for the targets. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 *     TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 *     TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the Secret or its key must be defined */
                optional?: boolean;
              };
            };
            /** @description Struct containing the client cert file for the targets. */
            cert?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /** @description Name of the referent.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 *     TODO: Add other useful fields. apiVersion, kind, uid? */
                name?: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /** @description Name of the referent.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 *     TODO: Add other useful fields. apiVersion, kind, uid? */
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
              /** @description Name of the referent.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               *     TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description Maximum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1), TLS12 (TLS 1.2), TLS13 (TLS 1.3).
             *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
             *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
            maxVersion?: string;
            /** @description Minimum TLS version. Accepted values: TLS10 (TLS 1.0), TLS11 (TLS 1.1), TLS12 (TLS 1.2), TLS13 (TLS 1.3).
             *     If unset, Prometheus will use Go default minimum version, which is TLS 1.2.
             *     See MinVersion in https://pkg.go.dev/crypto/tls#Config. */
            minVersion?: string;
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
        }[];
      };
      /** @description A reference to GCP service account credentials with which the rule
       *     evaluator container is run. It needs to have metric read permissions
       *     against queryProjectId and metric write permissions against all projects
       *     to which rule results are written.
       *     Within GKE, this can typically be left empty if the compute default
       *     service account has the required permissions. */
      credentials?: {
        /** @description The key of the secret to select from.  Must be a valid secret key. */
        key: string;
        /** @description Name of the referent.
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         *     TODO: Add other useful fields. apiVersion, kind, uid? */
        name?: string;
        /** @description Specify whether the Secret or its key must be defined */
        optional?: boolean;
      };
      /** @description ExternalLabels specifies external labels that are attached to any rule
       *     results and alerts produced by rules. The precedence behavior matches that
       *     of Prometheus. */
      externalLabels?: {
        [key: string]: string;
      };
      /** @description The base URL used for the generator URL in the alert notification payload.
       *     Should point to an instance of a query frontend that gives access to queryProjectID. */
      generatorUrl?: string;
      /** @description QueryProjectID is the GCP project ID to evaluate rules against.
       *     If left blank, the rule-evaluator will try attempt to infer the Project ID
       *     from the environment. */
      queryProjectID?: string;
    };
    /** @description Scaling contains configuration options for scaling GMP. */
    scaling?: {
      /** @description VPASpec defines configuration options for vertical pod autoscaling. */
      vpa?: {
        /** @description Enabled configures whether the operator configures Vertical Pod Autoscaling for the collector pods.
         *     In GKE, installing Vertical Pod Autoscaling requires a cluster restart, and therefore it also results in an operator restart.
         *     In other environments, the operator may need to be restarted to enable VPA to run the following check again and watch for the objects. */
        enabled?: boolean;
      };
    };
  };
}
