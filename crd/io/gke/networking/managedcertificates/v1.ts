import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesManagedCertificateV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesManagedCertificateV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "ManagedCertificate", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesManagedCertificateV1Config extends ManifestConfig {
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
    spec: {
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
  };
}
