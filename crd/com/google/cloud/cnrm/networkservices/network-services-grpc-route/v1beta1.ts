import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkservicesCnrmCloudGoogleComNetworkServicesGRPCRouteV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: NetworkservicesCnrmCloudGoogleComNetworkServicesGRPCRouteV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface NetworkservicesCnrmCloudGoogleComNetworkServicesGRPCRouteV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1";
    kind: "NetworkServicesGRPCRoute";
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
      /** @description Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (*.). The wildcard label must appear by itself as the first label. Hostname can be “precise” which is a domain name without the terminating dot of a network host (e.g. “foo.example.com”) or “wildcard”, which is a domain name prefixed with a single wildcard label (e.g. *.example.com). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or ‘-’, and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Router must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames "*.foo.bar.com" and "*.bar.com" to be associated with the same route, it is not possible to associate two routes both with "*.bar.com" or both with "bar.com". In the case that multiple routes match the hostname, the most specific match will be selected. For example, "foo.bar.baz.com" will take precedence over "*.bar.baz.com" and "*.bar.baz.com" will take precedence over "*.baz.com". If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service"). */
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
      /** @description Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied. */
      rules: {
        /** @description Required. A detailed rule defining how to route traffic. This field is required. */
        action: {
          /** @description Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations. */
          destinations?: {
            serviceRef: {
              /** @description Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService.
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
             * @description Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
             */
            weight?: number;
          }[];
          /** @description Optional. The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy */
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
          /** @description Optional. Specifies the retry policy associated with this route. */
          retryPolicy?: {
            /**
             * Format: int64
             * @description Specifies the allowed number of retries. This number must be > 0. If not specpfied, default to 1.
             */
            numRetries?: number;
            /** @description - connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable */
            retryConditions?: string[];
          };
          /** @description Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
          timeout?: string;
        };
        /** @description Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. */
        matches?: {
          /** @description Optional. Specifies a collection of headers to match. */
          headers?: {
            /** @description Required. The key of the header. */
            key: string;
            /** @description Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used. Possible values: MATCH_TYPE_UNSPECIFIED, MATCH_ANY, MATCH_ALL */
            type?: string;
            /** @description Required. The value of the header. */
            value: string;
          }[];
          /** @description Optional. A gRPC method to match against. If this field is empty or omitted, will match all methods. */
          method?: {
            /** @description Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION. */
            caseSensitive?: boolean;
            /** @description Required. Name of the method to match against. If unspecified, will match all methods. */
            grpcMethod: string;
            /** @description Required. Name of the service to match against. If unspecified, will match all services. */
            grpcService: string;
            /** @description Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used. Possible values: TYPE_UNSPECIFIED, EXACT, REGULAR_EXPRESSION */
            type?: string;
          };
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
