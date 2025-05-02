import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesInstrumentationV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesInstrumentationV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesInstrumentationV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "opentelemetry.io/v1alpha1";
    kind?: "Instrumentation";
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
    spec?: {
      apacheHttpd?: {
        attrs?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        configPath?: string;
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        version?: string;
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      defaults?: {
        useLabelsForResourceAttributes?: boolean;
      };
      dotnet?: {
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      env?: {
        name: string;
        value?: string;
        valueFrom?: {
          configMapKeyRef?: {
            key: string;
            /** @default  */
            name: string;
            optional?: boolean;
          };
          fieldRef?: {
            apiVersion?: string;
            fieldPath: string;
          };
          resourceFieldRef?: {
            containerName?: string;
            divisor?: number | string;
            resource: string;
          };
          secretKeyRef?: {
            key: string;
            /** @default  */
            name: string;
            optional?: boolean;
          };
        };
      }[];
      exporter?: {
        endpoint?: string;
        tls?: {
          ca_file?: string;
          cert_file?: string;
          configMapName?: string;
          key_file?: string;
          secretName?: string;
        };
      };
      go?: {
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      imagePullPolicy?: string;
      java?: {
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        extensions?: {
          dir: string;
          image: string;
        }[];
        image?: string;
        resources?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      nginx?: {
        attrs?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        configFile?: string;
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      nodejs?: {
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      propagators?: ("tracecontext" | "baggage" | "b3" | "b3multi" | "jaeger" | "xray" | "ottrace" | "none")[];
      python?: {
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
            secretKeyRef?: {
              key: string;
              /** @default  */
              name: string;
              optional?: boolean;
            };
          };
        }[];
        image?: string;
        resourceRequirements?: {
          claims?: {
            name: string;
            request?: string;
          }[];
          limits?: {
            [key: string]: number | string;
          };
          requests?: {
            [key: string]: number | string;
          };
        };
        volumeClaimTemplate?: {
          metadata?: {
            annotations?: {
              [key: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [key: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
              namespace?: string;
            };
            resources?: {
              limits?: {
                [key: string]: number | string;
              };
              requests?: {
                [key: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            storageClassName?: string;
            volumeAttributesClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
        volumeLimitSize?: number | string;
      };
      resource?: {
        addK8sUIDAttributes?: boolean;
        resourceAttributes?: {
          [key: string]: string;
        };
      };
      sampler?: {
        argument?: string;
        type?: string;
      };
    };
    status?: Record<string, never>;
  };
}
