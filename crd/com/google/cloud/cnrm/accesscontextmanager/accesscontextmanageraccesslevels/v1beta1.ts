import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAccessContextManagerAccessLevelV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesAccessContextManagerAccessLevelV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "accesscontextmanager.cnrm.cloud.google.com/v1beta1",
        kind: "AccessContextManagerAccessLevel",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesAccessContextManagerAccessLevelV1beta1Config extends ManifestConfig {
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
      /** @description The AccessContextManagerAccessPolicy this
       *     AccessContextManagerAccessLevel lives in. */
      accessPolicyRef: {
        /** @description Allowed value: string of the format `accessPolicies/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessPolicy` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A set of predefined conditions for the access level and a combining function. */
      basic?: {
        /** @description How the conditions list should be combined to determine if a request
         *     is granted this AccessLevel. If AND is used, each Condition in
         *     conditions must be satisfied for the AccessLevel to be applied. If
         *     OR is used, at least one Condition in conditions must be satisfied
         *     for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]. */
        combiningFunction?: string;
        /** @description A set of requirements for the AccessLevel to be granted. */
        conditions: {
          /** @description Device specific restrictions, all restrictions must hold for
           *     the Condition to be true. If not specified, all devices are
           *     allowed. */
          devicePolicy?: {
            /** @description A list of allowed device management levels.
             *     An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. */
            allowedDeviceManagementLevels?: string[];
            /** @description A list of allowed encryptions statuses.
             *     An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. */
            allowedEncryptionStatuses?: string[];
            /** @description A list of allowed OS versions.
             *     An empty list allows all types and all versions. */
            osConstraints?: {
              /** @description The minimum allowed OS version. If not set, any version
               *     of this OS satisfies the constraint.
               *     Format: "major.minor.patch" such as "10.5.301", "9.2.1". */
              minimumVersion?: string;
              /** @description The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. */
              osType: string;
              /** @description If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access. */
              requireVerifiedChromeOs?: boolean;
            }[];
            /** @description Whether the device needs to be approved by the customer admin. */
            requireAdminApproval?: boolean;
            /** @description Whether the device needs to be corp owned. */
            requireCorpOwned?: boolean;
            /** @description Whether or not screenlock is required for the DevicePolicy
             *     to be true. Defaults to false. */
            requireScreenLock?: boolean;
          };
          /** @description A list of CIDR block IP subnetwork specification. May be IPv4
           *     or IPv6.
           *     Note that for a CIDR IP address block, the specified IP address
           *     portion must be properly truncated (i.e. all the host bits must
           *     be zero) or the input is considered malformed. For example,
           *     "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
           *     for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
           *     is not. The originating IP of a request must be in one of the
           *     listed subnets in order for this Condition to be true.
           *     If empty, all IP addresses are allowed. */
          ipSubnetworks?: string[];
          members?: ({
            serviceAccountRef?: {
              /** @description Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            user?: string;
          } & (unknown | unknown))[];
          /** @description Whether to negate the Condition. If true, the Condition becomes
           *     a NAND over its non-empty fields, each field must be false for
           *     the Condition overall to be satisfied. Defaults to false. */
          negate?: boolean;
          /** @description The request must originate from one of the provided
           *     countries/regions.
           *     Format: A valid ISO 3166-1 alpha-2 code. */
          regions?: string[];
          requiredAccessLevels?: ({
            /** @description Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        }[];
      };
      /** @description Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
       *     See CEL spec at: https://github.com/google/cel-spec. */
      custom?: {
        /** @description Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
         *     This page details the objects and attributes that are used to the build the CEL expressions for
         *     custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec. */
        expr: {
          /** @description Description of the expression. */
          description?: string;
          /** @description Textual representation of an expression in Common Expression Language syntax. */
          expression: string;
          /** @description String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
          location?: string;
          /** @description Title for the expression, i.e. a short string describing its purpose. */
          title?: string;
        };
      };
      /** @description Description of the AccessLevel and its use. Does not affect behavior. */
      description?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Human readable title. Must be unique within the Policy. */
      title: string;
    };
  };
}
