import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class WardenGkeIoAuditV1 extends Manifest {
  constructor(scope: Construct, id: string, config: WardenGkeIoAuditV1Config) {
    super(scope, id, config);
  }
}
export interface WardenGkeIoAuditV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "warden.gke.io/v1";
    kind: "Audit";
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
    /** @description Spec is the custom resource spec. */
    spec?: Record<string, never>;
    /** @description Status is the custom resource status. */
    status?: {
      /** @description FleetSize is the total number of objects that the constraint validates. */
      fleetSize?: number;
      /** @description HasViolation indicates if the corresponding constraint has any violations. */
      hasViolation: boolean;
      /**
       * Format: date-time
       * @description LastSync shows the last time that this object was synced by the controller.
       */
      lastSync?: string;
      /** @description Truncated indicates the number of violations is truncated to fit the resource size limitations. */
      truncated?: boolean;
      /** @description ViolationCount is the total number of violations. It may be larger than the size of Violations which could be truncated. */
      violationCount?: number;
      /** @description Violations is the list of all violations for this constraint. */
      violations?: {
        /** @description ViolationAction is a type for the action that is taken for the reported violation. */
        action: string;
        /** @description API version of the referent. */
        apiVersion?: string;
        /** @description If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future. */
        fieldPath?: string;
        /** @description Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
        kind?: string;
        messages: string[];
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
        /** @description Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
        resourceVersion?: string;
        /** @description UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
        uid?: string;
      }[];
    };
  };
}
