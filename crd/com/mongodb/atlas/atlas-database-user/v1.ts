import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasDatabaseUserV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesAtlasDatabaseUserV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesAtlasDatabaseUserV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "atlas.mongodb.com/v1";
    kind?: "AtlasDatabaseUser";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    /** @description AtlasDatabaseUserSpec defines the desired state of Database User in Atlas */
    spec?: {
      /** @description Human-readable label that indicates whether the new database
       *     user authenticates with the Amazon Web Services (AWS)
       *     Identity and Access Management (IAM) credentials associated with
       *     the user or the user's role */
      awsIamType?: string;
      /** @description Name of the secret containing Atlas API private and public keys */
      connectionSecret?: {
        /** @description Name of the resource being referred to
         *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name: string;
      };
      /** @description DatabaseName is a Database against which Atlas authenticates the user.
       *     If the user authenticates with AWS IAM, x.509, LDAP, or OIDC Workload this value should be '$external'.
       *     If the user authenticates with SCRAM-SHA or OIDC Workforce, this value should be 'admin'.
       *     Default value is 'admin'. */
      databaseName?: string;
      /** @description DeleteAfterDate is a timestamp in ISO 8601 date and time format in UTC after which Atlas deletes the user.
       *     The specified date must be in the future and within one week. */
      deleteAfterDate?: string;
      /** @description "externalProjectRef" holds the parent Atlas project ID.
       *     Mutually exclusive with the "projectRef" field */
      externalProjectRef?: {
        /** @description ID is the Atlas project ID */
        id: string;
      };
      /** @description Labels is an array containing key-value pairs that tag and categorize the database user.
       *     Each key and value has a maximum length of 255 characters. */
      labels?: {
        key: string;
        value: string;
      }[];
      /** @description Human-readable label that indicates whether the new database Username with OIDC federated authentication.
       *     To create a federated authentication group (Workforce), specify the value of IDP_GROUP in this field.
       *     To create a federated authentication user (Workload), specify the value of USER in this field. */
      oidcAuthType?: string;
      /** @description PasswordSecret is a reference to the Secret keeping the user password. */
      passwordSecretRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
      };
      /** @description "projectRef" is a reference to the parent AtlasProject resource.
       *     Mutually exclusive with the "externalProjectRef" field */
      projectRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /** @description Roles is an array of this user's roles and the databases / collections on which the roles apply. A role allows
       *     the user to perform particular actions on the specified database. */
      roles: {
        /** @description CollectionName is a collection for which the role applies. */
        collectionName?: string;
        /** @description DatabaseName is a database on which the user has the specified role. A role on the admin database can include
         *     privileges that apply to the other databases. */
        databaseName: string;
        /** @description RoleName is a name of the role. This value can either be a built-in role or a custom role. */
        roleName: string;
      }[];
      /** @description Scopes is an array of clusters and Atlas Data Lakes that this user has access to. */
      scopes?: {
        /** @description Name is a name of the cluster or Atlas Data Lake that the user has access to. */
        name: string;
        /**
         * @description Type is a type of resource that the user has access to.
         * @enum {string}
         */
        type: "CLUSTER" | "DATA_LAKE";
      }[];
      /** @description Username is a username for authenticating to MongoDB
       *     Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:
       *     In case of AWS IAM: the value should be AWS ARN for the IAM User/Role;
       *     In case of OIDC Workload or Workforce: the value should be the Atlas OIDC IdP ID, followed by a '/', followed by the IdP group name;
       *     In case of Plain text auth: the value can be anything */
      username: string;
      /** @description X509Type is X.509 method by which the database authenticates the provided username */
      x509Type?: string;
    };
    /** @description AtlasDatabaseUserStatus defines the observed state of AtlasProject */
    status?: {
      /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
      conditions: {
        /**
         * Format: date-time
         * @description Last time the condition transitioned from one status to another.
         */
        lastTransitionTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description Status of the condition, one of True, False, Unknown. */
        status: string;
        /** @description Type of Atlas Custom Resource condition. */
        type: string;
      }[];
      /** @description UserName is the current name of database user. */
      name?: string;
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
      /** @description PasswordVersion is the 'ResourceVersion' of the password Secret that the Atlas Operator is aware of */
      passwordVersion?: string;
    };
  };
}
