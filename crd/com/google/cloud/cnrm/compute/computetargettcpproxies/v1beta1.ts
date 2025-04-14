import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetTCPProxyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeTargetTCPProxyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeTargetTCPProxy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeTargetTCPProxyV1beta1Config extends ManifestConfig {
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
      /** @description A reference to the ComputeBackendService resource. */
      backendServiceRef: {
        /** @description The value of an externally managed ComputeBackendService resource. */
        external?: string;
        /** @description The name of a ComputeBackendService resource. */
        name?: string;
        /** @description The namespace of a ComputeBackendService resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description The geographical location of the ComputeTargetTCPProxy. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location?: string;
      /** @description Immutable. This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. */
      proxyBind?: boolean;
      /** @description Specifies the type of proxy header to append before sending data to the backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
      proxyHeader?: string;
      /** @description The ComputeTargetTCPProxy name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
