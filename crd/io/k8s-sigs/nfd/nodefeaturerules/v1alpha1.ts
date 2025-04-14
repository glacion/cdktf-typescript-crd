import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNodeFeatureRuleV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNodeFeatureRuleV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "nfd.k8s-sigs.io/v1alpha1", kind: "NodeFeatureRule", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesNodeFeatureRuleV1alpha1Config extends ManifestConfig {
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
    /** @description NodeFeatureRule resource specifies a configuration for feature-based customization of node objects, such as node labeling. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description NodeFeatureRuleSpec describes a NodeFeatureRule. */
      spec: {
        /** @description Rules is a list of node customization rules. */
        rules: {
          /** @description ExtendedResources to create if the rule matches. */
          extendedResources?: {
            [key: string]: string;
          };
          /** @description Labels to create if the rule matches. */
          labels?: {
            [key: string]: string;
          };
          /** @description LabelsTemplate specifies a template to expand for dynamically generating multiple labels. Data (after template expansion) must be keys with an optional value (<key>[=<value>]) separated by newlines. */
          labelsTemplate?: string;
          /** @description MatchAny specifies a list of matchers one of which must match. */
          matchAny?: {
            /** @description MatchFeatures specifies a set of matcher terms all of which must match. */
            matchFeatures: {
              feature: string;
              /** @description MatchExpressionSet contains a set of MatchExpressions, each of which is evaluated against a set of input values. */
              matchExpressions: {
                [key: string]: {
                  /**
                   * @description Op is the operator to be applied.
                   * @enum {string}
                   */
                  op:
                    | "In"
                    | "NotIn"
                    | "InRegexp"
                    | "Exists"
                    | "DoesNotExist"
                    | "Gt"
                    | "Lt"
                    | "GtLt"
                    | "IsTrue"
                    | "IsFalse";
                  /** @description Value is the list of values that the operand evaluates the input against. Value should be empty if the operator is Exists, DoesNotExist, IsTrue or IsFalse. Value should contain exactly one element if the operator is Gt or Lt and exactly two elements if the operator is GtLt. In other cases Value should contain at least one element. */
                  value?: string[];
                };
              };
            }[];
          }[];
          /** @description MatchFeatures specifies a set of matcher terms all of which must match. */
          matchFeatures?: {
            feature: string;
            /** @description MatchExpressionSet contains a set of MatchExpressions, each of which is evaluated against a set of input values. */
            matchExpressions: {
              [key: string]: {
                /**
                 * @description Op is the operator to be applied.
                 * @enum {string}
                 */
                op:
                  | "In"
                  | "NotIn"
                  | "InRegexp"
                  | "Exists"
                  | "DoesNotExist"
                  | "Gt"
                  | "Lt"
                  | "GtLt"
                  | "IsTrue"
                  | "IsFalse";
                /** @description Value is the list of values that the operand evaluates the input against. Value should be empty if the operator is Exists, DoesNotExist, IsTrue or IsFalse. Value should contain exactly one element if the operator is Gt or Lt and exactly two elements if the operator is GtLt. In other cases Value should contain at least one element. */
                value?: string[];
              };
            };
          }[];
          /** @description Name of the rule. */
          name: string;
          /** @description Taints to create if the rule matches. */
          taints?: {
            /** @description Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute. */
            effect: string;
            /** @description Required. The taint key to be applied to a node. */
            key: string;
            /**
             * Format: date-time
             * @description TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
             */
            timeAdded?: string;
            /** @description The taint value corresponding to the taint key. */
            value?: string;
          }[];
          /** @description Vars is the variables to store if the rule matches. Variables do not directly inflict any changes in the node object. However, they can be referenced from other rules enabling more complex rule hierarchies, without exposing intermediary output values as labels. */
          vars?: {
            [key: string]: string;
          };
          /** @description VarsTemplate specifies a template to expand for dynamically generating multiple variables. Data (after template expansion) must be keys with an optional value (<key>[=<value>]) separated by newlines. */
          varsTemplate?: string;
        }[];
      };
    };
  };
}
