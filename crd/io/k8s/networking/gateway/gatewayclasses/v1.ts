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
  };
}
