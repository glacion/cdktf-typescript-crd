import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEgressNATPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesEgressNATPolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "EgressNATPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesEgressNATPolicyV1Config extends ManifestConfig {
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
    /** @description EgressNATPolicy is the Schema for the egressnatpolicies API. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description EgressNATPolicySpec defines the desired state of EgressNATPolicy. */
      spec?: {
        /** @description The action to apply to selected egress traffic.
         *
         *     Possible enum values:
         *      - `"NoSNAT"` indicates no SNAT for current egress NAT policy. The current behavior is that default SNATing may still apply. */
        action: string;
        /** @description Destinations represents the rules of destination IP filtering for the EgressNATPolicy. If the destination IP matches any one rule, it will be selected. */
        destinations: {
          /** @description One of the following should be set. Clients which observe no value here will ignore this rule. */
          cidr?: string;
        }[];
      };
      /** @description EgressNATPolicyStatus defines the observed state of EgressNATPolicy. */
      status?: Record<string, never>;
    };
  };
}
