import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ArgoprojIoApplicationV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: ArgoprojIoApplicationV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface ArgoprojIoApplicationV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "argoproj.io/v1alpha1";
    kind: "Application";
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
    /** @description Operation contains information about a requested or running operation */
    operation?: {
      /** @description Info is a list of informational items for this operation */
      info?: {
        name: string;
        value: string;
      }[];
      /** @description InitiatedBy contains information about who initiated the operations */
      initiatedBy?: {
        /** @description Automated is set to true if operation was initiated automatically by the application controller. */
        automated?: boolean;
        /** @description Username contains the name of a user who started operation */
        username?: string;
      };
      /** @description Retry controls the strategy to apply if a sync fails */
      retry?: {
        /** @description Backoff controls how to backoff on subsequent retries of failed syncs */
        backoff?: {
          /** @description Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
          duration?: string;
          /**
           * Format: int64
           * @description Factor is a factor to multiply the base duration after each failed retry
           */
          factor?: number;
          /** @description MaxDuration is the maximum amount of time allowed for the backoff strategy */
          maxDuration?: string;
        };
        /**
         * Format: int64
         * @description Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
         */
        limit?: number;
      };
      /** @description Sync contains parameters for the operation */
      sync?: {
        /**
         * Format: int64
         * @description SelfHealAttemptsCount contains the number of auto-heal attempts
         */
        autoHealAttemptsCount?: number;
        /** @description DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync */
        dryRun?: boolean;
        /** @description Manifests is an optional field that overrides sync source with a local directory for development */
        manifests?: string[];
        /** @description Prune specifies to delete resources from the cluster that are no longer tracked in git */
        prune?: boolean;
        /** @description Resources describes which resources shall be part of the sync */
        resources?: {
          group?: string;
          kind: string;
          name: string;
          namespace?: string;
        }[];
        /** @description Revision is the revision (Git) or chart version (Helm) which to sync the application to
         *     If omitted, will use the revision specified in app spec. */
        revision?: string;
        /** @description Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to
         *     If omitted, will use the revision specified in app spec. */
        revisions?: string[];
        /** @description Source overrides the source definition set in the application.
         *     This is typically set in a Rollback operation and is nil during a Sync operation */
        source?: {
          /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;
          /** @description Directory holds path/directory specific options */
          directory?: {
            /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;
            /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;
            /** @description Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** @description ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              /** @description Additional library search dirs */
              libs?: string[];
              /** @description TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            /** @description Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };
          /** @description Helm holds helm specific options */
          helm?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];
            /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
            namespace?: string;
            /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Value is the value for the Helm parameter */
              value?: string;
            }[];
            /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;
            /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;
            /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
            skipCrds?: boolean;
            /** @description ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];
            /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
            values?: string;
            /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
            valuesObject?: Record<string, never>;
            /** @description Version is the Helm version to use for templating ("3") */
            version?: string;
          };
          /** @description Kustomize holds kustomize specific options */
          kustomize?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };
            /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
            commonAnnotationsEnvsubst?: boolean;
            /** @description CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };
            /** @description Components specifies a list of kustomize components to add to the kustomization before building */
            components?: string[];
            /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;
            /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;
            /** @description Images is a list of Kustomize image override specifications */
            images?: string[];
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
            labelWithoutSelector?: boolean;
            /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;
            /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;
            /** @description Namespace sets the namespace that Kustomize adds to all resources */
            namespace?: string;
            /** @description Patches is a list of Kustomize patches */
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
            /** @description Replicas is a list of Kustomize Replicas override specifications */
            replicas?: {
              /** @description Number of replicas */
              count: number | string;
              /** @description Name of Deployment or StatefulSet */
              name: string;
            }[];
            /** @description Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };
          /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;
          /** @description Plugin holds config management plugin specific options */
          plugin?: {
            /** @description Env is a list of environment variable entries */
            env?: {
              /** @description Name is the name of the variable, usually expressed in uppercase */
              name: string;
              /** @description Value is the value of the variable */
              value: string;
            }[];
            name?: string;
            parameters?: {
              /** @description Array is the value of an array type parameter. */
              array?: string[];
              /** @description Map is the value of a map type parameter. */
              map?: {
                [key: string]: string;
              };
              /** @description Name is the name identifying a parameter. */
              name?: string;
              /** @description String_ is the value of a string type parameter. */
              string?: string;
            }[];
          };
          /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
          ref?: string;
          /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;
          /** @description TargetRevision defines the revision of the source to sync the application to.
           *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
           *     In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        };
        /** @description Sources overrides the source definition set in the application.
         *     This is typically set in a Rollback operation and is nil during a Sync operation */
        sources?: {
          /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;
          /** @description Directory holds path/directory specific options */
          directory?: {
            /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;
            /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;
            /** @description Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** @description ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              /** @description Additional library search dirs */
              libs?: string[];
              /** @description TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            /** @description Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };
          /** @description Helm holds helm specific options */
          helm?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];
            /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
            namespace?: string;
            /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Value is the value for the Helm parameter */
              value?: string;
            }[];
            /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;
            /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;
            /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
            skipCrds?: boolean;
            /** @description ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];
            /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
            values?: string;
            /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
            valuesObject?: Record<string, never>;
            /** @description Version is the Helm version to use for templating ("3") */
            version?: string;
          };
          /** @description Kustomize holds kustomize specific options */
          kustomize?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };
            /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
            commonAnnotationsEnvsubst?: boolean;
            /** @description CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };
            /** @description Components specifies a list of kustomize components to add to the kustomization before building */
            components?: string[];
            /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;
            /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;
            /** @description Images is a list of Kustomize image override specifications */
            images?: string[];
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
            labelWithoutSelector?: boolean;
            /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;
            /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;
            /** @description Namespace sets the namespace that Kustomize adds to all resources */
            namespace?: string;
            /** @description Patches is a list of Kustomize patches */
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
            /** @description Replicas is a list of Kustomize Replicas override specifications */
            replicas?: {
              /** @description Number of replicas */
              count: number | string;
              /** @description Name of Deployment or StatefulSet */
              name: string;
            }[];
            /** @description Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };
          /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;
          /** @description Plugin holds config management plugin specific options */
          plugin?: {
            /** @description Env is a list of environment variable entries */
            env?: {
              /** @description Name is the name of the variable, usually expressed in uppercase */
              name: string;
              /** @description Value is the value of the variable */
              value: string;
            }[];
            name?: string;
            parameters?: {
              /** @description Array is the value of an array type parameter. */
              array?: string[];
              /** @description Map is the value of a map type parameter. */
              map?: {
                [key: string]: string;
              };
              /** @description Name is the name identifying a parameter. */
              name?: string;
              /** @description String_ is the value of a string type parameter. */
              string?: string;
            }[];
          };
          /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
          ref?: string;
          /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;
          /** @description TargetRevision defines the revision of the source to sync the application to.
           *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
           *     In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        }[];
        /** @description SyncOptions provide per-sync sync-options, e.g. Validate=false */
        syncOptions?: string[];
        /** @description SyncStrategy describes how to perform the sync */
        syncStrategy?: {
          /** @description Apply will perform a `kubectl apply` to perform the sync. */
          apply?: {
            /** @description Force indicates whether or not to supply the --force flag to `kubectl apply`.
             *     The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
             *     retried for 5 times. */
            force?: boolean;
          };
          /** @description Hook will submit any referenced resources to perform the sync. This is the default strategy */
          hook?: {
            /** @description Force indicates whether or not to supply the --force flag to `kubectl apply`.
             *     The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
             *     retried for 5 times. */
            force?: boolean;
          };
        };
      };
    };
    /** @description ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision. */
    spec: {
      /** @description Destination is a reference to the target Kubernetes server and namespace */
      destination: {
        /** @description Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set. */
        name?: string;
        /** @description Namespace specifies the target namespace for the application's resources.
         *     The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
        namespace?: string;
        /** @description Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set. */
        server?: string;
      };
      /** @description IgnoreDifferences is a list of resources and their fields which should be ignored during comparison */
      ignoreDifferences?: {
        group?: string;
        jqPathExpressions?: string[];
        jsonPointers?: string[];
        kind: string;
        /** @description ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the
         *     desired state defined in the SCM and won't be displayed in diffs */
        managedFieldsManagers?: string[];
        name?: string;
        namespace?: string;
      }[];
      /** @description Info contains a list of information (URLs, email addresses, and plain text) that relates to the application */
      info?: {
        name: string;
        value: string;
      }[];
      /** @description Project is a reference to the project this application belongs to.
       *     The empty string means that application belongs to the 'default' project. */
      project: string;
      /**
       * Format: int64
       * @description RevisionHistoryLimit limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions.
       *     This should only be changed in exceptional circumstances.
       *     Setting to zero will store no history. This will reduce storage used.
       *     Increasing will increase the space used to store the history, so we do not recommend increasing it.
       *     Default is 10.
       */
      revisionHistoryLimit?: number;
      /** @description Source is a reference to the location of the application's manifests or chart */
      source?: {
        /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
        chart?: string;
        /** @description Directory holds path/directory specific options */
        directory?: {
          /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
          exclude?: string;
          /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
          include?: string;
          /** @description Jsonnet holds options specific to Jsonnet */
          jsonnet?: {
            /** @description ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
            /** @description Additional library search dirs */
            libs?: string[];
            /** @description TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
          };
          /** @description Recurse specifies whether to scan a directory recursively for manifests */
          recurse?: boolean;
        };
        /** @description Helm holds helm specific options */
        helm?: {
          /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
          apiVersions?: string[];
          /** @description FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** @description Name is the name of the Helm parameter */
            name?: string;
            /** @description Path is the path to the file containing the values for the Helm parameter */
            path?: string;
          }[];
          /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
          ignoreMissingValueFiles?: boolean;
          /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           *     uses the Kubernetes version of the target cluster. */
          kubeVersion?: string;
          /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
          namespace?: string;
          /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
          parameters?: {
            /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;
            /** @description Name is the name of the Helm parameter */
            name?: string;
            /** @description Value is the value for the Helm parameter */
            value?: string;
          }[];
          /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
          passCredentials?: boolean;
          /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
          releaseName?: string;
          /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
          skipCrds?: boolean;
          /** @description ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];
          /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
          values?: string;
          /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
          valuesObject?: Record<string, never>;
          /** @description Version is the Helm version to use for templating ("3") */
          version?: string;
        };
        /** @description Kustomize holds kustomize specific options */
        kustomize?: {
          /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
          apiVersions?: string[];
          /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
          commonAnnotations?: {
            [key: string]: string;
          };
          /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
          commonAnnotationsEnvsubst?: boolean;
          /** @description CommonLabels is a list of additional labels to add to rendered manifests */
          commonLabels?: {
            [key: string]: string;
          };
          /** @description Components specifies a list of kustomize components to add to the kustomization before building */
          components?: string[];
          /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
          forceCommonAnnotations?: boolean;
          /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
          forceCommonLabels?: boolean;
          /** @description Images is a list of Kustomize image override specifications */
          images?: string[];
          /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           *     uses the Kubernetes version of the target cluster. */
          kubeVersion?: string;
          /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
          labelWithoutSelector?: boolean;
          /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
          namePrefix?: string;
          /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
          nameSuffix?: string;
          /** @description Namespace sets the namespace that Kustomize adds to all resources */
          namespace?: string;
          /** @description Patches is a list of Kustomize patches */
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
          /** @description Replicas is a list of Kustomize Replicas override specifications */
          replicas?: {
            /** @description Number of replicas */
            count: number | string;
            /** @description Name of Deployment or StatefulSet */
            name: string;
          }[];
          /** @description Version controls which version of Kustomize to use for rendering manifests */
          version?: string;
        };
        /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
        path?: string;
        /** @description Plugin holds config management plugin specific options */
        plugin?: {
          /** @description Env is a list of environment variable entries */
          env?: {
            /** @description Name is the name of the variable, usually expressed in uppercase */
            name: string;
            /** @description Value is the value of the variable */
            value: string;
          }[];
          name?: string;
          parameters?: {
            /** @description Array is the value of an array type parameter. */
            array?: string[];
            /** @description Map is the value of a map type parameter. */
            map?: {
              [key: string]: string;
            };
            /** @description Name is the name identifying a parameter. */
            name?: string;
            /** @description String_ is the value of a string type parameter. */
            string?: string;
          }[];
        };
        /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
        ref?: string;
        /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
        repoURL: string;
        /** @description TargetRevision defines the revision of the source to sync the application to.
         *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
         *     In case of Helm, this is a semver tag for the Chart's version. */
        targetRevision?: string;
      };
      /** @description Sources is a reference to the location of the application's manifests or chart */
      sources?: {
        /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
        chart?: string;
        /** @description Directory holds path/directory specific options */
        directory?: {
          /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
          exclude?: string;
          /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
          include?: string;
          /** @description Jsonnet holds options specific to Jsonnet */
          jsonnet?: {
            /** @description ExtVars is a list of Jsonnet External Variables */
            extVars?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
            /** @description Additional library search dirs */
            libs?: string[];
            /** @description TLAS is a list of Jsonnet Top-level Arguments */
            tlas?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
          };
          /** @description Recurse specifies whether to scan a directory recursively for manifests */
          recurse?: boolean;
        };
        /** @description Helm holds helm specific options */
        helm?: {
          /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
          apiVersions?: string[];
          /** @description FileParameters are file parameters to the helm template */
          fileParameters?: {
            /** @description Name is the name of the Helm parameter */
            name?: string;
            /** @description Path is the path to the file containing the values for the Helm parameter */
            path?: string;
          }[];
          /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
          ignoreMissingValueFiles?: boolean;
          /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           *     uses the Kubernetes version of the target cluster. */
          kubeVersion?: string;
          /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
          namespace?: string;
          /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
          parameters?: {
            /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
            forceString?: boolean;
            /** @description Name is the name of the Helm parameter */
            name?: string;
            /** @description Value is the value for the Helm parameter */
            value?: string;
          }[];
          /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
          passCredentials?: boolean;
          /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
          releaseName?: string;
          /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
          skipCrds?: boolean;
          /** @description ValuesFiles is a list of Helm value files to use when generating a template */
          valueFiles?: string[];
          /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
          values?: string;
          /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
          valuesObject?: Record<string, never>;
          /** @description Version is the Helm version to use for templating ("3") */
          version?: string;
        };
        /** @description Kustomize holds kustomize specific options */
        kustomize?: {
          /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
          apiVersions?: string[];
          /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
          commonAnnotations?: {
            [key: string]: string;
          };
          /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
          commonAnnotationsEnvsubst?: boolean;
          /** @description CommonLabels is a list of additional labels to add to rendered manifests */
          commonLabels?: {
            [key: string]: string;
          };
          /** @description Components specifies a list of kustomize components to add to the kustomization before building */
          components?: string[];
          /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
          forceCommonAnnotations?: boolean;
          /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
          forceCommonLabels?: boolean;
          /** @description Images is a list of Kustomize image override specifications */
          images?: string[];
          /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           *     uses the Kubernetes version of the target cluster. */
          kubeVersion?: string;
          /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
          labelWithoutSelector?: boolean;
          /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
          namePrefix?: string;
          /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
          nameSuffix?: string;
          /** @description Namespace sets the namespace that Kustomize adds to all resources */
          namespace?: string;
          /** @description Patches is a list of Kustomize patches */
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
          /** @description Replicas is a list of Kustomize Replicas override specifications */
          replicas?: {
            /** @description Number of replicas */
            count: number | string;
            /** @description Name of Deployment or StatefulSet */
            name: string;
          }[];
          /** @description Version controls which version of Kustomize to use for rendering manifests */
          version?: string;
        };
        /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
        path?: string;
        /** @description Plugin holds config management plugin specific options */
        plugin?: {
          /** @description Env is a list of environment variable entries */
          env?: {
            /** @description Name is the name of the variable, usually expressed in uppercase */
            name: string;
            /** @description Value is the value of the variable */
            value: string;
          }[];
          name?: string;
          parameters?: {
            /** @description Array is the value of an array type parameter. */
            array?: string[];
            /** @description Map is the value of a map type parameter. */
            map?: {
              [key: string]: string;
            };
            /** @description Name is the name identifying a parameter. */
            name?: string;
            /** @description String_ is the value of a string type parameter. */
            string?: string;
          }[];
        };
        /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
        ref?: string;
        /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
        repoURL: string;
        /** @description TargetRevision defines the revision of the source to sync the application to.
         *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
         *     In case of Helm, this is a semver tag for the Chart's version. */
        targetRevision?: string;
      }[];
      /** @description SyncPolicy controls when and how a sync will be performed */
      syncPolicy?: {
        /** @description Automated will keep an application synced to the target revision */
        automated?: {
          /** @description AllowEmpty allows apps have zero live resources (default: false) */
          allowEmpty?: boolean;
          /** @description Prune specifies whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false) */
          prune?: boolean;
          /** @description SelfHeal specifies whether to revert resources back to their desired state upon modification in the cluster (default: false) */
          selfHeal?: boolean;
        };
        /** @description ManagedNamespaceMetadata controls metadata in the given namespace (if CreateNamespace=true) */
        managedNamespaceMetadata?: {
          annotations?: {
            [key: string]: string;
          };
          labels?: {
            [key: string]: string;
          };
        };
        /** @description Retry controls failed sync retry behavior */
        retry?: {
          /** @description Backoff controls how to backoff on subsequent retries of failed syncs */
          backoff?: {
            /** @description Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
            duration?: string;
            /**
             * Format: int64
             * @description Factor is a factor to multiply the base duration after each failed retry
             */
            factor?: number;
            /** @description MaxDuration is the maximum amount of time allowed for the backoff strategy */
            maxDuration?: string;
          };
          /**
           * Format: int64
           * @description Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
           */
          limit?: number;
        };
        /** @description Options allow you to specify whole app sync-options */
        syncOptions?: string[];
      };
    };
    /** @description ApplicationStatus contains status information for the application */
    status?: {
      /** @description Conditions is a list of currently observed application conditions */
      conditions?: {
        /**
         * Format: date-time
         * @description LastTransitionTime is the time the condition was last observed
         */
        lastTransitionTime?: string;
        /** @description Message contains human-readable message indicating details about condition */
        message: string;
        /** @description Type is an application condition type */
        type: string;
      }[];
      /** @description ControllerNamespace indicates the namespace in which the application controller is located */
      controllerNamespace?: string;
      /** @description Health contains information about the application's current health status */
      health?: {
        /** @description Message is a human-readable informational message describing the health status */
        message?: string;
        /** @description Status holds the status code of the application or resource */
        status?: string;
      };
      /** @description History contains information about the application's sync history */
      history?: {
        /**
         * Format: date-time
         * @description DeployStartedAt holds the time the sync operation started
         */
        deployStartedAt?: string;
        /**
         * Format: date-time
         * @description DeployedAt holds the time the sync operation completed
         */
        deployedAt: string;
        /**
         * Format: int64
         * @description ID is an auto incrementing identifier of the RevisionHistory
         */
        id: number;
        /** @description InitiatedBy contains information about who initiated the operations */
        initiatedBy?: {
          /** @description Automated is set to true if operation was initiated automatically by the application controller. */
          automated?: boolean;
          /** @description Username contains the name of a user who started operation */
          username?: string;
        };
        /** @description Revision holds the revision the sync was performed against */
        revision?: string;
        /** @description Revisions holds the revision of each source in sources field the sync was performed against */
        revisions?: string[];
        /** @description Source is a reference to the application source used for the sync operation */
        source?: {
          /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;
          /** @description Directory holds path/directory specific options */
          directory?: {
            /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;
            /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;
            /** @description Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** @description ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              /** @description Additional library search dirs */
              libs?: string[];
              /** @description TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            /** @description Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };
          /** @description Helm holds helm specific options */
          helm?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];
            /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
            namespace?: string;
            /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Value is the value for the Helm parameter */
              value?: string;
            }[];
            /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;
            /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;
            /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
            skipCrds?: boolean;
            /** @description ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];
            /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
            values?: string;
            /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
            valuesObject?: Record<string, never>;
            /** @description Version is the Helm version to use for templating ("3") */
            version?: string;
          };
          /** @description Kustomize holds kustomize specific options */
          kustomize?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };
            /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
            commonAnnotationsEnvsubst?: boolean;
            /** @description CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };
            /** @description Components specifies a list of kustomize components to add to the kustomization before building */
            components?: string[];
            /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;
            /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;
            /** @description Images is a list of Kustomize image override specifications */
            images?: string[];
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
            labelWithoutSelector?: boolean;
            /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;
            /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;
            /** @description Namespace sets the namespace that Kustomize adds to all resources */
            namespace?: string;
            /** @description Patches is a list of Kustomize patches */
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
            /** @description Replicas is a list of Kustomize Replicas override specifications */
            replicas?: {
              /** @description Number of replicas */
              count: number | string;
              /** @description Name of Deployment or StatefulSet */
              name: string;
            }[];
            /** @description Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };
          /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;
          /** @description Plugin holds config management plugin specific options */
          plugin?: {
            /** @description Env is a list of environment variable entries */
            env?: {
              /** @description Name is the name of the variable, usually expressed in uppercase */
              name: string;
              /** @description Value is the value of the variable */
              value: string;
            }[];
            name?: string;
            parameters?: {
              /** @description Array is the value of an array type parameter. */
              array?: string[];
              /** @description Map is the value of a map type parameter. */
              map?: {
                [key: string]: string;
              };
              /** @description Name is the name identifying a parameter. */
              name?: string;
              /** @description String_ is the value of a string type parameter. */
              string?: string;
            }[];
          };
          /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
          ref?: string;
          /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;
          /** @description TargetRevision defines the revision of the source to sync the application to.
           *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
           *     In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        };
        /** @description Sources is a reference to the application sources used for the sync operation */
        sources?: {
          /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
          chart?: string;
          /** @description Directory holds path/directory specific options */
          directory?: {
            /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
            exclude?: string;
            /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
            include?: string;
            /** @description Jsonnet holds options specific to Jsonnet */
            jsonnet?: {
              /** @description ExtVars is a list of Jsonnet External Variables */
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              /** @description Additional library search dirs */
              libs?: string[];
              /** @description TLAS is a list of Jsonnet Top-level Arguments */
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            /** @description Recurse specifies whether to scan a directory recursively for manifests */
            recurse?: boolean;
          };
          /** @description Helm holds helm specific options */
          helm?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description FileParameters are file parameters to the helm template */
            fileParameters?: {
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Path is the path to the file containing the values for the Helm parameter */
              path?: string;
            }[];
            /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
            ignoreMissingValueFiles?: boolean;
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
            namespace?: string;
            /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
            parameters?: {
              /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
              forceString?: boolean;
              /** @description Name is the name of the Helm parameter */
              name?: string;
              /** @description Value is the value for the Helm parameter */
              value?: string;
            }[];
            /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
            passCredentials?: boolean;
            /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
            releaseName?: string;
            /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
            skipCrds?: boolean;
            /** @description ValuesFiles is a list of Helm value files to use when generating a template */
            valueFiles?: string[];
            /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
            values?: string;
            /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
            valuesObject?: Record<string, never>;
            /** @description Version is the Helm version to use for templating ("3") */
            version?: string;
          };
          /** @description Kustomize holds kustomize specific options */
          kustomize?: {
            /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
             *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
            apiVersions?: string[];
            /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
            commonAnnotations?: {
              [key: string]: string;
            };
            /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
            commonAnnotationsEnvsubst?: boolean;
            /** @description CommonLabels is a list of additional labels to add to rendered manifests */
            commonLabels?: {
              [key: string]: string;
            };
            /** @description Components specifies a list of kustomize components to add to the kustomization before building */
            components?: string[];
            /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
            forceCommonAnnotations?: boolean;
            /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
            forceCommonLabels?: boolean;
            /** @description Images is a list of Kustomize image override specifications */
            images?: string[];
            /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
             *     uses the Kubernetes version of the target cluster. */
            kubeVersion?: string;
            /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
            labelWithoutSelector?: boolean;
            /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
            namePrefix?: string;
            /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
            nameSuffix?: string;
            /** @description Namespace sets the namespace that Kustomize adds to all resources */
            namespace?: string;
            /** @description Patches is a list of Kustomize patches */
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
            /** @description Replicas is a list of Kustomize Replicas override specifications */
            replicas?: {
              /** @description Number of replicas */
              count: number | string;
              /** @description Name of Deployment or StatefulSet */
              name: string;
            }[];
            /** @description Version controls which version of Kustomize to use for rendering manifests */
            version?: string;
          };
          /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
          path?: string;
          /** @description Plugin holds config management plugin specific options */
          plugin?: {
            /** @description Env is a list of environment variable entries */
            env?: {
              /** @description Name is the name of the variable, usually expressed in uppercase */
              name: string;
              /** @description Value is the value of the variable */
              value: string;
            }[];
            name?: string;
            parameters?: {
              /** @description Array is the value of an array type parameter. */
              array?: string[];
              /** @description Map is the value of a map type parameter. */
              map?: {
                [key: string]: string;
              };
              /** @description Name is the name identifying a parameter. */
              name?: string;
              /** @description String_ is the value of a string type parameter. */
              string?: string;
            }[];
          };
          /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
          ref?: string;
          /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
          repoURL: string;
          /** @description TargetRevision defines the revision of the source to sync the application to.
           *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
           *     In case of Helm, this is a semver tag for the Chart's version. */
          targetRevision?: string;
        }[];
      }[];
      /**
       * Format: date-time
       * @description ObservedAt indicates when the application state was updated without querying latest git state
       *     Deprecated: controller no longer updates ObservedAt field
       */
      observedAt?: string;
      /** @description OperationState contains information about any ongoing operations, such as a sync */
      operationState?: {
        /**
         * Format: date-time
         * @description FinishedAt contains time of operation completion
         */
        finishedAt?: string;
        /** @description Message holds any pertinent messages when attempting to perform operation (typically errors). */
        message?: string;
        /** @description Operation is the original requested operation */
        operation: {
          /** @description Info is a list of informational items for this operation */
          info?: {
            name: string;
            value: string;
          }[];
          /** @description InitiatedBy contains information about who initiated the operations */
          initiatedBy?: {
            /** @description Automated is set to true if operation was initiated automatically by the application controller. */
            automated?: boolean;
            /** @description Username contains the name of a user who started operation */
            username?: string;
          };
          /** @description Retry controls the strategy to apply if a sync fails */
          retry?: {
            /** @description Backoff controls how to backoff on subsequent retries of failed syncs */
            backoff?: {
              /** @description Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h") */
              duration?: string;
              /**
               * Format: int64
               * @description Factor is a factor to multiply the base duration after each failed retry
               */
              factor?: number;
              /** @description MaxDuration is the maximum amount of time allowed for the backoff strategy */
              maxDuration?: string;
            };
            /**
             * Format: int64
             * @description Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
             */
            limit?: number;
          };
          /** @description Sync contains parameters for the operation */
          sync?: {
            /**
             * Format: int64
             * @description SelfHealAttemptsCount contains the number of auto-heal attempts
             */
            autoHealAttemptsCount?: number;
            /** @description DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync */
            dryRun?: boolean;
            /** @description Manifests is an optional field that overrides sync source with a local directory for development */
            manifests?: string[];
            /** @description Prune specifies to delete resources from the cluster that are no longer tracked in git */
            prune?: boolean;
            /** @description Resources describes which resources shall be part of the sync */
            resources?: {
              group?: string;
              kind: string;
              name: string;
              namespace?: string;
            }[];
            /** @description Revision is the revision (Git) or chart version (Helm) which to sync the application to
             *     If omitted, will use the revision specified in app spec. */
            revision?: string;
            /** @description Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to
             *     If omitted, will use the revision specified in app spec. */
            revisions?: string[];
            /** @description Source overrides the source definition set in the application.
             *     This is typically set in a Rollback operation and is nil during a Sync operation */
            source?: {
              /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
              chart?: string;
              /** @description Directory holds path/directory specific options */
              directory?: {
                /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
                exclude?: string;
                /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
                include?: string;
                /** @description Jsonnet holds options specific to Jsonnet */
                jsonnet?: {
                  /** @description ExtVars is a list of Jsonnet External Variables */
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  /** @description Additional library search dirs */
                  libs?: string[];
                  /** @description TLAS is a list of Jsonnet Top-level Arguments */
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                /** @description Recurse specifies whether to scan a directory recursively for manifests */
                recurse?: boolean;
              };
              /** @description Helm holds helm specific options */
              helm?: {
                /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
                 *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
                apiVersions?: string[];
                /** @description FileParameters are file parameters to the helm template */
                fileParameters?: {
                  /** @description Name is the name of the Helm parameter */
                  name?: string;
                  /** @description Path is the path to the file containing the values for the Helm parameter */
                  path?: string;
                }[];
                /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
                ignoreMissingValueFiles?: boolean;
                /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
                 *     uses the Kubernetes version of the target cluster. */
                kubeVersion?: string;
                /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
                namespace?: string;
                /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
                parameters?: {
                  /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                  forceString?: boolean;
                  /** @description Name is the name of the Helm parameter */
                  name?: string;
                  /** @description Value is the value for the Helm parameter */
                  value?: string;
                }[];
                /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
                passCredentials?: boolean;
                /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
                releaseName?: string;
                /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
                skipCrds?: boolean;
                /** @description ValuesFiles is a list of Helm value files to use when generating a template */
                valueFiles?: string[];
                /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
                values?: string;
                /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
                valuesObject?: Record<string, never>;
                /** @description Version is the Helm version to use for templating ("3") */
                version?: string;
              };
              /** @description Kustomize holds kustomize specific options */
              kustomize?: {
                /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
                 *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
                apiVersions?: string[];
                /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
                commonAnnotations?: {
                  [key: string]: string;
                };
                /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
                commonAnnotationsEnvsubst?: boolean;
                /** @description CommonLabels is a list of additional labels to add to rendered manifests */
                commonLabels?: {
                  [key: string]: string;
                };
                /** @description Components specifies a list of kustomize components to add to the kustomization before building */
                components?: string[];
                /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
                forceCommonAnnotations?: boolean;
                /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
                forceCommonLabels?: boolean;
                /** @description Images is a list of Kustomize image override specifications */
                images?: string[];
                /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
                 *     uses the Kubernetes version of the target cluster. */
                kubeVersion?: string;
                /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
                labelWithoutSelector?: boolean;
                /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
                namePrefix?: string;
                /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
                nameSuffix?: string;
                /** @description Namespace sets the namespace that Kustomize adds to all resources */
                namespace?: string;
                /** @description Patches is a list of Kustomize patches */
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
                /** @description Replicas is a list of Kustomize Replicas override specifications */
                replicas?: {
                  /** @description Number of replicas */
                  count: number | string;
                  /** @description Name of Deployment or StatefulSet */
                  name: string;
                }[];
                /** @description Version controls which version of Kustomize to use for rendering manifests */
                version?: string;
              };
              /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
              path?: string;
              /** @description Plugin holds config management plugin specific options */
              plugin?: {
                /** @description Env is a list of environment variable entries */
                env?: {
                  /** @description Name is the name of the variable, usually expressed in uppercase */
                  name: string;
                  /** @description Value is the value of the variable */
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  /** @description Array is the value of an array type parameter. */
                  array?: string[];
                  /** @description Map is the value of a map type parameter. */
                  map?: {
                    [key: string]: string;
                  };
                  /** @description Name is the name identifying a parameter. */
                  name?: string;
                  /** @description String_ is the value of a string type parameter. */
                  string?: string;
                }[];
              };
              /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
              ref?: string;
              /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
              repoURL: string;
              /** @description TargetRevision defines the revision of the source to sync the application to.
               *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
               *     In case of Helm, this is a semver tag for the Chart's version. */
              targetRevision?: string;
            };
            /** @description Sources overrides the source definition set in the application.
             *     This is typically set in a Rollback operation and is nil during a Sync operation */
            sources?: {
              /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
              chart?: string;
              /** @description Directory holds path/directory specific options */
              directory?: {
                /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
                exclude?: string;
                /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
                include?: string;
                /** @description Jsonnet holds options specific to Jsonnet */
                jsonnet?: {
                  /** @description ExtVars is a list of Jsonnet External Variables */
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  /** @description Additional library search dirs */
                  libs?: string[];
                  /** @description TLAS is a list of Jsonnet Top-level Arguments */
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                /** @description Recurse specifies whether to scan a directory recursively for manifests */
                recurse?: boolean;
              };
              /** @description Helm holds helm specific options */
              helm?: {
                /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
                 *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
                apiVersions?: string[];
                /** @description FileParameters are file parameters to the helm template */
                fileParameters?: {
                  /** @description Name is the name of the Helm parameter */
                  name?: string;
                  /** @description Path is the path to the file containing the values for the Helm parameter */
                  path?: string;
                }[];
                /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
                ignoreMissingValueFiles?: boolean;
                /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
                 *     uses the Kubernetes version of the target cluster. */
                kubeVersion?: string;
                /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
                namespace?: string;
                /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
                parameters?: {
                  /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                  forceString?: boolean;
                  /** @description Name is the name of the Helm parameter */
                  name?: string;
                  /** @description Value is the value for the Helm parameter */
                  value?: string;
                }[];
                /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
                passCredentials?: boolean;
                /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
                releaseName?: string;
                /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
                skipCrds?: boolean;
                /** @description ValuesFiles is a list of Helm value files to use when generating a template */
                valueFiles?: string[];
                /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
                values?: string;
                /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
                valuesObject?: Record<string, never>;
                /** @description Version is the Helm version to use for templating ("3") */
                version?: string;
              };
              /** @description Kustomize holds kustomize specific options */
              kustomize?: {
                /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
                 *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
                apiVersions?: string[];
                /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
                commonAnnotations?: {
                  [key: string]: string;
                };
                /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
                commonAnnotationsEnvsubst?: boolean;
                /** @description CommonLabels is a list of additional labels to add to rendered manifests */
                commonLabels?: {
                  [key: string]: string;
                };
                /** @description Components specifies a list of kustomize components to add to the kustomization before building */
                components?: string[];
                /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
                forceCommonAnnotations?: boolean;
                /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
                forceCommonLabels?: boolean;
                /** @description Images is a list of Kustomize image override specifications */
                images?: string[];
                /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
                 *     uses the Kubernetes version of the target cluster. */
                kubeVersion?: string;
                /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
                labelWithoutSelector?: boolean;
                /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
                namePrefix?: string;
                /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
                nameSuffix?: string;
                /** @description Namespace sets the namespace that Kustomize adds to all resources */
                namespace?: string;
                /** @description Patches is a list of Kustomize patches */
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
                /** @description Replicas is a list of Kustomize Replicas override specifications */
                replicas?: {
                  /** @description Number of replicas */
                  count: number | string;
                  /** @description Name of Deployment or StatefulSet */
                  name: string;
                }[];
                /** @description Version controls which version of Kustomize to use for rendering manifests */
                version?: string;
              };
              /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
              path?: string;
              /** @description Plugin holds config management plugin specific options */
              plugin?: {
                /** @description Env is a list of environment variable entries */
                env?: {
                  /** @description Name is the name of the variable, usually expressed in uppercase */
                  name: string;
                  /** @description Value is the value of the variable */
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  /** @description Array is the value of an array type parameter. */
                  array?: string[];
                  /** @description Map is the value of a map type parameter. */
                  map?: {
                    [key: string]: string;
                  };
                  /** @description Name is the name identifying a parameter. */
                  name?: string;
                  /** @description String_ is the value of a string type parameter. */
                  string?: string;
                }[];
              };
              /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
              ref?: string;
              /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
              repoURL: string;
              /** @description TargetRevision defines the revision of the source to sync the application to.
               *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
               *     In case of Helm, this is a semver tag for the Chart's version. */
              targetRevision?: string;
            }[];
            /** @description SyncOptions provide per-sync sync-options, e.g. Validate=false */
            syncOptions?: string[];
            /** @description SyncStrategy describes how to perform the sync */
            syncStrategy?: {
              /** @description Apply will perform a `kubectl apply` to perform the sync. */
              apply?: {
                /** @description Force indicates whether or not to supply the --force flag to `kubectl apply`.
                 *     The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
                 *     retried for 5 times. */
                force?: boolean;
              };
              /** @description Hook will submit any referenced resources to perform the sync. This is the default strategy */
              hook?: {
                /** @description Force indicates whether or not to supply the --force flag to `kubectl apply`.
                 *     The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
                 *     retried for 5 times. */
                force?: boolean;
              };
            };
          };
        };
        /** @description Phase is the current phase of the operation */
        phase: string;
        /**
         * Format: int64
         * @description RetryCount contains time of operation retries
         */
        retryCount?: number;
        /**
         * Format: date-time
         * @description StartedAt contains time of operation start
         */
        startedAt: string;
        /** @description SyncResult is the result of a Sync operation */
        syncResult?: {
          /** @description ManagedNamespaceMetadata contains the current sync state of managed namespace metadata */
          managedNamespaceMetadata?: {
            annotations?: {
              [key: string]: string;
            };
            labels?: {
              [key: string]: string;
            };
          };
          /** @description Resources contains a list of sync result items for each individual resource in a sync operation */
          resources?: {
            /** @description Group specifies the API group of the resource */
            group: string;
            /** @description HookPhase contains the state of any operation associated with this resource OR hook
             *     This can also contain values for non-hook resources. */
            hookPhase?: string;
            /** @description HookType specifies the type of the hook. Empty for non-hook resources */
            hookType?: string;
            /** @description Kind specifies the API kind of the resource */
            kind: string;
            /** @description Message contains an informational or error message for the last sync OR operation */
            message?: string;
            /** @description Name specifies the name of the resource */
            name: string;
            /** @description Namespace specifies the target namespace of the resource */
            namespace: string;
            /** @description Status holds the final result of the sync. Will be empty if the resources is yet to be applied/pruned and is always zero-value for hooks */
            status?: string;
            /** @description SyncPhase indicates the particular phase of the sync that this result was acquired in */
            syncPhase?: string;
            /** @description Version specifies the API version of the resource */
            version: string;
          }[];
          /** @description Revision holds the revision this sync operation was performed to */
          revision: string;
          /** @description Revisions holds the revision this sync operation was performed for respective indexed source in sources field */
          revisions?: string[];
          /** @description Source records the application source information of the sync, used for comparing auto-sync */
          source?: {
            /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
            chart?: string;
            /** @description Directory holds path/directory specific options */
            directory?: {
              /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
              exclude?: string;
              /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
              include?: string;
              /** @description Jsonnet holds options specific to Jsonnet */
              jsonnet?: {
                /** @description ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                /** @description Additional library search dirs */
                libs?: string[];
                /** @description TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              /** @description Recurse specifies whether to scan a directory recursively for manifests */
              recurse?: boolean;
            };
            /** @description Helm holds helm specific options */
            helm?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Path is the path to the file containing the values for the Helm parameter */
                path?: string;
              }[];
              /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
              ignoreMissingValueFiles?: boolean;
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
              namespace?: string;
              /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
              parameters?: {
                /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Value is the value for the Helm parameter */
                value?: string;
              }[];
              /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
              passCredentials?: boolean;
              /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
              releaseName?: string;
              /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
              skipCrds?: boolean;
              /** @description ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];
              /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
              values?: string;
              /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
              valuesObject?: Record<string, never>;
              /** @description Version is the Helm version to use for templating ("3") */
              version?: string;
            };
            /** @description Kustomize holds kustomize specific options */
            kustomize?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
              commonAnnotations?: {
                [key: string]: string;
              };
              /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
              commonAnnotationsEnvsubst?: boolean;
              /** @description CommonLabels is a list of additional labels to add to rendered manifests */
              commonLabels?: {
                [key: string]: string;
              };
              /** @description Components specifies a list of kustomize components to add to the kustomization before building */
              components?: string[];
              /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
              forceCommonAnnotations?: boolean;
              /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
              forceCommonLabels?: boolean;
              /** @description Images is a list of Kustomize image override specifications */
              images?: string[];
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
              labelWithoutSelector?: boolean;
              /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
              namePrefix?: string;
              /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
              nameSuffix?: string;
              /** @description Namespace sets the namespace that Kustomize adds to all resources */
              namespace?: string;
              /** @description Patches is a list of Kustomize patches */
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
              /** @description Replicas is a list of Kustomize Replicas override specifications */
              replicas?: {
                /** @description Number of replicas */
                count: number | string;
                /** @description Name of Deployment or StatefulSet */
                name: string;
              }[];
              /** @description Version controls which version of Kustomize to use for rendering manifests */
              version?: string;
            };
            /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
            path?: string;
            /** @description Plugin holds config management plugin specific options */
            plugin?: {
              /** @description Env is a list of environment variable entries */
              env?: {
                /** @description Name is the name of the variable, usually expressed in uppercase */
                name: string;
                /** @description Value is the value of the variable */
                value: string;
              }[];
              name?: string;
              parameters?: {
                /** @description Array is the value of an array type parameter. */
                array?: string[];
                /** @description Map is the value of a map type parameter. */
                map?: {
                  [key: string]: string;
                };
                /** @description Name is the name identifying a parameter. */
                name?: string;
                /** @description String_ is the value of a string type parameter. */
                string?: string;
              }[];
            };
            /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
            ref?: string;
            /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
            repoURL: string;
            /** @description TargetRevision defines the revision of the source to sync the application to.
             *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
             *     In case of Helm, this is a semver tag for the Chart's version. */
            targetRevision?: string;
          };
          /** @description Source records the application source information of the sync, used for comparing auto-sync */
          sources?: {
            /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
            chart?: string;
            /** @description Directory holds path/directory specific options */
            directory?: {
              /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
              exclude?: string;
              /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
              include?: string;
              /** @description Jsonnet holds options specific to Jsonnet */
              jsonnet?: {
                /** @description ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                /** @description Additional library search dirs */
                libs?: string[];
                /** @description TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              /** @description Recurse specifies whether to scan a directory recursively for manifests */
              recurse?: boolean;
            };
            /** @description Helm holds helm specific options */
            helm?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Path is the path to the file containing the values for the Helm parameter */
                path?: string;
              }[];
              /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
              ignoreMissingValueFiles?: boolean;
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
              namespace?: string;
              /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
              parameters?: {
                /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Value is the value for the Helm parameter */
                value?: string;
              }[];
              /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
              passCredentials?: boolean;
              /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
              releaseName?: string;
              /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
              skipCrds?: boolean;
              /** @description ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];
              /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
              values?: string;
              /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
              valuesObject?: Record<string, never>;
              /** @description Version is the Helm version to use for templating ("3") */
              version?: string;
            };
            /** @description Kustomize holds kustomize specific options */
            kustomize?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
              commonAnnotations?: {
                [key: string]: string;
              };
              /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
              commonAnnotationsEnvsubst?: boolean;
              /** @description CommonLabels is a list of additional labels to add to rendered manifests */
              commonLabels?: {
                [key: string]: string;
              };
              /** @description Components specifies a list of kustomize components to add to the kustomization before building */
              components?: string[];
              /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
              forceCommonAnnotations?: boolean;
              /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
              forceCommonLabels?: boolean;
              /** @description Images is a list of Kustomize image override specifications */
              images?: string[];
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
              labelWithoutSelector?: boolean;
              /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
              namePrefix?: string;
              /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
              nameSuffix?: string;
              /** @description Namespace sets the namespace that Kustomize adds to all resources */
              namespace?: string;
              /** @description Patches is a list of Kustomize patches */
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
              /** @description Replicas is a list of Kustomize Replicas override specifications */
              replicas?: {
                /** @description Number of replicas */
                count: number | string;
                /** @description Name of Deployment or StatefulSet */
                name: string;
              }[];
              /** @description Version controls which version of Kustomize to use for rendering manifests */
              version?: string;
            };
            /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
            path?: string;
            /** @description Plugin holds config management plugin specific options */
            plugin?: {
              /** @description Env is a list of environment variable entries */
              env?: {
                /** @description Name is the name of the variable, usually expressed in uppercase */
                name: string;
                /** @description Value is the value of the variable */
                value: string;
              }[];
              name?: string;
              parameters?: {
                /** @description Array is the value of an array type parameter. */
                array?: string[];
                /** @description Map is the value of a map type parameter. */
                map?: {
                  [key: string]: string;
                };
                /** @description Name is the name identifying a parameter. */
                name?: string;
                /** @description String_ is the value of a string type parameter. */
                string?: string;
              }[];
            };
            /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
            ref?: string;
            /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
            repoURL: string;
            /** @description TargetRevision defines the revision of the source to sync the application to.
             *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
             *     In case of Helm, this is a semver tag for the Chart's version. */
            targetRevision?: string;
          }[];
        };
      };
      /**
       * Format: date-time
       * @description ReconciledAt indicates when the application state was reconciled using the latest git version
       */
      reconciledAt?: string;
      /** @description ResourceHealthSource indicates where the resource health status is stored: inline if not set or appTree */
      resourceHealthSource?: string;
      /** @description Resources is a list of Kubernetes resources managed by this application */
      resources?: {
        group?: string;
        /** @description HealthStatus contains information about the currently observed health state of an application or resource */
        health?: {
          /** @description Message is a human-readable informational message describing the health status */
          message?: string;
          /** @description Status holds the status code of the application or resource */
          status?: string;
        };
        hook?: boolean;
        kind?: string;
        name?: string;
        namespace?: string;
        requiresPruning?: boolean;
        /** @description SyncStatusCode is a type which represents possible comparison results */
        status?: string;
        /** Format: int64 */
        syncWave?: number;
        version?: string;
      }[];
      /** @description SourceType specifies the type of this application */
      sourceType?: string;
      /** @description SourceTypes specifies the type of the sources included in the application */
      sourceTypes?: string[];
      /** @description Summary contains a list of URLs and container images used by this application */
      summary?: {
        /** @description ExternalURLs holds all external URLs of application child resources. */
        externalURLs?: string[];
        /** @description Images holds all images of application child resources. */
        images?: string[];
      };
      /** @description Sync contains information about the application's current sync status */
      sync?: {
        /** @description ComparedTo contains information about what has been compared */
        comparedTo?: {
          /** @description Destination is a reference to the application's destination used for comparison */
          destination: {
            /** @description Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set. */
            name?: string;
            /** @description Namespace specifies the target namespace for the application's resources.
             *     The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
            namespace?: string;
            /** @description Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set. */
            server?: string;
          };
          /** @description IgnoreDifferences is a reference to the application's ignored differences used for comparison */
          ignoreDifferences?: {
            group?: string;
            jqPathExpressions?: string[];
            jsonPointers?: string[];
            kind: string;
            /** @description ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the
             *     desired state defined in the SCM and won't be displayed in diffs */
            managedFieldsManagers?: string[];
            name?: string;
            namespace?: string;
          }[];
          /** @description Source is a reference to the application's source used for comparison */
          source?: {
            /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
            chart?: string;
            /** @description Directory holds path/directory specific options */
            directory?: {
              /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
              exclude?: string;
              /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
              include?: string;
              /** @description Jsonnet holds options specific to Jsonnet */
              jsonnet?: {
                /** @description ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                /** @description Additional library search dirs */
                libs?: string[];
                /** @description TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              /** @description Recurse specifies whether to scan a directory recursively for manifests */
              recurse?: boolean;
            };
            /** @description Helm holds helm specific options */
            helm?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Path is the path to the file containing the values for the Helm parameter */
                path?: string;
              }[];
              /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
              ignoreMissingValueFiles?: boolean;
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
              namespace?: string;
              /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
              parameters?: {
                /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Value is the value for the Helm parameter */
                value?: string;
              }[];
              /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
              passCredentials?: boolean;
              /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
              releaseName?: string;
              /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
              skipCrds?: boolean;
              /** @description ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];
              /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
              values?: string;
              /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
              valuesObject?: Record<string, never>;
              /** @description Version is the Helm version to use for templating ("3") */
              version?: string;
            };
            /** @description Kustomize holds kustomize specific options */
            kustomize?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
              commonAnnotations?: {
                [key: string]: string;
              };
              /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
              commonAnnotationsEnvsubst?: boolean;
              /** @description CommonLabels is a list of additional labels to add to rendered manifests */
              commonLabels?: {
                [key: string]: string;
              };
              /** @description Components specifies a list of kustomize components to add to the kustomization before building */
              components?: string[];
              /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
              forceCommonAnnotations?: boolean;
              /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
              forceCommonLabels?: boolean;
              /** @description Images is a list of Kustomize image override specifications */
              images?: string[];
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
              labelWithoutSelector?: boolean;
              /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
              namePrefix?: string;
              /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
              nameSuffix?: string;
              /** @description Namespace sets the namespace that Kustomize adds to all resources */
              namespace?: string;
              /** @description Patches is a list of Kustomize patches */
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
              /** @description Replicas is a list of Kustomize Replicas override specifications */
              replicas?: {
                /** @description Number of replicas */
                count: number | string;
                /** @description Name of Deployment or StatefulSet */
                name: string;
              }[];
              /** @description Version controls which version of Kustomize to use for rendering manifests */
              version?: string;
            };
            /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
            path?: string;
            /** @description Plugin holds config management plugin specific options */
            plugin?: {
              /** @description Env is a list of environment variable entries */
              env?: {
                /** @description Name is the name of the variable, usually expressed in uppercase */
                name: string;
                /** @description Value is the value of the variable */
                value: string;
              }[];
              name?: string;
              parameters?: {
                /** @description Array is the value of an array type parameter. */
                array?: string[];
                /** @description Map is the value of a map type parameter. */
                map?: {
                  [key: string]: string;
                };
                /** @description Name is the name identifying a parameter. */
                name?: string;
                /** @description String_ is the value of a string type parameter. */
                string?: string;
              }[];
            };
            /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
            ref?: string;
            /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
            repoURL: string;
            /** @description TargetRevision defines the revision of the source to sync the application to.
             *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
             *     In case of Helm, this is a semver tag for the Chart's version. */
            targetRevision?: string;
          };
          /** @description Sources is a reference to the application's multiple sources used for comparison */
          sources?: {
            /** @description Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. */
            chart?: string;
            /** @description Directory holds path/directory specific options */
            directory?: {
              /** @description Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation */
              exclude?: string;
              /** @description Include contains a glob pattern to match paths against that should be explicitly included during manifest generation */
              include?: string;
              /** @description Jsonnet holds options specific to Jsonnet */
              jsonnet?: {
                /** @description ExtVars is a list of Jsonnet External Variables */
                extVars?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
                /** @description Additional library search dirs */
                libs?: string[];
                /** @description TLAS is a list of Jsonnet Top-level Arguments */
                tlas?: {
                  code?: boolean;
                  name: string;
                  value: string;
                }[];
              };
              /** @description Recurse specifies whether to scan a directory recursively for manifests */
              recurse?: boolean;
            };
            /** @description Helm holds helm specific options */
            helm?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description FileParameters are file parameters to the helm template */
              fileParameters?: {
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Path is the path to the file containing the values for the Helm parameter */
                path?: string;
              }[];
              /** @description IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values */
              ignoreMissingValueFiles?: boolean;
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace. */
              namespace?: string;
              /** @description Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation */
              parameters?: {
                /** @description ForceString determines whether to tell Helm to interpret booleans and numbers as strings */
                forceString?: boolean;
                /** @description Name is the name of the Helm parameter */
                name?: string;
                /** @description Value is the value for the Helm parameter */
                value?: string;
              }[];
              /** @description PassCredentials pass credentials to all domains (Helm's --pass-credentials) */
              passCredentials?: boolean;
              /** @description ReleaseName is the Helm release name to use. If omitted it will use the application name */
              releaseName?: string;
              /** @description SkipCrds skips custom resource definition installation step (Helm's --skip-crds) */
              skipCrds?: boolean;
              /** @description ValuesFiles is a list of Helm value files to use when generating a template */
              valueFiles?: string[];
              /** @description Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other. */
              values?: string;
              /** @description ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values. */
              valuesObject?: Record<string, never>;
              /** @description Version is the Helm version to use for templating ("3") */
              version?: string;
            };
            /** @description Kustomize holds kustomize specific options */
            kustomize?: {
              /** @description APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
               *     Argo CD uses the API versions of the target cluster. The format is [group/]version/kind. */
              apiVersions?: string[];
              /** @description CommonAnnotations is a list of additional annotations to add to rendered manifests */
              commonAnnotations?: {
                [key: string]: string;
              };
              /** @description CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values */
              commonAnnotationsEnvsubst?: boolean;
              /** @description CommonLabels is a list of additional labels to add to rendered manifests */
              commonLabels?: {
                [key: string]: string;
              };
              /** @description Components specifies a list of kustomize components to add to the kustomization before building */
              components?: string[];
              /** @description ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps */
              forceCommonAnnotations?: boolean;
              /** @description ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps */
              forceCommonLabels?: boolean;
              /** @description Images is a list of Kustomize image override specifications */
              images?: string[];
              /** @description KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
               *     uses the Kubernetes version of the target cluster. */
              kubeVersion?: string;
              /** @description LabelWithoutSelector specifies whether to apply common labels to resource selectors or not */
              labelWithoutSelector?: boolean;
              /** @description NamePrefix is a prefix appended to resources for Kustomize apps */
              namePrefix?: string;
              /** @description NameSuffix is a suffix appended to resources for Kustomize apps */
              nameSuffix?: string;
              /** @description Namespace sets the namespace that Kustomize adds to all resources */
              namespace?: string;
              /** @description Patches is a list of Kustomize patches */
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
              /** @description Replicas is a list of Kustomize Replicas override specifications */
              replicas?: {
                /** @description Number of replicas */
                count: number | string;
                /** @description Name of Deployment or StatefulSet */
                name: string;
              }[];
              /** @description Version controls which version of Kustomize to use for rendering manifests */
              version?: string;
            };
            /** @description Path is a directory path within the Git repository, and is only valid for applications sourced from Git. */
            path?: string;
            /** @description Plugin holds config management plugin specific options */
            plugin?: {
              /** @description Env is a list of environment variable entries */
              env?: {
                /** @description Name is the name of the variable, usually expressed in uppercase */
                name: string;
                /** @description Value is the value of the variable */
                value: string;
              }[];
              name?: string;
              parameters?: {
                /** @description Array is the value of an array type parameter. */
                array?: string[];
                /** @description Map is the value of a map type parameter. */
                map?: {
                  [key: string]: string;
                };
                /** @description Name is the name identifying a parameter. */
                name?: string;
                /** @description String_ is the value of a string type parameter. */
                string?: string;
              }[];
            };
            /** @description Ref is reference to another source within sources field. This field will not be used if used with a `source` tag. */
            ref?: string;
            /** @description RepoURL is the URL to the repository (Git or Helm) that contains the application manifests */
            repoURL: string;
            /** @description TargetRevision defines the revision of the source to sync the application to.
             *     In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
             *     In case of Helm, this is a semver tag for the Chart's version. */
            targetRevision?: string;
          }[];
        };
        /** @description Revision contains information about the revision the comparison has been performed to */
        revision?: string;
        /** @description Revisions contains information about the revisions of multiple sources the comparison has been performed to */
        revisions?: string[];
        /** @description Status is the sync state of the comparison */
        status: string;
      };
    };
  };
}
