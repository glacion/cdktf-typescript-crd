import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeServiceAttachmentV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeServiceAttachmentV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeServiceAttachmentV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeServiceAttachment";
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
      /** @description An array of connections for all the consumers connected to this service attachment. */
      connectedEndpoints?: {
        /** @description The url of a connected endpoint. */
        endpoint?: string;
        /**
         * Format: int64
         * @description The PSC connection id of the connected endpoint.
         */
        pscConnectionId?: number;
        /** @description The status of a connected endpoint to this service attachment. Possible values: PENDING, RUNNING, DONE */
        status?: string;
      }[];
      /** @description Fingerprint of this resource. This field is used internally during updates of this resource. */
      fingerprint?: string;
      /**
       * Format: int64
       * @description The unique identifier for the resource type. The server generates this identifier.
       */
      id?: number;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description An 128-bit global unique ID of the PSC service attachment. */
      pscServiceAttachmentId?: {
        /** Format: int64 */
        high?: number;
        /** Format: int64 */
        low?: number;
      };
      /** @description URL of the region where the service attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body. */
      region?: string;
      /** @description Server-defined URL for the resource. */
      selfLink?: string;
    };
  };
}
