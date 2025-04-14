import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSpannerDatabaseV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSpannerDatabaseV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "spanner.cnrm.cloud.google.com/v1beta1", kind: "SpannerDatabase", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSpannerDatabaseV1beta1Config extends ManifestConfig {
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
  manifest: {
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description Immutable. The dialect of the Cloud Spanner Database.
         *     If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. */
        databaseDialect?: string;
        /** @description An optional list of DDL statements to run inside the newly created
         *     database. Statements can create tables, indexes, etc. These statements
         *     execute atomically with the creation of the database: if there is an
         *     error in any statement, the database is not created. */
        ddl?: string[];
        enableDropProtection?: boolean;
        /** @description Immutable. Encryption configuration for the database. */
        encryptionConfig?: {
          /** @description Fully qualified name of the KMS key to use to encrypt this database. This key
           *     must exist in the same location as the Spanner Database. */
          kmsKeyRef: {
            /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description The instance to create the database on. */
        instanceRef: {
          /** @description Allowed value: The `name` field of a `SpannerInstance` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description The retention period for the database. The retention period must be between 1 hour
         *     and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
         *     the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
         *     If this property is used, you must avoid adding new DDL statements to 'ddl' that
         *     update the database's version_retention_period. */
        versionRetentionPeriod?: string;
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
        /** @description An explanation of the status of the database. */
        state?: string;
      };
    };
  };
}
