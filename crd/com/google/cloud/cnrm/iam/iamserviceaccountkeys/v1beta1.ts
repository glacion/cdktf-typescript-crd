import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMServiceAccountKeyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMServiceAccountKeyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMServiceAccountKey", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMServiceAccountKeyV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The algorithm used to generate the key, used only on create. KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048". */
      keyAlgorithm?: string;
      /** @description Immutable. */
      privateKeyType?: string;
      /** @description Immutable. A field that allows clients to upload their own public key. If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM. */
      publicKeyData?: string;
      /** @description Immutable. */
      publicKeyType?: string;
      serviceAccountRef: {
        /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
