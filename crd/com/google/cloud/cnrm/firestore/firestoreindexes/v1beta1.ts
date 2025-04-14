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
  };
}
