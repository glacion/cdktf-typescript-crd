import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeExternalVPNGatewayV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeExternalVPNGatewayV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeExternalVPNGateway", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeExternalVPNGatewayV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec?: {
        /** @description Immutable. An optional description of this resource. */
        description?: string;
        /** @description Immutable. A list of interfaces on this external VPN gateway. */
        interface?: {
          /** @description Immutable. The numeric ID for this interface. Allowed values are based on the redundancy type
           *     of this external VPN gateway
           *     * '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
           *     * '0, 1 - TWO_IPS_REDUNDANCY'
           *     * '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'. */
          id?: number;
          /** @description Immutable. IP address of the interface in the external VPN gateway.
           *     Only IPv4 is supported. This IP address can be either from
           *     your on-premise gateway or another Cloud provider's VPN gateway,
           *     it cannot be an IP address from Google Compute Engine. */
          ipAddress?: string;
        }[];
        /** @description Immutable. Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. */
        redundancyType?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
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
        /** @description The fingerprint used for optimistic locking of this resource.  Used
         *     internally during updates. */
        labelFingerprint?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
