import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkstationClusterV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkstationClusterV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkstationClusterV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "workstations.cnrm.cloud.google.com/v1beta1";
    kind: "WorkstationCluster";
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
    /** @description WorkstationClusterSpec defines the desired state of WorkstationCluster */
    spec?: {
      /** @description Optional. Client-specified annotations. */
      annotations?: {
        /** @description Key for the annotation. */
        key?: string;
        /** @description Value for the annotation. */
        value?: string;
      }[];
      /** @description Optional. Human-readable name for this workstation cluster. */
      displayName?: string;
      /** @description Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources. */
      labels?: {
        /** @description Key for the label. */
        key?: string;
        /** @description Value for the label. */
        value?: string;
      }[];
      /** @description The location of the cluster. */
      location?: string;
      /** @description Immutable. Reference to the Compute Engine network in which instances associated with this workstation cluster will be created. */
      networkRef: {
        /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
        external?: string;
        /** @description The `name` field of a `ComputeNetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeNetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Configuration for private workstation cluster. */
      privateClusterConfig?: {
        /** @description Optional. Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed. */
        allowedProjects?: ({
          /** @description The `projectID` field of a project, when not managed by Config Connector. */
          external?: string;
          /** @description The kind of the Project resource; optional but must be `Project` if provided. */
          kind?: string;
          /** @description The `name` field of a `Project` resource. */
          name?: string;
          /** @description The `namespace` field of a `Project` resource. */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description Immutable. Whether Workstations endpoint is private. */
        enablePrivateEndpoint?: boolean;
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The `projectID` field of a project, when not managed by Config Connector. */
        external?: string;
        /** @description The kind of the Project resource; optional but must be `Project` if provided. */
        kind?: string;
        /** @description The `name` field of a `Project` resource. */
        name?: string;
        /** @description The `namespace` field of a `Project` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The WorkstationCluster name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Immutable. Reference to the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster. */
      subnetworkRef: {
        /** @description The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector. */
        external?: string;
        /** @description The `name` field of a `ComputeSubnetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeSubnetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
    };
    /** @description WorkstationClusterStatus defines the config connector machine state of WorkstationCluster */
    status?: {
      /** @description Conditions represent the latest available observations of the object's current state. */
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
      /** @description A unique specifier for the WorkstationCluster resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the workstation cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment. */
        clusterHostname?: string;
        /** @description Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address. */
        controlPlaneIP?: string;
        /** @description Output only. Time when this workstation cluster was created. */
        createTime?: string;
        /** @description Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in [conditions][google.cloud.workstations.v1.WorkstationCluster.conditions]. */
        degraded?: boolean;
        /** @description Output only. Time when this workstation cluster was soft-deleted. */
        deleteTime?: string;
        /** @description Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
        etag?: string;
        /** @description Output only. Status conditions describing the workstation cluster's current state. */
        gcpConditions?: {
          /**
           * Format: int32
           * @description The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
           */
          code?: number;
          /** @description A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client. */
          message?: string;
        }[];
        /** @description Output only. Indicates whether this workstation cluster is currently being updated to match its intended state. */
        reconciling?: boolean;
        /** @description Output only. Service attachment URI for the workstation cluster. The service attachment is created when private endpoint is enabled. To access workstations in the workstation cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). */
        serviceAttachmentUri?: string;
        /** @description Output only. A system-assigned unique identifier for this workstation cluster. */
        uid?: string;
        /** @description Output only. Time when this workstation cluster was most recently updated. */
        updateTime?: string;
      };
    };
  };
}
