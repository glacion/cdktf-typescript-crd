import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class DnsCnrmCloudGoogleComDNSPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, config: DnsCnrmCloudGoogleComDNSPolicyV1beta1Config) {
    super(scope, id, config);
  }
}
export interface DnsCnrmCloudGoogleComDNSPolicyV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "dns.cnrm.cloud.google.com/v1beta1";
    kind: "DNSPolicy";
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
    spec?: {
      /** @description Sets an alternative name server for the associated networks.
       *     When specified, all DNS queries are forwarded to a name server that you choose.
       *     Names such as .internal are not available when an alternative name server is specified. */
      alternativeNameServerConfig?: {
        /** @description Sets an alternative name server for the associated networks. When specified,
         *     all DNS queries are forwarded to a name server that you choose. Names such as .internal
         *     are not available when an alternative name server is specified. */
        targetNameServers: {
          /** @description Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
           *     decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
           *     to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]. */
          forwardingPath?: string;
          /** @description IPv4 address to forward to. */
          ipv4Address: string;
        }[];
      };
      /** @description A textual description field. Defaults to 'Managed by Config Connector'. */
      description?: string;
      /** @description Allows networks bound to this policy to receive DNS queries sent
       *     by VMs or applications over VPN connections. When enabled, a
       *     virtual IP address will be allocated from each of the sub-networks
       *     that are bound to this policy. */
      enableInboundForwarding?: boolean;
      /** @description Controls whether logging is enabled for the networks bound to this policy.
       *     Defaults to no logging if not set. */
      enableLogging?: boolean;
      /** @description List of network names specifying networks to which this policy is applied. */
      networks?: {
        /** @description VPC network to bind to. */
        networkRef: {
          /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      }[];
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
