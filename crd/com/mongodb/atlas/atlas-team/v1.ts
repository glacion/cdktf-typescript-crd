import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasTeamV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAtlasTeamV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAtlasTeamV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "atlas.mongodb.com/v1";
    kind: "AtlasTeam";
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
    /** @description TeamSpec defines the desired state of a Team in Atlas */
    spec: {
      /** @description The name of the team you want to create. */
      name: string;
      /** @description Valid email addresses of users to add to the new team */
      usernames: string[];
    };
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
      /** @description ID of the team */
      id?: string;
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
      /** @description List of projects which the team is assigned */
      projects?: {
        /** @description Unique identifier of the project inside atlas */
        id: string;
        /** @description Name given to the project */
        name: string;
      }[];
    };
  };
}
