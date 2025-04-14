import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApigeeEnvgroupV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesApigeeEnvgroupV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "apigee.cnrm.cloud.google.com/v1alpha1", kind: "ApigeeEnvgroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesApigeeEnvgroupV1alpha1Config extends ManifestConfig {
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
      /** @description Host names for this environment group. */
      hostnames?: string[];
      /** @description ApigeeOrganizationRef is a reference to a ApigeeOrganization resource. */
      organizationRef: {
        /** @description A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}". */
        external?: string;
        /** @description The name of a ApigeeOrganization resource. */
        name?: string;
        /** @description The namespace of a ApigeeOrganization resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The ApigeeEnvgroup name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
