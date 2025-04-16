import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataformRepositoryV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDataformRepositoryV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDataformRepositoryV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "dataform.cnrm.cloud.google.com/v1alpha1";
    kind?: "DataformRepository";
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
    spec: {
      /** @description Optional. The repository's user-friendly name. */
      displayName?: string;
      /** @description Optional. If set, configures this repository to be linked to a Git remote. */
      gitRemoteSettings?: {
        /** @description The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format projects/* /secrets/* /versions/*. */
        authenticationTokenSecretVersionRef?: {
          /** @description  If provided must be in the format `projects/*\/secrets/*\/versions/*`. */
          external?: string;
          /** @description The `name` field of a `SecretManagerSecretVersion` resource. */
          name?: string;
          /** @description The `metadata.namespace` field of a `SecretManagerSecretVersion` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The Git remote's default branch name. */
        defaultBranch: string;
        /** @description Authentication fields for remote uris using SSH protocol. */
        sshAuthenticationConfig?: {
          /** @description Content of a public SSH key to verify an identity of a remote Git host. */
          hostPublicKey: string;
          /** @description The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/*\/secrets/*\/versions/* . */
          userPrivateKeySecretVersionRef: {
            /** @description  If provided must be in the format `projects/*\/secrets/*\/versions/*`. */
            external?: string;
            /** @description The `name` field of a `SecretManagerSecretVersion` resource. */
            name?: string;
            /** @description The `metadata.namespace` field of a `SecretManagerSecretVersion` resource. */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description The Git remote's URL. */
        url: string;
      };
      /** @description Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. */
      npmrcEnvironmentVariablesSecretVersionRef?: {
        /** @description  If provided must be in the format `projects/*\/secrets/*\/versions/*`. */
        external?: string;
        /** @description The `name` field of a `SecretManagerSecretVersion` resource. */
        name?: string;
        /** @description The `metadata.namespace` field of a `SecretManagerSecretVersion` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. A reference to the region. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional. The service account reference to run workflow invocations under. */
      serviceAccountRef?: {
        /** @description The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. */
      setAuthenticatedUserAdmin?: boolean;
      /** @description Optional. If set, fields of workspaceCompilationOverrides override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. */
      workspaceCompilationOverrides?: {
        /** @description Optional. The default database (Google Cloud project ID). */
        defaultDatabase?: string;
        /** @description Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
        schemaSuffix?: string;
        /** @description Optional. The prefix that should be prepended to all table names. */
        tablePrefix?: string;
      };
    };
    status?: {
      /** @description Conditions represent the latest available observations of the DataformRepository's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /** @description A unique specifier for the DataformReposity resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: Record<string, never>;
    };
  };
}
