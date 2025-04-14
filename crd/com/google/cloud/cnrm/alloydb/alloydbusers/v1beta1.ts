import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAlloyDBUserV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAlloyDBUserV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "alloydb.cnrm.cloud.google.com/v1beta1", kind: "AlloyDBUser", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAlloyDBUserV1beta1Config extends ManifestConfig {
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
      clusterRef: {
        /** @description Allowed value: The `name` field of an `AlloyDBCluster` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description List of database roles this database user has. */
      databaseRoles?: string[];
      /** @description Password for this database user. */
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
      /** @description Immutable. Optional. The userId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The type of this user. Possible values: ["ALLOYDB_BUILT_IN", "ALLOYDB_IAM_USER"]. */
      userType: string;
    };
  };
}
