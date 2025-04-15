import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkServicesGatewayV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesNetworkServicesGatewayV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesNetworkServicesGatewayV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1";
    kind: "NetworkServicesGateway";
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
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was created.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Server-defined URL of this resource */
      selfLink?: string;
      /**
       * Format: date-time
       * @description Output only. The timestamp when the resource was updated.
       */
      updateTime?: string;
    };
  };
}
