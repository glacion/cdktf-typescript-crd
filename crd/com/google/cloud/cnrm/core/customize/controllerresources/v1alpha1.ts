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
  };
}
