import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesScrapeConfigV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesScrapeConfigV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesScrapeConfigV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.coreos.com/v1alpha1";
    kind?: "ScrapeConfig";
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
    /** @description ScrapeConfigSpec is a specification of the desired configuration for a scrape configuration. */
    spec: {
      /** @description Authorization header to use on every scrape request. */
      authorization?: {
        /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
        credentials?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /** @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Defines the authentication type. The value is case-insensitive.
         *
         *     "Basic" is not a supported value.
         *
         *     Default: "Bearer" */
        type?: string;
      };
      /** @description AzureSDConfigs defines a list of Azure service discovery configurations. */
      azureSDConfigs?: {
        /**
         * @description # The authentication method, either `OAuth` or `ManagedIdentity` or `SDK`.
         *     See https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview
         *     SDK authentication method uses environment variables by default.
         *     See https://learn.microsoft.com/en-us/azure/developer/go/azure-sdk-authentication
         * @enum {string}
         */
        authenticationMethod?: "OAuth" | "ManagedIdentity" | "SDK";
        /** @description Authorization header configuration to authenticate against the target HTTP endpoint.
         *     Cannot be set at the same time as `oAuth2`, or `basicAuth`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to authenticate against the target HTTP endpoint.
         *     More info: https://prometheus.io/docs/operating/configuration/#endpoints
         *     Cannot be set at the same time as `authorization`, or `oAuth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Optional client ID. Only required with the OAuth authentication method. */
        clientID?: string;
        /** @description Optional client secret. Only required with the OAuth authentication method. */
        clientSecret?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description The Azure environment. */
        environment?: string;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration to authenticate against the target HTTP endpoint.
         *     Cannot be set at the same time as `authorization`, or `basicAuth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description The port to scrape metrics from. If using the public IP address, this must
         *     instead be specified in the relabeling rule.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description RefreshInterval configures the refresh interval at which Prometheus will re-read the instance list. */
        refreshInterval?: string;
        /** @description Optional resource group name. Limits discovery to this resource group.
         *     Requires  Prometheus v2.35.0 and above */
        resourceGroup?: string;
        /** @description The subscription ID. Always required. */
        subscriptionID: string;
        /** @description Optional tenant ID. Only required with the OAuth authentication method. */
        tenantID?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description BasicAuth information to use on every scrape request. */
      basicAuth?: {
        /** @description `password` specifies a key of a Secret containing the password for
         *     authentication. */
        password?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /** @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description `username` specifies a key of a Secret containing the username for
         *     authentication. */
        username?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /** @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
      };
      /** @description ConsulSDConfigs defines a list of Consul service discovery configurations. */
      consulSDConfigs?: {
        /** @description Allow stale Consul results (see https://www.consul.io/api/features/consistency.html). Will reduce load on Consul.
         *     If unset, Prometheus uses its default value. */
        allowStale?: boolean;
        /** @description Optional Authorization header configuration to authenticate against the Consul Server.
         *     Cannot be set at the same time as `basicAuth`, or `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Optional BasicAuth information to authenticate against the Consul Server.
         *     More info: https://prometheus.io/docs/operating/configuration/#endpoints
         *     Cannot be set at the same time as `authorization`, or `oauth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Consul Datacenter name, if not provided it will use the local Consul Agent Datacenter. */
        datacenter?: string;
        /** @description Whether to enable HTTP2.
         *     If unset, Prometheus uses its default value. */
        enableHTTP2?: boolean;
        /** @description Filter expression used to filter the catalog results.
         *     See https://www.consul.io/api-docs/catalog#list-services
         *     It requires Prometheus >= 3.0.0. */
        filter?: string;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects.
         *     If unset, Prometheus uses its default value. */
        followRedirects?: boolean;
        /** @description Namespaces are only supported in Consul Enterprise.
         *
         *     It requires Prometheus >= 2.28.0. */
        namespace?: string;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Node metadata key/value pairs to filter nodes for a given service.
         *     Starting with Consul 1.14, it is recommended to use `filter` with the `NodeMeta` selector instead. */
        nodeMeta?: {
          [key: string]: string;
        };
        /** @description Optional OAuth2.0 configuration.
         *     Cannot be set at the same time as `basicAuth`, or `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description Admin Partitions are only supported in Consul Enterprise. */
        partition?: string;
        /** @description Prefix for URIs for when consul is behind an API gateway (reverse proxy).
         *
         *     It requires Prometheus >= 2.45.0. */
        pathPrefix?: string;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description The time after which the provided names are refreshed.
         *     On large setup it might be a good idea to increase this value because the catalog will change all the time.
         *     If unset, Prometheus uses its default value. */
        refreshInterval?: string;
        /**
         * @description HTTP Scheme default "http"
         * @enum {string}
         */
        scheme?: "HTTP" | "HTTPS";
        /** @description Consul server address. A valid string consisting of a hostname or IP followed by an optional port number. */
        server: string;
        /** @description A list of services for which targets are retrieved. If omitted, all services are scraped. */
        services?: string[];
        /** @description The string by which Consul tags are joined into the tag label.
         *     If unset, Prometheus uses its default value. */
        tagSeparator?: string;
        /** @description An optional list of tags used to filter nodes for a given service. Services must contain all tags in the list.
         *     Starting with Consul 1.14, it is recommended to use `filter` with the `ServiceTags` selector instead. */
        tags?: string[];
        /** @description TLS configuration to connect to the Consul API. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description Consul ACL TokenRef, if not provided it will use the ACL from the local Consul Agent. */
        tokenRef?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
      }[];
      /** @description DigitalOceanSDConfigs defines a list of DigitalOcean service discovery configurations. */
      digitalOceanSDConfigs?: {
        /** @description Authorization header configuration to authenticate against the DigitalOcean API.
         *     Cannot be set at the same time as `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description The port to scrape metrics from.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Refresh interval to re-read the instance list. */
        refreshInterval?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description DNSSDConfigs defines a list of DNS service discovery configurations. */
      dnsSDConfigs?: {
        /** @description A list of DNS domain names to be queried. */
        names: string[];
        /**
         * Format: int32
         * @description The port number used if the query type is not SRV
         *     Ignored for SRV records
         */
        port?: number;
        /** @description RefreshInterval configures the time after which the provided names are refreshed.
         *     If not set, Prometheus uses its default value. */
        refreshInterval?: string;
        /**
         * @description The type of DNS query to perform. One of SRV, A, AAAA, MX or NS.
         *     If not set, Prometheus uses its default value.
         *
         *     When set to NS, it requires Prometheus >= v2.49.0.
         *     When set to MX, it requires Prometheus >= v2.38.0
         * @enum {string}
         */
        type?: "A" | "AAAA" | "MX" | "NS" | "SRV";
      }[];
      /** @description DockerSDConfigs defines a list of Docker service discovery configurations. */
      dockerSDConfigs?: {
        /** @description Authorization header configuration to authenticate against the Docker API.
         *     Cannot be set at the same time as `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Optional filters to limit the discovery process to a subset of the available resources. */
        filters?: {
          /** @description Name of the Filter. */
          name: string;
          /** @description Value to filter on. */
          values: string[];
        }[];
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description Address of the docker daemon */
        host: string;
        /** @description The host to use if the container is in host networking mode. */
        hostNetworkingHost?: string;
        /** @description Configure whether to match the first network if the container has multiple networks defined.
         *     If unset, Prometheus uses true by default.
         *     It requires Prometheus >= v2.54.1. */
        matchFirstNetwork?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description The port to scrape metrics from. */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Time after which the container is refreshed. */
        refreshInterval?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description DockerswarmSDConfigs defines a list of Dockerswarm service discovery configurations. */
      dockerSwarmSDConfigs?: {
        /** @description Authorization header configuration to authenticate against the target HTTP endpoint. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Optional HTTP basic authentication information. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Optional filters to limit the discovery process to a subset of available
         *     resources.
         *     The available filters are listed in the upstream documentation:
         *     Services: https://docs.docker.com/engine/api/v1.40/#operation/ServiceList
         *     Tasks: https://docs.docker.com/engine/api/v1.40/#operation/TaskList
         *     Nodes: https://docs.docker.com/engine/api/v1.40/#operation/NodeList */
        filters?: {
          /** @description Name of the Filter. */
          name: string;
          /** @description Value to filter on. */
          values: string[];
        }[];
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description Address of the Docker daemon */
        host: string;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization`, or `basicAuth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description The port to scrape metrics from, when `role` is nodes, and for discovered
         *     tasks and services that don't have published ports.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description The time after which the service discovery data is refreshed. */
        refreshInterval?: string;
        /**
         * @description Role of the targets to retrieve. Must be `Services`, `Tasks`, or `Nodes`.
         * @enum {string}
         */
        role: "Services" | "Tasks" | "Nodes";
        /** @description TLS configuration to use on every scrape request */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description EC2SDConfigs defines a list of EC2 service discovery configurations. */
      ec2SDConfigs?: {
        /** @description AccessKey is the AWS API key. */
        accessKey?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Whether to enable HTTP2.
         *     It requires Prometheus >= v2.41.0 */
        enableHTTP2?: boolean;
        /** @description Filters can be used optionally to filter the instance list by other criteria.
         *     Available filter criteria can be found here:
         *     https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html
         *     Filter API documentation: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Filter.html
         *     It requires Prometheus >= v2.3.0 */
        filters?: {
          /** @description Name of the Filter. */
          name: string;
          /** @description Value to filter on. */
          values: string[];
        }[];
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects.
         *     It requires Prometheus >= v2.41.0 */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /**
         * Format: int32
         * @description The port to scrape metrics from. If using the public IP address, this must
         *     instead be specified in the relabeling rule.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description RefreshInterval configures the refresh interval at which Prometheus will re-read the instance list. */
        refreshInterval?: string;
        /** @description The AWS region. */
        region?: string;
        /** @description AWS Role ARN, an alternative to using AWS API keys. */
        roleARN?: string;
        /** @description SecretKey is the AWS API secret. */
        secretKey?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description TLS configuration to connect to the AWS EC2 API.
         *     It requires Prometheus >= v2.41.0 */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description When false, Prometheus will request uncompressed response from the scraped target.
       *
       *     It requires Prometheus >= v2.49.0.
       *
       *     If unset, Prometheus uses true by default. */
      enableCompression?: boolean;
      /** @description Whether to enable HTTP2. */
      enableHTTP2?: boolean;
      /** @description EurekaSDConfigs defines a list of Eureka service discovery configurations. */
      eurekaSDConfigs?: {
        /** @description Authorization header to use on every scrape request. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization` or `basic_auth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Refresh interval to re-read the instance list. */
        refreshInterval?: string;
        /** @description The URL to connect to the Eureka server. */
        server: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description The protocol to use if a scrape returns blank, unparseable, or otherwise invalid Content-Type.
       *
       *     It requires Prometheus >= v3.0.0. */
      fallbackScrapeProtocol?: string;
      /** @description FileSDConfigs defines a list of file service discovery configurations. */
      fileSDConfigs?: {
        /** @description List of files to be used for file discovery. Recommendation: use absolute paths. While relative paths work, the
         *     prometheus-operator project makes no guarantees about the working directory where the configuration file is
         *     stored.
         *     Files must be mounted using Prometheus.ConfigMaps or Prometheus.Secrets. */
        files: string[];
        /** @description RefreshInterval configures the refresh interval at which Prometheus will reload the content of the files. */
        refreshInterval?: string;
      }[];
      /** @description GCESDConfigs defines a list of GCE service discovery configurations. */
      gceSDConfigs?: {
        /** @description Filter can be used optionally to filter the instance list by other criteria
         *     Syntax of this filter is described in the filter query parameter section:
         *     https://cloud.google.com/compute/docs/reference/latest/instances/list */
        filter?: string;
        /**
         * Format: int32
         * @description The port to scrape metrics from. If using the public IP address, this must
         *     instead be specified in the relabeling rule.
         */
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
      /** @description HetznerSDConfigs defines a list of Hetzner service discovery configurations. */
      hetznerSDConfigs?: {
        /** @description Authorization header configuration, required when role is hcloud.
         *     Role robot does not support bearer token authentication. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request, required when role is robot.
         *     Role hcloud does not support basic auth. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be used at the same time as `basic_auth` or `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description The port to scrape metrics from. */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description The time after which the servers are refreshed. */
        refreshInterval?: string;
        /**
         * @description The Hetzner role of entities that should be discovered.
         * @enum {string}
         */
        role: "hcloud" | "Hcloud" | "robot" | "Robot";
        /** @description TLS configuration to use on every scrape request. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description HonorLabels chooses the metric's labels on collisions with target labels. */
      honorLabels?: boolean;
      /** @description HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data. */
      honorTimestamps?: boolean;
      /** @description HTTPSDConfigs defines a list of HTTP service discovery configurations. */
      httpSDConfigs?: {
        /** @description Authorization header configuration to authenticate against the target HTTP endpoint.
         *     Cannot be set at the same time as `oAuth2`, or `basicAuth`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to authenticate against the target HTTP endpoint.
         *     More info: https://prometheus.io/docs/operating/configuration/#endpoints
         *     Cannot be set at the same time as `authorization`, or `oAuth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration to authenticate against the target HTTP endpoint.
         *     Cannot be set at the same time as `authorization`, or `basicAuth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description RefreshInterval configures the refresh interval at which Prometheus will re-query the
         *     endpoint to update the target list. */
        refreshInterval?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description URL from which the targets are fetched. */
        url: string;
      }[];
      /** @description IonosSDConfigs defines a list of IONOS service discovery configurations. */
      ionosSDConfigs?: {
        /** @description Authorization` header configuration, required when using IONOS. */
        authorization: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description The unique ID of the IONOS data center. */
        datacenterID: string;
        /** @description Configure whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether the HTTP requests should follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Configure whether to enable OAuth2. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description Port to scrape the metrics from.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Refresh interval to re-read the list of resources. */
        refreshInterval?: string;
        /** @description TLS configuration to use when connecting to the IONOS API. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description The value of the `job` label assigned to the scraped metrics by default.
       *
       *     The `job_name` field in the rendered scrape configuration is always controlled by the
       *     operator to prevent duplicate job names, which Prometheus does not allow. Instead the
       *     `job` label is set by means of relabeling configs. */
      jobName?: string;
      /**
       * Format: int64
       * @description Per-scrape limit on the number of targets dropped by relabeling
       *     that will be kept in memory. 0 means no limit.
       *
       *     It requires Prometheus >= v2.47.0.
       */
      keepDroppedTargets?: number;
      /** @description KubernetesSDConfigs defines a list of Kubernetes service discovery configurations. */
      kubernetesSDConfigs?: {
        /** @description The API server address consisting of a hostname or IP address followed
         *     by an optional port number.
         *     If left empty, Prometheus is assumed to run inside
         *     of the cluster. It will discover API servers automatically and use the pod's
         *     CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/. */
        apiServer?: string;
        /** @description Optional metadata to attach to discovered targets.
         *     It requires Prometheus >= v2.35.0 when using the `Pod` role and
         *     Prometheus >= v2.37.0 for `Endpoints` and `Endpointslice` roles. */
        attachMetadata?: {
          /** @description Attaches node metadata to discovered targets.
           *     When set to true, Prometheus must have the `get` permission on the
           *     `Nodes` objects.
           *     Only valid for Pod, Endpoint and Endpointslice roles. */
          node?: boolean;
        };
        /** @description Authorization header to use on every scrape request.
         *     Cannot be set at the same time as `basicAuth`, or `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request.
         *     Cannot be set at the same time as `authorization`, or `oauth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description Optional namespace discovery. If omitted, Prometheus discovers targets across all namespaces. */
        namespaces?: {
          /** @description List of namespaces where to watch for resources.
           *     If empty and `ownNamespace` isn't true, Prometheus watches for resources in all namespaces. */
          names?: string[];
          /** @description Includes the namespace in which the Prometheus pod runs to the list of watched namespaces. */
          ownNamespace?: boolean;
        };
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization`, or `basicAuth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /**
         * @description Role of the Kubernetes entities that should be discovered.
         *     Role `Endpointslice` requires Prometheus >= v2.21.0
         * @enum {string}
         */
        role: "Pod" | "Endpoints" | "Ingress" | "Service" | "Node" | "EndpointSlice";
        /** @description Selector to select objects.
         *     It requires Prometheus >= v2.17.0 */
        selectors?: {
          /** @description An optional field selector to limit the service discovery to resources which have fields with specific values.
           *     e.g: `metadata.name=foobar` */
          field?: string;
          /** @description An optional label selector to limit the service discovery to resources with specific labels and label values.
           *     e.g: `node.kubernetes.io/instance-type=master` */
          label?: string;
          /**
           * @description Role specifies the type of Kubernetes resource to limit the service discovery to.
           *     Accepted values are: Node, Pod, Endpoints, EndpointSlice, Service, Ingress.
           * @enum {string}
           */
          role: "Pod" | "Endpoints" | "Ingress" | "Service" | "Node" | "EndpointSlice";
        }[];
        /** @description TLS configuration to connect to the Kubernetes API. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description KumaSDConfigs defines a list of Kuma service discovery configurations. */
      kumaSDConfigs?: {
        /** @description Authorization header to use on every scrape request. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Client id is used by Kuma Control Plane to compute Monitoring Assignment for specific Prometheus backend. */
        clientID?: string;
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description The time after which the monitoring assignments are refreshed. */
        fetchTimeout?: string;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization`, or `basicAuth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description The time to wait between polling update requests. */
        refreshInterval?: string;
        /** @description Address of the Kuma Control Plane's MADS xDS server. */
        server: string;
        /** @description TLS configuration to use on every scrape request */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /**
       * Format: int64
       * @description Per-scrape limit on number of labels that will be accepted for a sample.
       *     Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelLimit?: number;
      /**
       * Format: int64
       * @description Per-scrape limit on length of labels name that will be accepted for a sample.
       *     Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelNameLengthLimit?: number;
      /**
       * Format: int64
       * @description Per-scrape limit on length of labels value that will be accepted for a sample.
       *     Only valid in Prometheus versions 2.27.0 and newer.
       */
      labelValueLengthLimit?: number;
      /** @description LightsailSDConfigs defines a list of Lightsail service discovery configurations. */
      lightSailSDConfigs?: {
        /** @description AccessKey is the AWS API key. */
        accessKey?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Optional `authorization` HTTP header configuration.
         *     Cannot be set at the same time as `basicAuth`, or `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Optional HTTP basic authentication information.
         *     Cannot be set at the same time as `authorization`, or `oauth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Configure whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Custom endpoint to be used. */
        endpoint?: string;
        /** @description Configure whether the HTTP requests should follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth2.0 configuration.
         *     Cannot be set at the same time as `basicAuth`, or `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description Port to scrape the metrics from.
         *     If using the public IP address, this must instead be specified in the relabeling rule.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Refresh interval to re-read the list of instances. */
        refreshInterval?: string;
        /** @description The AWS region. */
        region?: string;
        /** @description AWS Role ARN, an alternative to using AWS API keys. */
        roleARN?: string;
        /** @description SecretKey is the AWS API secret. */
        secretKey?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description TLS configuration to connect to the Puppet DB. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description LinodeSDConfigs defines a list of Linode service discovery configurations. */
      linodeSDConfigs?: {
        /** @description Authorization header configuration. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be used at the same time as `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description Default port to scrape metrics from.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Time after which the linode instances are refreshed. */
        refreshInterval?: string;
        /** @description Optional region to filter on. */
        region?: string;
        /** @description The string by which Linode Instance tags are joined into the tag label. */
        tagSeparator?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description MetricRelabelConfigs to apply to samples before ingestion. */
      metricRelabelings?: {
        /**
         * @description Action to perform based on the regex matching.
         *
         *     `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0.
         *     `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
         *
         *     Default: "Replace"
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
         *
         *     Only applicable when the action is `HashMod`.
         */
        modulus?: number;
        /** @description Regular expression against which the extracted value is matched. */
        regex?: string;
        /** @description Replacement value against which a Replace action is performed if the
         *     regular expression matches.
         *
         *     Regex capture groups are available. */
        replacement?: string;
        /** @description Separator is the string between concatenated SourceLabels. */
        separator?: string;
        /** @description The source labels select values from existing labels. Their content is
         *     concatenated using the configured Separator and matched against the
         *     configured regular expression. */
        sourceLabels?: string[];
        /** @description Label to which the resulting string is written in a replacement.
         *
         *     It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`,
         *     `KeepEqual` and `DropEqual` actions.
         *
         *     Regex capture groups are available. */
        targetLabel?: string;
      }[];
      /** @description MetricsPath HTTP path to scrape for metrics. If empty, Prometheus uses the default value (e.g. /metrics). */
      metricsPath?: string;
      /**
       * Format: int64
       * @description If there are more than this many buckets in a native histogram,
       *     buckets will be merged to stay within the limit.
       *     It requires Prometheus >= v2.45.0.
       */
      nativeHistogramBucketLimit?: number;
      /** @description If the growth factor of one bucket to the next is smaller than this,
       *     buckets will be merged to increase the factor sufficiently.
       *     It requires Prometheus >= v2.50.0. */
      nativeHistogramMinBucketFactor?: number | string;
      /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
       *     that should be excluded from proxying. IP and domain names can
       *     contain port numbers.
       *
       *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
      noProxy?: string;
      /** @description NomadSDConfigs defines a list of Nomad service discovery configurations. */
      nomadSDConfigs?: {
        /** @description The information to access the Nomad API. It is to be defined
         *     as the Nomad documentation requires. */
        allowStale?: boolean;
        /** @description Authorization header to use on every scrape request. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description BasicAuth information to use on every scrape request. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        namespace?: string;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth 2.0 configuration.
         *     Cannot be set at the same time as `authorization` or `basic_auth`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Duration is a valid time duration that can be parsed by Prometheus model.ParseDuration() function.
         *     Supported units: y, w, d, h, m, s, ms
         *     Examples: `30s`, `1m`, `1h20m15s`, `15d` */
        refreshInterval?: string;
        region?: string;
        server: string;
        tagSeparator?: string;
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
      }[];
      /** @description OAuth2 configuration to use on every scrape request. */
      oauth2?: {
        /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
         *     OAuth2 client's ID. */
        clientId: {
          /** @description ConfigMap containing data to use for the targets. */
          configMap?: {
            /** @description The key to select. */
            key: string;
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };
          /** @description Secret containing data to use for the targets. */
          secret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
         *     client's secret. */
        clientSecret: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /** @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description `endpointParams` configures the HTTP parameters to append to the token
         *     URL. */
        endpointParams?: {
          [key: string]: string;
        };
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description `scopes` defines the OAuth2 scopes used for the token request. */
        scopes?: string[];
        /** @description TLS configuration to use when connecting to the OAuth2 server.
         *     It requires Prometheus >= v2.43.0. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /** @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
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
              /** @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /** @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
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
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0. */
          maxVersion?: string;
          /** @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0. */
          minVersion?: string;
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description `tokenURL` configures the URL to fetch the token from. */
        tokenUrl: string;
      };
      /** @description OpenStackSDConfigs defines a list of OpenStack service discovery configurations. */
      openstackSDConfigs?: {
        /** @description Whether the service discovery should list all instances for all projects.
         *     It is only relevant for the 'instance' role and usually requires admin permissions. */
        allTenants?: boolean;
        /** @description ApplicationCredentialID */
        applicationCredentialId?: string;
        /** @description The ApplicationCredentialID or ApplicationCredentialName fields are
         *     required if using an application credential to authenticate. Some providers
         *     allow you to create an application credential to authenticate rather than a
         *     password. */
        applicationCredentialName?: string;
        /** @description The applicationCredentialSecret field is required if using an application
         *     credential to authenticate. */
        applicationCredentialSecret?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /**
         * @description Availability of the endpoint to connect to.
         * @enum {string}
         */
        availability?: "Public" | "public" | "Admin" | "admin" | "Internal" | "internal";
        /** @description DomainID */
        domainID?: string;
        /** @description At most one of domainId and domainName must be provided if using username
         *     with Identity V3. Otherwise, either are optional. */
        domainName?: string;
        /** @description IdentityEndpoint specifies the HTTP endpoint that is required to work with
         *     the Identity API of the appropriate version. */
        identityEndpoint?: string;
        /** @description Password for the Identity V2 and V3 APIs. Consult with your provider's
         *     control panel to discover your account's preferred method of authentication. */
        password?: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /**
         * Format: int32
         * @description The port to scrape metrics from. If using the public IP address, this must
         *     instead be specified in the relabeling rule.
         */
        port?: number;
        /** @description  ProjectID */
        projectID?: string;
        /** @description The ProjectId and ProjectName fields are optional for the Identity V2 API.
         *     Some providers allow you to specify a ProjectName instead of the ProjectId.
         *     Some require both. Your provider's authentication policies will determine
         *     how these fields influence authentication. */
        projectName?: string;
        /** @description Refresh interval to re-read the instance list. */
        refreshInterval?: string;
        /** @description The OpenStack Region. */
        region: string;
        /**
         * @description The OpenStack role of entities that should be discovered.
         *
         *     Note: The `LoadBalancer` role requires Prometheus >= v3.2.0.
         * @enum {string}
         */
        role: "Instance" | "Hypervisor" | "LoadBalancer";
        /** @description TLS configuration applying to the target HTTP endpoint. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description UserID */
        userid?: string;
        /** @description Username is required if using Identity V2 API. Consult with your provider's
         *     control panel to discover your account's username.
         *     In Identity V3, either userid or a combination of username
         *     and domainId or domainName are needed */
        username?: string;
      }[];
      /** @description OVHCloudSDConfigs defines a list of OVHcloud service discovery configurations. */
      ovhcloudSDConfigs?: {
        /** @description Access key to use. https://api.ovh.com. */
        applicationKey: string;
        /** @description SecretKeySelector selects a key of a Secret. */
        applicationSecret: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description SecretKeySelector selects a key of a Secret. */
        consumerKey: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Custom endpoint to be used. */
        endpoint?: string;
        /** @description Refresh interval to re-read the resources list. */
        refreshInterval?: string;
        /** @description Service of the targets to retrieve. Must be `VPS` or `DedicatedServer`. */
        service: string & (("VPS" | "DedicatedServer") & ("VPS" | "DedicatedServer"));
      }[];
      /** @description Optional HTTP URL parameters */
      params?: {
        [key: string]: string[];
      };
      /** @description ProxyConnectHeader optionally specifies headers to send to
       *     proxies during CONNECT requests.
       *
       *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
      proxyConnectHeader?: {
        [key: string]: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        }[];
      };
      /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
       *
       *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
      proxyFromEnvironment?: boolean;
      /** @description `proxyURL` defines the HTTP proxy server to use. */
      proxyUrl?: string;
      /** @description PuppetDBSDConfigs defines a list of PuppetDB service discovery configurations. */
      puppetDBSDConfigs?: {
        /** @description Optional `authorization` HTTP header configuration.
         *     Cannot be set at the same time as `basicAuth`, or `oauth2`. */
        authorization?: {
          /** @description Selects a key of a Secret in the namespace that contains the credentials for authentication. */
          credentials?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description Defines the authentication type. The value is case-insensitive.
           *
           *     "Basic" is not a supported value.
           *
           *     Default: "Bearer" */
          type?: string;
        };
        /** @description Optional HTTP basic authentication information.
         *     Cannot be set at the same time as `authorization`, or `oauth2`. */
        basicAuth?: {
          /** @description `password` specifies a key of a Secret containing the password for
           *     authentication. */
          password?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `username` specifies a key of a Secret containing the username for
           *     authentication. */
          username?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
        };
        /** @description Configure whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether the HTTP requests should follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description Whether to include the parameters as meta labels.
         *     Note: Enabling this exposes parameters in the Prometheus UI and API. Make sure
         *     that you don't have secrets exposed as parameters if you enable this. */
        includeParameters?: boolean;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /** @description Optional OAuth2.0 configuration.
         *     Cannot be set at the same time as `basicAuth`, or `authorization`. */
        oauth2?: {
          /** @description `clientId` specifies a key of a Secret or ConfigMap containing the
           *     OAuth2 client's ID. */
          clientId: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
          };
          /** @description `clientSecret` specifies a key of a Secret containing the OAuth2
           *     client's secret. */
          clientSecret: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /** @description `endpointParams` configures the HTTP parameters to append to the token
           *     URL. */
          endpointParams?: {
            [key: string]: string;
          };
          /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
           *     that should be excluded from proxying. IP and domain names can
           *     contain port numbers.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          noProxy?: string;
          /** @description ProxyConnectHeader optionally specifies headers to send to
           *     proxies during CONNECT requests.
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyConnectHeader?: {
            [key: string]: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            }[];
          };
          /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
           *
           *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
          proxyFromEnvironment?: boolean;
          /** @description `proxyURL` defines the HTTP proxy server to use. */
          proxyUrl?: string;
          /** @description `scopes` defines the OAuth2 scopes used for the token request. */
          scopes?: string[];
          /** @description TLS configuration to use when connecting to the OAuth2 server.
           *     It requires Prometheus >= v2.43.0. */
          tlsConfig?: {
            /** @description Certificate authority used when verifying server certificates. */
            ca?: {
              /** @description ConfigMap containing data to use for the targets. */
              configMap?: {
                /** @description The key to select. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
                /** @description Specify whether the ConfigMap or its key must be defined */
                optional?: boolean;
              };
              /** @description Secret containing data to use for the targets. */
              secret?: {
                /** @description The key of the secret to select from.  Must be a valid secret key. */
                key: string;
                /**
                 * @description Name of the referent.
                 *     This field is effectively required, but due to backwards compatibility is
                 *     allowed to be empty. Instances of this type with an empty value here are
                 *     almost certainly wrong.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 * @default
                 */
                name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the Secret or its key must be defined */
              optional?: boolean;
            };
            /**
             * @description Maximum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.41.0.
             * @enum {string}
             */
            maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /**
             * @description Minimum acceptable TLS version.
             *
             *     It requires Prometheus >= v2.35.0.
             * @enum {string}
             */
            minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
            /** @description Used to verify the hostname for the targets. */
            serverName?: string;
          };
          /** @description `tokenURL` configures the URL to fetch the token from. */
          tokenUrl: string;
        };
        /**
         * Format: int32
         * @description Port to scrape the metrics from.
         */
        port?: number;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Puppet Query Language (PQL) query. Only resources are supported.
         *     https://puppet.com/docs/puppetdb/latest/api/query/v4/pql.html */
        query: string;
        /** @description Refresh interval to re-read the list of resources. */
        refreshInterval?: string;
        /** @description TLS configuration to connect to the Puppet DB. */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description The URL of the PuppetDB root query endpoint. */
        url: string;
      }[];
      /** @description RelabelConfigs defines how to rewrite the target's labels before scraping.
       *     Prometheus Operator automatically adds relabelings for a few standard Kubernetes fields.
       *     The original scrape job's name is available via the `__tmp_prometheus_job_name` label.
       *     More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config */
      relabelings?: {
        /**
         * @description Action to perform based on the regex matching.
         *
         *     `Uppercase` and `Lowercase` actions require Prometheus >= v2.36.0.
         *     `DropEqual` and `KeepEqual` actions require Prometheus >= v2.41.0.
         *
         *     Default: "Replace"
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
         *
         *     Only applicable when the action is `HashMod`.
         */
        modulus?: number;
        /** @description Regular expression against which the extracted value is matched. */
        regex?: string;
        /** @description Replacement value against which a Replace action is performed if the
         *     regular expression matches.
         *
         *     Regex capture groups are available. */
        replacement?: string;
        /** @description Separator is the string between concatenated SourceLabels. */
        separator?: string;
        /** @description The source labels select values from existing labels. Their content is
         *     concatenated using the configured Separator and matched against the
         *     configured regular expression. */
        sourceLabels?: string[];
        /** @description Label to which the resulting string is written in a replacement.
         *
         *     It is mandatory for `Replace`, `HashMod`, `Lowercase`, `Uppercase`,
         *     `KeepEqual` and `DropEqual` actions.
         *
         *     Regex capture groups are available. */
        targetLabel?: string;
      }[];
      /**
       * Format: int64
       * @description SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
       */
      sampleLimit?: number;
      /** @description ScalewaySDConfigs defines a list of Scaleway instances and baremetal service discovery configurations. */
      scalewaySDConfigs?: {
        /** @description Access key to use. https://console.scaleway.com/project/credentials */
        accessKey: string;
        /** @description API URL to use when doing the server listing requests. */
        apiURL?: string;
        /** @description Whether to enable HTTP2. */
        enableHTTP2?: boolean;
        /** @description Configure whether HTTP requests follow HTTP 3xx redirects. */
        followRedirects?: boolean;
        /** @description NameFilter specify a name filter (works as a LIKE) to apply on the server listing request. */
        nameFilter?: string;
        /** @description `noProxy` is a comma-separated string that can contain IPs, CIDR notation, domain names
         *     that should be excluded from proxying. IP and domain names can
         *     contain port numbers.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        noProxy?: string;
        /**
         * Format: int32
         * @description The port to scrape metrics from.
         */
        port?: number;
        /** @description Project ID of the targets. */
        projectID: string;
        /** @description ProxyConnectHeader optionally specifies headers to send to
         *     proxies during CONNECT requests.
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyConnectHeader?: {
          [key: string]: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          }[];
        };
        /** @description Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY).
         *
         *     It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0. */
        proxyFromEnvironment?: boolean;
        /** @description `proxyURL` defines the HTTP proxy server to use. */
        proxyUrl?: string;
        /** @description Refresh interval to re-read the list of instances. */
        refreshInterval?: string;
        /**
         * @description Service of the targets to retrieve. Must be `Instance` or `Baremetal`.
         * @enum {string}
         */
        role: "Instance" | "Baremetal";
        /** @description Secret key to use when listing targets. */
        secretKey: {
          /** @description The key of the secret to select from.  Must be a valid secret key. */
          key: string;
          /**
           * @description Name of the referent.
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           * @default
           */
          name: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description TagsFilter specify a tag filter (a server needs to have all defined tags to be listed) to apply on the server listing request. */
        tagsFilter?: string[];
        /** @description TLS configuration to use on every scrape request */
        tlsConfig?: {
          /** @description Certificate authority used when verifying server certificates. */
          ca?: {
            /** @description ConfigMap containing data to use for the targets. */
            configMap?: {
              /** @description The key to select. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
              /** @description Specify whether the ConfigMap or its key must be defined */
              optional?: boolean;
            };
            /** @description Secret containing data to use for the targets. */
            secret?: {
              /** @description The key of the secret to select from.  Must be a valid secret key. */
              key: string;
              /**
               * @description Name of the referent.
               *     This field is effectively required, but due to backwards compatibility is
               *     allowed to be empty. Instances of this type with an empty value here are
               *     almost certainly wrong.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               * @default
               */
              name: string;
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
            /**
             * @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * @default
             */
            name: string;
            /** @description Specify whether the Secret or its key must be defined */
            optional?: boolean;
          };
          /**
           * @description Maximum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.41.0.
           * @enum {string}
           */
          maxVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /**
           * @description Minimum acceptable TLS version.
           *
           *     It requires Prometheus >= v2.35.0.
           * @enum {string}
           */
          minVersion?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
          /** @description Used to verify the hostname for the targets. */
          serverName?: string;
        };
        /** @description Zone is the availability zone of your targets (e.g. fr-par-1). */
        zone?: string;
      }[];
      /** @description Configures the protocol scheme used for requests.
       *     If empty, Prometheus uses HTTP by default. */
      scheme?: string;
      /** @description The scrape class to apply. */
      scrapeClass?: string;
      /** @description Whether to scrape a classic histogram that is also exposed as a native histogram.
       *     It requires Prometheus >= v2.45.0. */
      scrapeClassicHistograms?: boolean;
      /** @description ScrapeInterval is the interval between consecutive scrapes. */
      scrapeInterval?: string;
      /** @description The protocols to negotiate during a scrape. It tells clients the
       *     protocols supported by Prometheus in order of preference (from most to least preferred).
       *
       *     If unset, Prometheus uses its default value.
       *
       *     It requires Prometheus >= v2.49.0. */
      scrapeProtocols?: (
        | "PrometheusProto"
        | "OpenMetricsText0.0.1"
        | "OpenMetricsText1.0.0"
        | "PrometheusText0.0.4"
        | "PrometheusText1.0.0"
      )[];
      /** @description ScrapeTimeout is the number of seconds to wait until a scrape request times out.
       *     The value cannot be greater than the scrape interval otherwise the operator will reject the resource. */
      scrapeTimeout?: string;
      /** @description StaticConfigs defines a list of static targets with a common label set. */
      staticConfigs?: {
        /** @description Labels assigned to all metrics scraped from the targets. */
        labels?: {
          [key: string]: string;
        };
        /** @description List of targets for this static configuration. */
        targets: string[];
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
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };
          /** @description Secret containing data to use for the targets. */
          secret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
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
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Specify whether the ConfigMap or its key must be defined */
            optional?: boolean;
          };
          /** @description Secret containing data to use for the targets. */
          secret?: {
            /** @description The key of the secret to select from.  Must be a valid secret key. */
            key: string;
            /** @description Name of the referent.
             *     This field is effectively required, but due to backwards compatibility is
             *     allowed to be empty. Instances of this type with an empty value here are
             *     almost certainly wrong.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
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
           *     This field is effectively required, but due to backwards compatibility is
           *     allowed to be empty. Instances of this type with an empty value here are
           *     almost certainly wrong.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Specify whether the Secret or its key must be defined */
          optional?: boolean;
        };
        /** @description Maximum acceptable TLS version.
         *
         *     It requires Prometheus >= v2.41.0. */
        maxVersion?: string;
        /** @description Minimum acceptable TLS version.
         *
         *     It requires Prometheus >= v2.35.0. */
        minVersion?: string;
        /** @description Used to verify the hostname for the targets. */
        serverName?: string;
      };
      /** @description TrackTimestampsStaleness whether Prometheus tracks staleness of
       *     the metrics that have an explicit timestamp present in scraped data.
       *     Has no effect if `honorTimestamps` is false.
       *     It requires Prometheus >= v2.48.0. */
      trackTimestampsStaleness?: boolean;
    };
  };
}
