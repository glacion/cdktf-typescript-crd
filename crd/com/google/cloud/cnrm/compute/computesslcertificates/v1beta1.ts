import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeSSLCertificateV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeSSLCertificateV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeSSLCertificate", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeSSLCertificateV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The certificate in PEM format.
       *     The certificate chain must be no greater than 5 certs long.
       *     The chain must include at least one intermediate cert. */
      certificate: {
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
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Location represents the geographical location of the ComputeSSLCertificate. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. The write-only private key in PEM format. */
      privateKey: {
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
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
    };
  };
}
