import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFirestoreDatabaseV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFirestoreDatabaseV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "firestore.cnrm.cloud.google.com/v1alpha1", kind: "FirestoreDatabase", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFirestoreDatabaseV1alpha1Config extends ManifestConfig {
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
      /** @description The concurrency control mode to use for this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#concurrencymode for more info. */
      concurrencyMode?: string;
      /** @description The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. */
      locationID?: string;
      /** @description Whether to enable the PITR feature on this database. See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases#pointintimerecoveryenablement for more info. */
      pointInTimeRecoveryEnablement?: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The FirestoreDatabase name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
