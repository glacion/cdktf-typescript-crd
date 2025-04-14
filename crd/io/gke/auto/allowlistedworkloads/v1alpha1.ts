import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAllowlistedWorkloadV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAllowlistedWorkloadV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "auto.gke.io/v1alpha1", kind: "AllowlistedWorkload", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAllowlistedWorkloadV1alpha1Config extends ManifestConfig {
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
    spec: {
      spec?: {
        containers?: {
          args?: string[];
          command?: string[];
          exemptions?: {
            constraintName?: string;
            constraintParameters?: Record<string, never>;
          }[];
          image?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
              };
            };
            preStop?: {
              exec?: {
                command?: string[];
              };
            };
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
            };
          };
          readinessProbe?: {
            exec?: {
              command?: string[];
            };
          };
          startupProbe?: {
            exec?: {
              command?: string[];
            };
          };
        }[];
      };
    };
  };
}
