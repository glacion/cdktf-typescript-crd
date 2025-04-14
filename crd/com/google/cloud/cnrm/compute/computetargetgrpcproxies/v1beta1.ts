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
  };
}
