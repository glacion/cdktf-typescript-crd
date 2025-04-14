import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesReferenceGrantV1alpha2 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesReferenceGrantV1alpha2Config) {
    super(scope, id, {
      manifest: { apiVersion: "gateway.networking.k8s.io/v1alpha2", kind: "ReferenceGrant", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesReferenceGrantV1alpha2Config extends ManifestConfig {
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
    /** @description ReferenceGrant identifies kinds of resources in other namespaces that are
     *     trusted to reference the specified kinds of resources in the same namespace
     *     as the policy.
     *
     *
     *     Each ReferenceGrant can be used to represent a unique trust relationship.
     *     Additional Reference Grants can be used to add to the set of trusted
     *     sources of inbound references for the namespace they are defined within.
     *
     *
     *     A ReferenceGrant is required for all cross-namespace references in Gateway API
     *     (with the exception of cross-namespace Route-Gateway attachment, which is
     *     governed by the AllowedRoutes configuration on the Gateway, and cross-namespace
     *     Service ParentRefs on a "consumer" mesh Route, which defines routing rules
     *     applicable only to workloads in the Route namespace). ReferenceGrants allowing
     *     a reference from a Route to a Service are only applicable to BackendRefs.
     *
     *
     *     ReferenceGrant is a form of runtime verification allowing users to assert
     *     which cross-namespace object references are permitted. Implementations that
     *     support ReferenceGrant MUST NOT permit cross-namespace references which have
     *     no grant, and MUST respond to the removal of a grant by revoking the access
     *     that the grant allowed. */
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
  };
}
