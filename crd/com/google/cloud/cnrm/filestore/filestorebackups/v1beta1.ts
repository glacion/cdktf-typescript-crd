import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFilestoreBackupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesFilestoreBackupV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "filestore.cnrm.cloud.google.com/v1beta1", kind: "FilestoreBackup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesFilestoreBackupV1beta1Config extends ManifestConfig {
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
      /** @description A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Name of the file share in the source Cloud Filestore instance that the backup is created from. */
      sourceFileShare: string;
      /** @description Immutable. */
      sourceInstanceRef: {
        /** @description The resource name of the source Cloud Filestore instance, in the format projects/{project_number}/locations/{location_id}/instances/{instance_id}, used to create this backup.
         *
         *     Allowed value: The Google Cloud resource name of a `FilestoreInstance` resource (format: `projects/{{project}}/locations/{{location}}/instances/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
