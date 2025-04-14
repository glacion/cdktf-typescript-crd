import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPodLogsV1alpha2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesPodLogsV1alpha2Config) {
    super(scope, id, {
      manifest: { apiVersion: "monitoring.grafana.com/v1alpha2", kind: "PodLogs", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesPodLogsV1alpha2Config extends ManifestConfig {
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
    /** @description PodLogs defines how to collect logs for a Pod. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description PodLogsSpec defines how to collect logs for a Pod. */
      spec?: {
        /** @description Selector to select which namespaces the Pod objects are discovered from. */
        namespaceSelector?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
        /** @description RelabelConfigs to apply to logs before delivering. */
        relabelings?: {
          /**
           * @description Action to perform based on regex matching. Default is 'replace'. uppercase and lowercase actions require Prometheus >= 2.36.
           * @default replace
           * @enum {string}
           */
          action:
            | "replace"
            | "Replace"
            | "keep"
            | "Keep"
            | "drop"
            | "Drop"
            | "hashmod"
            | "HashMod"
            | "labelmap"
            | "LabelMap"
            | "labeldrop"
            | "LabelDrop"
            | "labelkeep"
            | "LabelKeep"
            | "lowercase"
            | "Lowercase"
            | "uppercase"
            | "Uppercase";
          /**
           * Format: int64
           * @description Modulus to take of the hash of the source label values.
           */
          modulus?: number;
          /** @description Regular expression against which the extracted value is matched. Default is '(.*)' */
          regex?: string;
          /** @description Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1' */
          replacement?: string;
          /** @description Separator placed between concatenated source label values. default is ';'. */
          separator?: string;
          /** @description The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions. */
          sourceLabels?: string[];
          /** @description Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available. */
          targetLabel?: string;
        }[];
        /** @description Selector to select Pod objects. Required. */
        selector: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
      };
    };
  };
}
