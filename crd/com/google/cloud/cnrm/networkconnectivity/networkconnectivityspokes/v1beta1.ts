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
  };
}
