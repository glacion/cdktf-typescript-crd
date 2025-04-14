import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAppProjectV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAppProjectV1alpha1Config) {
    super(scope, id, { manifest: { apiVersion: "argoproj.io/v1alpha1", kind: "AppProject", ...manifest }, ...config });
  }
}
export interface KubernetesAppProjectV1alpha1Config extends ManifestConfig {
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
      /** @description ClusterResourceBlacklist contains list of blacklisted cluster level resources */
      clusterResourceBlacklist?: {
        group: string;
        kind: string;
      }[];
      /** @description ClusterResourceWhitelist contains list of whitelisted cluster level resources */
      clusterResourceWhitelist?: {
        group: string;
        kind: string;
      }[];
      /** @description Description contains optional project description */
      description?: string;
      /** @description DestinationServiceAccounts holds information about the service accounts to be impersonated for the application sync operation for each destination. */
      destinationServiceAccounts?: {
        /** @description DefaultServiceAccount to be used for impersonation during the sync operation */
        defaultServiceAccount: string;
        /** @description Namespace specifies the target namespace for the application's resources. */
        namespace?: string;
        /** @description Server specifies the URL of the target cluster's Kubernetes control plane API. */
        server: string;
      }[];
      /** @description Destinations contains list of destinations available for deployment */
      destinations?: {
        /** @description Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set. */
        name?: string;
        /** @description Namespace specifies the target namespace for the application's resources.
         *     The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace */
        namespace?: string;
        /** @description Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set. */
        server?: string;
      }[];
      /** @description NamespaceResourceBlacklist contains list of blacklisted namespace level resources */
      namespaceResourceBlacklist?: {
        group: string;
        kind: string;
      }[];
      /** @description NamespaceResourceWhitelist contains list of whitelisted namespace level resources */
      namespaceResourceWhitelist?: {
        group: string;
        kind: string;
      }[];
      /** @description OrphanedResources specifies if controller should monitor orphaned resources of apps in this project */
      orphanedResources?: {
        /** @description Ignore contains a list of resources that are to be excluded from orphaned resources monitoring */
        ignore?: {
          group?: string;
          kind?: string;
          name?: string;
        }[];
        /** @description Warn indicates if warning condition should be created for apps which have orphaned resources */
        warn?: boolean;
      };
      /** @description PermitOnlyProjectScopedClusters determines whether destinations can only reference clusters which are project-scoped */
      permitOnlyProjectScopedClusters?: boolean;
      /** @description Roles are user defined RBAC roles associated with this project */
      roles?: {
        /** @description Description is a description of the role */
        description?: string;
        /** @description Groups are a list of OIDC group claims bound to this role */
        groups?: string[];
        /** @description JWTTokens are a list of generated JWT tokens bound to this role */
        jwtTokens?: {
          /** Format: int64 */
          exp?: number;
          /** Format: int64 */
          iat: number;
          id?: string;
        }[];
        /** @description Name is a name for this role */
        name: string;
        /** @description Policies Stores a list of casbin formatted strings that define access policies for the role in the project */
        policies?: string[];
      }[];
      /** @description SignatureKeys contains a list of PGP key IDs that commits in Git must be signed with in order to be allowed for sync */
      signatureKeys?: {
        /** @description The ID of the key in hexadecimal notation */
        keyID: string;
      }[];
      /** @description SourceNamespaces defines the namespaces application resources are allowed to be created in */
      sourceNamespaces?: string[];
      /** @description SourceRepos contains list of repository URLs which can be used for deployment */
      sourceRepos?: string[];
      /** @description SyncWindows controls when syncs can be run for apps in this project */
      syncWindows?: {
        /** @description Applications contains a list of applications that the window will apply to */
        applications?: string[];
        /** @description Clusters contains a list of clusters that the window will apply to */
        clusters?: string[];
        /** @description Duration is the amount of time the sync window will be open */
        duration?: string;
        /** @description Kind defines if the window allows or blocks syncs */
        kind?: string;
        /** @description ManualSync enables manual syncs when they would otherwise be blocked */
        manualSync?: boolean;
        /** @description Namespaces contains a list of namespaces that the window will apply to */
        namespaces?: string[];
        /** @description Schedule is the time the window will begin, specified in cron format */
        schedule?: string;
        /** @description TimeZone of the sync that will be applied to the schedule */
        timeZone?: string;
      }[];
    };
  };
}
