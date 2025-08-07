import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class GeneratorsExternalSecretsIoECRAuthorizationTokenV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: GeneratorsExternalSecretsIoECRAuthorizationTokenV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface GeneratorsExternalSecretsIoECRAuthorizationTokenV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "generators.external-secrets.io/v1alpha1";
    kind: "ECRAuthorizationToken";
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
      /** @description You can assume a role before making calls to the
       *     desired AWS service. */
      role?: string;
    };
  };
}
