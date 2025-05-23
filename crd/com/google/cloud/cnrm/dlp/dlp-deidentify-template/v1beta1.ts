import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDLPDeidentifyTemplateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDLPDeidentifyTemplateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDLPDeidentifyTemplateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "dlp.cnrm.cloud.google.com/v1beta1";
    kind?: "DLPDeidentifyTemplate";
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
      /** @description The core content of the template. */
      deidentifyConfig?: {
        /** @description Treat the dataset as free-form text and apply the same free text transformation everywhere. */
        infoTypeTransformations?: {
          /** @description Required. Transformation for each infoType. Cannot specify more than one for a given infoType. */
          transformations: {
            /** @description InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`. */
            infoTypes?: {
              /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
              name?: string;
            }[];
            /** @description Required. Primitive transformation to apply to the infoType. */
            primitiveTransformation: {
              /** @description Bucketing */
              bucketingConfig?: {
                /** @description Set of buckets. Ranges must be non-overlapping. */
                buckets?: {
                  /** @description Upper bound of the range, exclusive; type must match min. */
                  max?: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                  /** @description Lower bound of the range, inclusive. Type should be the same as max if used. */
                  min?: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                  /** @description Required. Replacement value for this bucket. */
                  replacementValue: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                }[];
              };
              /** @description Mask */
              characterMaskConfig?: {
                /** @description When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`. */
                charactersToIgnore?: {
                  /** @description Characters to not transform when masking. */
                  charactersToSkip?: string;
                  /** @description Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: COMMON_CHARS_TO_IGNORE_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE */
                  commonCharactersToIgnore?: string;
                }[];
                /** @description Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
                maskingCharacter?: string;
                /**
                 * Format: int64
                 * @description Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
                 */
                numberToMask?: number;
                /** @description Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
                reverseOrder?: boolean;
              };
              /** @description Deterministic Crypto */
              cryptoDeterministicConfig?: {
                /** @description A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well. If the context is not set, plaintext would be used as is for encryption. If the context is set but: 1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value, plaintext would be used as is for encryption. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description The key used by the encryption function. For deterministic encryption using AES-SIV, the provided key is internally expanded to 64 bytes prior to use. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /** @description The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: {info type name}({surrogate character count}):{surrogate} For example, if the name of custom info type is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom info type 'Surrogate'. This facilitates reversal of the surrogate when it occurs in free text. Note: For record transformations where the entire cell in a table is being transformed, surrogates are not mandatory. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text. In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE. */
                surrogateInfoType?: {
                  /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                  name?: string;
                };
              };
              /** @description Crypto */
              cryptoHashConfig?: {
                /** @description The key used by the hash function. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
              };
              /** @description Ffx-Fpe */
              cryptoReplaceFfxFpeConfig?: {
                /** @description Common alphabets. Possible values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC */
                commonAlphabet?: string;
                /** @description The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used. If the context is set but: 1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value, a default tweak will be used. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string. The tweak is constructed as a sequence of bytes in big endian byte order such that: - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2 */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description Required. The key used by the encryption algorithm. */
                cryptoKey: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /** @description This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: ``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|:;"'<,>.?/`` */
                customAlphabet?: string;
                /**
                 * Format: int64
                 * @description The native way to select the alphabet. Must be in the range [2, 95].
                 */
                radix?: number;
                /** @description The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text. In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE */
                surrogateInfoType?: {
                  /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                  name?: string;
                };
              };
              /** @description Date Shift */
              dateShiftConfig?: {
                /** @description Points to the field that contains the context, for example, an entity id. If set, must also set cryptoKey. If set, shift will be consistent for the given context. */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key. If set, must also set context. Can only be applied to table items. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /**
                 * Format: int64
                 * @description Required. For example, -5 means shift date to at most 5 days back in the past.
                 */
                lowerBoundDays: number;
                /**
                 * Format: int64
                 * @description Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.
                 */
                upperBoundDays: number;
              };
              /** @description Fixed size bucketing */
              fixedSizeBucketingConfig?: {
                /**
                 * Format: double
                 * @description Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
                 */
                bucketSize: number;
                /** @description Required. Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value "-10". */
                lowerBound: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
                /** @description Required. Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value "89+". */
                upperBound: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
              };
              /** @description Redact */
              redactConfig?: Record<string, never>;
              /** @description Replace with a specified value. */
              replaceConfig?: {
                /** @description Value to replace it with. */
                newValue?: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
              };
              /** @description Replace with infotype */
              replaceWithInfoTypeConfig?: Record<string, never>;
              /** @description Time extraction */
              timePartConfig?: {
                /** @description The part of the time to keep. Possible values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY */
                partToExtract?: string;
              };
            };
          }[];
        };
        /** @description Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table. */
        recordTransformations?: {
          /** @description Transform the record by applying various field transformations. */
          fieldTransformations?: {
            /** @description Only apply the transformation if the condition evaluates to true for the given `RecordCondition`. The conditions are allowed to reference fields that are not used in the actual transformation. Example Use Cases: - Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range. - Redact a field if the date of birth field is greater than 85. */
            condition?: {
              /** @description An expression. */
              expressions?: {
                /** @description Conditions to apply to the expression. */
                conditions?: {
                  /** @description A collection of conditions. */
                  conditions?: {
                    /** @description Required. Field within the record this condition is evaluated against. */
                    field: {
                      /** @description Name describing the field. */
                      name?: string;
                    };
                    /** @description Required. Operator used to compare the field or infoType to the value. Possible values: LOGICAL_OPERATOR_UNSPECIFIED, AND */
                    operator: string;
                    /** @description Value to compare against. [Mandatory, except for `EXISTS` tests.] */
                    value?: {
                      /** @description boolean */
                      booleanValue?: boolean;
                      /** @description date */
                      dateValue?: {
                        /**
                         * Format: int64
                         * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                         */
                        day?: number;
                        /**
                         * Format: int64
                         * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                         */
                        month?: number;
                        /**
                         * Format: int64
                         * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                         */
                        year?: number;
                      };
                      /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                      dayOfWeekValue?: string;
                      /**
                       * Format: double
                       * @description float
                       */
                      floatValue?: number;
                      /**
                       * Format: int64
                       * @description integer
                       */
                      integerValue?: number;
                      /** @description string */
                      stringValue?: string;
                      /** @description time of day */
                      timeValue?: {
                        /**
                         * Format: int64
                         * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                         */
                        hours?: number;
                        /**
                         * Format: int64
                         * @description Minutes of hour of day. Must be from 0 to 59.
                         */
                        minutes?: number;
                        /**
                         * Format: int64
                         * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                         */
                        nanos?: number;
                        /**
                         * Format: int64
                         * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                         */
                        seconds?: number;
                      };
                      /**
                       * Format: date-time
                       * @description timestamp
                       */
                      timestampValue?: string;
                    };
                  }[];
                };
                /** @description The operator to apply to the result of conditions. Default and currently only supported value is `AND`. Possible values: LOGICAL_OPERATOR_UNSPECIFIED, AND */
                logicalOperator?: string;
              };
            };
            /** @description Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type". */
            fields: {
              /** @description Name describing the field. */
              name?: string;
            }[];
            /** @description Treat the contents of the field as free text, and selectively transform content that matches an `InfoType`. */
            infoTypeTransformations?: {
              /** @description Required. Transformation for each infoType. Cannot specify more than one for a given infoType. */
              transformations: {
                /** @description InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`. */
                infoTypes?: {
                  /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                  name?: string;
                }[];
                /** @description Required. Primitive transformation to apply to the infoType. */
                primitiveTransformation: {
                  /** @description Bucketing */
                  bucketingConfig?: {
                    /** @description Set of buckets. Ranges must be non-overlapping. */
                    buckets?: {
                      /** @description Upper bound of the range, exclusive; type must match min. */
                      max?: {
                        /** @description boolean */
                        booleanValue?: boolean;
                        /** @description date */
                        dateValue?: {
                          /**
                           * Format: int64
                           * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                           */
                          day?: number;
                          /**
                           * Format: int64
                           * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                           */
                          month?: number;
                          /**
                           * Format: int64
                           * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                           */
                          year?: number;
                        };
                        /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                        dayOfWeekValue?: string;
                        /**
                         * Format: double
                         * @description float
                         */
                        floatValue?: number;
                        /**
                         * Format: int64
                         * @description integer
                         */
                        integerValue?: number;
                        /** @description string */
                        stringValue?: string;
                        /** @description time of day */
                        timeValue?: {
                          /**
                           * Format: int64
                           * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                           */
                          hours?: number;
                          /**
                           * Format: int64
                           * @description Minutes of hour of day. Must be from 0 to 59.
                           */
                          minutes?: number;
                          /**
                           * Format: int64
                           * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                           */
                          nanos?: number;
                          /**
                           * Format: int64
                           * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                           */
                          seconds?: number;
                        };
                        /**
                         * Format: date-time
                         * @description timestamp
                         */
                        timestampValue?: string;
                      };
                      /** @description Lower bound of the range, inclusive. Type should be the same as max if used. */
                      min?: {
                        /** @description boolean */
                        booleanValue?: boolean;
                        /** @description date */
                        dateValue?: {
                          /**
                           * Format: int64
                           * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                           */
                          day?: number;
                          /**
                           * Format: int64
                           * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                           */
                          month?: number;
                          /**
                           * Format: int64
                           * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                           */
                          year?: number;
                        };
                        /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                        dayOfWeekValue?: string;
                        /**
                         * Format: double
                         * @description float
                         */
                        floatValue?: number;
                        /**
                         * Format: int64
                         * @description integer
                         */
                        integerValue?: number;
                        /** @description string */
                        stringValue?: string;
                        /** @description time of day */
                        timeValue?: {
                          /**
                           * Format: int64
                           * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                           */
                          hours?: number;
                          /**
                           * Format: int64
                           * @description Minutes of hour of day. Must be from 0 to 59.
                           */
                          minutes?: number;
                          /**
                           * Format: int64
                           * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                           */
                          nanos?: number;
                          /**
                           * Format: int64
                           * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                           */
                          seconds?: number;
                        };
                        /**
                         * Format: date-time
                         * @description timestamp
                         */
                        timestampValue?: string;
                      };
                      /** @description Required. Replacement value for this bucket. */
                      replacementValue: {
                        /** @description boolean */
                        booleanValue?: boolean;
                        /** @description date */
                        dateValue?: {
                          /**
                           * Format: int64
                           * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                           */
                          day?: number;
                          /**
                           * Format: int64
                           * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                           */
                          month?: number;
                          /**
                           * Format: int64
                           * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                           */
                          year?: number;
                        };
                        /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                        dayOfWeekValue?: string;
                        /**
                         * Format: double
                         * @description float
                         */
                        floatValue?: number;
                        /**
                         * Format: int64
                         * @description integer
                         */
                        integerValue?: number;
                        /** @description string */
                        stringValue?: string;
                        /** @description time of day */
                        timeValue?: {
                          /**
                           * Format: int64
                           * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                           */
                          hours?: number;
                          /**
                           * Format: int64
                           * @description Minutes of hour of day. Must be from 0 to 59.
                           */
                          minutes?: number;
                          /**
                           * Format: int64
                           * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                           */
                          nanos?: number;
                          /**
                           * Format: int64
                           * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                           */
                          seconds?: number;
                        };
                        /**
                         * Format: date-time
                         * @description timestamp
                         */
                        timestampValue?: string;
                      };
                    }[];
                  };
                  /** @description Mask */
                  characterMaskConfig?: {
                    /** @description When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`. */
                    charactersToIgnore?: {
                      /** @description Characters to not transform when masking. */
                      charactersToSkip?: string;
                      /** @description Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: COMMON_CHARS_TO_IGNORE_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE */
                      commonCharactersToIgnore?: string;
                    }[];
                    /** @description Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
                    maskingCharacter?: string;
                    /**
                     * Format: int64
                     * @description Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
                     */
                    numberToMask?: number;
                    /** @description Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
                    reverseOrder?: boolean;
                  };
                  /** @description Deterministic Crypto */
                  cryptoDeterministicConfig?: {
                    /** @description A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well. If the context is not set, plaintext would be used as is for encryption. If the context is set but: 1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value, plaintext would be used as is for encryption. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. */
                    context?: {
                      /** @description Name describing the field. */
                      name?: string;
                    };
                    /** @description The key used by the encryption function. For deterministic encryption using AES-SIV, the provided key is internally expanded to 64 bytes prior to use. */
                    cryptoKey?: {
                      /** @description Key wrapped using Cloud KMS */
                      kmsWrapped?: {
                        cryptoKeyRef: {
                          /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                           *
                           *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                          external?: string;
                          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                          name?: string;
                          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                          namespace?: string;
                        } & (unknown | unknown);
                        /** @description Required. The wrapped data crypto key. */
                        wrappedKey: string;
                      };
                      /** @description Transient crypto key */
                      transient?: {
                        /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                        name: string;
                      };
                      /** @description Unwrapped crypto key */
                      unwrapped?: {
                        /** @description Required. A 128/192/256 bit key. */
                        key: string;
                      };
                    };
                    /** @description The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: {info type name}({surrogate character count}):{surrogate} For example, if the name of custom info type is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom info type 'Surrogate'. This facilitates reversal of the surrogate when it occurs in free text. Note: For record transformations where the entire cell in a table is being transformed, surrogates are not mandatory. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text. In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE. */
                    surrogateInfoType?: {
                      /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                      name?: string;
                    };
                  };
                  /** @description Crypto */
                  cryptoHashConfig?: {
                    /** @description The key used by the hash function. */
                    cryptoKey?: {
                      /** @description Key wrapped using Cloud KMS */
                      kmsWrapped?: {
                        cryptoKeyRef: {
                          /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                           *
                           *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                          external?: string;
                          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                          name?: string;
                          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                          namespace?: string;
                        } & (unknown | unknown);
                        /** @description Required. The wrapped data crypto key. */
                        wrappedKey: string;
                      };
                      /** @description Transient crypto key */
                      transient?: {
                        /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                        name: string;
                      };
                      /** @description Unwrapped crypto key */
                      unwrapped?: {
                        /** @description Required. A 128/192/256 bit key. */
                        key: string;
                      };
                    };
                  };
                  /** @description Ffx-Fpe */
                  cryptoReplaceFfxFpeConfig?: {
                    /** @description Common alphabets. Possible values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC */
                    commonAlphabet?: string;
                    /** @description The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used. If the context is set but: 1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value, a default tweak will be used. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string. The tweak is constructed as a sequence of bytes in big endian byte order such that: - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2 */
                    context?: {
                      /** @description Name describing the field. */
                      name?: string;
                    };
                    /** @description Required. The key used by the encryption algorithm. */
                    cryptoKey: {
                      /** @description Key wrapped using Cloud KMS */
                      kmsWrapped?: {
                        cryptoKeyRef: {
                          /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                           *
                           *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                          external?: string;
                          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                          name?: string;
                          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                          namespace?: string;
                        } & (unknown | unknown);
                        /** @description Required. The wrapped data crypto key. */
                        wrappedKey: string;
                      };
                      /** @description Transient crypto key */
                      transient?: {
                        /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                        name: string;
                      };
                      /** @description Unwrapped crypto key */
                      unwrapped?: {
                        /** @description Required. A 128/192/256 bit key. */
                        key: string;
                      };
                    };
                    /** @description This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: ``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|:;"'<,>.?/`` */
                    customAlphabet?: string;
                    /**
                     * Format: int64
                     * @description The native way to select the alphabet. Must be in the range [2, 95].
                     */
                    radix?: number;
                    /** @description The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text. In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE */
                    surrogateInfoType?: {
                      /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                      name?: string;
                    };
                  };
                  /** @description Date Shift */
                  dateShiftConfig?: {
                    /** @description Points to the field that contains the context, for example, an entity id. If set, must also set cryptoKey. If set, shift will be consistent for the given context. */
                    context?: {
                      /** @description Name describing the field. */
                      name?: string;
                    };
                    /** @description Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key. If set, must also set context. Can only be applied to table items. */
                    cryptoKey?: {
                      /** @description Key wrapped using Cloud KMS */
                      kmsWrapped?: {
                        cryptoKeyRef: {
                          /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                           *
                           *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                          external?: string;
                          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                          name?: string;
                          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                          namespace?: string;
                        } & (unknown | unknown);
                        /** @description Required. The wrapped data crypto key. */
                        wrappedKey: string;
                      };
                      /** @description Transient crypto key */
                      transient?: {
                        /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                        name: string;
                      };
                      /** @description Unwrapped crypto key */
                      unwrapped?: {
                        /** @description Required. A 128/192/256 bit key. */
                        key: string;
                      };
                    };
                    /**
                     * Format: int64
                     * @description Required. For example, -5 means shift date to at most 5 days back in the past.
                     */
                    lowerBoundDays: number;
                    /**
                     * Format: int64
                     * @description Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.
                     */
                    upperBoundDays: number;
                  };
                  /** @description Fixed size bucketing */
                  fixedSizeBucketingConfig?: {
                    /**
                     * Format: double
                     * @description Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
                     */
                    bucketSize: number;
                    /** @description Required. Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value "-10". */
                    lowerBound: {
                      /** @description boolean */
                      booleanValue?: boolean;
                      /** @description date */
                      dateValue?: {
                        /**
                         * Format: int64
                         * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                         */
                        day?: number;
                        /**
                         * Format: int64
                         * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                         */
                        month?: number;
                        /**
                         * Format: int64
                         * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                         */
                        year?: number;
                      };
                      /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                      dayOfWeekValue?: string;
                      /**
                       * Format: double
                       * @description float
                       */
                      floatValue?: number;
                      /**
                       * Format: int64
                       * @description integer
                       */
                      integerValue?: number;
                      /** @description string */
                      stringValue?: string;
                      /** @description time of day */
                      timeValue?: {
                        /**
                         * Format: int64
                         * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                         */
                        hours?: number;
                        /**
                         * Format: int64
                         * @description Minutes of hour of day. Must be from 0 to 59.
                         */
                        minutes?: number;
                        /**
                         * Format: int64
                         * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                         */
                        nanos?: number;
                        /**
                         * Format: int64
                         * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                         */
                        seconds?: number;
                      };
                      /**
                       * Format: date-time
                       * @description timestamp
                       */
                      timestampValue?: string;
                    };
                    /** @description Required. Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value "89+". */
                    upperBound: {
                      /** @description boolean */
                      booleanValue?: boolean;
                      /** @description date */
                      dateValue?: {
                        /**
                         * Format: int64
                         * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                         */
                        day?: number;
                        /**
                         * Format: int64
                         * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                         */
                        month?: number;
                        /**
                         * Format: int64
                         * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                         */
                        year?: number;
                      };
                      /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                      dayOfWeekValue?: string;
                      /**
                       * Format: double
                       * @description float
                       */
                      floatValue?: number;
                      /**
                       * Format: int64
                       * @description integer
                       */
                      integerValue?: number;
                      /** @description string */
                      stringValue?: string;
                      /** @description time of day */
                      timeValue?: {
                        /**
                         * Format: int64
                         * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                         */
                        hours?: number;
                        /**
                         * Format: int64
                         * @description Minutes of hour of day. Must be from 0 to 59.
                         */
                        minutes?: number;
                        /**
                         * Format: int64
                         * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                         */
                        nanos?: number;
                        /**
                         * Format: int64
                         * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                         */
                        seconds?: number;
                      };
                      /**
                       * Format: date-time
                       * @description timestamp
                       */
                      timestampValue?: string;
                    };
                  };
                  /** @description Redact */
                  redactConfig?: Record<string, never>;
                  /** @description Replace with a specified value. */
                  replaceConfig?: {
                    /** @description Value to replace it with. */
                    newValue?: {
                      /** @description boolean */
                      booleanValue?: boolean;
                      /** @description date */
                      dateValue?: {
                        /**
                         * Format: int64
                         * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                         */
                        day?: number;
                        /**
                         * Format: int64
                         * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                         */
                        month?: number;
                        /**
                         * Format: int64
                         * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                         */
                        year?: number;
                      };
                      /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                      dayOfWeekValue?: string;
                      /**
                       * Format: double
                       * @description float
                       */
                      floatValue?: number;
                      /**
                       * Format: int64
                       * @description integer
                       */
                      integerValue?: number;
                      /** @description string */
                      stringValue?: string;
                      /** @description time of day */
                      timeValue?: {
                        /**
                         * Format: int64
                         * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                         */
                        hours?: number;
                        /**
                         * Format: int64
                         * @description Minutes of hour of day. Must be from 0 to 59.
                         */
                        minutes?: number;
                        /**
                         * Format: int64
                         * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                         */
                        nanos?: number;
                        /**
                         * Format: int64
                         * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                         */
                        seconds?: number;
                      };
                      /**
                       * Format: date-time
                       * @description timestamp
                       */
                      timestampValue?: string;
                    };
                  };
                  /** @description Replace with infotype */
                  replaceWithInfoTypeConfig?: Record<string, never>;
                  /** @description Time extraction */
                  timePartConfig?: {
                    /** @description The part of the time to keep. Possible values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY */
                    partToExtract?: string;
                  };
                };
              }[];
            };
            /** @description Apply the transformation to the entire field. */
            primitiveTransformation?: {
              /** @description Bucketing */
              bucketingConfig?: {
                /** @description Set of buckets. Ranges must be non-overlapping. */
                buckets?: {
                  /** @description Upper bound of the range, exclusive; type must match min. */
                  max?: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                  /** @description Lower bound of the range, inclusive. Type should be the same as max if used. */
                  min?: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                  /** @description Required. Replacement value for this bucket. */
                  replacementValue: {
                    /** @description boolean */
                    booleanValue?: boolean;
                    /** @description date */
                    dateValue?: {
                      /**
                       * Format: int64
                       * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                       */
                      day?: number;
                      /**
                       * Format: int64
                       * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                       */
                      month?: number;
                      /**
                       * Format: int64
                       * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                       */
                      year?: number;
                    };
                    /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                    dayOfWeekValue?: string;
                    /**
                     * Format: double
                     * @description float
                     */
                    floatValue?: number;
                    /**
                     * Format: int64
                     * @description integer
                     */
                    integerValue?: number;
                    /** @description string */
                    stringValue?: string;
                    /** @description time of day */
                    timeValue?: {
                      /**
                       * Format: int64
                       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                       */
                      hours?: number;
                      /**
                       * Format: int64
                       * @description Minutes of hour of day. Must be from 0 to 59.
                       */
                      minutes?: number;
                      /**
                       * Format: int64
                       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                       */
                      nanos?: number;
                      /**
                       * Format: int64
                       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                       */
                      seconds?: number;
                    };
                    /**
                     * Format: date-time
                     * @description timestamp
                     */
                    timestampValue?: string;
                  };
                }[];
              };
              /** @description Mask */
              characterMaskConfig?: {
                /** @description When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`. */
                charactersToIgnore?: {
                  /** @description Characters to not transform when masking. */
                  charactersToSkip?: string;
                  /** @description Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: COMMON_CHARS_TO_IGNORE_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE */
                  commonCharactersToIgnore?: string;
                }[];
                /** @description Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
                maskingCharacter?: string;
                /**
                 * Format: int64
                 * @description Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
                 */
                numberToMask?: number;
                /** @description Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
                reverseOrder?: boolean;
              };
              /** @description Deterministic Crypto */
              cryptoDeterministicConfig?: {
                /** @description A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well. If the context is not set, plaintext would be used as is for encryption. If the context is set but: 1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value, plaintext would be used as is for encryption. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description The key used by the encryption function. For deterministic encryption using AES-SIV, the provided key is internally expanded to 64 bytes prior to use. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /** @description The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: {info type name}({surrogate character count}):{surrogate} For example, if the name of custom info type is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom info type 'Surrogate'. This facilitates reversal of the surrogate when it occurs in free text. Note: For record transformations where the entire cell in a table is being transformed, surrogates are not mandatory. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text. In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE. */
                surrogateInfoType?: {
                  /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                  name?: string;
                };
              };
              /** @description Crypto */
              cryptoHashConfig?: {
                /** @description The key used by the hash function. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
              };
              /** @description Ffx-Fpe */
              cryptoReplaceFfxFpeConfig?: {
                /** @description Common alphabets. Possible values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC */
                commonAlphabet?: string;
                /** @description The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used. If the context is set but: 1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value, a default tweak will be used. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string. The tweak is constructed as a sequence of bytes in big endian byte order such that: - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2 */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description Required. The key used by the encryption algorithm. */
                cryptoKey: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /** @description This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: ``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|:;"'<,>.?/`` */
                customAlphabet?: string;
                /**
                 * Format: int64
                 * @description The native way to select the alphabet. Must be in the range [2, 95].
                 */
                radix?: number;
                /** @description The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text. In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE */
                surrogateInfoType?: {
                  /** @description Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`. */
                  name?: string;
                };
              };
              /** @description Date Shift */
              dateShiftConfig?: {
                /** @description Points to the field that contains the context, for example, an entity id. If set, must also set cryptoKey. If set, shift will be consistent for the given context. */
                context?: {
                  /** @description Name describing the field. */
                  name?: string;
                };
                /** @description Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key. If set, must also set context. Can only be applied to table items. */
                cryptoKey?: {
                  /** @description Key wrapped using Cloud KMS */
                  kmsWrapped?: {
                    cryptoKeyRef: {
                      /** @description Required. The resource name of the KMS CryptoKey to use for unwrapping.
                       *
                       *     Allowed value: The Google Cloud resource name of a `KMSCryptoKey` resource (format: `{{selfLink}}`). */
                      external?: string;
                      /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                      name?: string;
                      /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                      namespace?: string;
                    } & (unknown | unknown);
                    /** @description Required. The wrapped data crypto key. */
                    wrappedKey: string;
                  };
                  /** @description Transient crypto key */
                  transient?: {
                    /** @description Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
                    name: string;
                  };
                  /** @description Unwrapped crypto key */
                  unwrapped?: {
                    /** @description Required. A 128/192/256 bit key. */
                    key: string;
                  };
                };
                /**
                 * Format: int64
                 * @description Required. For example, -5 means shift date to at most 5 days back in the past.
                 */
                lowerBoundDays: number;
                /**
                 * Format: int64
                 * @description Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.
                 */
                upperBoundDays: number;
              };
              /** @description Fixed size bucketing */
              fixedSizeBucketingConfig?: {
                /**
                 * Format: double
                 * @description Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
                 */
                bucketSize: number;
                /** @description Required. Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value "-10". */
                lowerBound: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
                /** @description Required. Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value "89+". */
                upperBound: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
              };
              /** @description Redact */
              redactConfig?: Record<string, never>;
              /** @description Replace with a specified value. */
              replaceConfig?: {
                /** @description Value to replace it with. */
                newValue?: {
                  /** @description boolean */
                  booleanValue?: boolean;
                  /** @description date */
                  dateValue?: {
                    /**
                     * Format: int64
                     * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                     */
                    day?: number;
                    /**
                     * Format: int64
                     * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                     */
                    month?: number;
                    /**
                     * Format: int64
                     * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                     */
                    year?: number;
                  };
                  /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                  dayOfWeekValue?: string;
                  /**
                   * Format: double
                   * @description float
                   */
                  floatValue?: number;
                  /**
                   * Format: int64
                   * @description integer
                   */
                  integerValue?: number;
                  /** @description string */
                  stringValue?: string;
                  /** @description time of day */
                  timeValue?: {
                    /**
                     * Format: int64
                     * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                     */
                    hours?: number;
                    /**
                     * Format: int64
                     * @description Minutes of hour of day. Must be from 0 to 59.
                     */
                    minutes?: number;
                    /**
                     * Format: int64
                     * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                     */
                    nanos?: number;
                    /**
                     * Format: int64
                     * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                     */
                    seconds?: number;
                  };
                  /**
                   * Format: date-time
                   * @description timestamp
                   */
                  timestampValue?: string;
                };
              };
              /** @description Replace with infotype */
              replaceWithInfoTypeConfig?: Record<string, never>;
              /** @description Time extraction */
              timePartConfig?: {
                /** @description The part of the time to keep. Possible values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY */
                partToExtract?: string;
              };
            };
          }[];
          /** @description Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output. */
          recordSuppressions?: {
            /** @description A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content. */
            condition?: {
              /** @description An expression. */
              expressions?: {
                /** @description Conditions to apply to the expression. */
                conditions?: {
                  /** @description A collection of conditions. */
                  conditions?: {
                    /** @description Required. Field within the record this condition is evaluated against. */
                    field: {
                      /** @description Name describing the field. */
                      name?: string;
                    };
                    /** @description Required. Operator used to compare the field or infoType to the value. Possible values: LOGICAL_OPERATOR_UNSPECIFIED, AND */
                    operator: string;
                    /** @description Value to compare against. [Mandatory, except for `EXISTS` tests.] */
                    value?: {
                      /** @description boolean */
                      booleanValue?: boolean;
                      /** @description date */
                      dateValue?: {
                        /**
                         * Format: int64
                         * @description Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
                         */
                        day?: number;
                        /**
                         * Format: int64
                         * @description Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                         */
                        month?: number;
                        /**
                         * Format: int64
                         * @description Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                         */
                        year?: number;
                      };
                      /** @description day of week Possible values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY */
                      dayOfWeekValue?: string;
                      /**
                       * Format: double
                       * @description float
                       */
                      floatValue?: number;
                      /**
                       * Format: int64
                       * @description integer
                       */
                      integerValue?: number;
                      /** @description string */
                      stringValue?: string;
                      /** @description time of day */
                      timeValue?: {
                        /**
                         * Format: int64
                         * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                         */
                        hours?: number;
                        /**
                         * Format: int64
                         * @description Minutes of hour of day. Must be from 0 to 59.
                         */
                        minutes?: number;
                        /**
                         * Format: int64
                         * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                         */
                        nanos?: number;
                        /**
                         * Format: int64
                         * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                         */
                        seconds?: number;
                      };
                      /**
                       * Format: date-time
                       * @description timestamp
                       */
                      timestampValue?: string;
                    };
                  }[];
                };
                /** @description The operator to apply to the result of conditions. Default and currently only supported value is `AND`. Possible values: LOGICAL_OPERATOR_UNSPECIFIED, AND */
                logicalOperator?: string;
              };
            };
          }[];
        };
        /** @description Mode for handling transformation errors. If left unspecified, the default mode is `TransformationErrorHandling.ThrowError`. */
        transformationErrorHandling?: {
          /** @description Ignore errors */
          leaveUntransformed?: Record<string, never>;
          /** @description Throw an error */
          throwError?: Record<string, never>;
        };
      };
      /** @description Short description (max 256 chars). */
      description?: string;
      /** @description Display name (max 256 chars). */
      displayName?: string;
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
