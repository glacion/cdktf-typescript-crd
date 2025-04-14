import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeBackendBucketV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeBackendBucketV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeBackendBucket", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeBackendBucketV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description Reference to the bucket. */
        bucketRef: {
          /** @description Allowed value: The `name` field of a `StorageBucket` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Cloud CDN configuration for this Backend Bucket. */
        cdnPolicy?: {
          /** @description Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings. */
          bypassCacheOnRequestHeaders?: {
            /** @description The header field name to match on when bypassing cache. Values are case-insensitive. */
            headerName?: string;
          }[];
          /** @description The CacheKeyPolicy for this CdnPolicy. */
          cacheKeyPolicy?: {
            /** @description Allows HTTP request headers (by name) to be used in the
             *     cache key. */
            includeHttpHeaders?: string[];
            /** @description Names of query string parameters to include in cache keys.
             *     Default parameters are always included. '&' and '=' will
             *     be percent encoded and not treated as delimiters. */
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
          /** @description If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. */
          requestCoalescing?: boolean;
          /** @description Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. */
          serveWhileStale?: number;
          /** @description Maximum number of seconds the response to a signed URL request will
           *     be considered fresh. After this time period,
           *     the response will be revalidated before being served.
           *     When serving responses to signed URL requests,
           *     Cloud CDN will internally behave as though
           *     all responses from this backend had a "Cache-Control: public,
           *     max-age=[TTL]" header, regardless of any existing Cache-Control
           *     header. The actual headers served in responses will not be altered. */
          signedUrlCacheMaxAgeSec?: number;
        };
        /** @description Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. */
        compressionMode?: string;
        /** @description Headers that the HTTP/S load balancer should add to proxied responses. */
        customResponseHeaders?: string[];
        /** @description An optional textual description of the resource; provided by the
         *     client when the resource is created. */
        description?: string;
        /** @description The security policy associated with this backend bucket. */
        edgeSecurityPolicy?: string;
        /** @description If true, enable Cloud CDN for this BackendBucket. */
        enableCdn?: boolean;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
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
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
