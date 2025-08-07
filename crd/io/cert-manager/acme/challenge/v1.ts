import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class AcmeCertManagerIoChallengeV1 extends Manifest {
  constructor(scope: Construct, id: string, config: AcmeCertManagerIoChallengeV1Config) {
    super(scope, id, config);
  }
}
export interface AcmeCertManagerIoChallengeV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "acme.cert-manager.io/v1";
    kind: "Challenge";
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
    spec: {
      /** @description The URL to the ACME Authorization resource that this
       *     challenge is a part of. */
      authorizationURL: string;
      /** @description dnsName is the identifier that this challenge is for, e.g. example.com.
       *     If the requested DNSName is a 'wildcard', this field MUST be set to the
       *     non-wildcard domain, e.g. for `*.example.com`, it must be `example.com`. */
      dnsName: string;
      /** @description References a properly configured ACME-type Issuer which should
       *     be used to create this Challenge.
       *     If the Issuer does not exist, processing will be retried.
       *     If the Issuer is not an 'ACME' Issuer, an error will be returned and the
       *     Challenge will be marked as failed. */
      issuerRef: {
        /** @description Group of the resource being referred to. */
        group?: string;
        /** @description Kind of the resource being referred to. */
        kind?: string;
        /** @description Name of the resource being referred to. */
        name: string;
      };
      /** @description The ACME challenge key for this challenge
       *     For HTTP01 challenges, this is the value that must be responded with to
       *     complete the HTTP01 challenge in the format:
       *     `<private key JWK thumbprint>.<key from acme server for challenge>`.
       *     For DNS01 challenges, this is the base64 encoded SHA256 sum of the
       *     `<private key JWK thumbprint>.<key from acme server for challenge>`
       *     text that must be set as the TXT record content. */
      key: string;
      /** @description Contains the domain solving configuration that should be used to
       *     solve this challenge resource. */
      solver: {
        /** @description Configures cert-manager to attempt to complete authorizations by
         *     performing the DNS01 challenge flow. */
        dns01?: {
          /** @description Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage
           *     DNS01 challenge records. */
          acmeDNS?: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            accountSecretRef: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            host: string;
          };
          /** @description Use the Akamai DNS zone management API to manage DNS01 challenge records. */
          akamai?: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            accessTokenSecretRef: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            clientSecretSecretRef: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            clientTokenSecretRef: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            serviceConsumerDomain: string;
          };
          /** @description Use the Microsoft Azure DNS API to manage DNS01 challenge records. */
          azureDNS?: {
            /** @description Auth: Azure Service Principal:
             *     The ClientID of the Azure Service Principal used to authenticate with Azure DNS.
             *     If set, ClientSecret and TenantID must also be set. */
            clientID?: string;
            /** @description Auth: Azure Service Principal:
             *     A reference to a Secret containing the password associated with the Service Principal.
             *     If set, ClientID and TenantID must also be set. */
            clientSecretSecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description name of the Azure environment (default AzurePublicCloud) */
            environment?: string;
            /** @description name of the DNS zone that should be used */
            hostedZoneName?: string;
            /** @description Auth: Azure Workload Identity or Azure Managed Service Identity:
             *     Settings to enable Azure Workload Identity or Azure Managed Service Identity
             *     If set, ClientID, ClientSecret and TenantID must not be set. */
            managedIdentity?: {
              /** @description client ID of the managed identity, can not be used at the same time as resourceID */
              clientID?: string;
              /** @description resource ID of the managed identity, can not be used at the same time as clientID
               *     Cannot be used for Azure Managed Service Identity */
              resourceID?: string;
            };
            /** @description resource group the DNS zone is located in */
            resourceGroupName: string;
            /** @description ID of the Azure subscription */
            subscriptionID: string;
            /** @description Auth: Azure Service Principal:
             *     The TenantID of the Azure Service Principal used to authenticate with Azure DNS.
             *     If set, ClientID and ClientSecret must also be set. */
            tenantID?: string;
          };
          /** @description Use the Google Cloud DNS API to manage DNS01 challenge records. */
          cloudDNS?: {
            /** @description HostedZoneName is an optional field that tells cert-manager in which
             *     Cloud DNS zone the challenge record has to be created.
             *     If left empty cert-manager will automatically choose a zone. */
            hostedZoneName?: string;
            project: string;
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            serviceAccountSecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
          };
          /** @description Use the Cloudflare API to manage DNS01 challenge records. */
          cloudflare?: {
            /** @description API key to use to authenticate with Cloudflare.
             *     Note: using an API token to authenticate is now the recommended method
             *     as it allows greater control of permissions. */
            apiKeySecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description API token used to authenticate with Cloudflare. */
            apiTokenSecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description Email of the account, only required when using API key based authentication. */
            email?: string;
          };
          /** @description CNAMEStrategy configures how the DNS01 provider should handle CNAME
           *     records when found in DNS zones. */
          cnameStrategy?: string;
          /** @description Use the DigitalOcean DNS API to manage DNS01 challenge records. */
          digitalocean?: {
            /** @description A reference to a specific 'key' within a Secret resource.
             *     In some instances, `key` is a required field. */
            tokenSecretRef: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
          };
          /** @description Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/)
           *     to manage DNS01 challenge records. */
          rfc2136?: {
            /** @description The IP address or hostname of an authoritative DNS server supporting
             *     RFC2136 in the form host:port. If the host is an IPv6 address it must be
             *     enclosed in square brackets (e.g [2001:db8::1]) ; port is optional.
             *     This field is required. */
            nameserver: string;
            /** @description The TSIG Algorithm configured in the DNS supporting RFC2136. Used only
             *     when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined.
             *     Supported values are (case-insensitive): ``HMACMD5`` (default),
             *     ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``. */
            tsigAlgorithm?: string;
            /** @description The TSIG Key name configured in the DNS.
             *     If ``tsigSecretSecretRef`` is defined, this field is required. */
            tsigKeyName?: string;
            /** @description The name of the secret containing the TSIG value.
             *     If ``tsigKeyName`` is defined, this field is required. */
            tsigSecretSecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
          };
          /** @description Use the AWS Route53 API to manage DNS01 challenge records. */
          route53?: {
            /** @description The AccessKeyID is used for authentication.
             *     Cannot be set when SecretAccessKeyID is set.
             *     If neither the Access Key nor Key ID are set, we fall-back to using env
             *     vars, shared credentials file or AWS Instance metadata,
             *     see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials */
            accessKeyID?: string;
            /** @description The SecretAccessKey is used for authentication. If set, pull the AWS
             *     access key ID from a key within a Kubernetes Secret.
             *     Cannot be set when AccessKeyID is set.
             *     If neither the Access Key nor Key ID are set, we fall-back to using env
             *     vars, shared credentials file or AWS Instance metadata,
             *     see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials */
            accessKeyIDSecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
            /** @description Auth configures how cert-manager authenticates. */
            auth?: {
              /** @description Kubernetes authenticates with Route53 using AssumeRoleWithWebIdentity
               *     by passing a bound ServiceAccount token. */
              kubernetes: {
                /** @description A reference to a service account that will be used to request a bound
                 *     token (also known as "projected token"). To use this field, you must
                 *     configure an RBAC rule to let cert-manager request a token. */
                serviceAccountRef: {
                  /** @description TokenAudiences is an optional list of audiences to include in the
                   *     token passed to AWS. The default token consisting of the issuer's namespace
                   *     and name is always included.
                   *     If unset the audience defaults to `sts.amazonaws.com`. */
                  audiences?: string[];
                  /** @description Name of the ServiceAccount used to request a token. */
                  name: string;
                };
              };
            };
            /** @description If set, the provider will manage only this zone in Route53 and will not do a lookup using the route53:ListHostedZonesByName api call. */
            hostedZoneID?: string;
            /** @description Override the AWS region.
             *
             *     Route53 is a global service and does not have regional endpoints but the
             *     region specified here (or via environment variables) is used as a hint to
             *     help compute the correct AWS credential scope and partition when it
             *     connects to Route53. See:
             *     - [Amazon Route 53 endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/r53.html)
             *     - [Global services](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html)
             *
             *     If you omit this region field, cert-manager will use the region from
             *     AWS_REGION and AWS_DEFAULT_REGION environment variables, if they are set
             *     in the cert-manager controller Pod.
             *
             *     The `region` field is not needed if you use [IAM Roles for Service Accounts (IRSA)](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html).
             *     Instead an AWS_REGION environment variable is added to the cert-manager controller Pod by:
             *     [Amazon EKS Pod Identity Webhook](https://github.com/aws/amazon-eks-pod-identity-webhook).
             *     In this case this `region` field value is ignored.
             *
             *     The `region` field is not needed if you use [EKS Pod Identities](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html).
             *     Instead an AWS_REGION environment variable is added to the cert-manager controller Pod by:
             *     [Amazon EKS Pod Identity Agent](https://github.com/aws/eks-pod-identity-agent),
             *     In this case this `region` field value is ignored. */
            region?: string;
            /** @description Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey
             *     or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata */
            role?: string;
            /** @description The SecretAccessKey is used for authentication.
             *     If neither the Access Key nor Key ID are set, we fall-back to using env
             *     vars, shared credentials file or AWS Instance metadata,
             *     see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials */
            secretAccessKeySecretRef?: {
              /** @description The key of the entry in the Secret resource's `data` field to be used.
               *     Some instances of this field may be defaulted, in others it may be
               *     required. */
              key?: string;
              /** @description Name of the resource being referred to.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name: string;
            };
          };
          /** @description Configure an external webhook based DNS01 challenge solver to manage
           *     DNS01 challenge records. */
          webhook?: {
            /** @description Additional configuration that should be passed to the webhook apiserver
             *     when challenges are processed.
             *     This can contain arbitrary JSON data.
             *     Secret values should not be specified in this stanza.
             *     If secret values are needed (e.g. credentials for a DNS service), you
             *     should use a SecretKeySelector to reference a Secret resource.
             *     For details on the schema of this field, consult the webhook provider
             *     implementation's documentation. */
            config?: unknown;
            /** @description The API group name that should be used when POSTing ChallengePayload
             *     resources to the webhook apiserver.
             *     This should be the same as the GroupName specified in the webhook
             *     provider implementation. */
            groupName: string;
            /** @description The name of the solver to use, as defined in the webhook provider
             *     implementation.
             *     This will typically be the name of the provider, e.g. 'cloudflare'. */
            solverName: string;
          };
        };
        /** @description Configures cert-manager to attempt to complete authorizations by
         *     performing the HTTP01 challenge flow.
         *     It is not possible to obtain certificates for wildcard domain names
         *     (e.g. `*.example.com`) using the HTTP01 challenge mechanism. */
        http01?: {
          /** @description The Gateway API is a sig-network community API that models service networking
           *     in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will
           *     create HTTPRoutes with the specified labels in the same namespace as the challenge.
           *     This solver is experimental, and fields / behaviour may change in the future. */
          gatewayHTTPRoute?: {
            /** @description Custom labels that will be applied to HTTPRoutes created by cert-manager
             *     while solving HTTP-01 challenges. */
            labels?: {
              [key: string]: string;
            };
            /** @description When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute.
             *     cert-manager needs to know which parentRefs should be used when creating
             *     the HTTPRoute. Usually, the parentRef references a Gateway. See:
             *     https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways */
            parentRefs?: {
              /**
               * @description Group is the group of the referent.
               *     When unspecified, "gateway.networking.k8s.io" is inferred.
               *     To set the core API group (such as for a "Service" kind referent),
               *     Group must be explicitly set to "" (empty string).
               *
               *     Support: Core
               * @default gateway.networking.k8s.io
               */
              group: string;
              /**
               * @description Kind is kind of the referent.
               *
               *     There are two kinds of parent resources with "Core" support:
               *
               *     * Gateway (Gateway conformance profile)
               *     * Service (Mesh conformance profile, ClusterIP Services only)
               *
               *     Support for other resources is Implementation-Specific.
               * @default Gateway
               */
              kind: string;
              /** @description Name is the name of the referent.
               *
               *     Support: Core */
              name: string;
              /** @description Namespace is the namespace of the referent. When unspecified, this refers
               *     to the local namespace of the Route.
               *
               *     Note that there are specific rules for ParentRefs which cross namespace
               *     boundaries. Cross-namespace references are only valid if they are explicitly
               *     allowed by something in the namespace they are referring to. For example:
               *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
               *     generic way to enable any other kind of cross-namespace reference.
               *
               *     <gateway:experimental:description>
               *     ParentRefs from a Route to a Service in the same namespace are "producer"
               *     routes, which apply default routing rules to inbound connections from
               *     any namespace to the Service.
               *
               *     ParentRefs from a Route to a Service in a different namespace are
               *     "consumer" routes, and these routing rules are only applied to outbound
               *     connections originating from the same namespace as the Route, for which
               *     the intended destination of the connections are a Service targeted as a
               *     ParentRef of the Route.
               *     </gateway:experimental:description>
               *
               *     Support: Core */
              namespace?: string;
              /**
               * Format: int32
               * @description Port is the network port this Route targets. It can be interpreted
               *     differently based on the type of parent resource.
               *
               *     When the parent resource is a Gateway, this targets all listeners
               *     listening on the specified port that also support this kind of Route(and
               *     select this Route). It's not recommended to set `Port` unless the
               *     networking behaviors specified in a Route must apply to a specific port
               *     as opposed to a listener(s) whose port(s) may be changed. When both Port
               *     and SectionName are specified, the name and port of the selected listener
               *     must match both specified values.
               *
               *     <gateway:experimental:description>
               *     When the parent resource is a Service, this targets a specific port in the
               *     Service spec. When both Port (experimental) and SectionName are specified,
               *     the name and port of the selected port must match both specified values.
               *     </gateway:experimental:description>
               *
               *     Implementations MAY choose to support other parent resources.
               *     Implementations supporting other types of parent resources MUST clearly
               *     document how/if Port is interpreted.
               *
               *     For the purpose of status, an attachment is considered successful as
               *     long as the parent resource accepts it partially. For example, Gateway
               *     listeners can restrict which Routes can attach to them by Route kind,
               *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
               *     from the referencing Route, the Route MUST be considered successfully
               *     attached. If no Gateway listeners accept attachment from this Route,
               *     the Route MUST be considered detached from the Gateway.
               *
               *     Support: Extended
               */
              port?: number;
              /** @description SectionName is the name of a section within the target resource. In the
               *     following resources, SectionName is interpreted as the following:
               *
               *     * Gateway: Listener name. When both Port (experimental) and SectionName
               *     are specified, the name and port of the selected listener must match
               *     both specified values.
               *     * Service: Port name. When both Port (experimental) and SectionName
               *     are specified, the name and port of the selected listener must match
               *     both specified values.
               *
               *     Implementations MAY choose to support attaching Routes to other resources.
               *     If that is the case, they MUST clearly document how SectionName is
               *     interpreted.
               *
               *     When unspecified (empty string), this will reference the entire resource.
               *     For the purpose of status, an attachment is considered successful if at
               *     least one section in the parent resource accepts it. For example, Gateway
               *     listeners can restrict which Routes can attach to them by Route kind,
               *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
               *     the referencing Route, the Route MUST be considered successfully
               *     attached. If no Gateway listeners accept attachment from this Route, the
               *     Route MUST be considered detached from the Gateway.
               *
               *     Support: Core */
              sectionName?: string;
            }[];
            /** @description Optional pod template used to configure the ACME challenge solver pods
             *     used for HTTP01 challenges. */
            podTemplate?: {
              /** @description ObjectMeta overrides for the pod used to solve HTTP01 challenges.
               *     Only the 'labels' and 'annotations' fields may be set.
               *     If labels or annotations overlap with in-built values, the values here
               *     will override the in-built values. */
              metadata?: {
                /** @description Annotations that should be added to the created ACME HTTP01 solver pods. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Labels that should be added to the created ACME HTTP01 solver pods. */
                labels?: {
                  [key: string]: string;
                };
              };
              /** @description PodSpec defines overrides for the HTTP01 challenge solver pod.
               *     Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields.
               *     All other fields will be ignored. */
              spec?: {
                /** @description If specified, the pod's scheduling constraints */
                affinity?: {
                  /** @description Describes node affinity scheduling rules for the pod. */
                  nodeAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node matches the corresponding matchExpressions; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A node selector term, associated with the corresponding weight. */
                      preference: {
                        /** @description A list of node selector requirements by node's labels. */
                        matchExpressions?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                        /** @description A list of node selector requirements by node's fields. */
                        matchFields?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                      };
                      /**
                       * Format: int32
                       * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to an update), the system
                     *     may or may not try to eventually evict the pod from its node. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A list of node selector terms. The terms are ORed. */
                      nodeSelectorTerms: {
                        /** @description A list of node selector requirements by node's labels. */
                        matchExpressions?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                        /** @description A list of node selector requirements by node's fields. */
                        matchFields?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                      }[];
                    };
                  };
                  /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
                  podAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A pod affinity term, associated with the corresponding weight. */
                      podAffinityTerm: {
                        /** @description A label query over a set of resources, in this case pods.
                         *     If it's null, this PodAffinityTerm matches with no Pods. */
                        labelSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        matchLabelKeys?: string[];
                        /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        mismatchLabelKeys?: string[];
                        /** @description A label query over the set of namespaces that the term applies to.
                         *     The term is applied to the union of the namespaces selected by this field
                         *     and the ones listed in the namespaces field.
                         *     null selector and null or empty namespaces list means "this pod's namespace".
                         *     An empty selector ({}) matches all namespaces. */
                        namespaceSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description namespaces specifies a static list of namespace names that the term applies to.
                         *     The term is applied to the union of the namespaces listed in this field
                         *     and the ones selected by namespaceSelector.
                         *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                        namespaces?: string[];
                        /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         *     whose value of the label with key topologyKey matches that of any node on which any of the
                         *     selected pods is running.
                         *     Empty topologyKey is not allowed. */
                        topologyKey: string;
                      };
                      /**
                       * Format: int32
                       * @description weight associated with matching the corresponding podAffinityTerm,
                       *     in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to a pod label update), the
                     *     system may or may not try to eventually evict the pod from its node.
                     *     When there are multiple elements, the lists of nodes corresponding to each
                     *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods. */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      matchLabelKeys?: string[];
                      /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      mismatchLabelKeys?: string[];
                      /** @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces. */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                      namespaces?: string[];
                      /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed. */
                      topologyKey: string;
                    }[];
                  };
                  /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
                  podAntiAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the anti-affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling anti-affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A pod affinity term, associated with the corresponding weight. */
                      podAffinityTerm: {
                        /** @description A label query over a set of resources, in this case pods.
                         *     If it's null, this PodAffinityTerm matches with no Pods. */
                        labelSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        matchLabelKeys?: string[];
                        /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        mismatchLabelKeys?: string[];
                        /** @description A label query over the set of namespaces that the term applies to.
                         *     The term is applied to the union of the namespaces selected by this field
                         *     and the ones listed in the namespaces field.
                         *     null selector and null or empty namespaces list means "this pod's namespace".
                         *     An empty selector ({}) matches all namespaces. */
                        namespaceSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description namespaces specifies a static list of namespace names that the term applies to.
                         *     The term is applied to the union of the namespaces listed in this field
                         *     and the ones selected by namespaceSelector.
                         *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                        namespaces?: string[];
                        /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         *     whose value of the label with key topologyKey matches that of any node on which any of the
                         *     selected pods is running.
                         *     Empty topologyKey is not allowed. */
                        topologyKey: string;
                      };
                      /**
                       * Format: int32
                       * @description weight associated with matching the corresponding podAffinityTerm,
                       *     in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the anti-affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the anti-affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to a pod label update), the
                     *     system may or may not try to eventually evict the pod from its node.
                     *     When there are multiple elements, the lists of nodes corresponding to each
                     *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods. */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      matchLabelKeys?: string[];
                      /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      mismatchLabelKeys?: string[];
                      /** @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces. */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                      namespaces?: string[];
                      /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed. */
                      topologyKey: string;
                    }[];
                  };
                };
                /** @description If specified, the pod's imagePullSecrets */
                imagePullSecrets?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                }[];
                /** @description NodeSelector is a selector which must be true for the pod to fit on a node.
                 *     Selector which must match a node's labels for the pod to be scheduled on that node.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
                nodeSelector?: {
                  [key: string]: string;
                };
                /** @description If specified, the pod's priorityClassName. */
                priorityClassName?: string;
                /** @description If specified, the pod's security context */
                securityContext?: {
                  /**
                   * Format: int64
                   * @description A special supplemental group that applies to all containers in a pod.
                   *     Some volume types allow the Kubelet to change the ownership of that volume
                   *     to be owned by the pod:
                   *
                   *     1. The owning GID will be the FSGroup
                   *     2. The setgid bit is set (new files created in the volume will be owned by FSGroup)
                   *     3. The permission bits are OR'd with rw-rw----
                   *
                   *     If unset, the Kubelet will not modify the ownership and permissions of any volume.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  fsGroup?: number;
                  /** @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume
                   *     before being exposed inside Pod. This field will only apply to
                   *     volume types which support fsGroup based ownership(and permissions).
                   *     It will have no effect on ephemeral volume types such as: secret, configmaps
                   *     and emptydir.
                   *     Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  fsGroupChangePolicy?: string;
                  /**
                   * Format: int64
                   * @description The GID to run the entrypoint of the container process.
                   *     Uses runtime default if unset.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence
                   *     for that container.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  runAsGroup?: number;
                  /** @description Indicates that the container must run as a non-root user.
                   *     If true, the Kubelet will validate the image at runtime to ensure that it
                   *     does not run as UID 0 (root) and fail to start the container if it does.
                   *     If unset or false, no such validation will be performed.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                  runAsNonRoot?: boolean;
                  /**
                   * Format: int64
                   * @description The UID to run the entrypoint of the container process.
                   *     Defaults to user specified in image metadata if unspecified.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence
                   *     for that container.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  runAsUser?: number;
                  /** @description The SELinux context to be applied to all containers.
                   *     If unspecified, the container runtime will allocate a random SELinux context for each
                   *     container.  May also be set in SecurityContext.  If set in
                   *     both SecurityContext and PodSecurityContext, the value specified in SecurityContext
                   *     takes precedence for that container.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  seLinuxOptions?: {
                    /** @description Level is SELinux level label that applies to the container. */
                    level?: string;
                    /** @description Role is a SELinux role label that applies to the container. */
                    role?: string;
                    /** @description Type is a SELinux type label that applies to the container. */
                    type?: string;
                    /** @description User is a SELinux user label that applies to the container. */
                    user?: string;
                  };
                  /** @description The seccomp options to use by the containers in this pod.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  seccompProfile?: {
                    /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                     *     The profile must be preconfigured on the node to work.
                     *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                     *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                    localhostProfile?: string;
                    /** @description type indicates which kind of seccomp profile will be applied.
                     *     Valid options are:
                     *
                     *     Localhost - a profile defined in a file on the node should be used.
                     *     RuntimeDefault - the container runtime default profile should be used.
                     *     Unconfined - no profile should be applied. */
                    type: string;
                  };
                  /** @description A list of groups applied to the first process run in each container, in addition
                   *     to the container's primary GID, the fsGroup (if specified), and group memberships
                   *     defined in the container image for the uid of the container process. If unspecified,
                   *     no additional groups are added to any container. Note that group memberships
                   *     defined in the container image for the uid of the container process are still effective,
                   *     even if they are not included in this list.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  supplementalGroups?: number[];
                  /** @description Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported
                   *     sysctls (by the container runtime) might fail to launch.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  sysctls?: {
                    /** @description Name of a property to set */
                    name: string;
                    /** @description Value of a property to set */
                    value: string;
                  }[];
                };
                /** @description If specified, the pod's service account */
                serviceAccountName?: string;
                /** @description If specified, the pod's tolerations. */
                tolerations?: {
                  /** @description Effect indicates the taint effect to match. Empty means match all taint effects.
                   *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
                  effect?: string;
                  /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
                   *     If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
                  key?: string;
                  /** @description Operator represents a key's relationship to the value.
                   *     Valid operators are Exists and Equal. Defaults to Equal.
                   *     Exists is equivalent to wildcard for value, so that a pod can
                   *     tolerate all taints of a particular category. */
                  operator?: string;
                  /**
                   * Format: int64
                   * @description TolerationSeconds represents the period of time the toleration (which must be
                   *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
                   *     it is not set, which means tolerate the taint forever (do not evict). Zero and
                   *     negative values will be treated as 0 (evict immediately) by the system.
                   */
                  tolerationSeconds?: number;
                  /** @description Value is the taint value the toleration matches to.
                   *     If the operator is Exists, the value should be empty, otherwise just a regular string. */
                  value?: string;
                }[];
              };
            };
            /** @description Optional service type for Kubernetes solver service. Supported values
             *     are NodePort or ClusterIP. If unset, defaults to NodePort. */
            serviceType?: string;
          };
          /** @description The ingress based HTTP01 challenge solver will solve challenges by
           *     creating or modifying Ingress resources in order to route requests for
           *     '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are
           *     provisioned by cert-manager for each Challenge to be completed. */
          ingress?: {
            /** @description This field configures the annotation `kubernetes.io/ingress.class` when
             *     creating Ingress resources to solve ACME challenges that use this
             *     challenge solver. Only one of `class`, `name` or `ingressClassName` may
             *     be specified. */
            class?: string;
            /** @description This field configures the field `ingressClassName` on the created Ingress
             *     resources used to solve ACME challenges that use this challenge solver.
             *     This is the recommended way of configuring the ingress class. Only one of
             *     `class`, `name` or `ingressClassName` may be specified. */
            ingressClassName?: string;
            /** @description Optional ingress template used to configure the ACME challenge solver
             *     ingress used for HTTP01 challenges. */
            ingressTemplate?: {
              /** @description ObjectMeta overrides for the ingress used to solve HTTP01 challenges.
               *     Only the 'labels' and 'annotations' fields may be set.
               *     If labels or annotations overlap with in-built values, the values here
               *     will override the in-built values. */
              metadata?: {
                /** @description Annotations that should be added to the created ACME HTTP01 solver ingress. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Labels that should be added to the created ACME HTTP01 solver ingress. */
                labels?: {
                  [key: string]: string;
                };
              };
            };
            /** @description The name of the ingress resource that should have ACME challenge solving
             *     routes inserted into it in order to solve HTTP01 challenges.
             *     This is typically used in conjunction with ingress controllers like
             *     ingress-gce, which maintains a 1:1 mapping between external IPs and
             *     ingress resources. Only one of `class`, `name` or `ingressClassName` may
             *     be specified. */
            name?: string;
            /** @description Optional pod template used to configure the ACME challenge solver pods
             *     used for HTTP01 challenges. */
            podTemplate?: {
              /** @description ObjectMeta overrides for the pod used to solve HTTP01 challenges.
               *     Only the 'labels' and 'annotations' fields may be set.
               *     If labels or annotations overlap with in-built values, the values here
               *     will override the in-built values. */
              metadata?: {
                /** @description Annotations that should be added to the created ACME HTTP01 solver pods. */
                annotations?: {
                  [key: string]: string;
                };
                /** @description Labels that should be added to the created ACME HTTP01 solver pods. */
                labels?: {
                  [key: string]: string;
                };
              };
              /** @description PodSpec defines overrides for the HTTP01 challenge solver pod.
               *     Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields.
               *     All other fields will be ignored. */
              spec?: {
                /** @description If specified, the pod's scheduling constraints */
                affinity?: {
                  /** @description Describes node affinity scheduling rules for the pod. */
                  nodeAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node matches the corresponding matchExpressions; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A node selector term, associated with the corresponding weight. */
                      preference: {
                        /** @description A list of node selector requirements by node's labels. */
                        matchExpressions?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                        /** @description A list of node selector requirements by node's fields. */
                        matchFields?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                      };
                      /**
                       * Format: int32
                       * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to an update), the system
                     *     may or may not try to eventually evict the pod from its node. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A list of node selector terms. The terms are ORed. */
                      nodeSelectorTerms: {
                        /** @description A list of node selector requirements by node's labels. */
                        matchExpressions?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                        /** @description A list of node selector requirements by node's fields. */
                        matchFields?: {
                          /** @description The label key that the selector applies to. */
                          key: string;
                          /** @description Represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
                          operator: string;
                          /** @description An array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. If the operator is Gt or Lt, the values
                           *     array must have a single element, which will be interpreted as an integer.
                           *     This array is replaced during a strategic merge patch. */
                          values?: string[];
                        }[];
                      }[];
                    };
                  };
                  /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
                  podAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A pod affinity term, associated with the corresponding weight. */
                      podAffinityTerm: {
                        /** @description A label query over a set of resources, in this case pods.
                         *     If it's null, this PodAffinityTerm matches with no Pods. */
                        labelSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        matchLabelKeys?: string[];
                        /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        mismatchLabelKeys?: string[];
                        /** @description A label query over the set of namespaces that the term applies to.
                         *     The term is applied to the union of the namespaces selected by this field
                         *     and the ones listed in the namespaces field.
                         *     null selector and null or empty namespaces list means "this pod's namespace".
                         *     An empty selector ({}) matches all namespaces. */
                        namespaceSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description namespaces specifies a static list of namespace names that the term applies to.
                         *     The term is applied to the union of the namespaces listed in this field
                         *     and the ones selected by namespaceSelector.
                         *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                        namespaces?: string[];
                        /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         *     whose value of the label with key topologyKey matches that of any node on which any of the
                         *     selected pods is running.
                         *     Empty topologyKey is not allowed. */
                        topologyKey: string;
                      };
                      /**
                       * Format: int32
                       * @description weight associated with matching the corresponding podAffinityTerm,
                       *     in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to a pod label update), the
                     *     system may or may not try to eventually evict the pod from its node.
                     *     When there are multiple elements, the lists of nodes corresponding to each
                     *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods. */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      matchLabelKeys?: string[];
                      /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      mismatchLabelKeys?: string[];
                      /** @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces. */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                      namespaces?: string[];
                      /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed. */
                      topologyKey: string;
                    }[];
                  };
                  /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
                  podAntiAffinity?: {
                    /** @description The scheduler will prefer to schedule pods to nodes that satisfy
                     *     the anti-affinity expressions specified by this field, but it may choose
                     *     a node that violates one or more of the expressions. The node that is
                     *     most preferred is the one with the greatest sum of weights, i.e.
                     *     for each node that meets all of the scheduling requirements (resource
                     *     request, requiredDuringScheduling anti-affinity expressions, etc.),
                     *     compute a sum by iterating through the elements of this field and adding
                     *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                     *     node(s) with the highest sum are the most preferred. */
                    preferredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description Required. A pod affinity term, associated with the corresponding weight. */
                      podAffinityTerm: {
                        /** @description A label query over a set of resources, in this case pods.
                         *     If it's null, this PodAffinityTerm matches with no Pods. */
                        labelSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                         *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        matchLabelKeys?: string[];
                        /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                         *     be taken into consideration. The keys are used to lookup values from the
                         *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                         *     to select the group of existing pods which pods will be taken into consideration
                         *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                         *     pod labels will be ignored. The default value is empty.
                         *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                         *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                         *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                        mismatchLabelKeys?: string[];
                        /** @description A label query over the set of namespaces that the term applies to.
                         *     The term is applied to the union of the namespaces selected by this field
                         *     and the ones listed in the namespaces field.
                         *     null selector and null or empty namespaces list means "this pod's namespace".
                         *     An empty selector ({}) matches all namespaces. */
                        namespaceSelector?: {
                          /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                          matchExpressions?: {
                            /** @description key is the label key that the selector applies to. */
                            key: string;
                            /** @description operator represents a key's relationship to a set of values.
                             *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                            operator: string;
                            /** @description values is an array of string values. If the operator is In or NotIn,
                             *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                             *     the values array must be empty. This array is replaced during a strategic
                             *     merge patch. */
                            values?: string[];
                          }[];
                          /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                           *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                           *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                          matchLabels?: {
                            [key: string]: string;
                          };
                        };
                        /** @description namespaces specifies a static list of namespace names that the term applies to.
                         *     The term is applied to the union of the namespaces listed in this field
                         *     and the ones selected by namespaceSelector.
                         *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                        namespaces?: string[];
                        /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                         *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                         *     whose value of the label with key topologyKey matches that of any node on which any of the
                         *     selected pods is running.
                         *     Empty topologyKey is not allowed. */
                        topologyKey: string;
                      };
                      /**
                       * Format: int32
                       * @description weight associated with matching the corresponding podAffinityTerm,
                       *     in the range 1-100.
                       */
                      weight: number;
                    }[];
                    /** @description If the anti-affinity requirements specified by this field are not met at
                     *     scheduling time, the pod will not be scheduled onto the node.
                     *     If the anti-affinity requirements specified by this field cease to be met
                     *     at some point during pod execution (e.g. due to a pod label update), the
                     *     system may or may not try to eventually evict the pod from its node.
                     *     When there are multiple elements, the lists of nodes corresponding to each
                     *     podAffinityTerm are intersected, i.e. all terms must be satisfied. */
                    requiredDuringSchedulingIgnoredDuringExecution?: {
                      /** @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods. */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      matchLabelKeys?: string[];
                      /** @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       *     This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default). */
                      mismatchLabelKeys?: string[];
                      /** @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces. */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string;
                          /** @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                          operator: string;
                          /** @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch. */
                          values?: string[];
                        }[];
                        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                        matchLabels?: {
                          [key: string]: string;
                        };
                      };
                      /** @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
                      namespaces?: string[];
                      /** @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed. */
                      topologyKey: string;
                    }[];
                  };
                };
                /** @description If specified, the pod's imagePullSecrets */
                imagePullSecrets?: {
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string;
                }[];
                /** @description NodeSelector is a selector which must be true for the pod to fit on a node.
                 *     Selector which must match a node's labels for the pod to be scheduled on that node.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
                nodeSelector?: {
                  [key: string]: string;
                };
                /** @description If specified, the pod's priorityClassName. */
                priorityClassName?: string;
                /** @description If specified, the pod's security context */
                securityContext?: {
                  /**
                   * Format: int64
                   * @description A special supplemental group that applies to all containers in a pod.
                   *     Some volume types allow the Kubelet to change the ownership of that volume
                   *     to be owned by the pod:
                   *
                   *     1. The owning GID will be the FSGroup
                   *     2. The setgid bit is set (new files created in the volume will be owned by FSGroup)
                   *     3. The permission bits are OR'd with rw-rw----
                   *
                   *     If unset, the Kubelet will not modify the ownership and permissions of any volume.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  fsGroup?: number;
                  /** @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume
                   *     before being exposed inside Pod. This field will only apply to
                   *     volume types which support fsGroup based ownership(and permissions).
                   *     It will have no effect on ephemeral volume types such as: secret, configmaps
                   *     and emptydir.
                   *     Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  fsGroupChangePolicy?: string;
                  /**
                   * Format: int64
                   * @description The GID to run the entrypoint of the container process.
                   *     Uses runtime default if unset.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence
                   *     for that container.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  runAsGroup?: number;
                  /** @description Indicates that the container must run as a non-root user.
                   *     If true, the Kubelet will validate the image at runtime to ensure that it
                   *     does not run as UID 0 (root) and fail to start the container if it does.
                   *     If unset or false, no such validation will be performed.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence. */
                  runAsNonRoot?: boolean;
                  /**
                   * Format: int64
                   * @description The UID to run the entrypoint of the container process.
                   *     Defaults to user specified in image metadata if unspecified.
                   *     May also be set in SecurityContext.  If set in both SecurityContext and
                   *     PodSecurityContext, the value specified in SecurityContext takes precedence
                   *     for that container.
                   *     Note that this field cannot be set when spec.os.name is windows.
                   */
                  runAsUser?: number;
                  /** @description The SELinux context to be applied to all containers.
                   *     If unspecified, the container runtime will allocate a random SELinux context for each
                   *     container.  May also be set in SecurityContext.  If set in
                   *     both SecurityContext and PodSecurityContext, the value specified in SecurityContext
                   *     takes precedence for that container.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  seLinuxOptions?: {
                    /** @description Level is SELinux level label that applies to the container. */
                    level?: string;
                    /** @description Role is a SELinux role label that applies to the container. */
                    role?: string;
                    /** @description Type is a SELinux type label that applies to the container. */
                    type?: string;
                    /** @description User is a SELinux user label that applies to the container. */
                    user?: string;
                  };
                  /** @description The seccomp options to use by the containers in this pod.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  seccompProfile?: {
                    /** @description localhostProfile indicates a profile defined in a file on the node should be used.
                     *     The profile must be preconfigured on the node to work.
                     *     Must be a descending path, relative to the kubelet's configured seccomp profile location.
                     *     Must be set if type is "Localhost". Must NOT be set for any other type. */
                    localhostProfile?: string;
                    /** @description type indicates which kind of seccomp profile will be applied.
                     *     Valid options are:
                     *
                     *     Localhost - a profile defined in a file on the node should be used.
                     *     RuntimeDefault - the container runtime default profile should be used.
                     *     Unconfined - no profile should be applied. */
                    type: string;
                  };
                  /** @description A list of groups applied to the first process run in each container, in addition
                   *     to the container's primary GID, the fsGroup (if specified), and group memberships
                   *     defined in the container image for the uid of the container process. If unspecified,
                   *     no additional groups are added to any container. Note that group memberships
                   *     defined in the container image for the uid of the container process are still effective,
                   *     even if they are not included in this list.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  supplementalGroups?: number[];
                  /** @description Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported
                   *     sysctls (by the container runtime) might fail to launch.
                   *     Note that this field cannot be set when spec.os.name is windows. */
                  sysctls?: {
                    /** @description Name of a property to set */
                    name: string;
                    /** @description Value of a property to set */
                    value: string;
                  }[];
                };
                /** @description If specified, the pod's service account */
                serviceAccountName?: string;
                /** @description If specified, the pod's tolerations. */
                tolerations?: {
                  /** @description Effect indicates the taint effect to match. Empty means match all taint effects.
                   *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
                  effect?: string;
                  /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
                   *     If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
                  key?: string;
                  /** @description Operator represents a key's relationship to the value.
                   *     Valid operators are Exists and Equal. Defaults to Equal.
                   *     Exists is equivalent to wildcard for value, so that a pod can
                   *     tolerate all taints of a particular category. */
                  operator?: string;
                  /**
                   * Format: int64
                   * @description TolerationSeconds represents the period of time the toleration (which must be
                   *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
                   *     it is not set, which means tolerate the taint forever (do not evict). Zero and
                   *     negative values will be treated as 0 (evict immediately) by the system.
                   */
                  tolerationSeconds?: number;
                  /** @description Value is the taint value the toleration matches to.
                   *     If the operator is Exists, the value should be empty, otherwise just a regular string. */
                  value?: string;
                }[];
              };
            };
            /** @description Optional service type for Kubernetes solver service. Supported values
             *     are NodePort or ClusterIP. If unset, defaults to NodePort. */
            serviceType?: string;
          };
        };
        /** @description Selector selects a set of DNSNames on the Certificate resource that
         *     should be solved using this challenge solver.
         *     If not specified, the solver will be treated as the 'default' solver
         *     with the lowest priority, i.e. if any other solver has a more specific
         *     match, it will be used instead. */
        selector?: {
          /** @description List of DNSNames that this solver will be used to solve.
           *     If specified and a match is found, a dnsNames selector will take
           *     precedence over a dnsZones selector.
           *     If multiple solvers match with the same dnsNames value, the solver
           *     with the most matching labels in matchLabels will be selected.
           *     If neither has more matches, the solver defined earlier in the list
           *     will be selected. */
          dnsNames?: string[];
          /** @description List of DNSZones that this solver will be used to solve.
           *     The most specific DNS zone match specified here will take precedence
           *     over other DNS zone matches, so a solver specifying sys.example.com
           *     will be selected over one specifying example.com for the domain
           *     www.sys.example.com.
           *     If multiple solvers match with the same dnsZones value, the solver
           *     with the most matching labels in matchLabels will be selected.
           *     If neither has more matches, the solver defined earlier in the list
           *     will be selected. */
          dnsZones?: string[];
          /** @description A label selector that is used to refine the set of certificate's that
           *     this challenge solver will apply to. */
          matchLabels?: {
            [key: string]: string;
          };
        };
      };
      /** @description The ACME challenge token for this challenge.
       *     This is the raw value returned from the ACME server. */
      token: string;
      /** @description The type of ACME challenge this resource represents.
       *     One of "HTTP-01" or "DNS-01". */
      type: string;
      /** @description The URL of the ACME Challenge resource for this challenge.
       *     This can be used to lookup details about the status of this challenge. */
      url: string;
      /** @description wildcard will be true if this challenge is for a wildcard identifier,
       *     for example '*.example.com'. */
      wildcard?: boolean;
    };
    status?: {
      /** @description presented will be set to true if the challenge values for this challenge
       *     are currently 'presented'.
       *     This *does not* imply the self check is passing. Only that the values
       *     have been 'submitted' for the appropriate challenge mechanism (i.e. the
       *     DNS01 TXT record has been presented, or the HTTP01 configuration has been
       *     configured). */
      presented?: boolean;
      /** @description Used to denote whether this challenge should be processed or not.
       *     This field will only be set to true by the 'scheduling' component.
       *     It will only be set to false by the 'challenges' controller, after the
       *     challenge has reached a final state or timed out.
       *     If this field is set to false, the challenge controller will not take
       *     any more action. */
      processing?: boolean;
      /** @description Contains human readable information on why the Challenge is in the
       *     current state. */
      reason?: string;
      /** @description Contains the current 'state' of the challenge.
       *     If not set, the state of the challenge is unknown. */
      state?: string;
    };
  };
}
