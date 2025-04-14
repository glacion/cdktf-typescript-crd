import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataCatalogPolicyTagV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataCatalogPolicyTagV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "datacatalog.cnrm.cloud.google.com/v1beta1", kind: "DataCatalogPolicyTag", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataCatalogPolicyTagV1beta1Config extends ManifestConfig {
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
      /** @description Description of this policy tag. It must: contain only unicode characters, tabs,
       *     newlines, carriage returns and page breaks; and be at most 2000 bytes long when
       *     encoded in UTF-8. If not set, defaults to an empty description.
       *     If not set, defaults to an empty description. */
      description?: string;
      /** @description User defined name of this policy tag. It must: be unique within the parent
       *     taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
       *     not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. */
      displayName: string;
      parentPolicyTagRef?: {
        /** @description Allowed value: The `name` field of a `DataCatalogPolicyTag` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      taxonomyRef: {
        /** @description Allowed value: The `name` field of a `DataCatalogTaxonomy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
