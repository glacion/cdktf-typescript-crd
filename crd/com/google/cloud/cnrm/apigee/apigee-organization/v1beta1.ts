import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesApigeeOrganizationV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesApigeeOrganizationV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesApigeeOrganizationV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "apigee.cnrm.cloud.google.com/v1beta1";
    kind: "ApigeeOrganization";
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
    /** @description ApigeeOrganizationSpec defines the desired state of ApigeeOrganization */
    spec: {
      /** @description Addon configurations of the Apigee organization. */
      addonsConfig?: {
        /** @description Configuration for the Advanced API Ops add-on. */
        advancedApiOpsConfig?: {
          /** @description Flag that specifies whether the Advanced API Ops add-on is enabled. */
          enabled?: boolean;
        };
        /** @description Configuration for the Monetization add-on. */
        monetizationConfig?: {
          /** @description Flag that specifies whether the Monetization add-on is enabled. */
          enabled?: boolean;
        };
      };
      /** @description Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). */
      analyticsRegion: string;
      /** @description Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid. */
      authorizedNetworkRef?: {
        /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
        external?: string;
        /** @description The `name` field of a `ComputeNetwork` resource. */
        name?: string;
        /** @description The `namespace` field of a `ComputeNetwork` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Description of the Apigee organization. */
      description?: string;
      /** @description Display name for the Apigee organization. Unused, but reserved for future use. */
      displayName?: string;
      /** @description Required. Name of the GCP project in which to associate the Apigee organization. */
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
      /** @description Properties defined in the Apigee organization profile. */
      properties?: {
        [key: string]: string;
      };
      /** @description The ApigeeOrganization name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid. */
      runtimeDatabaseEncryptionKeyRef?: {
        /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
        external?: string;
        /** @description The `name` of a `KMSCryptoKey` resource. */
        name?: string;
        /** @description The `namespace` of a `KMSCryptoKey` resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. */
      runtimeType: string;
    };
    /** @description ApigeeOrganizationStatus defines the config connector machine state of ApigeeOrganization */
    status?: {
      /** @description Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). */
      billingType?: string;
      /**
       * Format: byte
       * @description Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.
       */
      caCertificate?: string;
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
      /**
       * Format: int64
       * @description Output only. Time that the Apigee organization was created in milliseconds since epoch.
       */
      createdAt?: number;
      /** @description Output only. List of environments in the Apigee organization. */
      environments?: string[];
      /**
       * Format: int64
       * @description Output only. Time that the Apigee organization is scheduled for deletion.
       */
      expiresAt?: number;
      /** @description A unique specifier for the ApigeeOrganization resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
       */
      lastModifiedAt?: number;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: Record<string, never>;
      /** @description Output only. Project ID associated with the Apigee organization. */
      projectId?: string;
      /** @description Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use. */
      state?: string;
      /** @description Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/). */
      subscriptionType?: string;
    };
  };
}
