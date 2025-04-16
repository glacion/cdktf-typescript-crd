import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasDataFederationV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAtlasDataFederationV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAtlasDataFederationV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "atlas.mongodb.com/v1";
    kind?: "AtlasDataFederation";
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
      cloudProviderConfig?: {
        aws?: {
          roleId?: string;
          testS3Bucket?: string;
        };
      };
      dataProcessRegion?: {
        cloudProvider?: string;
        region?: string;
      };
      name: string;
      privateEndpoints?: {
        endpointId?: string;
        provider?: string;
        type?: string;
      }[];
      /** @description Project is a reference to AtlasProject resource the deployment belongs to */
      projectRef: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      storage?: {
        databases?: {
          collections?: {
            dataSources?: {
              allowInsecure?: boolean;
              collection?: string;
              collectionRegex?: string;
              database?: string;
              databaseRegex?: string;
              /** @enum {string} */
              defaultFormat?:
                | ".avro"
                | ".avro.bz2"
                | ".avro.gz"
                | ".bson"
                | ".bson.bz2"
                | ".bson.gz"
                | ".bsonx"
                | ".csv"
                | ".csv.bz2"
                | ".csv.gz"
                | ".json"
                | ".json.bz2"
                | ".json.gz"
                | ".orc"
                | ".parquet"
                | ".tsv"
                | ".tsv.bz2"
                | ".tsv.gz";
              path?: string;
              provenanceFieldName?: string;
              storeName?: string;
              urls?: string[];
            }[];
            name?: string;
          }[];
          maxWildcardCollections?: number;
          name?: string;
          views?: {
            name?: string;
            pipeline?: string;
            source?: string;
          }[];
        }[];
        stores?: {
          additionalStorageClasses?: string[];
          bucket?: string;
          delimiter?: string;
          includeTags?: boolean;
          name?: string;
          prefix?: string;
          provider?: string;
          public?: boolean;
          region?: string;
        }[];
      };
    };
    status?: {
      /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
      conditions: {
        /**
         * Format: date-time
         * @description Last time the condition transitioned from one status to another.
         */
        lastTransitionTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type of Atlas Custom Resource condition. */
        type: string;
      }[];
      /** @description MongoDBVersion is the version of MongoDB the cluster runs, in <major version>.<minor version> format. */
      mongoDBVersion?: string;
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
    };
  };
}
