import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNamespacedControllerResourceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesNamespacedControllerResourceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesNamespacedControllerResourceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "customize.core.cnrm.cloud.google.com/v1beta1";
    kind?: "NamespacedControllerResource";
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
    /** @description NamespacedControllerResourceSpec is the specification of the resource customization for containers of
     *     a namespaced config connector controller. */
    spec: {
      /** @description The list of containers whose resource requirements to be customized.
       *     Required */
      containers: {
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
    };
    /** @description NamespacedControllerResourceStatus defines the observed state of NamespacedControllerResource. */
    status?: {
      errors?: string[];
      healthy: boolean;
      phase?: string;
    };
  };
}
