import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasCustomRoleV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasCustomRoleV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasCustomRole", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasCustomRoleV1Config extends ManifestConfig {
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
      /** @description Name of the secret containing Atlas API private and public keys */
      connectionSecret?: {
        /** @description Name of the resource being referred to
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name: string;
      };
      /** @description "externalProjectRef" holds the parent Atlas project ID.
       *     Mutually exclusive with the "projectRef" field */
      externalProjectRef?: {
        /** @description ID is the Atlas project ID */
        id: string;
      };
      /** @description "projectRef" is a reference to the parent AtlasProject resource.
       *     Mutually exclusive with the "externalProjectRef" field */
      projectRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      role: {
        /** @description List of the individual privilege actions that the role grants. */
        actions?: {
          /** @description Human-readable label that identifies the privilege action. */
          name: string;
          /** @description List of resources on which you grant the action. */
          resources: {
            /** @description Flag that indicates whether to grant the action on the cluster resource. If true, MongoDB Cloud ignores Database and Collection parameters. */
            cluster?: boolean;
            /** @description Human-readable label that identifies the collection on which you grant the action to one MongoDB user. */
            collection?: string;
            /** @description Human-readable label that identifies the database on which you grant the action to one MongoDB user. */
            database?: string;
          }[];
        }[];
        /** @description List of the built-in roles that this custom role inherits. */
        inheritedRoles?: {
          /** @description Human-readable label that identifies the database on which someone grants the action to one MongoDB user. */
          database: string;
          /** @description Human-readable label that identifies the role inherited. */
          name: string;
        }[];
        /** @description Human-readable label that identifies the role. This name must be unique for this custom role in this project. */
        name: string;
      };
    };
  };
}
