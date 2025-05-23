import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumClusterwideNetworkPolicyV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumClusterwideNetworkPolicyV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumClusterwideNetworkPolicyV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "cilium.io/v2";
    kind?: "CiliumClusterwideNetworkPolicy";
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
    /** @description Spec is the desired Cilium specific rule specification. */
    spec?: {
      /** @description Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment. */
      description?: string;
      /** @description Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress. */
      egress?: {
        /** @description Authentication is the required authentication type for the allowed traffic, if any. */
        authentication?: {
          /**
           * @description Mode is the required authentication mode for the allowed traffic, if any.
           * @enum {string}
           */
          mode: "disabled" | "required" | "test-always-fail";
        };
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to.
         *      Example: Any endpoint with the label "app=httpd" is allowed to initiate type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 */
        toCIDR?: string[];
        /** @description ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28. */
        toCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate.
         *      Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend". */
        toEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster`,`host`,`remote-node`,`kube-apiserver`, `init`, `health`,`unmanaged` and `all`. */
        toEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of `ToFQDN.MatchName`s are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To* rules. */
        toFQDNs?: ({
          /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
          matchName?: string;
          /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
           *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
          matchPattern?: string;
        } & (
          | {
              matchName: unknown;
            }
          | {
              matchPattern: unknown;
            }
        ))[];
        /** @description ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        toGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate. */
        toNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to.
         *      Example: Any endpoint with the label "role=frontend" is allowed to initiate connections to destination port 8080/tcp */
        toPorts?: {
          /** @description listener specifies the name of a custom Envoy listener to which this traffic should be redirected to. */
          listener?: {
            /** @description EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined. */
            envoyConfig: {
              /**
               * @description Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
               * @enum {string}
               */
              kind?: "CiliumEnvoyConfig" | "CiliumClusterwideEnvoyConfig";
              /** @description Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in. */
              name: string;
            };
            /** @description Name is the name of the listener. */
            name: string;
            /** @description Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent. */
            priority?: number;
          };
          /** @description OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint. */
          originatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
          /** @description Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced. */
          rules?: {
            /** @description DNS-specific rules. */
            dns?: ({
              /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
              matchName?: string;
              /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
               *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
              matchPattern?: string;
            } & (
              | {
                  matchName: unknown;
                }
              | {
                  matchPattern: unknown;
                }
            ))[];
            /** @description HTTP specific rules. */
            http?: {
              /** @description HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match. */
              headerMatches?: {
                /**
                 * @description Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
                 * @enum {string}
                 */
                mismatch?: "LOG" | "ADD" | "DELETE" | "REPLACE";
                /** @description Name identifies the header. */
                name: string;
                /** @description Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail. */
                secret?: {
                  /** @description Name is the name of the secret. */
                  name: string;
                  /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
                  namespace?: string;
                };
                /** @description Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case. */
                value?: string;
              }[];
              /** @description Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present. */
              headers?: string[];
              /**
               * Format: idn-hostname
               * @description Host is an extended POSIX regex matched against the host header of a request. Examples:
               *      - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo\.bar\.com will only match the host foo.bar.com
               *      If omitted or empty, the value of the host header is ignored.
               */
              host?: string;
              /** @description Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ...
               *      If omitted or empty, all methods are allowed. */
              method?: string;
              /** @description Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.
               *      If omitted or empty, all paths are all allowed. */
              path?: string;
            }[];
            /** @description Kafka-specific rules. */
            kafka?: {
              /** @description APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys
               *      If omitted or empty, and if Role is not specified, then all keys are allowed. */
              apiKey?: string;
              /** @description APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer.
               *      If omitted or empty, all versions are allowed. */
              apiVersion?: string;
              /** @description ClientID is the client identifier as provided in the request.
               *      From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client.
               *      If omitted or empty, all client identifiers are allowed. */
              clientID?: string;
              /**
               * @description Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation.
               *      The following values are supported: - "produce": Allow producing to the topics specified in the rule - "consume": Allow consuming from the topics specified in the rule
               *      This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule.
               *      If omitted or empty, and if APIKey is not specified, then all keys are allowed.
               * @enum {string}
               */
              role?: "produce" | "consume";
              /** @description Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected.
               *      This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _.
               *      Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255.
               *      If omitted or empty, all topics are allowed. */
              topic?: string;
            }[];
            /** @description Key-value pair rules. */
            l7?: {
              [key: string]: string;
            }[];
            /** @description Name of the L7 protocol for which the Key-value pair rules apply. */
            l7proto?: string;
          } & (
            | {
                http: unknown;
              }
            | {
                kafka: unknown;
              }
            | {
                dns: unknown;
              }
            | {
                l7proto: unknown;
              }
          );
          /** @description ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake. */
          serverNames?: string[];
          /** @description TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy. */
          terminatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
        }[];
        /** @description ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A". */
        toRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors.
         *      Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service */
        toServices?: {
          /** @description K8sService selects service by name and namespace pair */
          k8sService?: {
            namespace?: string;
            serviceName?: string;
          };
          /** @description K8sServiceSelector selects services by k8s labels and namespace */
          k8sServiceSelector?: {
            namespace?: string;
            /** @description ServiceSelector is a label selector for k8s services */
            selector: {
              /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** @description key is the label key that the selector applies to. */
                key: string;
                /**
                 * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 * @enum {string}
                 */
                operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
                /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };
          };
        }[];
      }[];
      /** @description EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will be denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress. */
      egressDeny?: {
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to.
         *      Example: Any endpoint with the label "app=httpd" is not allowed to initiate type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 */
        toCIDR?: string[];
        /** @description ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28. */
        toCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate.
         *      Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend". */
        toEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster`,`host`,`remote-node`,`kube-apiserver`, `init`, `health`,`unmanaged` and `all`. */
        toEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        toGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate. */
        toNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to.
         *      Example: Any endpoint with the label "role=frontend" is not allowed to initiate connections to destination port 8080/tcp */
        toPorts?: {
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
        }[];
        /** @description ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A". */
        toRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors.
         *      Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service */
        toServices?: {
          /** @description K8sService selects service by name and namespace pair */
          k8sService?: {
            namespace?: string;
            serviceName?: string;
          };
          /** @description K8sServiceSelector selects services by k8s labels and namespace */
          k8sServiceSelector?: {
            namespace?: string;
            /** @description ServiceSelector is a label selector for k8s services */
            selector: {
              /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** @description key is the label key that the selector applies to. */
                key: string;
                /**
                 * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 * @enum {string}
                 */
                operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
                /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };
          };
        }[];
      }[];
      /** @description EnableDefaultDeny determines whether this policy configures the subject endpoint(s) to have a default deny mode. If enabled, this causes all traffic not explicitly allowed by a network policy to be dropped.
       *      If not specified, the default is true for each traffic direction that has rules, and false otherwise. For example, if a policy only has Ingress or IngressDeny rules, then the default for ingress is true and egress is false.
       *      If multiple policies apply to an endpoint, that endpoint's default deny will be enabled if any policy requests it.
       *      This is useful for creating broad-based network policies that will not cause endpoints to enter default-deny mode. */
      enableDefaultDeny?: {
        /** @description Whether or not the endpoint should have a default-deny rule applied to egress traffic. */
        egress?: boolean;
        /** @description Whether or not the endpoint should have a default-deny rule applied to ingress traffic. */
        ingress?: boolean;
      };
      /** @description EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. */
      endpointSelector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /**
           * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           * @enum {string}
           */
          operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
          /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
      /** @description Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress. */
      ingress?: {
        /** @description Authentication is the required authentication type for the allowed traffic, if any. */
        authentication?: {
          /**
           * @description Mode is the required authentication mode for the allowed traffic, if any.
           * @enum {string}
           */
          mode: "disabled" | "required" | "test-always-fail";
        };
        /** @description FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1 */
        fromCIDR?: string[];
        /** @description FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12. */
        fromCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
         *      Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend". */
        fromEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host` */
        fromEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        fromGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. */
        fromNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A". */
        fromRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can only accept incoming type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can only accept incoming connections on port 80/tcp. */
        toPorts?: {
          /** @description listener specifies the name of a custom Envoy listener to which this traffic should be redirected to. */
          listener?: {
            /** @description EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined. */
            envoyConfig: {
              /**
               * @description Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
               * @enum {string}
               */
              kind?: "CiliumEnvoyConfig" | "CiliumClusterwideEnvoyConfig";
              /** @description Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in. */
              name: string;
            };
            /** @description Name is the name of the listener. */
            name: string;
            /** @description Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent. */
            priority?: number;
          };
          /** @description OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint. */
          originatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
          /** @description Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced. */
          rules?: {
            /** @description DNS-specific rules. */
            dns?: ({
              /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
              matchName?: string;
              /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
               *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
              matchPattern?: string;
            } & (
              | {
                  matchName: unknown;
                }
              | {
                  matchPattern: unknown;
                }
            ))[];
            /** @description HTTP specific rules. */
            http?: {
              /** @description HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match. */
              headerMatches?: {
                /**
                 * @description Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
                 * @enum {string}
                 */
                mismatch?: "LOG" | "ADD" | "DELETE" | "REPLACE";
                /** @description Name identifies the header. */
                name: string;
                /** @description Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail. */
                secret?: {
                  /** @description Name is the name of the secret. */
                  name: string;
                  /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
                  namespace?: string;
                };
                /** @description Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case. */
                value?: string;
              }[];
              /** @description Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present. */
              headers?: string[];
              /**
               * Format: idn-hostname
               * @description Host is an extended POSIX regex matched against the host header of a request. Examples:
               *      - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo\.bar\.com will only match the host foo.bar.com
               *      If omitted or empty, the value of the host header is ignored.
               */
              host?: string;
              /** @description Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ...
               *      If omitted or empty, all methods are allowed. */
              method?: string;
              /** @description Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.
               *      If omitted or empty, all paths are all allowed. */
              path?: string;
            }[];
            /** @description Kafka-specific rules. */
            kafka?: {
              /** @description APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys
               *      If omitted or empty, and if Role is not specified, then all keys are allowed. */
              apiKey?: string;
              /** @description APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer.
               *      If omitted or empty, all versions are allowed. */
              apiVersion?: string;
              /** @description ClientID is the client identifier as provided in the request.
               *      From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client.
               *      If omitted or empty, all client identifiers are allowed. */
              clientID?: string;
              /**
               * @description Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation.
               *      The following values are supported: - "produce": Allow producing to the topics specified in the rule - "consume": Allow consuming from the topics specified in the rule
               *      This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule.
               *      If omitted or empty, and if APIKey is not specified, then all keys are allowed.
               * @enum {string}
               */
              role?: "produce" | "consume";
              /** @description Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected.
               *      This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _.
               *      Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255.
               *      If omitted or empty, all topics are allowed. */
              topic?: string;
            }[];
            /** @description Key-value pair rules. */
            l7?: {
              [key: string]: string;
            }[];
            /** @description Name of the L7 protocol for which the Key-value pair rules apply. */
            l7proto?: string;
          } & (
            | {
                http: unknown;
              }
            | {
                kafka: unknown;
              }
            | {
                dns: unknown;
              }
            | {
                l7proto: unknown;
              }
          );
          /** @description ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake. */
          serverNames?: string[];
          /** @description TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy. */
          terminatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
        }[];
      }[];
      /** @description IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will be denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress. */
      ingressDeny?: {
        /** @description FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1 */
        fromCIDR?: string[];
        /** @description FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12. */
        fromCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
         *      Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend". */
        fromEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host` */
        fromEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        fromGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. */
        fromNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A". */
        fromRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can not accept incoming type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can not accept incoming connections on port 80/tcp. */
        toPorts?: {
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
        }[];
      }[];
      /** @description Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels. */
      labels?: {
        key: string;
        /** @description Source can be one of the above values (e.g.: LabelSourceContainer). */
        source?: string;
        value?: string;
      }[];
      /** @description NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies. */
      nodeSelector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /**
           * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           * @enum {string}
           */
          operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
          /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
    } & (
      | {
          endpointSelector: unknown;
        }
      | {
          nodeSelector: unknown;
        }
    );
    /** @description Specs is a list of desired Cilium specific rule specification. */
    specs?: ({
      /** @description Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment. */
      description?: string;
      /** @description Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress. */
      egress?: {
        /** @description Authentication is the required authentication type for the allowed traffic, if any. */
        authentication?: {
          /**
           * @description Mode is the required authentication mode for the allowed traffic, if any.
           * @enum {string}
           */
          mode: "disabled" | "required" | "test-always-fail";
        };
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to.
         *      Example: Any endpoint with the label "app=httpd" is allowed to initiate type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 */
        toCIDR?: string[];
        /** @description ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28. */
        toCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate.
         *      Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend". */
        toEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster`,`host`,`remote-node`,`kube-apiserver`, `init`, `health`,`unmanaged` and `all`. */
        toEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of `ToFQDN.MatchName`s are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To* rules. */
        toFQDNs?: ({
          /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
          matchName?: string;
          /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
           *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
          matchPattern?: string;
        } & (
          | {
              matchName: unknown;
            }
          | {
              matchPattern: unknown;
            }
        ))[];
        /** @description ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        toGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate. */
        toNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to.
         *      Example: Any endpoint with the label "role=frontend" is allowed to initiate connections to destination port 8080/tcp */
        toPorts?: {
          /** @description listener specifies the name of a custom Envoy listener to which this traffic should be redirected to. */
          listener?: {
            /** @description EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined. */
            envoyConfig: {
              /**
               * @description Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
               * @enum {string}
               */
              kind?: "CiliumEnvoyConfig" | "CiliumClusterwideEnvoyConfig";
              /** @description Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in. */
              name: string;
            };
            /** @description Name is the name of the listener. */
            name: string;
            /** @description Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent. */
            priority?: number;
          };
          /** @description OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint. */
          originatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
          /** @description Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced. */
          rules?: {
            /** @description DNS-specific rules. */
            dns?: ({
              /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
              matchName?: string;
              /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
               *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
              matchPattern?: string;
            } & (
              | {
                  matchName: unknown;
                }
              | {
                  matchPattern: unknown;
                }
            ))[];
            /** @description HTTP specific rules. */
            http?: {
              /** @description HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match. */
              headerMatches?: {
                /**
                 * @description Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
                 * @enum {string}
                 */
                mismatch?: "LOG" | "ADD" | "DELETE" | "REPLACE";
                /** @description Name identifies the header. */
                name: string;
                /** @description Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail. */
                secret?: {
                  /** @description Name is the name of the secret. */
                  name: string;
                  /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
                  namespace?: string;
                };
                /** @description Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case. */
                value?: string;
              }[];
              /** @description Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present. */
              headers?: string[];
              /**
               * Format: idn-hostname
               * @description Host is an extended POSIX regex matched against the host header of a request. Examples:
               *      - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo\.bar\.com will only match the host foo.bar.com
               *      If omitted or empty, the value of the host header is ignored.
               */
              host?: string;
              /** @description Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ...
               *      If omitted or empty, all methods are allowed. */
              method?: string;
              /** @description Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.
               *      If omitted or empty, all paths are all allowed. */
              path?: string;
            }[];
            /** @description Kafka-specific rules. */
            kafka?: {
              /** @description APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys
               *      If omitted or empty, and if Role is not specified, then all keys are allowed. */
              apiKey?: string;
              /** @description APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer.
               *      If omitted or empty, all versions are allowed. */
              apiVersion?: string;
              /** @description ClientID is the client identifier as provided in the request.
               *      From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client.
               *      If omitted or empty, all client identifiers are allowed. */
              clientID?: string;
              /**
               * @description Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation.
               *      The following values are supported: - "produce": Allow producing to the topics specified in the rule - "consume": Allow consuming from the topics specified in the rule
               *      This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule.
               *      If omitted or empty, and if APIKey is not specified, then all keys are allowed.
               * @enum {string}
               */
              role?: "produce" | "consume";
              /** @description Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected.
               *      This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _.
               *      Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255.
               *      If omitted or empty, all topics are allowed. */
              topic?: string;
            }[];
            /** @description Key-value pair rules. */
            l7?: {
              [key: string]: string;
            }[];
            /** @description Name of the L7 protocol for which the Key-value pair rules apply. */
            l7proto?: string;
          } & (
            | {
                http: unknown;
              }
            | {
                kafka: unknown;
              }
            | {
                dns: unknown;
              }
            | {
                l7proto: unknown;
              }
          );
          /** @description ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake. */
          serverNames?: string[];
          /** @description TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy. */
          terminatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
        }[];
        /** @description ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A". */
        toRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors.
         *      Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service */
        toServices?: {
          /** @description K8sService selects service by name and namespace pair */
          k8sService?: {
            namespace?: string;
            serviceName?: string;
          };
          /** @description K8sServiceSelector selects services by k8s labels and namespace */
          k8sServiceSelector?: {
            namespace?: string;
            /** @description ServiceSelector is a label selector for k8s services */
            selector: {
              /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** @description key is the label key that the selector applies to. */
                key: string;
                /**
                 * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 * @enum {string}
                 */
                operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
                /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };
          };
        }[];
      }[];
      /** @description EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will be denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress. */
      egressDeny?: {
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to.
         *      Example: Any endpoint with the label "app=httpd" is not allowed to initiate type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules.  This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 */
        toCIDR?: string[];
        /** @description ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet.
         *      Example: Any endpoint with the label "app=database-proxy" is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28. */
        toCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate.
         *      Example: Any endpoint with the label "role=frontend" can communicate with any endpoint carrying the label "role=backend". */
        toEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are `world`, `cluster`,`host`,`remote-node`,`kube-apiserver`, `init`, `health`,`unmanaged` and `all`. */
        toEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        toGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate. */
        toNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to.
         *      Example: Any endpoint with the label "role=frontend" is not allowed to initiate connections to destination port 8080/tcp */
        toPorts?: {
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
        }[];
        /** @description ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires any endpoint to which it communicates to also carry the label "team=A". */
        toRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors.
         *      Example: Any endpoint with the label "app=backend-app" is allowed to initiate connections to all cidrs backing the "external-service" service */
        toServices?: {
          /** @description K8sService selects service by name and namespace pair */
          k8sService?: {
            namespace?: string;
            serviceName?: string;
          };
          /** @description K8sServiceSelector selects services by k8s labels and namespace */
          k8sServiceSelector?: {
            namespace?: string;
            /** @description ServiceSelector is a label selector for k8s services */
            selector: {
              /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
              matchExpressions?: {
                /** @description key is the label key that the selector applies to. */
                key: string;
                /**
                 * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 * @enum {string}
                 */
                operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
                /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
                values?: string[];
              }[];
              /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
              matchLabels?: {
                [key: string]: string;
              };
            };
          };
        }[];
      }[];
      /** @description EnableDefaultDeny determines whether this policy configures the subject endpoint(s) to have a default deny mode. If enabled, this causes all traffic not explicitly allowed by a network policy to be dropped.
       *      If not specified, the default is true for each traffic direction that has rules, and false otherwise. For example, if a policy only has Ingress or IngressDeny rules, then the default for ingress is true and egress is false.
       *      If multiple policies apply to an endpoint, that endpoint's default deny will be enabled if any policy requests it.
       *      This is useful for creating broad-based network policies that will not cause endpoints to enter default-deny mode. */
      enableDefaultDeny?: {
        /** @description Whether or not the endpoint should have a default-deny rule applied to egress traffic. */
        egress?: boolean;
        /** @description Whether or not the endpoint should have a default-deny rule applied to ingress traffic. */
        ingress?: boolean;
      };
      /** @description EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. */
      endpointSelector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /**
           * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           * @enum {string}
           */
          operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
          /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
      /** @description Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress. */
      ingress?: {
        /** @description Authentication is the required authentication type for the allowed traffic, if any. */
        authentication?: {
          /**
           * @description Mode is the required authentication mode for the allowed traffic, if any.
           * @enum {string}
           */
          mode: "disabled" | "required" | "test-always-fail";
        };
        /** @description FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1 */
        fromCIDR?: string[];
        /** @description FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12. */
        fromCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
         *      Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend". */
        fromEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host` */
        fromEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        fromGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. */
        fromNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A". */
        fromRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can only accept incoming type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can only accept incoming connections on port 80/tcp. */
        toPorts?: {
          /** @description listener specifies the name of a custom Envoy listener to which this traffic should be redirected to. */
          listener?: {
            /** @description EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined. */
            envoyConfig: {
              /**
               * @description Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
               * @enum {string}
               */
              kind?: "CiliumEnvoyConfig" | "CiliumClusterwideEnvoyConfig";
              /** @description Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in. */
              name: string;
            };
            /** @description Name is the name of the listener. */
            name: string;
            /** @description Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent. */
            priority?: number;
          };
          /** @description OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint. */
          originatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
          /** @description Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced. */
          rules?: {
            /** @description DNS-specific rules. */
            dns?: ({
              /** @description MatchName matches literal DNS names. A trailing "." is automatically added when missing. */
              matchName?: string;
              /** @description MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing.
               *      Examples: `*.cilium.io` matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not `*cilium.io` matches cilium.io and all subdomains ends with "cilium.io" except those containing "." separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub" sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not */
              matchPattern?: string;
            } & (
              | {
                  matchName: unknown;
                }
              | {
                  matchPattern: unknown;
                }
            ))[];
            /** @description HTTP specific rules. */
            http?: {
              /** @description HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match. */
              headerMatches?: {
                /**
                 * @description Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
                 * @enum {string}
                 */
                mismatch?: "LOG" | "ADD" | "DELETE" | "REPLACE";
                /** @description Name identifies the header. */
                name: string;
                /** @description Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail. */
                secret?: {
                  /** @description Name is the name of the secret. */
                  name: string;
                  /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
                  namespace?: string;
                };
                /** @description Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case. */
                value?: string;
              }[];
              /** @description Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present. */
              headers?: string[];
              /**
               * Format: idn-hostname
               * @description Host is an extended POSIX regex matched against the host header of a request. Examples:
               *      - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo\.bar\.com will only match the host foo.bar.com
               *      If omitted or empty, the value of the host header is ignored.
               */
              host?: string;
              /** @description Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ...
               *      If omitted or empty, all methods are allowed. */
              method?: string;
              /** @description Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.
               *      If omitted or empty, all paths are all allowed. */
              path?: string;
            }[];
            /** @description Kafka-specific rules. */
            kafka?: {
              /** @description APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys
               *      If omitted or empty, and if Role is not specified, then all keys are allowed. */
              apiKey?: string;
              /** @description APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer.
               *      If omitted or empty, all versions are allowed. */
              apiVersion?: string;
              /** @description ClientID is the client identifier as provided in the request.
               *      From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client.
               *      If omitted or empty, all client identifiers are allowed. */
              clientID?: string;
              /**
               * @description Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as "produce" or "consume". A Role automatically expands into all APIKeys required to perform the specified higher-level operation.
               *      The following values are supported: - "produce": Allow producing to the topics specified in the rule - "consume": Allow consuming from the topics specified in the rule
               *      This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule.
               *      If omitted or empty, and if APIKey is not specified, then all keys are allowed.
               * @enum {string}
               */
              role?: "produce" | "consume";
              /** @description Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected.
               *      This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _.
               *      Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255.
               *      If omitted or empty, all topics are allowed. */
              topic?: string;
            }[];
            /** @description Key-value pair rules. */
            l7?: {
              [key: string]: string;
            }[];
            /** @description Name of the L7 protocol for which the Key-value pair rules apply. */
            l7proto?: string;
          } & (
            | {
                http: unknown;
              }
            | {
                kafka: unknown;
              }
            | {
                dns: unknown;
              }
            | {
                l7proto: unknown;
              }
          );
          /** @description ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake. */
          serverNames?: string[];
          /** @description TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy. */
          terminatingTLS?: {
            /** @description Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist. */
            certificate?: string;
            /** @description PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist. */
            privateKey?: string;
            /** @description Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt'  - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate. */
            secret: {
              /** @description Name is the name of the secret. */
              name: string;
              /** @description Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default"). */
              namespace?: string;
            };
            /** @description TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist. */
            trustedCA?: string;
          };
        }[];
      }[];
      /** @description IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will be denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress. */
      ingressDeny?: {
        /** @description FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field.  This will match on the source IP address of incoming connections. Adding  a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is  equivalent.  Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.3.9.1 */
        fromCIDR?: string[];
        /** @description FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet.
         *      Example: Any endpoint with the label "app=my-legacy-pet" is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12. */
        fromCIDRSet?: ({
          /**
           * Format: cidr
           * @description CIDR is a CIDR prefix / IP Block.
           */
          cidr?: string;
          /** @description CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from. */
          cidrGroupRef?: string;
          /** @description ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules. */
          except?: string[];
        } & (
          | {
              cidr: unknown;
            }
          | {
              cidrGroupRef: unknown;
            }
        ))[];
        /** @description FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
         *      Example: Any endpoint with the label "role=backend" can be consumed by any endpoint carrying the label "role=frontend". */
        fromEndpoints?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are `world`, `cluster` and `host` */
        fromEntities?: (
          | "all"
          | "world"
          | "cluster"
          | "host"
          | "init"
          | "ingress"
          | "unmanaged"
          | "remote-node"
          | "health"
          | "none"
          | "kube-apiserver"
        )[];
        /** @description FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives:
         *      Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX' */
        fromGroups?: {
          /** @description AWSGroup is an structure that can be used to whitelisting information from AWS integration */
          aws?: {
            labels?: {
              [key: string]: string;
            };
            region?: string;
            securityGroupsIds?: string[];
            securityGroupsNames?: string[];
          };
        }[];
        /** @description FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. */
        fromNodes?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints.
         *      Example: Any Endpoint with the label "team=A" requires consuming endpoint to also carry the label "team=A". */
        fromRequires?: {
          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
          matchExpressions?: {
            /** @description key is the label key that the selector applies to. */
            key: string;
            /**
             * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             * @enum {string}
             */
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
            values?: string[];
          }[];
          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
          matchLabels?: {
            [key: string]: string;
          };
        }[];
        /** @description ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can not accept incoming type 8 ICMP connections. */
        icmps?: {
          /** @description Fields is a list of ICMP fields. */
          fields?: {
            /**
             * @description Family is a IP address version. Currently, we support `IPv4` and `IPv6`. `IPv4` is set as default.
             * @default IPv4
             * @enum {string}
             */
            family: "IPv4" | "IPv6";
            /** @description Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, "EchoReply"). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply */
            type: number | string;
          }[];
        }[];
        /** @description ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on.
         *      Example: Any endpoint with the label "app=httpd" can not accept incoming connections on port 80/tcp. */
        toPorts?: {
          /** @description Ports is a list of L4 port/protocol */
          ports?: {
            /**
             * Format: int32
             * @description EndPort can only be an L4 port number.
             */
            endPort?: number;
            /** @description Port can be an L4 port number, or a name in the form of "http" or "http-8080". */
            port: string;
            /**
             * @description Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: "TCP", "UDP", "SCTP", "ANY"
             *      Matching on ICMP is not supported.
             *      Named port specified for a container may narrow this down, but may not contradict this.
             * @enum {string}
             */
            protocol?: "TCP" | "UDP" | "SCTP" | "ANY";
          }[];
        }[];
      }[];
      /** @description Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels. */
      labels?: {
        key: string;
        /** @description Source can be one of the above values (e.g.: LabelSourceContainer). */
        source?: string;
        value?: string;
      }[];
      /** @description NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies. */
      nodeSelector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /**
           * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           * @enum {string}
           */
          operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
          /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
    } & (
      | {
          endpointSelector: unknown;
        }
      | {
          nodeSelector: unknown;
        }
    ))[];
    /** @description Status is the status of the Cilium policy rule.
     *      The reason this field exists in this structure is due a bug in the k8s code-generator that doesn't create a `UpdateStatus` method because the field does not exist in the structure. */
    status?: {
      conditions?: {
        /**
         * Format: date-time
         * @description The last time the condition transitioned from one status to another.
         */
        lastTransitionTime?: string;
        /** @description A human readable message indicating details about the transition. */
        message?: string;
        /** @description The reason for the condition's last transition. */
        reason?: string;
        /** @description The status of the condition, one of True, False, or Unknown */
        status: string;
        /** @description The type of the policy condition */
        type: string;
      }[];
      /** @description DerivativePolicies is the status of all policies derived from the Cilium policy */
      derivativePolicies?: {
        [key: string]: {
          /** @description Annotations corresponds to the Annotations in the ObjectMeta of the CNP that have been realized on the node for CNP. That is, if a CNP has been imported and has been assigned annotation X=Y by the user, Annotations in CiliumNetworkPolicyNodeStatus will be X=Y once the CNP that was imported corresponding to Annotation X=Y has been realized on the node. */
          annotations?: {
            [key: string]: string;
          };
          /** @description Enforcing is set to true once all endpoints present at the time the policy has been imported are enforcing this policy. */
          enforcing?: boolean;
          /** @description Error describes any error that occurred when parsing or importing the policy, or realizing the policy for the endpoints to which it applies on the node. */
          error?: string;
          /**
           * Format: date-time
           * @description LastUpdated contains the last time this status was updated
           */
          lastUpdated?: string;
          /**
           * Format: int64
           * @description Revision is the policy revision of the repository which first implemented this policy.
           */
          localPolicyRevision?: number;
          /** @description OK is true when the policy has been parsed and imported successfully into the in-memory policy repository on the node. */
          ok?: boolean;
        };
      };
    };
  };
}
