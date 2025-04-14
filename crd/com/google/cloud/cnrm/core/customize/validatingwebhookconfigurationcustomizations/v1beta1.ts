import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesValidatingWebhookConfigurationCustomizationV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesValidatingWebhookConfigurationCustomizationV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "customize.core.cnrm.cloud.google.com/v1beta1",
        kind: "ValidatingWebhookConfigurationCustomization",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesValidatingWebhookConfigurationCustomizationV1beta1Config extends ManifestConfig {
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
  };
}
