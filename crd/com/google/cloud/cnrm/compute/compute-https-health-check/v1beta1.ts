import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeHTTPSHealthCheckV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeHTTPSHealthCheckV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeHTTPSHealthCheckV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeHTTPSHealthCheck";
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
      /** @description The value of the host header in the HTTPS health check request. If
       *     left empty (default value), the public IP on behalf of which this
       *     health check is performed will be used. */
      host?: string;
      /** @description The TCP port number for the HTTPS health check request.
       *     The default value is 443. */
      port?: number;
      /** @description The request path of the HTTPS health check request.
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
}
