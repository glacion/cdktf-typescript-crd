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
  };
}
