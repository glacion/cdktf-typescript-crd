import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAlertmanagerConfigV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAlertmanagerConfigV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.coreos.com/v1alpha1", kind: "AlertmanagerConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAlertmanagerConfigV1alpha1Config extends ManifestConfig {
  manifest: {
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
    spec: {
      /** @description List of inhibition rules. The rules will only apply to alerts matching the resource's namespace. */
      inhibitRules?: {
        /** @description Labels that must have an equal value in the source and target alert for the inhibition to take effect. */
        equal?: string[];
        /** @description Matchers for which one or more alerts have to exist for the inhibition to take effect. The operator enforces that the alert matches the resource's namespace. */
        sourceMatch?: {
          /**
           * @description Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
           * @enum {string}
           */
          matchType?: "!=" | "=" | "=~" | "!~";
          /** @description Label to match. */
          name: string;
          /** @description Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead. */
          regex?: boolean;
          /** @description Label value to match. */
          value?: string;
        }[];
        /** @description Matchers that have to be fulfilled in the alerts to be muted. The operator enforces that the alert matches the resource's namespace. */
        targetMatch?: {
          /**
           * @description Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
           * @enum {string}
           */
          matchType?: "!=" | "=" | "=~" | "!~";
          /** @description Label to match. */
          name: string;
          /** @description Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead. */
          regex?: boolean;
          /** @description Label value to match. */
          value?: string;
        }[];
      }[];
      /** @description List of MuteTimeInterval specifying when the routes should be muted. */
      muteTimeIntervals?: {
        /** @description Name of the time interval */
        name?: string;
        /** @description TimeIntervals is a list of TimeInterval */
        timeIntervals?: {
          /** @description DaysOfMonth is a list of DayOfMonthRange */
          daysOfMonth?: {
            /** @description End of the inclusive range */
            end?: number;
            /** @description Start of the inclusive range */
            start?: number;
          }[];
          /** @description Months is a list of MonthRange */
          months?: string[];
          /** @description Times is a list of TimeRange */
          times?: {
            /** @description EndTime is the end time in 24hr format. */
            endTime?: string;
            /** @description StartTime is the start time in 24hr format. */
            startTime?: string;
          }[];
          /** @description Weekdays is a list of WeekdayRange */
          weekdays?: string[];
          /** @description Years is a list of YearRange */
          years?: string[];
        }[];
      }[];
      /** @description List of receivers. */
      receivers?: {
        /** @description List of Discord configurations. */
        discordConfigs?: {
          /** @description The secret's key that contains the Discord webhook URL. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          apiURL: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description The template of the message's body. */
          message?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description The template of the message's title. */
          title?: string;
        }[];
        /** @description List of Email configurations. */
        emailConfigs?: {
          /** @description The identity to use for authentication. */
          authIdentity?: string;
          /** @description The secret's key that contains the password to use for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          authPassword?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The secret's key that contains the CRAM-MD5 secret. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          authSecret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The username to use for authentication. */
          authUsername?: string;
          /** @description The sender address. */
          from?: string;
          /** @description Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation. */
          headers?: {
            /** @description Key of the tuple. */
            key: string;
            /** @description Value of the tuple. */
            value: string;
          }[];
          /** @description The hostname to identify to the SMTP server. */
          hello?: string;
          /** @description The HTML body of the email notification. */
          html?: string;
          /** @description The SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints. */
          requireTLS?: boolean;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description The SMTP host and port through which emails are sent. E.g. example.com:25 */
          smarthost?: string;
          /** @description The text body of the email notification. */
          text?: string;
          /** @description TLS configuration */
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
          /** @description The email address to send notifications to. */
          to?: string;
        }[];
        /** @description List of MSTeams configurations. It requires Alertmanager >= 0.26.0. */
        msteamsConfigs?: {
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Whether to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description Message body template. */
          text?: string;
          /** @description Message title template. */
          title?: string;
          /** @description MSTeams webhook URL. */
          webhookUrl: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        }[];
        /** @description Name of the receiver. Must be unique across all items from the list. */
        name: string;
        /** @description List of OpsGenie configurations. */
        opsgenieConfigs?: {
          /** @description Comma separated list of actions that will be available for the alert. */
          actions?: string;
          /** @description The secret's key that contains the OpsGenie API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          apiKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The URL to send OpsGenie API requests to. */
          apiURL?: string;
          /** @description Description of the incident. */
          description?: string;
          /** @description A set of arbitrary key/value pairs that provide further detail about the incident. */
          details?: {
            /** @description Key of the tuple. */
            key: string;
            /** @description Value of the tuple. */
            value: string;
          }[];
          /** @description Optional field that can be used to specify which domain alert is related to. */
          entity?: string;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Alert text limited to 130 characters. */
          message?: string;
          /** @description Additional alert note. */
          note?: string;
          /** @description Priority level of alert. Possible values are P1, P2, P3, P4, and P5. */
          priority?: string;
          /** @description List of responders responsible for notifications. */
          responders?: {
            /** @description ID of the responder. */
            id?: string;
            /** @description Name of the responder. */
            name?: string;
            /**
             * @description Type of responder.
             * @enum {string}
             */
            type: "team" | "teams" | "user" | "escalation" | "schedule";
            /** @description Username of the responder. */
            username?: string;
          }[];
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description Backlink to the sender of the notification. */
          source?: string;
          /** @description Comma separated list of tags attached to the notifications. */
          tags?: string;
          /** @description Whether to update message and description of the alert in OpsGenie if it already exists By default, the alert is never updated in OpsGenie, the new message only appears in activity log. */
          updateAlerts?: boolean;
        }[];
        /** @description List of PagerDuty configurations. */
        pagerdutyConfigs?: {
          /** @description The class/type of the event. */
          class?: string;
          /** @description Client identification. */
          client?: string;
          /** @description Backlink to the sender of notification. */
          clientURL?: string;
          /** @description The part or component of the affected system that is broken. */
          component?: string;
          /** @description Description of the incident. */
          description?: string;
          /** @description Arbitrary key/value pairs that provide further detail about the incident. */
          details?: {
            /** @description Key of the tuple. */
            key: string;
            /** @description Value of the tuple. */
            value: string;
          }[];
          /** @description A cluster or grouping of sources. */
          group?: string;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description A list of image details to attach that provide further detail about an incident. */
          pagerDutyImageConfigs?: {
            /** @description Alt is the optional alternative text for the image. */
            alt?: string;
            /** @description Optional URL; makes the image a clickable link. */
            href?: string;
            /** @description Src of the image being attached to the incident */
            src?: string;
          }[];
          /** @description A list of link details to attach that provide further detail about an incident. */
          pagerDutyLinkConfigs?: {
            /** @description Text that describes the purpose of the link, and can be used as the link's text. */
            alt?: string;
            /** @description Href is the URL of the link to be attached */
            href?: string;
          }[];
          /** @description The secret's key that contains the PagerDuty integration key (when using Events API v2). Either this field or `serviceKey` needs to be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          routingKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description The secret's key that contains the PagerDuty service key (when using integration type "Prometheus"). Either this field or `routingKey` needs to be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          serviceKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Severity of the incident. */
          severity?: string;
          /** @description The URL to send requests to. */
          url?: string;
        }[];
        /** @description List of Pushover configurations. */
        pushoverConfigs?: {
          /** @description The name of a device to send the notification to */
          device?: string;
          /** @description How long your notification will continue to be retried for, unless the user acknowledges the notification. */
          expire?: string;
          /** @description Whether notification message is HTML or plain text. */
          html?: boolean;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Notification message. */
          message?: string;
          /** @description Priority, see https://pushover.net/api#priority */
          priority?: string;
          /** @description How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds. */
          retry?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description The name of one of the sounds supported by device clients to override the user's default sound choice */
          sound?: string;
          /** @description Notification title. */
          title?: string;
          /** @description The secret's key that contains the registered application's API token, see https://pushover.net/apps. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. Either `token` or `tokenFile` is required. */
          token?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The token file that contains the registered application's API token, see https://pushover.net/apps. Either `token` or `tokenFile` is required. It requires Alertmanager >= v0.26.0. */
          tokenFile?: string;
          /** @description A supplementary URL shown alongside the message. */
          url?: string;
          /** @description A title for supplementary URL, otherwise just the URL is shown */
          urlTitle?: string;
          /** @description The secret's key that contains the recipient user's user key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. Either `userKey` or `userKeyFile` is required. */
          userKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The user key file that contains the recipient user's user key. Either `userKey` or `userKeyFile` is required. It requires Alertmanager >= v0.26.0. */
          userKeyFile?: string;
        }[];
        /** @description List of Slack configurations. */
        slackConfigs?: {
          /** @description A list of Slack actions that are sent with each notification. */
          actions?: {
            /** @description SlackConfirmationField protect users from destructive actions or particularly distinguished decisions by asking them to confirm their button click one more time. See https://api.slack.com/docs/interactive-message-field-guide#confirmation_fields for more information. */
            confirm?: {
              dismissText?: string;
              okText?: string;
              text: string;
              title?: string;
            };
            name?: string;
            style?: string;
            text: string;
            type: string;
            url?: string;
            value?: string;
          }[];
          /** @description The secret's key that contains the Slack webhook URL. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          apiURL?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          callbackId?: string;
          /** @description The channel or user to send notifications to. */
          channel?: string;
          color?: string;
          fallback?: string;
          /** @description A list of Slack fields that are sent with each notification. */
          fields?: {
            short?: boolean;
            title: string;
            value: string;
          }[];
          footer?: string;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          iconEmoji?: string;
          iconURL?: string;
          imageURL?: string;
          linkNames?: boolean;
          mrkdwnIn?: string[];
          pretext?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          shortFields?: boolean;
          text?: string;
          thumbURL?: string;
          title?: string;
          titleLink?: string;
          username?: string;
        }[];
        /** @description List of SNS configurations */
        snsConfigs?: {
          /** @description The SNS API URL i.e. https://sns.us-east-2.amazonaws.com. If not specified, the SNS API URL from the SNS SDK will be used. */
          apiURL?: string;
          /** @description SNS message attributes. */
          attributes?: {
            [key: string]: string;
          };
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description The message content of the SNS notification. */
          message?: string;
          /** @description Phone number if message is delivered via SMS in E.164 format. If you don't specify this value, you must specify a value for the TopicARN or TargetARN. */
          phoneNumber?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description Configures AWS's Signature Verification 4 signing process to sign requests. */
          sigv4?: {
            /** @description AccessKey is the AWS API key. If not specified, the environment variable `AWS_ACCESS_KEY_ID` is used. */
            accessKey?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description Profile is the named AWS profile used to authenticate. */
            profile?: string;
            /** @description Region is the AWS region. If blank, the region from the default credentials chain used. */
            region?: string;
            /** @description RoleArn is the named AWS profile used to authenticate. */
            roleArn?: string;
            /** @description SecretKey is the AWS API secret. If not specified, the environment variable `AWS_SECRET_ACCESS_KEY` is used. */
            secretKey?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description Subject line when the message is delivered to email endpoints. */
          subject?: string;
          /** @description The  mobile platform endpoint ARN if message is delivered via mobile notifications. If you don't specify this value, you must specify a value for the topic_arn or PhoneNumber. */
          targetARN?: string;
          /** @description SNS topic ARN, i.e. arn:aws:sns:us-east-2:698519295917:My-Topic If you don't specify this value, you must specify a value for the PhoneNumber or TargetARN. */
          topicARN?: string;
        }[];
        /** @description List of Telegram configurations. */
        telegramConfigs?: {
          /** @description The Telegram API URL i.e. https://api.telegram.org. If not specified, default API URL will be used. */
          apiURL?: string;
          /** @description Telegram bot token. It is mutually exclusive with `botTokenFile`. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           *      Either `botToken` or `botTokenFile` is required. */
          botToken?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description File to read the Telegram bot token from. It is mutually exclusive with `botToken`. Either `botToken` or `botTokenFile` is required.
           *      It requires Alertmanager >= v0.26.0. */
          botTokenFile?: string;
          /**
           * Format: int64
           * @description The Telegram chat ID.
           */
          chatID?: number;
          /** @description Disable telegram notifications */
          disableNotifications?: boolean;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Message template */
          message?: string;
          /**
           * @description Parse mode for telegram message
           * @enum {string}
           */
          parseMode?: "MarkdownV2" | "Markdown" | "HTML";
          /** @description Whether to notify about resolved alerts. */
          sendResolved?: boolean;
        }[];
        /** @description List of VictorOps configurations. */
        victoropsConfigs?: {
          /** @description The secret's key that contains the API key to use when talking to the VictorOps API. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          apiKey?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The VictorOps API URL. */
          apiUrl?: string;
          /** @description Additional custom fields for notification. */
          customFields?: {
            /** @description Key of the tuple. */
            key: string;
            /** @description Value of the tuple. */
            value: string;
          }[];
          /** @description Contains summary of the alerted problem. */
          entityDisplayName?: string;
          /** @description The HTTP client's configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Describes the behavior of the alert (CRITICAL, WARNING, INFO). */
          messageType?: string;
          /** @description The monitoring tool the state message is from. */
          monitoringTool?: string;
          /** @description A key used to map the alert to a team. */
          routingKey?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description Contains long explanation of the alerted problem. */
          stateMessage?: string;
        }[];
        /** @description List of Webex configurations. */
        webexConfigs?: {
          /** @description The Webex Teams API URL i.e. https://webexapis.com/v1/messages Provide if different from the default API URL. */
          apiURL?: string;
          /** @description The HTTP client's configuration. You must supply the bot token via the `httpConfig.authorization` field. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description Message template */
          message?: string;
          /** @description ID of the Webex Teams room where to send the messages. */
          roomID: string;
          /** @description Whether to notify about resolved alerts. */
          sendResolved?: boolean;
        }[];
        /** @description List of webhook configurations. */
        webhookConfigs?: {
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /**
           * Format: int32
           * @description Maximum number of alerts to be sent per webhook message. When 0, all alerts are included.
           */
          maxAlerts?: number;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          /** @description The URL to send HTTP POST requests to. `urlSecret` takes precedence over `url`. One of `urlSecret` and `url` should be defined. */
          url?: string;
          /** @description The secret's key that contains the webhook URL to send HTTP requests to. `urlSecret` takes precedence over `url`. One of `urlSecret` and `url` should be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          urlSecret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        }[];
        /** @description List of WeChat configurations. */
        wechatConfigs?: {
          agentID?: string;
          /** @description The secret's key that contains the WeChat API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
          apiSecret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description The WeChat API URL. */
          apiURL?: string;
          /** @description The corp id for authentication. */
          corpID?: string;
          /** @description HTTP client configuration. */
          httpConfig?: {
            /** @description Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+. */
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
            /** @description BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence. */
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
            /** @description The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator. */
            bearerTokenSecret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? */
              name?: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /** @description FollowRedirects specifies whether the client should follow HTTP 3xx redirects. */
            followRedirects?: boolean;
            /** @description OAuth2 client credentials used to fetch a token for the targets. */
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
            /** @description Optional proxy URL. */
            proxyURL?: string;
            /** @description TLS configuration for the client. */
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
          /** @description API request data as defined by the WeChat API. */
          message?: string;
          messageType?: string;
          /** @description Whether or not to notify about resolved alerts. */
          sendResolved?: boolean;
          toParty?: string;
          toTag?: string;
          toUser?: string;
        }[];
      }[];
      /** @description The Alertmanager route definition for alerts matching the resource's namespace. If present, it will be added to the generated Alertmanager configuration as a first-level route. */
      route?: {
        /** @description ActiveTimeIntervals is a list of MuteTimeInterval names when this route should be active. */
        activeTimeIntervals?: string[];
        /** @description Boolean indicating whether an alert should continue matching subsequent sibling nodes. It will always be overridden to true for the first-level route by the Prometheus operator. */
        continue?: boolean;
        /** @description List of labels to group by. Labels must not be repeated (unique list). Special label "..." (aggregate by all possible labels), if provided, must be the only element in the list. */
        groupBy?: string[];
        /** @description How long to wait before sending an updated notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "5m" */
        groupInterval?: string;
        /** @description How long to wait before sending the initial notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "30s" */
        groupWait?: string;
        /** @description List of matchers that the alert's labels should match. For the first level route, the operator removes any existing equality and regexp matcher on the `namespace` label and adds a `namespace: <object namespace>` matcher. */
        matchers?: {
          /**
           * @description Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
           * @enum {string}
           */
          matchType?: "!=" | "=" | "=~" | "!~";
          /** @description Label to match. */
          name: string;
          /** @description Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead. */
          regex?: boolean;
          /** @description Label value to match. */
          value?: string;
        }[];
        /** @description Note: this comment applies to the field definition above but appears below otherwise it gets included in the generated manifest. CRD schema doesn't support self-referential types for now (see https://github.com/kubernetes/kubernetes/issues/62872). We have to use an alternative type to circumvent the limitation. The downside is that the Kube API can't validate the data beyond the fact that it is a valid JSON representation. MuteTimeIntervals is a list of MuteTimeInterval names that will mute this route when matched, */
        muteTimeIntervals?: string[];
        /** @description Name of the receiver for this route. If not empty, it should be listed in the `receivers` field. */
        receiver?: string;
        /** @description How long to wait before repeating the last notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "4h" */
        repeatInterval?: string;
        /** @description Child routes. */
        routes?: unknown[];
      };
    };
  };
}
