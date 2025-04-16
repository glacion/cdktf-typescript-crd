import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDLPInspectTemplateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDLPInspectTemplateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDLPInspectTemplateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "dlp.cnrm.cloud.google.com/v1beta1";
    kind?: "DLPInspectTemplate";
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
      /** @description Short description (max 256 chars). */
      description?: string;
      /** @description Display name (max 256 chars). */
      displayName?: string;
      /** @description The core content of the template. Configuration of the scanning process. */
      inspectConfig?: {
        /** @description List of options defining data content to scan. If empty, text, images, and other content will be included. */
        contentOptions?: string[];
        /** @description CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more. */
        customInfoTypes?: {
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
        /** @description When true, excludes type information of the findings. */
        excludeInfoTypes?: boolean;
        /** @description When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. */
        includeQuote?: boolean;
        /** @description Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time. */
        infoTypes?: {
          /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
          name?: string;
        }[];
        /** @description Configuration to control the number of findings returned. */
        limits?: {
          /** @description Configuration of findings limit given for specified infoTypes. */
          maxFindingsPerInfoType?: {
            /** @description Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit. */
            infoType?: {
              /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
              name?: string;
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
      /**
       * Format: date-time
       * @description Output only. The creation timestamp of an inspectTemplate.
       */
      createTime?: string;
      /** @description Output only. The geographic location where this resource is stored. */
      locationId?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /**
       * Format: date-time
       * @description Output only. The last update timestamp of an inspectTemplate.
       */
      updateTime?: string;
    };
  };
}
