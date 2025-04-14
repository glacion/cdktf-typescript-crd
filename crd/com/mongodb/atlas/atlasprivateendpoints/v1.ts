import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasPrivateEndpointV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasPrivateEndpointV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasPrivateEndpoint", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasPrivateEndpointV1Config extends ManifestConfig {
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
  };
}
