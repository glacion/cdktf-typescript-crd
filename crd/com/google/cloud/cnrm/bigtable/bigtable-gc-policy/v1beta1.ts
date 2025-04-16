import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigtableGCPolicyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigtableGCPolicyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigtableGCPolicyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "bigtable.cnrm.cloud.google.com/v1beta1";
    kind?: "BigtableGCPolicy";
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
      /** @description Immutable. The name of the column family. */
      columnFamily: string;
      /** @description The deletion policy for the GC policy. Setting ABANDON allows the resource
       *     				to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
       *     				in a replicated instance. Possible values are: "ABANDON". */
      deletionPolicy?: string;
      /** @description Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". */
      gcRules?: string;
      /** @description The name of the Bigtable instance. */
      instanceRef: {
        /** @description Allowed value: The `name` field of a `BigtableInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. GC policy that applies to all cells older than the given age. */
      maxAge?: {
        /** @description DEPRECATED. Deprecated in favor of duration. Immutable. Number of days before applying GC policy. */
        days?: number;
        /** @description Immutable. Duration before applying GC policy. */
        duration?: string;
      }[];
      /** @description Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. GC policy that applies to all versions of a cell except for the most recent. */
      maxVersion?: {
        /** @description Immutable. Number of version before applying the GC policy. */
        number: number;
      }[];
      /** @description Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION. */
      mode?: string;
      /** @description The name of the table. */
      tableRef: {
        /** @description Allowed value: The `name` field of a `BigtableTable` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
