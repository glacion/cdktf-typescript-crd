import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEIPRouteV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKEIPRouteV1Config) {
    super(scope, id, { manifest: { apiVersion: "networking.gke.io/v1", kind: "GKEIPRoute", ...manifest }, ...config });
  }
}
export interface KubernetesGKEIPRouteV1Config extends ManifestConfig {
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
  };
}
