import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBackendConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesBackendConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloud.google.com/v1beta1", kind: "BackendConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesBackendConfigV1beta1Config extends ManifestConfig {
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
        enabled: boolean;
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
        /** Format: int64 */
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
