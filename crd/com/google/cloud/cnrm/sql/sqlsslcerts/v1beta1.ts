import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesSQLSSLCertV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesSQLSSLCertV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "sql.cnrm.cloud.google.com/v1beta1", kind: "SQLSSLCert", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesSQLSSLCertV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The common name to be used in the certificate to identify the client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created. */
      commonName: string;
      /** @description The Cloud SQL instance. */
      instanceRef: {
        /** @description Allowed value: The `name` field of a `SQLInstance` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated sha1Fingerprint of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
    };
  };
}
