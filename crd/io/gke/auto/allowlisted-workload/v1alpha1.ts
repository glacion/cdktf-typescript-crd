import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAllowlistedWorkloadV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAllowlistedWorkloadV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAllowlistedWorkloadV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "auto.gke.io/v1alpha1";
    kind: "AllowlistedWorkload";
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
}
