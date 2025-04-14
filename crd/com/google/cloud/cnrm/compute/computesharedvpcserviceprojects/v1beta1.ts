import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeSharedVPCServiceProjectV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesComputeSharedVPCServiceProjectV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "compute.cnrm.cloud.google.com/v1beta1",
        kind: "ComputeSharedVPCServiceProject",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesComputeSharedVPCServiceProjectV1beta1Config extends ManifestConfig {
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
      /** @description The deletion policy for the shared VPC service. Setting ABANDON allows the resource
       *     				to be abandoned rather than deleted. Possible values are: "ABANDON". */
      deletionPolicy?: string;
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
