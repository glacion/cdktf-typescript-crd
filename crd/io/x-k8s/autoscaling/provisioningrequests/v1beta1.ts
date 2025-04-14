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
  };
}
