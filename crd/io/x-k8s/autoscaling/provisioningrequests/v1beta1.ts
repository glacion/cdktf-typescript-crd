import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesProvisioningRequestV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesProvisioningRequestV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "autoscaling.x-k8s.io/v1beta1", kind: "ProvisioningRequest", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesProvisioningRequestV1beta1Config extends ManifestConfig {
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
    /** @description ProvisioningRequest is a way to express additional capacity
     *     that we would like to provision in the cluster. Cluster Autoscaler
     *     can use this information in its calculations and signal if the capacity
     *     is available in the cluster or actively add capacity if needed. */
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
      /** @description Spec contains specification of the ProvisioningRequest object.
       *     More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
       *     The spec is immutable, to make changes to the request users are expected to delete an existing
       *     and create a new object with the corrected fields. */
      spec: {
        /** @description Parameters contains all other parameters classes may require.
         *     'atomic-scale-up.kubernetes.io' supports 'ValidUntilSeconds' parameter, which should contain
         *      a string denoting duration for which we should retry (measured since creation fo the CR). */
        parameters?: {
          [key: string]: string;
        };
        /** @description PodSets lists groups of pods for which we would like to provision
         *     resources. */
        podSets: {
          /**
           * Format: int32
           * @description Count contains the number of pods that will be created with a given
           *     template.
           */
          count: number;
          /** @description PodTemplateRef is a reference to a PodTemplate object that is representing pods
           *     that will consume this reservation (must be within the same namespace).
           *     Users need to make sure that the  fields relevant to scheduler (e.g. node selector tolerations)
           *     are consistent between this template and actual pods consuming the Provisioning Request. */
          podTemplateRef: {
            /** @description Name of the referenced object.
             *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names */
            name: string;
          };
        }[];
        /** @description ProvisioningClassName describes the different modes of provisioning the resources.
         *     Currently there is no support for 'ProvisioningClass' objects.
         *     Supported values:
         *     * check-capacity.kubernetes.io - check if current cluster state can fullfil this request,
         *       do not reserve the capacity. Users should provide a reference to a valid PodTemplate object.
         *       CA will check if there is enough capacity in cluster to fulfill the request and put
         *       the answer in 'CapacityAvailable' condition.
         *     * atomic-scale-up.kubernetes.io - provision the resources in an atomic manner.
         *       Users should provide a reference to a valid PodTemplate object.
         *       CA will try to create the VMs in an atomic manner, clean any partially provisioned VMs
         *       and re-try the operation in a exponential back-off manner. Users can configure the timeout
         *       duration after which the request will fail by 'ValidUntilSeconds' key in 'Parameters'.
         *       CA will set 'Failed=true' or 'Provisioned=true' condition according to the outcome.
         *     * ... - potential other classes that are specific to the cloud providers.
         *     'kubernetes.io' suffix is reserved for the modes defined in Kubernetes projects. */
        provisioningClassName: string;
      };
      /** @description Status of the ProvisioningRequest. CA constantly reconciles this field. */
      status?: {
        /** @description Conditions represent the observations of a Provisioning Request's
         *     current state. Those will contain information whether the capacity
         *     was found/created or if there were any issues. The condition types
         *     may differ between different provisioning classes. */
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
        /** @description ProvisioningClassDetails contains all other values custom provisioning classes may
         *     want to pass to end users. */
        provisioningClassDetails?: {
          [key: string]: string;
        };
      };
    };
  };
}
