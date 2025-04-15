import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOperatorConfigV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesOperatorConfigV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesOperatorConfigV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "monitoring.googleapis.com/v1alpha1";
    kind: "OperatorConfig";
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
    /** @description Collection specifies how the operator configures collection. */
    collection?: {
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
       *     data before being written to Cloud Monitoring. The precedence behavior matches that
       *     of Prometheus. */
      externalLabels?: {
        [key: string]: string;
      };
      /** @description Filter limits which metric data is sent to Cloud Monitoring. */
      filter?: {
        /** @description A list Prometheus time series matchers. Every time series must match at least one
         *     of the matchers to be exported. This field can be used equivalently to the match[]
         *     parameter of the Prometheus federation endpoint to selectively export data.
         *     Example: `["{job='prometheus'}", "{__name__=~'job:.*'}"]` */
        matchOneOf?: string[];
      };
    };
    /** @description Rules specifies how the operator configures and deployes rule-evaluator. */
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
      /** @description QueryProjectID is the GCP project ID to evaluate rules against.
       *     If left blank, the rule-evaluator will try attempt to infer the Project ID
       *     from the environment. */
      queryProjectID?: string;
    };
  };
}
