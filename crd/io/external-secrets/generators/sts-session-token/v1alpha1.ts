import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSTSSessionTokenV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesSTSSessionTokenV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesSTSSessionTokenV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "generators.external-secrets.io/v1alpha1";
    kind: "STSSessionToken";
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
    spec?: {
      /** @description Auth defines how to authenticate with AWS */
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
      /** @description Region specifies the region to operate in. */
      region: string;
      /** @description RequestParameters contains parameters that can be passed to the STS service. */
      requestParameters?: {
        /** @description SerialNumber is the identification number of the MFA device that is associated with the IAM user who is making
         *     the GetSessionToken call.
         *     Possible values: hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device
         *     (such as arn:aws:iam::123456789012:mfa/user) */
        serialNumber?: string;
        /**
         * Format: int64
         * @description SessionDuration The duration, in seconds, that the credentials should remain valid. Acceptable durations for
         *     IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds
         *     (12 hours) as the default.
         */
        sessionDuration?: number;
        /** @description TokenCode is the value provided by the MFA device, if MFA is required. */
        tokenCode?: string;
      };
      /** @description You can assume a role before making calls to the
       *     desired AWS service. */
      role?: string;
    };
  };
}
