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
    /** @description AtlasCustomRole is the Schema for the AtlasCustomRole API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AtlasCustomRoleSpec defines the desired state of CustomRole in Atlas */
      spec?: {
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
      /** @description AtlasCustomRoleStatus is a status for the AtlasCustomRole Custom resource.
       *     Not the one included in the AtlasProject */
      status?: {
        /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
        conditions: {
          /**
           * Format: date-time
           * @description Last time the condition transitioned from one status to another.
           */
          lastTransitionTime?: string;
          /** @description A human readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description Type of Atlas Custom Resource condition. */
          type: string;
        }[];
        /**
         * Format: int64
         * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
         *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
         */
        observedGeneration?: number;
      };
    };
  };
}
