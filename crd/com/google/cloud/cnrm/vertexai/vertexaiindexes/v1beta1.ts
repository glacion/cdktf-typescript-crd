import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVertexAIIndexV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVertexAIIndexV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "vertexai.cnrm.cloud.google.com/v1beta1", kind: "VertexAIIndex", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVertexAIIndexV1beta1Config extends ManifestConfig {
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
      /** @description The description of the Index. */
      description?: string;
      /** @description The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters. */
      displayName: string;
      /** @description Immutable. The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
       *     * BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
       *     * STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time. */
      indexUpdateMethod?: string;
      /** @description An additional information about the Index. */
      metadata?: {
        /** @description Immutable. The configuration of the Matching Engine Index. */
        config?: {
          /** @description The configuration with regard to the algorithms used for efficient search. */
          algorithmConfig?: {
            /** @description Configuration options for using brute force search, which simply implements the
             *     standard linear search in the database for each query. */
            bruteForceConfig?: Record<string, never>;
            /** @description Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
             *     Please refer to this paper for more details: https://arxiv.org/abs/1908.10396. */
            treeAhConfig?: {
              /** @description Number of embeddings on each leaf node. The default value is 1000 if not set. */
              leafNodeEmbeddingCount?: number;
              /** @description The default percentage of leaf nodes that any query may be searched. Must be in
               *     range 1-100, inclusive. The default value is 10 (means 10%) if not set. */
              leafNodesToSearchPercent?: number;
            };
          };
          /** @description The default number of neighbors to find via approximate search before exact reordering is
           *     performed. Exact reordering is a procedure where results returned by an
           *     approximate search algorithm are reordered via a more expensive distance computation.
           *     Required if tree-AH algorithm is used. */
          approximateNeighborsCount?: number;
          /** @description The number of dimensions of the input vectors. */
          dimensions: number;
          /** @description The distance measure used in nearest neighbor search. The value must be one of the followings:
           *     * SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
           *     * L1_DISTANCE: Manhattan (L_1) Distance
           *     * COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
           *     * DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product. */
          distanceMeasureType?: string;
          /** @description Type of normalization to be carried out on each vector. The value must be one of the followings:
           *     * UNIT_L2_NORM: Unit L2 normalization type
           *     * NONE: No normalization type is specified. */
          featureNormType?: string;
          /** @description Immutable. Index data is split into equal parts to be processed. These are called "shards".
           *     The shard size must be specified when creating an index. The value must be one of the followings:
           *     * SHARD_SIZE_SMALL: Small (2GB)
           *     * SHARD_SIZE_MEDIUM: Medium (20GB)
           *     * SHARD_SIZE_LARGE: Large (50GB). */
          shardSize?: string;
        };
        /** @description Allows creating or replacing the contents of the Matching Engine Index.
         *     When being updated, the existing content of the Index will be replaced by the data
         *     from the latest contentsDeltaUri.
         *     The string must be a valid Cloud Storage directory path. If this
         *     field is set when calling IndexService.UpdateIndex, then no other
         *     Index field can be also updated as part of the same call.
         *     The expected structure and format of the files this URI points to is
         *     described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format. */
        contentsDeltaUri?: string;
      };
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The region of the index. eg us-central1. */
      region: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
