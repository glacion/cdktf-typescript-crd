import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApplicationSetV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesApplicationSetV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesApplicationSetV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "argoproj.io/v1alpha1";
    kind: "ApplicationSet";
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
      applyNestedSelectors?: boolean;
      generators: {
        clusterDecisionResource?: {
          configMapRef: string;
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
          /** Format: int64 */
          requeueAfterSeconds?: number;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
          values?: {
            [key: string]: string;
          };
        };
        clusters?: {
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
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
          values?: {
            [key: string]: string;
          };
        };
        git?: {
          directories?: {
            exclude?: boolean;
            path: string;
          }[];
          files?: {
            path: string;
          }[];
          pathParamPrefix?: string;
          repoURL: string;
          /** Format: int64 */
          requeueAfterSeconds?: number;
          revision: string;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
          values?: {
            [key: string]: string;
          };
        };
        list?: {
          elements?: unknown[];
          elementsYaml?: string;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
        };
        matrix?: {
          generators: {
            clusterDecisionResource?: {
              configMapRef: string;
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
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            clusters?: {
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
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            git?: {
              directories?: {
                exclude?: boolean;
                path: string;
              }[];
              files?: {
                path: string;
              }[];
              pathParamPrefix?: string;
              repoURL: string;
              /** Format: int64 */
              requeueAfterSeconds?: number;
              revision: string;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            list?: {
              elements?: unknown[];
              elementsYaml?: string;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
            };
            matrix?: unknown;
            merge?: unknown;
            plugin?: {
              configMapRef: {
                name: string;
              };
              input?: {
                parameters?: {
                  [key: string]: unknown;
                };
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            pullRequest?: {
              azuredevops?: {
                api?: string;
                labels?: string[];
                organization: string;
                project: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              bitbucket?: {
                api?: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                owner: string;
                repo: string;
              };
              bitbucketServer?: {
                api: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                project: string;
                repo: string;
              };
              filters?: {
                branchMatch?: string;
                targetBranchMatch?: string;
              }[];
              gitea?: {
                api: string;
                insecure?: boolean;
                owner: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              github?: {
                api?: string;
                appSecretName?: string;
                labels?: string[];
                owner: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              gitlab?: {
                api?: string;
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                labels?: string[];
                project: string;
                pullRequestState?: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
            };
            scmProvider?: {
              awsCodeCommit?: {
                allBranches?: boolean;
                region?: string;
                role?: string;
                tagFilters?: {
                  key: string;
                  value?: string;
                }[];
              };
              azureDevOps?: {
                accessTokenRef: {
                  key: string;
                  secretName: string;
                };
                allBranches?: boolean;
                api?: string;
                organization: string;
                teamProject: string;
              };
              bitbucket?: {
                allBranches?: boolean;
                appPasswordRef: {
                  key: string;
                  secretName: string;
                };
                owner: string;
                user: string;
              };
              bitbucketServer?: {
                allBranches?: boolean;
                api: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                project: string;
              };
              cloneProtocol?: string;
              filters?: {
                branchMatch?: string;
                labelMatch?: string;
                pathsDoNotExist?: string[];
                pathsExist?: string[];
                repositoryMatch?: string;
              }[];
              gitea?: {
                allBranches?: boolean;
                api: string;
                insecure?: boolean;
                owner: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              github?: {
                allBranches?: boolean;
                api?: string;
                appSecretName?: string;
                organization: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              gitlab?: {
                allBranches?: boolean;
                api?: string;
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                group: string;
                includeSharedProjects?: boolean;
                includeSubgroups?: boolean;
                insecure?: boolean;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
                topic?: string;
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
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
          }[];
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
        };
        merge?: {
          generators: {
            clusterDecisionResource?: {
              configMapRef: string;
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
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            clusters?: {
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
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            git?: {
              directories?: {
                exclude?: boolean;
                path: string;
              }[];
              files?: {
                path: string;
              }[];
              pathParamPrefix?: string;
              repoURL: string;
              /** Format: int64 */
              requeueAfterSeconds?: number;
              revision: string;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            list?: {
              elements?: unknown[];
              elementsYaml?: string;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
            };
            matrix?: unknown;
            merge?: unknown;
            plugin?: {
              configMapRef: {
                name: string;
              };
              input?: {
                parameters?: {
                  [key: string]: unknown;
                };
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
              };
            };
            pullRequest?: {
              azuredevops?: {
                api?: string;
                labels?: string[];
                organization: string;
                project: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              bitbucket?: {
                api?: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                owner: string;
                repo: string;
              };
              bitbucketServer?: {
                api: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                project: string;
                repo: string;
              };
              filters?: {
                branchMatch?: string;
                targetBranchMatch?: string;
              }[];
              gitea?: {
                api: string;
                insecure?: boolean;
                owner: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              github?: {
                api?: string;
                appSecretName?: string;
                labels?: string[];
                owner: string;
                repo: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              gitlab?: {
                api?: string;
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                labels?: string[];
                project: string;
                pullRequestState?: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
            };
            scmProvider?: {
              awsCodeCommit?: {
                allBranches?: boolean;
                region?: string;
                role?: string;
                tagFilters?: {
                  key: string;
                  value?: string;
                }[];
              };
              azureDevOps?: {
                accessTokenRef: {
                  key: string;
                  secretName: string;
                };
                allBranches?: boolean;
                api?: string;
                organization: string;
                teamProject: string;
              };
              bitbucket?: {
                allBranches?: boolean;
                appPasswordRef: {
                  key: string;
                  secretName: string;
                };
                owner: string;
                user: string;
              };
              bitbucketServer?: {
                allBranches?: boolean;
                api: string;
                basicAuth?: {
                  passwordRef: {
                    key: string;
                    secretName: string;
                  };
                  username: string;
                };
                bearerToken?: {
                  tokenRef: {
                    key: string;
                    secretName: string;
                  };
                };
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                insecure?: boolean;
                project: string;
              };
              cloneProtocol?: string;
              filters?: {
                branchMatch?: string;
                labelMatch?: string;
                pathsDoNotExist?: string[];
                pathsExist?: string[];
                repositoryMatch?: string;
              }[];
              gitea?: {
                allBranches?: boolean;
                api: string;
                insecure?: boolean;
                owner: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              github?: {
                allBranches?: boolean;
                api?: string;
                appSecretName?: string;
                organization: string;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
              };
              gitlab?: {
                allBranches?: boolean;
                api?: string;
                caRef?: {
                  configMapName: string;
                  key: string;
                };
                group: string;
                includeSharedProjects?: boolean;
                includeSubgroups?: boolean;
                insecure?: boolean;
                tokenRef?: {
                  key: string;
                  secretName: string;
                };
                topic?: string;
              };
              /** Format: int64 */
              requeueAfterSeconds?: number;
              template?: {
                metadata: {
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
                  destination: {
                    name?: string;
                    namespace?: string;
                    server?: string;
                  };
                  ignoreDifferences?: {
                    group?: string;
                    jqPathExpressions?: string[];
                    jsonPointers?: string[];
                    kind: string;
                    managedFieldsManagers?: string[];
                    name?: string;
                    namespace?: string;
                  }[];
                  info?: {
                    name: string;
                    value: string;
                  }[];
                  project: string;
                  /** Format: int64 */
                  revisionHistoryLimit?: number;
                  source?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  };
                  sources?: {
                    chart?: string;
                    directory?: {
                      exclude?: string;
                      include?: string;
                      jsonnet?: {
                        extVars?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                        libs?: string[];
                        tlas?: {
                          code?: boolean;
                          name: string;
                          value: string;
                        }[];
                      };
                      recurse?: boolean;
                    };
                    helm?: {
                      apiVersions?: string[];
                      fileParameters?: {
                        name?: string;
                        path?: string;
                      }[];
                      ignoreMissingValueFiles?: boolean;
                      kubeVersion?: string;
                      namespace?: string;
                      parameters?: {
                        forceString?: boolean;
                        name?: string;
                        value?: string;
                      }[];
                      passCredentials?: boolean;
                      releaseName?: string;
                      skipCrds?: boolean;
                      valueFiles?: string[];
                      values?: string;
                      valuesObject?: Record<string, never>;
                      version?: string;
                    };
                    kustomize?: {
                      apiVersions?: string[];
                      commonAnnotations?: {
                        [key: string]: string;
                      };
                      commonAnnotationsEnvsubst?: boolean;
                      commonLabels?: {
                        [key: string]: string;
                      };
                      components?: string[];
                      forceCommonAnnotations?: boolean;
                      forceCommonLabels?: boolean;
                      images?: string[];
                      kubeVersion?: string;
                      labelWithoutSelector?: boolean;
                      namePrefix?: string;
                      nameSuffix?: string;
                      namespace?: string;
                      patches?: {
                        options?: {
                          [key: string]: boolean;
                        };
                        patch?: string;
                        path?: string;
                        target?: {
                          annotationSelector?: string;
                          group?: string;
                          kind?: string;
                          labelSelector?: string;
                          name?: string;
                          namespace?: string;
                          version?: string;
                        };
                      }[];
                      replicas?: {
                        count: number | string;
                        name: string;
                      }[];
                      version?: string;
                    };
                    path?: string;
                    plugin?: {
                      env?: {
                        name: string;
                        value: string;
                      }[];
                      name?: string;
                      parameters?: {
                        array?: string[];
                        map?: {
                          [key: string]: string;
                        };
                        name?: string;
                        string?: string;
                      }[];
                    };
                    ref?: string;
                    repoURL: string;
                    targetRevision?: string;
                  }[];
                  syncPolicy?: {
                    automated?: {
                      allowEmpty?: boolean;
                      prune?: boolean;
                      selfHeal?: boolean;
                    };
                    managedNamespaceMetadata?: {
                      annotations?: {
                        [key: string]: string;
                      };
                      labels?: {
                        [key: string]: string;
                      };
                    };
                    retry?: {
                      backoff?: {
                        duration?: string;
                        /** Format: int64 */
                        factor?: number;
                        maxDuration?: string;
                      };
                      /** Format: int64 */
                      limit?: number;
                    };
                    syncOptions?: string[];
                  };
                };
              };
              values?: {
                [key: string]: string;
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
          }[];
          mergeKeys: string[];
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
        };
        plugin?: {
          configMapRef: {
            name: string;
          };
          input?: {
            parameters?: {
              [key: string]: unknown;
            };
          };
          /** Format: int64 */
          requeueAfterSeconds?: number;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
          values?: {
            [key: string]: string;
          };
        };
        pullRequest?: {
          azuredevops?: {
            api?: string;
            labels?: string[];
            organization: string;
            project: string;
            repo: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          bitbucket?: {
            api?: string;
            basicAuth?: {
              passwordRef: {
                key: string;
                secretName: string;
              };
              username: string;
            };
            bearerToken?: {
              tokenRef: {
                key: string;
                secretName: string;
              };
            };
            owner: string;
            repo: string;
          };
          bitbucketServer?: {
            api: string;
            basicAuth?: {
              passwordRef: {
                key: string;
                secretName: string;
              };
              username: string;
            };
            bearerToken?: {
              tokenRef: {
                key: string;
                secretName: string;
              };
            };
            caRef?: {
              configMapName: string;
              key: string;
            };
            insecure?: boolean;
            project: string;
            repo: string;
          };
          filters?: {
            branchMatch?: string;
            targetBranchMatch?: string;
          }[];
          gitea?: {
            api: string;
            insecure?: boolean;
            owner: string;
            repo: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          github?: {
            api?: string;
            appSecretName?: string;
            labels?: string[];
            owner: string;
            repo: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          gitlab?: {
            api?: string;
            caRef?: {
              configMapName: string;
              key: string;
            };
            insecure?: boolean;
            labels?: string[];
            project: string;
            pullRequestState?: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          /** Format: int64 */
          requeueAfterSeconds?: number;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
        };
        scmProvider?: {
          awsCodeCommit?: {
            allBranches?: boolean;
            region?: string;
            role?: string;
            tagFilters?: {
              key: string;
              value?: string;
            }[];
          };
          azureDevOps?: {
            accessTokenRef: {
              key: string;
              secretName: string;
            };
            allBranches?: boolean;
            api?: string;
            organization: string;
            teamProject: string;
          };
          bitbucket?: {
            allBranches?: boolean;
            appPasswordRef: {
              key: string;
              secretName: string;
            };
            owner: string;
            user: string;
          };
          bitbucketServer?: {
            allBranches?: boolean;
            api: string;
            basicAuth?: {
              passwordRef: {
                key: string;
                secretName: string;
              };
              username: string;
            };
            bearerToken?: {
              tokenRef: {
                key: string;
                secretName: string;
              };
            };
            caRef?: {
              configMapName: string;
              key: string;
            };
            insecure?: boolean;
            project: string;
          };
          cloneProtocol?: string;
          filters?: {
            branchMatch?: string;
            labelMatch?: string;
            pathsDoNotExist?: string[];
            pathsExist?: string[];
            repositoryMatch?: string;
          }[];
          gitea?: {
            allBranches?: boolean;
            api: string;
            insecure?: boolean;
            owner: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          github?: {
            allBranches?: boolean;
            api?: string;
            appSecretName?: string;
            organization: string;
            tokenRef?: {
              key: string;
              secretName: string;
            };
          };
          gitlab?: {
            allBranches?: boolean;
            api?: string;
            caRef?: {
              configMapName: string;
              key: string;
            };
            group: string;
            includeSharedProjects?: boolean;
            includeSubgroups?: boolean;
            insecure?: boolean;
            tokenRef?: {
              key: string;
              secretName: string;
            };
            topic?: string;
          };
          /** Format: int64 */
          requeueAfterSeconds?: number;
          template?: {
            metadata: {
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
              destination: {
                name?: string;
                namespace?: string;
                server?: string;
              };
              ignoreDifferences?: {
                group?: string;
                jqPathExpressions?: string[];
                jsonPointers?: string[];
                kind: string;
                managedFieldsManagers?: string[];
                name?: string;
                namespace?: string;
              }[];
              info?: {
                name: string;
                value: string;
              }[];
              project: string;
              /** Format: int64 */
              revisionHistoryLimit?: number;
              source?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              };
              sources?: {
                chart?: string;
                directory?: {
                  exclude?: string;
                  include?: string;
                  jsonnet?: {
                    extVars?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                    libs?: string[];
                    tlas?: {
                      code?: boolean;
                      name: string;
                      value: string;
                    }[];
                  };
                  recurse?: boolean;
                };
                helm?: {
                  apiVersions?: string[];
                  fileParameters?: {
                    name?: string;
                    path?: string;
                  }[];
                  ignoreMissingValueFiles?: boolean;
                  kubeVersion?: string;
                  namespace?: string;
                  parameters?: {
                    forceString?: boolean;
                    name?: string;
                    value?: string;
                  }[];
                  passCredentials?: boolean;
                  releaseName?: string;
                  skipCrds?: boolean;
                  valueFiles?: string[];
                  values?: string;
                  valuesObject?: Record<string, never>;
                  version?: string;
                };
                kustomize?: {
                  apiVersions?: string[];
                  commonAnnotations?: {
                    [key: string]: string;
                  };
                  commonAnnotationsEnvsubst?: boolean;
                  commonLabels?: {
                    [key: string]: string;
                  };
                  components?: string[];
                  forceCommonAnnotations?: boolean;
                  forceCommonLabels?: boolean;
                  images?: string[];
                  kubeVersion?: string;
                  labelWithoutSelector?: boolean;
                  namePrefix?: string;
                  nameSuffix?: string;
                  namespace?: string;
                  patches?: {
                    options?: {
                      [key: string]: boolean;
                    };
                    patch?: string;
                    path?: string;
                    target?: {
                      annotationSelector?: string;
                      group?: string;
                      kind?: string;
                      labelSelector?: string;
                      name?: string;
                      namespace?: string;
                      version?: string;
                    };
                  }[];
                  replicas?: {
                    count: number | string;
                    name: string;
                  }[];
                  version?: string;
                };
                path?: string;
                plugin?: {
                  env?: {
                    name: string;
                    value: string;
                  }[];
                  name?: string;
                  parameters?: {
                    array?: string[];
                    map?: {
                      [key: string]: string;
                    };
                    name?: string;
                    string?: string;
                  }[];
                };
                ref?: string;
                repoURL: string;
                targetRevision?: string;
              }[];
              syncPolicy?: {
                automated?: {
                  allowEmpty?: boolean;
                  prune?: boolean;
                  selfHeal?: boolean;
                };
                managedNamespaceMetadata?: {
                  annotations?: {
                    [key: string]: string;
                  };
                  labels?: {
                    [key: string]: string;
                  };
                };
                retry?: {
                  backoff?: {
                    duration?: string;
                    /** Format: int64 */
                    factor?: number;
                    maxDuration?: string;
                  };
                  /** Format: int64 */
                  limit?: number;
                };
                syncOptions?: string[];
              };
            };
          };
          values?: {
            [key: string]: string;
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
      }[];
      goTemplate?: boolean;
      goTemplateOptions?: string[];
      ignoreApplicationDifferences?: {
        jqPathExpressions?: string[];
        jsonPointers?: string[];
        name?: string;
      }[];
      preservedFields?: {
        annotations?: string[];
        labels?: string[];
      };
      strategy?: {
        rollingSync?: {
          steps?: {
            matchExpressions?: {
              key?: string;
              operator?: string;
              values?: string[];
            }[];
            maxUpdate?: number | string;
          }[];
        };
        type?: string;
      };
      syncPolicy?: {
        applicationsSync?: string;
        preserveResourcesOnDeletion?: boolean;
      };
      template: {
        metadata: {
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
          destination: {
            name?: string;
            namespace?: string;
            server?: string;
          };
          ignoreDifferences?: {
            group?: string;
            jqPathExpressions?: string[];
            jsonPointers?: string[];
            kind: string;
            managedFieldsManagers?: string[];
            name?: string;
            namespace?: string;
          }[];
          info?: {
            name: string;
            value: string;
          }[];
          project: string;
          /** Format: int64 */
          revisionHistoryLimit?: number;
          source?: {
            chart?: string;
            directory?: {
              exclude?: string;
              include?: string;
              jsonnet?: {
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                libs?: string[];
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              recurse?: boolean;
            };
            helm?: {
              apiVersions?: string[];
              fileParameters?: {
                name?: string;
                path?: string;
              }[];
              ignoreMissingValueFiles?: boolean;
              kubeVersion?: string;
              namespace?: string;
              parameters?: {
                forceString?: boolean;
                name?: string;
                value?: string;
              }[];
              passCredentials?: boolean;
              releaseName?: string;
              skipCrds?: boolean;
              valueFiles?: string[];
              values?: string;
              valuesObject?: Record<string, never>;
              version?: string;
            };
            kustomize?: {
              apiVersions?: string[];
              commonAnnotations?: {
                [key: string]: string;
              };
              commonAnnotationsEnvsubst?: boolean;
              commonLabels?: {
                [key: string]: string;
              };
              components?: string[];
              forceCommonAnnotations?: boolean;
              forceCommonLabels?: boolean;
              images?: string[];
              kubeVersion?: string;
              labelWithoutSelector?: boolean;
              namePrefix?: string;
              nameSuffix?: string;
              namespace?: string;
              patches?: {
                options?: {
                  [key: string]: boolean;
                };
                patch?: string;
                path?: string;
                target?: {
                  annotationSelector?: string;
                  group?: string;
                  kind?: string;
                  labelSelector?: string;
                  name?: string;
                  namespace?: string;
                  version?: string;
                };
              }[];
              replicas?: {
                count: number | string;
                name: string;
              }[];
              version?: string;
            };
            path?: string;
            plugin?: {
              env?: {
                name: string;
                value: string;
              }[];
              name?: string;
              parameters?: {
                array?: string[];
                map?: {
                  [key: string]: string;
                };
                name?: string;
                string?: string;
              }[];
            };
            ref?: string;
            repoURL: string;
            targetRevision?: string;
          };
          sources?: {
            chart?: string;
            directory?: {
              exclude?: string;
              include?: string;
              jsonnet?: {
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                libs?: string[];
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              recurse?: boolean;
            };
            helm?: {
              apiVersions?: string[];
              fileParameters?: {
                name?: string;
                path?: string;
              }[];
              ignoreMissingValueFiles?: boolean;
              kubeVersion?: string;
              namespace?: string;
              parameters?: {
                forceString?: boolean;
                name?: string;
                value?: string;
              }[];
              passCredentials?: boolean;
              releaseName?: string;
              skipCrds?: boolean;
              valueFiles?: string[];
              values?: string;
              valuesObject?: Record<string, never>;
              version?: string;
            };
            kustomize?: {
              apiVersions?: string[];
              commonAnnotations?: {
                [key: string]: string;
              };
              commonAnnotationsEnvsubst?: boolean;
              commonLabels?: {
                [key: string]: string;
              };
              components?: string[];
              forceCommonAnnotations?: boolean;
              forceCommonLabels?: boolean;
              images?: string[];
              kubeVersion?: string;
              labelWithoutSelector?: boolean;
              namePrefix?: string;
              nameSuffix?: string;
              namespace?: string;
              patches?: {
                options?: {
                  [key: string]: boolean;
                };
                patch?: string;
                path?: string;
                target?: {
                  annotationSelector?: string;
                  group?: string;
                  kind?: string;
                  labelSelector?: string;
                  name?: string;
                  namespace?: string;
                  version?: string;
                };
              }[];
              replicas?: {
                count: number | string;
                name: string;
              }[];
              version?: string;
            };
            path?: string;
            plugin?: {
              env?: {
                name: string;
                value: string;
              }[];
              name?: string;
              parameters?: {
                array?: string[];
                map?: {
                  [key: string]: string;
                };
                name?: string;
                string?: string;
              }[];
            };
            ref?: string;
            repoURL: string;
            targetRevision?: string;
          }[];
          syncPolicy?: {
            automated?: {
              allowEmpty?: boolean;
              prune?: boolean;
              selfHeal?: boolean;
            };
            managedNamespaceMetadata?: {
              annotations?: {
                [key: string]: string;
              };
              labels?: {
                [key: string]: string;
              };
            };
            retry?: {
              backoff?: {
                duration?: string;
                /** Format: int64 */
                factor?: number;
                maxDuration?: string;
              };
              /** Format: int64 */
              limit?: number;
            };
            syncOptions?: string[];
          };
        };
      };
      templatePatch?: string;
    };
    status?: {
      applicationStatus?: {
        application: string;
        /** Format: date-time */
        lastTransitionTime?: string;
        message: string;
        status: string;
        step: string;
        targetRevisions: string[];
      }[];
      conditions?: {
        /** Format: date-time */
        lastTransitionTime?: string;
        message: string;
        reason: string;
        status: string;
        type: string;
      }[];
      resources?: {
        group?: string;
        health?: {
          message?: string;
          status?: string;
        };
        hook?: boolean;
        kind?: string;
        name?: string;
        namespace?: string;
        requiresPruning?: boolean;
        status?: string;
        /** Format: int64 */
        syncWave?: number;
        version?: string;
      }[];
    };
  };
}
