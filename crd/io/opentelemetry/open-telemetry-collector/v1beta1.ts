import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOpenTelemetryCollectorV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesOpenTelemetryCollectorV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesOpenTelemetryCollectorV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "opentelemetry.io/v1beta1";
    kind?: "OpenTelemetryCollector";
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
      additionalContainers?: {
        args?: string[];
        command?: string[];
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
        envFrom?: {
          configMapRef?: {
            /** @default  */
            name: string;
            optional?: boolean;
          };
          prefix?: string;
          secretRef?: {
            /** @default  */
            name: string;
            optional?: boolean;
          };
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
            };
            sleep?: {
              /** Format: int64 */
              seconds: number;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
            };
          };
          preStop?: {
            exec?: {
              command?: string[];
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
            };
            sleep?: {
              /** Format: int64 */
              seconds: number;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
            };
          };
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        name: string;
        ports?: {
          /** Format: int32 */
          containerPort: number;
          hostIP?: string;
          /** Format: int32 */
          hostPort?: number;
          name?: string;
          /** @default TCP */
          protocol: string;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
        }[];
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
        restartPolicy?: string;
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          /** Format: int64 */
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          /** Format: int64 */
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
          };
        };
        startupProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
        }[];
        workingDir?: string;
      }[];
      affinity?: {
        nodeAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            preference: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            };
            /** Format: int32 */
            weight: number;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        podAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey: string;
            };
            /** Format: int32 */
            weight: number;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            namespaces?: string[];
            topologyKey: string;
          }[];
        };
        podAntiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey: string;
            };
            /** Format: int32 */
            weight: number;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [key: string]: string;
              };
            };
            namespaces?: string[];
            topologyKey: string;
          }[];
        };
      };
      args?: {
        [key: string]: string;
      };
      autoscaler?: {
        behavior?: {
          scaleDown?: {
            policies?: {
              /** Format: int32 */
              periodSeconds: number;
              type: string;
              /** Format: int32 */
              value: number;
            }[];
            selectPolicy?: string;
            /** Format: int32 */
            stabilizationWindowSeconds?: number;
          };
          scaleUp?: {
            policies?: {
              /** Format: int32 */
              periodSeconds: number;
              type: string;
              /** Format: int32 */
              value: number;
            }[];
            selectPolicy?: string;
            /** Format: int32 */
            stabilizationWindowSeconds?: number;
          };
        };
        /** Format: int32 */
        maxReplicas?: number;
        metrics?: {
          pods?: {
            metric: {
              name: string;
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
            };
            target: {
              /** Format: int32 */
              averageUtilization?: number;
              averageValue?: number | string;
              type: string;
              value?: number | string;
            };
          };
          type: string;
        }[];
        /** Format: int32 */
        minReplicas?: number;
        /** Format: int32 */
        targetCPUUtilization?: number;
        /** Format: int32 */
        targetMemoryUtilization?: number;
      };
      config: {
        connectors?: Record<string, never>;
        exporters: Record<string, never>;
        extensions?: Record<string, never>;
        processors?: Record<string, never>;
        receivers: Record<string, never>;
        service: {
          extensions?: string[];
          pipelines: {
            [key: string]: {
              exporters: string[];
              processors?: string[];
              receivers: string[];
            };
          };
          telemetry?: Record<string, never>;
        };
      };
      configVersions?: number;
      configmaps?: {
        mountpath: string;
        name: string;
      }[];
      daemonSetUpdateStrategy?: {
        rollingUpdate?: {
          maxSurge?: number | string;
          maxUnavailable?: number | string;
        };
        type?: string;
      };
      deploymentUpdateStrategy?: {
        rollingUpdate?: {
          maxSurge?: number | string;
          maxUnavailable?: number | string;
        };
        type?: string;
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
      envFrom?: {
        configMapRef?: {
          /** @default  */
          name: string;
          optional?: boolean;
        };
        prefix?: string;
        secretRef?: {
          /** @default  */
          name: string;
          optional?: boolean;
        };
      }[];
      hostNetwork?: boolean;
      image?: string;
      imagePullPolicy?: string;
      ingress?: {
        annotations?: {
          [key: string]: string;
        };
        hostname?: string;
        ingressClassName?: string;
        route?: {
          termination?: string;
        };
        ruleType?: string;
        tls?: {
          hosts?: string[];
          secretName?: string;
        }[];
        type?: string;
      };
      initContainers?: {
        args?: string[];
        command?: string[];
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
        envFrom?: {
          configMapRef?: {
            /** @default  */
            name: string;
            optional?: boolean;
          };
          prefix?: string;
          secretRef?: {
            /** @default  */
            name: string;
            optional?: boolean;
          };
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
            };
            sleep?: {
              /** Format: int64 */
              seconds: number;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
            };
          };
          preStop?: {
            exec?: {
              command?: string[];
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
            };
            sleep?: {
              /** Format: int64 */
              seconds: number;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
            };
          };
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        name: string;
        ports?: {
          /** Format: int32 */
          containerPort: number;
          hostIP?: string;
          /** Format: int32 */
          hostPort?: number;
          name?: string;
          /** @default TCP */
          protocol: string;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
        }[];
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
        restartPolicy?: string;
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          /** Format: int64 */
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          /** Format: int64 */
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
          };
        };
        startupProbe?: {
          exec?: {
            command?: string[];
          };
          /** Format: int32 */
          failureThreshold?: number;
          grpc?: {
            /** Format: int32 */
            port: number;
            /** @default  */
            service: string;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          /** Format: int32 */
          initialDelaySeconds?: number;
          /** Format: int32 */
          periodSeconds?: number;
          /** Format: int32 */
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
          /** Format: int64 */
          terminationGracePeriodSeconds?: number;
          /** Format: int32 */
          timeoutSeconds?: number;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
        }[];
        workingDir?: string;
      }[];
      ipFamilies?: string[];
      ipFamilyPolicy?: string;
      lifecycle?: {
        postStart?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          sleep?: {
            /** Format: int64 */
            seconds: number;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
        preStop?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          sleep?: {
            /** Format: int64 */
            seconds: number;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
      };
      livenessProbe?: {
        /** Format: int32 */
        failureThreshold?: number;
        /** Format: int32 */
        initialDelaySeconds?: number;
        /** Format: int32 */
        periodSeconds?: number;
        /** Format: int32 */
        successThreshold?: number;
        /** Format: int64 */
        terminationGracePeriodSeconds?: number;
        /** Format: int32 */
        timeoutSeconds?: number;
      };
      managementState: string;
      mode?: string;
      nodeSelector?: {
        [key: string]: string;
      };
      observability?: {
        metrics?: {
          disablePrometheusAnnotations?: boolean;
          enableMetrics?: boolean;
        };
      };
      persistentVolumeClaimRetentionPolicy?: {
        whenDeleted?: string;
        whenScaled?: string;
      };
      podAnnotations?: {
        [key: string]: string;
      };
      podDisruptionBudget?: {
        maxUnavailable?: number | string;
        minAvailable?: number | string;
      };
      podDnsConfig?: {
        nameservers?: string[];
        options?: {
          name?: string;
          value?: string;
        }[];
        searches?: string[];
      };
      podSecurityContext?: {
        appArmorProfile?: {
          localhostProfile?: string;
          type: string;
        };
        /** Format: int64 */
        fsGroup?: number;
        fsGroupChangePolicy?: string;
        /** Format: int64 */
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        /** Format: int64 */
        runAsUser?: number;
        seLinuxChangePolicy?: string;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
        };
        supplementalGroups?: number[];
        supplementalGroupsPolicy?: string;
        sysctls?: {
          name: string;
          value: string;
        }[];
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
        };
      };
      ports?: {
        appProtocol?: string;
        /** Format: int32 */
        hostPort?: number;
        name?: string;
        /** Format: int32 */
        nodePort?: number;
        /** Format: int32 */
        port: number;
        /** @default TCP */
        protocol: string;
        targetPort?: number | string;
      }[];
      priorityClassName?: string;
      readinessProbe?: {
        /** Format: int32 */
        failureThreshold?: number;
        /** Format: int32 */
        initialDelaySeconds?: number;
        /** Format: int32 */
        periodSeconds?: number;
        /** Format: int32 */
        successThreshold?: number;
        /** Format: int64 */
        terminationGracePeriodSeconds?: number;
        /** Format: int32 */
        timeoutSeconds?: number;
      };
      /** Format: int32 */
      replicas?: number;
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
      securityContext?: {
        allowPrivilegeEscalation?: boolean;
        appArmorProfile?: {
          localhostProfile?: string;
          type: string;
        };
        capabilities?: {
          add?: string[];
          drop?: string[];
        };
        privileged?: boolean;
        procMount?: string;
        readOnlyRootFilesystem?: boolean;
        /** Format: int64 */
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        /** Format: int64 */
        runAsUser?: number;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
        };
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
        };
      };
      serviceAccount?: string;
      shareProcessNamespace?: boolean;
      targetAllocator?: {
        affinity?: {
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              preference: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
              };
              /** Format: int32 */
              weight: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              nodeSelectorTerms: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
              }[];
            };
          };
          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey: string;
              };
              /** Format: int32 */
              weight: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey: string;
            }[];
          };
          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [key: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey: string;
              };
              /** Format: int32 */
              weight: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey: string;
            }[];
          };
        };
        allocationStrategy?: string;
        collectorNotReadyGracePeriod?: string;
        enabled?: boolean;
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
        filterStrategy?: string;
        image?: string;
        nodeSelector?: {
          [key: string]: string;
        };
        observability?: {
          metrics?: {
            disablePrometheusAnnotations?: boolean;
            enableMetrics?: boolean;
          };
        };
        podDisruptionBudget?: {
          maxUnavailable?: number | string;
          minAvailable?: number | string;
        };
        podSecurityContext?: {
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
          };
          /** Format: int64 */
          fsGroup?: number;
          fsGroupChangePolicy?: string;
          /** Format: int64 */
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          /** Format: int64 */
          runAsUser?: number;
          seLinuxChangePolicy?: string;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
          };
          supplementalGroups?: number[];
          supplementalGroupsPolicy?: string;
          sysctls?: {
            name: string;
            value: string;
          }[];
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
          };
        };
        prometheusCR?: {
          allowNamespaces?: string[];
          denyNamespaces?: string[];
          enabled?: boolean;
          podMonitorSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [key: string]: string;
            };
          };
          probeSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [key: string]: string;
            };
          };
          scrapeConfigSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [key: string]: string;
            };
          };
          /** Format: duration */
          scrapeInterval?: string;
          serviceMonitorSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [key: string]: string;
            };
          };
        };
        /** Format: int32 */
        replicas?: number;
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
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          /** Format: int64 */
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          /** Format: int64 */
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
          };
        };
        serviceAccount?: string;
        tolerations?: {
          effect?: string;
          key?: string;
          operator?: string;
          /** Format: int64 */
          tolerationSeconds?: number;
          value?: string;
        }[];
        topologySpreadConstraints?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [key: string]: string;
            };
          };
          matchLabelKeys?: string[];
          /** Format: int32 */
          maxSkew: number;
          /** Format: int32 */
          minDomains?: number;
          nodeAffinityPolicy?: string;
          nodeTaintsPolicy?: string;
          topologyKey: string;
          whenUnsatisfiable: string;
        }[];
      };
      /** Format: int64 */
      terminationGracePeriodSeconds?: number;
      tolerations?: {
        effect?: string;
        key?: string;
        operator?: string;
        /** Format: int64 */
        tolerationSeconds?: number;
        value?: string;
      }[];
      topologySpreadConstraints?: {
        labelSelector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
          }[];
          matchLabels?: {
            [key: string]: string;
          };
        };
        matchLabelKeys?: string[];
        /** Format: int32 */
        maxSkew: number;
        /** Format: int32 */
        minDomains?: number;
        nodeAffinityPolicy?: string;
        nodeTaintsPolicy?: string;
        topologyKey: string;
        whenUnsatisfiable: string;
      }[];
      upgradeStrategy?: string;
      volumeClaimTemplates?: {
        apiVersion?: string;
        kind?: string;
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
        spec?: {
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
        status?: {
          accessModes?: string[];
          allocatedResourceStatuses?: {
            [key: string]: string;
          };
          allocatedResources?: {
            [key: string]: number | string;
          };
          capacity?: {
            [key: string]: number | string;
          };
          conditions?: {
            /** Format: date-time */
            lastProbeTime?: string;
            /** Format: date-time */
            lastTransitionTime?: string;
            message?: string;
            reason?: string;
            status: string;
            type: string;
          }[];
          currentVolumeAttributesClassName?: string;
          modifyVolumeStatus?: {
            status: string;
            targetVolumeAttributesClassName?: string;
          };
          phase?: string;
        };
      }[];
      volumeMounts?: {
        mountPath: string;
        mountPropagation?: string;
        name: string;
        readOnly?: boolean;
        recursiveReadOnly?: string;
        subPath?: string;
        subPathExpr?: string;
      }[];
      volumes?: {
        awsElasticBlockStore?: {
          fsType?: string;
          /** Format: int32 */
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          /** @default ext4 */
          fsType: string;
          kind?: string;
          /** @default false */
          readOnly: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          shareName: string;
        };
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: {
            /** @default  */
            name: string;
          };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            /** @default  */
            name: string;
          };
          volumeID: string;
        };
        configMap?: {
          /** Format: int32 */
          defaultMode?: number;
          items?: {
            key: string;
            /** Format: int32 */
            mode?: number;
            path: string;
          }[];
          /** @default  */
          name: string;
          optional?: boolean;
        };
        csi?: {
          driver: string;
          fsType?: string;
          nodePublishSecretRef?: {
            /** @default  */
            name: string;
          };
          readOnly?: boolean;
          volumeAttributes?: {
            [key: string]: string;
          };
        };
        downwardAPI?: {
          /** Format: int32 */
          defaultMode?: number;
          items?: {
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
            };
            /** Format: int32 */
            mode?: number;
            path: string;
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
            };
          }[];
        };
        emptyDir?: {
          medium?: string;
          sizeLimit?: number | string;
        };
        ephemeral?: {
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
        };
        fc?: {
          fsType?: string;
          /** Format: int32 */
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: {
            [key: string]: string;
          };
          readOnly?: boolean;
          secretRef?: {
            /** @default  */
            name: string;
          };
        };
        flocker?: {
          datasetName?: string;
          datasetUUID?: string;
        };
        gcePersistentDisk?: {
          fsType?: string;
          /** Format: int32 */
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        gitRepo?: {
          directory?: string;
          repository: string;
          revision?: string;
        };
        glusterfs?: {
          endpoints: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: {
          path: string;
          type?: string;
        };
        image?: {
          pullPolicy?: string;
          reference?: string;
        };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          /** @default default */
          iscsiInterface: string;
          /** Format: int32 */
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: {
            /** @default  */
            name: string;
          };
          targetPortal: string;
        };
        name: string;
        nfs?: {
          path: string;
          readOnly?: boolean;
          server: string;
        };
        persistentVolumeClaim?: {
          claimName: string;
          readOnly?: boolean;
        };
        photonPersistentDisk?: {
          fsType?: string;
          pdID: string;
        };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        projected?: {
          /** Format: int32 */
          defaultMode?: number;
          sources?: {
            clusterTrustBundle?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [key: string]: string;
                };
              };
              name?: string;
              optional?: boolean;
              path: string;
              signerName?: string;
            };
            configMap?: {
              items?: {
                key: string;
                /** Format: int32 */
                mode?: number;
                path: string;
              }[];
              /** @default  */
              name: string;
              optional?: boolean;
            };
            downwardAPI?: {
              items?: {
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                };
                /** Format: int32 */
                mode?: number;
                path: string;
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                };
              }[];
            };
            secret?: {
              items?: {
                key: string;
                /** Format: int32 */
                mode?: number;
                path: string;
              }[];
              /** @default  */
              name: string;
              optional?: boolean;
            };
            serviceAccountToken?: {
              audience?: string;
              /** Format: int64 */
              expirationSeconds?: number;
              path: string;
            };
          }[];
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          /** @default /etc/ceph/keyring */
          keyring: string;
          monitors: string[];
          /** @default rbd */
          pool: string;
          readOnly?: boolean;
          secretRef?: {
            /** @default  */
            name: string;
          };
          /** @default admin */
          user: string;
        };
        scaleIO?: {
          /** @default xfs */
          fsType: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: {
            /** @default  */
            name: string;
          };
          sslEnabled?: boolean;
          /** @default ThinProvisioned */
          storageMode: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        secret?: {
          /** Format: int32 */
          defaultMode?: number;
          items?: {
            key: string;
            /** Format: int32 */
            mode?: number;
            path: string;
          }[];
          optional?: boolean;
          secretName?: string;
        };
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            /** @default  */
            name: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      }[];
    };
    status?: {
      image?: string;
      scale?: {
        /** Format: int32 */
        replicas?: number;
        selector?: string;
        statusReplicas?: string;
      };
      version?: string;
    };
  };
}
