import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesNetworkSecurityClientTLSPolicyV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesNetworkSecurityClientTLSPolicyV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "networksecurity.cnrm.cloud.google.com/v1beta1",
        kind: "NetworkSecurityClientTLSPolicy",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesNetworkSecurityClientTLSPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS. */
      clientCertificate?: {
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
      /** @description Optional. Free-text description of the resource. */
      description?: string;
      /** @description Immutable. The location for the resource */
      location: string;
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
      /** @description Required. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. */
      serverValidationCa?: {
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
      /** @description Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". */
      sni?: string;
    };
  };
}
