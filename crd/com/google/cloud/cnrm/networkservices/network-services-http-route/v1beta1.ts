import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkservicesCnrmCloudGoogleComNetworkServicesHTTPRouteV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: NetworkservicesCnrmCloudGoogleComNetworkServicesHTTPRouteV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface NetworkservicesCnrmCloudGoogleComNetworkServicesHTTPRouteV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1";
    kind: "NetworkServicesHTTPRoute";
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
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      gateways?: ({
        /** @description Allowed value: The `selfLink` field of a `NetworkServicesGateway` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that ip addresses are not allowed. Wildcard hosts are supported as "*" (no prefix or suffix allowed). */
      hostnames: string[];
      /** @description Immutable. The location for the resource */
      location: string;
      meshes?: ({
        /** @description Allowed value: The `selfLink` field of a `NetworkServicesMesh` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Required. Rules that define how traffic is routed and handled. */
      rules: {
        /** @description The detailed rule defining how to route matched traffic. */
        action?: {
          /** @description The specification for allowing client side cross-origin requests. */
          corsPolicy?: {
            /** @description In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false. */
            allowCredentials?: boolean;
            /** @description Specifies the content for Access-Control-Allow-Headers header. */
            allowHeaders?: string[];
            /** @description Specifies the content for Access-Control-Allow-Methods header. */
            allowMethods?: string[];
            /** @description Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. */
            allowOriginRegexes?: string[];
            /** @description Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes. */
            allowOrigins?: string[];
            /** @description If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
            disabled?: boolean;
            /** @description Specifies the content for Access-Control-Expose-Headers header. */
            exposeHeaders?: string[];
            /** @description Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header. */
            maxAge?: string;
          };
          /** @description The destination to which traffic should be forwarded. */
          destinations?: {
            serviceRef?: {
              /** @description The URL of a BackendService to route traffic to.
               *
               *     Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /**
             * Format: int64
             * @description Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
             */
            weight?: number;
          }[];
          /** @description The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy */
          faultInjectionPolicy?: {
            /** @description The specification for aborting to client requests. */
            abort?: {
              /**
               * Format: int64
               * @description The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
               */
              httpStatus?: number;
              /**
               * Format: int64
               * @description The percentage of traffic which will be aborted. The value must be between [0, 100]
               */
              percentage?: number;
            };
            /** @description The specification for injecting delay to client requests. */
            delay?: {
              /** @description Specify a fixed delay before forwarding the request. */
              fixedDelay?: string;
              /**
               * Format: int64
               * @description The percentage of traffic on which delay will be injected. The value must be between [0, 100]
               */
              percentage?: number;
            };
          };
          /** @description If set, the request is directed as configured by this field. */
          redirect?: {
            /** @description The host that will be used in the redirect response instead of the one that was supplied in the request. */
            hostRedirect?: string;
            /** @description If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false. */
            httpsRedirect?: boolean;
            /** @description The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect. */
            pathRedirect?: string;
            /**
             * Format: int64
             * @description The port that will be used in the redirected request instead of the one that was supplied in the request.
             */
            portRedirect?: number;
            /** @description Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request. */
            prefixRewrite?: string;
            /** @description The HTTP Status code to use for the redirect. Possible values: MOVED_PERMANENTLY_DEFAULT, FOUND, SEE_OTHER, TEMPORARY_REDIRECT, PERMANENT_REDIRECT */
            responseCode?: string;
            /** @description if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false. */
            stripQuery?: boolean;
          };
          /** @description The specification for modifying the headers of a matching request prior to delivery of the request to the destination. */
          requestHeaderModifier?: {
            /** @description Add the headers with given map where key is the name of the header, value is the value of the header. */
            add?: {
              [key: string]: string;
            };
            /** @description Remove headers (matching by header names) specified in the list. */
            remove?: string[];
            /** @description Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. */
            set?: {
              [key: string]: string;
            };
          };
          /** @description Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. */
          requestMirrorPolicy?: {
            /** @description The destination the requests will be mirrored to. The weight of the destination will be ignored. */
            destination?: {
              serviceRef?: {
                /** @description The URL of a BackendService to route traffic to.
                 *
                 *     Allowed value: The Google Cloud resource name of a `ComputeBackendService` resource (format: `projects/{{project}}/global/backendServices/{{name}}`). */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /**
               * Format: int64
               * @description Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
               */
              weight?: number;
            };
          };
          /** @description The specification for modifying the headers of a response prior to sending the response back to the client. */
          responseHeaderModifier?: {
            /** @description Add the headers with given map where key is the name of the header, value is the value of the header. */
            add?: {
              [key: string]: string;
            };
            /** @description Remove headers (matching by header names) specified in the list. */
            remove?: string[];
            /** @description Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. */
            set?: {
              [key: string]: string;
            };
          };
          /** @description Specifies the retry policy associated with this route. */
          retryPolicy?: {
            /**
             * Format: int64
             * @description Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
             */
            numRetries?: number;
            /** @description Specifies a non-zero timeout per retry attempt. */
            perTryTimeout?: string;
            /** @description Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. */
            retryConditions?: string[];
          };
          /** @description Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
          timeout?: string;
          /** @description The specification for rewrite URL before forwarding requests to the destination. */
          urlRewrite?: {
            /** @description Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. */
            hostRewrite?: string;
            /** @description Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. */
            pathPrefixRewrite?: string;
          };
        };
        /** @description A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. */
        matches?: {
          /** @description The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used. */
          fullPathMatch?: string;
          /** @description Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched. */
          headers?: {
            /** @description The value of the header should match exactly the content of exact_match. */
            exactMatch?: string;
            /** @description The name of the HTTP header to match against. */
            header?: string;
            /** @description If specified, the match result will be inverted before checking. Default value is set to false. */
            invertMatch?: boolean;
            /** @description The value of the header must start with the contents of prefix_match. */
            prefixMatch?: string;
            /** @description A header with header_name must exist. The match takes place whether or not the header has a value. */
            presentMatch?: boolean;
            /** @description If specified, the rule will match if the request header value is within the range. */
            rangeMatch?: {
              /**
               * Format: int64
               * @description End of the range (exclusive)
               */
              end?: number;
              /**
               * Format: int64
               * @description Start of the range (inclusive)
               */
              start?: number;
            };
            /** @description The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax */
            regexMatch?: string;
            /** @description The value of the header must end with the contents of suffix_match. */
            suffixMatch?: string;
          }[];
          /** @description Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false. */
          ignoreCase?: boolean;
          /** @description The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used. */
          prefixMatch?: string;
          /** @description Specifies a list of query parameters to match against. ALL of the query parameters must be matched. */
          queryParameters?: {
            /** @description The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set. */
            exactMatch?: string;
            /** @description Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set. */
            presentMatch?: boolean;
            /** @description The name of the query parameter to match. */
            queryParameter?: string;
            /** @description The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set. */
            regexMatch?: string;
          }[];
          /** @description The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used. */
          regexMatch?: string;
        }[];
      }[];
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
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was created.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Server-defined URL of this resource */
      selfLink?: string;
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was updated.
       */
      updateTime?: string;
    };
  };
}
