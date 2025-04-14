import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1",
        kind: "BigQueryAnalyticsHubDataExchange",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesBigQueryAnalyticsHubDataExchangeV1alpha1Config extends ManifestConfig {
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
  };
}
