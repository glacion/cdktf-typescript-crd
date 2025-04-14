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
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
      status?: {
        /** @description The actual certificate data for this client certificate. */
        cert?: string;
        /** @description The serial number extracted from the certificate data. */
        certSerialNumber?: string;
        /** @description Conditions represent the latest available observation of the resource's current state. */
        conditions?: {
          /** @description Last time the condition transitioned from one status to another. */
          lastTransitionTime?: string;
          /** @description Human-readable message indicating details about last transition. */
          message?: string;
          /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
          reason?: string;
          /** @description Status is the status of the condition. Can be True, False, Unknown. */
          status?: string;
          /** @description Type is the type of the condition. */
          type?: string;
        }[];
        /** @description The time when the certificate was created in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. */
        createTime?: string;
        /** @description The time when the certificate expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. */
        expirationTime?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The private key associated with the client certificate. */
        privateKey?: string;
        /** @description The CA cert of the server this client cert was generated from. */
        serverCaCert?: string;
        /** @description The SHA1 Fingerprint of the certificate. */
        sha1Fingerprint?: string;
      };
    };
  };
}
