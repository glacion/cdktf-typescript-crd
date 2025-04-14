import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeSecurityPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeSecurityPolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeSecurityPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeSecurityPolicyV1beta1Config extends ManifestConfig {
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
      /** @description Adaptive Protection Config of this security policy. */
      adaptiveProtectionConfig?: {
        /** @description Auto Deploy Config of this security policy. */
        autoDeployConfig?: {
          /** @description Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold. */
          confidenceThreshold?: number;
          /** @description Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests. */
          expirationSec?: number;
          /** @description Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold. */
          impactedBaselineThreshold?: number;
          /** @description Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold. */
          loadThreshold?: number;
        };
        /** @description Layer 7 DDoS Defense Config of this security policy. */
        layer7DdosDefenseConfig?: {
          /** @description If set to true, enables CAAP for L7 DDoS detection. */
          enable?: boolean;
          /** @description Rule visibility. Supported values include: "STANDARD", "PREMIUM". */
          ruleVisibility?: string;
        };
      };
      /** @description Advanced Options Config of this security policy. */
      advancedOptionsConfig?: {
        /** @description Custom configuration to apply the JSON parsing. Only applicable when JSON parsing is set to STANDARD. */
        jsonCustomConfig?: {
          /** @description A list of custom Content-Type header values to apply the JSON parsing. */
          contentTypes: string[];
        };
        /** @description JSON body parsing. Supported values include: "DISABLED", "STANDARD". */
        jsonParsing?: string;
        /** @description Logging level. Supported values include: "NORMAL", "VERBOSE". */
        logLevel?: string;
        /** @description An optional list of case-insensitive request header names to use for resolving the callers client IP address. */
        userIpRequestHeaders?: string[];
      };
      /** @description An optional description of this security policy. Max size is 2048. */
      description?: string;
      /** @description reCAPTCHA configuration options to be applied for the security policy. */
      recaptchaOptionsConfig?: {
        /** @description A field to supply a reCAPTCHA site key to be used for all the rules
         *     using the redirect action with the type of GOOGLE_RECAPTCHA under
         *     the security policy. The specified site key needs to be created from
         *     the reCAPTCHA API. The user is responsible for the validity of the
         *     specified site key. If not specified, a Google-managed site key is
         *     used. */
        redirectSiteKeyRef: {
          /** @description Allowed value: The `name` field of a `RecaptchaEnterpriseKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The set of rules that belong to this policy. There must always be a default rule (rule with priority 2147483647 and match "*"). If no rules are provided when creating a security policy, a default rule with action "allow" will be added. */
      rule?: {
        /** @description Action to take when match matches the request. */
        action: string;
        /** @description An optional description of this rule. Max size is 64. */
        description?: string;
        /** @description Additional actions that are performed on headers. */
        headerAction?: {
          /** @description The list of request headers to add or overwrite if they're already present. */
          requestHeadersToAdds: {
            /** @description The name of the header to set. */
            headerName: string;
            /** @description The value to set the named header to. */
            headerValue?: string;
          }[];
        };
        /** @description A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding action is enforced. */
        match: {
          /** @description The configuration options available when specifying versioned_expr. This field must be specified if versioned_expr is specified and cannot be specified if versioned_expr is not specified. */
          config?: {
            /** @description Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior). */
            srcIpRanges: string[];
          };
          /** @description User defined CEVAL expression. A CEVAL expression is used to specify match criteria such as origin.ip, source.region_code and contents in the request header. */
          expr?: {
            /** @description Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported. */
            expression: string;
          };
          /** @description Predefined rule expression. If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config. */
          versionedExpr?: string;
        };
        /** @description Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if evaluatePreconfiguredWaf() is not used, this field will have no effect. */
        preconfiguredWafConfig?: {
          /** @description An exclusion to apply during preconfigured WAF evaluation. */
          exclusion?: {
            /** @description Request cookie whose value will be excluded from inspection during preconfigured WAF evaluation. */
            requestCookie?: {
              /** @description You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value. */
              operator: string;
              /** @description A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY. */
              value?: string;
            }[];
            /** @description Request header whose value will be excluded from inspection during preconfigured WAF evaluation. */
            requestHeader?: {
              /** @description You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value. */
              operator: string;
              /** @description A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY. */
              value?: string;
            }[];
            /** @description Request query parameter whose value will be excluded from inspection during preconfigured WAF evaluation.  Note that the parameter can be in the query string or in the POST body. */
            requestQueryParam?: {
              /** @description You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value. */
              operator: string;
              /** @description A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY. */
              value?: string;
            }[];
            /** @description Request URI from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded. */
            requestUri?: {
              /** @description You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value. */
              operator: string;
              /** @description A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY. */
              value?: string;
            }[];
            /** @description A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set. */
            targetRuleIds?: string[];
            /** @description Target WAF rule set to apply the preconfigured WAF exclusion. */
            targetRuleSet: string;
          }[];
        };
        /** @description When set to true, the action specified above is not enforced. Stackdriver logs for requests that trigger a preview action are annotated as such. */
        preview?: boolean;
        /** @description An unique positive integer indicating the priority of evaluation for a rule. Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order. */
        priority: number;
        /** @description Rate limit threshold for this security policy. Must be specified if the action is "rate_based_ban" or "throttle". Cannot be specified for any other actions. */
        rateLimitOptions?: {
          /** @description Can only be specified if the action for the rule is "rate_based_ban". If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold. */
          banDurationSec?: number;
          /** @description Can only be specified if the action for the rule is "rate_based_ban". If specified, the key will be banned for the configured 'banDurationSec' when the number of requests that exceed the 'rateLimitThreshold' also exceed this 'banThreshold'. */
          banThreshold?: {
            /** @description Number of HTTP(S) requests for calculating the threshold. */
            count: number;
            /** @description Interval over which the threshold is computed. */
            intervalSec: number;
          };
          /** @description Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. */
          conformAction: string;
          /** @description Determines the key to enforce the rateLimitThreshold on. */
          enforceOnKey?: string;
          /** @description Enforce On Key Config of this security policy. */
          enforceOnKeyConfigs?: {
            /** @description Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value. */
            enforceOnKeyName?: string;
            /** @description Determines the key to enforce the rate_limit_threshold on. */
            enforceOnKeyType?: string;
          }[];
          /** @description Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value. */
          enforceOnKeyName?: string;
          /** @description Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below. */
          exceedAction: string;
          /** @description Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. */
          exceedRedirectOptions?: {
            /** @description Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. */
            target?: string;
            /** @description Type of the redirect action. */
            type: string;
          };
          /** @description Threshold at which to begin ratelimiting. */
          rateLimitThreshold: {
            /** @description Number of HTTP(S) requests for calculating the threshold. */
            count: number;
            /** @description Interval over which the threshold is computed. */
            intervalSec: number;
          };
        };
        /** @description Parameters defining the redirect action. Cannot be specified for any other actions. */
        redirectOptions?: {
          /** @description Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. */
          target?: string;
          /** @description Type of the redirect action. Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config. */
          type: string;
        };
      }[];
      /** @description The type indicates the intended use of the security policy. CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache. */
      type?: string;
    };
  };
}
