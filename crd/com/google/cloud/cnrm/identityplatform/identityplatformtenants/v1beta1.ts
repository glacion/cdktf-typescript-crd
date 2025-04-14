import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIdentityPlatformTenantV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIdentityPlatformTenantV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "identityplatform.cnrm.cloud.google.com/v1beta1",
        kind: "IdentityPlatformTenant",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesIdentityPlatformTenantV1beta1Config extends ManifestConfig {
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
      /** @description Whether to allow email/password user authentication. */
      allowPasswordSignup?: boolean;
      /** @description Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users. */
      disableAuth?: boolean;
      /** @description Display name of the tenant. */
      displayName?: string;
      /** @description Whether to enable anonymous user authentication. */
      enableAnonymousUser?: boolean;
      /** @description Whether to enable email link user authentication. */
      enableEmailLinkSignin?: boolean;
      /** @description The tenant-level configuration of MFA options. */
      mfaConfig?: {
        /** @description A list of usable second factors for this project. */
        enabledProviders?: string[];
        /** @description Whether MultiFactor Authentication has been enabled for this project. Possible values: STATE_UNSPECIFIED, DISABLED, ENABLED, MANDATORY */
        state?: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description A map of <test phone number, fake code> pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded). */
      testPhoneNumbers?: {
        [key: string]: string;
      };
    };
  };
}
