import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAccessContextManagerAccessPolicyV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesAccessContextManagerAccessPolicyV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "accesscontextmanager.cnrm.cloud.google.com/v1beta1",
        kind: "AccessContextManagerAccessPolicy",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesAccessContextManagerAccessPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Human readable title. Does not affect behavior. */
      title: string;
    };
  };
}
