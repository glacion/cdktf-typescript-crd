import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceDirectoryNamespaceV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesServiceDirectoryNamespaceV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "servicedirectory.cnrm.cloud.google.com/v1beta1",
        kind: "ServiceDirectoryNamespace",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesServiceDirectoryNamespaceV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The location for the Namespace.
       *     A full list of valid locations can be found by running
       *     'gcloud beta service-directory locations list'. */
      location: string;
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The namespaceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
