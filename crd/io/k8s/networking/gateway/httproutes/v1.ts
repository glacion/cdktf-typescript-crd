import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesHTTPRouteV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesHTTPRouteV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "gateway.networking.k8s.io/v1", kind: "HTTPRoute", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesHTTPRouteV1Config extends ManifestConfig {
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
      /** @description Hostnames defines a set of hostnames that should match against the HTTP Host
       *     header to select a HTTPRoute used to process the request. Implementations
       *     MUST ignore any port value specified in the HTTP Host header while
       *     performing a match and (absent of any applicable header modification
       *     configuration) MUST forward this header unmodified to the backend.
       *
       *
       *     Valid values for Hostnames are determined by RFC 1123 definition of a
       *     hostname with 2 notable exceptions:
       *
       *
       *     1. IPs are not allowed.
       *     2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
       *        label must appear by itself as the first label.
       *
       *
       *     If a hostname is specified by both the Listener and HTTPRoute, there
       *     must be at least one intersecting hostname for the HTTPRoute to be
       *     attached to the Listener. For example:
       *
       *
       *     * A Listener with `test.example.com` as the hostname matches HTTPRoutes
       *       that have either not specified any hostnames, or have specified at
       *       least one of `test.example.com` or `*.example.com`.
       *     * A Listener with `*.example.com` as the hostname matches HTTPRoutes
       *       that have either not specified any hostnames or have specified at least
       *       one hostname that matches the Listener hostname. For example,
       *       `*.example.com`, `test.example.com`, and `foo.test.example.com` would
       *       all match. On the other hand, `example.com` and `test.example.net` would
       *       not match.
       *
       *
       *     Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
       *     as a suffix match. That means that a match for `*.example.com` would match
       *     both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
       *
       *
       *     If both the Listener and HTTPRoute have specified hostnames, any
       *     HTTPRoute hostnames that do not match the Listener hostname MUST be
       *     ignored. For example, if a Listener specified `*.example.com`, and the
       *     HTTPRoute specified `test.example.com` and `test.example.net`,
       *     `test.example.net` must not be considered for a match.
       *
       *
       *     If both the Listener and HTTPRoute have specified hostnames, and none
       *     match with the criteria above, then the HTTPRoute is not accepted. The
       *     implementation must raise an 'Accepted' Condition with a status of
       *     `False` in the corresponding RouteParentStatus.
       *
       *
       *     In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
       *     overlapping wildcard matching and exact matching hostnames), precedence must
       *     be given to rules from the HTTPRoute with the largest number of:
       *
       *
       *     * Characters in a matching non-wildcard hostname.
       *     * Characters in a matching hostname.
       *
       *
       *     If ties exist across multiple Routes, the matching precedence rules for
       *     HTTPRouteMatches takes over.
       *
       *
       *     Support: Core */
      hostnames?: string[];
      /** @description ParentRefs references the resources (usually Gateways) that a Route wants
       *     to be attached to. Note that the referenced parent resource needs to
       *     allow this for the attachment to be complete. For Gateways, that means
       *     the Gateway needs to allow attachment from Routes of this kind and
       *     namespace. For Services, that means the Service must either be in the same
       *     namespace for a "producer" route, or the mesh implementation must support
       *     and allow "consumer" routes for the referenced Service. ReferenceGrant is
       *     not applicable for governing ParentRefs to Services - it is not possible to
       *     create a "producer" route for a Service in a different namespace from the
       *     Route.
       *
       *
       *     There are two kinds of parent resources with "Core" support:
       *
       *
       *     * Gateway (Gateway conformance profile)
       *     * Service (Mesh conformance profile, ClusterIP Services only)
       *
       *
       *     This API may be extended in the future to support additional kinds of parent
       *     resources.
       *
       *
       *     ParentRefs must be _distinct_. This means either that:
       *
       *
       *     * They select different objects.  If this is the case, then parentRef
       *       entries are distinct. In terms of fields, this means that the
       *       multi-part key defined by `group`, `kind`, `namespace`, and `name` must
       *       be unique across all parentRef entries in the Route.
       *     * They do not select different objects, but for each optional field used,
       *       each ParentRef that selects the same object must set the same set of
       *       optional fields to different values. If one ParentRef sets a
       *       combination of optional fields, all must set the same combination.
       *
       *
       *     Some examples:
       *
       *
       *     * If one ParentRef sets `sectionName`, all ParentRefs referencing the
       *       same object must also set `sectionName`.
       *     * If one ParentRef sets `port`, all ParentRefs referencing the same
       *       object must also set `port`.
       *     * If one ParentRef sets `sectionName` and `port`, all ParentRefs
       *       referencing the same object must also set `sectionName` and `port`.
       *
       *
       *     It is possible to separately reference multiple distinct objects that may
       *     be collapsed by an implementation. For example, some implementations may
       *     choose to merge compatible Gateway Listeners together. If that is the
       *     case, the list of routes attached to those resources should also be
       *     merged.
       *
       *
       *     Note that for ParentRefs that cross namespace boundaries, there are specific
       *     rules. Cross-namespace references are only valid if they are explicitly
       *     allowed by something in the namespace they are referring to. For example,
       *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
       *     generic way to enable other kinds of cross-namespace reference.
       *
       *
       *
       *
       *
       *
       *
       *
       *      */
      parentRefs?: {
        /**
         * @description Group is the group of the referent.
         *     When unspecified, "gateway.networking.k8s.io" is inferred.
         *     To set the core API group (such as for a "Service" kind referent),
         *     Group must be explicitly set to "" (empty string).
         *
         *
         *     Support: Core
         * @default gateway.networking.k8s.io
         */
        group: string;
        /**
         * @description Kind is kind of the referent.
         *
         *
         *     There are two kinds of parent resources with "Core" support:
         *
         *
         *     * Gateway (Gateway conformance profile)
         *     * Service (Mesh conformance profile, ClusterIP Services only)
         *
         *
         *     Support for other resources is Implementation-Specific.
         * @default Gateway
         */
        kind: string;
        /** @description Name is the name of the referent.
         *
         *
         *     Support: Core */
        name: string;
        /** @description Namespace is the namespace of the referent. When unspecified, this refers
         *     to the local namespace of the Route.
         *
         *
         *     Note that there are specific rules for ParentRefs which cross namespace
         *     boundaries. Cross-namespace references are only valid if they are explicitly
         *     allowed by something in the namespace they are referring to. For example:
         *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
         *     generic way to enable any other kind of cross-namespace reference.
         *
         *
         *
         *
         *
         *     Support: Core */
        namespace?: string;
        /**
         * Format: int32
         * @description Port is the network port this Route targets. It can be interpreted
         *     differently based on the type of parent resource.
         *
         *
         *     When the parent resource is a Gateway, this targets all listeners
         *     listening on the specified port that also support this kind of Route(and
         *     select this Route). It's not recommended to set `Port` unless the
         *     networking behaviors specified in a Route must apply to a specific port
         *     as opposed to a listener(s) whose port(s) may be changed. When both Port
         *     and SectionName are specified, the name and port of the selected listener
         *     must match both specified values.
         *
         *
         *
         *
         *
         *     Implementations MAY choose to support other parent resources.
         *     Implementations supporting other types of parent resources MUST clearly
         *     document how/if Port is interpreted.
         *
         *
         *     For the purpose of status, an attachment is considered successful as
         *     long as the parent resource accepts it partially. For example, Gateway
         *     listeners can restrict which Routes can attach to them by Route kind,
         *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
         *     from the referencing Route, the Route MUST be considered successfully
         *     attached. If no Gateway listeners accept attachment from this Route,
         *     the Route MUST be considered detached from the Gateway.
         *
         *
         *     Support: Extended
         */
        port?: number;
        /** @description SectionName is the name of a section within the target resource. In the
         *     following resources, SectionName is interpreted as the following:
         *
         *
         *     * Gateway: Listener name. When both Port (experimental) and SectionName
         *     are specified, the name and port of the selected listener must match
         *     both specified values.
         *     * Service: Port name. When both Port (experimental) and SectionName
         *     are specified, the name and port of the selected listener must match
         *     both specified values.
         *
         *
         *     Implementations MAY choose to support attaching Routes to other resources.
         *     If that is the case, they MUST clearly document how SectionName is
         *     interpreted.
         *
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
         *
         *     Support: Core */
        sectionName?: string;
      }[];
      /** @description Rules are a list of HTTP matchers, filters and actions. */
      rules?: {
        /** @description BackendRefs defines the backend(s) where matching requests should be
         *     sent.
         *
         *
         *     Failure behavior here depends on how many BackendRefs are specified and
         *     how many are invalid.
         *
         *
         *     If *all* entries in BackendRefs are invalid, and there are also no filters
         *     specified in this route rule, *all* traffic which matches this rule MUST
         *     receive a 500 status code.
         *
         *
         *     See the HTTPBackendRef definition for the rules about what makes a single
         *     HTTPBackendRef invalid.
         *
         *
         *     When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
         *     requests that would have otherwise been routed to an invalid backend. If
         *     multiple backends are specified, and some are invalid, the proportion of
         *     requests that would otherwise have been routed to an invalid backend
         *     MUST receive a 500 status code.
         *
         *
         *     For example, if two backends are specified with equal weights, and one is
         *     invalid, 50 percent of traffic must receive a 500. Implementations may
         *     choose how that 50 percent is determined.
         *
         *
         *     Support: Core for Kubernetes Service
         *
         *
         *     Support: Extended for Kubernetes ServiceImport
         *
         *
         *     Support: Implementation-specific for any other resource
         *
         *
         *     Support for weight: Core */
        backendRefs?: {
          /** @description Filters defined at this level should be executed if and only if the
           *     request is being forwarded to the backend defined here.
           *
           *
           *     Support: Implementation-specific (For broader support of filters, use the
           *     Filters field in HTTPRouteRule.) */
          filters?: {
            /** @description ExtensionRef is an optional, implementation-specific extension to the
             *     "filter" behavior.  For example, resource "myroutefilter" in group
             *     "networking.example.net"). ExtensionRef MUST NOT be used for core and
             *     extended filters.
             *
             *
             *     This filter can be used multiple times within the same rule.
             *
             *
             *     Support: Implementation-specific */
            extensionRef?: {
              /** @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
               *     When unspecified or empty string, core API group is inferred. */
              group: string;
              /** @description Kind is kind of the referent. For example "HTTPRoute" or "Service". */
              kind: string;
              /** @description Name is the name of the referent. */
              name: string;
            };
            /** @description RequestHeaderModifier defines a schema for a filter that modifies request
             *     headers.
             *
             *
             *     Support: Core */
            requestHeaderModifier?: {
              /** @description Add adds the given header(s) (name, value) to the request
               *     before the action. It appends to any existing values associated
               *     with the header name.
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *
               *     Config:
               *       add:
               *       - name: "my-header"
               *         value: "bar,baz"
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: foo,bar,baz */
              add?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string;
                /** @description Value is the value of HTTP Header to be matched. */
                value: string;
              }[];
              /** @description Remove the given header(s) from the HTTP request before the action. The
               *     value of Remove is a list of HTTP header names. Note that the header
               *     names are case-insensitive (see
               *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header1: foo
               *       my-header2: bar
               *       my-header3: baz
               *
               *
               *     Config:
               *       remove: ["my-header1", "my-header3"]
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header2: bar */
              remove?: string[];
              /** @description Set overwrites the request with the given header (name, value)
               *     before the action.
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *
               *     Config:
               *       set:
               *       - name: "my-header"
               *         value: "bar"
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: bar */
              set?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string;
                /** @description Value is the value of HTTP Header to be matched. */
                value: string;
              }[];
            };
            /** @description RequestMirror defines a schema for a filter that mirrors requests.
             *     Requests are sent to the specified destination, but responses from
             *     that destination are ignored.
             *
             *
             *     This filter can be used multiple times within the same rule. Note that
             *     not all implementations will be able to support mirroring to multiple
             *     backends.
             *
             *
             *     Support: Extended */
            requestMirror?: {
              /** @description BackendRef references a resource where mirrored requests are sent.
               *
               *
               *     Mirrored requests must be sent only to a single destination endpoint
               *     within this BackendRef, irrespective of how many endpoints are present
               *     within this BackendRef.
               *
               *
               *     If the referent cannot be found, this BackendRef is invalid and must be
               *     dropped from the Gateway. The controller must ensure the "ResolvedRefs"
               *     condition on the Route status is set to `status: False` and not configure
               *     this backend in the underlying implementation.
               *
               *
               *     If there is a cross-namespace reference to an *existing* object
               *     that is not allowed by a ReferenceGrant, the controller must ensure the
               *     "ResolvedRefs"  condition on the Route is set to `status: False`,
               *     with the "RefNotPermitted" reason and not configure this backend in the
               *     underlying implementation.
               *
               *
               *     In either error case, the Message of the `ResolvedRefs` Condition
               *     should be used to provide more detail about the problem.
               *
               *
               *     Support: Extended for Kubernetes Service
               *
               *
               *     Support: Implementation-specific for any other resource */
              backendRef: {
                /**
                 * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
                 *     When unspecified or empty string, core API group is inferred.
                 * @default
                 */
                group: string;
                /**
                 * @description Kind is the Kubernetes resource kind of the referent. For example
                 *     "Service".
                 *
                 *
                 *     Defaults to "Service" when not specified.
                 *
                 *
                 *     ExternalName services can refer to CNAME DNS records that may live
                 *     outside of the cluster and as such are difficult to reason about in
                 *     terms of conformance. They also may not be safe to forward to (see
                 *     CVE-2021-25740 for more information). Implementations SHOULD NOT
                 *     support ExternalName Services.
                 *
                 *
                 *     Support: Core (Services with a type other than ExternalName)
                 *
                 *
                 *     Support: Implementation-specific (Services with type ExternalName)
                 * @default Service
                 */
                kind: string;
                /** @description Name is the name of the referent. */
                name: string;
                /** @description Namespace is the namespace of the backend. When unspecified, the local
                 *     namespace is inferred.
                 *
                 *
                 *     Note that when a namespace different than the local namespace is specified,
                 *     a ReferenceGrant object is required in the referent namespace to allow that
                 *     namespace's owner to accept the reference. See the ReferenceGrant
                 *     documentation for details.
                 *
                 *
                 *     Support: Core */
                namespace?: string;
                /**
                 * Format: int32
                 * @description Port specifies the destination port number to use for this resource.
                 *     Port is required when the referent is a Kubernetes Service. In this
                 *     case, the port number is the service port number, not the target port.
                 *     For other resources, destination port might be derived from the referent
                 *     resource or this field.
                 */
                port?: number;
              };
            };
            /** @description RequestRedirect defines a schema for a filter that responds to the
             *     request with an HTTP redirection.
             *
             *
             *     Support: Core */
            requestRedirect?: {
              /** @description Hostname is the hostname to be used in the value of the `Location`
               *     header in the response.
               *     When empty, the hostname in the `Host` header of the request is used.
               *
               *
               *     Support: Core */
              hostname?: string;
              /** @description Path defines parameters used to modify the path of the incoming request.
               *     The modified path is then used to construct the `Location` header. When
               *     empty, the request path is used as-is.
               *
               *
               *     Support: Extended */
              path?: {
                /** @description ReplaceFullPath specifies the value with which to replace the full path
                 *     of a request during a rewrite or redirect. */
                replaceFullPath?: string;
                /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                 *     match of a request during a rewrite or redirect. For example, a request
                 *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                 *     of "/xyz" would be modified to "/xyz/bar".
                 *
                 *
                 *     Note that this matches the behavior of the PathPrefix match type. This
                 *     matches full path elements. A path element refers to the list of labels
                 *     in the path split by the `/` separator. When specified, a trailing `/` is
                 *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                 *     match the prefix `/abc`, but the path `/abcd` would not.
                 *
                 *
                 *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                 *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                 *     the implementation setting the Accepted Condition for the Route to `status: False`.
                 *
                 *
                 *     Request Path | Prefix Match | Replace Prefix | Modified Path
                 *     -------------|--------------|----------------|----------
                 *     /foo/bar     | /foo         | /xyz           | /xyz/bar
                 *     /foo/bar     | /foo         | /xyz/          | /xyz/bar
                 *     /foo/bar     | /foo/        | /xyz           | /xyz/bar
                 *     /foo/bar     | /foo/        | /xyz/          | /xyz/bar
                 *     /foo         | /foo         | /xyz           | /xyz
                 *     /foo/        | /foo         | /xyz           | /xyz/
                 *     /foo/bar     | /foo         | <empty string> | /bar
                 *     /foo/        | /foo         | <empty string> | /
                 *     /foo         | /foo         | <empty string> | /
                 *     /foo/        | /foo         | /              | /
                 *     /foo         | /foo         | /              | / */
                replacePrefixMatch?: string;
                /**
                 * @description Type defines the type of path modifier. Additional types may be
                 *     added in a future release of the API.
                 *
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 * @enum {string}
                 */
                type: "ReplaceFullPath" | "ReplacePrefixMatch";
              };
              /**
               * Format: int32
               * @description Port is the port to be used in the value of the `Location`
               *     header in the response.
               *
               *
               *     If no port is specified, the redirect port MUST be derived using the
               *     following rules:
               *
               *
               *     * If redirect scheme is not-empty, the redirect port MUST be the well-known
               *       port associated with the redirect scheme. Specifically "http" to port 80
               *       and "https" to port 443. If the redirect scheme does not have a
               *       well-known port, the listener port of the Gateway SHOULD be used.
               *     * If redirect scheme is empty, the redirect port MUST be the Gateway
               *       Listener port.
               *
               *
               *     Implementations SHOULD NOT add the port number in the 'Location'
               *     header in the following cases:
               *
               *
               *     * A Location header that will use HTTP (whether that is determined via
               *       the Listener protocol or the Scheme field) _and_ use port 80.
               *     * A Location header that will use HTTPS (whether that is determined via
               *       the Listener protocol or the Scheme field) _and_ use port 443.
               *
               *
               *     Support: Extended
               */
              port?: number;
              /**
               * @description Scheme is the scheme to be used in the value of the `Location` header in
               *     the response. When empty, the scheme of the request is used.
               *
               *
               *     Scheme redirects can affect the port of the redirect, for more information,
               *     refer to the documentation for the port field of this filter.
               *
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               *
               *
               *     Support: Extended
               * @enum {string}
               */
              scheme?: "http" | "https";
              /**
               * @description StatusCode is the HTTP status code to be used in response.
               *
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               *
               *
               *     Support: Core
               * @default 302
               * @enum {integer}
               */
              statusCode: 301 | 302;
            };
            /** @description ResponseHeaderModifier defines a schema for a filter that modifies response
             *     headers.
             *
             *
             *     Support: Extended */
            responseHeaderModifier?: {
              /** @description Add adds the given header(s) (name, value) to the request
               *     before the action. It appends to any existing values associated
               *     with the header name.
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *
               *     Config:
               *       add:
               *       - name: "my-header"
               *         value: "bar,baz"
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: foo,bar,baz */
              add?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string;
                /** @description Value is the value of HTTP Header to be matched. */
                value: string;
              }[];
              /** @description Remove the given header(s) from the HTTP request before the action. The
               *     value of Remove is a list of HTTP header names. Note that the header
               *     names are case-insensitive (see
               *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header1: foo
               *       my-header2: bar
               *       my-header3: baz
               *
               *
               *     Config:
               *       remove: ["my-header1", "my-header3"]
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header2: bar */
              remove?: string[];
              /** @description Set overwrites the request with the given header (name, value)
               *     before the action.
               *
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *
               *     Config:
               *       set:
               *       - name: "my-header"
               *         value: "bar"
               *
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: bar */
              set?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string;
                /** @description Value is the value of HTTP Header to be matched. */
                value: string;
              }[];
            };
            /**
             * @description Type identifies the type of filter to apply. As with other API fields,
             *     types are classified into three conformance levels:
             *
             *
             *     - Core: Filter types and their corresponding configuration defined by
             *       "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *       implementations must support core filters.
             *
             *
             *     - Extended: Filter types and their corresponding configuration defined by
             *       "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *       are encouraged to support extended filters.
             *
             *
             *     - Implementation-specific: Filters that are defined and supported by
             *       specific vendors.
             *       In the future, filters showing convergence in behavior across multiple
             *       implementations will be considered for inclusion in extended or core
             *       conformance levels. Filter-specific configuration for such filters
             *       is specified using the ExtensionRef field. `Type` should be set to
             *       "ExtensionRef" for custom filters.
             *
             *
             *     Implementers are encouraged to define custom implementation types to
             *     extend the core API with implementation-specific behavior.
             *
             *
             *     If a reference to a custom filter type cannot be resolved, the filter
             *     MUST NOT be skipped. Instead, requests that would have been processed by
             *     that filter MUST receive a HTTP error response.
             *
             *
             *     Note that values may be added to this enum, implementations
             *     must ensure that unknown values will not cause a crash.
             *
             *
             *     Unknown values here must result in the implementation setting the
             *     Accepted Condition for the Route to `status: False`, with a
             *     Reason of `UnsupportedValue`.
             * @enum {string}
             */
            type:
              | "RequestHeaderModifier"
              | "ResponseHeaderModifier"
              | "RequestMirror"
              | "RequestRedirect"
              | "URLRewrite"
              | "ExtensionRef";
            /** @description URLRewrite defines a schema for a filter that modifies a request during forwarding.
             *
             *
             *     Support: Extended */
            urlRewrite?: {
              /** @description Hostname is the value to be used to replace the Host header value during
               *     forwarding.
               *
               *
               *     Support: Extended */
              hostname?: string;
              /** @description Path defines a path rewrite.
               *
               *
               *     Support: Extended */
              path?: {
                /** @description ReplaceFullPath specifies the value with which to replace the full path
                 *     of a request during a rewrite or redirect. */
                replaceFullPath?: string;
                /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                 *     match of a request during a rewrite or redirect. For example, a request
                 *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                 *     of "/xyz" would be modified to "/xyz/bar".
                 *
                 *
                 *     Note that this matches the behavior of the PathPrefix match type. This
                 *     matches full path elements. A path element refers to the list of labels
                 *     in the path split by the `/` separator. When specified, a trailing `/` is
                 *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                 *     match the prefix `/abc`, but the path `/abcd` would not.
                 *
                 *
                 *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                 *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                 *     the implementation setting the Accepted Condition for the Route to `status: False`.
                 *
                 *
                 *     Request Path | Prefix Match | Replace Prefix | Modified Path
                 *     -------------|--------------|----------------|----------
                 *     /foo/bar     | /foo         | /xyz           | /xyz/bar
                 *     /foo/bar     | /foo         | /xyz/          | /xyz/bar
                 *     /foo/bar     | /foo/        | /xyz           | /xyz/bar
                 *     /foo/bar     | /foo/        | /xyz/          | /xyz/bar
                 *     /foo         | /foo         | /xyz           | /xyz
                 *     /foo/        | /foo         | /xyz           | /xyz/
                 *     /foo/bar     | /foo         | <empty string> | /bar
                 *     /foo/        | /foo         | <empty string> | /
                 *     /foo         | /foo         | <empty string> | /
                 *     /foo/        | /foo         | /              | /
                 *     /foo         | /foo         | /              | / */
                replacePrefixMatch?: string;
                /**
                 * @description Type defines the type of path modifier. Additional types may be
                 *     added in a future release of the API.
                 *
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 * @enum {string}
                 */
                type: "ReplaceFullPath" | "ReplacePrefixMatch";
              };
            };
          }[];
          /**
           * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
           *     When unspecified or empty string, core API group is inferred.
           * @default
           */
          group: string;
          /**
           * @description Kind is the Kubernetes resource kind of the referent. For example
           *     "Service".
           *
           *
           *     Defaults to "Service" when not specified.
           *
           *
           *     ExternalName services can refer to CNAME DNS records that may live
           *     outside of the cluster and as such are difficult to reason about in
           *     terms of conformance. They also may not be safe to forward to (see
           *     CVE-2021-25740 for more information). Implementations SHOULD NOT
           *     support ExternalName Services.
           *
           *
           *     Support: Core (Services with a type other than ExternalName)
           *
           *
           *     Support: Implementation-specific (Services with type ExternalName)
           * @default Service
           */
          kind: string;
          /** @description Name is the name of the referent. */
          name: string;
          /** @description Namespace is the namespace of the backend. When unspecified, the local
           *     namespace is inferred.
           *
           *
           *     Note that when a namespace different than the local namespace is specified,
           *     a ReferenceGrant object is required in the referent namespace to allow that
           *     namespace's owner to accept the reference. See the ReferenceGrant
           *     documentation for details.
           *
           *
           *     Support: Core */
          namespace?: string;
          /**
           * Format: int32
           * @description Port specifies the destination port number to use for this resource.
           *     Port is required when the referent is a Kubernetes Service. In this
           *     case, the port number is the service port number, not the target port.
           *     For other resources, destination port might be derived from the referent
           *     resource or this field.
           */
          port?: number;
          /**
           * Format: int32
           * @description Weight specifies the proportion of requests forwarded to the referenced
           *     backend. This is computed as weight/(sum of all weights in this
           *     BackendRefs list). For non-zero values, there may be some epsilon from
           *     the exact proportion defined here depending on the precision an
           *     implementation supports. Weight is not a percentage and the sum of
           *     weights does not need to equal 100.
           *
           *
           *     If only one backend is specified and it has a weight greater than 0, 100%
           *     of the traffic is forwarded to that backend. If weight is set to 0, no
           *     traffic should be forwarded for this entry. If unspecified, weight
           *     defaults to 1.
           *
           *
           *     Support for this field varies based on the context where used.
           * @default 1
           */
          weight: number;
        }[];
        /** @description Filters define the filters that are applied to requests that match
         *     this rule.
         *
         *
         *     Wherever possible, implementations SHOULD implement filters in the order
         *     they are specified.
         *
         *
         *     Implementations MAY choose to implement this ordering strictly, rejecting
         *     any combination or order of filters that can not be supported. If implementations
         *     choose a strict interpretation of filter ordering, they MUST clearly document
         *     that behavior.
         *
         *
         *     To reject an invalid combination or order of filters, implementations SHOULD
         *     consider the Route Rules with this configuration invalid. If all Route Rules
         *     in a Route are invalid, the entire Route would be considered invalid. If only
         *     a portion of Route Rules are invalid, implementations MUST set the
         *     "PartiallyInvalid" condition for the Route.
         *
         *
         *     Conformance-levels at this level are defined based on the type of filter:
         *
         *
         *     - ALL core filters MUST be supported by all implementations.
         *     - Implementers are encouraged to support extended filters.
         *     - Implementation-specific custom filters have no API guarantees across
         *       implementations.
         *
         *
         *     Specifying the same filter multiple times is not supported unless explicitly
         *     indicated in the filter.
         *
         *
         *     All filters are expected to be compatible with each other except for the
         *     URLRewrite and RequestRedirect filters, which may not be combined. If an
         *     implementation can not support other combinations of filters, they must clearly
         *     document that limitation. In cases where incompatible or unsupported
         *     filters are specified and cause the `Accepted` condition to be set to status
         *     `False`, implementations may use the `IncompatibleFilters` reason to specify
         *     this configuration error.
         *
         *
         *     Support: Core */
        filters?: {
          /** @description ExtensionRef is an optional, implementation-specific extension to the
           *     "filter" behavior.  For example, resource "myroutefilter" in group
           *     "networking.example.net"). ExtensionRef MUST NOT be used for core and
           *     extended filters.
           *
           *
           *     This filter can be used multiple times within the same rule.
           *
           *
           *     Support: Implementation-specific */
          extensionRef?: {
            /** @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
             *     When unspecified or empty string, core API group is inferred. */
            group: string;
            /** @description Kind is kind of the referent. For example "HTTPRoute" or "Service". */
            kind: string;
            /** @description Name is the name of the referent. */
            name: string;
          };
          /** @description RequestHeaderModifier defines a schema for a filter that modifies request
           *     headers.
           *
           *
           *     Support: Core */
          requestHeaderModifier?: {
            /** @description Add adds the given header(s) (name, value) to the request
             *     before the action. It appends to any existing values associated
             *     with the header name.
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header: foo
             *
             *
             *     Config:
             *       add:
             *       - name: "my-header"
             *         value: "bar,baz"
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header: foo,bar,baz */
            add?: {
              /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
               *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
               *
               *
               *     If multiple entries specify equivalent header names, the first entry with
               *     an equivalent name MUST be considered for a match. Subsequent entries
               *     with an equivalent header name MUST be ignored. Due to the
               *     case-insensitivity of header names, "foo" and "Foo" are considered
               *     equivalent. */
              name: string;
              /** @description Value is the value of HTTP Header to be matched. */
              value: string;
            }[];
            /** @description Remove the given header(s) from the HTTP request before the action. The
             *     value of Remove is a list of HTTP header names. Note that the header
             *     names are case-insensitive (see
             *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header1: foo
             *       my-header2: bar
             *       my-header3: baz
             *
             *
             *     Config:
             *       remove: ["my-header1", "my-header3"]
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header2: bar */
            remove?: string[];
            /** @description Set overwrites the request with the given header (name, value)
             *     before the action.
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header: foo
             *
             *
             *     Config:
             *       set:
             *       - name: "my-header"
             *         value: "bar"
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header: bar */
            set?: {
              /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
               *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
               *
               *
               *     If multiple entries specify equivalent header names, the first entry with
               *     an equivalent name MUST be considered for a match. Subsequent entries
               *     with an equivalent header name MUST be ignored. Due to the
               *     case-insensitivity of header names, "foo" and "Foo" are considered
               *     equivalent. */
              name: string;
              /** @description Value is the value of HTTP Header to be matched. */
              value: string;
            }[];
          };
          /** @description RequestMirror defines a schema for a filter that mirrors requests.
           *     Requests are sent to the specified destination, but responses from
           *     that destination are ignored.
           *
           *
           *     This filter can be used multiple times within the same rule. Note that
           *     not all implementations will be able to support mirroring to multiple
           *     backends.
           *
           *
           *     Support: Extended */
          requestMirror?: {
            /** @description BackendRef references a resource where mirrored requests are sent.
             *
             *
             *     Mirrored requests must be sent only to a single destination endpoint
             *     within this BackendRef, irrespective of how many endpoints are present
             *     within this BackendRef.
             *
             *
             *     If the referent cannot be found, this BackendRef is invalid and must be
             *     dropped from the Gateway. The controller must ensure the "ResolvedRefs"
             *     condition on the Route status is set to `status: False` and not configure
             *     this backend in the underlying implementation.
             *
             *
             *     If there is a cross-namespace reference to an *existing* object
             *     that is not allowed by a ReferenceGrant, the controller must ensure the
             *     "ResolvedRefs"  condition on the Route is set to `status: False`,
             *     with the "RefNotPermitted" reason and not configure this backend in the
             *     underlying implementation.
             *
             *
             *     In either error case, the Message of the `ResolvedRefs` Condition
             *     should be used to provide more detail about the problem.
             *
             *
             *     Support: Extended for Kubernetes Service
             *
             *
             *     Support: Implementation-specific for any other resource */
            backendRef: {
              /**
               * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
               *     When unspecified or empty string, core API group is inferred.
               * @default
               */
              group: string;
              /**
               * @description Kind is the Kubernetes resource kind of the referent. For example
               *     "Service".
               *
               *
               *     Defaults to "Service" when not specified.
               *
               *
               *     ExternalName services can refer to CNAME DNS records that may live
               *     outside of the cluster and as such are difficult to reason about in
               *     terms of conformance. They also may not be safe to forward to (see
               *     CVE-2021-25740 for more information). Implementations SHOULD NOT
               *     support ExternalName Services.
               *
               *
               *     Support: Core (Services with a type other than ExternalName)
               *
               *
               *     Support: Implementation-specific (Services with type ExternalName)
               * @default Service
               */
              kind: string;
              /** @description Name is the name of the referent. */
              name: string;
              /** @description Namespace is the namespace of the backend. When unspecified, the local
               *     namespace is inferred.
               *
               *
               *     Note that when a namespace different than the local namespace is specified,
               *     a ReferenceGrant object is required in the referent namespace to allow that
               *     namespace's owner to accept the reference. See the ReferenceGrant
               *     documentation for details.
               *
               *
               *     Support: Core */
              namespace?: string;
              /**
               * Format: int32
               * @description Port specifies the destination port number to use for this resource.
               *     Port is required when the referent is a Kubernetes Service. In this
               *     case, the port number is the service port number, not the target port.
               *     For other resources, destination port might be derived from the referent
               *     resource or this field.
               */
              port?: number;
            };
          };
          /** @description RequestRedirect defines a schema for a filter that responds to the
           *     request with an HTTP redirection.
           *
           *
           *     Support: Core */
          requestRedirect?: {
            /** @description Hostname is the hostname to be used in the value of the `Location`
             *     header in the response.
             *     When empty, the hostname in the `Host` header of the request is used.
             *
             *
             *     Support: Core */
            hostname?: string;
            /** @description Path defines parameters used to modify the path of the incoming request.
             *     The modified path is then used to construct the `Location` header. When
             *     empty, the request path is used as-is.
             *
             *
             *     Support: Extended */
            path?: {
              /** @description ReplaceFullPath specifies the value with which to replace the full path
               *     of a request during a rewrite or redirect. */
              replaceFullPath?: string;
              /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
               *     match of a request during a rewrite or redirect. For example, a request
               *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
               *     of "/xyz" would be modified to "/xyz/bar".
               *
               *
               *     Note that this matches the behavior of the PathPrefix match type. This
               *     matches full path elements. A path element refers to the list of labels
               *     in the path split by the `/` separator. When specified, a trailing `/` is
               *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
               *     match the prefix `/abc`, but the path `/abcd` would not.
               *
               *
               *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
               *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
               *     the implementation setting the Accepted Condition for the Route to `status: False`.
               *
               *
               *     Request Path | Prefix Match | Replace Prefix | Modified Path
               *     -------------|--------------|----------------|----------
               *     /foo/bar     | /foo         | /xyz           | /xyz/bar
               *     /foo/bar     | /foo         | /xyz/          | /xyz/bar
               *     /foo/bar     | /foo/        | /xyz           | /xyz/bar
               *     /foo/bar     | /foo/        | /xyz/          | /xyz/bar
               *     /foo         | /foo         | /xyz           | /xyz
               *     /foo/        | /foo         | /xyz           | /xyz/
               *     /foo/bar     | /foo         | <empty string> | /bar
               *     /foo/        | /foo         | <empty string> | /
               *     /foo         | /foo         | <empty string> | /
               *     /foo/        | /foo         | /              | /
               *     /foo         | /foo         | /              | / */
              replacePrefixMatch?: string;
              /**
               * @description Type defines the type of path modifier. Additional types may be
               *     added in a future release of the API.
               *
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               * @enum {string}
               */
              type: "ReplaceFullPath" | "ReplacePrefixMatch";
            };
            /**
             * Format: int32
             * @description Port is the port to be used in the value of the `Location`
             *     header in the response.
             *
             *
             *     If no port is specified, the redirect port MUST be derived using the
             *     following rules:
             *
             *
             *     * If redirect scheme is not-empty, the redirect port MUST be the well-known
             *       port associated with the redirect scheme. Specifically "http" to port 80
             *       and "https" to port 443. If the redirect scheme does not have a
             *       well-known port, the listener port of the Gateway SHOULD be used.
             *     * If redirect scheme is empty, the redirect port MUST be the Gateway
             *       Listener port.
             *
             *
             *     Implementations SHOULD NOT add the port number in the 'Location'
             *     header in the following cases:
             *
             *
             *     * A Location header that will use HTTP (whether that is determined via
             *       the Listener protocol or the Scheme field) _and_ use port 80.
             *     * A Location header that will use HTTPS (whether that is determined via
             *       the Listener protocol or the Scheme field) _and_ use port 443.
             *
             *
             *     Support: Extended
             */
            port?: number;
            /**
             * @description Scheme is the scheme to be used in the value of the `Location` header in
             *     the response. When empty, the scheme of the request is used.
             *
             *
             *     Scheme redirects can affect the port of the redirect, for more information,
             *     refer to the documentation for the port field of this filter.
             *
             *
             *     Note that values may be added to this enum, implementations
             *     must ensure that unknown values will not cause a crash.
             *
             *
             *     Unknown values here must result in the implementation setting the
             *     Accepted Condition for the Route to `status: False`, with a
             *     Reason of `UnsupportedValue`.
             *
             *
             *     Support: Extended
             * @enum {string}
             */
            scheme?: "http" | "https";
            /**
             * @description StatusCode is the HTTP status code to be used in response.
             *
             *
             *     Note that values may be added to this enum, implementations
             *     must ensure that unknown values will not cause a crash.
             *
             *
             *     Unknown values here must result in the implementation setting the
             *     Accepted Condition for the Route to `status: False`, with a
             *     Reason of `UnsupportedValue`.
             *
             *
             *     Support: Core
             * @default 302
             * @enum {integer}
             */
            statusCode: 301 | 302;
          };
          /** @description ResponseHeaderModifier defines a schema for a filter that modifies response
           *     headers.
           *
           *
           *     Support: Extended */
          responseHeaderModifier?: {
            /** @description Add adds the given header(s) (name, value) to the request
             *     before the action. It appends to any existing values associated
             *     with the header name.
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header: foo
             *
             *
             *     Config:
             *       add:
             *       - name: "my-header"
             *         value: "bar,baz"
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header: foo,bar,baz */
            add?: {
              /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
               *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
               *
               *
               *     If multiple entries specify equivalent header names, the first entry with
               *     an equivalent name MUST be considered for a match. Subsequent entries
               *     with an equivalent header name MUST be ignored. Due to the
               *     case-insensitivity of header names, "foo" and "Foo" are considered
               *     equivalent. */
              name: string;
              /** @description Value is the value of HTTP Header to be matched. */
              value: string;
            }[];
            /** @description Remove the given header(s) from the HTTP request before the action. The
             *     value of Remove is a list of HTTP header names. Note that the header
             *     names are case-insensitive (see
             *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header1: foo
             *       my-header2: bar
             *       my-header3: baz
             *
             *
             *     Config:
             *       remove: ["my-header1", "my-header3"]
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header2: bar */
            remove?: string[];
            /** @description Set overwrites the request with the given header (name, value)
             *     before the action.
             *
             *
             *     Input:
             *       GET /foo HTTP/1.1
             *       my-header: foo
             *
             *
             *     Config:
             *       set:
             *       - name: "my-header"
             *         value: "bar"
             *
             *
             *     Output:
             *       GET /foo HTTP/1.1
             *       my-header: bar */
            set?: {
              /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
               *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
               *
               *
               *     If multiple entries specify equivalent header names, the first entry with
               *     an equivalent name MUST be considered for a match. Subsequent entries
               *     with an equivalent header name MUST be ignored. Due to the
               *     case-insensitivity of header names, "foo" and "Foo" are considered
               *     equivalent. */
              name: string;
              /** @description Value is the value of HTTP Header to be matched. */
              value: string;
            }[];
          };
          /**
           * @description Type identifies the type of filter to apply. As with other API fields,
           *     types are classified into three conformance levels:
           *
           *
           *     - Core: Filter types and their corresponding configuration defined by
           *       "Support: Core" in this package, e.g. "RequestHeaderModifier". All
           *       implementations must support core filters.
           *
           *
           *     - Extended: Filter types and their corresponding configuration defined by
           *       "Support: Extended" in this package, e.g. "RequestMirror". Implementers
           *       are encouraged to support extended filters.
           *
           *
           *     - Implementation-specific: Filters that are defined and supported by
           *       specific vendors.
           *       In the future, filters showing convergence in behavior across multiple
           *       implementations will be considered for inclusion in extended or core
           *       conformance levels. Filter-specific configuration for such filters
           *       is specified using the ExtensionRef field. `Type` should be set to
           *       "ExtensionRef" for custom filters.
           *
           *
           *     Implementers are encouraged to define custom implementation types to
           *     extend the core API with implementation-specific behavior.
           *
           *
           *     If a reference to a custom filter type cannot be resolved, the filter
           *     MUST NOT be skipped. Instead, requests that would have been processed by
           *     that filter MUST receive a HTTP error response.
           *
           *
           *     Note that values may be added to this enum, implementations
           *     must ensure that unknown values will not cause a crash.
           *
           *
           *     Unknown values here must result in the implementation setting the
           *     Accepted Condition for the Route to `status: False`, with a
           *     Reason of `UnsupportedValue`.
           * @enum {string}
           */
          type:
            | "RequestHeaderModifier"
            | "ResponseHeaderModifier"
            | "RequestMirror"
            | "RequestRedirect"
            | "URLRewrite"
            | "ExtensionRef";
          /** @description URLRewrite defines a schema for a filter that modifies a request during forwarding.
           *
           *
           *     Support: Extended */
          urlRewrite?: {
            /** @description Hostname is the value to be used to replace the Host header value during
             *     forwarding.
             *
             *
             *     Support: Extended */
            hostname?: string;
            /** @description Path defines a path rewrite.
             *
             *
             *     Support: Extended */
            path?: {
              /** @description ReplaceFullPath specifies the value with which to replace the full path
               *     of a request during a rewrite or redirect. */
              replaceFullPath?: string;
              /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
               *     match of a request during a rewrite or redirect. For example, a request
               *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
               *     of "/xyz" would be modified to "/xyz/bar".
               *
               *
               *     Note that this matches the behavior of the PathPrefix match type. This
               *     matches full path elements. A path element refers to the list of labels
               *     in the path split by the `/` separator. When specified, a trailing `/` is
               *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
               *     match the prefix `/abc`, but the path `/abcd` would not.
               *
               *
               *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
               *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
               *     the implementation setting the Accepted Condition for the Route to `status: False`.
               *
               *
               *     Request Path | Prefix Match | Replace Prefix | Modified Path
               *     -------------|--------------|----------------|----------
               *     /foo/bar     | /foo         | /xyz           | /xyz/bar
               *     /foo/bar     | /foo         | /xyz/          | /xyz/bar
               *     /foo/bar     | /foo/        | /xyz           | /xyz/bar
               *     /foo/bar     | /foo/        | /xyz/          | /xyz/bar
               *     /foo         | /foo         | /xyz           | /xyz
               *     /foo/        | /foo         | /xyz           | /xyz/
               *     /foo/bar     | /foo         | <empty string> | /bar
               *     /foo/        | /foo         | <empty string> | /
               *     /foo         | /foo         | <empty string> | /
               *     /foo/        | /foo         | /              | /
               *     /foo         | /foo         | /              | / */
              replacePrefixMatch?: string;
              /**
               * @description Type defines the type of path modifier. Additional types may be
               *     added in a future release of the API.
               *
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               * @enum {string}
               */
              type: "ReplaceFullPath" | "ReplacePrefixMatch";
            };
          };
        }[];
        /**
         * @description Matches define conditions used for matching the rule against incoming
         *     HTTP requests. Each match is independent, i.e. this rule will be matched
         *     if **any** one of the matches is satisfied.
         *
         *
         *     For example, take the following matches configuration:
         *
         *
         *     ```
         *     matches:
         *     - path:
         *         value: "/foo"
         *       headers:
         *       - name: "version"
         *         value: "v2"
         *     - path:
         *         value: "/v2/foo"
         *     ```
         *
         *
         *     For a request to match against this rule, a request must satisfy
         *     EITHER of the two conditions:
         *
         *
         *     - path prefixed with `/foo` AND contains the header `version: v2`
         *     - path prefix of `/v2/foo`
         *
         *
         *     See the documentation for HTTPRouteMatch on how to specify multiple
         *     match conditions that should be ANDed together.
         *
         *
         *     If no matches are specified, the default is a prefix
         *     path match on "/", which has the effect of matching every
         *     HTTP request.
         *
         *
         *     Proxy or Load Balancer routing configuration generated from HTTPRoutes
         *     MUST prioritize matches based on the following criteria, continuing on
         *     ties. Across all rules specified on applicable Routes, precedence must be
         *     given to the match having:
         *
         *
         *     * "Exact" path match.
         *     * "Prefix" path match with largest number of characters.
         *     * Method match.
         *     * Largest number of header matches.
         *     * Largest number of query param matches.
         *
         *
         *     Note: The precedence of RegularExpression path matches are implementation-specific.
         *
         *
         *     If ties still exist across multiple Routes, matching precedence MUST be
         *     determined in order of the following criteria, continuing on ties:
         *
         *
         *     * The oldest Route based on creation timestamp.
         *     * The Route appearing first in alphabetical order by
         *       "{namespace}/{name}".
         *
         *
         *     If ties still exist within an HTTPRoute, matching precedence MUST be granted
         *     to the FIRST matching rule (in list order) with a match meeting the above
         *     criteria.
         *
         *
         *     When no rules matching a request have been successfully attached to the
         *     parent a request is coming from, a HTTP 404 status code MUST be returned.
         * @default [
         *       {
         *         "path": {
         *           "type": "PathPrefix",
         *           "value": "/"
         *         }
         *       }
         *     ]
         */
        matches: {
          /** @description Headers specifies HTTP request header matchers. Multiple match values are
           *     ANDed together, meaning, a request must match all the specified headers
           *     to select the route. */
          headers?: {
            /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
             *     case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
             *
             *
             *     If multiple entries specify equivalent header names, only the first
             *     entry with an equivalent name MUST be considered for a match. Subsequent
             *     entries with an equivalent header name MUST be ignored. Due to the
             *     case-insensitivity of header names, "foo" and "Foo" are considered
             *     equivalent.
             *
             *
             *     When a header is repeated in an HTTP request, it is
             *     implementation-specific behavior as to how this is represented.
             *     Generally, proxies should follow the guidance from the RFC:
             *     https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
             *     processing a repeated header, with special handling for "Set-Cookie". */
            name: string;
            /**
             * @description Type specifies how to match against the value of the header.
             *
             *
             *     Support: Core (Exact)
             *
             *
             *     Support: Implementation-specific (RegularExpression)
             *
             *
             *     Since RegularExpression HeaderMatchType has implementation-specific
             *     conformance, implementations can support POSIX, PCRE or any other dialects
             *     of regular expressions. Please read the implementation's documentation to
             *     determine the supported dialect.
             * @default Exact
             * @enum {string}
             */
            type: "Exact" | "RegularExpression";
            /** @description Value is the value of HTTP Header to be matched. */
            value: string;
          }[];
          /**
           * @description Method specifies HTTP method matcher.
           *     When specified, this route will be matched only if the request has the
           *     specified method.
           *
           *
           *     Support: Extended
           * @enum {string}
           */
          method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";
          /**
           * @description Path specifies a HTTP request path matcher. If this field is not
           *     specified, a default prefix match on the "/" path is provided.
           * @default {
           *       "type": "PathPrefix",
           *       "value": "/"
           *     }
           */
          path: {
            /**
             * @description Type specifies how to match against the path Value.
             *
             *
             *     Support: Core (Exact, PathPrefix)
             *
             *
             *     Support: Implementation-specific (RegularExpression)
             * @default PathPrefix
             * @enum {string}
             */
            type: "Exact" | "PathPrefix" | "RegularExpression";
            /**
             * @description Value of the HTTP path to match against.
             * @default /
             */
            value: string;
          };
          /** @description QueryParams specifies HTTP query parameter matchers. Multiple match
           *     values are ANDed together, meaning, a request must match all the
           *     specified query parameters to select the route.
           *
           *
           *     Support: Extended */
          queryParams?: {
            /** @description Name is the name of the HTTP query param to be matched. This must be an
             *     exact string match. (See
             *     https://tools.ietf.org/html/rfc7230#section-2.7.3).
             *
             *
             *     If multiple entries specify equivalent query param names, only the first
             *     entry with an equivalent name MUST be considered for a match. Subsequent
             *     entries with an equivalent query param name MUST be ignored.
             *
             *
             *     If a query param is repeated in an HTTP request, the behavior is
             *     purposely left undefined, since different data planes have different
             *     capabilities. However, it is *recommended* that implementations should
             *     match against the first value of the param if the data plane supports it,
             *     as this behavior is expected in other load balancing contexts outside of
             *     the Gateway API.
             *
             *
             *     Users SHOULD NOT route traffic based on repeated query params to guard
             *     themselves against potential differences in the implementations. */
            name: string;
            /**
             * @description Type specifies how to match against the value of the query parameter.
             *
             *
             *     Support: Extended (Exact)
             *
             *
             *     Support: Implementation-specific (RegularExpression)
             *
             *
             *     Since RegularExpression QueryParamMatchType has Implementation-specific
             *     conformance, implementations can support POSIX, PCRE or any other
             *     dialects of regular expressions. Please read the implementation's
             *     documentation to determine the supported dialect.
             * @default Exact
             * @enum {string}
             */
            type: "Exact" | "RegularExpression";
            /** @description Value is the value of HTTP query param to be matched. */
            value: string;
          }[];
        }[];
      }[];
    };
  };
}
