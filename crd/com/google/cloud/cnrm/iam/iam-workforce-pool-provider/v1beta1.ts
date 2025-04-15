import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMWorkforcePoolProviderV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesIAMWorkforcePoolProviderV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesIAMWorkforcePoolProviderV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "iam.cnrm.cloud.google.com/v1beta1";
    kind: "IAMWorkforcePoolProvider";
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
      /** @description A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. `google.profile_photo` and `google.display_name` are not supported. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credentials will be accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ``` */
      attributeCondition?: string;
      /** @description Required. Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. This is a required field and the mapped subject cannot exceed 127 bytes. * `google.groups`: Groups the authenticating user belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. * `google.display_name`: The name of the authenticated user. This is an optional field and the mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead. This attribute cannot be referenced in IAM bindings. * `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo. This is an optional field. When set, the image will be visible as the user's profile picture. If not set, a generic user icon will be displayed instead. This attribute cannot be referenced in IAM bindings. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute} is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workforce pool to Google Cloud resources. For example: */
      attributeMapping: {
        [key: string]: string;
      };
      /** @description A user-specified description of the provider. Cannot exceed 256 characters. */
      description?: string;
      /** @description Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. */
      disabled?: boolean;
      /** @description A user-specified display name for the provider. Cannot exceed 32 characters. */
      displayName?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description An OpenId Connect 1.0 identity provider configuration. */
      oidc?: {
        /** @description Required. The client ID. Must match the audience claim of the JWT issued by the identity provider. */
        clientId: string;
        /** @description The optional client secret. Required to enable Authorization Code flow for web sign-in. */
        clientSecret?: {
          /** @description The value of the client secret. */
          value?: {
            /** @description Input only. The plain text of the client secret value. */
            plainText?: {
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
          };
        };
        /** @description Required. The OIDC issuer URI. Must be a valid URI using the 'https' scheme. */
        issuerUri: string;
        /** @description OIDC JWKs in JSON String format. For details on definition of a JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we use the `jwks_uri` from the discovery document fetched from the .well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: ```{"keys": [{"kty": "RSA/EC", "alg": "<algorithm>", "use": "sig", "kid": "<key-id>", "n": "", "e": "", "x": "", "y": "", "crv": ""}]}``` */
        jwksJson?: string;
        /** @description Required. Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser. */
        webSsoConfig: {
          /** @description Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested. Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured. */
          additionalScopes?: string[];
          /** @description Required. The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition. Possible values: ASSERTION_CLAIMS_BEHAVIOR_UNSPECIFIED, MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS, ONLY_ID_TOKEN_CLAIMS */
          assertionClaimsBehavior: string;
          /** @description Required. The Response Type to request for in the OIDC Authorization Request for web sign-in. The `CODE` Response Type is recommended to avoid the Implicit Flow, for security reasons. Possible values: RESPONSE_TYPE_UNSPECIFIED, CODE, ID_TOKEN */
          responseType: string;
        };
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description A SAML identity provider configuration. */
      saml?: {
        /** @description Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 10 years in the future. 4) Up to 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at least one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata. */
        idpMetadataXml: string;
      };
      /** @description Immutable. */
      workforcePoolRef: {
        /** @description The workforce_pool for the resource
         *
         *     Allowed value: The Google Cloud resource name of an `IAMWorkforcePool` resource (format: `locations/{{location}}/workforcePools/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      oidc?: {
        clientSecret?: {
          value?: {
            /** @description Output only. A thumbprint to represent the current client secret value. */
            thumbprint?: string;
          };
        };
      };
      /** @description Output only. The state of the provider. Possible values: STATE_UNSPECIFIED, ACTIVE, DELETED */
      state?: string;
    };
  };
}
