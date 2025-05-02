import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesResourceFlavorV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesResourceFlavorV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesResourceFlavorV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "kueue.x-k8s.io/v1beta1";
    kind?: "ResourceFlavor";
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
    /** @description ResourceFlavorSpec defines the desired state of the ResourceFlavor */
    spec?: {
      /** @description nodeLabels are labels that associate the ResourceFlavor with Nodes that
       *     have the same labels.
       *     When a Workload is admitted, its podsets can only get assigned
       *     ResourceFlavors whose nodeLabels match the nodeSelector and nodeAffinity
       *     fields.
       *     Once a ResourceFlavor is assigned to a podSet, the ResourceFlavor's
       *     nodeLabels should be injected into the pods of the Workload by the
       *     controller that integrates with the Workload object.
       *
       *     nodeLabels can be up to 8 elements. */
      nodeLabels?: {
        [key: string]: string;
      };
      /** @description nodeTaints are taints that the nodes associated with this ResourceFlavor
       *     have.
       *     Workloads' podsets must have tolerations for these nodeTaints in order to
       *     get assigned this ResourceFlavor during admission.
       *
       *     An example of a nodeTaint is
       *     cloud.provider.com/preemptible="true":NoSchedule
       *
       *     nodeTaints can be up to 8 elements. */
      nodeTaints?: {
        /** @description Required. The effect of the taint on pods
         *     that do not tolerate the taint.
         *     Valid effects are NoSchedule, PreferNoSchedule and NoExecute. */
        effect: string;
        /** @description Required. The taint key to be applied to a node. */
        key: string;
        /**
         * Format: date-time
         * @description TimeAdded represents the time at which the taint was added.
         *     It is only written for NoExecute taints.
         */
        timeAdded?: string;
        /** @description The taint value corresponding to the taint key. */
        value?: string;
      }[];
      /** @description tolerations are extra tolerations that will be added to the pods admitted in
       *     the quota associated with this resource flavor.
       *
       *     An example of a toleration is
       *     cloud.provider.com/preemptible="true":NoSchedule
       *
       *     tolerations can be up to 8 elements. */
      tolerations?: {
        /** @description Effect indicates the taint effect to match. Empty means match all taint effects.
         *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
        effect?: string;
        /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
         *     If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
        key?: string;
        /** @description Operator represents a key's relationship to the value.
         *     Valid operators are Exists and Equal. Defaults to Equal.
         *     Exists is equivalent to wildcard for value, so that a pod can
         *     tolerate all taints of a particular category. */
        operator?: string;
        /**
         * Format: int64
         * @description TolerationSeconds represents the period of time the toleration (which must be
         *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
         *     it is not set, which means tolerate the taint forever (do not evict). Zero and
         *     negative values will be treated as 0 (evict immediately) by the system.
         */
        tolerationSeconds?: number;
        /** @description Value is the taint value the toleration matches to.
         *     If the operator is Exists, the value should be empty, otherwise just a regular string. */
        value?: string;
      }[];
      /** @description topologyName indicates topology for the TAS ResourceFlavor.
       *     When specified, it enables scraping of the topology information from the
       *     nodes matching to the Resource Flavor node labels. */
      topologyName?: string;
    };
  };
}
