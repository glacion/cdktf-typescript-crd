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
    /** @description SriovOperatorConfig is the Schema for the sriovoperatorconfigs API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description SriovOperatorConfigSpec defines the desired state of SriovOperatorConfig */
      spec?: {
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
      /** @description SriovOperatorConfigStatus defines the observed state of SriovOperatorConfig */
      status?: {
        /** @description Show the runtime status of the network resource injector webhook */
        injector?: string;
        /** @description Show the runtime status of the operator admission controller webhook */
        operatorWebhook?: string;
      };
    };
  };
}
