import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProvisioningRequestConfigV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesProvisioningRequestConfigV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "ProvisioningRequestConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesProvisioningRequestConfigV1beta1Config extends ManifestConfig {
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
      /** @description managedResources contains the list of resources managed by the autoscaling.
       *
       *     If empty, all resources are considered managed.
       *
       *     If not empty, the ProvisioningRequest will contain only the podsets that are
       *     requesting at least one of them.
       *
       *     If none of the workloads podsets is requesting at least a managed resource,
       *     the workload is considered ready. */
      managedResources?: string[];
      /** @description Parameters contains all other parameters classes may require. */
      parameters?: {
        [key: string]: string;
      };
      /** @description ProvisioningClassName describes the different modes of provisioning the resources.
       *     Check autoscaling.x-k8s.io ProvisioningRequestSpec.ProvisioningClassName for details. */
      provisioningClassName: string;
      /** @description retryStrategy defines strategy for retrying ProvisioningRequest.
       *     If null, then the default configuration is applied with the following parameter values:
       *     backoffLimitCount:  3
       *     backoffBaseSeconds: 60 - 1 min
       *     backoffMaxSeconds:  1800 - 30 mins
       *
       *     To switch off retry mechanism
       *     set retryStrategy.backoffLimitCount to 0. */
      retryStrategy?: {
        /**
         * Format: int32
         * @description BackoffBaseSeconds defines the base for the exponential backoff for
         *     re-queuing an evicted workload.
         *
         *     Defaults to 60.
         */
        backoffBaseSeconds?: number;
        /**
         * Format: int32
         * @description BackoffLimitCount defines the maximum number of re-queuing retries.
         *     Once the number is reached, the workload is deactivated (`.spec.activate`=`false`).
         *
         *     Every backoff duration is about "b*2^(n-1)+Rand" where:
         *     - "b" represents the base set by "BackoffBaseSeconds" parameter,
         *     - "n" represents the "workloadStatus.requeueState.count",
         *     - "Rand" represents the random jitter.
         *     During this time, the workload is taken as an inadmissible and
         *     other workloads will have a chance to be admitted.
         *     By default, the consecutive requeue delays are around: (60s, 120s, 240s, ...).
         *
         *     Defaults to 3.
         */
        backoffLimitCount?: number;
        /**
         * Format: int32
         * @description BackoffMaxSeconds defines the maximum backoff time to re-queue an evicted workload.
         *
         *     Defaults to 1800.
         */
        backoffMaxSeconds?: number;
      };
    };
  };
}
