import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerCertificateMapEntryV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerCertificateMapEntryV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1beta1",
        kind: "CertificateManagerCertificateMapEntry",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerCertificateMapEntryV1beta1Config extends ManifestConfig {
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
        certificatesRefs: ({
          /** @description Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificates/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerCertificate` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description A human-readable description of the resource. */
        description?: string;
        /** @description Immutable. A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com)
         *     for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
         *     selecting a proper certificate. */
        hostname?: string;
        /** @description A map entry that is inputted into the certificate map. */
        mapRef: {
          /** @description Allowed value: The `name` field of a `CertificateManagerCertificateMap` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. A predefined matcher for particular cases, other than SNI selection. */
        matcher?: string;
        /** @description The project that this resource belongs to. */
        projectRef: {
          /** @description Allowed value: The `name` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
      };
      status?: {
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
        /** @description Creation timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
         *     with nanosecond resolution and up to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        createTime?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description A serving state of this Certificate Map Entry. */
        state?: string;
        /** @description Update timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
         *     with nanosecond resolution and up to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        updateTime?: string;
      };
    };
  };
}
