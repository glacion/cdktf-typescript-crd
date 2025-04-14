import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigtableTableV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesBigtableTableV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "bigtable.cnrm.cloud.google.com/v1beta1", kind: "BigtableTable", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesBigtableTableV1beta1Config extends ManifestConfig {
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
      /** @description Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days. */
      changeStreamRetention?: string;
      /** @description A group of columns within a table which share a common configuration. This can be specified multiple times. */
      columnFamily?: {
        /** @description The name of the column family. */
        family: string;
      }[];
      /** @description A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. */
      deletionProtection?: string;
      /** @description The name of the Bigtable instance. */
      instanceRef: {
        /** @description Allowed value: The `name` field of a `BigtableInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      splitKeys?: string[];
    };
  };
}
