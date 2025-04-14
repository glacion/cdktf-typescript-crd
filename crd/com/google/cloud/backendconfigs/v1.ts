import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBackendConfigV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesBackendConfigV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloud.google.com/v1", kind: "BackendConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesBackendConfigV1Config extends ManifestConfig {
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
      /** @description CDNConfig contains configuration for CDN-enabled backends. */
      cdn?: {
        bypassCacheOnRequestHeaders?: {
          /** @description The header field name to match on when bypassing cache. Values are case-insensitive. */
          headerName?: string;
        }[];
        cacheMode?: string;
        /** @description CacheKeyPolicy contains configuration for how requests to a CDN-enabled backend are cached. */
        cachePolicy?: {
          /** @description If true, requests to different hosts will be cached separately. */
          includeHost?: boolean;
          /** @description If true, http and https requests will be cached separately. */
          includeProtocol?: boolean;
          /** @description If true, query string parameters are included in the cache key according to QueryStringBlacklist and QueryStringWhitelist. If neither is set, the entire query string is included and if false the entire query string is excluded. */
          includeQueryString?: boolean;
          /** @description Names of query strint parameters to exclude from cache keys. All other parameters are included. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both. */
          queryStringBlacklist?: string[];
          /** @description Names of query string parameters to include in cache keys. All other parameters are excluded. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both. */
          queryStringWhitelist?: string[];
        };
        /** Format: int64 */
        clientTtl?: number;
        /** Format: int64 */
        defaultTtl?: number;
        enabled: boolean;
        /** Format: int64 */
        maxTtl?: number;
        negativeCaching?: boolean;
        negativeCachingPolicy?: {
          /**
           * Format: int64
           * @description The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501 are can be specified as values, and you cannot specify a status code more than once.
           */
          code?: number;
          /**
           * Format: int64
           * @description The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
           */
          ttl?: number;
        }[];
        requestCoalescing?: boolean;
        /** Format: int64 */
        serveWhileStale?: number;
        /** Format: int64 */
        signedUrlCacheMaxAgeSec?: number;
        signedUrlKeys?: {
          /** @description KeyName: Name of the key. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
          keyName?: string;
          /** @description KeyValue: 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string. */
          keyValue?: string;
          /** @description The name of a k8s secret which stores the 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string */
          secretName?: string;
        }[];
      };
      /** @description ConnectionDrainingConfig contains configuration for connection draining. For now the draining timeout. May manage more settings in the future. */
      connectionDraining?: {
        /**
         * Format: int64
         * @description Draining timeout in seconds.
         */
        drainingTimeoutSec?: number;
      };
      /** @description CustomRequestHeadersConfig contains configuration for custom request headers */
      customRequestHeaders?: {
        headers?: string[];
      };
      /** @description CustomResponseHeadersConfig contains configuration for custom response headers */
      customResponseHeaders?: {
        headers?: string[];
      };
      /** @description HealthCheckConfig contains configuration for the health check. */
      healthCheck?: {
        /**
         * Format: int64
         * @description CheckIntervalSec is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
         */
        checkIntervalSec?: number;
        /**
         * Format: int64
         * @description HealthyThreshold is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
         */
        healthyThreshold?: number;
        /**
         * Format: int64
         * @description Port is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks. If Port is used, the controller updates portSpecification as well
         */
        port?: number;
        /** @description RequestPath is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks. */
        requestPath?: string;
        /**
         * Format: int64
         * @description TimeoutSec is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
         */
        timeoutSec?: number;
        /** @description Type is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks. */
        type?: string;
        /**
         * Format: int64
         * @description UnhealthyThreshold is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
         */
        unhealthyThreshold?: number;
      };
      /** @description IAPConfig contains configuration for IAP-enabled backends. */
      iap?: {
        enabled: boolean;
        /** @description OAuthClientCredentials contains credentials for a single IAP-enabled backend. */
        oauthclientCredentials?: {
          /** @description Direct reference to OAuth client id. */
          clientID?: string;
          /** @description Direct reference to OAuth client secret. */
          clientSecret?: string;
          /** @description The name of a k8s secret which stores the OAuth client id & secret. */
          secretName: string;
        };
      };
      /** @description LogConfig contains configuration for logging. */
      logging?: {
        /** @description This field denotes whether to enable logging for the load balancer traffic served by this backend service. */
        enable?: boolean;
        /**
         * Format: double
         * @description This field can only be specified if logging is enabled for this backend service. The value of the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0.
         */
        sampleRate?: number;
      };
      /** @description SecurityPolicyConfig contains configuration for CloudArmor-enabled backends. If not specified, the controller will not reconcile the security policy configuration. In other words, users can make changes in GCE without the controller overwriting them. */
      securityPolicy?: {
        /** @description Name of the security policy that should be associated. If set to empty, the existing security policy on the backend will be removed. */
        name: string;
      };
      /** @description SessionAffinityConfig contains configuration for stickiness parameters. */
      sessionAffinity?: {
        /** Format: int64 */
        affinityCookieTtlSec?: number;
        affinityType?: string;
      };
      /** Format: int64 */
      timeoutSec?: number;
    };
  };
}
