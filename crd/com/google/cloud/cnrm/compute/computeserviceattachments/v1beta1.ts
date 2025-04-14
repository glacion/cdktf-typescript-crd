import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeServiceAttachmentV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeServiceAttachmentV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeServiceAttachment", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeServiceAttachmentV1beta1Config extends ManifestConfig {
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
      /** @description The connection preference of service attachment. The value can be set to `ACCEPT_AUTOMATIC`. An `ACCEPT_AUTOMATIC` service attachment is one that always accepts the connection from consumer forwarding rules. Possible values: CONNECTION_PREFERENCE_UNSPECIFIED, ACCEPT_AUTOMATIC, ACCEPT_MANUAL */
      connectionPreference: string;
      /** @description Projects that are allowed to connect to this service attachment. */
      consumerAcceptLists?: {
        /**
         * Format: int64
         * @description The value of the limit to set.
         */
        connectionLimit?: number;
        projectRef: {
          /** @description The project id or number for the project to set the limit for.
           *
           *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      consumerRejectLists?: ({
        /** @description Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description An optional description of this resource. Provide this property when you create the resource. */
      description?: string;
      /** @description Immutable. If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. */
      enableProxyProtocol?: boolean;
      /** @description Immutable. The location for the resource */
      location: string;
      natSubnets: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
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
      /** @description Immutable. */
      targetServiceRef: {
        /** @description The URL of a service serving the endpoint identified by this service attachment.
         *
         *     Allowed value: The `selfLink` field of a `ComputeForwardingRule` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
