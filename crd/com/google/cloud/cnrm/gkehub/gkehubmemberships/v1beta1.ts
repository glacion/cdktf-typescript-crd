import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEHubMembershipV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKEHubMembershipV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "gkehub.cnrm.cloud.google.com/v1beta1", kind: "GKEHubMembership", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGKEHubMembershipV1beta1Config extends ManifestConfig {
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
  };
}
