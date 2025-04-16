import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeBackendServiceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeBackendServiceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeBackendServiceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeBackendService";
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
    spec: {
      /** @description Lifetime of cookies in seconds if session_affinity is
       *     GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
       *     only until the end of the browser session (or equivalent). The
       *     maximum allowed value for TTL is one day.
       *
       *     When the load balancing scheme is INTERNAL, this field is not used. */
      affinityCookieTtlSec?: number;
      /** @description The set of backends that serve this BackendService. */
      backend?: {
        /** @description Specifies the balancing mode for this backend.
         *
         *     For global HTTP(S) or TCP/SSL load balancing, the default is
         *     UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
         *     and CONNECTION (for TCP/SSL).
         *
         *     See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
         *     for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]. */
        balancingMode?: string;
        /** @description A multiplier applied to the group's maximum servicing capacity
         *     (based on UTILIZATION, RATE or CONNECTION).
         *
         *     Default value is 1, which means the group will serve up to 100%
         *     of its configured capacity (depending on balancingMode). A
         *     setting of 0 means the group is completely drained, offering
         *     0% of its available Capacity. Valid range is [0.0,1.0]. */
        capacityScaler?: number;
        /** @description An optional description of this resource.
         *     Provide this property when you create the resource. */
        description?: string;
        /** @description This field designates whether this is a failover backend. More
         *     than one failover backend can be configured for a given RegionBackendService. */
        failover?: boolean;
        /** @description Reference to a ComputeInstanceGroup or ComputeNetworkEndpointGroup
         *     resource. In case of instance group this defines the list of
         *     instances that serve traffic. Member virtual machine instances from
         *     each instance group must live in the same zone as the instance
         *     group itself. No two backends in a backend service are allowed to
         *     use same Instance Group resource.
         *
         *     For Network Endpoint Groups this defines list of endpoints. All
         *     endpoints of Network Endpoint Group must be hosted on instances
         *     located in the same zone as the Network Endpoint Group.
         *
         *     Backend services cannot mix Instance Group and Network Endpoint
         *     Group backends.
         *
         *     When the 'load_balancing_scheme' is INTERNAL, only instance groups
         *     are supported. */
        group: {
          instanceGroupRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeInstanceGroup` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          networkEndpointGroupRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeNetworkEndpointGroup` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        } & (unknown | unknown);
        /** @description The max number of simultaneous connections for the group. Can
         *     be used with either CONNECTION or UTILIZATION balancing modes.
         *
         *     For CONNECTION mode, either maxConnections or one
         *     of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
         *     as appropriate for group type, must be set. */
        maxConnections?: number;
        /** @description The max number of simultaneous connections that a single backend
         *     network endpoint can handle. This is used to calculate the
         *     capacity of the group. Can be used in either CONNECTION or
         *     UTILIZATION balancing modes.
         *
         *     For CONNECTION mode, either
         *     maxConnections or maxConnectionsPerEndpoint must be set. */
        maxConnectionsPerEndpoint?: number;
        /** @description The max number of simultaneous connections that a single
         *     backend instance can handle. This is used to calculate the
         *     capacity of the group. Can be used in either CONNECTION or
         *     UTILIZATION balancing modes.
         *
         *     For CONNECTION mode, either maxConnections or
         *     maxConnectionsPerInstance must be set. */
        maxConnectionsPerInstance?: number;
        /** @description The max requests per second (RPS) of the group.
         *
         *     Can be used with either RATE or UTILIZATION balancing modes,
         *     but required if RATE mode. For RATE mode, either maxRate or one
         *     of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
         *     group type, must be set. */
        maxRate?: number;
        /** @description The max requests per second (RPS) that a single backend network
         *     endpoint can handle. This is used to calculate the capacity of
         *     the group. Can be used in either balancing mode. For RATE mode,
         *     either maxRate or maxRatePerEndpoint must be set. */
        maxRatePerEndpoint?: number;
        /** @description The max requests per second (RPS) that a single backend
         *     instance can handle. This is used to calculate the capacity of
         *     the group. Can be used in either balancing mode. For RATE mode,
         *     either maxRate or maxRatePerInstance must be set. */
        maxRatePerInstance?: number;
        /** @description Used when balancingMode is UTILIZATION. This ratio defines the
         *     CPU utilization target for the group. Valid range is [0.0, 1.0]. */
        maxUtilization?: number;
      }[];
      /** @description Cloud CDN configuration for this BackendService. */
      cdnPolicy?: {
        /** @description Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified.
         *     The cache is bypassed for all cdnPolicy.cacheMode settings. */
        bypassCacheOnRequestHeaders?: {
          /** @description The header field name to match on when bypassing cache. Values are case-insensitive. */
          headerName: string;
        }[];
        /** @description The CacheKeyPolicy for this CdnPolicy. */
        cacheKeyPolicy?: {
          /** @description If true requests to different hosts will be cached separately. */
          includeHost?: boolean;
          /** @description Allows HTTP request headers (by name) to be used in the
           *     cache key. */
          includeHttpHeaders?: string[];
          /** @description Names of cookies to include in cache keys. */
          includeNamedCookies?: string[];
          /** @description If true, http and https requests will be cached separately. */
          includeProtocol?: boolean;
          /** @description If true, include query string parameters in the cache key
           *     according to query_string_whitelist and
           *     query_string_blacklist. If neither is set, the entire query
           *     string will be included.
           *
           *     If false, the query string will be excluded from the cache
           *     key entirely. */
          includeQueryString?: boolean;
          /** @description Names of query string parameters to exclude in cache keys.
           *
           *     All other parameters will be included. Either specify
           *     query_string_whitelist or query_string_blacklist, not both.
           *     '&' and '=' will be percent encoded and not treated as
           *     delimiters. */
          queryStringBlacklist?: string[];
          /** @description Names of query string parameters to include in cache keys.
           *
           *     All other parameters will be excluded. Either specify
           *     query_string_whitelist or query_string_blacklist, not both.
           *     '&' and '=' will be percent encoded and not treated as
           *     delimiters. */
          queryStringWhitelist?: string[];
        };
        /** @description Specifies the cache setting for all responses from this backend.
         *     The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]. */
        cacheMode?: string;
        /** @description Specifies the maximum allowed TTL for cached content served by this origin. */
        clientTtl?: number;
        /** @description Specifies the default TTL for cached content served by this origin for responses
         *     that do not have an existing valid TTL (max-age or s-max-age). */
        defaultTtl?: number;
        /** @description Specifies the maximum allowed TTL for cached content served by this origin. */
        maxTtl?: number;
        /** @description Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. */
        negativeCaching?: boolean;
        /** @description Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
         *     Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs. */
        negativeCachingPolicy?: {
          /** @description The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
           *     can be specified as values, and you cannot specify a status code more than once. */
          code?: number;
          /** @description The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
           *     (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL. */
          ttl?: number;
        }[];
        /** @description Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. */
        serveWhileStale?: number;
        /** @description Maximum number of seconds the response to a signed URL request
         *     will be considered fresh, defaults to 1hr (3600s). After this
         *     time period, the response will be revalidated before
         *     being served.
         *
         *     When serving responses to signed URL requests, Cloud CDN will
         *     internally behave as though all responses from this backend had a
         *     "Cache-Control: public, max-age=[TTL]" header, regardless of any
         *     existing Cache-Control header. The actual headers served in
         *     responses will not be altered. */
        signedUrlCacheMaxAgeSec?: number;
      };
      /** @description Settings controlling the volume of connections to a backend service. This field
       *     is applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED. */
      circuitBreakers?: {
        /** @description The timeout for new network connections to hosts. */
        connectTimeout?: {
          /** @description Span of time that's a fraction of a second at nanosecond
           *     resolution. Durations less than one second are represented
           *     with a 0 seconds field and a positive nanos field. Must
           *     be from 0 to 999,999,999 inclusive. */
          nanos?: number;
          /** @description Span of time at a resolution of a second.
           *     Must be from 0 to 315,576,000,000 inclusive. */
          seconds: number;
        };
        /** @description The maximum number of connections to the backend cluster.
         *     Defaults to 1024. */
        maxConnections?: number;
        /** @description The maximum number of pending requests to the backend cluster.
         *     Defaults to 1024. */
        maxPendingRequests?: number;
        /** @description The maximum number of parallel requests to the backend cluster.
         *     Defaults to 1024. */
        maxRequests?: number;
        /** @description Maximum requests for a single backend connection. This parameter
         *     is respected by both the HTTP/1.1 and HTTP/2 implementations. If
         *     not specified, there is no limit. Setting this parameter to 1
         *     will effectively disable keep alive. */
        maxRequestsPerConnection?: number;
        /** @description The maximum number of parallel retries to the backend cluster.
         *     Defaults to 3. */
        maxRetries?: number;
      };
      /** @description Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. */
      compressionMode?: string;
      /** @description Time for which instance will be drained (not accept new
       *     connections, but still work to finish started). */
      connectionDrainingTimeoutSec?: number;
      /** @description Connection Tracking configuration for this BackendService.
       *     This is available only for Layer 4 Internal Load Balancing and
       *     Network Load Balancing. */
      connectionTrackingPolicy?: {
        /** @description Specifies connection persistence when backends are unhealthy.
         *
         *     If set to 'DEFAULT_FOR_PROTOCOL', the existing connections persist on
         *     unhealthy backends only for connection-oriented protocols (TCP and SCTP)
         *     and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
         *     or the Session Affinity is configured for 5-tuple. They do not persist
         *     for UDP.
         *
         *     If set to 'NEVER_PERSIST', after a backend becomes unhealthy, the existing
         *     connections on the unhealthy backend are never persisted on the unhealthy
         *     backend. They are always diverted to newly selected healthy backends
         *     (unless all backends are unhealthy).
         *
         *     If set to 'ALWAYS_PERSIST', existing connections always persist on
         *     unhealthy backends regardless of protocol and session affinity. It is
         *     generally not recommended to use this mode overriding the default. Default value: "DEFAULT_FOR_PROTOCOL" Possible values: ["DEFAULT_FOR_PROTOCOL", "NEVER_PERSIST", "ALWAYS_PERSIST"]. */
        connectionPersistenceOnUnhealthyBackends?: string;
        /** @description Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly. */
        enableStrongAffinity?: boolean;
        /** @description Specifies how long to keep a Connection Tracking entry while there is
         *     no matching traffic (in seconds).
         *
         *     For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.
         *
         *     For NLB the minimum(default) is 60 seconds and the maximum is 16 hours. */
        idleTimeoutSec?: number;
        /** @description Specifies the key used for connection tracking. There are two options:
         *     'PER_CONNECTION': The Connection Tracking is performed as per the
         *     Connection Key (default Hash Method) for the specific protocol.
         *
         *     'PER_SESSION': The Connection Tracking is performed as per the
         *     configured Session Affinity. It matches the configured Session Affinity. Default value: "PER_CONNECTION" Possible values: ["PER_CONNECTION", "PER_SESSION"]. */
        trackingMode?: string;
      };
      /** @description Consistent Hash-based load balancing can be used to provide soft session
       *     affinity based on HTTP headers, cookies or other properties. This load balancing
       *     policy is applicable only for HTTP connections. The affinity to a particular
       *     destination host will be lost when one or more hosts are added/removed from the
       *     destination service. This field specifies parameters that control consistent
       *     hashing. This field only applies if the load_balancing_scheme is set to
       *     INTERNAL_SELF_MANAGED. This field is only applicable when locality_lb_policy is
       *     set to MAGLEV or RING_HASH. */
      consistentHash?: {
        /** @description Hash is based on HTTP Cookie. This field describes a HTTP cookie
         *     that will be used as the hash key for the consistent hash load
         *     balancer. If the cookie is not present, it will be generated.
         *     This field is applicable if the sessionAffinity is set to HTTP_COOKIE. */
        httpCookie?: {
          /** @description Name of the cookie. */
          name?: string;
          /** @description Path to set for the cookie. */
          path?: string;
          /** @description Lifetime of the cookie. */
          ttl?: {
            /** @description Span of time that's a fraction of a second at nanosecond
             *     resolution. Durations less than one second are represented
             *     with a 0 seconds field and a positive nanos field. Must
             *     be from 0 to 999,999,999 inclusive. */
            nanos?: number;
            /** @description Span of time at a resolution of a second.
             *     Must be from 0 to 315,576,000,000 inclusive. */
            seconds: number;
          };
        };
        /** @description The hash based on the value of the specified header field.
         *     This field is applicable if the sessionAffinity is set to HEADER_FIELD. */
        httpHeaderName?: string;
        /** @description The minimum number of virtual nodes to use for the hash ring.
         *     Larger ring sizes result in more granular load
         *     distributions. If the number of hosts in the load balancing pool
         *     is larger than the ring size, each host will be assigned a single
         *     virtual node.
         *     Defaults to 1024. */
        minimumRingSize?: number;
      };
      /** @description Headers that the HTTP/S load balancer should add to proxied
       *     requests. */
      customRequestHeaders?: string[];
      /** @description Headers that the HTTP/S load balancer should add to proxied
       *     responses. */
      customResponseHeaders?: string[];
      /** @description An optional description of this resource. */
      description?: string;
      /** @description The resource URL for the edge security policy associated with this
       *     backend service. */
      edgeSecurityPolicyRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSecurityPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description If true, enable Cloud CDN for this BackendService. */
      enableCdn?: boolean;
      /** @description Policy for failovers. */
      failoverPolicy?: {
        /** @description On failover or failback, this field indicates whether connection drain
         *     will be honored. Setting this to true has the following effect: connections
         *     to the old active pool are not drained. Connections to the new active pool
         *     use the timeout of 10 min (currently fixed). Setting to false has the
         *     following effect: both old and new connections will have a drain timeout
         *     of 10 min.
         *     This can be set to true only if the protocol is TCP.
         *     The default is false. */
        disableConnectionDrainOnFailover?: boolean;
        /** @description This option is used only when no healthy VMs are detected in the primary
         *     and backup instance groups. When set to true, traffic is dropped. When
         *     set to false, new connections are sent across all VMs in the primary group.
         *     The default is false. */
        dropTrafficIfUnhealthy?: boolean;
        /** @description The value of the field must be in [0, 1]. If the ratio of the healthy
         *     VMs in the primary backend is at or below this number, traffic arriving
         *     at the load-balanced IP will be directed to the failover backend.
         *     In case where 'failoverRatio' is not set or all the VMs in the backup
         *     backend are unhealthy, the traffic will be directed back to the primary
         *     backend in the "force" mode, where traffic will be spread to the healthy
         *     VMs with the best effort, or to all VMs when no VM is healthy.
         *     This field is only used with l4 load balancing. */
        failoverRatio?: number;
      };
      healthChecks?: ({
        healthCheckRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeHealthCheck` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        httpHealthCheckRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeHTTPHealthCheck` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      } & (unknown | unknown))[];
      /** @description Settings for enabling Cloud Identity Aware Proxy. */
      iap?: {
        /** @description DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.iap.oauth2ClientIdRef` instead. */
        oauth2ClientId?: string;
        /** @description OAuth2 Client ID for IAP. */
        oauth2ClientIdRef?: {
          /** @description Allowed value: The `name` field of an `IAPIdentityAwareProxyClient` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description OAuth2 Client Secret for IAP. */
        oauth2ClientSecret?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description OAuth2 Client Secret SHA-256 for IAP. */
        oauth2ClientSecretSha256?: string;
      } & (unknown | unknown);
      /** @description Immutable. Indicates whether the backend service will be used with internal or
       *     external load balancing. A backend service created for one type of
       *     load balancing cannot be used with the other. For more information, refer to
       *     [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]. */
      loadBalancingScheme?: string;
      /** @description A list of locality load balancing policies to be used in order of
       *     preference. Either the policy or the customPolicy field should be set.
       *     Overrides any value set in the localityLbPolicy field.
       *
       *     localityLbPolicies is only supported when the BackendService is referenced
       *     by a URL Map that is referenced by a target gRPC proxy that has the
       *     validateForProxyless field set to true. */
      localityLbPolicies?: {
        /** @description The configuration for a custom policy implemented by the user and
         *     deployed with the client. */
        customPolicy?: {
          /** @description An optional, arbitrary JSON object with configuration data, understood
           *     by a locally installed custom policy implementation. */
          data?: string;
          /** @description Identifies the custom policy.
           *
           *     The value should match the type the custom implementation is registered
           *     with on the gRPC clients. It should follow protocol buffer
           *     message naming conventions and include the full path (e.g.
           *     myorg.CustomLbPolicy). The maximum length is 256 characters.
           *
           *     Note that specifying the same custom policy more than once for a
           *     backend is not a valid configuration and will be rejected. */
          name: string;
        };
        /** @description The configuration for a built-in load balancing policy. */
        policy?: {
          /** @description The name of a locality load balancer policy to be used. The value
           *     should be one of the predefined ones as supported by localityLbPolicy,
           *     although at the moment only ROUND_ROBIN is supported.
           *
           *     This field should only be populated when the customPolicy field is not
           *     used.
           *
           *     Note that specifying the same policy more than once for a backend is
           *     not a valid configuration and will be rejected.
           *
           *     The possible values are:
           *
           *     * 'ROUND_ROBIN': This is a simple policy in which each healthy backend
           *                     is selected in round robin order.
           *
           *     * 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
           *                       hosts and picks the host which has fewer active requests.
           *
           *     * 'RING_HASH': The ring/modulo hash load balancer implements consistent
           *                   hashing to backends. The algorithm has the property that the
           *                   addition/removal of a host from a set of N hosts only affects
           *                   1/N of the requests.
           *
           *     * 'RANDOM': The load balancer selects a random healthy host.
           *
           *     * 'ORIGINAL_DESTINATION': Backend host is selected based on the client
           *                               connection metadata, i.e., connections are opened
           *                               to the same address as the destination address of
           *                               the incoming connection before the connection
           *                               was redirected to the load balancer.
           *
           *     * 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
           *                 Maglev is not as stable as ring hash but has faster table lookup
           *                 build times and host selection times. For more information about
           *                 Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]. */
          name: string;
        };
      }[];
      /** @description The load balancing algorithm used within the scope of the locality.
       *     The possible values are:
       *
       *     * 'ROUND_ROBIN': This is a simple policy in which each healthy backend
       *                      is selected in round robin order.
       *
       *     * 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
       *                        hosts and picks the host which has fewer active requests.
       *
       *     * 'RING_HASH': The ring/modulo hash load balancer implements consistent
       *                    hashing to backends. The algorithm has the property that the
       *                    addition/removal of a host from a set of N hosts only affects
       *                    1/N of the requests.
       *
       *     * 'RANDOM': The load balancer selects a random healthy host.
       *
       *     * 'ORIGINAL_DESTINATION': Backend host is selected based on the client
       *                               connection metadata, i.e., connections are opened
       *                               to the same address as the destination address of
       *                               the incoming connection before the connection
       *                               was redirected to the load balancer.
       *
       *     * 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
       *                 Maglev is not as stable as ring hash but has faster table lookup
       *                 build times and host selection times. For more information about
       *                 Maglev, refer to https://ai.google/research/pubs/pub44824
       *
       *     * 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
       *                          reported weights. If set, the Backend Service must
       *                          configure a non legacy HTTP-based Health Check, and
       *                          health check replies are expected to contain
       *                          non-standard HTTP response header field
       *                          X-Load-Balancing-Endpoint-Weight to specify the
       *                          per-instance weights. If set, Load Balancing is weight
       *                          based on the per-instance weights reported in the last
       *                          processed health check replies, as long as every
       *                          instance either reported a valid weight or had
       *                          UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
       *                          equal-weight.
       *
       *
       *     This field is applicable to either:
       *
       *     * A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
       *       and loadBalancingScheme set to INTERNAL_MANAGED.
       *     * A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
       *     * A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
       *       Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
       *       Network Load Balancing. The default is MAGLEV.
       *
       *
       *     If session_affinity is not NONE, and this field is not set to MAGLEV, WEIGHTED_MAGLEV,
       *     or RING_HASH, session affinity settings will not take effect.
       *
       *     Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
       *     by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
       *     field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]. */
      localityLbPolicy?: string;
      /** @description Location represents the geographical location of the ComputeBackendService. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description This field denotes the logging options for the load balancer traffic served by this backend service.
       *     If logging is enabled, logs will be exported to Stackdriver. */
      logConfig?: {
        /** @description Whether to enable logging for the load balancer traffic served by this backend service. */
        enable?: boolean;
        /** @description This field can only be specified if logging is enabled for this backend service. The value of
         *     the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
         *     where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
         *     The default value is 1.0. */
        sampleRate?: number;
      };
      /** @description The network to which this backend service belongs.  This field can
       *     only be specified when the load balancing scheme is set to
       *     INTERNAL. */
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Settings controlling eviction of unhealthy hosts from the load balancing pool.
       *     This field is applicable only when the load_balancing_scheme is set
       *     to INTERNAL_SELF_MANAGED. */
      outlierDetection?: {
        /** @description The base time that a host is ejected for. The real time is equal to the base
         *     time multiplied by the number of times the host has been ejected. Defaults to
         *     30000ms or 30s. */
        baseEjectionTime?: {
          /** @description Span of time that's a fraction of a second at nanosecond resolution. Durations
           *     less than one second are represented with a 0 'seconds' field and a positive
           *     'nanos' field. Must be from 0 to 999,999,999 inclusive. */
          nanos?: number;
          /** @description Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
           *     inclusive. */
          seconds: number;
        };
        /** @description Number of errors before a host is ejected from the connection pool. When the
         *     backend host is accessed over HTTP, a 5xx return code qualifies as an error.
         *     Defaults to 5. */
        consecutiveErrors?: number;
        /** @description The number of consecutive gateway failures (502, 503, 504 status or connection
         *     errors that are mapped to one of those status codes) before a consecutive
         *     gateway failure ejection occurs. Defaults to 5. */
        consecutiveGatewayFailure?: number;
        /** @description The percentage chance that a host will be actually ejected when an outlier
         *     status is detected through consecutive 5xx. This setting can be used to disable
         *     ejection or to ramp it up slowly. Defaults to 100. */
        enforcingConsecutiveErrors?: number;
        /** @description The percentage chance that a host will be actually ejected when an outlier
         *     status is detected through consecutive gateway failures. This setting can be
         *     used to disable ejection or to ramp it up slowly. Defaults to 0. */
        enforcingConsecutiveGatewayFailure?: number;
        /** @description The percentage chance that a host will be actually ejected when an outlier
         *     status is detected through success rate statistics. This setting can be used to
         *     disable ejection or to ramp it up slowly. Defaults to 100. */
        enforcingSuccessRate?: number;
        /** @description Time interval between ejection sweep analysis. This can result in both new
         *     ejections as well as hosts being returned to service. Defaults to 10 seconds. */
        interval?: {
          /** @description Span of time that's a fraction of a second at nanosecond resolution. Durations
           *     less than one second are represented with a 0 'seconds' field and a positive
           *     'nanos' field. Must be from 0 to 999,999,999 inclusive. */
          nanos?: number;
          /** @description Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
           *     inclusive. */
          seconds: number;
        };
        /** @description Maximum percentage of hosts in the load balancing pool for the backend service
         *     that can be ejected. Defaults to 10%. */
        maxEjectionPercent?: number;
        /** @description The number of hosts in a cluster that must have enough request volume to detect
         *     success rate outliers. If the number of hosts is less than this setting, outlier
         *     detection via success rate statistics is not performed for any host in the
         *     cluster. Defaults to 5. */
        successRateMinimumHosts?: number;
        /** @description The minimum number of total requests that must be collected in one interval (as
         *     defined by the interval duration above) to include this host in success rate
         *     based outlier detection. If the volume is lower than this setting, outlier
         *     detection via success rate statistics is not performed for that host. Defaults
         *     to 100. */
        successRateRequestVolume?: number;
        /** @description This factor is used to determine the ejection threshold for success rate outlier
         *     ejection. The ejection threshold is the difference between the mean success
         *     rate, and the product of this factor and the standard deviation of the mean
         *     success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
         *     by a thousand to get a double. That is, if the desired factor is 1.9, the
         *     runtime value should be 1900. Defaults to 1900. */
        successRateStdevFactor?: number;
      };
      /** @description Name of backend port. The same name should appear in the instance
       *     groups referenced by this service. Required when the load balancing
       *     scheme is EXTERNAL. */
      portName?: string;
      /** @description The protocol this BackendService uses to communicate with backends.
       *     The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
       *     types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
       *     the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
       *     with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]. */
      protocol?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The security policy associated with this backend service. */
      securityPolicy?: string;
      /** @description The security policy associated with this backend service. */
      securityPolicyRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSecurityPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The security settings that apply to this backend service. This field is applicable to either
       *     a regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and
       *     load_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the
       *     load_balancing_scheme set to INTERNAL_SELF_MANAGED. */
      securitySettings?: {
        /** @description ClientTlsPolicy is a resource that specifies how a client should
         *     authenticate connections to backends of a service. This resource itself
         *     does not affect configuration unless it is attached to a backend
         *     service resource. */
        clientTLSPolicyRef: {
          /** @description Allowed value: string of the format `//networksecurity.googleapis.com/projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{value}}`, where {{value}} is the `name` field of a `NetworkSecurityClientTLSPolicy` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description A list of alternate names to verify the subject identity in the certificate.
         *     If specified, the client will verify that the server certificate's subject
         *     alt name matches one of the specified values. */
        subjectAltNames: string[];
      };
      /** @description Type of session affinity to use. The default is NONE. Session affinity is
       *     not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"]. */
      sessionAffinity?: string;
      /** @description Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing. */
      subsetting?: {
        /** @description The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"]. */
        policy: string;
      };
      /** @description How many seconds to wait for the backend before considering it a
       *     failed request. Default is 30 seconds. Valid range is [1, 86400]. */
      timeoutSec?: number;
    };
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description Fingerprint of this resource. A hash of the contents stored in this
       *     object. This field is used in optimistic locking. */
      fingerprint?: string;
      /** @description The unique identifier for the resource. This identifier is defined by the server. */
      generatedId?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
