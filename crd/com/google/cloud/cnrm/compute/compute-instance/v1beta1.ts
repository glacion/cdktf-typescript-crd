import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeInstanceV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeInstanceV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeInstanceV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeInstance";
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
    spec:
      | {
          /** @description Controls for advanced machine-related behavior features. */
          advancedMachineFeatures?: {
            /** @description Whether to enable nested virtualization or not. */
            enableNestedVirtualization?: boolean;
            /** @description The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
            threadsPerCore?: number;
            /** @description The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width. */
            visibleCoreCount?: number;
          };
          /** @description List of disks attached to the instance. */
          attachedDisk?: {
            /** @description Name with which the attached disk is accessible under /dev/disk/by-id/. */
            deviceName?: string;
            /** @description A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
            diskEncryptionKeyRaw?: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
            /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource. */
            diskEncryptionKeySha256?: string;
            kmsKeyRef?: {
              /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". */
            mode?: string;
            sourceDiskRef: {
              /** @description Allowed value: The `selfLink` field of a `ComputeDisk` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description Immutable. The boot disk for the instance. */
          bootDisk?: {
            /** @description Immutable. Whether the disk will be auto-deleted when the instance is deleted. */
            autoDelete?: boolean;
            /** @description Immutable. Name with which attached disk will be accessible under /dev/disk/by-id/. */
            deviceName?: string;
            /** @description Immutable. A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
            diskEncryptionKeyRaw?: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
            /** @description The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource. */
            diskEncryptionKeySha256?: string;
            /** @description Immutable. Parameters with which a disk was created alongside the instance. */
            initializeParams?: {
              /** @description Immutable. A set of key/value label pairs assigned to the disk. */
              labels?: Record<string, never>;
              /** @description Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty. */
              resourceManagerTags?: Record<string, never>;
              /** @description Immutable. The size of the image in gigabytes. */
              size?: number;
              /** @description Immutable. The image from which to initialize this disk. */
              sourceImageRef?: {
                /** @description Allowed value: The `selfLink` field of a `ComputeImage` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description Immutable. The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced. */
              type?: string;
            };
            kmsKeyRef?: {
              /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /** @description Immutable. Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". */
            mode?: string;
            /** @description Immutable. The source disk used to create this disk. */
            sourceDiskRef?: {
              /** @description Allowed value: The `selfLink` field of a `ComputeDisk` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          };
          /** @description Whether sending and receiving of packets with non-matching source or destination IPs is allowed. */
          canIpForward?: boolean;
          /** @description Immutable. The Confidential VM config being used by the instance.  on_host_maintenance has to be set to TERMINATE or this will fail to create. */
          confidentialInstanceConfig?: {
            /** @description Defines whether the instance should have confidential compute enabled. */
            enableConfidentialCompute: boolean;
          };
          /** @description Whether deletion protection is enabled on this instance. */
          deletionProtection?: boolean;
          /** @description Immutable. A brief description of the resource. */
          description?: string;
          /** @description Desired status of the instance. Either "RUNNING" or "TERMINATED". */
          desiredStatus?: string;
          /** @description Whether the instance has virtual displays enabled. */
          enableDisplay?: boolean;
          /** @description Immutable. List of the type and count of accelerator cards attached to the instance. */
          guestAccelerator?: {
            /** @description Immutable. The number of the guest accelerator cards exposed to this instance. */
            count: number;
            /** @description Immutable. The accelerator type resource exposed to this instance. E.g. nvidia-tesla-t4. */
            type: string;
          }[];
          /** @description Immutable. A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created. */
          hostname?: string;
          instanceTemplateRef?: {
            /** @description Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description The machine type to create. */
          machineType?: string;
          metadata?: {
            key: string;
            value: string;
          }[];
          /** @description Immutable. Metadata startup scripts made available within the instance. */
          metadataStartupScript?: string;
          /** @description The minimum CPU platform specified for the VM instance. */
          minCpuPlatform?: string;
          /** @description Immutable. The networks attached to the instance. */
          networkInterface?: {
            /** @description Access configurations, i.e. IPs via which this instance can be accessed via the Internet. */
            accessConfig?: {
              natIpRef?: {
                /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The networking tier used for configuring this instance. One of PREMIUM or STANDARD. */
              networkTier?: string;
              /** @description The DNS domain name for the public PTR record. */
              publicPtrDomainName?: string;
            }[];
            /** @description An array of alias IP ranges for this network interface. */
            aliasIpRange?: {
              /** @description The IP CIDR range represented by this alias IP range. */
              ipCidrRange: string;
              /** @description The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. */
              subnetworkRangeName?: string;
            }[];
            /** @description The prefix length of the primary internal IPv6 range. */
            internalIpv6PrefixLength?: number;
            /** @description An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access. */
            ipv6AccessConfig?: {
              /** @description Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork. */
              externalIpv6?: string;
              /** @description Immutable. The prefix length of the external IPv6 range. */
              externalIpv6PrefixLength?: string;
              /** @description Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. */
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
            /** @description The name of the interface. */
            name?: string;
            /** @description DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead. */
            networkIp?: string;
            networkIpRef?: {
              /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
              external?: string;
              /** @description Kind of the referent. Allowed values: ComputeAddress */
              kind?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
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
            /** @description The project in which the subnetwork belongs. */
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
          /** @description Immutable. Stores additional params passed with the request, but not persisted as part of resource payload. */
          params?: {
            /** @description Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty. */
            resourceManagerTags?: Record<string, never>;
          };
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
          /** @description The scheduling strategy being used by the instance. */
          scheduling?: {
            /** @description Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). */
            automaticRestart?: boolean;
            /** @description Specifies the action GCE should take when SPOT VM is preempted. */
            instanceTerminationAction?: string;
            /** @description Immutable. Specifies the maximum amount of time a Local Ssd Vm should wait while
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
            };
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
            minNodeCpus?: number;
            nodeAffinities?: {
              value?: Record<string, never>;
            }[];
            /** @description Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. */
            onHostMaintenance?: string;
            /** @description Immutable. Whether the instance is preemptible. */
            preemptible?: boolean;
            /** @description Immutable. Whether the instance is spot. If this is set as SPOT. */
            provisioningModel?: string;
          };
          /** @description Immutable. The scratch disks attached to the instance. */
          scratchDisk?: {
            /** @description The disk interface used for attaching this disk. One of SCSI or NVME. */
            interface: string;
            /** @description Immutable. The size of the disk in gigabytes. One of 375 or 3000. */
            size?: number;
          }[];
          /** @description The service account to attach to the instance. */
          serviceAccount?: {
            /** @description A list of service scopes. */
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
          /** @description The shielded vm config being used by the instance. */
          shieldedInstanceConfig?: {
            /** @description Whether integrity monitoring is enabled for the instance. */
            enableIntegrityMonitoring?: boolean;
            /** @description Whether secure boot is enabled for the instance. */
            enableSecureBoot?: boolean;
            /** @description Whether the instance uses vTPM. */
            enableVtpm?: boolean;
          };
          /** @description The list of tags attached to the instance. */
          tags?: string[];
          /** @description Immutable. The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used. */
          zone?: string;
        }
      | unknown
      | unknown;
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
      /** @description The CPU platform used by this instance. */
      cpuPlatform?: string;
      /** @description
       *     					Current status of the instance.
       *     					This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED.
       *     					For more information about the status of the instance, see [Instance life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle). */
      currentStatus?: string;
      /** @description The server-assigned unique identifier of this instance. */
      instanceId?: string;
      /** @description The unique fingerprint of the labels. */
      labelFingerprint?: string;
      /** @description The unique fingerprint of the metadata. */
      metadataFingerprint?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description The URI of the created resource. */
      selfLink?: string;
      /** @description The unique fingerprint of the tags. */
      tagsFingerprint?: string;
    };
  };
}
