import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class AnthosGkeIoEntitlementV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: AnthosGkeIoEntitlementV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface AnthosGkeIoEntitlementV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "anthos.gke.io/v1alpha1";
    kind: "Entitlement";
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
    spec?: {
      /**
       * Format: date-time
       * @description ExpirationTimestamp is when this Entitlement expires. An RFC3339 date/time.
       */
      expirationTimestamp?: string;
      /** @description MembershipName is the full name of the Membership represented by this entitlement. */
      membershipName?: string;
    };
  };
}
