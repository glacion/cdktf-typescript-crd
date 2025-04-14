import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVerticalPodAutoscalerV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVerticalPodAutoscalerV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "autoscaling.k8s.io/v1", kind: "VerticalPodAutoscaler", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVerticalPodAutoscalerV1Config extends ManifestConfig {
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
      /** @description Recommender responsible for generating recommendation for this object. List should be empty (then the default recommender will generate the recommendation) or contain exactly one recommender. */
      recommenders?: {
        /** @description Name of the recommender responsible for generating recommendation for this object. */
        name: string;
      }[];
      /** @description Controls how the autoscaler computes recommended resources. The resource policy may be used to set constraints on the recommendations for individual containers. If not specified, the autoscaler computes recommended resources for all containers in the pod, without additional constraints. */
      resourcePolicy?: {
        /** @description Per-container resource policies. */
        containerPolicies?: {
          /** @description Name of the container or DefaultContainerResourcePolicy, in which case the policy is used by the containers that don't have their own policy specified. */
          containerName?: string;
          /** @description Specifies the type of recommendations that will be computed (and possibly applied) by VPA. If not specified, the default of [ResourceCPU, ResourceMemory] will be used. */
          controlledResources?: string[];
          /**
           * @description Specifies which resource values should be controlled. The default is "RequestsAndLimits".
           * @enum {string}
           */
          controlledValues?: "RequestsAndLimits" | "RequestsOnly";
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
        /**
         * Format: int32
         * @description Minimal number of replicas which need to be alive for Updater to attempt pod eviction (pending other checks like PDB). Only positive values are allowed. Overrides global '--min-replicas' flag.
         */
        minReplicas?: number;
        /** @description Controls when autoscaler applies changes to the pod resources. The default is 'Auto'. */
        updateMode?: string;
      };
    };
  };
}
