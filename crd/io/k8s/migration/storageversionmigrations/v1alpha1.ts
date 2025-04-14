import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageVersionMigrationV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesStorageVersionMigrationV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "migration.k8s.io/v1alpha1", kind: "StorageVersionMigration", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesStorageVersionMigrationV1alpha1Config extends ManifestConfig {
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
  };
}
