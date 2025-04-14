import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFirestoreIndexV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFirestoreIndexV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "firestore.cnrm.cloud.google.com/v1beta1", kind: "FirestoreIndex", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFirestoreIndexV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description Immutable. The collection being indexed. */
        collection: string;
        /** @description Immutable. The Firestore database id. Defaults to '"(default)"'. */
        database?: string;
        /** @description Immutable. The fields supported by this index. The last field entry is always for
         *     the field path '__name__'. If, on creation, '__name__' was not
         *     specified as the last field, it will be added automatically with the
         *     same direction as that of the last field defined. If the final field
         *     in a composite index is not directional, the '__name__' will be
         *     ordered '"ASCENDING"' (unless explicitly specified otherwise). */
        fields: {
          /** @description Immutable. Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can
           *     be specified. Possible values: ["CONTAINS"]. */
          arrayConfig?: string;
          /** @description Immutable. Name of the field. */
          fieldPath?: string;
          /** @description Immutable. Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
           *     Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. */
          order?: string;
        }[];
        /** @description Immutable. The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]. */
        queryScope?: string;
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
        /** @description A server defined name for this index. Format:
         *     'projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/indexes/{{server_generated_id}}'. */
        name?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
      };
    };
  };
}
