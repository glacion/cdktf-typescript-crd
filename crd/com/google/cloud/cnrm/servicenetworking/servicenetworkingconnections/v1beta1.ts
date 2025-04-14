import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceNetworkingConnectionV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesServiceNetworkingConnectionV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "servicenetworking.cnrm.cloud.google.com/v1beta1",
        kind: "ServiceNetworkingConnection",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesServiceNetworkingConnectionV1beta1Config extends ManifestConfig {
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
      networkRef: {
        /** @description Allowed value: The `name` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      reservedPeeringRanges: ({
        /** @description Allowed value: The `name` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description Immutable. Provider peering service that is managing peering connectivity for a service provider organization. For Google services that support this functionality it is 'servicenetworking.googleapis.com'. */
      service: string;
    };
  };
}
