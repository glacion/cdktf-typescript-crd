import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkservicesCnrmCloudGoogleComNetworkServicesMeshV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkservicesCnrmCloudGoogleComNetworkServicesMeshV1beta1Config) {
    super(scope, id, config);
  }
}
export interface NetworkservicesCnrmCloudGoogleComNetworkServicesMeshV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1";
    kind: "NetworkServicesMesh";
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
    spec: {
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /**
       * Format: int64
       * @description Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This field is only valid if the type of Mesh is SIDECAR.
       */
      interceptionPort?: number;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was created.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Server-defined URL of this resource */
      selfLink?: string;
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was updated.
       */
      updateTime?: string;
    };
  };
}
