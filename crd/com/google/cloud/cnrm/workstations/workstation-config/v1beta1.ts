import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkstationConfigV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkstationConfigV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkstationConfigV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "workstations.cnrm.cloud.google.com/v1beta1";
    kind?: "WorkstationConfig";
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
    /** @description WorkstationConfigSpec defines the desired state of WorkstationConfig */
    spec?: {
      /** @description Optional. Client-specified annotations. */
      annotations?: {
        /** @description Key for the annotation. */
        key?: string;
        /** @description Value for the annotation. */
        value?: string;
      }[];
      /** @description Optional. Container that runs upon startup for each workstation using this workstation configuration. */
      container?: {
        /** @description Optional. Arguments passed to the entrypoint. */
        args?: string[];
        /** @description Optional. If set, overrides the default ENTRYPOINT specified by the image. */
        command?: string[];
        /** @description Optional. Environment variables passed to the container's entrypoint. */
        env?: {
          /** @description Name is the name of the environment variable. */
          name?: string;
          /** @description Value is the value of the environment variable. */
          value?: string;
        }[];
        /** @description Optional. A Docker container image that defines a custom environment.
         *
         *      Cloud Workstations provides a number of
         *      [preconfigured
         *      images](https://cloud.google.com/workstations/docs/preconfigured-base-images),
         *      but you can create your own
         *      [custom container
         *      images](https://cloud.google.com/workstations/docs/custom-container-images).
         *      If using a private image, the `host.gceInstance.serviceAccount` field
         *      must be specified in the workstation configuration and must have
         *      permission to pull the specified image. Otherwise, the image must be
         *      publicly accessible. */
        image?: string;
        /**
         * Format: int32
         * @description Optional. If set, overrides the USER specified in the image with the given uid.
         */
        runAsUser?: number;
        /** @description Optional. If set, overrides the default DIR specified by the image. */
        workingDir?: string;
      };
      /** @description Optional. Human-readable name for this workstation configuration. */
      displayName?: string;
      /** @description Immutable. Encrypts resources of this workstation configuration using a
       *      customer-managed encryption key (CMEK).
       *
       *      If specified, the boot disk of the Compute Engine instance and the
       *      persistent disk are encrypted using this encryption key. If
       *      this field is not set, the disks are encrypted using a generated
       *      key. Customer-managed encryption keys do not protect disk metadata.
       *
       *      If the customer-managed encryption key is rotated, when the workstation
       *      instance is stopped, the system attempts to recreate the
       *      persistent disk with the new version of the key. Be sure to keep
       *      older versions of the key until the persistent disk is recreated.
       *      Otherwise, data on the persistent disk might be lost.
       *
       *      If the encryption key is revoked, the workstation session automatically
       *      stops within 7 hours.
       *
       *      Immutable after the workstation configuration is created. */
      encryptionKey?: {
        /** @description Immutable. A reference to the Google Cloud KMS encryption key. For example, `"projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME"`. The key must be in the same region as the workstation configuration. */
        kmsCryptoKeyRef?: {
          /** @description A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`. */
          external?: string;
          /** @description The `name` of a `KMSCryptoKey` resource. */
          name?: string;
          /** @description The `namespace` of a `KMSCryptoKey` resource. */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. A reference to a service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member). */
        serviceAccountRef?: {
          /** @description The `email` field of an `IAMServiceAccount` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Optional. Runtime host for the workstation. */
      host?: {
        /** @description Specifies a Compute Engine instance as the host. */
        gceInstance?: {
          /**
           * Format: int32
           * @description Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB.
           */
          bootDiskSizeGB?: number;
          /** @description Optional. A set of Compute Engine Confidential VM instance options. */
          confidentialInstanceConfig?: {
            /** @description Optional. Whether the instance has confidential compute enabled. */
            enableConfidentialCompute?: boolean;
          };
          /** @description Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `*.gcr.io` and `*.pkg.dev`. Defaults to false (VMs have public IP addresses). */
          disablePublicIPAddresses?: boolean;
          /** @description Optional. Whether to enable nested virtualization on Cloud Workstations
           *      VMs created under this workstation configuration.
           *
           *      Nested virtualization lets you run virtual machine (VM) instances
           *      inside your workstation. Before enabling nested virtualization,
           *      consider the following important considerations. Cloud Workstations
           *      instances are subject to the [same restrictions as Compute Engine
           *      instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions):
           *
           *      * **Organization policy**: projects, folders, or
           *      organizations may be restricted from creating nested VMs if the
           *      **Disable VM nested virtualization** constraint is enforced in
           *      the organization policy. For more information, see the
           *      Compute Engine section,
           *      [Checking whether nested virtualization is
           *      allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed).
           *      * **Performance**: nested VMs might experience a 10% or greater
           *      decrease in performance for workloads that are CPU-bound and
           *      possibly greater than a 10% decrease for workloads that are
           *      input/output bound.
           *      * **Machine Type**: nested virtualization can only be enabled on
           *      workstation configurations that specify a
           *      [machine_type][google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.machine_type]
           *      in the N1 or N2 machine series.
           *      * **GPUs**: nested virtualization may not be enabled on workstation
           *      configurations with accelerators.
           *      * **Operating System**: Because
           *      [Container-Optimized
           *      OS](https://cloud.google.com/compute/docs/images/os-details#container-optimized_os_cos)
           *      does not support nested virtualization, when nested virtualization is
           *      enabled, the underlying Compute Engine VM instances boot from an
           *      [Ubuntu
           *      LTS](https://cloud.google.com/compute/docs/images/os-details#ubuntu_lts)
           *      image. */
          enableNestedVirtualization?: boolean;
          /** @description Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). */
          machineType?: string;
          /**
           * Format: int32
           * @description Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API.
           */
          poolSize?: number;
          /** @description Optional. A reference to the service account for Cloud
           *      Workstations VMs created with this configuration. When specified, be
           *      sure that the service account has `logginglogEntries.create` permission
           *      on the project so it can write logs out to Cloud Logging. If using a
           *      custom container image, the service account must have permissions to
           *      pull the specified image.
           *
           *      If you as the administrator want to be able to `ssh` into the
           *      underlying VM, you need to set this value to a service account
           *      for which you have the `iam.serviceAccounts.actAs` permission.
           *      Conversely, if you don't want anyone to be able to `ssh` into the
           *      underlying VM, use a service account where no one has that
           *      permission.
           *
           *      If not set, VMs run with a service account provided by the
           *      Cloud Workstations service, and the image must be publicly
           *      accessible. */
          serviceAccountRef?: {
            /** @description The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
          /** @description Optional. Scopes to grant to the [service_account][google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.service_account]. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account. */
          serviceAccountScopes?: string[];
          /** @description Optional. A set of Compute Engine Shielded instance options. */
          shieldedInstanceConfig?: {
            /** @description Optional. Whether the instance has integrity monitoring enabled. */
            enableIntegrityMonitoring?: boolean;
            /** @description Optional. Whether the instance has Secure Boot enabled. */
            enableSecureBoot?: boolean;
            /** @description Optional. Whether the instance has the vTPM enabled. */
            enableVTPM?: boolean;
          };
          /** @description Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules). */
          tags?: string[];
        };
      };
      /** @description Optional. Number of seconds to wait before automatically stopping a
       *      workstation after it last received user traffic.
       *
       *      A value of `"0s"` indicates that Cloud Workstations VMs created with this
       *      configuration should never time out due to idleness.
       *      Provide
       *      [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration)
       *      terminated by `s` for seconds—for example, `"7200s"` (2 hours).
       *      The default is `"1200s"` (20 minutes). */
      idleTimeout?: string;
      /** @description Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources. */
      labels?: {
        /** @description Key for the label. */
        key?: string;
        /** @description Value for the label. */
        value?: string;
      }[];
      /** @description Parent is a reference to the parent WorkstationCluster for this WorkstationConfig. */
      parentRef: {
        /** @description A reference to an externally managed WorkstationCluster resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/workstationClusters/{{workstationclusterID}}". */
        external?: string;
        /** @description The name of a WorkstationCluster resource. */
        name?: string;
        /** @description The namespace of a WorkstationCluster resource. */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Optional. Directories to persist across workstation sessions. */
      persistentDirectories?: {
        /** @description A PersistentDirectory backed by a Compute Engine persistent disk. */
        gcePD?: {
          /** @description Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`. */
          diskType?: string;
          /** @description Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if [source_snapshot][google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.source_snapshot] is set. Defaults to `"ext4"`. */
          fsType?: string;
          /** @description Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`. */
          reclaimPolicy?: string;
          /**
           * Format: int32
           * @description Optional. The GB capacity of a persistent home directory for each
           *      workstation created with this configuration. Must be empty if
           *      [source_snapshot][google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.source_snapshot]
           *      is set.
           *
           *      Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`.
           *      Defaults to `200`. If less than `200` GB, the
           *      [disk_type][google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.disk_type]
           *      must be
           *      `"pd-balanced"` or `"pd-ssd"`.
           */
          sizeGB?: number;
          /** @description Optional. Name of the snapshot to use as the source for the disk. If set, [size_gb][google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.size_gb] and [fs_type][google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.fs_type] must be empty. */
          sourceSnapshot?: string;
        };
        /** @description Optional. Location of this directory in the running workstation. */
        mountPath?: string;
      }[];
      /** @description Optional. Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes. */
      readinessChecks?: {
        /** @description Optional. Path to which the request should be sent. */
        path?: string;
        /**
         * Format: int32
         * @description Optional. Port to which the request should be sent.
         */
        port?: number;
      }[];
      /** @description Optional. Immutable. Specifies the zones used to replicate the VM and disk
       *      resources within the region. If set, exactly two zones within the
       *      workstation cluster's region must be specified—for example,
       *      `['us-central1-a', 'us-central1-f']`. If this field is empty, two default
       *      zones within the region are used.
       *
       *      Immutable after the workstation configuration is created. */
      replicaZones?: string[];
      /** @description The WorkstationConfig name. If not given, the metadata.name will be used. */
      resourceID?: string;
      /** @description Optional. Number of seconds that a workstation can run until it is
       *      automatically shut down. We recommend that workstations be shut down daily
       *      to reduce costs and so that security updates can be applied upon restart.
       *      The
       *      [idle_timeout][google.cloud.workstations.v1.WorkstationConfig.idle_timeout]
       *      and
       *      [running_timeout][google.cloud.workstations.v1.WorkstationConfig.running_timeout]
       *      fields are independent of each other. Note that the
       *      [running_timeout][google.cloud.workstations.v1.WorkstationConfig.running_timeout]
       *      field shuts down VMs after the specified time, regardless of whether or not
       *      the VMs are idle.
       *
       *      Provide duration terminated by `s` for seconds—for example, `"54000s"`
       *      (15 hours). Defaults to `"43200s"` (12 hours). A value of `"0s"` indicates
       *      that workstations using this configuration should never time out. If
       *      [encryption_key][google.cloud.workstations.v1.WorkstationConfig.encryption_key]
       *      is set, it must be greater than `"0s"` and less than
       *      `"86400s"` (24 hours).
       *
       *      Warning: A value of `"0s"` indicates that Cloud Workstations VMs created
       *      with this configuration have no maximum running time. This is strongly
       *      discouraged because you incur costs and will not pick up security updates. */
      runningTimeout?: string;
    };
    /** @description WorkstationConfigStatus defines the config connector machine state of WorkstationConfig */
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
      /** @description A unique specifier for the WorkstationConfig resource in GCP. */
      externalRef?: string;
      /**
       * Format: int64
       * @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
       */
      observedGeneration?: number;
      /** @description ObservedState is the state of the resource as most recently observed in GCP. */
      observedState?: {
        /** @description Output only. Time when this workstation configuration was created. */
        createTime?: string;
        /** @description Output only. Whether this resource is degraded, in which case it may require user action to restore full functionality. See also the [conditions][google.cloud.workstations.v1.WorkstationConfig.conditions] field. */
        degraded?: boolean;
        /** @description Output only. Time when this workstation configuration was soft-deleted. */
        deleteTime?: string;
        /** @description Output only. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
        etag?: string;
        /** @description Output only. Status conditions describing the current resource state. */
        gcpConditions?: {
          /**
           * Format: int32
           * @description The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
           */
          code?: number;
          /** @description A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client. */
          message?: string;
        }[];
        /** @description Output only. Observed state of the runtime host for the workstation configuration. */
        host?: {
          /** @description Output only. Observed state of the Compute Engine runtime host for the workstation configuration. */
          gceInstance?: {
            /**
             * Format: int32
             * @description Output only. Number of instances currently available in the pool for faster workstation startup.
             */
            pooledInstances?: number;
          };
        };
        /** @description Output only. A system-assigned unique identifier for this workstation configuration. */
        uid?: string;
        /** @description Output only. Time when this workstation configuration was most recently updated. */
        updateTime?: string;
      };
    };
  };
}
