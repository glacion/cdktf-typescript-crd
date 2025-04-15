import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBigQueryRoutineV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBigQueryRoutineV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBigQueryRoutineV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "bigquery.cnrm.cloud.google.com/v1beta1";
    kind: "BigQueryRoutine";
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
      /** @description Input/output argument of a function or a stored procedure. */
      arguments?: {
        /** @description Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. */
        argumentKind?: string;
        /** @description A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
         *     ~>**NOTE**: Because this field expects a JSON string, any changes to the string
         *     will create a diff, even if the JSON itself hasn't changed. If the API returns
         *     a different value for the same schema, e.g. it switched the order of values
         *     or replaced STRUCT field type with RECORD field type, we currently cannot
         *     suppress the recurring diff this causes. As a workaround, we recommend using
         *     the schema as returned by the API. */
        dataType?: string;
        /** @description Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. */
        mode?: string;
        /** @description The name of this argument. Can be absent for function return argument. */
        name?: string;
      }[];
      /** @description The ID of the dataset containing this routine. */
      datasetRef: {
        /** @description Allowed value: The `name` field of a `BigQueryDataset` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The body of the routine. For functions, this is the expression in the AS clause.
       *     If language=SQL, it is the substring inside (but excluding) the parentheses. */
      definitionBody: string;
      /** @description The description of the routine if defined. */
      description?: string;
      /** @description The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. */
      determinismLevel?: string;
      /** @description Optional. If language = "JAVASCRIPT", this field stores the path of the
       *     imported JAVASCRIPT libraries. */
      importedLibraries?: string[];
      /** @description The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. */
      language?: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The routineId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
       *
       *     If absent, the return table type is inferred from definitionBody at query time in each query
       *     that references this routine. If present, then the columns in the evaluated table result will
       *     be cast to match the column types specificed in return table type, at query time. */
      returnTableType?: string;
      /** @description A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
       *     If absent, the return type is inferred from definitionBody at query time in each query
       *     that references this routine. If present, then the evaluated result will be cast to
       *     the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
       *     string, any changes to the string will create a diff, even if the JSON itself hasn't
       *     changed. If the API returns a different value for the same schema, e.g. it switche
       *     d the order of values or replaced STRUCT field type with RECORD field type, we currently
       *     cannot suppress the recurring diff this causes. As a workaround, we recommend using
       *     the schema as returned by the API. */
      returnType?: string;
      /** @description Immutable. The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. */
      routineType?: string;
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
      /** @description The time when this routine was created, in milliseconds since the
       *     epoch. */
      creationTime?: number;
      /** @description The time when this routine was modified, in milliseconds since the
       *     epoch. */
      lastModifiedTime?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
