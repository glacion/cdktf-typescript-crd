import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoGCPTrafficExtensionV1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoGCPTrafficExtensionV1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoGCPTrafficExtensionV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "GCPTrafficExtension";
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
    /** @description Spec defines the desired state of GCPTrafficExtension. */
    spec: {
      /** @description ExtensionChains is a set of ordered extension chains that contain
       *     the match conditions and extensions to execute. Match conditions for each
       *     extension chain are evaluated in sequence for a given request. The first
       *     extension chain that has conditions that match the request is executed.
       *     Any subsequent extension chains do not execute.
       *     Limited to 5 ExtensionChains. */
      extensionChains: {
        /** @description Extensions is a set of extensions to execute for the matching request.
         *     Up to 3 Extensions can be defined for each ExtensionChain
         *     for the GCPTrafficExtension.
         *     GCPRoutingExtension chains are limited to 1 Extension per ExtensionChain. */
        extensions: {
          /** @description Authority is the `:authority` header in the gRPC request sent from Envoy
           *     to the callout extension backend service.
           *     Required for extensions with callout backend service. */
          authority?: string;
          /** @description BackendRef identifies an API object that runs the extension.
           *     Exactly one of BackendRef or GoogleAPIServiceName should be set. */
          backendRef?: {
            /**
             * @description Group is the group of the referent.
             * @default
             * @enum {string}
             */
            group: "";
            /**
             * @description Kind is kind of the referent.
             * @default Service
             * @enum {string}
             */
            kind: "Service";
            /** @description Name is the name of the referent. */
            name: string;
            /**
             * Format: int32
             * @description Port is the port of the referent.
             */
            port: number;
          };
          /** @description FailOpen determines how the proxy behaves if the call to the extension
           *     fails or times out.
           *
           *     When set to `TRUE`, request or response processing continues without
           *     error. Any subsequent extensions in the extension chain are also
           *     executed. When set to `FALSE` or the default setting of `FALSE` is used,
           *     one of the following happens:
           *
           *     * If response headers have not been delivered to the downstream client,
           *     a generic 500 error is returned to the client. The error response can be
           *     tailored by configuring a custom error response in the load balancer.
           *
           *     * If response headers have been delivered, then the HTTP stream to the
           *     downstream client is reset. */
          failOpen?: boolean;
          /** @description ForwardHeaders is a list of the HTTP headers to forward to the extension
           *     (from the client or backend). If omitted, all headers are sent.
           *     Each element indicates the header name. */
          forwardHeaders?: string[];
          /** @description GoogleAPIServiceName is the name of the Google API service that runs the extension.
           *     The name must be in one of the following formats:
           *     - <serviceName>.<region>.rep.googleapis.com in regional case.
           *     Exactly one of BackendRef or GoogleAPIServiceName should be set. */
          googleAPIServiceName?: string;
          /** @description Metadata provided here is included as part of the
           *     `metadata_context` (of type `google.protobuf.Struct`) in the
           *     `ProcessingRequest` message sent to the extension
           *     server. The metadata is available under the namespace
           *     `com.google.<extension_type>.<resource_name>.<extension_chain_name>.<extension_name>`.
           *     For example:
           *     `com.google.lb_traffic_extension.lbtrafficextension1.chain1.ext1`.
           *
           *     The following variables are supported in the metadata:
           *
           *     `{forwarding_rule_id}` - substituted with the forwarding rule's fully
           *       qualified resource name. */
          metadata?: {
            [key: string]: string;
          };
          /** @description Name is the name for this chain.
           *     The name is logged as part of the HTTP request logs.
           *     The name must conform with RFC-1034, is restricted to lower-cased
           *     letters, numbers and hyphens, and can have a maximum length of 63
           *     characters. Additionally, the first character must be a letter and the
           *     last a letter or a number. */
          name: string;
          /**
           * @description RequestBodySendMode configures processing mode for request processing. If not specified
           *     and RequestBody event is supported, the default value STREAMED is used.
           *     Supported by both `GCPTrafficExtension` and `GCPRoutingExtension` resources
           *     and only for extensions with `backendRef`.
           *     When this field is set to `FullDuplexStreamed`, `supportedEvents`
           *     must include both `RequestBody` and `RequestTrailers`.
           * @enum {string}
           */
          requestBodySendMode?: "Streamed" | "FullDuplexStreamed";
          /**
           * @description ResponseBodySendMode configures processing mode for response processing.
           *     If not specified and RequestBody event is supported, the default value STREAMED is used.
           *     Supported only by `GCPTrafficExtension` resource
           *     and only for extensions with `backendRef`.
           *     When this field is set to `FullDuplexStreamed`, `supportedEvents`
           *     must include both `ResponseBody` and `ResponseTrailers`.
           * @enum {string}
           */
          responseBodySendMode?: "Streamed" | "FullDuplexStreamed";
          /** @description SupportedEvents is a set of events during request or response
           *     processing for which this extension is called.
           *
           *     This field is required for the `GCPTrafficExtension` resource.
           *     This field is optional for the `GCPRoutingExtension` resource.
           *
           *     If requestBodySendMode is set for the `GCPRoutingExtension` resource,
           *     then the `supportedEvents` list can only contain `RequestHeaders` events.
           *     If requestBodySendMode is set to `FullDuplexStreamed` for the `GCPRoutingExtension` resource,
           *     then the `supportedEvents` list can only contain `RequestHeaders`, `RequestBody`
           *     and `RequestTrailers` events.
           *
           *     If unspecified, `RequestHeaders` event is assumed as supported.
           *     Limited to 6 events. */
          supportedEvents?: (
            | "RequestHeaders"
            | "RequestBody"
            | "ResponseHeaders"
            | "ResponseBody"
            | "RequestTrailers"
            | "ResponseTrailers"
          )[];
          /** @description Timeout specifies the timeout for each individual message on the stream.
           *     The timeout must be between 10-1000 milliseconds.
           *     If omitted, the default timeout is 1000 milliseconds. */
          timeout?: string;
        }[];
        /** @description MatchCondition is the condition under which this chain is invoked for a request. */
        matchCondition?: {
          /** @description CELExpressions are expressions that are used to match requests for which
           *     the extension chain is executed.
           *     Limited to 10 CELExpressions.
           *
           *     Expressions are ORed together. */
          celExpressions?: {
            /** @description BackendRefs are Kubernetes Services that are used to match requests
             *     for which the extension chain is executed. */
            backendRefs?: {
              /**
               * @description Group is the group of the referent.
               * @default
               * @enum {string}
               */
              group: "";
              /**
               * @description Kind is kind of the referent.
               * @default Service
               * @enum {string}
               */
              kind: "Service";
              /** @description Name is the name of the referent. */
              name: string;
              /**
               * Format: int32
               * @description Port is the port of the referent.
               */
              port: number;
            }[];
            /** @description CELMatcher is a Common Expression Language (CEL) expression that is used
             *     to match requests for which the extension chain is executed.
             *
             *     For more information, see [CEL matcher language
             *     reference](https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference). */
            celMatcher?: string;
          }[];
        };
        /** @description Name is the name for this extension chain.
         *     The name is logged as part of the HTTP request logs.
         *     The name must conform with RFC-1034, is restricted to lower-cased letters,
         *     numbers and hyphens, and can have a maximum length of 63 characters.
         *     Additionally, the first character must be a letter and the last a letter or a number. */
        name: string;
      }[];
      /** @description TargetRefs is a list of API objects this extension applies to.
       *     Valid Groups are:
       *     - "gateway.networking.k8s.io"
       *
       *     Valid Kinds are:
       *     - "Gateway" */
      targetRefs: {
        /** @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
         *     When unspecified or empty string, core API group is inferred. */
        group: string;
        /** @description Kind is kind of the referent. For example "HTTPRoute" or "Service". */
        kind: string;
        /** @description Name is the name of the referent. */
        name: string;
      }[];
    };
    /** @description Status defines the current state of GCPTrafficExtension. */
    status?: {
      /** @description Ancestors is a list of ancestor resources (usually Gateways) that are
       *     associated with the policy, and the status of the policy with respect to
       *     each ancestor. When this policy attaches to a parent, the controller that
       *     manages the parent and the ancestors MUST add an entry to this list when
       *     the controller first sees the policy and SHOULD update the entry as
       *     appropriate when the relevant ancestor is modified.
       *
       *     Note that choosing the relevant ancestor is left to the Policy designers;
       *     an important part of Policy design is designing the right object level at
       *     which to namespace this status.
       *
       *     Note also that implementations MUST ONLY populate ancestor status for
       *     the Ancestor resources they are responsible for. Implementations MUST
       *     use the ControllerName field to uniquely identify the entries in this list
       *     that they are responsible for.
       *
       *     Note that to achieve this, the list of PolicyAncestorStatus structs
       *     MUST be treated as a map with a composite key, made up of the AncestorRef
       *     and ControllerName fields combined.
       *
       *     A maximum of 16 ancestors will be represented in this list. An empty list
       *     means the Policy is not relevant for any ancestors.
       *
       *     If this slice is full, implementations MUST NOT add further entries.
       *     Instead they MUST consider the policy unimplementable and signal that
       *     on any related resources such as the ancestor that would be referenced
       *     here. For example, if this list was full on BackendTLSPolicy, no
       *     additional Gateways would be able to reference the Service targeted by
       *     the BackendTLSPolicy. */
      ancestors: {
        /** @description AncestorRef corresponds with a ParentRef in the spec that this
         *     PolicyAncestorStatus struct describes the status of. */
        ancestorRef: {
          /**
           * @description Group is the group of the referent.
           *     When unspecified, "gateway.networking.k8s.io" is inferred.
           *     To set the core API group (such as for a "Service" kind referent),
           *     Group must be explicitly set to "" (empty string).
           *
           *     Support: Core
           * @default gateway.networking.k8s.io
           */
          group: string;
          /**
           * @description Kind is kind of the referent.
           *
           *     There are two kinds of parent resources with "Core" support:
           *
           *     * Gateway (Gateway conformance profile)
           *     * Service (Mesh conformance profile, ClusterIP Services only)
           *
           *     Support for other resources is Implementation-Specific.
           * @default Gateway
           */
          kind: string;
          /** @description Name is the name of the referent.
           *
           *     Support: Core */
          name: string;
          /** @description Namespace is the namespace of the referent. When unspecified, this refers
           *     to the local namespace of the Route.
           *
           *     Note that there are specific rules for ParentRefs which cross namespace
           *     boundaries. Cross-namespace references are only valid if they are explicitly
           *     allowed by something in the namespace they are referring to. For example:
           *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
           *     generic way to enable any other kind of cross-namespace reference.
           *
           *     <gateway:experimental:description>
           *     ParentRefs from a Route to a Service in the same namespace are "producer"
           *     routes, which apply default routing rules to inbound connections from
           *     any namespace to the Service.
           *
           *     ParentRefs from a Route to a Service in a different namespace are
           *     "consumer" routes, and these routing rules are only applied to outbound
           *     connections originating from the same namespace as the Route, for which
           *     the intended destination of the connections are a Service targeted as a
           *     ParentRef of the Route.
           *     </gateway:experimental:description>
           *
           *     Support: Core */
          namespace?: string;
          /**
           * Format: int32
           * @description Port is the network port this Route targets. It can be interpreted
           *     differently based on the type of parent resource.
           *
           *     When the parent resource is a Gateway, this targets all listeners
           *     listening on the specified port that also support this kind of Route(and
           *     select this Route). It's not recommended to set `Port` unless the
           *     networking behaviors specified in a Route must apply to a specific port
           *     as opposed to a listener(s) whose port(s) may be changed. When both Port
           *     and SectionName are specified, the name and port of the selected listener
           *     must match both specified values.
           *
           *     <gateway:experimental:description>
           *     When the parent resource is a Service, this targets a specific port in the
           *     Service spec. When both Port (experimental) and SectionName are specified,
           *     the name and port of the selected port must match both specified values.
           *     </gateway:experimental:description>
           *
           *     Implementations MAY choose to support other parent resources.
           *     Implementations supporting other types of parent resources MUST clearly
           *     document how/if Port is interpreted.
           *
           *     For the purpose of status, an attachment is considered successful as
           *     long as the parent resource accepts it partially. For example, Gateway
           *     listeners can restrict which Routes can attach to them by Route kind,
           *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
           *     from the referencing Route, the Route MUST be considered successfully
           *     attached. If no Gateway listeners accept attachment from this Route,
           *     the Route MUST be considered detached from the Gateway.
           *
           *     Support: Extended
           */
          port?: number;
          /** @description SectionName is the name of a section within the target resource. In the
           *     following resources, SectionName is interpreted as the following:
           *
           *     * Gateway: Listener name. When both Port (experimental) and SectionName
           *     are specified, the name and port of the selected listener must match
           *     both specified values.
           *     * Service: Port name. When both Port (experimental) and SectionName
           *     are specified, the name and port of the selected listener must match
           *     both specified values.
           *
           *     Implementations MAY choose to support attaching Routes to other resources.
           *     If that is the case, they MUST clearly document how SectionName is
           *     interpreted.
           *
           *     When unspecified (empty string), this will reference the entire resource.
           *     For the purpose of status, an attachment is considered successful if at
           *     least one section in the parent resource accepts it. For example, Gateway
           *     listeners can restrict which Routes can attach to them by Route kind,
           *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
           *     the referencing Route, the Route MUST be considered successfully
           *     attached. If no Gateway listeners accept attachment from this Route, the
           *     Route MUST be considered detached from the Gateway.
           *
           *     Support: Core */
          sectionName?: string;
        };
        /** @description Conditions describes the status of the Policy with respect to the given Ancestor. */
        conditions?: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another.
           *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string;
          /** @description message is a human readable message indicating details about the transition.
           *     This may be an empty string. */
          message: string;
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
           *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
           *     with respect to the current state of the instance.
           */
          observedGeneration?: number;
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
           *     Producers of specific condition types may define expected values and meanings for this field,
           *     and whether the values are considered a guaranteed API.
           *     The value should be a CamelCase string.
           *     This field may not be empty. */
          reason: string;
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown";
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
          type: string;
        }[];
        /** @description ControllerName is a domain/path string that indicates the name of the
         *     controller that wrote this status. This corresponds with the
         *     controllerName field on GatewayClass.
         *
         *     Example: "example.net/gateway-controller".
         *
         *     The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
         *     valid Kubernetes names
         *     (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
         *
         *     Controllers MUST populate this field when writing status. Controllers should ensure that
         *     entries to status populated with their ControllerName are cleaned up when they are no
         *     longer necessary. */
        controllerName: string;
      }[];
    };
  };
}
