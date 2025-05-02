import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesFQDNNetworkPolicyV1alpha1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesFQDNNetworkPolicyV1alpha1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesFQDNNetworkPolicyV1alpha1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "networking.gke.io/v1alpha1";
    kind?: "FQDNNetworkPolicy";
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
    /** @description Spec is the desired configuration for FQDN Network Policy. */
    spec: {
      /** @description Egress specifies a list of rules applied to the selected pods. All egress rules are enforced using an implicit deny model (like Kubernetes Network Policies) -- only packets destined for IPs resolving the matching FQDNs and ports are allowed.
       *      Egress may not be missing or empty - it must contain at least 1 entry. */
      egress: {
        /** @description Matches specifies the FQDN peers to which egress traffic is allowed. Matches may not be missing or empty - it must contain at least 1 entry. */
        matches: {
          /** @description Name specifies the literal FQDN to match. If this is specified, no other match types may be specified in the same struct. */
          name?: string;
          /** @description Pattern allows matching FQDNs using wildcard specifiers. If this is specified, no other match types may be specified in the same struct. "*" matches 0 or more DNS valid characters (except for "."), and may occur anywhere in the pattern. As a special case, the "*" character by itself acts as a wildcard, matching all domain names.
           *      Examples:
           *        - `*.google.com` matches subdomains of google.com at that level     - "www.google.com" and "mail.google.com" match, however "google.com",       "sub.subdomain.google.com", and "kubernetes.io" do not.   - `sub*.google.com` matches subdomains of google.com where the subdomain     component begins with "sub"     - "sub.google.com" and "subdomain.google.com" match, however       "www.google.com", "mail.google.com", and "google.com do not.   - `*.*.google.com` matches subdomains of google.com at that level     - "sub.subdomain.google.com" matches, however "google.com" and       "mail.google.com" do not.   - `*a*.google.com` matches subdomains of google.com that contain an "a" at     that level     - "mail.google.com", "maps.google.com", and       "subdomain.maps.google.com" match, however "google.com" and       "cloud.google.com" do not.   - `*` by itself is a wild-card that matches all domains     - "www.google.com", "kubernetes.io", and "sub.subdomain.google.com"       all match */
          pattern?: string;
        }[];
        /** @description Ports specifies the destination L4 port and protocol allowed to egress the pod. If ports is missing or empty, all ports and protocols are allowed. */
        ports?: {
          /**
           * Format: int32
           * @description Port is L4 Port. If Port is missing or empty, it matches all ports.
           */
          port?: number;
          /**
           * @description Protocol is the L4 protocol. Valid options are "TCP", "UDP", or "ALL". If Protocol is missing or empty, it defaults to allowing all protocols.
           * @enum {string}
           */
          protocol?: "TCP" | "UDP" | "ALL";
        }[];
      }[];
      /** @description PodSelector defines which workloads are selected by the Policy. An empty PodSelector selects all pods in the namespace. */
      podSelector: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /** @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
          operator: string;
          /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
    };
  };
}
