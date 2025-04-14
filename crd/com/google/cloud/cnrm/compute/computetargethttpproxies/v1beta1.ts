import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetHTTPProxyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeTargetHTTPProxyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeTargetHTTPProxy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeTargetHTTPProxyV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. Specifies how long to keep a connection open, after completing a response,
       *     while there is no matching traffic (in seconds). If an HTTP keepalive is
       *     not specified, a default value (610 seconds) will be used. For Global
       *     external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
       *     the maximum allowed value is 1200 seconds. For Global external HTTP(S)
       *     load balancer (classic), this option is not available publicly. */
      httpKeepAliveTimeoutSec?: number;
      /** @description Location represents the geographical location of the ComputeTargetHTTPProxy. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. This field only applies when the forwarding rule that references
       *     this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. */
      proxyBind?: boolean;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description A reference to the ComputeURLMap resource that defines the mapping
       *     from URL to the BackendService. */
      urlMapRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeURLMap` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
