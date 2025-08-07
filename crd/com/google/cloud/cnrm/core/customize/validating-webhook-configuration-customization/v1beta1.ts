import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class CustomizeCoreCnrmCloudGoogleComValidatingWebhookConfigurationCustomizationV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: CustomizeCoreCnrmCloudGoogleComValidatingWebhookConfigurationCustomizationV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface CustomizeCoreCnrmCloudGoogleComValidatingWebhookConfigurationCustomizationV1beta1Config
  extends ManifestConfig {
  manifest: {
    apiVersion: "customize.core.cnrm.cloud.google.com/v1beta1";
    kind: "ValidatingWebhookConfigurationCustomization";
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
    /** @description WebhookConfigurationCustomizationSpec is the specification for customizing the webhooks of a config
     *     connector webhook configuration. */
    spec: {
      /** @description The list of webhooks whose configuration to be customized.
       *     Required */
      webhooks: {
        /**
         * @description The name of the webhook. Do not include the `.cnrm.cloud.google.com` suffix.
         *     Required
         * @enum {string}
         */
        name:
          | "abandon-on-uninstall"
          | "container-annotation-handler"
          | "deny-immutable-field-updates"
          | "deny-unknown-fields"
          | "generic-defaulter"
          | "iam-defaulter"
          | "iam-validation"
          | "management-conflict-annotation-defaulter"
          | "resource-validation";
        /**
         * Format: int32
         * @description TimeoutSeconds customizes the timeout of the webhook.
         *     The timeout value must be between 1 and 30 seconds.
         *     The default timeout in Kubernetes is 10 seconds.
         *     Required
         */
        timeoutSeconds?: number;
      }[];
    };
    /** @description WebhookConfigurationCustomizationStatus defines the observed state of ValidatingWebhookConfigurationCustomization and
     *     MutatingWebhookConfigurationCustomization. */
    status?: {
      errors?: string[];
      healthy: boolean;
      phase?: string;
    };
  };
}
