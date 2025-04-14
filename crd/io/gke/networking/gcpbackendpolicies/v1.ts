import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPBackendPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCPBackendPolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "GCPBackendPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCPBackendPolicyV1Config extends ManifestConfig {
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
      /** @description Default defines default policy configuration for the targeted resource. */
      default?: {
        /** @description BackendPreference indicates whether the backend should be fully utilized before sending traffic to backends with default preference. Can only be configured for multi-cluster service backends when GCPBackendPolicy targets ServiceExport. The default value is DEFAULT. */
        backendPreference?: string;
        /** @description ConnectionDraining contains configuration for connection draining */
        connectionDraining?: {
          /**
           * Format: int64
           * @description DrainingTimeoutSec is a BackendService parameter. It is used during removal of VMs from instance groups. This guarantees that for the specified time all existing connections to a VM will remain untouched, but no new connections will be accepted. Set timeout to zero to disable connection draining. Enable the feature by specifying a timeout of up to one hour. If the field is omitted, a default value (0s) will be used. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices
           */
          drainingTimeoutSec?: number;
        };
        /** @description IAP contains the configurations for Identity-Aware Proxy. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices Identity-Aware Proxy manages access control policies for backend services associated with a HTTPRoute, so they can be accessed only by authenticated users or applications with correct Identity and Access Management (IAM) role. */
        iap?: {
          /** @description ClientID is the OAuth2 client ID to use for the authentication flow. See iap.oauth2ClientId in https://cloud.google.com/compute/docs/reference/rest/v1/backendServices ClientID must be set if Enabled is set to true. */
          clientID?: string;
          /** @description Enabled denotes whether the serving infrastructure will authenticate and authorize all incoming requests. If true, the ClientID and Oauth2ClientSecret fields must be non-empty. If not specified, this defaults to false, which means Identity-Aware Proxy is disabled by default. */
          enabled?: boolean;
          /** @description Oauth2ClientSecret contains the OAuth2 client secret to use for the authentication flow. Oauth2ClientSecret must be set if Enabled is set to true. */
          oauth2ClientSecret?: {
            /** @description Name is the reference to the secret resource. */
            name?: string;
          };
        };
        /** @description LoggingConfig contains configuration for logging. */
        logging?: {
          /** @description Enabled denotes whether to enable logging for the load balancer traffic served by this backend service. If not specified, this defaults to false, which means logging is disabled by default. */
          enabled?: boolean;
          /**
           * Format: int32
           * @description This field can only be specified if logging is enabled for this backend service. The value of the field must be in range [0, 1e6]. This is converted to a floating point value in the range [0, 1] by dividing by 1e6 for use with the GCE api and interpreted as the proportion of requests that will be logged. By default all requests will be logged.
           */
          sampleRate?: number;
        };
        /**
         * Format: int64
         * @description MaxRatePerEndpoint is a BackendService parameter. It is used to limit the rate of traffic to each endpoint. If the field is omitted, a default value (1e8) will be used. In the future we may add selector based settings for MaxRatePerEndpoint but they will co-exist with this as a top-level setting.
         */
        maxRatePerEndpoint?: number;
        /** @description SecurityPolicy is a reference to a GCP Cloud Armor SecurityPolicy resource. */
        securityPolicy?: string;
        /** @description SessionAffinityConfig contains configuration for stickiness parameters. */
        sessionAffinity?: {
          /**
           * Format: int64
           * @description CookieTTLSec specifies the lifetime of cookies in seconds. This setting requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600).
           */
          cookieTtlSec?: number;
          /** @description Type specifies the type of session affinity to use. If not specified, this defaults to NONE. */
          type?: string;
        };
        /**
         * Format: int64
         * @description TimeoutSec is a BackendService parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices. If the field is omitted, a default value (30s) will be used.
         */
        timeoutSec?: number;
      };
      /** @description TargetRef identifies an API object to apply policy to. */
      targetRef: {
        /** @description Group is the group of the target resource. */
        group: string;
        /** @description Kind is kind of the target resource. */
        kind: string;
        /** @description Name is the name of the target resource. */
        name: string;
        /** @description Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy. */
        namespace?: string;
      };
    };
  };
}
