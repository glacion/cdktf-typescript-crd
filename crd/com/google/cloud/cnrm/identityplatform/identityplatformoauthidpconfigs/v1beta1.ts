import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIdentityPlatformOAuthIDPConfigV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesIdentityPlatformOAuthIDPConfigV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "identityplatform.cnrm.cloud.google.com/v1beta1",
        kind: "IdentityPlatformOAuthIDPConfig",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesIdentityPlatformOAuthIDPConfigV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec?: {
        /** @description The client id of an OAuth client. */
        clientId?: string;
        /** @description The client secret of the OAuth client, to enable OIDC code flow. */
        clientSecret?: {
          /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
          value?: string;
          /** @description Source for the field's value. Cannot be used if 'value' is specified. */
          valueFrom?: {
            /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
            secretKeyRef?: {
              /** @description Key that identifies the value to be extracted. */
              key: string;
              /** @description Name of the Secret to extract a value from. */
              name: string;
            };
          };
        } & (unknown | unknown);
        /** @description The config's display name set by developers. */
        displayName?: string;
        /** @description True if allows the user to sign in with the provider. */
        enabled?: boolean;
        /** @description For OIDC Idps, the issuer identifier. */
        issuer?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description The multiple response type to request for in the OAuth authorization flow. This can possibly be a combination of set bits (e.g.: {id\_token, token}). */
        responseType?: {
          /** @description If true, authorization code is returned from IdP's authorization endpoint. */
          code?: boolean;
          /** @description If true, ID token is returned from IdP's authorization endpoint. */
          idToken?: boolean;
          /** @description If true, access token is returned from IdP's authorization endpoint. */
          token?: boolean;
        };
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
      };
    };
  };
}
