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
    /** @description Entitlement is a CR representing that Anthos software may be run on a particular cluster. This is written to Anthos-enabled clusters by a Hub controller. This is read by in-cluster Anthos services performing Entitlement checks. */
    spec: {
      apiVersion?: string;
      kind?: string;
      metadata: Record<string, never>;
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
  };
}
