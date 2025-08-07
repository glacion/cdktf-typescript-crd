import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ComputeCnrmCloudGoogleComComputeTargetTCPProxyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: ComputeCnrmCloudGoogleComComputeTargetTCPProxyV1beta1Config) {
    super(scope, id, config);
  }
}
export interface ComputeCnrmCloudGoogleComComputeTargetTCPProxyV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeTargetTCPProxy";
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
    /** @description ComputeTargetTCPProxySpec defines the desired state of ComputeTargetTCPProxy */
    spec: {
      /** @description A reference to the ComputeBackendService resource. */
      backendServiceRef: {
        /** @description The value of an externally managed ComputeBackendService resource. */
        external?: string;
        /** @description The name of a ComputeBackendService resource. */
        name?: string;
        /** @description The namespace of a ComputeBackendService resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description The geographical location of the ComputeTargetTCPProxy. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location?: string;
      /** @description Immutable. This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. */
      proxyBind?: boolean;
      /** @description Specifies the type of proxy header to append before sending data to the backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
      proxyHeader?: string;
      /** @description The ComputeTargetTCPProxy name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description ComputeTargetTCPProxyStatus defines the config connector machine state of ComputeTargetTCPProxy */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description A unique specifier for the ComputeTargetTCPProxy resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /**
       * Format: int64
       * @description The unique identifier for the resource.
       */
      proxyId?: number;
      /** @description The SelfLink for the resource. */
      selfLink?: string;
    };
  };
}
