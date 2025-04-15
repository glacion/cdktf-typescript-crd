import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVertexAIEndpointV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesVertexAIEndpointV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesVertexAIEndpointV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "vertexai.cnrm.cloud.google.com/v1alpha1";
    kind: "VertexAIEndpoint";
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
      /** @description The description of the Endpoint. */
      description?: string;
      /** @description Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters. */
      displayName: string;
      /** @description Immutable. Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key. */
      encryptionSpec?: {
        /** @description Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
         *     Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
         *     The key needs to be in the same region as where the compute resource is created. */
        kmsKeyNameRef: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Optional. The full name of the Google Compute Engine network to which the Endpoint should be peered.
       *     Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network.
       *     Only one of the fields, network or enablePrivateServiceConnect, can be set.
       *     Format: projects/{project_id}/global/networks/{network_name}. */
      networkRef?: {
        /** @description Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The region for the resource. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description Output only. Timestamp when this Endpoint was created. */
        createTime?: string;
        /** @description Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by CreateModelDeploymentMonitoringJob. Format: 'projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}'. */
        modelDeploymentMonitoringJob?: string;
      };
    };
  };
}
