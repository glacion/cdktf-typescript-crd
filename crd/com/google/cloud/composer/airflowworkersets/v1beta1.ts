import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAirflowWorkerSetV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAirflowWorkerSetV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "composer.cloud.google.com/v1beta1", kind: "AirflowWorkerSet", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAirflowWorkerSetV1beta1Config extends ManifestConfig {
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
      /** Format: int32 */
      replicas: number;
      selector: {
        matchExpressions?: {
          key: string;
          operator: string;
          values?: string[];
        }[];
        matchLabels?: {
          [key: string]: string;
        };
      };
      template: {
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
          /** Format: int64 */
          activeDeadlineSeconds?: number;
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
          automountServiceAccountToken?: boolean;
          containers: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
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
                  name?: string;
                  optional?: boolean;
                };
              };
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
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
                service?: string;
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
                service?: string;
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
            resources?: {
              claims?: {
                name: string;
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
                service?: string;
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
              subPath?: string;
              subPathExpr?: string;
            }[];
            workingDir?: string;
          }[];
          dnsConfig?: {
            nameservers?: string[];
            options?: {
              name?: string;
              value?: string;
            }[];
            searches?: string[];
          };
          dnsPolicy?: string;
          enableServiceLinks?: boolean;
          ephemeralContainers?: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
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
                  name?: string;
                  optional?: boolean;
                };
              };
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
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
                service?: string;
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
                service?: string;
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
            resources?: {
              claims?: {
                name: string;
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
                service?: string;
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
            targetContainerName?: string;
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
              subPath?: string;
              subPathExpr?: string;
            }[];
            workingDir?: string;
          }[];
          hostAliases?: {
            hostnames?: string[];
            ip?: string;
          }[];
          hostIPC?: boolean;
          hostNetwork?: boolean;
          hostPID?: boolean;
          hostUsers?: boolean;
          hostname?: string;
          imagePullSecrets?: {
            name?: string;
          }[];
          initContainers?: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
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
                  name?: string;
                  optional?: boolean;
                };
              };
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
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
                service?: string;
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
                service?: string;
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
            resources?: {
              claims?: {
                name: string;
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
                service?: string;
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
              subPath?: string;
              subPathExpr?: string;
            }[];
            workingDir?: string;
          }[];
          nodeName?: string;
          nodeSelector?: {
            [key: string]: string;
          };
          os?: {
            name: string;
          };
          overhead?: {
            [key: string]: number | string;
          };
          preemptionPolicy?: string;
          /** Format: int32 */
          priority?: number;
          priorityClassName?: string;
          readinessGates?: {
            conditionType: string;
          }[];
          resourceClaims?: {
            name: string;
            source?: {
              resourceClaimName?: string;
              resourceClaimTemplateName?: string;
            };
          }[];
          restartPolicy?: string;
          runtimeClassName?: string;
          schedulerName?: string;
          schedulingGates?: {
            name: string;
          }[];
          securityContext?: {
            /** Format: int64 */
            fsGroup?: number;
            fsGroupChangePolicy?: string;
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
            supplementalGroups?: number[];
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
          serviceAccount?: string;
          serviceAccountName?: string;
          setHostnameAsFQDN?: boolean;
          shareProcessNamespace?: boolean;
          subdomain?: string;
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
              fsType?: string;
              kind?: string;
              readOnly?: boolean;
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
                name?: string;
              };
              user?: string;
            };
            cinder?: {
              fsType?: string;
              readOnly?: boolean;
              secretRef?: {
                name?: string;
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
              name?: string;
              optional?: boolean;
            };
            csi?: {
              driver: string;
              fsType?: string;
              nodePublishSecretRef?: {
                name?: string;
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
                    claims?: {
                      name: string;
                    }[];
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
                name?: string;
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
            iscsi?: {
              chapAuthDiscovery?: boolean;
              chapAuthSession?: boolean;
              fsType?: string;
              initiatorName?: string;
              iqn: string;
              iscsiInterface?: string;
              /** Format: int32 */
              lun: number;
              portals?: string[];
              readOnly?: boolean;
              secretRef?: {
                name?: string;
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
                configMap?: {
                  items?: {
                    key: string;
                    /** Format: int32 */
                    mode?: number;
                    path: string;
                  }[];
                  name?: string;
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
                  name?: string;
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
              keyring?: string;
              monitors: string[];
              pool?: string;
              readOnly?: boolean;
              secretRef?: {
                name?: string;
              };
              user?: string;
            };
            scaleIO?: {
              fsType?: string;
              gateway: string;
              protectionDomain?: string;
              readOnly?: boolean;
              secretRef: {
                name?: string;
              };
              sslEnabled?: boolean;
              storageMode?: string;
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
                name?: string;
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
      };
    };
  };
}
