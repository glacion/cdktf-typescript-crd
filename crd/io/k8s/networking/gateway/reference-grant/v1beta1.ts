import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesReferenceGrantV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesReferenceGrantV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesReferenceGrantV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "gateway.networking.k8s.io/v1beta1";
    kind?: "ReferenceGrant";
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
    /** @description Spec defines the desired state of ReferenceGrant. */
    spec?: {
      /** @description From describes the trusted namespaces and kinds that can reference the
       *     resources described in "To". Each entry in this list MUST be considered
       *     to be an additional place that references can be valid from, or to put
       *     this another way, entries MUST be combined using OR.
       *
       *
       *     Support: Core */
      from: {
        /** @description Group is the group of the referent.
         *     When empty, the Kubernetes core API group is inferred.
         *
         *
         *     Support: Core */
        group: string;
        /** @description Kind is the kind of the referent. Although implementations may support
         *     additional resources, the following types are part of the "Core"
         *     support level for this field.
         *
         *
         *     When used to permit a SecretObjectReference:
         *
         *
         *     * Gateway
         *
         *
         *     When used to permit a BackendObjectReference:
         *
         *
         *     * GRPCRoute
         *     * HTTPRoute
         *     * TCPRoute
         *     * TLSRoute
         *     * UDPRoute */
        kind: string;
        /** @description Namespace is the namespace of the referent.
         *
         *
         *     Support: Core */
        namespace: string;
      }[];
      /** @description To describes the resources that may be referenced by the resources
       *     described in "From". Each entry in this list MUST be considered to be an
       *     additional place that references can be valid to, or to put this another
       *     way, entries MUST be combined using OR.
       *
       *
       *     Support: Core */
      to: {
        /** @description Group is the group of the referent.
         *     When empty, the Kubernetes core API group is inferred.
         *
         *
         *     Support: Core */
        group: string;
        /** @description Kind is the kind of the referent. Although implementations may support
         *     additional resources, the following types are part of the "Core"
         *     support level for this field:
         *
         *
         *     * Secret when used to permit a SecretObjectReference
         *     * Service when used to permit a BackendObjectReference */
        kind: string;
        /** @description Name is the name of the referent. When unspecified, this policy
         *     refers to all resources of the specified Group and Kind in the local
         *     namespace. */
        name?: string;
      }[];
    };
  };
}
