import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IapCnrmCloudGoogleComIAPBrandV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: IapCnrmCloudGoogleComIAPBrandV1beta1Config) {
    super(scope, id, config);
  }
}
export interface IapCnrmCloudGoogleComIAPBrandV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "iap.cnrm.cloud.google.com/v1beta1";
    kind: "IAPBrand";
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
    spec?: {
      /** @description Immutable. Application name displayed on OAuth consent screen. */
      applicationTitle?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Support email displayed on the OAuth consent screen. */
      supportEmail?: string;
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Whether the brand is only intended for usage inside the G Suite organization only. */
      orgInternalOnly?: boolean;
    };
  };
}
