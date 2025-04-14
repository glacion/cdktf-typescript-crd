import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGithubAccessTokenV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGithubAccessTokenV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "GithubAccessToken", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGithubAccessTokenV1alpha1Config extends ManifestConfig {
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
    /** @description GithubAccessToken generates ghs_ accessToken */
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
        appID: string;
        /** @description Auth configures how ESO authenticates with a Github instance. */
        auth: {
          privateKey: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
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
        };
        installID: string;
        /** @description Map of permissions the token will have. If omitted, defaults to all permissions the GitHub App has. */
        permissions?: {
          [key: string]: string;
        };
        /** @description List of repositories the token will have access to. If omitted, defaults to all repositories the GitHub App
         *     is installed to. */
        repositories?: string[];
        /** @description URL configures the Github instance URL. Defaults to https://github.com/. */
        url?: string;
      };
    };
  };
}
