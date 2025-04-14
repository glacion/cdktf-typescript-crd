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
    /** @description AtlasStreamInstance is the Schema for the atlasstreaminstances API */
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
      spec?: {
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
        /** @description List of connections configured in the stream instance. */
        connections?: {
          /** @description Human-readable label that uniquely identifies the stream connection */
          name?: string;
          /** @description Reference for the resource that contains connection configuration */
          resourceRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
        }[];
        /** @description List that contains the hostnames assigned to the stream instance. */
        hostnames?: string[];
        /** @description Unique 24-hexadecimal character string that identifies the instance */
        id?: string;
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
