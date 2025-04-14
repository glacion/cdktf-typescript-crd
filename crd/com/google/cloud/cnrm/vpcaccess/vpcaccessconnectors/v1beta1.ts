import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVPCAccessConnectorV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVPCAccessConnectorV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "vpcaccess.cnrm.cloud.google.com/v1beta1", kind: "VPCAccessConnector", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVPCAccessConnectorV1beta1Config extends ManifestConfig {
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
        /** @description Immutable. The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. */
        ipCidrRange?: string;
        /** @description Location represents the geographical location of the VPCAccessConnector. Specify a region name. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
        location: string;
        /** @description Immutable. Machine type of VM Instance underlying connector. Default is e2-micro. */
        machineType?: string;
        /** @description Immutable. Maximum value of instances in autoscaling group underlying the connector. */
        maxInstances?: number;
        /** @description Immutable. Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300. */
        maxThroughput?: number;
        /** @description Immutable. Minimum value of instances in autoscaling group underlying the connector. */
        minInstances?: number;
        /** @description Immutable. Minimum throughput of the connector in Mbps. Default and min is 200. */
        minThroughput?: number;
        /** @description Immutable. Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. */
        networkRef?: {
          /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. The project that this resource belongs to. */
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
        /** @description Immutable. The subnet in which to house the connector. */
        subnet?: {
          /** @description Immutable. Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is
           *     https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}" */
          nameRef?: {
            /** @description Allowed value: The `name` field of a `ComputeSubnetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued. */
          projectRef?: {
            /** @description Allowed value: The `name` field of a `Project` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
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
        /** @description List of projects using the connector. */
        connectedProjects?: string[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The fully qualified name of this VPC connector. */
        selfLink?: string;
        /** @description State of the VPC access connector. */
        state?: string;
      };
    };
  };
}
