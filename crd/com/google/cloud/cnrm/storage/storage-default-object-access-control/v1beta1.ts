import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageDefaultObjectAccessControlV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesStorageDefaultObjectAccessControlV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesStorageDefaultObjectAccessControlV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "storage.cnrm.cloud.google.com/v1beta1";
    kind: "StorageDefaultObjectAccessControl";
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
      /** @description The ID for the entity. */
      entityId?: string;
      /** @description The content generation of the object, if applied to an object. */
      generation?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The project team associated with the entity. */
      projectTeam?: {
        /** @description The project team associated with the entity. */
        projectNumber?: string;
        /** @description The team. Possible values: ["editors", "owners", "viewers"]. */
        team?: string;
      };
    };
  };
}
