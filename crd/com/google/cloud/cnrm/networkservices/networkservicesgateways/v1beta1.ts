import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkServicesGatewayV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkServicesGatewayV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkServicesGateway",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkServicesGatewayV1beta1Config extends ManifestConfig {
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
      /** @description One or more addresses with ports in format of ":" that the Gateway must receive traffic on. The proxy binds to the ports specified. IP address can be anything that is allowed by the underlying infrastructure (auto-allocation, static IP, BYOIP). */
      addresses?: string[];
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Required. One or more ports that the Gateway must receive traffic on. The proxy binds to the ports specified. Gateway listen on 0.0.0.0 on the ports specified below. */
      ports: number[];
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Required. Immutable. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens. */
      scope: string;
      serverTlsPolicyRef?: {
        /** @description Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.
         *
         *     Allowed value: The Google Cloud resource name of a `NetworkSecurityServerTLSPolicy` resource (format: `projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Immutable. The type of the customer managed gateway. Possible values: TYPE_UNSPECIFIED, OPEN_MESH, SECURE_WEB_GATEWAY */
      type?: string;
    };
  };
}
