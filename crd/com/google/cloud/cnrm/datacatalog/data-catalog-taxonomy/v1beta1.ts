import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDataCatalogTaxonomyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDataCatalogTaxonomyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDataCatalogTaxonomyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "datacatalog.cnrm.cloud.google.com/v1beta1";
    kind?: "DataCatalogTaxonomy";
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
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
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
      /** @description Resource name of this taxonomy, whose format is:
       *     "projects/{project}/locations/{region}/taxonomies/{taxonomy}". */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
