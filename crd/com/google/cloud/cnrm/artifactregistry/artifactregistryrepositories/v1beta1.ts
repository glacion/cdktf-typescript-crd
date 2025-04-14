import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesArtifactRegistryRepositoryV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesArtifactRegistryRepositoryV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "artifactregistry.cnrm.cloud.google.com/v1beta1",
        kind: "ArtifactRegistryRepository",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesArtifactRegistryRepositoryV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description Cleanup policies for this repository. Cleanup policies indicate when
         *     certain package versions can be automatically deleted.
         *     Map keys are policy IDs supplied by users during policy creation. They must
         *     unique within a repository and be under 128 characters in length. */
        cleanupPolicies?: {
          /** @description Policy action. Possible values: ["DELETE", "KEEP"]. */
          action?: string;
          /** @description Policy condition for matching versions. */
          condition?: {
            /** @description Match versions newer than a duration. */
            newerThan?: string;
            /** @description Match versions older than a duration. */
            olderThan?: string;
            /** @description Match versions by package prefix. Applied on any prefix match. */
            packageNamePrefixes?: string[];
            /** @description Match versions by tag prefix. Applied on any prefix match. */
            tagPrefixes?: string[];
            /** @description Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. */
            tagState?: string;
            /** @description Match versions by version name prefix. Applied on any prefix match. */
            versionNamePrefixes?: string[];
          };
          id: string;
          /** @description Policy condition for retaining a minimum number of versions. May only be
           *     specified with a Keep action. */
          mostRecentVersions?: {
            /** @description Minimum number of versions to keep. */
            keepCount?: number;
            /** @description Match versions by package prefix. Applied on any prefix match. */
            packageNamePrefixes?: string[];
          };
        }[];
        /** @description If true, the cleanup pipeline is prevented from deleting versions in this
         *     repository. */
        cleanupPolicyDryRun?: boolean;
        /** @description The user-provided description of the repository. */
        description?: string;
        /** @description Docker repository config contains repository level configuration for the repositories of docker type. */
        dockerConfig?: {
          /** @description The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created. */
          immutableTags?: boolean;
        };
        /** @description Immutable. The format of packages that are stored in the repository. Supported formats
         *     can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
         *     You can only create alpha formats if you are a member of the
         *     [alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access). */
        format: string;
        /** @description The customer managed encryption key that’s used to encrypt the
         *     contents of the Repository. */
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. The name of the location this repository is located in. */
        location: string;
        /** @description MavenRepositoryConfig is maven related repository details.
         *     Provides additional configuration details for repositories of the maven
         *     format type. */
        mavenConfig?: {
          /** @description Immutable. The repository with this flag will allow publishing the same
           *     snapshot versions. */
          allowSnapshotOverwrites?: boolean;
          /** @description Immutable. Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. */
          versionPolicy?: string;
        };
        /** @description Immutable. The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. */
        mode?: string;
        /** @description Immutable. Configuration specific for a Remote Repository. */
        remoteRepositoryConfig?: {
          /** @description Immutable. The description of the remote source. */
          description?: string;
          /** @description Immutable. Specific settings for a Docker remote repository. */
          dockerRepository?: {
            /** @description Immutable. Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. */
            publicRepository?: string;
          };
          /** @description Immutable. Specific settings for a Maven remote repository. */
          mavenRepository?: {
            /** @description Immutable. Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. */
            publicRepository?: string;
          };
          /** @description Immutable. Specific settings for an Npm remote repository. */
          npmRepository?: {
            /** @description Immutable. Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. */
            publicRepository?: string;
          };
          /** @description Immutable. Specific settings for a Python remote repository. */
          pythonRepository?: {
            /** @description Immutable. Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. */
            publicRepository?: string;
          };
        };
        /** @description Immutable. Optional. The repositoryId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Configuration specific for a Virtual Repository. */
        virtualRepositoryConfig?: {
          /** @description Policies that configure the upstream artifacts distributed by the Virtual
           *     Repository. Upstream policies cannot be set on a standard repository. */
          upstreamPolicies?: {
            /** @description The user-provided ID of the upstream policy. */
            id?: string;
            /** @description Entries with a greater priority value take precedence in the pull order. */
            priority?: number;
            /** @description A reference to the repository resource, for example:
             *     "projects/p1/locations/us-central1/repositories/repo1". */
            repositoryRef?: {
              /** @description Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
        };
      };
      status?: {
        /** @description Conditions represent the latest available observation of the resource's current state. */
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
        /** @description The time when the repository was created. */
        createTime?: string;
        /** @description The name of the repository, for example:
         *     "repo1". */
        name?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The time when the repository was last updated. */
        updateTime?: string;
      };
    };
  };
}
