import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeFirewallPolicyRuleV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeFirewallPolicyRuleV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeFirewallPolicyRule", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeFirewallPolicyRuleV1beta1Config extends ManifestConfig {
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
  manifest: {
    /** @description ComputeFirewallPolicyRule is the Schema for the compute API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec?: {
        /** @description The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next". */
        action: string;
        /** @description An optional description for this resource. */
        description?: string;
        /** @description The direction in which this rule applies. Possible values: INGRESS, EGRESS */
        direction: string;
        /** @description Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled. */
        disabled?: boolean;
        /** @description Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules. */
        enableLogging?: boolean;
        /** @description Immutable. */
        firewallPolicyRef: {
          /** @description A reference to an externally managed ComputeFirewallPolicy resource. Should be in the format `locations/global/firewallPolicies/{{firewallPolicyID}}`. */
          external?: string;
          /** @description The `name` field of a `ComputeFirewallPolicy` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeFirewallPolicy` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced. */
        match: {
          /** @description Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules. */
          destAddressGroups?: string[];
          /** @description Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress. */
          destFqdns?: string[];
          /** @description CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256. */
          destIPRanges?: string[];
          /** @description The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress. */
          destRegionCodes?: string[];
          /** @description Name of the Google Cloud Threat Intelligence list. */
          destThreatIntelligences?: string[];
          /** @description Pairs of IP protocols and ports that the rule should match. */
          layer4Configs: {
            /** @description The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number. */
            ipProtocol: string;
            /** @description An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``. */
            ports?: string[];
          }[];
          /** @description Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules. */
          srcAddressGroups?: string[];
          /** @description Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress. */
          srcFqdns?: string[];
          /** @description CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256. */
          srcIPRanges?: string[];
          /** @description The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress. */
          srcRegionCodes?: string[];
          /** @description Name of the Google Cloud Threat Intelligence list. */
          srcThreatIntelligences?: string[];
        };
        /**
         * Format: int64
         * @description Immutable. An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
         */
        priority: number;
        targetResources?: ({
          /** @description A reference to an externally managed Compute Network resource. Should be in the format `projects/{{projectID}}/global/networks/{{network}}`. */
          external?: string;
          /** @description The `name` field of a `ComputeNetwork` resource. */
          name?: string;
          /** @description The `namespace` field of a `ComputeNetwork` resource. */
          namespace?: string;
        } & (unknown | unknown))[];
        targetServiceAccounts?: ({
          /** @description The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
      };
      status?: {
        /** @description Conditions represent the latest available observations of the object's current state. */
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
        /** @description A unique Config Connector specifier for the resource in GCP. */
        externalRef?: string;
        /** @description Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules */
        kind?: string;
        /**
         * Format: int64
         * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        observedGeneration?: number;
        /**
         * Format: int64
         * @description Calculation of the complexity of a single firewall policy rule.
         */
        ruleTupleCount?: number;
      };
    };
  };
}
