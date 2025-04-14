import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEntitlementV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesEntitlementV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "anthos.gke.io/v1alpha1", kind: "Entitlement", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesEntitlementV1alpha1Config extends ManifestConfig {
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
