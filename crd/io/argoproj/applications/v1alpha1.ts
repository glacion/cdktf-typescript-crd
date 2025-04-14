import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApplicationV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesApplicationV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "argoproj.io/v1alpha1", kind: "Application", ...manifest }, ...config });
  }
}
export interface KubernetesApplicationV1alpha1Config extends ManifestConfig {
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
  };
}
