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
  manifest: {
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
        /** @description The domain associated with the entity. */
        domain?: string;
        /** @description The email address associated with the entity. */
        email?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
      };
    };
  };
}
