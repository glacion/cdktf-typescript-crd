import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBundleV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBundleV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBundleV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "trust.cert-manager.io/v1alpha1";
    kind?: "Bundle";
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
    /** @description Desired state of the Bundle resource. */
    spec: {
      /** @description Sources is a set of references to data whose data will sync to the target. */
      sources: {
        /** @description ConfigMap is a reference (by name) to a ConfigMap's `data` key(s), or to a
         *     list of ConfigMap's `data` key(s) using label selector, in the trust Namespace. */
        configMap?: {
          /** @description IncludeAllKeys is a flag to include all keys in the object's `data` field to be used. False by default.
           *     This field must not be true when `Key` is set. */
          includeAllKeys?: boolean;
          /** @description Key of the entry in the object's `data` field to be used. */
          key?: string;
          /** @description Name is the name of the source object in the trust Namespace.
           *     This field must be left empty when `selector` is set */
          name?: string;
          /** @description Selector is the label selector to use to fetch a list of objects. Must not be set
           *     when `Name` is set. */
          selector?: {
            /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** @description key is the label key that the selector applies to. */
              key: string;
              /** @description operator represents a key's relationship to a set of values.
               *     Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;
              /** @description values is an array of string values. If the operator is In or NotIn,
               *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
               *     the values array must be empty. This array is replaced during a strategic
               *     merge patch. */
              values?: string[];
            }[];
            /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             *     map is equivalent to an element of matchExpressions, whose key field is "key", the
             *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };
        };
        /** @description InLine is a simple string to append as the source data. */
        inLine?: string;
        /** @description Secret is a reference (by name) to a Secret's `data` key(s), or to a
         *     list of Secret's `data` key(s) using label selector, in the trust Namespace. */
        secret?: {
          /** @description IncludeAllKeys is a flag to include all keys in the object's `data` field to be used. False by default.
           *     This field must not be true when `Key` is set. */
          includeAllKeys?: boolean;
          /** @description Key of the entry in the object's `data` field to be used. */
          key?: string;
          /** @description Name is the name of the source object in the trust Namespace.
           *     This field must be left empty when `selector` is set */
          name?: string;
          /** @description Selector is the label selector to use to fetch a list of objects. Must not be set
           *     when `Name` is set. */
          selector?: {
            /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
            matchExpressions?: {
              /** @description key is the label key that the selector applies to. */
              key: string;
              /** @description operator represents a key's relationship to a set of values.
               *     Valid operators are In, NotIn, Exists and DoesNotExist. */
              operator: string;
              /** @description values is an array of string values. If the operator is In or NotIn,
               *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
               *     the values array must be empty. This array is replaced during a strategic
               *     merge patch. */
              values?: string[];
            }[];
            /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             *     map is equivalent to an element of matchExpressions, whose key field is "key", the
             *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
            matchLabels?: {
              [key: string]: string;
            };
          };
        };
        /** @description UseDefaultCAs, when true, requests the default CA bundle to be used as a source.
         *     Default CAs are available if trust-manager was installed via Helm
         *     or was otherwise set up to include a package-injecting init container by using the
         *     "--default-package-location" flag when starting the trust-manager controller.
         *     If default CAs were not configured at start-up, any request to use the default
         *     CAs will fail.
         *     The version of the default CA package which is used for a Bundle is stored in the
         *     defaultCAPackageVersion field of the Bundle's status field. */
        useDefaultCAs?: boolean;
      }[];
      /** @description Target is the target location in all namespaces to sync source data to. */
      target: {
        /** @description AdditionalFormats specifies any additional formats to write to the target */
        additionalFormats?: {
          /** @description JKS requests a JKS-formatted binary trust bundle to be written to the target.
           *     The bundle has "changeit" as the default password.
           *     For more information refer to this link https://cert-manager.io/docs/faq/#keystore-passwords */
          jks?: {
            /** @description Key is the key of the entry in the object's `data` field to be used. */
            key: string;
            /** @description Password for JKS trust store */
            password?: string;
          };
          /** @description PKCS12 requests a PKCS12-formatted binary trust bundle to be written to the target.
           *     The bundle is by default created without a password. */
          pkcs12?: {
            /** @description Key is the key of the entry in the object's `data` field to be used. */
            key: string;
            /** @description Password for PKCS12 trust store */
            password?: string;
          };
        };
        /** @description ConfigMap is the target ConfigMap in Namespaces that all Bundle source
         *     data will be synced to. */
        configMap?: {
          /** @description Key is the key of the entry in the object's `data` field to be used. */
          key: string;
        };
        /** @description NamespaceSelector will, if set, only sync the target resource in
         *     Namespaces which match the selector. */
        namespaceSelector?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /** @description operator represents a key's relationship to a set of values.
             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
            operator: string;
            /** @description values is an array of string values. If the operator is In or NotIn,
             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
             *     the values array must be empty. This array is replaced during a strategic
             *     merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        };
        /** @description Secret is the target Secret that all Bundle source data will be synced to.
         *     Using Secrets as targets is only supported if enabled at trust-manager startup.
         *     By default, trust-manager has no permissions for writing to secrets and can only read secrets in the trust namespace. */
        secret?: {
          /** @description Key is the key of the entry in the object's `data` field to be used. */
          key: string;
        };
      };
    };
    /** @description Status of the Bundle. This is set and managed automatically. */
    status?: {
      /** @description List of status conditions to indicate the status of the Bundle.
       *     Known condition types are `Bundle`. */
      conditions?: {
        /**
         * Format: date-time
         * @description LastTransitionTime is the timestamp corresponding to the last status
         *     change of this condition.
         */
        lastTransitionTime: string;
        /** @description Message is a human-readable description of the details of the last
         *     transition, complementing reason. */
        message?: string;
        /**
         * Format: int64
         * @description If set, this represents the .metadata.generation that the condition was
         *     set based upon.
         *     For instance, if .metadata.generation is currently 12, but the
         *     .status.condition[x].observedGeneration is 9, the condition is out of date
         *     with respect to the current state of the Bundle.
         */
        observedGeneration?: number;
        /** @description Reason is a brief machine-readable explanation for the condition's last
         *     transition.
         *     The value should be a CamelCase string.
         *     This field may not be empty. */
        reason: string;
        /**
         * @description Status of the condition, one of True, False, Unknown.
         * @enum {string}
         */
        status: "False" | "True" | "Unknown";
        /** @description Type of the condition, known values are (`Synced`). */
        type: string;
      }[];
      /** @description DefaultCAPackageVersion, if set and non-empty, indicates the version information
       *     which was retrieved when the set of default CAs was requested in the bundle
       *     source. This should only be set if useDefaultCAs was set to "true" on a source,
       *     and will be the same for the same version of a bundle with identical certificates. */
      defaultCAVersion?: string;
    };
  };
}
