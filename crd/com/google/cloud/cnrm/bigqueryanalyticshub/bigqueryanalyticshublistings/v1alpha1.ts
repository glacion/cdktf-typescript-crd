import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryAnalyticsHubListingV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesBigQueryAnalyticsHubListingV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1",
        kind: "BigQueryAnalyticsHubListing",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesBigQueryAnalyticsHubListingV1alpha1Config extends ManifestConfig {
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
  };
}
