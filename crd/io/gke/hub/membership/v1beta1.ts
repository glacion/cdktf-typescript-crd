import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMembershipV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMembershipV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMembershipV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "hub.gke.io/v1beta1";
    kind?: "Membership";
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
  };
}
