import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeInstanceGroupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeInstanceGroupV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeInstanceGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeInstanceGroupV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional textual description of the instance group. */
      description?: string;
      instances?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description The named port configuration. */
      namedPort?: {
        /** @description The name which the port will be mapped to. */
        name: string;
        /** @description The port number to map the name to. */
        port: number;
      }[];
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. The zone that this instance group should be created in. */
      zone: string;
    };
  };
}
