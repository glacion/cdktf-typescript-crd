import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class DatacatalogCnrmCloudGoogleComDataCatalogPolicyTagV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: DatacatalogCnrmCloudGoogleComDataCatalogPolicyTagV1beta1Config) {
    super(scope, id, config);
  }
}
export interface DatacatalogCnrmCloudGoogleComDataCatalogPolicyTagV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "datacatalog.cnrm.cloud.google.com/v1beta1";
    kind: "DataCatalogPolicyTag";
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
    status?: {
      /** @description Resource names of child policy tags of this policy tag. */
      childPolicyTags?: string[];
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
      /** @description Resource name of this policy tag, whose format is:
       *     "projects/{project}/locations/{region}/taxonomies/{taxonomy}/policyTags/{policytag}". */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
