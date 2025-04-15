import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceFunctionChainV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesServiceFunctionChainV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesServiceFunctionChainV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1";
    kind: "ServiceFunctionChain";
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
    /** @description ServiceFunctionChainSpec defines the desired state of ServiceFunctionChain */
    spec: {
      /** @description internalTrafficPolicy describes how traffic is forwarded to service function pods.
       *     The only currently supported value is "Cluster", in which case traffic is forwarded to all service function pods evenly. */
      internalTrafficPolicy?: string;
      /** @description List of service functions that selected traffic must be steered through. */
      serviceFunctions: {
        /** @description Name of the service function. It must be a valid RFC 1035 label. */
        name: string;
        /** @description Namespace containing the service function pods. It must be a valid RFC 1123 label. */
        namespace: string;
        /** @description Route service function traffic to pods matching this selector. */
        podSelector: {
          /** @description matchLabels is a map of {key,value} pairs. */
          matchLabels: {
            [key: string]: string;
          };
        };
      }[];
      /** @description sessionAffinity specifies the session affinity behavior for all service functions in the ServiceFunctionChain.
       *     Nil pointer represents disabled session affinity. */
      sessionAffinity?: {
        /** @description Session affinity based on 1-tuple hash created from the source IP address. */
        clientIPNoDestination?: {
          /**
           * Format: int32
           * @description timeoutSeconds specifies the seconds of session sticky time.
           *     The value must be >0 && <=86400(for 1 day).
           *     Default value is 10800(for 3 hours).
           */
          timeoutSeconds?: number;
        };
      };
    };
    /** @description ServiceFunctionChainStatus defines the observed state of ServiceFunctionChain */
    status?: {
      /**
       * Format: int32
       * @description servicePathId is a unique identifier that's automatically assigned.
       *     It's used as a tiebreaker in determining precedence between conflicting traffic selectors.
       */
      servicePathId?: number;
    };
  };
}
