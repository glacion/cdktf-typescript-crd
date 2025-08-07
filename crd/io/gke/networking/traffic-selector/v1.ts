import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoTrafficSelectorV1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoTrafficSelectorV1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoTrafficSelectorV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "TrafficSelector";
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
    /** @description TrafficSelectorSpec defines the desired state of TrafficSelector
     *     Exactly one of {`Ingress`, `Egress`} pointers should be set. */
    spec: {
      /** @description Egress rule to be applied to the selected objects with subject as the frame of reference. */
      egress?: {
        /** @description Ports allows for matching traffic based on port and protocols.
         *     If Ports is not set then the rule does not filter traffic via port.
         *     However, this is not currently supported and Ports (with at least 1 item) is required. */
        ports?: {
          /** @description AllPorts selects all ports. */
          allPorts?: {
            /**
             * @description Protocol is the network protocol (TCP, UDP) which traffic must match.
             * @enum {string}
             */
            protocol: "UDP" | "TCP";
          };
          /** @description Port selects a port on a pod(s) based on number. */
          portNumber?: {
            /**
             * Format: int32
             * @description Number defines a network port value.
             */
            port: number;
            /**
             * @description Protocol is the network protocol (TCP, UDP) which traffic must match.
             * @enum {string}
             */
            protocol: "UDP" | "TCP";
          };
        }[];
        /** @description Destination peer from which traffic will be steered by this TrafficSelector.
         *     If this field is not present or empty, this rule matches all destination IPs. */
        to?: {
          /** @description IPBlock selects IP CIDR ranges. */
          ipBlock?: {
            /** @description CIDR is a string representing the IP Block (e.g. "192.168.1.1/24", "2001:db9::/64"). */
            cidr: string;
          };
        };
      };
      /** @description Ingress rule to be applied to the selected objects with subject as the frame of reference */
      ingress?: {
        /** @description Source peer from which traffic will be steered by this TrafficSelector.
         *     If this field is not present or empty, this rule matches all source IPs. */
        from?: {
          /** @description IPBlock selects IP CIDR ranges. */
          ipBlock?: {
            /** @description CIDR is a string representing the IP Block (e.g. "192.168.1.1/24", "2001:db9::/64"). */
            cidr: string;
          };
        };
        /** @description Ports allows for matching traffic based on port and protocols.
         *     If Ports is not set then the rule does not filter traffic via port.
         *     However, this is not currently supported and Ports (with at least 1 item) is required. */
        ports?: {
          /** @description AllPorts selects all ports. */
          allPorts?: {
            /**
             * @description Protocol is the network protocol (TCP, UDP) which traffic must match.
             * @enum {string}
             */
            protocol: "UDP" | "TCP";
          };
          /** @description Port selects a port on a pod(s) based on number. */
          portNumber?: {
            /**
             * Format: int32
             * @description Number defines a network port value.
             */
            port: number;
            /**
             * @description Protocol is the network protocol (TCP, UDP) which traffic must match.
             * @enum {string}
             */
            protocol: "UDP" | "TCP";
          };
        }[];
      };
      /** @description ServiceFunctionChain defines the service chain where selected traffic should be sent. */
      serviceFunctionChain: string;
      /** @description Subject defines what objects the TrafficSelector applies to. */
      subject: {
        /** @description Network specifies to which network interfaces this TrafficSelector applies. All service
         *     functions in the referenced service chain must belong to the same network as the
         *     TrafficSelector to maintain network isolation. The default pod network is chosen if not
         *     present. */
        network?: string;
        /** @description Allows the user to select a given set of pod(s) in selected namespace(s). */
        pods: {
          /** @description This field follows standard label selector semantics. If empty, it selects all Namespaces. */
          namespaceSelector: {
            /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** @description key is the label key that the selector applies to. */
              key: string;
              /** @description operator represents a key's relationship to a set of values.
               *     Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;
              /** @description values is an array of string values. If the operator is In or NotIn,
               *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
               *     the values array must be empty. This array is replaced during a strategic
               *     merge patch. */
              values?: string[];
            }[];
            /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             *     map is equivalent to an element of matchExpressions, whose key field is "key", the
             *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };
          /** @description Used to explicitly select pods within a namespace; if empty, it selects all Pods. */
          podSelector: {
            /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** @description key is the label key that the selector applies to. */
              key: string;
              /** @description operator represents a key's relationship to a set of values.
               *     Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;
              /** @description values is an array of string values. If the operator is In or NotIn,
               *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
               *     the values array must be empty. This array is replaced during a strategic
               *     merge patch. */
              values?: string[];
            }[];
            /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             *     map is equivalent to an element of matchExpressions, whose key field is "key", the
             *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };
        };
      };
    };
    /** @description TrafficSelectorStatus defines the observed state of TrafficSelector */
    status?: Record<string, never>;
  };
}
