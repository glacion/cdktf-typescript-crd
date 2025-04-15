import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDNSManagedZoneV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesDNSManagedZoneV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesDNSManagedZoneV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "dns.cnrm.cloud.google.com/v1beta1";
    kind: "DNSManagedZone";
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
      /** @description Cloud logging configuration. */
      cloudLoggingConfig?: {
        /** @description If set, enable query logging for this ManagedZone. False by default, making logging opt-in. */
        enableLogging: boolean;
      };
      /** @description A textual description field. Defaults to 'Managed by Config Connector'. */
      description?: string;
      /** @description Immutable. The DNS name of this managed zone, for instance "example.com.". */
      dnsName: string;
      /** @description DNSSEC configuration. */
      dnssecConfig?: {
        /** @description Specifies parameters that will be used for generating initial DnsKeys
         *     for this ManagedZone. If you provide a spec for keySigning or zoneSigning,
         *     you must also provide one for the other.
         *     default_key_specs can only be updated when the state is 'off'. */
        defaultKeySpecs?: {
          /** @description String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. */
          algorithm?: string;
          /** @description Length of the keys in bits. */
          keyLength?: number;
          /** @description Specifies whether this is a key signing key (KSK) or a zone
           *     signing key (ZSK). Key signing keys have the Secure Entry
           *     Point flag set and, when active, will only be used to sign
           *     resource record sets of type DNSKEY. Zone signing keys do
           *     not have the Secure Entry Point flag set and will be used
           *     to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]. */
          keyType?: string;
          /** @description Identifies what kind of resource this is. */
          kind?: string;
        }[];
        /** @description Identifies what kind of resource this is. */
        kind?: string;
        /** @description Specifies the mechanism used to provide authenticated denial-of-existence responses.
         *     non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]. */
        nonExistence?: string;
        /** @description Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. */
        state?: string;
      };
      /** @description The presence for this field indicates that outbound forwarding is enabled
       *     for this zone. The value of this field contains the set of destinations
       *     to forward to. */
      forwardingConfig?: {
        /** @description List of target name servers to forward to. Cloud DNS will
         *     select the best available name server if more than
         *     one target is given. */
        targetNameServers: {
          /** @description Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
           *     decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
           *     to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]. */
          forwardingPath?: string;
          /** @description IPv4 address of a target name server. */
          ipv4Address: string;
        }[];
      };
      /** @description The presence of this field indicates that DNS Peering is enabled for this
       *     zone. The value of this field contains the network to peer with. */
      peeringConfig?: {
        /** @description The network with which to peer. */
        targetNetwork: {
          /** @description VPC network to forward queries to. */
          networkRef: {
            /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
      /** @description For privately visible zones, the set of Virtual Private Cloud
       *     resources that the zone is visible from. At least one of 'gke_clusters' or 'networks' must be specified. */
      privateVisibilityConfig?: {
        /** @description The list of Google Kubernetes Engine clusters that can see this zone. */
        gkeClusters?: {
          /** @description The resource name of the cluster to bind this ManagedZone to.
           *     This should be specified in the format like
           *     'projects/*\/locations/*\/clusters/*'. */
          gkeClusterNameRef: {
            /** @description Allowed value: The `selfLink` field of a `ContainerCluster` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
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
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
       *     lookup queries using automatically configured records for VPC resources. This only applies
       *     to networks listed under 'private_visibility_config'. */
      reverseLookup?: boolean;
      /** @description Immutable. The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone. */
      serviceDirectoryConfig?: {
        /** @description The namespace associated with the zone. */
        namespace: {
          /** @description The fully qualified or partial URL of the service directory namespace that should be
           *     associated with the zone. This should be formatted like
           *     'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
           *     or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
           *     Ignored for 'public' visibility zones. */
          namespaceUrl: string;
        };
      };
      /** @description Immutable. The zone's visibility: public zones are exposed to the Internet,
       *     while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"]. */
      visibility?: string;
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
      /** @description The time that this resource was created on the server.
       *     This is in RFC3339 text format. */
      creationTime?: string;
      /** @description Unique identifier for the resource; defined by the server. */
      managedZoneId?: number;
      /** @description Delegate your managed_zone to these virtual name servers;
       *     defined by the server. */
      nameServers?: string[];
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
