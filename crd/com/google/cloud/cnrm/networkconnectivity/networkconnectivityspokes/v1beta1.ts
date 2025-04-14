import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkConnectivitySpokeV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesNetworkConnectivitySpokeV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "networkconnectivity.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkConnectivitySpoke",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkConnectivitySpokeV1beta1Config extends ManifestConfig {
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
        /** @description An optional description of the spoke. */
        description?: string;
        /** @description Immutable. */
        hubRef: {
          /** @description Immutable. The URI of the hub that this spoke is attached to.
           *
           *     Allowed value: The Google Cloud resource name of a `NetworkConnectivityHub` resource (format: `projects/{{project}}/locations/global/hubs/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes. */
        linkedInterconnectAttachments?: {
          /** @description Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations. */
          siteToSiteDataTransfer: boolean;
          /** @description Immutable. */
          uris: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeInterconnectAttachment` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
        /** @description Immutable. The URIs of linked Router appliance resources */
        linkedRouterApplianceInstances?: {
          /** @description Immutable. The list of router appliance instances */
          instances: {
            /** @description Immutable. The IP address on the VM to use for peering. */
            ipAddress?: string;
            /** @description Immutable. */
            virtualMachineRef?: {
              /** @description The URI of the virtual machine resource
               *
               *     Allowed value: The `selfLink` field of a `ComputeInstance` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations. */
          siteToSiteDataTransfer: boolean;
        };
        /** @description Immutable. VPC network that is associated with the spoke. */
        linkedVPCNetwork?: {
          /** @description Immutable. IP ranges encompassing the subnets to be excluded from peering. */
          excludeExportRanges?: string[];
          /** @description Immutable. */
          uriRef: {
            /** @description The URI of the VPC network resource.
             *
             *     Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. The URIs of linked VPN tunnel resources */
        linkedVpnTunnels?: {
          /** @description Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations. */
          siteToSiteDataTransfer: boolean;
          /** @description Immutable. */
          uris: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeVPNTunnel` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
        /** @description Immutable. The location for the resource */
        location: string;
        /** @description Immutable. The Project that this resource belongs to. */
        projectRef: {
          /** @description The project for the resource
           *
           *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
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
        /**
         * Format: date-time
         * @description Output only. The time the spoke was created.
         */
        createTime?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description Output only. The current lifecycle state of this spoke. Possible values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING */
        state?: string;
        /** @description Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id. */
        uniqueId?: string;
        /**
         * Format: date-time
         * @description Output only. The time the spoke was last updated.
         */
        updateTime?: string;
      };
    };
  };
}
