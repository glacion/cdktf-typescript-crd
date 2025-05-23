import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageVersionMigrationV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesStorageVersionMigrationV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesStorageVersionMigrationV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "migration.k8s.io/v1alpha1";
    kind?: "StorageVersionMigration";
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
    /** @description Specification of the migration. */
    spec?: {
      /** @description The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration. */
      continueToken?: string;
      /** @description The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable. */
      resource: {
        /** @description The name of the group. */
        group?: string;
        /** @description The name of the resource. */
        resource?: string;
        /** @description The name of the version. */
        version?: string;
      };
    };
    /** @description Status of the migration. */
    status?: {
      /** @description The latest available observations of the migration's current state. */
      conditions?: {
        /**
         * Format: date-time
         * @description The last time this condition was updated.
         */
        lastUpdateTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type of the condition. */
        type: string;
      }[];
    };
  };
}
