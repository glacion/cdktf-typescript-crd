import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVertexAIDatasetV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVertexAIDatasetV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "vertexai.cnrm.cloud.google.com/v1alpha1", kind: "VertexAIDataset", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVertexAIDatasetV1alpha1Config extends ManifestConfig {
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
      /** @description The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters. */
      displayName: string;
      /** @description Immutable. Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be secured by this key. */
      encryptionSpec?: {
        /** @description Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
         *     Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
         *     The key needs to be in the same region as where the compute resource is created. */
        kmsKeyNameRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/. */
      metadataSchemaUri: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The region of the dataset. eg us-central1. */
      region?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
