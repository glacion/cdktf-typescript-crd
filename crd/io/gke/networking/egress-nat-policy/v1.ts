import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoEgressNATPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoEgressNATPolicyV1Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoEgressNATPolicyV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "EgressNATPolicy";
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
}
