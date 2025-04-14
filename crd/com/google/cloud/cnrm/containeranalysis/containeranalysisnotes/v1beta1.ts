import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesContainerAnalysisNoteV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesContainerAnalysisNoteV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "containeranalysis.cnrm.cloud.google.com/v1beta1",
        kind: "ContainerAnalysisNote",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesContainerAnalysisNoteV1beta1Config extends ManifestConfig {
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
      /** @description A note describing an attestation role. */
      attestation?: {
        /** @description Hint hints at the purpose of the attestation authority. */
        hint?: {
          /** @description Required. The human readable name of this attestation authority, for example "qa". */
          humanReadableName: string;
        };
      };
      /** @description A note describing build provenance for a verifiable build. */
      build?: {
        /** @description Required. Immutable. Version of the builder which produced this build. */
        builderVersion: string;
      };
      /** @description A note describing something that can be deployed. */
      deployment?: {
        /** @description Required. Resource URI for the artifact being deployed. */
        resourceUri: string[];
      };
      /** @description A note describing the initial analysis of a resource. */
      discovery?: {
        /** @description The kind of analysis that is handled by this discovery. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE */
        analysisKind: string;
      };
      /**
       * Format: date-time
       * @description Time of expiration for this note. Empty if note does not expire.
       */
      expirationTime?: string;
      /** @description A note describing a base image. */
      image?: {
        /** @description Required. Immutable. The fingerprint of the base image. */
        fingerprint: {
          /** @description Required. The layer ID of the final layer in the Docker image's v1 representation. */
          v1Name: string;
          /** @description Required. The ordered list of v2 blobs that represent a given image. */
          v2Blob: string[];
        };
        /** @description Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
        resourceUrl: string;
      };
      /** @description A detailed description of this note. */
      longDescription?: string;
      /** @description Required for non-Windows OS. The package this Upgrade is for. */
      package?: {
        /** @description The various channels by which a package is distributed. */
        distribution?: {
          /** @description The CPU architecture for which packages in this distribution channel were built Possible values: ARCHITECTURE_UNSPECIFIED, X86, X64 */
          architecture?: string;
          /** @description The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
          cpeUri: string;
          /** @description The distribution channel-specific description of this package. */
          description?: string;
          /** @description The latest available version of this package in this distribution channel. */
          latestVersion?: {
            /**
             * Format: int64
             * @description Used to correct mistakes in the version numbering scheme.
             */
            epoch?: number;
            /** @description Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
            fullName?: string;
            /** @description Distinguish between sentinel MIN/MAX versions and normal versions. If kind is not NORMAL, then the other fields are ignored. Possible values: VERSION_KIND_UNSPECIFIED, NORMAL, MINIMUM, MAXIMUM */
            kind: string;
            /** @description The main part of the version name. */
            name?: string;
            /** @description The iteration of the package build from the above version. */
            revision?: string;
          };
          /** @description A freeform string denoting the maintainer of this package. */
          maintainer?: string;
          /** @description The distribution channel-specific homepage for this package. */
          url?: string;
        }[];
        /** @description The name of the package. */
        name: string;
      };
      relatedNoteNames?: ({
        /** @description Allowed value: The Google Cloud resource name of a `ContainerAnalysisNote` resource (format: `projects/{{project}}/notes/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description URLs associated with this note. */
      relatedUrl?: {
        /** @description Label to describe usage of the URL */
        label?: string;
        /** @description Specific URL to associate with the note */
        url?: string;
      }[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description A one sentence description of this note. */
      shortDescription?: string;
      /** @description A note describing a package vulnerability. */
      vulnerability?: {
        /**
         * Format: double
         * @description The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
         */
        cvssScore?: number;
        /** @description The full description of the CVSSv3 for this vulnerability. */
        cvssV3?: {
          /** @description  Possible values: ATTACK_COMPLEXITY_UNSPECIFIED, ATTACK_COMPLEXITY_LOW, ATTACK_COMPLEXITY_HIGH */
          attackComplexity?: string;
          /** @description Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Possible values: ATTACK_VECTOR_UNSPECIFIED, ATTACK_VECTOR_NETWORK, ATTACK_VECTOR_ADJACENT, ATTACK_VECTOR_LOCAL, ATTACK_VECTOR_PHYSICAL */
          attackVector?: string;
          /** @description  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE */
          availabilityImpact?: string;
          /**
           * Format: double
           * @description The base score is a function of the base metric scores.
           */
          baseScore?: number;
          /** @description  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE */
          confidentialityImpact?: string;
          /** Format: double */
          exploitabilityScore?: number;
          /** Format: double */
          impactScore?: number;
          /** @description  Possible values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE */
          integrityImpact?: string;
          /** @description  Possible values: PRIVILEGES_REQUIRED_UNSPECIFIED, PRIVILEGES_REQUIRED_NONE, PRIVILEGES_REQUIRED_LOW, PRIVILEGES_REQUIRED_HIGH */
          privilegesRequired?: string;
          /** @description  Possible values: SCOPE_UNSPECIFIED, SCOPE_UNCHANGED, SCOPE_CHANGED */
          scope?: string;
          /** @description  Possible values: USER_INTERACTION_UNSPECIFIED, USER_INTERACTION_NONE, USER_INTERACTION_REQUIRED */
          userInteraction?: string;
        };
        /** @description Details of all known distros and packages affected by this vulnerability. */
        details?: {
          /** @description Required. The (https://cpe.mitre.org/specification/) this vulnerability affects. */
          affectedCpeUri: string;
          /** @description Required. The package this vulnerability affects. */
          affectedPackage: string;
          /** @description The version number at the end of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: ) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail. */
          affectedVersionEnd?: {
            /**
             * Format: int64
             * @description Used to correct mistakes in the version numbering scheme.
             */
            epoch?: number;
            /** @description Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
            fullName?: string;
            /** @description Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE */
            kind: string;
            /** @description Required only when version kind is NORMAL. The main part of the version name. */
            name?: string;
            /** @description The iteration of the package build from the above version. */
            revision?: string;
          };
          /** @description The version number at the start of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: ) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail. */
          affectedVersionStart?: {
            /**
             * Format: int64
             * @description Used to correct mistakes in the version numbering scheme.
             */
            epoch?: number;
            /** @description Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
            fullName?: string;
            /** @description Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE */
            kind: string;
            /** @description Required only when version kind is NORMAL. The main part of the version name. */
            name?: string;
            /** @description The iteration of the package build from the above version. */
            revision?: string;
          };
          /** @description A vendor-specific description of this vulnerability. */
          description?: string;
          /** @description The distro recommended (https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri. */
          fixedCpeUri?: string;
          /** @description The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package. */
          fixedPackage?: string;
          /** @description The distro recommended version to update to that contains a fix for this vulnerability. Setting this to VersionKind.MAXIMUM means no such version is yet available. */
          fixedVersion?: {
            /**
             * Format: int64
             * @description Used to correct mistakes in the version numbering scheme.
             */
            epoch?: number;
            /** @description Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
            fullName?: string;
            /** @description Required. Distinguishes between sentinel MIN/MAX versions and normal versions. Possible values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE */
            kind: string;
            /** @description Required only when version kind is NORMAL. The main part of the version name. */
            name?: string;
            /** @description The iteration of the package build from the above version. */
            revision?: string;
          };
          /** @description Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
          isObsolete?: boolean;
          /** @description The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
          packageType?: string;
          /** @description The distro assigned severity of this vulnerability. */
          severityName?: string;
          /**
           * Format: date-time
           * @description The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
           */
          sourceUpdateTime?: string;
        }[];
        /** @description The note provider assigned severity of this vulnerability. Possible values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL */
        severity?: string;
        /**
         * Format: date-time
         * @description The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
         */
        sourceUpdateTime?: string;
        /** @description Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version. */
        windowsDetails?: {
          /** @description Required. The (https://cpe.mitre.org/specification/) this vulnerability affects. */
          cpeUri: string;
          /** @description The description of this vulnerability. */
          description?: string;
          /** @description Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix. */
          fixingKbs: {
            /** @description The KB name (generally of the form KB+ (e.g., KB123456)). */
            name?: string;
            /** @description A link to the KB in the (https://www.catalog.update.microsoft.com/). */
            url?: string;
          }[];
          /** @description Required. The name of this vulnerability. */
          name: string;
        }[];
      };
    };
  };
}
