import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEntitlementV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesEntitlementV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesEntitlementV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "anthos.gke.io/v1alpha1";
    kind?: "Entitlement";
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
