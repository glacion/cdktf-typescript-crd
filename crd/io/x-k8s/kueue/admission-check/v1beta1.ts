import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KueueXK8sIoAdmissionCheckV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: KueueXK8sIoAdmissionCheckV1beta1Config) {
    super(scope, id, config);
  }
}
export interface KueueXK8sIoAdmissionCheckV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "kueue.x-k8s.io/v1beta1";
    kind: "AdmissionCheck";
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
    /** @description AdmissionCheckSpec defines the desired state of AdmissionCheck */
    spec?: {
      /** @description controllerName identifies the controller that processes the AdmissionCheck,
       *     not necessarily a Kubernetes Pod or Deployment name. Cannot be empty. */
      controllerName: string;
      /** @description Parameters identifies a configuration with additional parameters for the
       *     check. */
      parameters?: {
        /** @description ApiGroup is the group for the resource being referenced. */
        apiGroup: string;
        /** @description Kind is the type of the resource being referenced. */
        kind: string;
        /** @description Name is the name of the resource being referenced. */
        name: string;
      };
      /**
       * Format: int64
       * @description RetryDelayMinutes specifies how long to keep the workload suspended after
       *     a failed check (after it transitioned to False). When the delay period has passed, the check
       *     state goes to "Unknown". The default is 15 min.
       *     Deprecated: retryDelayMinutes has already been deprecated since v0.8 and will be removed in v1beta2.
       */
      retryDelayMinutes?: number;
    };
    /** @description AdmissionCheckStatus defines the observed state of AdmissionCheck */
    status?: {
      /** @description conditions hold the latest available observations of the AdmissionCheck
       *     current state. */
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
        /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
        type: string;
      }[];
    };
  };
}
