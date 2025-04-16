import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesServiceAttachmentV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesServiceAttachmentV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesServiceAttachmentV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1beta1";
    kind?: "ServiceAttachment";
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
    /** @description ServiceAttachmentSpec is the spec for a ServiceAttachment resource */
    spec?: {
      /** @description ConnectionPreference determines how consumers are accepted. */
      connectionPreference?: string;
      /** @description ConsumerAllowList is list of consumer projects that should be allow listed for this ServiceAttachment */
      consumerAllowList?: {
        /**
         * Format: int64
         * @description ConnectionLimit is the connection limit for this Consumer project
         */
        connectionLimit?: number;
        /** @description ForceSendFields is a list of field names (e.g. "ConnectionLimit") to unconditionally include in API requests. By default, fields with empty values are omitted from API requests. However, any non-pointer, non-interface field appearing in ForceSendFields will be sent to the server regardless of whether the field is empty or not. This may be used to include empty fields in Patch requests. */
        forceSendFields?: string[];
        /** @description NullFields is a list of field names (e.g. "ConnectionLimit") to include in API requests with the JSON null value. By default, fields with empty values are omitted from API requests. However, any field with an empty value appearing in NullFields will be sent to the server as null. It is an error if a field in this list has a non-empty value. This may be used to include null fields in Patch requests. */
        nullFields?: string[];
        /** @description Project is the project id or number for the project to set the limit for. */
        project?: string;
      }[];
      /** @description ConsumerRejectList is the list of Consumer Project IDs or Numbers that should be rejected for this ServiceAttachment */
      consumerRejectList?: string[];
      /** @description NATSubnets contains the list of subnet names for PSC or nat subnet resource urls */
      natSubnets?: string[];
      /** @description ProxyProtocol when set will expose client information TCP/IP information */
      proxyProtocol?: boolean;
      /** @description ResourceRef is the reference to the K8s resource that created the forwarding rule Only Services can be used as a reference */
      resourceRef?: {
        /** @description APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
        apiGroup?: string;
        /** @description Kind is the type of resource being referenced */
        kind: string;
        /** @description Name is the name of resource being referenced */
        name: string;
      };
    };
    /** @description ServiceAttachmentStatus is the status for a ServiceAttachment resource */
    status?: {
      /** @description Consumer Forwarding Rules using ts Service Attachment */
      consumerForwardingRules?: {
        /** @description Forwarding rule consumer created to use ServiceAttachment */
        forwardingRuleURL?: string;
        /** @description Status of consumer forwarding rule */
        status?: string;
      }[];
      /** @description ForwardingRuleURL is the URL to the GCE Forwarding Rule resource the Service Attachment points to */
      forwardingRuleURL?: string;
      /**
       * Format: date-time
       * @description LastModifiedTimestamp tracks last time Status was updated
       */
      lastModifiedTimestamp?: string | null;
      /** @description ServiceAttachmentURL is the URL for the GCE Service Attachment resource */
      serviceAttachmentURL?: string;
    };
  };
}
