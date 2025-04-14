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
  manifest: {
    /** @description ValidatingWebhookConfigurationCustomization is the Schema for customizing the validating webhook
     *     configurations in config connector. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: {
        name?: string;
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
  };
}
