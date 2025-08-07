import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class NetworkingGkeIoManagedCertificateV1beta2 extends Manifest {
  constructor(scope: Construct, id: string, config: NetworkingGkeIoManagedCertificateV1beta2Config) {
    super(scope, id, config);
  }
}
export interface NetworkingGkeIoManagedCertificateV1beta2Config extends ManifestConfig {
  manifest: {
    apiVersion: "networking.gke.io/v1beta2";
    kind: "ManagedCertificate";
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
