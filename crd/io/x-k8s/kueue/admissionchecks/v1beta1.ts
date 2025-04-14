import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAdmissionCheckV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAdmissionCheckV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "AdmissionCheck", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAdmissionCheckV1beta1Config extends ManifestConfig {
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
      /** @description controllerName identifies the controller that processes the AdmissionCheck,
       *     not necessarily a Kubernetes Pod or Deployment name. Cannot be empty. */
      controllerName: string;
      /** @description Parameters identifies a configuration with additional parameters for the
       *     check. */
      parameters?: {
        /** @description ApiGroup is the group for the resource being referenced. */
        apiGroup: string;
        /** @description Kind is the type of the resource being referenced. */
        kind: string;
        /** @description Name is the name of the resource being referenced. */
        name: string;
      };
      /**
       * Format: int64
       * @description RetryDelayMinutes specifies how long to keep the workload suspended after
       *     a failed check (after it transitioned to False). When the delay period has passed, the check
       *     state goes to "Unknown". The default is 15 min.
       *     Deprecated: retryDelayMinutes has already been deprecated since v0.8 and will be removed in v1beta2.
       */
      retryDelayMinutes?: number;
    };
  };
}
