import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadPriorityClassV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWorkloadPriorityClassV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "WorkloadPriorityClass", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesWorkloadPriorityClassV1beta1Config extends ManifestConfig {
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
    /** @description WorkloadPriorityClass is the Schema for the workloadPriorityClass API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description description is an arbitrary string that usually provides guidelines on
       *     when this workloadPriorityClass should be used. */
      description?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /**
       * Format: int32
       * @description value represents the integer value of this workloadPriorityClass. This is the actual priority that workloads
       *     receive when jobs have the name of this class in their workloadPriorityClass label.
       *     Changing the value of workloadPriorityClass doesn't affect the priority of workloads that were already created.
       */
      value: number;
    };
  };
}
