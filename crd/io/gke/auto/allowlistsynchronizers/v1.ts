import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAllowlistSynchronizerV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAllowlistSynchronizerV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "auto.gke.io/v1", kind: "AllowlistSynchronizer", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAllowlistSynchronizerV1Config extends ManifestConfig {
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
    /** @description AllowlistSynchronizer facilitates the management (installation, updating, deletion) of WorkloadAllowlists in a cluster. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AllowlistSynchronizerSpec configures the desired list of allowlist paths to manage synchronization. */
      spec?: {
        /** @description AllowlistPaths specifies the list of paths within the bucket to synchronize */
        allowlistPaths: string[];
      };
      /** @description AllowlistSynchronizerStatus defines the observed state of AllowlistSynchronizer.
       *     There are two goals with exposing conditions this way:
       *      1. Allow a method for other controllers or orchestration tools to determine the synchronization
       *         status. For example, they should be able to wait until a Synchronizer is successful
       *         before installing the associated allowlists.
       *      2. Be human-readable, so that customers can check the status of their synchronizers manually,
       *         and understand when further action is necessary. */
      status?: {
        /** @description Conditions represent the latest observations of the sync status */
        conditions?: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another.
           *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string;
          /** @description message is a human readable message indicating details about the transition.
           *     This may be an empty string. */
          message: string;
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
           *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
           *     with respect to the current state of the instance.
           */
          observedGeneration?: number;
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
           *     Producers of specific condition types may define expected values and meanings for this field,
           *     and whether the values are considered a guaranteed API.
           *     The value should be a CamelCase string.
           *     This field may not be empty. */
          reason: string;
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown";
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase.
           *     ---
           *     Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
           *     useful (see .node.status.conditions), the ability to deconflict is important.
           *     The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt) */
          type: string;
        }[];
        /**
         * Format: date-time
         * @description LastSyncAttempt is the timestamp of the last synchronization attempt
         */
        lastSyncAttempt?: string;
        /** @description ManagedAllowlistStatus contains the status of each allowlist file managed by the synchronizer */
        managedAllowlistStatus?: {
          /** @description FilePath is the GCS path to the allowlist file */
          filePath: string;
          /**
           * Format: int64
           * @description Generation is the observed generation of the allowlist file
           */
          generation?: number;
          /** @description LastError describes the most recent error encountered when syncing this file, if any */
          lastError?: string;
          /**
           * Format: date-time
           * @description LastSuccessfulSync is the last time this allowlist was successfully synchronized
           */
          lastSuccessfulSync?: string;
          /** @description Phase represents the current status of the allowlist (e.g., Installed, Failed, Stale) */
          phase: string;
        }[];
      };
    };
  };
}
