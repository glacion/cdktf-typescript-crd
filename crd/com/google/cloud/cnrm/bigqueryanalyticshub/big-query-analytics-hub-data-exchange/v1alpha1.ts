import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1";
    kind?: "BigQueryAnalyticsHubDataExchange";
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
    /** @description BigQueryAnalyticsHubDataExchangeSpec defines the desired state of BigQueryAnalyticsHubDataExchange */
    spec: {
      /** @description Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
      description?: string;
      /** @description Optional. Type of discovery on the discovery page for all the listings under this exchange. Updating this field also updates (overwrites) the discovery_type field for all the listings under this exchange. */
      discoveryType?: string;
      /** @description Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
      displayName?: string;
      /** @description Optional. Documentation describing the data exchange. */
      documentation?: string;
      /** @description Immutable. The name of the location this data exchange. */
      location: string;
      /** @description Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes. */
      primaryContact?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The BigQueryAnalyticsHubDataExchange name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description BigQueryAnalyticsHubDataExchangeStatus defines the config connector machine state of BigQueryAnalyticsHubDataExchange */
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
      /** @description A unique specifier for the BigQueryAnalyticsHubDataExchange resource in GCP. */
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
         * @description Number of listings contained in the data exchange.
         */
        listingCount?: number;
      };
    };
  };
}
