import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkLoggingV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesNetworkLoggingV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesNetworkLoggingV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1alpha1";
    kind?: "NetworkLogging";
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
    /** @description Spec is the desired configuration for network logging. */
    spec?: {
      /** @description Cluster specifies the log options for cluster-level network logging. */
      cluster?: {
        /** @description Allow specifies the log action for policy-allowed connections. */
        allow?: {
          /** @description Delegate can only be true if Log is true. Log:false, Delegate:true is invalid. If Delegate is true, logging will be controlled by the annotation of matching network policies. */
          delegate?: boolean;
          /** @description Log specifies if logging is enabled or not. The default value is false. */
          log?: boolean;
        };
        /** @description Deny specifies the log action for policy-denied connections. */
        deny?: {
          /** @description Delegate can only be true if Log is true. Log:false, Delegate:true is invalid. If Delegate is true, logging will be controlled by the annotation of the pod's namespace. */
          delegate?: boolean;
          /** @description Log specifies if logging is enabled or not. The default value is false. */
          log?: boolean;
        };
      };
    };
  };
}
