import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesKMSCryptoKeyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesKMSCryptoKeyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kms.cnrm.cloud.google.com/v1beta1", kind: "KMSCryptoKey", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesKMSCryptoKeyV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
       *     If not specified at creation time, the default duration is 24 hours. */
      destroyScheduledDuration?: string;
      /** @description Immutable. Whether this key may contain imported versions only. */
      importOnly?: boolean;
      /** @description The KMSKeyRing that this key belongs to. */
      keyRingRef: {
        /** @description Allowed value: The `selfLink` field of a `KMSKeyRing` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The immutable purpose of this CryptoKey. See the
       *     [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
       *     for possible inputs.
       *     Default value is "ENCRYPT_DECRYPT". */
      purpose?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
       *     The first rotation will take place after the specified period. The rotation period has
       *     the format of a decimal number with up to 9 fractional digits, followed by the
       *     letter 's' (seconds). It must be greater than a day (ie, 86400). */
      rotationPeriod?: string;
      /** @description Immutable. If set to true, the request will create a CryptoKey without any CryptoKeyVersions.
       *     You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion. */
      skipInitialVersionCreation?: boolean;
      /** @description A template describing settings for new crypto key versions. */
      versionTemplate?: {
        /** @description The algorithm to use when creating a version based on this template.
         *     See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. */
        algorithm: string;
        /** @description Immutable. The protection level to use when creating a version based on this template. Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE". */
        protectionLevel?: string;
      };
    };
  };
}
