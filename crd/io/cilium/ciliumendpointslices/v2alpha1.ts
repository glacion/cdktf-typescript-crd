import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumEndpointSliceV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumEndpointSliceV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2alpha1", kind: "CiliumEndpointSlice", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumEndpointSliceV2alpha1Config extends ManifestConfig {
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
    /** @description CiliumEndpointSlice contains a group of CoreCiliumendpoints. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Endpoints is a list of coreCEPs packed in a CiliumEndpointSlice */
      endpoints: {
        /** @description EncryptionSpec defines the encryption relevant configuration of a node. */
        encryption?: {
          /** @description Key is the index to the key to use for encryption or 0 if encryption is disabled. */
          key?: number;
        };
        /**
         * Format: int64
         * @description IdentityID is the numeric identity of the endpoint
         */
        id?: number;
        /** @description Name indicate as CiliumEndpoint name. */
        name?: string;
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
        /** @description EndpointNetworking is the addressing information of an endpoint. */
        networking?: {
          /** @description IP4/6 addresses assigned to this Endpoint */
          addressing: {
            ipv4?: string;
            ipv6?: string;
          }[];
          /** @description NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes. */
          node?: string;
        };
      }[];
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata: Record<string, never>;
      /** @description Namespace indicate as CiliumEndpointSlice namespace. All the CiliumEndpoints within the same namespace are put together in CiliumEndpointSlice. */
      namespace?: string;
    };
  };
}
