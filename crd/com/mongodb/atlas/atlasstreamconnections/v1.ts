import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasStreamConnectionV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasStreamConnectionV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasStreamConnection", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasStreamConnectionV1Config extends ManifestConfig {
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
      /** @description The configuration to be used to connect to a Atlas Cluster */
      clusterConfig?: {
        /** @description Name of the cluster configured for this connection */
        name: string;
        /** @description The name of a Built in or Custom DB Role to connect to an Atlas Cluster */
        role: {
          /** @description The name of the role to use. Can be a built in role or a custom role */
          name: string;
          /** @description Type of the DB role. Can be either BuiltIn or Custom */
          type: string;
        };
      };
      /** @description The configuration to be used to connect to a Kafka Cluster */
      kafkaConfig?: {
        /** @description User credentials required to connect to a Kafka Cluster. Includes the authentication type, as well as the parameters for that authentication mode */
        authentication: {
          /** @description Reference to the secret containing th Username and Password of the account to connect to the Kafka cluster. */
          credentials: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Style of authentication. Can be one of PLAIN, SCRAM-256, or SCRAM-512 */
          mechanism: string;
        };
        /** @description Comma separated list of server addresses */
        bootstrapServers: string;
        /** @description A map of Kafka key-value pairs for optional configuration. This is a flat object, and keys can have '.' characters */
        config?: {
          [key: string]: string;
        };
        /** @description Properties for the secure transport connection to Kafka. For SSL, this can include the trusted certificate to use */
        security: {
          /** @description A trusted, public x509 certificate for connecting to Kafka over SSL */
          certificate?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Describes the transport type. Can be either PLAINTEXT or SSL */
          protocol: string;
        };
      };
      /** @description Human-readable label that uniquely identifies the stream connection */
      name: string;
      /** @description Type of the connection. Can be either Cluster or Kafka */
      type: string;
    };
  };
}
