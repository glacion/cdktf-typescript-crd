import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEHubMembershipV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGKEHubMembershipV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGKEHubMembershipV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "gkehub.cnrm.cloud.google.com/v1beta1";
    kind?: "GKEHubMembership";
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
      /** @description Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
      authority?: {
        /** @description Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity). */
        issuer?: string;
      };
      /** @description Description of this membership, limited to 63 characters. Must match the regex: `*` This field is present for legacy purposes. */
      description?: string;
      /** @description Optional. Endpoint information to reach this member. */
      endpoint?: {
        /** @description Optional. GKE-specific information. Only present if this Membership is a GKE cluster. */
        gkeCluster?: {
          resourceRef?: {
            /** @description Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
             *
             *     Allowed value: The `selfLink` field of a `ContainerCluster` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources: * Ensure that the cluster is exclusively registered to one and only one Hub Membership. * Propagate Workload Pool Information available in the Membership Authority field. * Ensure proper initial configuration of default Hub Features. */
        kubernetesResource?: {
          /** @description Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. */
          membershipCrManifest?: string;
          /** @description Optional. Options for Kubernetes resource generation. */
          resourceOptions?: {
            /** @description Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. */
            connectVersion?: string;
            /** @description Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16. */
            v1beta1Crd?: boolean;
          };
        };
      };
      /** @description Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object. */
      externalId?: string;
      /** @description Optional. The infrastructure type this Membership is running on. Possible values: INFRASTRUCTURE_TYPE_UNSPECIFIED, ON_PREM, MULTI_CLOUD */
      infrastructureType?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
    status?: {
      authority?: {
        /** @description Output only. An identity provider that reflects the `issuer` in the workload identity pool. */
        identityProvider?: string;
        /** @description Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in: {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API. */
        workloadIdentityPool?: string;
      };
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
      /**
       * Format: date-time
       * @description Output only. When the Membership was created.
       */
      createTime?: string;
      /**
       * Format: date-time
       * @description Output only. When the Membership was deleted.
       */
      deleteTime?: string;
      endpoint?: {
        /** @description Output only. Useful Kubernetes-specific metadata. */
        kubernetesMetadata?: {
          /** @description Output only. Kubernetes API server version string as reported by `/version`. */
          kubernetesApiServerVersion?: string;
          /**
           * Format: int64
           * @description Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.
           */
          memoryMb?: number;
          /**
           * Format: int64
           * @description Output only. Node count as reported by Kubernetes nodes resources.
           */
          nodeCount?: number;
          /** @description Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty. */
          nodeProviderId?: string;
          /**
           * Format: date-time
           * @description Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.
           */
          updateTime?: string;
          /**
           * Format: int64
           * @description Output only. vCPU count as reported by Kubernetes nodes resources.
           */
          vcpuCount?: number;
        };
        kubernetesResource?: {
          /** @description Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
          connectResources?: {
            /** @description Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
            clusterScoped?: boolean;
            /** @description YAML manifest of the resource. */
            manifest?: string;
          }[];
          /** @description Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
          membershipResources?: {
            /** @description Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
            clusterScoped?: boolean;
            /** @description YAML manifest of the resource. */
            manifest?: string;
          }[];
        };
      };
      /**
       * Format: date-time
       * @description Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.
       */
      lastConnectionTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. State of the Membership resource. */
      state?: {
        /** @description Output only. The current state of the Membership resource. Possible values: CODE_UNSPECIFIED, CREATING, READY, DELETING, UPDATING, SERVICE_UPDATING */
        code?: string;
      };
      /** @description Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. */
      uniqueId?: string;
      /**
       * Format: date-time
       * @description Output only. When the Membership was last updated.
       */
      updateTime?: string;
    };
  };
}
