import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesManagedCertificateV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesManagedCertificateV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesManagedCertificateV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1beta1";
    kind: "ManagedCertificate";
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
    spec?: {
      domains?: string[];
    };
    status?: {
      certificateName?: string;
      certificateStatus?: string;
      domainStatus?: {
        domain: string;
        status: string;
      }[];
      /** Format: date-time */
      expireTime?: string;
    };
  };
}
