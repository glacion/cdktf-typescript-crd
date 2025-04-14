import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkstationV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWorkstationV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "workstations.cnrm.cloud.google.com/v1beta1", kind: "Workstation", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesWorkstationV1beta1Config extends ManifestConfig {
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
      /** @description Optional. Human-readable name for this workstation. */
      displayName?: string;
      /** @description Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. */
      labels?: {
        /** @description Key for the label. */
        key?: string;
        /** @description Value for the label. */
        value?: string;
      }[];
      /** @description Parent is a reference to the parent WorkstationConfig for this Workstation. */
      parentRef: {
        /** @description A reference to an externally managed WorkstationConfig resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/workstationClusters/{{workstationclusterID}}/workstationConfigs/{{workstationconfigID}}". */
        external?: string;
        /** @description The name of a WorkstationConfig resource. */
        name?: string;
        /** @description The namespace of a WorkstationConfig resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The Workstation name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
