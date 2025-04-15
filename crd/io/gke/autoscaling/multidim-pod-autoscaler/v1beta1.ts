import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultidimPodAutoscalerV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMultidimPodAutoscalerV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMultidimPodAutoscalerV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "autoscaling.gke.io/v1beta1";
    kind: "MultidimPodAutoscaler";
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
      constraints: {
        container?: {
          name?: string;
          requests?: {
            maxAllowed?: Record<string, never>;
            minAllowed?: Record<string, never>;
          };
        }[];
        containerControlledResources: "memory"[];
        global?: {
          maxReplicas?: number;
          minReplicas?: number;
          requests?: {
            maxAllowed?: Record<string, never>;
            minAllowed?: Record<string, never>;
          };
        };
        pod?: {
          requests?: {
            maxAllowed?: Record<string, never>;
            minAllowed?: Record<string, never>;
          };
        };
      };
      goals: {
        metrics: {
          resource: {
            /** @enum {string} */
            name: "cpu";
            target: {
              averageUtilization?: number;
              averageValue?: unknown;
              /** @enum {string} */
              type?: "Utilization" | "Value" | "AverageValue";
              value?: unknown;
            };
          };
          /** @enum {string} */
          type: "Resource";
        }[];
      };
      policy?: {
        updateMode?: string;
      };
      scaleTargetRef: {
        apiVersion?: string;
        kind?: string;
        name?: string;
      };
    };
    status?: Record<string, never>;
  };
}
