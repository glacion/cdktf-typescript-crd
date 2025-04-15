import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumEndpointV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumEndpointV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumEndpointV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cilium.io/v2";
    kind: "CiliumEndpoint";
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
    /** @description EndpointStatus is the status of a Cilium endpoint. */
    status?: {
      /** @description Controllers is the list of failing controllers for this endpoint. */
      controllers?: {
        /** @description Configuration is the controller configuration */
        configuration?: {
          /** @description Retry on error */
          "error-retry"?: boolean;
          /**
           * Format: int64
           * @description Base error retry back-off time Format: duration
           */
          "error-retry-base"?: number;
          /**
           * Format: int64
           * @description Regular synchronization interval Format: duration
           */
          interval?: number;
        };
        /** @description Name is the name of the controller */
        name?: string;
        /** @description Status is the status of the controller */
        status?: {
          /** Format: int64 */
          "consecutive-failure-count"?: number;
          /** Format: int64 */
          "failure-count"?: number;
          "last-failure-msg"?: string;
          "last-failure-timestamp"?: string;
          "last-success-timestamp"?: string;
          /** Format: int64 */
          "success-count"?: number;
        };
        /** @description UUID is the UUID of the controller */
        uuid?: string;
      }[];
      /** @description Encryption is the encryption configuration of the node */
      encryption?: {
        /** @description Key is the index to the key to use for encryption or 0 if encryption is disabled. */
        key?: number;
      };
      /** @description ExternalIdentifiers is a set of identifiers to identify the endpoint apart from the pod name. This includes container runtime IDs. */
      "external-identifiers"?: {
        /** @description ID assigned to this attachment by container runtime */
        "cni-attachment-id"?: string;
        /** @description ID assigned by container runtime (deprecated, may not be unique) */
        "container-id"?: string;
        /** @description Name assigned to container (deprecated, may not be unique) */
        "container-name"?: string;
        /** @description Docker endpoint ID */
        "docker-endpoint-id"?: string;
        /** @description Docker network ID */
        "docker-network-id"?: string;
        /** @description K8s namespace for this endpoint (deprecated, may not be unique) */
        "k8s-namespace"?: string;
        /** @description K8s pod name for this endpoint (deprecated, may not be unique) */
        "k8s-pod-name"?: string;
        /** @description K8s pod for this endpoint (deprecated, may not be unique) */
        "pod-name"?: string;
      };
      /** @description Health is the overall endpoint & subcomponent health. */
      health?: {
        /** @description bpf */
        bpf?: string;
        /** @description Is this endpoint reachable */
        connected?: boolean;
        /** @description overall health */
        overallHealth?: string;
        /** @description policy */
        policy?: string;
      };
      /**
       * Format: int64
       * @description ID is the cilium-agent-local ID of the endpoint.
       */
      id?: number;
      /** @description Identity is the security identity associated with the endpoint */
      identity?: {
        /**
         * Format: int64
         * @description ID is the numeric identity of the endpoint
         */
        id?: number;
        /** @description Labels is the list of labels associated with the identity */
        labels?: string[];
      };
      /** @description Log is the list of the last few warning and error log entries */
      log?: {
        /** @description Code indicate type of status change Enum: [ok failed] */
        code?: string;
        /** @description Status message */
        message?: string;
        /** @description state */
        state?: string;
        /** @description Timestamp when status change occurred */
        timestamp?: string;
      }[];
      /** @description NamedPorts List of named Layer 4 port and protocol pairs which will be used in Network Policy specs.
       *      swagger:model NamedPorts */
      "named-ports"?: {
        /** @description Optional layer 4 port name */
        name?: string;
        /** @description Layer 4 port number */
        port?: number;
        /** @description Layer 4 protocol Enum: [TCP UDP SCTP ICMP ICMPV6 ANY] */
        protocol?: string;
      }[];
      /** @description Networking is the networking properties of the endpoint. */
      networking?: {
        /** @description IP4/6 addresses assigned to this Endpoint */
        addressing: {
          ipv4?: string;
          ipv6?: string;
        }[];
        /** @description NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes. */
        node?: string;
      };
      /** @description EndpointPolicy represents the endpoint's policy by listing all allowed ingress and egress identities in combination with L4 port and protocol. */
      policy?: {
        /** @description EndpointPolicyDirection is the list of allowed identities per direction. */
        egress?: {
          /** @description Deprecated */
          adding?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description AllowedIdentityList is a list of IdentityTuples that species peers that are allowed. */
          allowed?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description DenyIdentityList is a list of IdentityTuples that species peers that are denied. */
          denied?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          enforcing: boolean;
          /** @description Deprecated */
          removing?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description EndpointPolicyState defines the state of the Policy mode: "enforcing", "non-enforcing", "disabled" */
          state?: string;
        };
        /** @description EndpointPolicyDirection is the list of allowed identities per direction. */
        ingress?: {
          /** @description Deprecated */
          adding?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description AllowedIdentityList is a list of IdentityTuples that species peers that are allowed. */
          allowed?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description DenyIdentityList is a list of IdentityTuples that species peers that are denied. */
          denied?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          enforcing: boolean;
          /** @description Deprecated */
          removing?: {
            "dest-port"?: number;
            /** Format: int64 */
            identity?: number;
            "identity-labels"?: {
              [key: string]: string;
            };
            protocol?: number;
          }[];
          /** @description EndpointPolicyState defines the state of the Policy mode: "enforcing", "non-enforcing", "disabled" */
          state?: string;
        };
      };
      /** @description State is the state of the endpoint. */
      state?: string;
      "visibility-policy-status"?: string;
    };
  };
}
