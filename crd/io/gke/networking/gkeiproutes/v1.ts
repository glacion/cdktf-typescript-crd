import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEIPRouteV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKEIPRouteV1Config) {
    super(scope, id, { manifest: { apiVersion: "networking.gke.io/v1", kind: "GKEIPRoute", ...manifest }, ...config });
  }
}
export interface KubernetesGKEIPRouteV1Config extends ManifestConfig {
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
    /** @description GKEIPRoute is the Schema for the iproutes API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description GKEIPRouteSpec defines the desired state of IPRoute. */
      spec?: {
        /** @description Prefixes hold a list of all the CIDRs to attract. */
        addresses: {
          /**
           * @description Type of the address.
           * @default IPAddress
           */
          type: string;
          /** @description Value of the address. The validity of the values will depend on the type and support by the controller.
           *      Examples: `1.2.3.4`, `128::1`, `my-ip-address`. */
          value: string;
        }[];
        /** @description Network defines Pods network interface the prefixes will be attracted to. If not specified, we will use the Primary Network of the Pod. */
        network?: string;
        /** @description ParentRefs references the resources (usually Gateways) that a Route wants to be attached to. Note that the referenced parent resource needs to allow this for the attachment to be complete. For Gateways, that means the Gateway needs to allow attachment from Routes of this kind and namespace.
         *      The only kind of parent resource with "Core" support is Gateway. This API may be extended in the future to support additional kinds of parent resources such as one of the route kinds.
         *      It is invalid to reference an identical parent more than once. It is valid to reference multiple distinct sections within the same parent resource, such as 2 Listeners within a Gateway.
         *      It is possible to separately reference multiple distinct objects that may be collapsed by an implementation. For example, some implementations may choose to merge compatible Gateway Listeners together. If that is the case, the list of routes attached to those resources should also be merged. */
        parentRefs?: {
          /**
           * @description Group is the group of the referent.
           *      Support: Core
           * @default gateway.networking.k8s.io
           */
          group: string;
          /**
           * @description Kind is kind of the referent.
           *      Support: Core (Gateway)
           *      Support: Custom (Other Resources)
           * @default Gateway
           */
          kind: string;
          /** @description Name is the name of the referent.
           *      Support: Core */
          name: string;
          /** @description Namespace is the namespace of the referent. When unspecified (or empty string), this refers to the local namespace of the Route.
           *      Support: Core */
          namespace?: string;
          /**
           * Format: int32
           * @description Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource.
           *      When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
           *      Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
           *      For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
           *      Support: Extended
           *      <gateway:experimental>
           */
          port?: number;
          /** @description SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
           *      * Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values.
           *      Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
           *      When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
           *      Support: Core */
          sectionName?: string;
        }[];
        /** @description PodSelector defines to which Pod the prefixes will be attracted to. When selecting multiple, using the newest Pod that is Ready. Empty selector is not allowed. */
        podSelector: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
        /** @description ReactionMode defines the criteria for selecting a pod along with the pod selector. Possible values are: 1. ReadyCondition - A pod that has Ready Condition set to true. 2. Exists - A pod whose nodeName is set. */
        reactionMode?: string;
      };
      /** @description GKEIPRouteStatus defines the observed state of IPRoute. */
      status?: {
        /** @description Conditions describe the current conditions of the IPRoute.
         *      Known condition types are:
         *      * "Accepted" * "Ready" * "DPv2Ready" * "DPv2Removed" */
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
        /** @description Pod holds the name of the Pod the PodSelector specifies. If PodSelector returns multiple items, only the first one is used. */
        pods?: string[];
      };
    };
  };
}
