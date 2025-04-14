import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeFirewallV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeFirewallV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeFirewall", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeFirewallV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description The list of ALLOW rules specified by this firewall. Each rule
         *     specifies a protocol and port-range tuple that describes a permitted
         *     connection. */
        allow?: {
          /** @description An optional list of ports to which this rule applies. This field
           *     is only applicable for UDP or TCP protocol. Each entry must be
           *     either an integer or a range. If not specified, this rule
           *     applies to connections through any port.
           *
           *     Example inputs include: ["22"], ["80","443"], and
           *     ["12345-12349"]. */
          ports?: string[];
          /** @description The IP protocol to which this rule applies. The protocol type is
           *     required when creating a firewall rule. This value can either be
           *     one of the following well known protocol strings (tcp, udp,
           *     icmp, esp, ah, sctp, ipip, all), or the IP protocol number. */
          protocol: string;
        }[];
        /** @description The list of DENY rules specified by this firewall. Each rule specifies
         *     a protocol and port-range tuple that describes a denied connection. */
        deny?: {
          /** @description An optional list of ports to which this rule applies. This field
           *     is only applicable for UDP or TCP protocol. Each entry must be
           *     either an integer or a range. If not specified, this rule
           *     applies to connections through any port.
           *
           *     Example inputs include: ["22"], ["80","443"], and
           *     ["12345-12349"]. */
          ports?: string[];
          /** @description The IP protocol to which this rule applies. The protocol type is
           *     required when creating a firewall rule. This value can either be
           *     one of the following well known protocol strings (tcp, udp,
           *     icmp, esp, ah, sctp, ipip, all), or the IP protocol number. */
          protocol: string;
        }[];
        /** @description An optional description of this resource. Provide this property when
         *     you create the resource. */
        description?: string;
        /** @description If destination ranges are specified, the firewall will apply only to
         *     traffic that has destination IP address in these ranges. These ranges
         *     must be expressed in CIDR format. IPv4 or IPv6 ranges are supported. */
        destinationRanges?: string[];
        /** @description Immutable. Direction of traffic to which this firewall applies; default is
         *     INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
         *     'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]. */
        direction?: string;
        /** @description Denotes whether the firewall rule is disabled, i.e not applied to the
         *     network it is associated with. When set to true, the firewall rule is
         *     not enforced and the network behaves as if it did not exist. If this
         *     is unspecified, the firewall rule will be enabled. */
        disabled?: boolean;
        /** @description DEPRECATED. Deprecated in favor of log_config. This field denotes whether to enable logging for a particular firewall rule. If logging is enabled, logs will be exported to Stackdriver. */
        enableLogging?: boolean;
        /** @description This field denotes the logging options for a particular firewall rule.
         *     If defined, logging is enabled, and logs will be exported to Cloud Logging. */
        logConfig?: {
          /** @description This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. */
          metadata: string;
        };
        /** @description The network to attach this firewall to. */
        networkRef: {
          /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Priority for this rule. This is an integer between 0 and 65535, both
         *     inclusive. When not specified, the value assumed is 1000. Relative
         *     priorities determine precedence of conflicting rules. Lower value of
         *     priority implies higher precedence (eg, a rule with priority 0 has
         *     higher precedence than a rule with priority 1). DENY rules take
         *     precedence over ALLOW rules having equal priority. */
        priority?: number;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description If source ranges are specified, the firewall will apply only to
         *     traffic that has source IP address in these ranges. These ranges must
         *     be expressed in CIDR format. One or both of sourceRanges and
         *     sourceTags may be set. If both properties are set, the firewall will
         *     apply to traffic that has source IP address within sourceRanges OR the
         *     source IP that belongs to a tag listed in the sourceTags property. The
         *     connection does not need to match both properties for the firewall to
         *     apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
         *     'source_ranges', 'source_tags' or 'source_service_accounts' is required. */
        sourceRanges?: string[];
        sourceServiceAccounts?: ({
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description If source tags are specified, the firewall will apply only to traffic
         *     with source IP that belongs to a tag listed in source tags. Source
         *     tags cannot be used to control traffic to an instance's external IP
         *     address. Because tags are associated with an instance, not an IP
         *     address. One or both of sourceRanges and sourceTags may be set. If
         *     both properties are set, the firewall will apply to traffic that has
         *     source IP address within sourceRanges OR the source IP that belongs to
         *     a tag listed in the sourceTags property. The connection does not need
         *     to match both properties for the firewall to apply. For INGRESS traffic,
         *     one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required. */
        sourceTags?: string[];
        targetServiceAccounts?: ({
          /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description A list of instance tags indicating sets of instances located in the
         *     network that may make network connections as specified in allowed[].
         *     If no targetTags are specified, the firewall rule applies to all
         *     instances on the specified network. */
        targetTags?: string[];
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
        /** @description Creation timestamp in RFC3339 text format. */
        creationTimestamp?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        selfLink?: string;
      };
    };
  };
}
