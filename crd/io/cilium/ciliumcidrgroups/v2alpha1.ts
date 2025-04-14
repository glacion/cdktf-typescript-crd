import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumCIDRGroupV2alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCiliumCIDRGroupV2alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cilium.io/v2alpha1", kind: "CiliumCIDRGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCiliumCIDRGroupV2alpha1Config extends ManifestConfig {
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
    /** @description CiliumCIDRGroup is a list of external CIDRs (i.e: CIDRs selecting peers outside the clusters) that can be referenced as a single entity from CiliumNetworkPolicies. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description ExternalCIDRs is a list of CIDRs selecting peers outside the clusters. */
        externalCIDRs: string[];
      };
    };
  };
}
