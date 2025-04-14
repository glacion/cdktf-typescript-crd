import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGatewayClassV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGatewayClassV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "gateway.networking.k8s.io/v1", kind: "GatewayClass", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGatewayClassV1Config extends ManifestConfig {
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
    /** @description GatewayClass describes a class of Gateways available to the user for creating
     *     Gateway resources.
     *
     *
     *     It is recommended that this resource be used as a template for Gateways. This
     *     means that a Gateway is based on the state of the GatewayClass at the time it
     *     was created and changes to the GatewayClass or associated parameters are not
     *     propagated down to existing Gateways. This recommendation is intended to
     *     limit the blast radius of changes to GatewayClass or associated parameters.
     *     If implementations choose to propagate GatewayClass changes to existing
     *     Gateways, that MUST be clearly documented by the implementation.
     *
     *
     *     Whenever one or more Gateways are using a GatewayClass, implementations SHOULD
     *     add the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the
     *     associated GatewayClass. This ensures that a GatewayClass associated with a
     *     Gateway is not deleted while in use.
     *
     *
     *     GatewayClass is a Cluster level resource. */
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
      /** @description Spec defines the desired state of GatewayClass. */
      spec: {
        /** @description ControllerName is the name of the controller that is managing Gateways of
         *     this class. The value of this field MUST be a domain prefixed path.
         *
         *
         *     Example: "example.net/gateway-controller".
         *
         *
         *     This field is not mutable and cannot be empty.
         *
         *
         *     Support: Core */
        controllerName: string;
        /** @description Description helps describe a GatewayClass with more details. */
        description?: string;
        /** @description ParametersRef is a reference to a resource that contains the configuration
         *     parameters corresponding to the GatewayClass. This is optional if the
         *     controller does not require any additional configuration.
         *
         *
         *     ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         *     or an implementation-specific custom resource. The resource can be
         *     cluster-scoped or namespace-scoped.
         *
         *
         *     If the referent cannot be found, the GatewayClass's "InvalidParameters"
         *     status condition will be true.
         *
         *
         *     A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         *     the merging behavior is implementation specific.
         *     It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         *
         *     Support: Implementation-specific */
        parametersRef?: {
          /** @description Group is the group of the referent. */
          group: string;
          /** @description Kind is kind of the referent. */
          kind: string;
          /** @description Name is the name of the referent. */
          name: string;
          /** @description Namespace is the namespace of the referent.
           *     This field is required when referring to a Namespace-scoped resource and
           *     MUST be unset when referring to a Cluster-scoped resource. */
          namespace?: string;
        };
      };
      /** @description Status defines the current state of GatewayClass.
       *
       *
       *     Implementations MUST populate status on all GatewayClass resources which
       *     specify their controller name. */
      status?: {
        /** @description Conditions is the current status from the controller for
         *     this GatewayClass.
         *
         *
         *     Controllers should prefer to publish conditions using values
         *     of GatewayClassConditionType for the type of each Condition. */
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
      };
    };
  };
}
