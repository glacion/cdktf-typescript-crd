import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkSecurityServerTLSPolicyV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesNetworkSecurityServerTLSPolicyV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "networksecurity.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkSecurityServerTLSPolicy",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkSecurityServerTLSPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Optional. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allow_open and mtls_policy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. */
      allowOpen?: boolean;
      /** @description Optional. Free-text description of the resource. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Optional. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allow_open and mtls_policy are set, server allows both plain text and mTLS connections. */
      mtlsPolicy?: {
        /** @description Required. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate. */
        clientValidationCa: {
          /** @description The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
          certificateProviderInstance?: {
            /** @description Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
            pluginInstance: string;
          };
          /** @description gRPC specific configuration to access the gRPC server to obtain the CA certificate. */
          grpcEndpoint?: {
            /** @description Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with “unix:”. */
            targetUri: string;
          };
        }[];
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef?: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allow_open as a permissive mode that allows both plain text and TLS is not supported. */
      serverCertificate?: {
        /** @description The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
        certificateProviderInstance?: {
          /** @description Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
          pluginInstance: string;
        };
        /** @description gRPC specific configuration to access the gRPC server to obtain the cert and private key. */
        grpcEndpoint?: {
          /** @description Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with “unix:”. */
          targetUri: string;
        };
      };
    };
  };
}
