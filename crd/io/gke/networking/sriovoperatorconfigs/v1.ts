import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSriovOperatorConfigV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSriovOperatorConfigV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "SriovOperatorConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSriovOperatorConfigV1Config extends ManifestConfig {
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
      /** @description NodeSelector selects the nodes to be configured */
      configDaemonNodeSelector?: {
        [key: string]: string;
      };
      /** @description Flag to disable nodes drain during debugging */
      disableDrain?: boolean;
      /** @description Flag to control whether the network resource injector webhook shall be deployed */
      enableInjector?: boolean;
      /** @description Flag to control whether the operator admission controller webhook shall be deployed */
      enableOperatorWebhook?: boolean;
      /** @description Flag to enable OVS hardware offload. Set to 'true' to provision switchdev-configuration.service and enable OpenvSwitch hw-offload on nodes. */
      enableOvsOffload?: boolean;
      /** @description Flag to control the log verbose level of the operator. Set to '0' to show only the basic logs. And set to '2' to show all the available logs. */
      logLevel?: number;
    };
  };
}
