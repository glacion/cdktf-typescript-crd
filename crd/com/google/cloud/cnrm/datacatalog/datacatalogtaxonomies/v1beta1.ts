import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataCatalogTaxonomyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDataCatalogTaxonomyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "datacatalog.cnrm.cloud.google.com/v1beta1", kind: "DataCatalogTaxonomy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDataCatalogTaxonomyV1beta1Config extends ManifestConfig {
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
      /** @description A list of policy types that are activated for this taxonomy. If not set,
       *     defaults to an empty list. Possible values: ["POLICY_TYPE_UNSPECIFIED", "FINE_GRAINED_ACCESS_CONTROL"]. */
      activatedPolicyTypes?: string[];
      /** @description Description of this taxonomy. It must: contain only unicode characters,
       *     tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
       *     long when encoded in UTF-8. If not set, defaults to an empty description. */
      description?: string;
      /** @description User defined name of this taxonomy.
       *     It must: contain only unicode letters, numbers, underscores, dashes
       *     and spaces; not start or end with spaces; and be at most 200 bytes
       *     long when encoded in UTF-8. */
      displayName: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Taxonomy location region. */
      region?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
