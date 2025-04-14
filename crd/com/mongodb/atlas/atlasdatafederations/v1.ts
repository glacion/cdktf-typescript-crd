import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasDataFederationV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasDataFederationV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasDataFederation", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasDataFederationV1Config extends ManifestConfig {
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
  };
}
