import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEHubFeatureMembershipV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGKEHubFeatureMembershipV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGKEHubFeatureMembershipV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "gkehub.cnrm.cloud.google.com/v1beta1";
    kind?: "GKEHubFeatureMembership";
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
      /** @description Config Management-specific spec. */
      configmanagement?: {
        /** @description **DEPRECATED** Binauthz configuration for the cluster. This field will be ignored and should not be set. */
        binauthz?: {
          /** @description Whether binauthz is enabled in this cluster. */
          enabled?: boolean;
        };
        /** @description Config Sync configuration for the cluster. */
        configSync?: {
          git?: {
            gcpServiceAccountRef?: {
              /** @description The `email` field of an `IAMServiceAccount` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description URL for the HTTPS proxy to be used when communicating with the Git repo. */
            httpsProxy?: string;
            /** @description The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. */
            policyDir?: string;
            /** @description Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. */
            secretType?: string;
            /** @description The branch of the repository to sync from. Default: master. */
            syncBranch?: string;
            /** @description The URL of the Git repository to use as the source of truth. */
            syncRepo?: string;
            /** @description Git revision (tag or hash) to check out. Default HEAD. */
            syncRev?: string;
            /** @description Period in seconds between consecutive syncs. Default: 15. */
            syncWaitSecs?: string;
          };
          metricsGcpServiceAccountRef?: {
            /** @description The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          oci?: {
            gcpServiceAccountRef?: {
              /** @description The `email` field of an `IAMServiceAccount` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description The absolute path of the directory that contains the local resources. Default: the root directory of the image. */
            policyDir?: string;
            /** @description Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive. */
            secretType?: string;
            /** @description The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. */
            syncRepo?: string;
            /** @description Period in seconds(int64 format) between consecutive syncs. Default: 15. */
            syncWaitSecs?: string;
          };
          /** @description Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts. */
          preventDrift?: boolean;
          /** @description Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. */
          sourceFormat?: string;
          /** @description Set to true to stop syncing configurations for a single cluster. This field is only available on clusters using Config Sync auto-upgrades or on Config Sync version 1.20.0 or later. Defaults: false. */
          stopSyncing?: boolean;
        };
        /** @description Hierarchy Controller is no longer available. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead. */
        hierarchyController?: {
          /** @description Whether hierarchical resource quota is enabled in this cluster. */
          enableHierarchicalResourceQuota?: boolean;
          /** @description Whether pod tree labels are enabled in this cluster. */
          enablePodTreeLabels?: boolean;
          /** @description Whether Hierarchy Controller is enabled in this cluster. */
          enabled?: boolean;
        };
        /** @description Optional. Whether to automatically manage the configmanagement Feature. There are 3 accepted values. MANAGEMENT_UNSPECIFIED means that the mamangement mode is unspecified. MANAGEMENT_AUTOMATIC means that Google manages the Feature for the cluster. MANAGEMENT_MANUAL means that users should manage the Feature for the cluster. */
        management?: string;
        /** @description **DEPRECATED** Configuring Policy Controller through the configmanagement feature is no longer recommended. Use the policycontroller feature instead. */
        policyController?: {
          /** @description Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
          auditIntervalSeconds?: string;
          /** @description Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. */
          enabled?: boolean;
          /** @description The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
          exemptableNamespaces?: string[];
          /** @description Logs all denies and dry run failures. */
          logDeniesEnabled?: boolean;
          /** @description Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"] */
          monitoring?: {
            /** @description Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. */
            backends?: string[];
          };
          /** @description Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. */
          mutationEnabled?: boolean;
          /** @description Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
          referentialRulesEnabled?: boolean;
          /** @description Installs the default template library along with Policy Controller. */
          templateLibraryInstalled?: boolean;
        };
        /** @description Optional. Version of ACM to install. Defaults to the latest version. */
        version?: string;
      };
      /** @description Immutable. */
      featureRef: {
        /** @description The name of the feature. Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The location of the feature */
      location: string;
      /** @description Immutable. The location of the membership */
      membershipLocation?: string;
      /** @description Immutable. */
      membershipRef: {
        /** @description The name of the membership. Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Manage Mesh Features */
      mesh?: {
        /** @description **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL */
        controlPlane?: string;
        /** @description Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL */
        management?: string;
      };
      /** @description Policy Controller-specific spec. */
      policycontroller?: {
        /** @description Policy Controller configuration for the cluster. */
        policyControllerHubConfig: {
          /**
           * Format: int64
           * @description Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
           */
          auditIntervalSeconds?: number;
          /**
           * Format: int64
           * @description The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
           */
          constraintViolationLimit?: number;
          /** @description The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
          exemptableNamespaces?: string[];
          /** @description Configures the mode of the Policy Controller installation. Possible values: INSTALL_SPEC_UNSPECIFIED, INSTALL_SPEC_NOT_INSTALLED, INSTALL_SPEC_ENABLED, INSTALL_SPEC_SUSPENDED, INSTALL_SPEC_DETACHED */
          installSpec?: string;
          /** @description Logs all denies and dry run failures. */
          logDeniesEnabled?: boolean;
          /** @description Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"] */
          monitoring?: {
            /** @description Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. */
            backends?: string[];
          };
          /** @description Enables the ability to mutate resources using Policy Controller. */
          mutationEnabled?: boolean;
          /** @description Specifies the desired policy content on the cluster. */
          policyContent?: {
            /** @description Configures the installation of the Template Library. */
            templateLibrary?: {
              /** @description Configures the manner in which the template library is installed on the cluster. Possible values: INSTALLATION_UNSPECIFIED, NOT_INSTALLED, ALL */
              installation?: string;
            };
          };
          /** @description Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
          referentialRulesEnabled?: boolean;
        };
        /** @description Optional. Version of Policy Controller to install. Defaults to the latest version. */
        version?: string;
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project of the feature. Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
    status?: {
      /** @description Conditions represent the latest available observations of the GKEHubFeatureMembership's current state. */
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
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
    };
  };
}
