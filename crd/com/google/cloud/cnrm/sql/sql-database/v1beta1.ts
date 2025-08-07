import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class SqlCnrmCloudGoogleComSQLDatabaseV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: SqlCnrmCloudGoogleComSQLDatabaseV1beta1Config) {
    super(scope, id, config);
  }
}
export interface SqlCnrmCloudGoogleComSQLDatabaseV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "sql.cnrm.cloud.google.com/v1beta1";
    kind: "SQLDatabase";
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
    spec: {
      /** @description The charset value. See MySQL's
       *     [Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
       *     and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
       *     for more details and supported values. Postgres databases only support
       *     a value of 'UTF8' at creation time. */
      charset?: string;
      /** @description The collation value. See MySQL's
       *     [Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
       *     and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
       *     for more details and supported values. Postgres databases only support
       *     a value of 'en_US.UTF8' at creation time. */
      collation?: string;
      /** @description The deletion policy for the database. Setting ABANDON allows the resource
       *     to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
       *     deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
       *     values are: "ABANDON", "DELETE". Defaults to "DELETE". */
      deletionPolicy?: string;
      /** @description The Cloud SQL instance. */
      instanceRef: {
        /** @description Allowed value: The `name` field of a `SQLInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
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
      selfLink?: string;
    };
  };
}
