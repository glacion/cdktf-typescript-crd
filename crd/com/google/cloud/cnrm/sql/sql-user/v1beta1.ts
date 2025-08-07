import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class SqlCnrmCloudGoogleComSQLUserV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: SqlCnrmCloudGoogleComSQLUserV1beta1Config) {
    super(scope, id, config);
  }
}
export interface SqlCnrmCloudGoogleComSQLUserV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "sql.cnrm.cloud.google.com/v1beta1";
    kind: "SQLUser";
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
      /** @description Immutable. The host the user can connect from. This is only supported for MySQL instances. Don't set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created. */
      host?: string;
      instanceRef: {
        /** @description Allowed value: The `name` field of a `SQLInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The password for the user. Can be updated. For Postgres instances this is a Required field, unless type is set to
       *                     either CLOUD_IAM_USER or CLOUD_IAM_SERVICE_ACCOUNT. */
      password?: {
        /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
        value?: string;
        /** @description Source for the field's value. Cannot be used if 'value' is specified. */
        valueFrom?: {
          /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
          secretKeyRef?: {
            /** @description Key that identifies the value to be extracted. */
            key: string;
            /** @description Name of the Secret to extract a value from. */
            name: string;
          };
        };
      } & (unknown | unknown);
      passwordPolicy?: {
        /** @description Number of failed attempts allowed before the user get locked. */
        allowedFailedAttempts?: number;
        /** @description If true, the check that will lock user after too many failed login attempts will be enabled. */
        enableFailedAttemptsCheck?: boolean;
        /** @description If true, the user must specify the current password before changing the password. This flag is supported only for MySQL. */
        enablePasswordVerification?: boolean;
        /** @description Password expiration duration with one week grace period. */
        passwordExpirationDuration?: string;
        status?: {
          /** @description If true, user does not have login privileges. */
          locked?: boolean;
          /** @description Password expiration duration with one week grace period. */
          passwordExpirationTime?: string;
        }[];
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The user type. It determines the method to authenticate the user during login.
       *                     The default is the database's built-in user type. Flags include "BUILT_IN", "CLOUD_IAM_USER", or "CLOUD_IAM_SERVICE_ACCOUNT". */
      type?: string;
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
      sqlServerUserDetails?: {
        /** @description If the user has been disabled. */
        disabled?: boolean;
        /** @description The server roles for this user in the database. */
        serverRoles?: string[];
      }[];
    };
  };
}
