import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApigeeEnvironmentV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesApigeeEnvironmentV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "apigee.cnrm.cloud.google.com/v1beta1", kind: "ApigeeEnvironment", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesApigeeEnvironmentV1beta1Config extends ManifestConfig {
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
      /** @description Reference to parent Apigee Organization. */
      apigeeOrganizationRef: {
        /** @description A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}". */
        external?: string;
        /** @description The name of a ApigeeOrganization resource. */
        name?: string;
        /** @description The namespace of a ApigeeOrganization resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Description of the environment. */
      description?: string;
      /** @description Optional. Display name for this environment. */
      displayName?: string;
      /** @description Optional. Key-value pairs that may be used for customizing the environment. */
      properties?: {
        [key: string]: string;
      };
      /** @description The ApigeeEnvironment name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
