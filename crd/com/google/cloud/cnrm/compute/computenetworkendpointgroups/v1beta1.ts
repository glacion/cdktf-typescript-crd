import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeNetworkEndpointGroupV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesComputeNetworkEndpointGroupV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "compute.cnrm.cloud.google.com/v1beta1",
        kind: "ComputeNetworkEndpointGroup",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesComputeNetworkEndpointGroupV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The default port used if the port number is not specified in the
       *     network endpoint. */
      defaultPort?: number;
      /** @description Immutable. An optional description of this resource. Provide this property when
       *     you create the resource. */
      description?: string;
      /** @description Location represents the geographical location of the ComputeNetworkEndpointGroup. Specify a zone name. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. Type of network endpoints in this network endpoint group.
       *     NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
       *     endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
       *     Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
       *     that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
       *     INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
       *     CONNECTION balancing modes.
       *
       *     Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, and NON_GCP_PRIVATE_IP_PORT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT"]. */
      networkEndpointType?: string;
      /** @description The network to which all network endpoints in the NEG belong. Uses
       *     "default" project network if unspecified. */
      networkRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional subnetwork to which all network endpoints in the NEG belong. */
      subnetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
