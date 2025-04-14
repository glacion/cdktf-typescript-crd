import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkstationClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWorkstationClusterV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "workstations.cnrm.cloud.google.com/v1beta1", kind: "WorkstationCluster", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesWorkstationClusterV1beta1Config extends ManifestConfig {
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
  };
}
