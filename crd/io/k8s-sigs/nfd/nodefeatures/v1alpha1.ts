import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNodeFeatureV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNodeFeatureV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "nfd.k8s-sigs.io/v1alpha1", kind: "NodeFeature", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesNodeFeatureV1alpha1Config extends ManifestConfig {
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
      /** @description Features is the full "raw" features data that has been discovered. */
      features?: {
        /** @description Attributes contains all the attribute-type features of the node. */
        attributes?: {
          [key: string]: {
            elements: {
              [key: string]: string;
            };
          };
        };
        /** @description Flags contains all the flag-type features of the node. */
        flags?: {
          [key: string]: {
            elements: {
              [key: string]: Record<string, never>;
            };
          };
        };
        /** @description Instances contains all the instance-type features of the node. */
        instances?: {
          [key: string]: {
            elements: {
              attributes: {
                [key: string]: string;
              };
            }[];
          };
        };
      };
      /** @description Labels is the set of node labels that are requested to be created. */
      labels?: {
        [key: string]: string;
      };
    };
  };
}
