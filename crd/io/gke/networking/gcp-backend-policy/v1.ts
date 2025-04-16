import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPBackendPolicyV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGCPBackendPolicyV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGCPBackendPolicyV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1";
    kind?: "GCPBackendPolicy";
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
    /** @description Spec defines the desired state of GCPBackendPolicy. */
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
    /** @description Status defines the current state of GCPBackendPolicy. */
    status?: {
      /** @description Ancestors is a list of ancestor resources (usually Gateways) that are
       *     associated with the policy, and the status of the policy with respect to
       *     each ancestor. */
      ancestors?: {
        /** @description AncestorRef corresponds with a ParentRef in the spec that this
         *     PolicyAncestorStatus struct describes the status of. */
        ancestorRef: {
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
           *     <gateway:experimental:description>
           *     ParentRefs from a Route to a Service in the same namespace are "producer"
           *     routes, which apply default routing rules to inbound connections from
           *     any namespace to the Service.
           *
           *
           *     ParentRefs from a Route to a Service in a different namespace are
           *     "consumer" routes, and these routing rules are only applied to outbound
           *     connections originating from the same namespace as the Route, for which
           *     the intended destination of the connections are a Service targeted as a
           *     ParentRef of the Route.
           *     </gateway:experimental:description>
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
           *     <gateway:experimental:description>
           *     When the parent resource is a Service, this targets a specific port in the
           *     Service spec. When both Port (experimental) and SectionName are specified,
           *     the name and port of the selected port must match both specified values.
           *     </gateway:experimental:description>
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
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase.
           *     ---
           *     Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
           *     useful (see .node.status.conditions), the ability to deconflict is important.
           *     The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
          type: string;
        }[];
        /** @description ControllerName is a domain/path string that indicates the name of the
         *     controller that wrote this status. This corresponds with the
         *     controllerName field on GatewayClass.
         *
         *
         *     Example: "example.net/gateway-controller".
         *
         *
         *     The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
         *     valid Kubernetes names
         *     (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
         *
         *
         *     Controllers MUST populate this field when writing status. Controllers should ensure that
         *     entries to status populated with their ControllerName are cleaned up when they are no
         *     longer necessary. */
        controllerName: string;
      }[];
      /** @description Conditions describe the current conditions of the GCPBackendPolicy. */
      conditions?: {
        /**
         * Format: date-time
         * @description lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /** @description message is a human readable message indicating details about the transition. This may be an empty string. */
        message: string;
        /**
         * Format: int64
         * @description observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. */
        reason: string;
        /**
         * @description status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "True" | "False" | "Unknown";
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
        type: string;
      }[];
    };
  };
}
