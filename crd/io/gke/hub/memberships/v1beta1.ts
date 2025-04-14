import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMembershipV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMembershipV1beta1Config) {
    super(scope, id, { manifest: { apiVersion: "hub.gke.io/v1beta1", kind: "Membership", ...manifest }, ...config });
  }
}
export interface KubernetesMembershipV1beta1Config extends ManifestConfig {
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
    spec: Record<string, never>;
  };
}
