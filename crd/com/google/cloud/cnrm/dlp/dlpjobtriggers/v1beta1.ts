import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDLPJobTriggerV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDLPJobTriggerV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dlp.cnrm.cloud.google.com/v1beta1", kind: "DLPJobTrigger", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDLPJobTriggerV1beta1Config extends ManifestConfig {
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
      /** @description User provided description (max 256 chars) */
      description?: string;
      /** @description Display name (max 100 chars) */
      displayName?: string;
      /** @description For inspect jobs, a snapshot of the configuration. */
      inspectJob: {
        /** @description Actions to execute at the completion of the job. */
        actions?: {
          /** @description Enable email notification for project owners and editors on job's completion/failure. */
          jobNotificationEmails?: Record<string, never>;
          /** @description Publish a notification to a pubsub topic. */
          pubSub?: {
            topicRef?: {
              /** @description Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
               *
               *     Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`). */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Publish findings to Cloud Datahub. */
          publishFindingsToCloudDataCatalog?: Record<string, never>;
          /** @description Publish summary to Cloud Security Command Center (Alpha). */
          publishSummaryToCscc?: Record<string, never>;
          /** @description Enable Stackdriver metric dlp.googleapis.com/finding_count. */
          publishToStackdriver?: Record<string, never>;
          /** @description Save resulting findings in a provided location. */
          saveFindings?: {
            /** @description Location to store findings outside of DLP. */
            outputConfig?: {
              /** @description Store findings directly to DLP. If neither this or bigquery is chosen only summary stats of total infotype count will be stored. Quotes will not be stored to dlp findings. If quotes are needed, store to BigQuery. Currently only for inspect jobs. */
              dlpStorage?: Record<string, never>;
              /** @description Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. Possible values: OUTPUT_SCHEMA_UNSPECIFIED, BASIC_COLUMNS, GCS_COLUMNS, DATASTORE_COLUMNS, BIG_QUERY_COLUMNS, ALL_COLUMNS */
              outputSchema?: string;
              /** @description Store findings in an existing table or a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for generating the date details. For Inspect, each column in an existing output table must have the same name, type, and mode of a field in the `Finding` object. For Risk, an existing output table should be the output of a previous Risk analysis job run on the same source table, with the same privacy metric and quasi-identifiers. Risk jobs that analyze the same table but compute a different privacy metric, or use different sets of quasi-identifiers, cannot store their results in the same table. */
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
          };
        }[];
        /** @description How and what to scan for. */
        inspectConfig?: {
          /** @description CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more. */
          customInfoTypes?: {
            /** @description Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType. */
            detectionRules?: {
              /** @description Hotword-based detection rule. */
              hotwordRule?: {
                /** @description Regular expression pattern defining what qualifies as a hotword. */
                hotwordRegex?: {
                  /** @description The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
                  groupIndexes?: number[];
                  /** @description Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
                  pattern?: string;
                };
                /** @description Likelihood adjustment to apply to all matching findings. */
                likelihoodAdjustment?: {
                  /** @description Set the likelihood of a finding to a fixed value. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY */
                  fixedLikelihood?: string;
                  /**
                   * Format: int64
                   * @description Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.
                   */
                  relativeLikelihood?: number;
                };
                /** @description Proximity of the finding within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be used to match substrings of the finding itself. For example, the certainty of a phone number regex "(d{3}) d{3}-d{4}" could be adjusted upwards if the area code is known to be the local area code of a company office using the hotword regex "(xxx)", where "xxx" is the area code in question. */
                proximity?: {
                  /**
                   * Format: int64
                   * @description Number of characters after the finding to consider.
                   */
                  windowAfter?: number;
                  /**
                   * Format: int64
                   * @description Number of characters before the finding to consider.
                   */
                  windowBefore?: number;
                };
              };
            }[];
            /** @description A list of phrases to detect as a CustomInfoType. */
            dictionary?: {
              /** @description Newline-delimited file of words in Cloud Storage. Only a single file is accepted. */
              cloudStoragePath?: {
                /** @description A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
                path?: string;
              };
              /** @description List of words or phrases to search for. */
              wordList?: {
                /** @description Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] */
                words?: string[];
              };
            };
            /** @description If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: EXCLUSION_TYPE_UNSPECIFIED, EXCLUSION_TYPE_EXCLUDE */
            exclusionType?: string;
            /** @description CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type. */
            infoType?: {
              /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
              name?: string;
              /** @description Optional version name for this InfoType. */
              version?: string;
            };
            /** @description Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY */
            likelihood?: string;
            /** @description Regular expression based CustomInfoType. */
            regex?: {
              /** @description The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
              groupIndexes?: number[];
              /** @description Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
              pattern?: string;
            };
            /** @description Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`. */
            storedType?: {
              /**
               * Format: date-time
               * @description Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.
               */
              createTime?: string;
              nameRef?: {
                /** @description Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                 *
                 *     Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`). */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            };
            /** @description Message for detecting output from deidentification transformations that support reversing. */
            surrogateType?: Record<string, never>;
          }[];
          /** @description When true, excludes type information of the findings. This is not used for data profiling. */
          excludeInfoTypes?: boolean;
          /** @description When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling. */
          includeQuote?: boolean;
          /** @description Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time. */
          infoTypes?: {
            /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
            name?: string;
          }[];
          /** @description Configuration to control the number of findings returned. This is not used for data profiling. */
          limits?: {
            /** @description Configuration of findings limit given for specified infoTypes. */
            maxFindingsPerInfoType?: {
              /** @description Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit. */
              infoType?: {
                /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                name?: string;
                /** @description Optional version name for this InfoType. */
                version?: string;
              };
              /**
               * Format: int64
               * @description Max findings limit for the given infoType.
               */
              maxFindings?: number;
            }[];
            /**
             * Format: int64
             * @description Max number of findings that will be returned for each item scanned. When set within `InspectJobConfig`, the maximum returned is 2000 regardless if this is set higher. When set within `InspectContentRequest`, this field is ignored.
             */
            maxFindingsPerItem?: number;
            /**
             * Format: int64
             * @description Max number of findings that will be returned per request/job. When set within `InspectContentRequest`, the maximum returned is 2000 regardless if this is set higher.
             */
            maxFindingsPerRequest?: number;
          };
          /** @description Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY */
          minLikelihood?: string;
          /** @description Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type. */
          ruleSet?: {
            /** @description List of infoTypes this rule set is applied to. */
            infoTypes?: {
              /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
              name?: string;
              /** @description Optional version name for this InfoType. */
              version?: string;
            }[];
            /** @description Set of rules to be applied to infoTypes. The rules are applied in order. */
            rules?: {
              /** @description Exclusion rule. */
              exclusionRule?: {
                /** @description Dictionary which defines the rule. */
                dictionary?: {
                  /** @description Newline-delimited file of words in Cloud Storage. Only a single file is accepted. */
                  cloudStoragePath?: {
                    /** @description A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt */
                    path?: string;
                  };
                  /** @description List of words or phrases to search for. */
                  wordList?: {
                    /** @description Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] */
                    words?: string[];
                  };
                };
                /** @description Set of infoTypes for which findings would affect this rule. */
                excludeInfoTypes?: {
                  /** @description InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address. */
                  infoTypes?: {
                    /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                    name?: string;
                    /** @description Optional version name for this InfoType. */
                    version?: string;
                  }[];
                };
                /** @description How the rule is applied, see MatchingType documentation for details. Possible values: MATCHING_TYPE_UNSPECIFIED, MATCHING_TYPE_FULL_MATCH, MATCHING_TYPE_PARTIAL_MATCH, MATCHING_TYPE_INVERSE_MATCH */
                matchingType?: string;
                /** @description Regular expression which defines the rule. */
                regex?: {
                  /** @description The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
                  groupIndexes?: number[];
                  /** @description Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
                  pattern?: string;
                };
              };
              hotwordRule?: {
                /** @description Regular expression pattern defining what qualifies as a hotword. */
                hotwordRegex?: {
                  /** @description The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
                  groupIndexes?: number[];
                  /** @description Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
                  pattern?: string;
                };
                /** @description Likelihood adjustment to apply to all matching findings. */
                likelihoodAdjustment?: {
                  /** @description Set the likelihood of a finding to a fixed value. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY */
                  fixedLikelihood?: string;
                  /**
                   * Format: int64
                   * @description Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.
                   */
                  relativeLikelihood?: number;
                };
                /** @description Proximity of the finding within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be used to match substrings of the finding itself. For example, the certainty of a phone number regex "(d{3}) d{3}-d{4}" could be adjusted upwards if the area code is known to be the local area code of a company office using the hotword regex "(xxx)", where "xxx" is the area code in question. */
                proximity?: {
                  /**
                   * Format: int64
                   * @description Number of characters after the finding to consider.
                   */
                  windowAfter?: number;
                  /**
                   * Format: int64
                   * @description Number of characters before the finding to consider.
                   */
                  windowBefore?: number;
                };
              };
            }[];
          }[];
        };
        inspectTemplateRef?: {
          /** @description If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
           *
           *     Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description The data to scan. */
        storageConfig: {
          /** @description BigQuery options. */
          bigQueryOptions?: {
            /** @description References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings. */
            excludedFields?: {
              /** @description Name describing the field. */
              name?: string;
            }[];
            /** @description Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed. */
            identifyingFields?: {
              /** @description Name describing the field. */
              name?: string;
            }[];
            /** @description Limit scanning only to these fields. */
            includedFields?: {
              /** @description Name describing the field. */
              name?: string;
            }[];
            /**
             * Format: int64
             * @description Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
             */
            rowsLimit?: number;
            /**
             * Format: int64
             * @description Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
             */
            rowsLimitPercent?: number;
            /** @description  Possible values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START */
            sampleMethod?: string;
            /** @description Complete BigQuery table reference. */
            tableReference: {
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
          /** @description Google Cloud Storage options. */
          cloudStorageOptions?: {
            /**
             * Format: int64
             * @description Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.
             */
            bytesLimitPerFile?: number;
            /**
             * Format: int64
             * @description Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.
             */
            bytesLimitPerFilePercent?: number;
            /** @description The set of one or more files to scan. */
            fileSet?: {
              /** @description The regex-filtered set of files to scan. Exactly one of `url` or `regex_file_set` must be set. */
              regexFileSet?: {
                bucketRef: {
                  /** @description The name of a Cloud Storage bucket. Required.
                   *
                   *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
                excludeRegex?: string[];
                /** @description A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
                includeRegex?: string[];
              };
              /** @description The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set. */
              url?: string;
            };
            /** @description List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'. */
            fileTypes?: string[];
            /**
             * Format: int64
             * @description Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0.
             */
            filesLimitPercent?: number;
            /** @description  Possible values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START */
            sampleMethod?: string;
          };
          /** @description Google Cloud Datastore options. */
          datastoreOptions?: {
            /** @description The kind to process. */
            kind?: {
              /** @description The name of the kind. */
              name?: string;
            };
            /** @description A partition ID identifies a grouping of entities. The grouping is always by project namespace ID may be empty. */
            partitionId?: {
              /** @description If not empty, the ID of the namespace to which the entities belong. */
              namespaceId?: string;
              projectRef?: {
                /** @description The ID of the project to which the entities belong.
                 *
                 *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            };
          };
          /** @description Hybrid inspection options. */
          hybridOptions?: {
            /** @description A short description of where the data is coming from. Will be stored once in the job. 256 max length. */
            description?: string;
            /** @description To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
            labels?: {
              [key: string]: string;
            };
            /** @description These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required. */
            requiredFindingLabelKeys?: string[];
            /** @description If the container is a table, additional information to make findings meaningful such as the columns that are primary keys. */
            tableOptions?: {
              /** @description The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided. */
              identifyingFields?: {
                /** @description Name describing the field. */
                name?: string;
              }[];
            };
          };
          timespanConfig?: {
            /** @description When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger. */
            enableAutoPopulationOfTimespanConfig?: boolean;
            /**
             * Format: date-time
             * @description Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
             */
            endTime?: string;
            /**
             * Format: date-time
             * @description Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
             */
            startTime?: string;
            /** @description Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. For BigQuery: If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. For Datastore: If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. */
            timestampField?: {
              /** @description Name describing the field. */
              name?: string;
            };
          };
        };
      };
      /** @description Immutable. The location of the resource */
      location?: string;
      /** @description Immutable. The Project that this resource belongs to. Only one of [projectRef] may be specified. */
      projectRef: {
        /** @description Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Required. A status for this trigger. Possible values: STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED */
      status: string;
      /** @description A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object. */
      triggers: {
        /** @description For use with hybrid jobs. Jobs must be manually created and finished. */
        manual?: Record<string, never>;
        /** @description Create a job on a repeating basis based on the elapse of time. */
        schedule?: {
          /** @description With this option a job is started a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days. */
          recurrencePeriodDuration?: string;
        };
      }[];
    };
  };
}
