import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesRecaptchaEnterpriseKeyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesRecaptchaEnterpriseKeyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesRecaptchaEnterpriseKeyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "recaptchaenterprise.cnrm.cloud.google.com/v1beta1";
    kind: "RecaptchaEnterpriseKey";
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
      /** @description Settings for keys that can be used by Android apps. */
      androidSettings?: {
        /** @description If set to true, it means allowed_package_names will not be enforced. */
        allowAllPackageNames?: boolean;
        /** @description Android package names of apps allowed to use the key. Example: 'com.companyname.appname' */
        allowedPackageNames?: string[];
      };
      /** @description Human-readable display name of this key. Modifiable by user. */
      displayName: string;
      /** @description Settings for keys that can be used by iOS apps. */
      iosSettings?: {
        /** @description If set to true, it means allowed_bundle_ids will not be enforced. */
        allowAllBundleIds?: boolean;
        /** @description iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname' */
        allowedBundleIds?: string[];
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. Options for user acceptance testing. */
      testingOptions?: {
        /** @description Immutable. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE */
        testingChallenge?: string;
        /**
         * Format: double
         * @description Immutable. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
         */
        testingScore?: number;
      };
      /** @description Immutable. Settings specific to keys that can be used for WAF (Web Application Firewall). */
      wafSettings?: {
        /** @description Immutable. Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS */
        wafFeature: string;
        /** @description Immutable. The WAF service that uses this key. Possible values: CA, FASTLY */
        wafService: string;
      };
      /** @description Settings for keys that can be used by websites. */
      webSettings?: {
        /** @description If set to true, it means allowed_domains will not be enforced. */
        allowAllDomains?: boolean;
        /** @description If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type. */
        allowAmpTraffic?: boolean;
        /** @description Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com' */
        allowedDomains?: string[];
        /** @description Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY */
        challengeSecurityPreference?: string;
        /** @description Immutable. Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE */
        integrationType: string;
      };
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
      /**
       * Format: date-time
       * @description The timestamp corresponding to the creation of this Key.
       */
      createTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
