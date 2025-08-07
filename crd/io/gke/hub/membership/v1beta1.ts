import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class HubGkeIoMembershipV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: HubGkeIoMembershipV1beta1Config) {
    super(scope, id, config);
  }
}
export interface HubGkeIoMembershipV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "hub.gke.io/v1beta1";
    kind: "Membership";
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
