import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCRAccessTokenV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCRAccessTokenV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "GCRAccessToken", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCRAccessTokenV1alpha1Config extends ManifestConfig {
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
    /** @description GCRAccessToken generates an GCP access token
     *     that can be used to authenticate with GCR. */
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
        /** @description Auth defines the means for authenticating with GCP */
        auth: {
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
        /** @description ProjectID defines which project to use to authenticate with */
        projectID: string;
      };
    };
  };
}
