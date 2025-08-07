import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CustomizeCoreCnrmCloudGoogleComControllerReconcilerV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: CustomizeCoreCnrmCloudGoogleComControllerReconcilerV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface CustomizeCoreCnrmCloudGoogleComControllerReconcilerV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "customize.core.cnrm.cloud.google.com/v1alpha1";
    kind: "ControllerReconciler";
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
    /** @description ControllerReconcilerSpec is the specification of ControllerReconciler. */
    spec: {
      /** @description Configures the debug endpoint on the service. */
      pprof?: {
        /** @description The port that the pprof server binds to if enabled */
        port?: number;
        /** @description Control if pprof should be turned on and which types should be enabled. */
        support?: string;
      };
      /** @description RateLimit configures the token bucket rate limit to the kubernetes client used
       *     by the manager container of the config connector controller manager in cluster mode.
       *     Please note this rate limit is shared among all the Config Connector resources' requests.
       *     If not specified, the default will be Token Bucket with qps 20, burst 30. */
      rateLimit?: {
        /** @description The burst of the token bucket rate limit for all the requests to the kubernetes client. */
        burst?: number;
        /** @description The QPS of the token bucket rate limit for all the requests to the kubernetes client. */
        qps?: number;
      };
    };
    /** @description ControllerReconcilerStatus defines the observed state of ControllerReconciler. */
    status?: {
      errors?: string[];
      healthy: boolean;
      phase?: string;
    };
  };
}
