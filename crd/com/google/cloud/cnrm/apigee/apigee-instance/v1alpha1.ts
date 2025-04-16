import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApigeeInstanceV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesApigeeInstanceV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesApigeeInstanceV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "apigee.cnrm.cloud.google.com/v1alpha1";
    kind?: "ApigeeInstance";
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
    /** @description ApigeeInstanceSpec defines the desired state of ApigeeInstance */
    spec: {
      /** @description Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging. */
      accessLoggingConfig?: {
        /** @description Optional. Boolean flag that specifies whether the customer access log feature is enabled. */
        enabled?: boolean;
        /** @description Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: "filter": status_code >= 200 && status_code < 300 ) */
        filter?: string;
      };
      /** @description Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list. */
      consumerAcceptList?: string[];
      /** @description Optional. Description of the instance. */
      description?: string;
      /** @description Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. */
      diskEncryptionKMSCryptoKeyRef?: {
        /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
        external?: string;
        /** @description The `name` of a `KMSCryptoKey` resource. */
        name?: string;
        /** @description The `namespace` of a `KMSCryptoKey` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Display name for the instance. */
      displayName?: string;
      /** @description Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28` */
      ipRange?: string;
      /** @description Required. Compute Engine location where the instance resides. */
      location: string;
      /** @description Reference to parent Apigee Organization. */
      organizationRef: {
        /** @description A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}". */
        external?: string;
        /** @description The name of a ApigeeOrganization resource. */
        name?: string;
        /** @description The namespace of a ApigeeOrganization resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`. */
      peeringCIDRRange?: string;
      /** @description The ApigeeInstance name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
    /** @description ApigeeInstanceStatus defines the config connector machine state of ApigeeInstance */
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
      /** @description A unique specifier for the ApigeeInstance resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /**
         * Format: int64
         * @description Output only. Time the instance was created in milliseconds since epoch.
         */
        createdAt?: number;
        /** @description Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service. */
        host?: string;
        /**
         * Format: int64
         * @description Output only. Time the instance was last modified in milliseconds since epoch.
         */
        lastModifiedAt?: number;
        /** @description Output only. Port number of the exposed Apigee endpoint. */
        port?: string;
        /** @description Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments. */
        runtimeVersion?: string;
        /** @description Output only. Resource name of the service attachment created for the instance in the format: `projects/{{project-id}}/regions/{{region-id}}/serviceAttachments/{{service-attachment-id}}` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints. */
        serviceAttachment?: string;
        /** @description Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use. */
        state?: string;
      };
    };
  };
}
