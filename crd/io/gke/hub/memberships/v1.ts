import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMembershipV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMembershipV1Config) {
    super(scope, id, { manifest: { apiVersion: "hub.gke.io/v1", kind: "Membership", ...manifest }, ...config });
  }
}
export interface KubernetesMembershipV1Config extends ManifestConfig {
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
    spec: {
      metadata?: {
        name?: string;
      };
      spec: {
        /** @description Name of the Identity Provider corresponding to this Membership. This is useful for workloads running in this cluster to use Workload Identity. */
        identity_provider?: string;
        owner?: {
          /** @description Fully qualified name of the GCP resource that owns the cluster. Should be immutable. */
          id?: string;
        };
        /** @description Name of the Identity Provider for Scope-Tenancy  corresponding to this Membership. This is useful for workloads running in this cluster to use Workload Identity. */
        scope_tenancy_identity_provider?: string;
        /** @description Name of the Workload Identity Pool for Scope-Tenancy that this Membership is part of. This is useful for workloads running in this cluster to use Workload Identity. */
        scope_tenancy_workload_identity_pool?: string;
        /** @description Name of the Workload Identity Pool that this Membership is part of. This will be of the form proj-id.svc.id.goog. This is useful for workloads running in this cluster to use Workload Identity. */
        workload_identity_pool?: string;
      };
    };
  };
}
