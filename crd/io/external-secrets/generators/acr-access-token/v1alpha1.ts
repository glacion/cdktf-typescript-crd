import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesACRAccessTokenV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesACRAccessTokenV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesACRAccessTokenV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "generators.external-secrets.io/v1alpha1";
    kind?: "ACRAccessToken";
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
    /** @description ACRAccessTokenSpec defines how to generate the access token
     *     e.g. how to authenticate and which registry to use.
     *     see: https://github.com/Azure/acr/blob/main/docs/AAD-OAuth.md#overview */
    spec?: {
      auth: {
        /** @description ManagedIdentity uses Azure Managed Identity to authenticate with Azure. */
        managedIdentity?: {
          /** @description If multiple Managed Identity is assigned to the pod, you can select the one to be used */
          identityId?: string;
        };
        /** @description ServicePrincipal uses Azure Service Principal credentials to authenticate with Azure. */
        servicePrincipal?: {
          /** @description Configuration used to authenticate with Azure using static
           *     credentials stored in a Kind=Secret. */
          secretRef: {
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
        };
        /** @description WorkloadIdentity uses Azure Workload Identity to authenticate with Azure. */
        workloadIdentity?: {
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
        };
      };
      /** @description EnvironmentType specifies the Azure cloud environment endpoints to use for
       *     connecting and authenticating with Azure. By default it points to the public cloud AAD endpoint.
       *     The following endpoints are available, also see here: https://github.com/Azure/go-autorest/blob/main/autorest/azure/environments.go#L152
       *     PublicCloud, USGovernmentCloud, ChinaCloud, GermanCloud */
      environmentType?: string;
      /** @description the domain name of the ACR registry
       *     e.g. foobarexample.azurecr.io */
      registry: string;
      /** @description Define the scope for the access token, e.g. pull/push access for a repository.
       *     if not provided it will return a refresh token that has full scope.
       *     Note: you need to pin it down to the repository level, there is no wildcard available.
       *
       *     examples:
       *     repository:my-repository:pull,push
       *     repository:my-repository:pull
       *
       *     see docs for details: https://docs.docker.com/registry/spec/auth/scope/ */
      scope?: string;
      /** @description TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type. */
      tenantId?: string;
    };
  };
}
