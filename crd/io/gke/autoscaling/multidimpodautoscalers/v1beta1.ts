import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMultidimPodAutoscalerV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesMultidimPodAutoscalerV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "autoscaling.gke.io/v1beta1", kind: "MultidimPodAutoscaler", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesMultidimPodAutoscalerV1beta1Config extends ManifestConfig {
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
  };
}
