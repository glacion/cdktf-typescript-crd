import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterSecretStoreV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterSecretStoreV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "external-secrets.io/v1beta1", kind: "ClusterSecretStore", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterSecretStoreV1beta1Config extends ManifestConfig {
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
      /** @description Used to constraint a ClusterSecretStore to specific namespaces. Relevant only to ClusterSecretStore */
      conditions?: {
        /** @description Choose namespaces by using regex matching */
        namespaceRegexes?: string[];
        /** @description Choose namespace using a labelSelector */
        namespaceSelector?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values.
             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn,
             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
             *     the values array must be empty. This array is replaced during a strategic
             *     merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
        /** @description Choose namespaces by name */
        namespaces?: string[];
      }[];
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
            /** @description The namespace the Provider type is in.
             *     Can only be defined when used in a ClusterSecretStore. */
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
          /** @description AdditionalRoles is a chained list of Role ARNs which the provider will sequentially assume before assuming the Role */
          additionalRoles?: string[];
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
              /** @description The SessionToken used for authentication
               *     This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
               *     see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html */
              sessionTokenSecretRef?: {
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
          /** @description AWS External ID set on assumed IAM roles */
          externalID?: string;
          /** @description Prefix adds a prefix to all retrieved values. */
          prefix?: string;
          /** @description AWS Region to be used for the provider */
          region: string;
          /** @description Role is a Role ARN which the provider will assume */
          role?: string;
          /** @description SecretsManager defines how the provider behaves when interacting with AWS SecretsManager */
          secretsManager?: {
            /** @description Specifies whether to delete the secret without any recovery window. You
             *     can't use both this parameter and RecoveryWindowInDays in the same call.
             *     If you don't use either, then by default Secrets Manager uses a 30 day
             *     recovery window.
             *     see: https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#SecretsManager-DeleteSecret-request-ForceDeleteWithoutRecovery */
            forceDeleteWithoutRecovery?: boolean;
            /**
             * Format: int64
             * @description The number of days from 7 to 30 that Secrets Manager waits before
             *     permanently deleting the secret. You can't use both this parameter and
             *     ForceDeleteWithoutRecovery in the same call. If you don't use either,
             *     then by default Secrets Manager uses a 30 day recovery window.
             *     see: https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#SecretsManager-DeleteSecret-request-RecoveryWindowInDays
             */
            recoveryWindowInDays?: number;
          };
          /** @description Service defines which service should be used to fetch the secrets */
          service: string;
          /** @description AWS STS assume role session tags */
          sessionTags?: {
            key: string;
            value: string;
          }[];
          /** @description AWS STS assume role transitive session tags. Required when multiple rules are used with the provider */
          transitiveTagKeys?: string[];
        };
        /** @description AzureKV configures this store to sync secrets using Azure Key Vault provider */
        azurekv?: {
          /** @description Auth configures how the operator authenticates with Azure. Required for ServicePrincipal auth type. Optional for WorkloadIdentity. */
          authSecretRef?: {
            /** @description The Azure ClientCertificate of the service principle used for authentication. */
            clientCertificate?: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
            /** @description The Azure clientId of the service principle or managed identity used for authentication. */
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
            /** @description The Azure tenantId of the managed identity used for authentication. */
            tenantId?: {
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
          /** @description EnvironmentType specifies the Azure cloud environment endpoints to use for
           *     connecting and authenticating with Azure. By default it points to the public cloud AAD endpoint.
           *     The following endpoints are available, also see here: https://github.com/Azure/go-autorest/blob/main/autorest/azure/environments.go#L152
           *     PublicCloud, USGovernmentCloud, ChinaCloud, GermanCloud */
          environmentType?: string;
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
          /** @description TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type. Optional for WorkloadIdentity. */
          tenantId?: string;
          /** @description Vault Url from which the secrets to be fetched from. */
          vaultUrl: string;
        };
        /** @description Beyondtrust configures this store to sync secrets using Password Safe provider. */
        beyondtrust?: {
          /** @description Auth configures how the operator authenticates with Beyondtrust. */
          auth: {
            /** @description APIKey If not provided then ClientID/ClientSecret become required. */
            apiKey?: {
              /** @description SecretRef references a key in a secret that will be used as value. */
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
              /** @description Value can be specified directly to set a value without using a secret. */
              value?: string;
            };
            /** @description Certificate (cert.pem) for use when authenticating with an OAuth client Id using a Client Certificate. */
            certificate?: {
              /** @description SecretRef references a key in a secret that will be used as value. */
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
              /** @description Value can be specified directly to set a value without using a secret. */
              value?: string;
            };
            /** @description Certificate private key (key.pem). For use when authenticating with an OAuth client Id */
            certificateKey?: {
              /** @description SecretRef references a key in a secret that will be used as value. */
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
              /** @description Value can be specified directly to set a value without using a secret. */
              value?: string;
            };
            /** @description ClientID is the API OAuth Client ID. */
            clientId?: {
              /** @description SecretRef references a key in a secret that will be used as value. */
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
              /** @description Value can be specified directly to set a value without using a secret. */
              value?: string;
            };
            /** @description ClientSecret is the API OAuth Client Secret. */
            clientSecret?: {
              /** @description SecretRef references a key in a secret that will be used as value. */
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
              /** @description Value can be specified directly to set a value without using a secret. */
              value?: string;
            };
          };
          /** @description Auth configures how API server works. */
          server: {
            apiUrl: string;
            /** @description Timeout specifies a time limit for requests made by this Client. The timeout includes connection time, any redirects, and reading the response body. Defaults to 45 seconds. */
            clientTimeOutSeconds?: number;
            /** @description The secret retrieval type. SECRET = Secrets Safe (credential, text, file). MANAGED_ACCOUNT = Password Safe account associated with a system. */
            retrievalType?: string;
            /** @description A character that separates the folder names. */
            separator?: string;
            verifyCA: boolean;
          };
        };
        /** @description BitwardenSecretsManager configures this store to sync secrets using BitwardenSecretsManager provider */
        bitwardensecretsmanager?: {
          apiURL?: string;
          /** @description Auth configures how secret-manager authenticates with a bitwarden machine account instance.
           *     Make sure that the token being used has permissions on the given secret. */
          auth: {
            /** @description BitwardenSecretsManagerSecretRef contains the credential ref to the bitwarden instance. */
            secretRef: {
              /** @description AccessToken used for the bitwarden instance. */
              credentials: {
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
          bitwardenServerSDKURL?: string;
          /** @description Base64 encoded certificate for the bitwarden server sdk. The sdk MUST run with HTTPS to make sure no MITM attack
           *     can be performed. */
          caBundle?: string;
          /** @description see: https://external-secrets.io/latest/spec/#external-secrets.io/v1alpha1.CAProvider */
          caProvider?: {
            /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
            key?: string;
            /** @description The name of the object located at the provider type. */
            name: string;
            /** @description The namespace the Provider type is in.
             *     Can only be defined when used in a ClusterSecretStore. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
          identityURL?: string;
          /** @description OrganizationID determines which organization this secret store manages. */
          organizationID: string;
          /** @description ProjectID determines which project this secret store manages. */
          projectID: string;
        };
        /** @description Chef configures this store to sync secrets with chef server */
        chef?: {
          /** @description Auth defines the information necessary to authenticate against chef Server */
          auth: {
            /** @description ChefAuthSecretRef holds secret references for chef server login credentials. */
            secretRef: {
              /** @description SecretKey is the Signing Key in PEM format, used for authentication. */
              privateKeySecretRef: {
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
          /** @description ServerURL is the chef server URL used to connect to. If using orgs you should include your org in the url and terminate the url with a "/" */
          serverUrl: string;
          /** @description UserName should be the user ID on the chef server */
          username: string;
        };
        /** @description Conjur configures this store to sync secrets using conjur provider */
        conjur?: {
          auth: {
            apikey?: {
              account: string;
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              apiKeyRef: {
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
              userRef: {
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
            jwt?: {
              account: string;
              /** @description Optional HostID for JWT authentication. This may be used depending
               *     on how the Conjur JWT authenticator policy is configured. */
              hostId?: string;
              /** @description Optional SecretRef that refers to a key in a Secret resource containing JWT token to
               *     authenticate with Conjur using the JWT authentication method. */
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
              /** @description Optional ServiceAccountRef specifies the Kubernetes service account for which to request
               *     a token for with the `TokenRequest` API. */
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
              /** @description The conjur authn jwt webservice id */
              serviceID: string;
            };
          };
          caBundle?: string;
          /** @description Used to provide custom certificate authority (CA) certificates
           *     for a secret store. The CAProvider points to a Secret or ConfigMap resource
           *     that contains a PEM-encoded certificate. */
          caProvider?: {
            /** @description The key where the CA certificate can be found in the Secret or ConfigMap. */
            key?: string;
            /** @description The name of the object located at the provider type. */
            name: string;
            /** @description The namespace the Provider type is in.
             *     Can only be defined when used in a ClusterSecretStore. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
          url: string;
        };
        /** @description Delinea DevOps Secrets Vault
         *     https://docs.delinea.com/online-help/products/devops-secrets-vault/current */
        delinea?: {
          /** @description ClientID is the non-secret part of the credential. */
          clientId: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
          /** @description ClientSecret is the secret part of the credential. */
          clientSecret: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
          /** @description Tenant is the chosen hostname / site name. */
          tenant: string;
          /** @description TLD is based on the server location that was chosen during provisioning.
           *     If unset, defaults to "com". */
          tld?: string;
          /** @description URLTemplate
           *     If unset, defaults to "https://%s.secretsvaultcloud.%s/v1/%s%s". */
          urlTemplate?: string;
        };
        /** @description Device42 configures this store to sync secrets using the Device42 provider */
        device42?: {
          /** @description Auth configures how secret-manager authenticates with a Device42 instance. */
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
          /** @description URL configures the Device42 instance URL. */
          host: string;
        };
        /** @description Doppler configures this store to sync secrets using the Doppler provider */
        doppler?: {
          /** @description Auth configures how the Operator authenticates with the Doppler API */
          auth: {
            secretRef: {
              /** @description The DopplerToken is used for authentication.
               *     See https://docs.doppler.com/reference/api#authentication for auth token types.
               *     The Key attribute defaults to dopplerToken if not specified. */
              dopplerToken: {
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
          /** @description Doppler config (required if not using a Service Token) */
          config?: string;
          /** @description Format enables the downloading of secrets as a file (string) */
          format?: string;
          /** @description Environment variable compatible name transforms that change secret names to a different format */
          nameTransformer?: string;
          /** @description Doppler project (required if not using a Service Token) */
          project?: string;
        };
        /** @description Fake configures a store with static key/value pairs */
        fake?: {
          data: {
            key: string;
            value?: string;
            /** @description Deprecated: ValueMap is deprecated and is intended to be removed in the future, use the `value` field instead. */
            valueMap?: {
              [key: string]: string;
            };
            version?: string;
          }[];
        };
        /** @description Fortanix configures this store to sync secrets using the Fortanix provider */
        fortanix?: {
          /** @description APIKey is the API token to access SDKMS Applications. */
          apiKey?: {
            /** @description SecretRef is a reference to a secret containing the SDKMS API Key. */
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
          /** @description APIURL is the URL of SDKMS API. Defaults to `sdkms.fortanix.com`. */
          apiUrl?: string;
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
          /** @description Location optionally defines a location for a secret */
          location?: string;
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
          /** @description Environment environment_scope of gitlab CI/CD variables (Please see https://docs.gitlab.com/ee/ci/environments/#create-a-static-environment on how to create environments) */
          environment?: string;
          /** @description GroupIDs specify, which gitlab groups to pull secrets from. Group secrets are read from left to right followed by the project variables. */
          groupIDs?: string[];
          /** @description InheritFromGroups specifies whether parent groups should be discovered and checked for secrets. */
          inheritFromGroups?: boolean;
          /** @description ProjectID specifies a project where secrets are located. */
          projectID?: string;
          /** @description URL configures the GitLab instance URL. Defaults to https://gitlab.com/. */
          url?: string;
        };
        /** @description IBM configures this store to sync secrets using IBM Cloud provider */
        ibm?: {
          /** @description Auth configures how secret-manager authenticates with the IBM secrets manager. */
          auth: {
            /** @description IBM Container-based auth with IAM Trusted Profile. */
            containerAuth?: {
              iamEndpoint?: string;
              /** @description the IBM Trusted Profile */
              profile: string;
              /** @description Location the token is mounted on the pod */
              tokenLocation?: string;
            };
            secretRef?: {
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
        /** @description Infisical configures this store to sync secrets using the Infisical provider */
        infisical?: {
          /** @description Auth configures how the Operator authenticates with the Infisical API */
          auth: {
            universalAuthCredentials?: {
              /** @description A reference to a specific 'key' within a Secret resource.
               *     In some instances, `key` is a required field. */
              clientId: {
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
              clientSecret: {
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
          hostAPI?: string;
          secretsScope: {
            environmentSlug: string;
            projectSlug: string;
            recursive?: boolean;
            secretsPath?: string;
          };
        };
        /** @description KeeperSecurity configures this store to sync secrets using the KeeperSecurity provider */
        keepersecurity?: {
          /** @description A reference to a specific 'key' within a Secret resource.
           *     In some instances, `key` is a required field. */
          authRef: {
            /** @description A key in the referenced Secret.
             *     Some instances of this field may be defaulted, in others it may be required. */
            key?: string;
            /** @description The name of the Secret resource being referred to. */
            name?: string;
            /** @description The namespace of the Secret resource being referred to.
             *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
            namespace?: string;
          };
          folderID: string;
        };
        /** @description Kubernetes configures this store to sync secrets using a Kubernetes cluster provider */
        kubernetes?: {
          /** @description Auth configures how secret-manager authenticates with a Kubernetes instance. */
          auth?: {
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
          /** @description A reference to a secret that contains the auth information. */
          authRef?: {
            /** @description A key in the referenced Secret.
             *     Some instances of this field may be defaulted, in others it may be required. */
            key?: string;
            /** @description The name of the Secret resource being referred to. */
            name?: string;
            /** @description The namespace of the Secret resource being referred to.
             *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
            namespace?: string;
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
              /** @description The namespace the Provider type is in.
               *     Can only be defined when used in a ClusterSecretStore. */
              namespace?: string;
              /** @description The type of provider to use such as "Secret", or "ConfigMap". */
              type: string;
            };
            /** @description configures the Kubernetes server Address. */
            url?: string;
          };
        };
        /** @description Onboardbase configures this store to sync secrets using the Onboardbase provider */
        onboardbase?: {
          /** @description APIHost use this to configure the host url for the API for selfhosted installation, default is https://public.onboardbase.com/api/v1/ */
          apiHost: string;
          /** @description Auth configures how the Operator authenticates with the Onboardbase API */
          auth: {
            /** @description OnboardbaseAPIKey is the APIKey generated by an admin account.
             *     It is used to recognize and authorize access to a project and environment within onboardbase */
            apiKeyRef: {
              /** @description A key in the referenced Secret.
               *     Some instances of this field may be defaulted, in others it may be required. */
              key?: string;
              /** @description The name of the Secret resource being referred to. */
              name?: string;
              /** @description The namespace of the Secret resource being referred to.
               *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
              namespace?: string;
            };
            /** @description OnboardbasePasscode is the passcode attached to the API Key */
            passcodeRef: {
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
          /** @description Environment is the name of an environmnent within a project to pull the secrets from */
          environment: string;
          /** @description Project is an onboardbase project that the secrets should be pulled from */
          project: string;
        };
        /** @description OnePassword configures this store to sync secrets using the 1Password Cloud provider */
        onepassword?: {
          /** @description Auth defines the information necessary to authenticate against OnePassword Connect Server */
          auth: {
            /** @description OnePasswordAuthSecretRef holds secret references for 1Password credentials. */
            secretRef: {
              /** @description The ConnectToken is used for authentication to a 1Password Connect Server. */
              connectTokenSecretRef: {
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
          /** @description ConnectHost defines the OnePassword Connect Server to connect to */
          connectHost: string;
          /** @description Vaults defines which OnePassword vaults to search in which order */
          vaults: {
            [key: string]: number;
          };
        };
        /** @description Oracle configures this store to sync secrets using Oracle Vault provider */
        oracle?: {
          /** @description Auth configures how secret-manager authenticates with the Oracle Vault.
           *     If empty, use the instance principal, otherwise the user credentials specified in Auth. */
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
        passbolt?: {
          /** @description Auth defines the information necessary to authenticate against Passbolt Server */
          auth: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            passwordSecretRef: {
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
            privateKeySecretRef: {
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
          /** @description Host defines the Passbolt Server to connect to */
          host: string;
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
        /** @description Previder configures this store to sync secrets using the Previder provider */
        previder?: {
          /** @description PreviderAuth contains a secretRef for credentials. */
          auth: {
            /** @description PreviderAuthSecretRef holds secret references for Previder Vault credentials. */
            secretRef?: {
              /** @description The AccessToken is used for authentication */
              accessToken: {
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
          baseUri?: string;
        };
        /** @description Pulumi configures this store to sync secrets using the Pulumi provider */
        pulumi?: {
          /** @description AccessToken is the access tokens to sign in to the Pulumi Cloud Console. */
          accessToken: {
            /** @description SecretRef is a reference to a secret containing the Pulumi API token. */
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
          /** @description APIURL is the URL of the Pulumi API. */
          apiUrl?: string;
          /** @description Environment are YAML documents composed of static key-value pairs, programmatic expressions,
           *     dynamically retrieved values from supported providers including all major clouds,
           *     and other Pulumi ESC environments.
           *     To create a new environment, visit https://www.pulumi.com/docs/esc/environments/ for more information. */
          environment: string;
          /** @description Organization are a space to collaborate on shared projects and stacks.
           *     To create a new organization, visit https://app.pulumi.com/ and click "New Organization". */
          organization: string;
          /** @description Project is the name of the Pulumi ESC project the environment belongs to. */
          project: string;
        };
        /** @description Scaleway */
        scaleway?: {
          /** @description AccessKey is the non-secret part of the api key. */
          accessKey: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
          /** @description APIURL is the url of the api to use. Defaults to https://api.scaleway.com */
          apiUrl?: string;
          /** @description ProjectID is the id of your project, which you can find in the console: https://console.scaleway.com/project/settings */
          projectId: string;
          /** @description Region where your secrets are located: https://developers.scaleway.com/en/quickstart/#region-and-zone */
          region: string;
          /** @description SecretKey is the non-secret part of the api key. */
          secretKey: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
        };
        /** @description SecretServer configures this store to sync secrets using SecretServer provider
         *     https://docs.delinea.com/online-help/secret-server/start.htm */
        secretserver?: {
          /** @description Password is the secret server account password. */
          password: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
          /** @description ServerURL
           *     URL to your secret server installation */
          serverURL: string;
          /** @description Username is the secret server account username. */
          username: {
            /** @description SecretRef references a key in a secret that will be used as value. */
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
            /** @description Value can be specified directly to set a value without using a secret. */
            value?: string;
          };
        };
        /** @description Senhasegura configures this store to sync secrets using senhasegura provider */
        senhasegura?: {
          /** @description Auth defines parameters to authenticate in senhasegura */
          auth: {
            clientId: string;
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            clientSecretSecretRef: {
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
          /** @description IgnoreSslCertificate defines if SSL certificate must be ignored */
          ignoreSslCertificate?: boolean;
          /** @description Module defines which senhasegura module should be used to get secrets */
          module: string;
          /** @description URL of senhasegura */
          url: string;
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
              roleId?: string;
              /** @description Reference to a key in a Secret that contains the App Role ID used
               *     to authenticate with Vault.
               *     The `key` field must be specified and denotes which entry within the Secret
               *     resource is used as the app role id. */
              roleRef?: {
                /** @description A key in the referenced Secret.
                 *     Some instances of this field may be defaulted, in others it may be required. */
                key?: string;
                /** @description The name of the Secret resource being referred to. */
                name?: string;
                /** @description The namespace of the Secret resource being referred to.
                 *     Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent. */
                namespace?: string;
              };
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
            /** @description Iam authenticates with vault by passing a special AWS request signed with AWS IAM credentials
             *     AWS IAM authentication method */
            iam?: {
              /** @description AWS External ID set on assumed IAM roles */
              externalID?: string;
              /** @description Specify a service account with IRSA enabled */
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
              /** @description Path where the AWS auth method is enabled in Vault, e.g: "aws" */
              path?: string;
              /** @description AWS region */
              region?: string;
              /** @description This is the AWS role to be assumed before talking to vault */
              role?: string;
              /** @description Specify credentials in a Secret object */
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
                /** @description The SessionToken used for authentication
                 *     This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
                 *     see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html */
                sessionTokenSecretRef?: {
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
              /** @description X-Vault-AWS-IAM-Server-ID is an additional header used by Vault IAM auth method to mitigate against different types of replay attacks. More details here: https://developer.hashicorp.com/vault/docs/auth/aws */
              vaultAwsIamServerID?: string;
              /** @description Vault Role. In vault, a role describes an identity with a set of permissions, groups, or policies you want to attach a user of the secrets engine */
              vaultRole: string;
            };
            /** @description Jwt authenticates with Vault by passing role and JWT token using the
             *     JWT/OIDC authentication method */
            jwt?: {
              /** @description Optional ServiceAccountToken specifies the Kubernetes service account for which to request
               *     a token for with the `TokenRequest` API. */
              kubernetesServiceAccountToken?: {
                /** @description Optional audiences field that will be used to request a temporary Kubernetes service
                 *     account token for the service account referenced by `serviceAccountRef`.
                 *     Defaults to a single audience `vault` it not specified.
                 *     Deprecated: use serviceAccountRef.Audiences instead */
                audiences?: string[];
                /**
                 * Format: int64
                 * @description Optional expiration time in seconds that will be used to request a temporary
                 *     Kubernetes service account token for the service account referenced by
                 *     `serviceAccountRef`.
                 *     Deprecated: this will be removed in the future.
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
            /** @description Name of the vault namespace to authenticate to. This can be different than the namespace your secret is in.
             *     Namespaces is a set of features within Vault Enterprise that allows
             *     Vault environments to support Secure Multi-tenancy. e.g: "ns1".
             *     More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             *     This will default to Vault.Namespace field if set, or empty otherwise */
            namespace?: string;
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
            /** @description UserPass authenticates with Vault by passing username/password pair */
            userPass?: {
              /** @description Path where the UserPassword authentication backend is mounted
               *     in Vault, e.g: "user" */
              path: string;
              /** @description SecretRef to a key in a Secret resource containing password for the
               *     user used to authenticate with Vault using the UserPass authentication
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
              /** @description Username is a user name used to authenticate using the UserPass Vault
               *     authentication method */
              username: string;
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
            /** @description The namespace the Provider type is in.
             *     Can only be defined when used in a ClusterSecretStore. */
            namespace?: string;
            /** @description The type of provider to use such as "Secret", or "ConfigMap". */
            type: string;
          };
          /** @description ForwardInconsistent tells Vault to forward read-after-write requests to the Vault
           *     leader instead of simply retrying within a loop. This can increase performance if
           *     the option is enabled serverside.
           *     https://www.vaultproject.io/docs/configuration/replication#allow_forwarding_via_header */
          forwardInconsistent?: boolean;
          /** @description Headers to be added in Vault request */
          headers?: {
            [key: string]: string;
          };
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
          /** @description The configuration used for client side related TLS communication, when the Vault server
           *     requires mutual authentication. Only used if the Server URL is using HTTPS protocol.
           *     This parameter is ignored for plain HTTP protocol connection.
           *     It's worth noting this configuration is different from the "TLS certificates auth method",
           *     which is available under the `auth.cert` section. */
          tls?: {
            /** @description CertSecretRef is a certificate added to the transport layer
             *     when communicating with the Vault server.
             *     If no key for the Secret is specified, external-secret will default to 'tls.crt'. */
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
            /** @description KeySecretRef to a key in a Secret resource containing client private key
             *     added to the transport layer when communicating with the Vault server.
             *     If no key for the Secret is specified, external-secret will default to 'tls.key'. */
            keySecretRef?: {
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
        /** @description YandexCertificateManager configures this store to sync secrets using Yandex Certificate Manager provider */
        yandexcertificatemanager?: {
          /** @description Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443') */
          apiEndpoint?: string;
          /** @description Auth defines the information necessary to authenticate against Yandex Certificate Manager */
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
      /** @description Used to configure store refresh interval in seconds. Empty or 0 will default to the controller config. */
      refreshInterval?: number;
      /** @description Used to configure http retries if failed */
      retrySettings?: {
        /** Format: int32 */
        maxRetries?: number;
        retryInterval?: string;
      };
    };
  };
}
