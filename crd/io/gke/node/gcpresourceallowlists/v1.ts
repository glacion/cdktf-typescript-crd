import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPResourceAllowlistV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCPResourceAllowlistV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "node.gke.io/v1", kind: "GCPResourceAllowlist", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCPResourceAllowlistV1Config extends ManifestConfig {
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
    /** @description GCPResourceAllowlist is the Schema for the gcpresourceallowlists API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description GCPResourceAllowlistSpec defines the desired state of GCPResourceAllowlist */
      spec?: {
        allowedResourcePatterns: string[];
      };
      /** @description GCPResourceAllowlistStatus defines the observed state of GCPResourceAllowlist */
      status?: Record<string, never>;
    };
  };
}
