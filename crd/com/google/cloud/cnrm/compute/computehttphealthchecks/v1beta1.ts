import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeHTTPHealthCheckV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeHTTPHealthCheckV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeHTTPHealthCheck", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeHTTPHealthCheckV1beta1Config extends ManifestConfig {
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
        /** @description How often (in seconds) to send a health check. The default value is 5
         *     seconds. */
        checkIntervalSec?: number;
        /** @description An optional description of this resource. Provide this property when
         *     you create the resource. */
        description?: string;
        /** @description A so-far unhealthy instance will be marked healthy after this many
         *     consecutive successes. The default value is 2. */
        healthyThreshold?: number;
        /** @description The value of the host header in the HTTP health check request. If
         *     left empty (default value), the public IP on behalf of which this
         *     health check is performed will be used. */
        host?: string;
        /** @description The TCP port number for the HTTP health check request.
         *     The default value is 80. */
        port?: number;
        /** @description The request path of the HTTP health check request.
         *     The default value is /. */
        requestPath?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description How long (in seconds) to wait before claiming failure.
         *     The default value is 5 seconds.  It is invalid for timeoutSec to have
         *     greater value than checkIntervalSec. */
        timeoutSec?: number;
        /** @description A so-far healthy instance will be marked unhealthy after this many
         *     consecutive failures. The default value is 2. */
        unhealthyThreshold?: number;
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
        /** @description Creation timestamp in RFC3339 text format. */
        creationTimestamp?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
