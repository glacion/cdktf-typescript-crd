import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageBucketAccessControlV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesStorageBucketAccessControlV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "storage.cnrm.cloud.google.com/v1beta1",
        kind: "StorageBucketAccessControl",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesStorageBucketAccessControlV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The entity holding the permission, in one of the following forms:
       *       user-userId
       *       user-email
       *       group-groupId
       *       group-email
       *       domain-domain
       *       project-team-projectId
       *       allUsers
       *       allAuthenticatedUsers
       *     Examples:
       *       The user liz@example.com would be user-liz@example.com.
       *       The group example@googlegroups.com would be
       *       group-example@googlegroups.com.
       *       To refer to all members of the Google Apps for Business domain
       *       example.com, the entity would be domain-example.com. */
      entity: string;
      /** @description The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"]. */
      role?: string;
    };
  };
}
