import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class ApigeeCnrmCloudGoogleComApigeeEnvgroupV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: ApigeeCnrmCloudGoogleComApigeeEnvgroupV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface ApigeeCnrmCloudGoogleComApigeeEnvgroupV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "apigee.cnrm.cloud.google.com/v1alpha1";
    kind: "ApigeeEnvgroup";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    /** @description ApigeeEnvgroupSpec defines the desired state of ApigeeEnvgroup */
    spec: {
      /** @description Host names for this environment group. */
      hostnames?: string[];
      /** @description ApigeeOrganizationRef is a reference to a ApigeeOrganization resource. */
      organizationRef: {
        /** @description A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}". */
        external?: string;
        /** @description The name of a ApigeeOrganization resource. */
        name?: string;
        /** @description The namespace of a ApigeeOrganization resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The ApigeeEnvgroup name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description ApigeeEnvgroupStatus defines the config connector machine state of ApigeeEnvgroup */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description A unique specifier for the ApigeeEnvgroup resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /**
         * Format: int64
         * @description Output only. The time at which the environment group was created as milliseconds since epoch.
         */
        createdAt?: number;
        /**
         * Format: int64
         * @description Output only. The time at which the environment group was last updated as milliseconds since epoch.
         */
        lastModifiedAt?: number;
        /** @description ID of the environment group. */
        name?: string;
        /** @description Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use. */
        state?: string;
      };
    };
  };
}
