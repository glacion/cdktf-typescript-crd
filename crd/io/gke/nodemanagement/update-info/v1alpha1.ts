import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NodemanagementGkeIoUpdateInfoV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: NodemanagementGkeIoUpdateInfoV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface NodemanagementGkeIoUpdateInfoV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "nodemanagement.gke.io/v1alpha1";
    kind: "UpdateInfo";
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
      Type?: string;
      instanceGroupUrl?: string;
      surgeNode?: string;
      targetNode?: string;
      /** Format: date-time */
      validUntil?: string;
    };
  };
}
