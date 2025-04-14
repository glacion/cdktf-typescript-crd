import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSTSSessionTokenV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSTSSessionTokenV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "STSSessionToken", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSTSSessionTokenV1alpha1Config extends ManifestConfig {
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
    /** @description STSSessionToken uses the GetSessionToken API to retrieve an authorization token.
     *     The authorization token is valid for 12 hours.
     *     The authorizationToken returned is a base64 encoded string that can be decoded.
     *     For more information, see GetSessionToken (https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html). */
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
  };
}
