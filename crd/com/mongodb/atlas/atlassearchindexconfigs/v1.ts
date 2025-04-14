import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasSearchIndexConfigV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasSearchIndexConfigV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasSearchIndexConfig", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasSearchIndexConfigV1Config extends ManifestConfig {
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
      /** @description Specific pre-defined method chosen to convert database field text into searchable words. This conversion reduces the text of fields into the smallest units of text. These units are called a term or token. This process, known as tokenization, involves a variety of changes made to the text in fields:
       *     - extracting words
       *     - removing punctuation
       *     - removing accents
       *     - hanging to lowercase
       *     - removing common words
       *     - reducing words to their root form (stemming)
       *     - changing words to their base form (lemmatization) MongoDB Cloud uses the selected process to build the Atlas Search index */
      analyzer?: string;
      /** @description List of user-defined methods to convert database field text into searchable words */
      analyzers?: {
        /** @description Filters that examine text one character at a time and perform filtering operations */
        charFilters?: unknown;
        /** @description Human-readable name that identifies the custom analyzer. Names must be unique within an index, and must not start with any of the following strings:
         *     "lucene.", "builtin.", "mongodb." */
        name: string;
        /** @description Filter that performs operations such as:
         *     - Stemming, which reduces related words, such as "talking", "talked", and "talks" to their root word "talk".
         *     - Redaction, the removal of sensitive information from public documents */
        tokenFilters?: unknown;
        /** @description Tokenizer that you want to use to create tokens. Tokens determine how Atlas Search splits up text into discrete chunks for indexing */
        tokenizer: {
          /** @description Index of the character group within the matching expression to extract into tokens. Use `0` to extract all character groups. */
          group?: number;
          /** @description Characters to include in the longest token that Atlas Search creates. */
          maxGram?: number;
          /** @description Maximum number of characters in a single token. Tokens greater than this length are split at this length into multiple tokens. */
          maxTokenLength?: number;
          /** @description Characters to include in the shortest token that Atlas Search creates. */
          minGram?: number;
          /** @description Regular expression to match against. */
          pattern?: string;
          /**
           * @description Human-readable label that identifies this tokenizer type.
           * @enum {string}
           */
          type:
            | "whitespace"
            | "uaxUrlEmail"
            | "standard"
            | "regexSplit"
            | "regexCaptureGroup"
            | "nGram"
            | "keyword"
            | "edgeGram";
        };
      }[];
      /** @description Method applied to identify words when searching this index */
      searchAnalyzer?: string;
      /** @description Flag that indicates whether to store all fields (true) on Atlas Search. By default, Atlas doesn't store (false) the fields on Atlas Search. Alternatively, you can specify an object that only contains the list of fields to store (include) or not store (exclude) on Atlas Search. To learn more, see documentation:
       *     https://www.mongodb.com/docs/atlas/atlas-search/stored-source-definition/ */
      storedSource?: unknown;
    };
  };
}
