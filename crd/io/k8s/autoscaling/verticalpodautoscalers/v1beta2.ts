import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVerticalPodAutoscalerV1beta2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVerticalPodAutoscalerV1beta2Config) {
    super(scope, id, {
      manifest: { apiVersion: "autoscaling.k8s.io/v1beta2", kind: "VerticalPodAutoscaler", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVerticalPodAutoscalerV1beta2Config extends ManifestConfig {
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
      /** @description Controls how the autoscaler computes recommended resources. The resource policy may be used to set constraints on the recommendations for individual containers. If not specified, the autoscaler computes recommended resources for all containers in the pod, without additional constraints. */
      resourcePolicy?: {
        /** @description Per-container resource policies. */
        containerPolicies?: {
          /** @description Name of the container or DefaultContainerResourcePolicy, in which case the policy is used by the containers that don't have their own policy specified. */
          containerName?: string;
          /** @description Specifies the maximum amount of resources that will be recommended for the container. The default is no maximum. */
          maxAllowed?: {
            [key: string]: number | string;
          };
          /** @description Specifies the minimal amount of resources that will be recommended for the container. The default is no minimum. */
          minAllowed?: {
            [key: string]: number | string;
          };
          /**
           * @description Whether autoscaler is enabled for the container. The default is "Auto".
           * @enum {string}
           */
          mode?: "Auto" | "Off";
        }[];
      };
      /** @description TargetRef points to the controller managing the set of pods for the autoscaler to control - e.g. Deployment, StatefulSet. VerticalPodAutoscaler can be targeted at controller implementing scale subresource (the pod set is retrieved from the controller's ScaleStatus) or some well known controllers (e.g. for DaemonSet the pod set is read from the controller's spec). If VerticalPodAutoscaler cannot use specified target it will report ConfigUnsupported condition. Note that VerticalPodAutoscaler does not require full implementation of scale subresource - it will not use it to modify the replica count. The only thing retrieved is a label selector matching pods grouped by the target resource. */
      targetRef: {
        /** @description API version of the referent */
        apiVersion?: string;
        /** @description Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
        kind: string;
        /** @description Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
        name: string;
      };
      /** @description Describes the rules on how changes are applied to the pods. If not specified, all fields in the `PodUpdatePolicy` are set to their default values. */
      updatePolicy?: {
        /** @description Controls when autoscaler applies changes to the pod resources. The default is 'Auto'. */
        updateMode?: string;
      };
    };
  };
}
