import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGCPGatewayPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGCPGatewayPolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "GCPGatewayPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGCPGatewayPolicyV1Config extends ManifestConfig {
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
      /** @description Default defines default gateway policy configuration for the targeted resource. */
      default?: {
        allowGlobalAccess?: boolean;
        /** @description Region allows to specify load balancer's region for Multi-cluster Gateway. */
        region?: string;
        sslPolicy?: string;
      };
      /** @description TargetRef identifies an API object to apply policy to. */
      targetRef: {
        /** @description Group is the group of the target resource. */
        group: string;
        /** @description Kind is kind of the target resource. */
        kind: string;
        /** @description Name is the name of the target resource. */
        name: string;
        /** @description Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy. */
        namespace?: string;
      };
    };
  };
}
