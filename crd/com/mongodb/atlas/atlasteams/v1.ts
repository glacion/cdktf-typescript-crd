import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasTeamV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasTeamV1Config) {
    super(scope, id, { manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasTeam", ...manifest }, ...config });
  }
}
export interface KubernetesAtlasTeamV1Config extends ManifestConfig {
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
      /** @description The name of the team you want to create. */
      name: string;
      /** @description Valid email addresses of users to add to the new team */
      usernames: string[];
    };
  };
}
