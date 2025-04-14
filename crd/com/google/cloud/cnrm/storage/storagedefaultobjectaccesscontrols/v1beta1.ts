import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageDefaultObjectAccessControlV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesStorageDefaultObjectAccessControlV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "storage.cnrm.cloud.google.com/v1beta1",
        kind: "StorageDefaultObjectAccessControl",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesStorageDefaultObjectAccessControlV1beta1Config extends ManifestConfig {
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
      /** @description Reference to the bucket. */
      bucketRef: {
        /** @description Allowed value: The `name` field of a `StorageBucket` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The entity holding the permission, in one of the following forms:
       *       * user-{{userId}}
       *       * user-{{email}} (such as "user-liz@example.com")
       *       * group-{{groupId}}
       *       * group-{{email}} (such as "group-example@googlegroups.com")
       *       * domain-{{domain}} (such as "domain-example.com")
       *       * project-team-{{projectId}}
       *       * allUsers
       *       * allAuthenticatedUsers. */
      entity: string;
      /** @description The name of the object, if applied to an object. */
      object?: string;
      /** @description The access permission for the entity. Possible values: ["OWNER", "READER"]. */
      role: string;
    };
  };
}
