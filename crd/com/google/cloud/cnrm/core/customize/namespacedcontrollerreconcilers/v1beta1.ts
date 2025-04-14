import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNamespacedControllerReconcilerV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesNamespacedControllerReconcilerV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "customize.core.cnrm.cloud.google.com/v1beta1",
        kind: "NamespacedControllerReconciler",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNamespacedControllerReconcilerV1beta1Config extends ManifestConfig {
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
      /** @description Configures the debug endpoint on the service. */
      pprof?: {
        /** @description The port that the pprof server binds to if enabled */
        port?: number;
        /** @description Control if pprof should be turned on and which types should be enabled. */
        support?: string;
      };
      /** @description RateLimit configures the token bucket rate limit to the kubernetes client used
       *     by the manager container of the config connector namespaced controller manager.
       *     Please note this rate limit is shared among all the Config Connector resources' requests.
       *     If not specified, the default will be Token Bucket with qps 20, burst 30. */
      rateLimit?: {
        /** @description The burst of the token bucket rate limit for all the requests to the kubernetes client. */
        burst?: number;
        /** @description The QPS of the token bucket rate limit for all the requests to the kubernetes client. */
        qps?: number;
      };
    };
  };
}
