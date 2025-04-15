import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetHTTPProxyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeTargetHTTPProxyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeTargetHTTPProxyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeTargetHTTPProxy";
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
      /** @description The unique identifier for the resource. */
      proxyId?: number;
      selfLink?: string;
    };
  };
}
