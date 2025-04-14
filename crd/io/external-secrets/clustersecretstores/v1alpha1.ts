import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterSecretStoreV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterSecretStoreV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "external-secrets.io/v1alpha1", kind: "ClusterSecretStore", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterSecretStoreV1alpha1Config extends ManifestConfig {
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
      /** @description Used to select the correct ESO controller (think: ingress.ingressClassName)
       *     The ESO controller is instantiated with a specific controller name and filters ES based on this property */
      controller?: string;
      /** @description Used to configure the provider. Only one provider may be set */
      provider: {
        /** @description Akeyless configures this store to sync secrets using Akeyless Vault provider */
        akeyless?: {
          /** @description Akeyless GW API Url from which the secrets to be fetched from. */
          akeylessGWApiURL: string;
          /** @description Auth configures how the operator authenticates with Akeyless. */
          authSecretRef: {
            /** @description Kubernetes authenticates with Akeyless by passing the ServiceAccount
             *     token stored in the named Secret resource. */
            kubernetesAuth?: {
              /** @description the Akeyless Kubernetes auth-method access-id */
              accessID: string;
              /** @description Kubernetes-auth configuration name in Akeyless-Gateway */
              k8sConfName: string;
              /** @description Optional secret field containing a Kubernetes ServiceAccount JWT used
               *     for authenticating with Akeyless. If a name is specified without a key,
               *     `token` is the default. If one is not specified, the one bound to
               *     the controller will be used. */
              secretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description Optional service account field containing the name of a kubernetes ServiceAccount.
               *     If the service account is specified, the service account secret token JWT will be used
               *     for authenticating with Akeyless. If the service account selector is not supplied,
               *     the secretRef will be used instead. */
              serviceAccountRef?: {
                /** @description Audience specifies the `aud` claim for the service account token
                 *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                 *     then this audiences will be appended to the list */
                audiences?: string[];
                /** @description The name of the ServiceAccount resource being referred to. */
                name: string;
                /** @description Namespace of the resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Reference to a Secret that contains the details
             *     to authenticate with Akeyless. */
            secretRef?: {
              /** @description The SecretAccessID is used for authentication */
              accessID?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              accessType?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              accessTypeParam?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /**
           * Format: byte
           * @description PEM/base64 encoded CA bundle used to validate Akeyless Gateway certificate. Only used
           *     if the AkeylessGWApiURL URL is using HTTPS protocol. If not set the system root certificates
           *     are used to validate the TLS connection.
           */
          caBundle?: string;
          /** @description The provider for the CA bundle to use to validate Akeyless Gateway certificate. */
          caProvider?: {
            /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
            key?: string;
            /** @description The name of the object located at the provider type. */
            name: string;
            /** @description The namespace the Provider type is in. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
        };
        /** @description Alibaba configures this store to sync secrets using Alibaba Cloud provider */
        alibaba?: {
          /** @description AlibabaAuth contains a secretRef for credentials. */
          auth: {
            /** @description Authenticate against Alibaba using RRSA. */
            rrsa?: {
              oidcProviderArn: string;
              oidcTokenFilePath: string;
              roleArn: string;
              sessionName: string;
            };
            /** @description AlibabaAuthSecretRef holds secret references for Alibaba credentials. */
            secretRef?: {
              /** @description The AccessKeyID is used for authentication */
              accessKeyIDSecretRef: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description The AccessKeySecret is used for authentication */
              accessKeySecretSecretRef: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description Alibaba Region to be used for the provider */
          regionID: string;
        };
        /** @description AWS configures this store to sync secrets using AWS Secret Manager provider */
        aws?: {
          /** @description Auth defines the information necessary to authenticate against AWS
           *     if not set aws sdk will infer credentials from your environment
           *     see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials */
          auth?: {
            /** @description Authenticate against AWS using service account tokens. */
            jwt?: {
              /** @description A reference to a ServiceAccount resource. */
              serviceAccountRef?: {
                /** @description Audience specifies the `aud` claim for the service account token
                 *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                 *     then this audiences will be appended to the list */
                audiences?: string[];
                /** @description The name of the ServiceAccount resource being referred to. */
                name: string;
                /** @description Namespace of the resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description AWSAuthSecretRef holds secret references for AWS credentials
             *     both AccessKeyID and SecretAccessKey must be defined in order to properly authenticate. */
            secretRef?: {
              /** @description The AccessKeyID is used for authentication */
              accessKeyIDSecretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description The SecretAccessKey is used for authentication */
              secretAccessKeySecretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description AWS Region to be used for the provider */
          region: string;
          /** @description Role is a Role ARN which the SecretManager provider will assume */
          role?: string;
          /** @description Service defines which service should be used to fetch the secrets */
          service: string;
        };
        /** @description AzureKV configures this store to sync secrets using Azure Key Vault provider */
        azurekv?: {
          /** @description Auth configures how the operator authenticates with Azure. Required for ServicePrincipal auth type. */
          authSecretRef?: {
            /** @description The Azure clientId of the service principle used for authentication. */
            clientId?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
            /** @description The Azure ClientSecret of the service principle used for authentication. */
            clientSecret?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
          };
          /** @description Auth type defines how to authenticate to the keyvault service.
           *     Valid values are:
           *     - "ServicePrincipal" (default): Using a service principal (tenantId, clientId, clientSecret)
           *     - "ManagedIdentity": Using Managed Identity assigned to the pod (see aad-pod-identity) */
          authType?: string;
          /** @description If multiple Managed Identity is assigned to the pod, you can select the one to be used */
          identityId?: string;
          /** @description ServiceAccountRef specified the service account
           *     that should be used when authenticating with WorkloadIdentity. */
          serviceAccountRef?: {
            /** @description Audience specifies the `aud` claim for the service account token
             *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
             *     then this audiences will be appended to the list */
            audiences?: string[];
            /** @description The name of the ServiceAccount resource being referred to. */
            name: string;
            /** @description Namespace of the resource being referred to.
             *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
            namespace?: string;
          };
          /** @description TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type. */
          tenantId?: string;
          /** @description Vault Url from which the secrets to be fetched from. */
          vaultUrl: string;
        };
        /** @description Fake configures a store with static key/value pairs */
        fake?: {
          data: {
            key: string;
            value?: string;
            valueMap?: {
              [key: string]: string;
            };
            version?: string;
          }[];
        };
        /** @description GCPSM configures this store to sync secrets using Google Cloud Platform Secret Manager provider */
        gcpsm?: {
          /** @description Auth defines the information necessary to authenticate against GCP */
          auth?: {
            secretRef?: {
              /** @description The SecretAccessKey is used for authentication */
              secretAccessKeySecretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            workloadIdentity?: {
              clusterLocation: string;
              clusterName: string;
              clusterProjectID?: string;
              /** @description A reference to a ServiceAccount resource. */
              serviceAccountRef: {
                /** @description Audience specifies the `aud` claim for the service account token
                 *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                 *     then this audiences will be appended to the list */
                audiences?: string[];
                /** @description The name of the ServiceAccount resource being referred to. */
                name: string;
                /** @description Namespace of the resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description ProjectID project where secret is located */
          projectID?: string;
        };
        /** @description GitLab configures this store to sync secrets using GitLab Variables provider */
        gitlab?: {
          /** @description Auth configures how secret-manager authenticates with a GitLab instance. */
          auth: {
            SecretRef: {
              /** @description AccessToken is used for authentication. */
              accessToken?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description ProjectID specifies a project where secrets are located. */
          projectID?: string;
          /** @description URL configures the GitLab instance URL. Defaults to https://gitlab.com/. */
          url?: string;
        };
        /** @description IBM configures this store to sync secrets using IBM Cloud provider */
        ibm?: {
          /** @description Auth configures how secret-manager authenticates with the IBM secrets manager. */
          auth: {
            secretRef: {
              /** @description The SecretAccessKey is used for authentication */
              secretApiKeySecretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description ServiceURL is the Endpoint URL that is specific to the Secrets Manager service instance */
          serviceUrl?: string;
        };
        /** @description Kubernetes configures this store to sync secrets using a Kubernetes cluster provider */
        kubernetes?: {
          /** @description Auth configures how secret-manager authenticates with a Kubernetes instance. */
          auth: {
            /** @description has both clientCert and clientKey as secretKeySelector */
            cert?: {
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              clientCert?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              clientKey?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description points to a service account that should be used for authentication */
            serviceAccount?: {
              /** @description A reference to a ServiceAccount resource. */
              serviceAccount?: {
                /** @description Audience specifies the `aud` claim for the service account token
                 *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                 *     then this audiences will be appended to the list */
                audiences?: string[];
                /** @description The name of the ServiceAccount resource being referred to. */
                name: string;
                /** @description Namespace of the resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description use static token to authenticate with */
            token?: {
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              bearerToken?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description Remote namespace to fetch the secrets from */
          remoteNamespace?: string;
          /** @description configures the Kubernetes server Address. */
          server?: {
            /**
             * Format: byte
             * @description CABundle is a base64-encoded CA certificate
             */
            caBundle?: string;
            /** @description see: https://external-secrets.io/v0.4.1/spec/#external-secrets.io/v1alpha1.CAProvider */
            caProvider?: {
              /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
              key?: string;
              /** @description The name of the object located at the provider type. */
              name: string;
              /** @description The namespace the Provider type is in. */
              namespace?: string;
              /** @description The type of provider to use such as "Secret", or "ConfigMap". */
              type: string;
            };
            /** @description configures the Kubernetes server Address. */
            url?: string;
          };
        };
        /** @description Oracle configures this store to sync secrets using Oracle Vault provider */
        oracle?: {
          /** @description Auth configures how secret-manager authenticates with the Oracle Vault.
           *     If empty, instance principal is used. Optionally, the authenticating principal type
           *     and/or user data may be supplied for the use of workload identity and user principal. */
          auth?: {
            /** @description SecretRef to pass through sensitive information. */
            secretRef: {
              /** @description Fingerprint is the fingerprint of the API private key. */
              fingerprint: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description PrivateKey is the user's API Signing Key in PEM format, used for authentication. */
              privatekey: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Tenancy is the tenancy OCID where user is located. */
            tenancy: string;
            /** @description User is an access OCID specific to the account. */
            user: string;
          };
          /** @description Compartment is the vault compartment OCID.
           *     Required for PushSecret */
          compartment?: string;
          /** @description EncryptionKey is the OCID of the encryption key within the vault.
           *     Required for PushSecret */
          encryptionKey?: string;
          /** @description The type of principal to use for authentication. If left blank, the Auth struct will
           *     determine the principal type. This optional field must be specified if using
           *     workload identity. */
          principalType?: string;
          /** @description Region is the region where vault is located. */
          region: string;
          /** @description ServiceAccountRef specified the service account
           *     that should be used when authenticating with WorkloadIdentity. */
          serviceAccountRef?: {
            /** @description Audience specifies the `aud` claim for the service account token
             *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
             *     then this audiences will be appended to the list */
            audiences?: string[];
            /** @description The name of the ServiceAccount resource being referred to. */
            name: string;
            /** @description Namespace of the resource being referred to.
             *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
            namespace?: string;
          };
          /** @description Vault is the vault's OCID of the specific vault where secret is located. */
          vault: string;
        };
        /** @description Configures a store to sync secrets with a Password Depot instance. */
        passworddepot?: {
          /** @description Auth configures how secret-manager authenticates with a Password Depot instance. */
          auth: {
            secretRef: {
              /** @description Username / Password is used for authentication. */
              credentials?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
          };
          /** @description Database to use as source */
          database: string;
          /** @description URL configures the Password Depot instance URL. */
          host: string;
        };
        /** @description Vault configures this store to sync secrets using Hashi provider */
        vault?: {
          /** @description Auth configures how secret-manager authenticates with the Vault server. */
          auth: {
            /** @description AppRole authenticates with Vault using the App Role auth mechanism,
             *     with the role and secret stored in a Kubernetes Secret resource. */
            appRole?: {
              /** @description Path where the App Role authentication backend is mounted
               *     in Vault, e.g: "approle" */
              path: string;
              /** @description RoleID configured in the App Role authentication backend when setting
               *     up the authentication backend in Vault. */
              roleId: string;
              /** @description Reference to a key in a Secret that contains the App Role secret used
               *     to authenticate with Vault.
               *     The `key` field must be specified and denotes which entry within the Secret
               *     resource is used as the app role secret. */
              secretRef: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Cert authenticates with TLS Certificates by passing client certificate, private key and ca certificate
             *     Cert authentication method */
            cert?: {
              /** @description ClientCert is a certificate to authenticate using the Cert Vault
               *     authentication method */
              clientCert?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description SecretRef to a key in a Secret resource containing client private key to
               *     authenticate with Vault using the Cert authentication method */
              secretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Jwt authenticates with Vault by passing role and JWT token using the
             *     JWT/OIDC authentication method */
            jwt?: {
              /** @description Optional ServiceAccountToken specifies the Kubernetes service account for which to request
               *     a token for with the `TokenRequest` API. */
              kubernetesServiceAccountToken?: {
                /** @description Optional audiences field that will be used to request a temporary Kubernetes service
                 *     account token for the service account referenced by `serviceAccountRef`.
                 *     Defaults to a single audience `vault` it not specified. */
                audiences?: string[];
                /**
                 * Format: int64
                 * @description Optional expiration time in seconds that will be used to request a temporary
                 *     Kubernetes service account token for the service account referenced by
                 *     `serviceAccountRef`.
                 *     Defaults to 10 minutes.
                 */
                expirationSeconds?: number;
                /** @description Service account field containing the name of a kubernetes ServiceAccount. */
                serviceAccountRef: {
                  /** @description Audience specifies the `aud` claim for the service account token
                   *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                   *     then this audiences will be appended to the list */
                  audiences?: string[];
                  /** @description The name of the ServiceAccount resource being referred to. */
                  name: string;
                  /** @description Namespace of the resource being referred to.
                   *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                  namespace?: string;
                };
              };
              /** @description Path where the JWT authentication backend is mounted
               *     in Vault, e.g: "jwt" */
              path: string;
              /** @description Role is a JWT role to authenticate using the JWT/OIDC Vault
               *     authentication method */
              role?: string;
              /** @description Optional SecretRef that refers to a key in a Secret resource containing JWT token to
               *     authenticate with Vault using the JWT/OIDC authentication method. */
              secretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Kubernetes authenticates with Vault by passing the ServiceAccount
             *     token stored in the named Secret resource to the Vault server. */
            kubernetes?: {
              /** @description Path where the Kubernetes authentication backend is mounted in Vault, e.g:
               *     "kubernetes" */
              mountPath: string;
              /** @description A required field containing the Vault Role to assume. A Role binds a
               *     Kubernetes ServiceAccount with a set of Vault policies. */
              role: string;
              /** @description Optional secret field containing a Kubernetes ServiceAccount JWT used
               *     for authenticating with Vault. If a name is specified without a key,
               *     `token` is the default. If one is not specified, the one bound to
               *     the controller will be used. */
              secretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description Optional service account field containing the name of a kubernetes ServiceAccount.
               *     If the service account is specified, the service account secret token JWT will be used
               *     for authenticating with Vault. If the service account selector is not supplied,
               *     the secretRef will be used instead. */
              serviceAccountRef?: {
                /** @description Audience specifies the `aud` claim for the service account token
                 *     If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
                 *     then this audiences will be appended to the list */
                audiences?: string[];
                /** @description The name of the ServiceAccount resource being referred to. */
                name: string;
                /** @description Namespace of the resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
            };
            /** @description Ldap authenticates with Vault by passing username/password pair using
             *     the LDAP authentication method */
            ldap?: {
              /** @description Path where the LDAP authentication backend is mounted
               *     in Vault, e.g: "ldap" */
              path: string;
              /** @description SecretRef to a key in a Secret resource containing password for the LDAP
               *     user used to authenticate with Vault using the LDAP authentication
               *     method */
              secretRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
              /** @description Username is a LDAP user name used to authenticate using the LDAP Vault
               *     authentication method */
              username: string;
            };
            /** @description TokenSecretRef authenticates with Vault by presenting a token. */
            tokenSecretRef?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
          };
          /**
           * Format: byte
           * @description PEM encoded CA bundle used to validate Vault server certificate. Only used
           *     if the Server URL is using HTTPS protocol. This parameter is ignored for
           *     plain HTTP protocol connection. If not set the system root certificates
           *     are used to validate the TLS connection.
           */
          caBundle?: string;
          /** @description The provider for the CA bundle to use to validate Vault server certificate. */
          caProvider?: {
            /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
            key?: string;
            /** @description The name of the object located at the provider type. */
            name: string;
            /** @description The namespace the Provider type is in. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
          /** @description ForwardInconsistent tells Vault to forward read-after-write requests to the Vault
           *     leader instead of simply retrying within a loop. This can increase performance if
           *     the option is enabled serverside.
           *     https://www.vaultproject.io/docs/configuration/replication#allow_forwarding_via_header */
          forwardInconsistent?: boolean;
          /** @description Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows
           *     Vault environments to support Secure Multi-tenancy. e.g: "ns1".
           *     More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces */
          namespace?: string;
          /** @description Path is the mount path of the Vault KV backend endpoint, e.g:
           *     "secret". The v2 KV secret engine version specific "/data" path suffix
           *     for fetching secrets from Vault is optional and will be appended
           *     if not present in specified path. */
          path?: string;
          /** @description ReadYourWrites ensures isolated read-after-write semantics by
           *     providing discovered cluster replication states in each request.
           *     More information about eventual consistency in Vault can be found here
           *     https://www.vaultproject.io/docs/enterprise/consistency */
          readYourWrites?: boolean;
          /** @description Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200". */
          server: string;
          /** @description Version is the Vault KV secret engine version. This can be either "v1" or
           *     "v2". Version defaults to "v2". */
          version?: string;
        };
        /** @description Webhook configures this store to sync secrets using a generic templated webhook */
        webhook?: {
          /** @description Body */
          body?: string;
          /**
           * Format: byte
           * @description PEM encoded CA bundle used to validate webhook server certificate. Only used
           *     if the Server URL is using HTTPS protocol. This parameter is ignored for
           *     plain HTTP protocol connection. If not set the system root certificates
           *     are used to validate the TLS connection.
           */
          caBundle?: string;
          /** @description The provider for the CA bundle to use to validate webhook server certificate. */
          caProvider?: {
            /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
            key?: string;
            /** @description The name of the object located at the provider type. */
            name: string;
            /** @description The namespace the Provider type is in. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
          /** @description Headers */
          headers?: {
            [key: string]: string;
          };
          /** @description Webhook Method */
          method?: string;
          /** @description Result formatting */
          result: {
            /** @description Json path of return value */
            jsonPath?: string;
          };
          /** @description Secrets to fill in templates
           *     These secrets will be passed to the templating function as key value pairs under the given name */
          secrets?: {
            /** @description Name of this secret in templates */
            name: string;
            /** @description Secret ref to fill in credentials */
            secretRef: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
          }[];
          /** @description Timeout */
          timeout?: string;
          /** @description Webhook url to call */
          url: string;
        };
        /** @description YandexLockbox configures this store to sync secrets using Yandex Lockbox provider */
        yandexlockbox?: {
          /** @description Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443') */
          apiEndpoint?: string;
          /** @description Auth defines the information necessary to authenticate against Yandex Lockbox */
          auth: {
            /** @description The authorized key used for authentication */
            authorizedKeySecretRef?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
          };
          /** @description The provider for the CA bundle to use to validate Yandex.Cloud server certificate. */
          caProvider?: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            certSecretRef?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
          };
        };
      };
      /** @description Used to configure http retries if failed */
      retrySettings?: {
        /** Format: int32 */
        maxRetries?: number;
        retryInterval?: string;
      };
    };
  };
}
