import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeTargetHTTPSProxyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeTargetHTTPSProxyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeTargetHTTPSProxy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeTargetHTTPSProxyV1beta1Config extends ManifestConfig {
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
      certificateManagerCertificates?: ({
        /** @description Allowed value: string of the format `projects/{{project}}/locations/global/certificates/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerCertificate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description A reference to the CertificateMap resource uri that identifies a
       *     certificate map associated with the given target proxy. This field
       *     can only be set for global target proxies. This field is only supported
       *     for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
       *     For INTERNAL_MANAGED, use certificateManagerCertificates instead.
       *     sslCertificates and certificateMap fields cannot be defined together. */
      certificateMapRef?: {
        /** @description Allowed value: string of the format `//certificatemanager.googleapis.com/projects/{{project}}/locations/global/certificateMaps/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateMap` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. Specifies how long to keep a connection open, after completing a response,
       *     while there is no matching traffic (in seconds). If an HTTP keepalive is
       *     not specified, a default value (610 seconds) will be used. For Global
       *     external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
       *     the maximum allowed value is 1200 seconds. For Global external HTTP(S)
       *     load balancer (classic), this option is not available publicly. */
      httpKeepAliveTimeoutSec?: number;
      /** @description Location represents the geographical location of the ComputeTargetHTTPSProxy. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Immutable. This field only applies when the forwarding rule that references
       *     this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. */
      proxyBind?: boolean;
      /** @description Specifies the QUIC override policy for this resource. This determines
       *     whether the load balancer will attempt to negotiate QUIC with clients
       *     or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
       *     specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]. */
      quicOverride?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. A URL referring to a networksecurity.ServerTlsPolicy
       *     resource that describes how the proxy should authenticate inbound
       *     traffic. serverTlsPolicy only applies to a global TargetHttpsProxy
       *     attached to globalForwardingRules with the loadBalancingScheme
       *     set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED.
       *     For details which ServerTlsPolicy resources are accepted with
       *     INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED
       *     loadBalancingScheme consult ServerTlsPolicy documentation.
       *     If left blank, communications are not encrypted. */
      serverTlsPolicyRef?: {
        /** @description Allowed value: string of the format `projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{value}}`, where {{value}} is the `name` field of a `NetworkSecurityServerTLSPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      sslCertificates?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeSSLCertificate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description A reference to the ComputeSSLPolicy resource that will be
       *     associated with the ComputeTargetHTTPSProxy resource. If not set,
       *     the ComputeTargetHTTPSProxy resource will not have any SSL policy
       *     configured. */
      sslPolicyRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSSLPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A reference to the ComputeURLMap resource that defines the mapping
       *     from URL to the BackendService. */
      urlMapRef: {
        /** @description Allowed value: The `selfLink` field of a `ComputeURLMap` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
  };
}
