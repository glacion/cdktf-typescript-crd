import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesConfigControllerInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesConfigControllerInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesConfigControllerInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "configcontroller.cnrm.cloud.google.com/v1beta1";
    kind?: "ConfigControllerInstance";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    spec: {
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. Configuration of the cluster management */
      managementConfig: {
        /** @description Immutable. Configuration of the full (Autopilot) cluster management */
        fullManagementConfig?: {
          /** @description Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
          clusterCidrBlock?: string;
          /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one. */
          clusterNamedRange?: string;
          /** @description Immutable. Master Authorized Network. Allows access to the k8s master from this block. */
          manBlock?: string;
          /** @description Immutable. The /28 network that the masters will use. */
          masterIPv4CidrBlock?: string;
          /** @description Immutable. */
          networkRef?: {
            /** @description Existing VPC Network to put the GKE cluster and nodes in.
             *
             *     Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
          servicesCidrBlock?: string;
          /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one. */
          servicesNamedRange?: string;
        };
        /** @description Immutable. Configuration of the standard (GKE) cluster management */
        standardManagementConfig?: {
          /** @description Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
          clusterCidrBlock?: string;
          /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one. */
          clusterNamedRange?: string;
          /** @description Immutable. Master Authorized Network. Allows access to the k8s master from this block. */
          manBlock?: string;
          /** @description Immutable. The /28 network that the masters will use. */
          masterIPv4CidrBlock: string;
          /** @description Immutable. */
          networkRef?: {
            /** @description Existing VPC Network to put the GKE cluster and nodes in.
             *
             *     Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
          servicesCidrBlock?: string;
          /** @description Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one. */
          servicesNamedRange?: string;
        };
      };
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
      /** @description Immutable. Only allow access to the master's private endpoint IP. */
      usePrivateEndpoint?: boolean;
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
      /** @description Output only. KrmApiHost GCP self link used for identifying the underlying endpoint (GKE cluster currently). */
      gkeResourceLink?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. The current state of the internal state machine for the KrmApiHost. Possible values: STATE_UNSPECIFIED, CREATING, RUNNING, DELETING, SUSPENDED, READ_ONLY */
      state?: string;
    };
  };
}
