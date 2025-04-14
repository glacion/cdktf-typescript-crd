import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesTriggerAuthenticationV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesTriggerAuthenticationV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "keda.sh/v1alpha1", kind: "TriggerAuthentication", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesTriggerAuthenticationV1alpha1Config extends ManifestConfig {
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
    /** @description TriggerAuthentication defines how a trigger can authenticate */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description TriggerAuthenticationSpec defines the various ways to authenticate */
      spec: {
        /** @description AwsSecretManager is used to authenticate using AwsSecretManager */
        awsSecretManager?: {
          credentials?: {
            accessKey: {
              valueFrom: {
                secretKeyRef: {
                  key: string;
                  name: string;
                };
              };
            };
            accessSecretKey: {
              valueFrom: {
                secretKeyRef: {
                  key: string;
                  name: string;
                };
              };
            };
            accessToken?: {
              valueFrom: {
                secretKeyRef: {
                  key: string;
                  name: string;
                };
              };
            };
          };
          /** @description AuthPodIdentity allows users to select the platform native identity
           *     mechanism */
          podIdentity?: {
            /** @description Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set */
            identityAuthorityHost?: string;
            identityId?: string;
            /** @description IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn */
            identityOwner?: string;
            /** @description Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set */
            identityTenantId?: string;
            /** @description PodIdentityProvider contains the list of providers */
            provider: string;
            /** @description RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner */
            roleArn?: string;
          };
          region?: string;
          secrets: {
            name: string;
            parameter: string;
            versionId?: string;
            versionStage?: string;
          }[];
        };
        /** @description AzureKeyVault is used to authenticate using Azure Key Vault */
        azureKeyVault?: {
          cloud?: {
            activeDirectoryEndpoint?: string;
            keyVaultResourceURL?: string;
            type: string;
          };
          credentials?: {
            clientId: string;
            clientSecret: {
              valueFrom: {
                secretKeyRef: {
                  key: string;
                  name: string;
                };
              };
            };
            tenantId: string;
          };
          /** @description AuthPodIdentity allows users to select the platform native identity
           *     mechanism */
          podIdentity?: {
            /** @description Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set */
            identityAuthorityHost?: string;
            identityId?: string;
            /** @description IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn */
            identityOwner?: string;
            /** @description Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set */
            identityTenantId?: string;
            /** @description PodIdentityProvider contains the list of providers */
            provider: string;
            /** @description RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner */
            roleArn?: string;
          };
          secrets: {
            name: string;
            parameter: string;
            version?: string;
          }[];
          vaultUri: string;
        };
        configMapTargetRef?: {
          key: string;
          name: string;
          parameter: string;
        }[];
        env?: {
          containerName?: string;
          name: string;
          parameter: string;
        }[];
        gcpSecretManager?: {
          credentials?: {
            clientSecret: {
              valueFrom: {
                secretKeyRef: {
                  key: string;
                  name: string;
                };
              };
            };
          };
          /** @description AuthPodIdentity allows users to select the platform native identity
           *     mechanism */
          podIdentity?: {
            /** @description Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set */
            identityAuthorityHost?: string;
            identityId?: string;
            /** @description IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn */
            identityOwner?: string;
            /** @description Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set */
            identityTenantId?: string;
            /** @description PodIdentityProvider contains the list of providers */
            provider: string;
            /** @description RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner */
            roleArn?: string;
          };
          secrets: {
            id: string;
            parameter: string;
            version?: string;
          }[];
        };
        /** @description HashiCorpVault is used to authenticate using Hashicorp Vault */
        hashiCorpVault?: {
          address: string;
          /** @description VaultAuthentication contains the list of Hashicorp Vault authentication methods */
          authentication: string;
          /** @description Credential defines the Hashicorp Vault credentials depending on the authentication method */
          credential?: {
            serviceAccount?: string;
            token?: string;
          };
          mount?: string;
          namespace?: string;
          role?: string;
          secrets: {
            key: string;
            parameter: string;
            path: string;
            pkiData?: {
              altNames?: string;
              commonName?: string;
              format?: string;
              ipSans?: string;
              otherSans?: string;
              ttl?: string;
              uriSans?: string;
            };
            /** @description VaultSecretType defines the type of vault secret */
            type?: string;
          }[];
        };
        /** @description AuthPodIdentity allows users to select the platform native identity
         *     mechanism */
        podIdentity?: {
          /** @description Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set */
          identityAuthorityHost?: string;
          identityId?: string;
          /** @description IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn */
          identityOwner?: string;
          /** @description Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set */
          identityTenantId?: string;
          /** @description PodIdentityProvider contains the list of providers */
          provider: string;
          /** @description RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner */
          roleArn?: string;
        };
        secretTargetRef?: {
          key: string;
          name: string;
          parameter: string;
        }[];
      };
      /** @description TriggerAuthenticationStatus defines the observed state of TriggerAuthentication */
      status?: {
        scaledjobs?: string;
        scaledobjects?: string;
      };
    };
  };
}
