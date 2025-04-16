import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageBucketV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesStorageBucketV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesStorageBucketV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "storage.cnrm.cloud.google.com/v1beta1";
    kind?: "StorageBucket";
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
      /** @description The bucket's autoclass configuration. */
      autoclass?: {
        /** @description While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. */
        enabled: boolean;
      };
      /** @description DEPRECATED. Please use the `uniformBucketLevelAccess` field as this field has been renamed by Google. The `uniformBucketLevelAccess` field will supersede this field.
       *     Enables Bucket PolicyOnly access to a bucket. */
      bucketPolicyOnly?: boolean;
      /** @description The bucket's Cross-Origin Resource Sharing (CORS) configuration. */
      cors?: {
        /** @description The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. */
        maxAgeSeconds?: number;
        /** @description The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". */
        method?: string[];
        /** @description The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin". */
        origin?: string[];
        /** @description The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. */
        responseHeader?: string[];
      }[];
      /** @description The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. */
      customPlacementConfig?: {
        /** @description Immutable. The list of individual regions that comprise a dual-region bucket. See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket. */
        dataLocations: string[];
      };
      /** @description Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. */
      defaultEventBasedHold?: boolean;
      /** @description The bucket's encryption configuration. */
      encryption?: {
        kmsKeyRef: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description The bucket's Lifecycle Rules configuration. */
      lifecycleRule?: {
        /** @description The Lifecycle Rule's action configuration. A single block of this type is supported. */
        action: {
          /** @description The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. */
          storageClass?: string;
          /** @description The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. */
          type: string;
        };
        /** @description The Lifecycle Rule's condition configuration. */
        condition: {
          /** @description Minimum age of an object in days to satisfy this condition. */
          age?: number;
          /** @description Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. */
          createdBefore?: string;
          /** @description Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. */
          customTimeBefore?: string;
          /** @description Number of days elapsed since the user-specified timestamp set on an object. */
          daysSinceCustomTime?: number;
          /** @description Number of days elapsed since the noncurrent timestamp of an object. This
           *     										condition is relevant only for versioned objects. */
          daysSinceNoncurrentTime?: number;
          /** @description One or more matching name prefixes to satisfy this condition. */
          matchesPrefix?: string[];
          /** @description Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. */
          matchesStorageClass?: string[];
          /** @description One or more matching name suffixes to satisfy this condition. */
          matchesSuffix?: string[];
          /** @description Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. */
          noncurrentTimeBefore?: string;
          /** @description Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. */
          numNewerVersions?: number;
          /** @description Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". */
          withState?: string;
        };
      }[];
      /** @description Immutable. The Google Cloud Storage location. */
      location?: string;
      /** @description The bucket's Access & Storage Logs configuration. */
      logging?: {
        /** @description The bucket that will receive log objects. */
        logBucket: string;
        /** @description The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name. */
        logObjectPrefix?: string;
      };
      /** @description Prevents public access to a bucket. */
      publicAccessPrevention?: string;
      /** @description Enables Requester Pays on a storage bucket. */
      requesterPays?: boolean;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. */
      retentionPolicy?: {
        /** @description If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action. */
        isLocked?: boolean;
        /** @description The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds. */
        retentionPeriod: number;
      };
      /** @description The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted. If it is not provided, by default Google Cloud Storage sets this to default soft delete policy. */
      softDeletePolicy?: {
        /** @description The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. Default value is 604800. */
        retentionDurationSeconds?: number;
      };
      /** @description The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. */
      storageClass?: string;
      /** @description Enables uniform bucket-level access on a bucket. */
      uniformBucketLevelAccess?: boolean;
      /** @description The bucket's Versioning configuration. */
      versioning?: {
        /** @description While set to true, versioning is fully enabled for this bucket. */
        enabled: boolean;
      };
      /** @description Configuration if the bucket acts as a website. */
      website?: {
        /** @description Behaves as the bucket's directory index where missing objects are treated as potential directories. */
        mainPageSuffix?: string;
        /** @description The custom object to return when a requested resource is not found. */
        notFoundPage?: string;
      };
    };
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
      /** @description The observed state of the underlying GCP resource. */
      observedState?: {
        /** @description The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted. If it is not provided, by default Google Cloud Storage sets this to default soft delete policy. */
        softDeletePolicy?: {
          /** @description Server-determined value that indicates the time from which the policy, or one with a greater retention, was effective. This value is in RFC 3339 format. */
          effectiveTime?: string;
          /** @description The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. Default value is 604800. */
          retentionDurationSeconds?: number;
        };
      };
      /** @description The URI of the created resource. */
      selfLink?: string;
      /** @description The base URL of the bucket, in the format gs://<bucket-name>. */
      url?: string;
    };
  };
}
