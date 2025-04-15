import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataFusionInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDataFusionInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDataFusionInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "datafusion.cnrm.cloud.google.com/v1beta1";
    kind: "DataFusionInstance";
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
      dataprocServiceAccountRef?: {
        /** @description User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources.
         *
         *     Allowed value: The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. A description of this instance. */
      description?: string;
      /** @description Immutable. Display name for an instance. */
      displayName?: string;
      /** @description Option to enable Stackdriver Logging. */
      enableStackdriverLogging?: boolean;
      /** @description Option to enable Stackdriver Monitoring. */
      enableStackdriverMonitoring?: boolean;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. Network configuration options. These are required when a private Data Fusion instance is to be created. */
      networkConfig?: {
        /** @description Immutable. The IP range in CIDR notation to use for the managed Data Fusion instance nodes. This range must not overlap with any other ranges used in the customer network. */
        ipAllocation?: string;
        /** @description Immutable. */
        networkRef?: {
          /** @description Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
           *
           *     Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Map of additional options used to configure the behavior of Data Fusion instance. */
      options?: {
        [key: string]: string;
      };
      /** @description Immutable. Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet. */
      privateInstance?: boolean;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Required. Instance type. Possible values: TYPE_UNSPECIFIED, BASIC, ENTERPRISE, DEVELOPER */
      type: string;
      /** @description Current version of the Data Fusion. */
      version?: string;
      /** @description Immutable. Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. */
      zone?: string;
    };
    status?: {
      /** @description Output only. Endpoint on which the REST APIs is accessible. */
      apiEndpoint?: string;
      /** @description Available versions that the instance can be upgraded to. */
      availableVersion?: {
        /** @description Represents a list of available feature names for a given version. */
        availableFeatures?: string[];
        /** @description Whether this is currently the default version for Cloud Data Fusion */
        defaultVersion?: boolean;
        /** @description The version number of the Data Fusion instance, such as '6.0.1.0'. */
        versionNumber?: string;
      }[];
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
       * @description Output only. The time the instance was created.
       */
      createTime?: string;
      /** @description Output only. Cloud Storage bucket generated by Data Fusion in the customer project. */
      gcsBucket?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. P4 service account for the customer project. */
      p4ServiceAccount?: string;
      /** @description Output only. Endpoint on which the Data Fusion UI is accessible. */
      serviceEndpoint?: string;
      /** @description Output only. The current state of this Data Fusion instance. Possible values: STATE_UNSPECIFIED, ENABLED, DISABLED, UNKNOWN */
      state?: string;
      /** @description Output only. Additional information about the current state of this Data Fusion instance if available. */
      stateMessage?: string;
      /** @description Output only. The name of the tenant project. */
      tenantProjectId?: string;
      /**
       * Format: date-time
       * @description Output only. The time the instance was last updated.
       */
      updateTime?: string;
    };
  };
}
