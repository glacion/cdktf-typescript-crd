import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataFusionInstanceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataFusionInstanceV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "datafusion.cnrm.cloud.google.com/v1beta1", kind: "DataFusionInstance", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataFusionInstanceV1beta1Config extends ManifestConfig {
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
  };
}
