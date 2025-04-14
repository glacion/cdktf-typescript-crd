import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIDSEndpointV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudIDSEndpointV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloudids.cnrm.cloud.google.com/v1beta1", kind: "CloudIDSEndpoint", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudIDSEndpointV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of the endpoint. */
      description?: string;
      /** @description Immutable. The location for the endpoint. */
      location: string;
      /** @description Immutable. Name of the VPC network that is connected
       *     to the IDS endpoint. This can either contain the VPC network name
       *     itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net"). */
      networkRef: {
        /** @description Allowed value: The `name` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description Immutable. The minimum alert severity level that is reported by the endpoint. Possible values: ["INFORMATIONAL", "LOW", "MEDIUM", "HIGH", "CRITICAL"]. */
      severity: string;
      /** @description Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs. */
      threatExceptions?: string[];
    };
  };
}
