import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesContainerAttachedClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesContainerAttachedClusterV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "containerattached.cnrm.cloud.google.com/v1beta1",
        kind: "ContainerAttachedCluster",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesContainerAttachedClusterV1beta1Config extends ManifestConfig {
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
    /** @description ContainerAttachedCluster is the Schema for the ContainerAttachedCluster API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description ContainerAttachedClusterSpec defines the desired state of ContainerAttachedCluster */
      spec: {
        /** @description Optional. Annotations on the cluster.
         *
         *      This field has the same restrictions as Kubernetes annotations.
         *      The total size of all keys and values combined is limited to 256k.
         *      Key can have 2 segments: prefix (optional) and name (required),
         *      separated by a slash (/).
         *      Prefix must be a DNS subdomain.
         *      Name must be 63 characters or less, begin and end with alphanumerics,
         *      with dashes (-), underscores (_), dots (.), and alphanumerics between. */
        annotations?: {
          [key: string]: string;
        };
        /** @description Optional. Configuration related to the cluster RBAC settings. */
        authorization?: {
          /** @description Optional. Users that can perform operations as a cluster admin. A managed
           *      ClusterRoleBinding will be created to grant the `cluster-admin` ClusterRole
           *      to the users. Up to ten admin users can be provided.
           *
           *      For more info on RBAC, see
           *      https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles */
          adminUsers?: string[];
        };
        /** @description Optional. Binary Authorization configuration for this cluster. */
        binaryAuthorization?: {
          /** @description Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. */
          evaluationMode?: string;
        };
        /** @description Optional. Policy to determine what flags to send on delete. */
        deletionPolicy?: string;
        /** @description Optional. A human readable description of this Attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. */
        description?: string;
        /** @description Immutable. The Kubernetes distribution of the underlying attached cluster.
         *
         *      Supported values: ["eks", "aks", "generic"]. */
        distribution: string;
        /** @description Required. Fleet configuration. */
        fleet: {
          /** @description Output only. The name of the managed Hub Membership resource associated to
           *      this cluster.
           *
           *      Membership names are formatted as
           *      `projects/<project-number>/locations/global/membership/<cluster-id>`. */
          membership?: string;
          /** @description The id of the Fleet host project where this cluster will be registered. */
          projectRef: {
            /** @description The project of the fleet. Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
            external?: string;
            /** @description Name of the project resource. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the project resource. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. The location for the resource. */
        location: string;
        /** @description Optional. Logging configuration for this cluster. */
        loggingConfig?: {
          /** @description The configuration of the logging components; */
          componentConfig?: {
            /** @description The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. */
            enableComponents?: string[];
          };
        };
        /** @description Optional. Monitoring configuration for this cluster. */
        monitoringConfig?: {
          /** @description Enable Google Cloud Managed Service for Prometheus in the cluster. */
          managedPrometheusConfig?: {
            /** @description Enable Managed Collection. */
            enabled?: boolean;
          };
        };
        /** @description Required. OpenID Connect (OIDC) discovery information of the target cluster.
         *
         *     Kubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster
         *     API server. This field indicates how GCP services	validate KSA tokens in order
         *     to allow system workloads (such as GKE Connect and telemetry agents) to
         *     authenticate back to GCP.
         *
         *     Both clusters with public and private issuer URLs are supported.
         *     Clusters with public issuers only need to specify the 'issuerUrl' field
         *     while clusters with private issuers need to provide both 'issuerUrl' and 'jwks'. */
        oidcConfig: {
          /** @description Immutable. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`. */
          issuerUrl: string;
          /**
           * Format: byte
           * @description Immutable, Optional. OIDC verification keys in JWKS format (RFC 7517).
           *      It contains a list of OIDC verification keys that can be used to verify
           *      OIDC JWTs.
           *
           *      This field is required for cluster that doesn't have a publicly available
           *      discovery endpoint. When provided, it will be directly used
           *      to verify the OIDC JWT asserted by the IDP.
           */
          jwks?: string;
        };
        /** @description Required. The platform version for the cluster (e.g. `1.30.0-gke.1`). */
        platformVersion: string;
        /** @description The ID of the project in which the resource belongs. */
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
        /** @description Optional. The ContainerAttachedCluster name. If not given, the metadata.name will be used. */
        resourceID?: string;
      };
      /** @description ContainerAttachedClusterStatus defines the config connector machine state of ContainerAttachedCluster */
      status?: {
        /** @description The region where this cluster runs.
         *
         *      For EKS clusters, this is an AWS region. For AKS clusters,
         *      this is an Azure region. */
        clusterRegion?: string;
        /** @description Conditions represent the latest available observations of the object's current state. */
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
        /** @description The time at which this cluster was registered. */
        createTime?: string;
        /** @description A set of errors found in the cluster. */
        errors?: {
          /** @description Human-friendly description of the error. */
          message?: string;
        }[];
        /** @description The Kubernetes version of the cluster. */
        kubernetesVersion?: string;
        /**
         * Format: int64
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
        /** @description ObservedState is the state of the resource as most recently observed in GCP. */
        observedState?: {
          /** @description Output only. The name of the managed Hub Membership resource associated to
           *      this cluster.
           *
           *      Membership names are formatted as
           *      `projects/<project-number>/locations/global/membership/<cluster-id>`.
           *      This field mirrors the Spec.Fleet.Membership field. */
          fleetMembership?: string;
        };
        /** @description If set, there are currently changes in flight to the cluster. */
        reconciling?: boolean;
        /** @description The current state of the cluster. Possible values:	STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR,	DEGRADED. */
        state?: string;
        /** @description A globally unique identifier for the cluster. */
        uid?: string;
        /** @description The time at which this cluster was last updated. */
        updateTime?: string;
        /** @description Workload Identity settings. */
        workloadIdentityConfig?: {
          /** @description The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool. */
          identityProvider?: string;
          /** @description The OIDC issuer URL for this cluster. */
          issuerUri?: string;
          /** @description The Workload Identity Pool associated to the cluster. */
          workloadPool?: string;
        }[];
      };
    };
  };
}
