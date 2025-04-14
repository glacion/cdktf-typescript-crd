import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetGRPCProxyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeTargetGRPCProxyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeTargetGRPCProxy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeTargetGRPCProxyV1beta1Config extends ManifestConfig {
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
        /** @description An optional description of this resource. */
        description?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description The UrlMap resource that defines the mapping from URL to the BackendService.
         *     The protocol field in the BackendService must be set to GRPC. */
        urlMapRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeURLMap` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. If true, indicates that the BackendServices referenced by
         *     the urlMap may be accessed by gRPC applications without using
         *     a sidecar proxy. This will enable configuration checks on urlMap
         *     and its referenced BackendServices to not allow unsupported features.
         *     A gRPC application must use "xds:///" scheme in the target URI
         *     of the service it is connecting to. If false, indicates that the
         *     BackendServices referenced by the urlMap will be accessed by gRPC
         *     applications via a sidecar proxy. In this case, a gRPC application
         *     must not use "xds:///" scheme in the target URI of the service
         *     it is connecting to. */
        validateForProxyless?: boolean;
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
        /** @description Fingerprint of this resource. A hash of the contents stored in
         *     this object. This field is used in optimistic locking. This field
         *     will be ignored when inserting a TargetGrpcProxy. An up-to-date
         *     fingerprint must be provided in order to patch/update the
         *     TargetGrpcProxy; otherwise, the request will fail with error
         *     412 conditionNotMet. To see the latest fingerprint, make a get()
         *     request to retrieve the TargetGrpcProxy. A base64-encoded string. */
        fingerprint?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
        /** @description Server-defined URL with id for the resource. */
        selfLinkWithId?: string;
      };
    };
  };
}
