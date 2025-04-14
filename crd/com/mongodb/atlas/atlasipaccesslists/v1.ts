import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasIPAccessListV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasIPAccessListV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasIPAccessList", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasIPAccessListV1Config extends ManifestConfig {
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
      /** @description Name of the secret containing Atlas API private and public keys */
      connectionSecret?: {
        /** @description Name of the resource being referred to
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name: string;
      };
      /** @description Entries is the list of IP Access to be managed */
      entries: {
        /** @description Unique identifier of AWS security group in this access list entry. */
        awsSecurityGroup?: string;
        /** @description Range of IP addresses in CIDR notation in this access list entry. */
        cidrBlock?: string;
        /** @description Comment associated with this access list entry. */
        comment?: string;
        /**
         * Format: date-time
         * @description Date and time after which Atlas deletes the temporary access list entry.
         */
        deleteAfterDate?: string;
        /** @description Entry using an IP address in this access list entry. */
        ipAddress?: string;
      }[];
      /** @description "externalProjectRef" holds the parent Atlas project ID.
       *     Mutually exclusive with the "projectRef" field */
      externalProjectRef?: {
        /** @description ID is the Atlas project ID */
        id: string;
      };
      /** @description "projectRef" is a reference to the parent AtlasProject resource.
       *     Mutually exclusive with the "externalProjectRef" field */
      projectRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
    };
  };
}
