import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesControllerResourceV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesControllerResourceV1alpha1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "customize.core.cnrm.cloud.google.com/v1alpha1",
        kind: "ControllerResource",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesControllerResourceV1alpha1Config extends ManifestConfig {
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
    /** @description ControllerResource is the Schema for resource customization API for config connector controllers. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: {
        name?: string;
      };
      /** @description ControllerResourceSpec is the specification of the resource customization for containers of
       *     a config connector controller. */
      spec:
        | {
            /** @description The list of containers whose resource requirements to be customized. */
            containers?: {
              /**
               * @description The name of the container whose resource requirements will be customized.
               *     Required
               * @enum {string}
               */
              name: "deletiondefender" | "manager" | "prom-to-sd" | "recorder" | "unmanageddetector" | "webhook";
              /** @description Resources specifies the resource customization of this container.
               *     Required */
              resources: {
                /** @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                limits?: {
                  [key: string]: number | string;
                };
                /** @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
                requests?: {
                  [key: string]: number | string;
                };
              };
            }[];
            /**
             * Format: int64
             * @description The number of desired replicas of the config connector controller.
             *     This field takes effect only if the controller name is "cnrm-webhook-manager".
             */
            replicas?: number;
          }
        | unknown
        | unknown;
      /** @description ControllerResourceStatus defines the observed state of ControllerResource. */
      status?: {
        errors?: string[];
        healthy: boolean;
        phase?: string;
      };
    };
  };
}
