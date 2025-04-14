import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasStreamInstanceV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasStreamInstanceV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasStreamInstance", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasStreamInstanceV1Config extends ManifestConfig {
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
      /** @description The configuration to be used to connect to a Atlas Cluster */
      clusterConfig: {
        /** @description Name of the cluster configured for this connection */
        provider: string;
        /** @description Name of the cloud provider region hosting Atlas Stream Processing. */
        region: string;
        /** @description Selected tier for the Stream Instance. Configures Memory / VCPU allowances. */
        tier: string;
      };
      /** @description List of connections of the stream instance for the specified project */
      connectionRegistry?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      }[];
      /** @description Human-readable label that identifies the stream connection */
      name: string;
      /** @description Project which the instance belongs to */
      projectRef: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
    };
  };
}
