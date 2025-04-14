import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIDSEndpointV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudIDSEndpointV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloudids.cnrm.cloud.google.com/v1alpha1", kind: "CloudIDSEndpoint", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudIDSEndpointV1alpha1Config extends ManifestConfig {
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
      spec: {
        /** @description Immutable. An optional description of the endpoint. */
        description?: string;
        /** @description Immutable. The location for the endpoint. */
        location: string;
        /** @description Immutable. Name of the VPC network that is connected
         *     to the IDS endpoint. This can either contain the VPC network name
         *     itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net"). */
        networkRef: {
          /** @description Allowed value: The `name` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description Allowed value: The `name` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Immutable. The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"]. */
        severity: string;
        /** @description Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs. */
        threatExceptions?: string[];
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
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The observed state of the underlying GCP resource. */
        observedState?: {
          /** @description Creation timestamp in RFC 3339 text format. */
          createTime?: string;
          /** @description URL of the endpoint's network address to which traffic is to be sent by Packet Mirroring. */
          endpointForwardingRule?: string;
          /** @description Internal IP address of the endpoint's network entry point. */
          endpointIP?: string;
          /** @description Last update timestamp in RFC 3339 text format. */
          updateTime?: string;
        };
      };
    };
  };
}
