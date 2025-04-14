import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkServicesMeshV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkServicesMeshV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "networkservices.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkServicesMesh",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkServicesMeshV1beta1Config extends ManifestConfig {
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
      /** @description Optional. A free-text description of the resource. Max length 1024 characters. */
      description?: string;
      /**
       * Format: int64
       * @description Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This field is only valid if the type of Mesh is SIDECAR.
       */
      interceptionPort?: number;
      /** @description Immutable. The location for the resource */
      location: string;
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
    };
  };
}
