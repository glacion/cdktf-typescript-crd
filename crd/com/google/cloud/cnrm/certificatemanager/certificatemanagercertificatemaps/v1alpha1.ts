import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCertificateManagerCertificateMapV1alpha1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesCertificateManagerCertificateMapV1alpha1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "certificatemanager.cnrm.cloud.google.com/v1alpha1",
        kind: "CertificateManagerCertificateMap",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesCertificateManagerCertificateMapV1alpha1Config extends ManifestConfig {
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
        /** @description A human-readable description of the resource. */
        description?: string;
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
        /** @description Creation timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
         *     accurate to nanoseconds with up to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        createTime?: string;
        /** @description A list of target proxies that use this Certificate Map. */
        gclbTargets?: {
          /** @description An IP configuration where this Certificate Map is serving. */
          ipConfigs?: {
            /** @description An external IP address. */
            ipAddress?: string;
            /** @description A list of ports. */
            ports?: number[];
          }[];
          /** @description Proxy name must be in the format projects/*\/locations/*\/targetHttpsProxies/*.
           *     This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
           *     'targetSslProxy' may be set. */
          targetHttpsProxy?: string;
          /** @description Proxy name must be in the format projects/*\/locations/*\/targetSslProxies/*.
           *     This field is part of a union field 'target_proxy': Only one of 'targetHttpsProxy' or
           *     'targetSslProxy' may be set. */
          targetSslProxy?: string;
        }[];
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description Update timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
         *     accurate to nanoseconds with up to nine fractional digits.
         *     Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
        updateTime?: string;
      };
    };
  };
}
