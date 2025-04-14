import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretProviderClassPodStatusV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSecretProviderClassPodStatusV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "secrets-store.csi.x-k8s.io/v1", kind: "SecretProviderClassPodStatus", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSecretProviderClassPodStatusV1Config extends ManifestConfig {
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
    /** @description SecretProviderClassPodStatus is the Schema for the secretproviderclassespodstatus API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description SecretProviderClassPodStatusStatus defines the observed state of SecretProviderClassPodStatus */
      status?: {
        mounted?: boolean;
        objects?: {
          id?: string;
          version?: string;
        }[];
        podName?: string;
        secretProviderClassName?: string;
        targetPath?: string;
      };
    };
  };
}
