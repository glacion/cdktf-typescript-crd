import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDLPStoredInfoTypeV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDLPStoredInfoTypeV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDLPStoredInfoTypeV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "dlp.cnrm.cloud.google.com/v1beta1";
    kind?: "DLPStoredInfoType";
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
      /** @description Description of the StoredInfoType (max 256 characters). */
      description?: string;
      /** @description Store dictionary-based CustomInfoType. */
      dictionary?: {
        /** @description Newline-delimited file of words in Cloud Storage. Only a single file is accepted. */
        cloudStoragePath?: {
          /** @description A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
          path: string;
        };
        /** @description List of words or phrases to search for. */
        wordList?: {
          /** @description Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] */
          words: string[];
        };
      };
      /** @description Display name of the StoredInfoType (max 256 characters). */
      displayName?: string;
      /** @description StoredInfoType where findings are defined by a dictionary of phrases. */
      largeCustomDictionary?: {
        /** @description Field in a BigQuery table where each cell represents a dictionary phrase. */
        bigQueryField?: {
          /** @description Designated field in the BigQuery table. */
          field?: {
            /** @description Name describing the field. */
            name?: string;
          };
          /** @description Source table of the field. */
          table?: {
            datasetRef?: {
              /** @description Dataset ID of the table.
               *
               *     Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            projectRef?: {
              /** @description The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
               *
               *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            tableRef?: {
              /** @description Name of the table.
               *
               *     Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
        };
        /** @description Set of files containing newline-delimited lists of dictionary phrases. */
        cloudStorageFileSet?: {
          /** @description The url, in the format `gs:///`. Trailing wildcard in the path is allowed. */
          url: string;
        };
        /** @description Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used. */
        outputPath?: {
          /** @description A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
          path: string;
        };
      };
      /** @description Immutable. The location of the resource */
      location?: string;
      /** @description Immutable. The Organization that this resource belongs to. Only one of [organizationRef, projectRef] may be specified. */
      organizationRef?: {
        /** @description Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
        external?: string;
        /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
         *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Project that this resource belongs to. Only one of [organizationRef, projectRef] may be specified. */
      projectRef?: {
        /** @description Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Store regular expression-based StoredInfoType. */
      regex?: {
        /** @description The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
        groupIndexes?: number[];
        /** @description Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
        pattern: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    } & (unknown | unknown);
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
