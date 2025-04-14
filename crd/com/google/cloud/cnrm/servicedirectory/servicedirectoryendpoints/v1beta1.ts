import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceDirectoryEndpointV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesServiceDirectoryEndpointV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "servicedirectory.cnrm.cloud.google.com/v1beta1",
        kind: "ServiceDirectoryEndpoint",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesServiceDirectoryEndpointV1beta1Config extends ManifestConfig {
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
      addressRef?: {
        /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Only the `external` field is supported to configure the reference.
       *
       *     Immutable. The Google Compute Engine network (VPC) of the endpoint in the format
       *     projects/<project number>/locations/global/networks/*.
       *
       *     The project must be specified by project number (project id is rejected). Incorrectly formatted networks are
       *     rejected, but no other validation is performed on this field (ex. network or project existence,
       *     reachability, or permissions). */
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Port that the endpoint is running on, must be in the
       *     range of [0, 65535]. If unspecified, the default is 0. */
      port?: number;
      /** @description Immutable. Optional. The endpointId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The ServiceDirectoryService that this endpoint belongs to. */
      serviceRef: {
        /** @description Allowed value: The `name` field of a `ServiceDirectoryService` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
