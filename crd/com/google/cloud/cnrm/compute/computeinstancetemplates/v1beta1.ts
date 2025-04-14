import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeInstanceTemplateV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeInstanceTemplateV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeInstanceTemplate", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeInstanceTemplateV1beta1Config extends ManifestConfig {
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
        /** @description Immutable. Controls for advanced machine-related behavior features. */
        advancedMachineFeatures?: {
          /** @description Immutable. Whether to enable nested virtualization or not. */
          enableNestedVirtualization?: boolean;
          /** @description Immutable. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
          threadsPerCore?: number;
          /** @description Immutable. The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width. */
          visibleCoreCount?: number;
        };
        /** @description Immutable. Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. */
        canIpForward?: boolean;
        /** @description Immutable. The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail to create. */
        confidentialInstanceConfig?: {
          /** @description Immutable. Defines whether the instance should have confidential compute enabled. */
          enableConfidentialCompute: boolean;
        };
        /** @description Immutable. A brief description of this resource. */
        description?: string;
        /** @description Immutable. Disks to attach to instances created from this template. This can be specified multiple times for multiple disks. */
        disk: {
          /** @description Immutable. Whether or not the disk should be auto-deleted. This defaults to true. */
          autoDelete?: boolean;
          /** @description Immutable. Indicates that this is a boot disk. */
          boot?: boolean;
          /** @description Immutable. A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk. */
          deviceName?: string;
          /** @description Immutable. Encrypts or decrypts a disk using a customer-supplied encryption key. */
          diskEncryptionKey?: {
            kmsKeyRef: {
              /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Immutable. Name of the disk. When not provided, this defaults to the name of the instance. */
          diskName?: string;
          /** @description Immutable. The size of the image in gigabytes. If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB. */
          diskSizeGb?: number;
          /** @description Immutable. The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". */
          diskType?: string;
          /** @description Immutable. Specifies the disk interface to use for attaching this disk. */
          interface?: string;
          /** @description Immutable. A set of key/value label pairs to assign to disks,. */
          labels?: {
            [key: string]: string;
          };
          /** @description Immutable. The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If you are attaching or creating a boot disk, this must read-write mode. */
          mode?: string;
          /** @description Immutable. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk). */
          provisionedIops?: number;
          resourcePolicies?: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          sourceDiskRef?: {
            /** @description Allowed value: The `name` field of a `ComputeDisk` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The customer-supplied encryption key of the source
           *     image. Required if the source image is protected by a
           *     customer-supplied encryption key.
           *
           *     Instance templates do not store customer-supplied
           *     encryption keys, so you cannot create disks for
           *     instances in a managed instance group if the source
           *     images are encrypted with your own keys. */
          sourceImageEncryptionKey?: {
            /** @description The self link of the encryption key that is stored in Google Cloud
             *     KMS. */
            kmsKeySelfLinkRef: {
              /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description The service account being used for the encryption request for the
             *     given KMS key. If absent, the Compute Engine default service account
             *     is used. */
            kmsKeyServiceAccountRef?: {
              /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          sourceImageRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeImage` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The customer-supplied encryption key of the source snapshot. */
          sourceSnapshotEncryptionKey?: {
            /** @description The self link of the encryption key that is stored in Google Cloud
             *     KMS. */
            kmsKeySelfLinkRef: {
              /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description The service account being used for the encryption request for the
             *     given KMS key. If absent, the Compute Engine default service account
             *     is used. */
            kmsKeyServiceAccountRef?: {
              /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description The source snapshot to create this disk. When creating a new
           *     instance, one of initializeParams.sourceSnapshot,
           *     initializeParams.sourceImage, or disks.source is required except for
           *     local SSD. */
          sourceSnapshotRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeSnapshot` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". */
          type?: string;
        }[];
        /** @description Immutable. Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. */
        enableDisplay?: boolean;
        /** @description Immutable. List of the type and count of accelerator cards attached to the instance. */
        guestAccelerator?: {
          /** @description Immutable. The number of the guest accelerator cards exposed to this instance. */
          count: number;
          /** @description Immutable. The accelerator type resource to expose to this instance. E.g. nvidia-tesla-t4. */
          type: string;
        }[];
        /** @description Immutable. A description of the instance. */
        instanceDescription?: string;
        /** @description Immutable. The machine type to create. To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM. */
        machineType: string;
        metadata?: {
          key: string;
          value: string;
        }[];
        /** @description Immutable. An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously. */
        metadataStartupScript?: string;
        /** @description Immutable. Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake. */
        minCpuPlatform?: string;
        /** @description Immutable. Creates a unique name beginning with the specified prefix. Conflicts with name. */
        namePrefix?: string;
        /** @description Immutable. Networks to attach to instances created from this template. This can be specified multiple times for multiple networks. */
        networkInterface?: {
          accessConfig?: {
            natIpRef?: {
              /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. The networking tier used for configuring this instance template. This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM. */
            networkTier?: string;
            /** @description The DNS domain name for the public PTR record.The DNS domain name for the public PTR record. */
            publicPtrDomainName?: string;
          }[];
          /** @description Immutable. An array of alias IP ranges for this network interface. Can only be specified for network interfaces on subnet-mode networks. */
          aliasIpRange?: {
            /** @description Immutable. The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error. */
            ipCidrRange: string;
            /** @description Immutable. The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left unspecified, the primary range of the subnetwork will be used. */
            subnetworkRangeName?: string;
          }[];
          /** @description The prefix length of the primary internal IPv6 range. */
          internalIpv6PrefixLength?: number;
          /** @description An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access. */
          ipv6AccessConfig?: {
            /** @description The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. The field is output only, an IPv6 address from a subnetwork associated with the instance will be allocated dynamically. */
            externalIpv6?: string;
            /** @description The prefix length of the external IPv6 range. */
            externalIpv6PrefixLength?: string;
            /** @description The name of this access configuration. */
            name?: string;
            /** @description The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6. */
            networkTier: string;
            /** @description The domain name to be used when creating DNSv6 records for the external IPv6 ranges. */
            publicPtrDomainName?: string;
          }[];
          /** @description One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork. */
          ipv6AccessType?: string;
          /** @description An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork. */
          ipv6Address?: string;
          /** @description The name of the network_interface. */
          name?: string;
          /** @description Immutable. The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. */
          networkAttachment?: string;
          /** @description Immutable. The private IP address to assign to the instance. If empty, the address will be automatically assigned. */
          networkIp?: string;
          networkRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET. */
          nicType?: string;
          /** @description Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified. */
          queueCount?: number;
          /** @description The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used. */
          stackType?: string;
          /** @description Immutable. The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used. */
          subnetworkProject?: string;
          subnetworkRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        }[];
        /** @description Immutable. Configures network performance settings for the instance. If not specified, the instance will be created with its default network performance configuration. */
        networkPerformanceConfig?: {
          /** @description Immutable. The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. */
          totalEgressBandwidthTier: string;
        };
        /** @description Immutable. An instance template is a global resource that is not bound to a zone or a region. However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given. */
        region?: string;
        /** @description Immutable. Specifies the reservations that this instance can consume from. */
        reservationAffinity?: {
          /** @description Immutable. Specifies the label selector for the reservation to use. */
          specificReservation?: {
            /** @description Immutable. Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value. */
            key: string;
            /** @description Immutable. Corresponds to the label values of a reservation resource. */
            values: string[];
          };
          /** @description Immutable. The type of reservation from which this instance can consume resources. */
          type: string;
        };
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        resourcePolicies?: ({
          /** @description Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
        /** @description Immutable. The scheduling strategy to use. */
        scheduling?: {
          /** @description Immutable. Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). This defaults to true. */
          automaticRestart?: boolean;
          /** @description Immutable. Specifies the action GCE should take when SPOT VM is preempted. */
          instanceTerminationAction?: string;
          /** @description Specifies the maximum amount of time a Local Ssd Vm should wait while
           *       recovery of the Local Ssd state is attempted. Its value should be in
           *       between 0 and 168 hours with hour granularity and the default value being 1
           *       hour. */
          localSsdRecoveryTimeout?: {
            /** @description Immutable. Span of time that's a fraction of a second at nanosecond
             *     resolution. Durations less than one second are represented
             *     with a 0 seconds field and a positive nanos field. Must
             *     be from 0 to 999,999,999 inclusive. */
            nanos?: number;
            /** @description Immutable. Span of time at a resolution of a second.
             *     Must be from 0 to 315,576,000,000 inclusive. */
            seconds: number;
          }[];
          /** @description Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. */
          maintenanceInterval?: string;
          /** @description Immutable. The timeout for new network connections to hosts. */
          maxRunDuration?: {
            /** @description Immutable. Span of time that's a fraction of a second at nanosecond
             *     resolution. Durations less than one second are represented
             *     with a 0 seconds field and a positive nanos field. Must
             *     be from 0 to 999,999,999 inclusive. */
            nanos?: number;
            /** @description Immutable. Span of time at a resolution of a second.
             *     Must be from 0 to 315,576,000,000 inclusive. */
            seconds: number;
          };
          /** @description Minimum number of cpus for the instance. */
          minNodeCpus?: number;
          nodeAffinities?: {
            value?: Record<string, never>;
          }[];
          /** @description Immutable. Defines the maintenance behavior for this instance. */
          onHostMaintenance?: string;
          /** @description Immutable. Allows instance to be preempted. This defaults to false. */
          preemptible?: boolean;
          /** @description Immutable. Whether the instance is spot. If this is set as SPOT. */
          provisioningModel?: string;
        };
        /** @description Immutable. Service account to attach to the instance. */
        serviceAccount?: {
          /** @description Immutable. A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope. */
          scopes: string[];
          serviceAccountRef?: {
            /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
        /** @description Immutable. Enable Shielded VM on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits. Defaults to disabled. Note: shielded_instance_config can only be used with boot images with shielded vm support. */
        shieldedInstanceConfig?: {
          /** @description Immutable. Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true. */
          enableIntegrityMonitoring?: boolean;
          /** @description Immutable. Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false. */
          enableSecureBoot?: boolean;
          /** @description Immutable. Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true. */
          enableVtpm?: boolean;
        };
        /** @description Immutable. Tags to attach to the instance. */
        tags?: string[];
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
        /** @description The unique fingerprint of the metadata. */
        metadataFingerprint?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The URI of the created resource. */
        selfLink?: string;
        /** @description A special URI of the created resource that uniquely identifies this instance template. */
        selfLinkUnique?: string;
        /** @description The unique fingerprint of the tags. */
        tagsFingerprint?: string;
      };
    };
  };
}
