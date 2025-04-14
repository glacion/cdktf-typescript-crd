import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSecretManagerSecretVersionV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesSecretManagerSecretVersionV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "secretmanager.cnrm.cloud.google.com/v1beta1",
        kind: "SecretManagerSecretVersion",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesSecretManagerSecretVersionV1beta1Config extends ManifestConfig {
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
      /** @description DEPRECATED. You do not need to set this field in direct reconciler mode. Use delete-policy annotation instead. https://cloud.google.com/config-connector/docs/how-to/managing-deleting-resources#keeping_resources_after_deletion The deletion policy for the secret version. Setting 'ABANDON' allows the resource to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be disabled rather than deleted. Default is 'DELETE'. Possible values are: * DELETE * DISABLE * ABANDON. */
      deletionPolicy?: string;
      /** @description Should enable or disable the current SecretVersion. - Enabled version can be accessed and described. - Disabled version cannot be accessed, but the secret's contents still exist */
      enabled?: boolean;
      /** @description DEPRECATED. You do not need to set this field in direct reconciler mode. */
      isSecretDataBase64?: boolean;
      /** @description The SecretVersion number. If given, Config Connector acquires the resource from the Secret Manager service. If not given, Config Connector adds a new secret version to the GCP service, and you can find out the version number from `status.observedState.version` */
      resourceID?: string;
      /** @description The actual secret data. Config Connector supports secret data stored in Kubernetes secret or plain data (base64) */
      secretData?: {
        /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
        value?: string;
        /** @description Source for the field's value. Cannot be used if 'value' is specified. */
        valueFrom?: {
          /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
          secretKeyRef?: {
            /** @description Key that identifies the value to be extracted. */
            key: string;
            /** @description Name of the Secret to extract a value from. */
            name: string;
          };
        };
      };
      /** @description The resource name of the [Secret][google.cloud.secretmanager.v1.Secret] to create a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] for. */
      secretRef?: {
        /** @description A reference to an externally managed SecretManagerSecret resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/secrets/{{secretID}}". */
        external?: string;
        /** @description The name of a SecretManagerSecret resource. */
        name?: string;
        /** @description The namespace of a SecretManagerSecret resource. */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
