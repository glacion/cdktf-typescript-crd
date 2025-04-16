import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesManagedCertificateV1beta2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesManagedCertificateV1beta2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesManagedCertificateV1beta2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1beta2";
    kind?: "ManagedCertificate";
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
