import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class FirestoreCnrmCloudGoogleComFirestoreIndexV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: FirestoreCnrmCloudGoogleComFirestoreIndexV1beta1Config) {
    super(scope, id, config);
  }
}
export interface FirestoreCnrmCloudGoogleComFirestoreIndexV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "firestore.cnrm.cloud.google.com/v1beta1";
    kind: "FirestoreIndex";
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
}
