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
  };
}
