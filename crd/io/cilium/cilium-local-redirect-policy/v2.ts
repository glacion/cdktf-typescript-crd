import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCiliumLocalRedirectPolicyV2Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCiliumLocalRedirectPolicyV2ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCiliumLocalRedirectPolicyV2ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "cilium.io/v2";
    kind?: "CiliumLocalRedirectPolicy";
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
    /** @description Spec is the desired behavior of the local redirect policy. */
    spec?: {
      /** @description Description can be used by the creator of the policy to describe the purpose of this policy. */
      description?: string;
      /** @description RedirectBackend specifies backend configuration to redirect traffic to. It can not be empty. */
      redirectBackend: {
        /** @description LocalEndpointSelector selects node local pod(s) where traffic is redirected to. */
        localEndpointSelector: {
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
        /** @description ToPorts is a list of L4 ports with protocol of node local pod(s) where traffic is redirected to. When multiple ports are specified, the ports must be named. */
        toPorts: {
          /** @description Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end. */
          name?: string;
          /** @description Port is an L4 port number. The string will be strictly parsed as a single uint16. */
          port: string;
          /**
           * @description Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
           * @enum {string}
           */
          protocol: "TCP" | "UDP";
        }[];
      };
      /** @description RedirectFrontend specifies frontend configuration to redirect traffic from. It can not be empty. */
      redirectFrontend: {
        /** @description AddressMatcher is a tuple {IP, port, protocol} that matches traffic to be redirected. */
        addressMatcher?: {
          /** @description IP is a destination ip address for traffic to be redirected.
           *      Example: When it is set to "169.254.169.254", traffic destined to "169.254.169.254" is redirected. */
          ip: string;
          /** @description ToPorts is a list of destination L4 ports with protocol for traffic to be redirected. When multiple ports are specified, the ports must be named.
           *      Example: When set to Port: "53" and Protocol: UDP, traffic destined to port '53' with UDP protocol is redirected. */
          toPorts: {
            /** @description Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end. */
            name?: string;
            /** @description Port is an L4 port number. The string will be strictly parsed as a single uint16. */
            port: string;
            /**
             * @description Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
             * @enum {string}
             */
            protocol: "TCP" | "UDP";
          }[];
        };
        /** @description ServiceMatcher specifies Kubernetes service and port that matches traffic to be redirected. */
        serviceMatcher?: {
          /** @description Namespace is the Kubernetes service namespace. The service namespace must match the namespace of the parent Local Redirect Policy.  For Cluster-wide Local Redirect Policy, this can be any namespace. */
          namespace: string;
          /** @description Name is the name of a destination Kubernetes service that identifies traffic to be redirected. The service type needs to be ClusterIP.
           *      Example: When this field is populated with 'serviceName:myService', all the traffic destined to the cluster IP of this service at the (specified) service port(s) will be redirected. */
          serviceName: string;
          /** @description ToPorts is a list of destination service L4 ports with protocol for traffic to be redirected. If not specified, traffic for all the service ports will be redirected. When multiple ports are specified, the ports must be named. */
          toPorts?: {
            /** @description Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end. */
            name?: string;
            /** @description Port is an L4 port number. The string will be strictly parsed as a single uint16. */
            port: string;
            /**
             * @description Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
             * @enum {string}
             */
            protocol: "TCP" | "UDP";
          }[];
        };
      } & (
        | {
            addressMatcher: unknown;
          }
        | {
            serviceMatcher: unknown;
          }
      );
      /** @description SkipRedirectFromBackend indicates whether traffic matching RedirectFrontend from RedirectBackend should skip redirection, and hence the traffic will be forwarded as-is.
       *      The default is false which means traffic matching RedirectFrontend will get redirected from all pods, including the RedirectBackend(s).
       *      Example: If RedirectFrontend is configured to "169.254.169.254:80" as the traffic that needs to be redirected to backends selected by RedirectBackend, if SkipRedirectFromBackend is set to true, traffic going to "169.254.169.254:80" from such backends will not be redirected back to the backends. Instead, the matched traffic from the backends will be forwarded to the original destination "169.254.169.254:80". */
      skipRedirectFromBackend?: boolean;
    };
    /** @description Status is the most recent status of the local redirect policy. It is a read-only field. */
    status?: {
      /** @description TODO Define status(aditi) */
      ok?: boolean;
    };
  };
}
