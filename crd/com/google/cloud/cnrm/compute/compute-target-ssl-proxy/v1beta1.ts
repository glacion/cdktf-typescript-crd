import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetSSLProxyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeTargetSSLProxyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeTargetSSLProxyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeTargetSSLProxy";
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
      /** @description A reference to the ComputeBackendService resource. */
      backendServiceRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeBackendService` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A reference to the CertificateMap resource uri that identifies a
       *     certificate map associated with the given target proxy. This
       *     field can only be set for global target proxies. Accepted format is
       *     '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'. */
      certificateMapRef?: {
        /** @description Allowed value: The `name` field of a `CertificateManagerCertificateMap` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Specifies the type of proxy header to append before sending data to
       *     the backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
      proxyHeader?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      sslCertificates?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeSSLCertificate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description A reference to the ComputeSSLPolicy resource that will be
       *     associated with the TargetSslProxy resource. If not set, the
       *     ComputeTargetSSLProxy resource will not have any SSL policy
       *     configured. */
      sslPolicyRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSSLPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The unique identifier for the resource. */
      proxyId?: number;
      selfLink?: string;
    };
  };
}
