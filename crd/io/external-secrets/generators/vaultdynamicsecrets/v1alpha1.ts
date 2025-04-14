import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVaultDynamicSecretV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVaultDynamicSecretV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "VaultDynamicSecret", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVaultDynamicSecretV1alpha1Config extends ManifestConfig {
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
       *     The ESO controller is instantiated with a specific controller name and filters VDS based on this property */
      controller?: string;
      /** @description Vault API method to use (GET/POST/other) */
      method?: string;
      /** @description Parameters to pass to Vault write (for non-GET methods) */
      parameters?: unknown;
      /** @description Vault path to obtain the dynamic secret from */
      path: string;
      /** @description Vault provider common spec */
      provider: {
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
      /** @description Result type defines which data is returned from the generator.
       *     By default it is the "data" section of the Vault API response.
       *     When using e.g. /auth/token/create the "data" section is empty but
       *     the "auth" section contains the generated token.
       *     Please refer to the vault docs regarding the result data structure. */
      resultType?: string;
      /** @description Used to configure http retries if failed */
      retrySettings?: {
        /** Format: int32 */
        maxRetries?: number;
        retryInterval?: string;
      };
    };
  };
}
