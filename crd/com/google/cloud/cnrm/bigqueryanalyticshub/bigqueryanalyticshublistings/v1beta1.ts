import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryAnalyticsHubListingV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesBigQueryAnalyticsHubListingV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "bigqueryanalyticshub.cnrm.cloud.google.com/v1beta1",
        kind: "BigQueryAnalyticsHubListing",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesBigQueryAnalyticsHubListingV1beta1Config extends ManifestConfig {
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
    /** @description BigQueryAnalyticsHubListing is the Schema for the BigQueryAnalyticsHubListing API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description BigQueryAnalyticsHubListingSpec defines the desired state of BigQueryAnalyticsHubDataExchangeListing */
      spec?: {
        /** @description Optional. Categories of the listing. Up to two categories are allowed. */
        categories?: string[];
        /** @description BigQueryAnalyticsHubDataExchangeRef defines the resource reference to BigQueryAnalyticsHubDataExchange, which "External" field holds the GCP identifier for the KRM object. */
        dataExchangeRef: {
          /** @description A reference to an externally managed BigQueryAnalyticsHubDataExchange resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/dataexchanges/{{dataexchangeID}}". */
          external?: string;
          /** @description The name of a BigQueryAnalyticsHubDataExchange resource. */
          name?: string;
          /** @description The namespace of a BigQueryAnalyticsHubDataExchange resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Optional. Details of the data provider who owns the source data. */
        dataProvider?: {
          /** @description Optional. Name of the data provider. */
          name?: string;
          /** @description Optional. Email or URL of the data provider. Max Length: 1000 bytes. */
          primaryContact?: string;
        };
        /** @description Optional. Short description of the listing. The description must contain only Unicode characters or tabs  (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes. */
        description?: string;
        /** @description Optional. Type of discovery of the listing on the discovery page. */
        discoveryType?: string;
        /** @description Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes. */
        displayName: string;
        /** @description Optional. Documentation describing the listing. */
        documentation?: string;
        /** @description Immutable. The name of the location this data exchange. */
        location: string;
        /** @description Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes. */
        primaryContact?: string;
        /** @description The Project that this resource belongs to. */
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
        /** @description Optional. Details of the publisher who owns the listing and who can share the source data. */
        publisher?: {
          /** @description Optional. Name of the listing publisher. */
          name?: string;
          /** @description Optional. Email or URL of the listing publisher. Max Length: 1000 bytes. */
          primaryContact?: string;
        };
        /** @description Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes. */
        requestAccess?: string;
        /** @description Immutable. The BigQueryAnalyticsHubDataExchangeListing name. If not given, the metadata.name will be used. */
        resourceID?: string;
        source: {
          /** @description One of the following fields must be set. */
          bigQueryDatasetSource?: {
            /** @description Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123` */
            datasetRef: {
              /** @description A reference to an externally managed BigQueryDataset resource. Should be in the format "projects/<projectID>/datasets/<datasetID>". */
              external?: string;
              /** @description The name of a BigQueryDataset resource. */
              name?: string;
              /** @description The namespace of a BigQueryDataset resource. */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Optional. If set, restricted export policy will be propagated and enforced on the linked dataset. */
            restrictedExportPolicy?: {
              /** @description Optional. If true, enable restricted export. */
              enabled?: boolean;
              /** @description Optional. If true, restrict direct table access (read api/tabledata.list) on linked table. */
              restrictDirectTableAccess?: boolean;
              /** @description Optional. If true, restrict export of query result derived from restricted linked dataset table. */
              restrictQueryResult?: boolean;
            };
            /** @description Optional. Resources in this dataset that are selectively shared. If this field is empty, then the entire dataset (all resources) are shared. This field is only valid for data clean room exchanges. */
            selectedResources?: {
              /** @description Optional. A reference to a BigQueryTable. Format: `projects/{projectId}/datasets/{datasetId}/tables/{tableId}` Example:"projects/test_project/datasets/test_dataset/tables/test_table" */
              tableRef?: {
                /** @description If provided must be in the format `projects/{projectId}/datasets/{datasetId}/tables/{tableId}`. */
                external?: string;
                /** @description The `metadata.name` field of a `BigQueryTable` resource. */
                name?: string;
                /** @description The `metadata.namespace` field of a `BigQueryTable` resource. */
                namespace?: string;
              } & (unknown | unknown);
            }[];
          };
        };
      };
      /** @description BigQueryAnalyticsHubListingStatus defines the config connector machine state of BigQueryAnalyticsHubDataExchangeListing */
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
        /** @description A unique specifier for the BigQueryAnalyticsHubDataExchangeListing resource in GCP. */
        externalRef?: string;
        /**
         * Format: int64
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
        /** @description ObservedState is the state of the resource as most recently observed in GCP. */
        observedState?: {
          /** @description Output only. Current state of the listing. */
          state?: string;
        };
      };
    };
  };
}
