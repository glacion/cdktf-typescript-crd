import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasPrivateEndpointV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAtlasPrivateEndpointV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAtlasPrivateEndpointV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "atlas.mongodb.com/v1";
    kind?: "AtlasPrivateEndpoint";
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
    /** @description AtlasPrivateEndpointSpec is the specification of the desired configuration of a project private endpoint */
    spec?: {
      /** @description AWSConfiguration is the specific AWS settings for the private endpoint */
      awsConfiguration?: {
        /** @description ID that identifies the private endpoint's network interface that someone added to this private endpoint service. */
        id: string;
      }[];
      /** @description AzureConfiguration is the specific Azure settings for the private endpoint */
      azureConfiguration?: {
        /** @description ID that identifies the private endpoint's network interface that someone added to this private endpoint service. */
        id: string;
        /** @description IP address of the private endpoint in your Azure VNet that someone added to this private endpoint service. */
        ipAddress: string;
      }[];
      /** @description Name of the secret containing Atlas API private and public keys */
      connectionSecret?: {
        /** @description Name of the resource being referred to
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name: string;
      };
      /** @description "externalProjectRef" holds the parent Atlas project ID.
       *     Mutually exclusive with the "projectRef" field */
      externalProjectRef?: {
        /** @description ID is the Atlas project ID */
        id: string;
      };
      /** @description GCPConfiguration is the specific Google Cloud settings for the private endpoint */
      gcpConfiguration?: {
        /** @description Endpoints is the list of individual private endpoints that comprise this endpoint group. */
        endpoints: {
          /** @description IP address to which this Google Cloud consumer forwarding rule resolves. */
          ipAddress: string;
          /** @description Name that identifies the Google Cloud consumer forwarding rule that you created. */
          name: string;
        }[];
        /** @description GroupName is the label that identifies a set of endpoints. */
        groupName: string;
        /** @description ProjectID that identifies the Google Cloud project in which you created the endpoints. */
        projectId: string;
      }[];
      /** @description "projectRef" is a reference to the parent AtlasProject resource.
       *     Mutually exclusive with the "externalProjectRef" field */
      projectRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /** @description Name of the cloud service provider for which you want to create the private endpoint service. */
      provider: string;
      /** @description Region of the chosen cloud provider in which you want to create the private endpoint service. */
      region: string;
    };
    /** @description AtlasPrivateEndpointStatus is the most recent observed status of the AtlasPrivateEndpoint cluster. Read-only. */
    status?: {
      /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
      conditions: {
        /**
         * Format: date-time
         * @description Last time the condition transitioned from one status to another.
         */
        lastTransitionTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type of Atlas Custom Resource condition. */
        type: string;
      }[];
      /** @description Endpoints are the status of the endpoints connected to the service */
      endpoints?: {
        /** @description ID is the external identifier set on the specification to configure the interface */
        ID?: string;
        /** @description InterfaceStatus is the state of the private endpoint interface */
        InterfaceStatus?: string;
        /** @description ConnectionName is the label that Atlas generates that identifies the Azure private endpoint connection */
        connectionName?: string;
        /** @description Error is the description of the failure occurred when configuring the private endpoint */
        error?: string;
        /** @description GCPForwardingRules is the status of the customer GCP private endpoint(forwarding rules) */
        gcpForwardingRules?: {
          name?: string;
          status?: string;
        }[];
      }[];
      /** @description Error is the description of the failure occurred when configuring the private endpoint */
      error?: string;
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
      /** @description ResourceID is the root-relative path that identifies of the Atlas Azure Private Link Service */
      resourceId?: string;
      /** @description ServiceAttachmentNames is the list of URLs that identifies endpoints that Atlas can use to access one service across the private connection */
      serviceAttachmentNames?: string[];
      /** @description ServiceID is the unique identifier of the private endpoint service in Atlas */
      serviceId?: string;
      /** @description ServiceName is the unique identifier of the Amazon Web Services (AWS) PrivateLink endpoint service or Azure Private Link Service managed by Atlas */
      serviceName?: string;
      /** @description ServiceStatus is the state of the private endpoint service */
      serviceStatus?: string;
    };
  };
}
