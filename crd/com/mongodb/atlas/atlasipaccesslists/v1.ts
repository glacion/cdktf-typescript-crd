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
  manifest: {
    /** @description AtlasIPAccessList is the Schema for the atlasipaccesslists API. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AtlasIPAccessListSpec defines the desired state of AtlasIPAccessList. */
      spec?: {
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
      /** @description AtlasIPAccessListStatus is the most recent observed status of the AtlasIPAccessList cluster. Read-only. */
      status?: {
        /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
        conditions: {
          /**
           * Format: date-time
           * @description Last time the condition transitioned from one status to another.
           */
          lastTransitionTime?: string;
          /** @description A human readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description Type of Atlas Custom Resource condition. */
          type: string;
        }[];
        /** @description Status is the state of the ip access list */
        entries?: {
          /** @description Entry is the ip access Atlas is managing */
          entry: string;
          /** @description Status is the correspondent state of the entry */
          status: string;
        }[];
        /**
         * Format: int64
         * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
         *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
         */
        observedGeneration?: number;
      };
    };
  };
}
