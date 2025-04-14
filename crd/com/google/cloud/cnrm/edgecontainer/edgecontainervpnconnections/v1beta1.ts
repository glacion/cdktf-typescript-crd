import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEdgeContainerVpnConnectionV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesEdgeContainerVpnConnectionV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "edgecontainer.cnrm.cloud.google.com/v1beta1",
        kind: "EdgeContainerVpnConnection",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesEdgeContainerVpnConnectionV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        clusterRef: {
          /** @description Allowed value: The `name` field of an `EdgeContainerCluster` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Whether this VPN connection has HA enabled on cluster side. If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs. */
        enableHighAvailability?: boolean;
        /** @description Immutable. Google Cloud Platform location. */
        location: string;
        /** @description Immutable. NAT gateway IP, or WAN IP address. If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
         *     This is empty if NAT is not used. */
        natGatewayIp?: string;
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description Allowed value: The `name` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description The VPN connection Cloud Router name. */
        router?: string;
        /** @description Immutable. The network ID of VPC to connect to. */
        vpc?: string;
        /** @description Project detail of the VPC network. Required if VPC is in a different project than the cluster project. */
        vpcProject?: {
          /** @description Immutable. The project of the VPC to connect to. If not specified, it is the same as the cluster project. */
          projectId?: string;
        };
      };
      status?: {
        /** @description Conditions represent the latest available observation of the resource's current state. */
        conditions?: {
          /** @description Last time the condition transitioned from one status to another. */
          lastTransitionTime?: string;
          /** @description Human-readable message indicating details about last transition. */
          message?: string;
          /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
          reason?: string;
          /** @description Status is the status of the condition. Can be True, False, Unknown. */
          status?: string;
          /** @description Type is the type of the condition. */
          type?: string;
        }[];
        /** @description The time when the VPN connection was created. */
        createTime?: string;
        /** @description A nested object resource. */
        details?: {
          /** @description The Cloud Router info. */
          cloudRouter?: {
            /** @description The associated Cloud Router name. */
            name?: string;
          }[];
          /** @description Each connection has multiple Cloud VPN gateways. */
          cloudVpns?: {
            /** @description The created Cloud VPN gateway name. */
            gateway?: string;
          }[];
          /** @description The error message. This is only populated when state=ERROR. */
          error?: string;
          /** @description The current connection state. */
          state?: string;
        }[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The time when the VPN connection was last updated. */
        updateTime?: string;
      };
    };
  };
}
