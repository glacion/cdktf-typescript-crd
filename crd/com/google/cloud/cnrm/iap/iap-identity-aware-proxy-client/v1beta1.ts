import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IapCnrmCloudGoogleComIAPIdentityAwareProxyClientV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: IapCnrmCloudGoogleComIAPIdentityAwareProxyClientV1beta1Config) {
    super(scope, id, config);
  }
}
export interface IapCnrmCloudGoogleComIAPIdentityAwareProxyClientV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "iap.cnrm.cloud.google.com/v1beta1";
    kind: "IAPIdentityAwareProxyClient";
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
    spec: {
      /** @description Immutable. */
      brandRef: {
        /** @description The brand for the resource
         *
         *     Allowed value: The Google Cloud resource name of an `IAPBrand` resource (format: `projects/{{project}}/brands/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Human-friendly name given to the OAuth client. */
      displayName?: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
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
      /** @description Output only. Client secret of the OAuth client. */
      secret?: string;
    };
  };
}
