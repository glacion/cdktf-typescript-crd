import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOSConfigOSPolicyAssignmentV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesOSConfigOSPolicyAssignmentV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesOSConfigOSPolicyAssignmentV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "osconfig.cnrm.cloud.google.com/v1beta1";
    kind?: "OSConfigOSPolicyAssignment";
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
      /** @description OS policy assignment description. Length of the description is limited to 1024 characters. */
      description?: string;
      /** @description Required. Filter to select VMs. */
      instanceFilter: {
        /** @description Target all VMs in the project. If true, no other criteria is permitted. */
        all?: boolean;
        /** @description List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM. */
        exclusionLabels?: {
          /** @description Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected. */
          labels?: {
            [key: string]: string;
          };
        }[];
        /** @description List of label sets used for VM inclusion. If the list has more than one `LabelSet`, the VM is included if any of the label sets are applicable for the VM. */
        inclusionLabels?: {
          /** @description Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected. */
          labels?: {
            [key: string]: string;
          };
        }[];
        /** @description List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories. */
        inventories?: {
          /** @description Required. The OS short name */
          osShortName: string;
          /** @description The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
          osVersion?: string;
        }[];
      };
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Required. List of OS policies to be applied to the VMs. */
      osPolicies: {
        /** @description This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce. */
        allowNoResourceGroupMatch?: boolean;
        /** @description Policy description. Length of the description is limited to 1024 characters. */
        description?: string;
        /** @description Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment. */
        id: string;
        /** @description Required. Policy mode Possible values: MODE_UNSPECIFIED, VALIDATION, ENFORCEMENT */
        mode: string;
        /** @description Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match` */
        resourceGroups: {
          /** @description List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name='rhel' and inventory_filters[1].os_short_name='centos' If the list is empty, this resource group will be applied to the target VM unconditionally. */
          inventoryFilters?: {
            /** @description Required. The OS short name */
            osShortName: string;
            /** @description The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
            osVersion?: string;
          }[];
          /** @description Required. List of resources configured for this resource group. The resources are executed in the exact order specified here. */
          resources: {
            /** @description Exec resource */
            exec?: {
              /** @description What to run to bring this resource into the desired state. An exit code of 100 indicates "success", any other exit code indicates a failure running enforce. */
              enforce?: {
                /** @description Optional arguments to pass to the source during execution. */
                args?: string[];
                /** @description A remote or local file. */
                file?: {
                  /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                  allowInsecure?: boolean;
                  /** @description A Cloud Storage object. */
                  gcs?: {
                    /** @description Required. Bucket of the Cloud Storage object. */
                    bucket: string;
                    /**
                     * Format: int64
                     * @description Generation number of the Cloud Storage object.
                     */
                    generation?: number;
                    /** @description Required. Name of the Cloud Storage object. */
                    object: string;
                  };
                  /** @description A local path within the VM to use. */
                  localPath?: string;
                  /** @description A generic remote file. */
                  remote?: {
                    /** @description SHA256 checksum of the remote file. */
                    sha256Checksum?: string;
                    /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                    uri: string;
                  };
                };
                /** @description Required. The script interpreter to use. Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL */
                interpreter: string;
                /** @description Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes. */
                outputFilePath?: string;
                /** @description An inline script. The size of the script is limited to 1024 characters. */
                script?: string;
              };
              /** @description Required. What to run to validate this resource is in the desired state. An exit code of 100 indicates "in desired state", and exit code of 101 indicates "not in desired state". Any other exit code indicates a failure running validate. */
              validate: {
                /** @description Optional arguments to pass to the source during execution. */
                args?: string[];
                /** @description A remote or local file. */
                file?: {
                  /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                  allowInsecure?: boolean;
                  /** @description A Cloud Storage object. */
                  gcs?: {
                    /** @description Required. Bucket of the Cloud Storage object. */
                    bucket: string;
                    /**
                     * Format: int64
                     * @description Generation number of the Cloud Storage object.
                     */
                    generation?: number;
                    /** @description Required. Name of the Cloud Storage object. */
                    object: string;
                  };
                  /** @description A local path within the VM to use. */
                  localPath?: string;
                  /** @description A generic remote file. */
                  remote?: {
                    /** @description SHA256 checksum of the remote file. */
                    sha256Checksum?: string;
                    /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                    uri: string;
                  };
                };
                /** @description Required. The script interpreter to use. Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL */
                interpreter: string;
                /** @description Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes. */
                outputFilePath?: string;
                /** @description An inline script. The size of the script is limited to 1024 characters. */
                script?: string;
              };
            };
            /** @description File resource */
            file?: {
              /** @description A a file with this content. The size of the content is limited to 1024 characters. */
              content?: string;
              /** @description A remote or local source. */
              file?: {
                /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                allowInsecure?: boolean;
                /** @description A Cloud Storage object. */
                gcs?: {
                  /** @description Required. Bucket of the Cloud Storage object. */
                  bucket: string;
                  /**
                   * Format: int64
                   * @description Generation number of the Cloud Storage object.
                   */
                  generation?: number;
                  /** @description Required. Name of the Cloud Storage object. */
                  object: string;
                };
                /** @description A local path within the VM to use. */
                localPath?: string;
                /** @description A generic remote file. */
                remote?: {
                  /** @description SHA256 checksum of the remote file. */
                  sha256Checksum?: string;
                  /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                  uri: string;
                };
              };
              /** @description Required. The absolute path of the file within the VM. */
              path: string;
              /** @description Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
              permissions?: string;
              /** @description Required. Desired state of the file. Possible values: OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED, COMPLIANT, NON_COMPLIANT, UNKNOWN, NO_OS_POLICIES_APPLICABLE */
              state: string;
            };
            /** @description Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy. */
            id: string;
            /** @description Package resource */
            pkg?: {
              /** @description A package managed by Apt. */
              apt?: {
                /** @description Required. Package name. */
                name: string;
              };
              /** @description A deb package file. */
              deb?: {
                /** @description Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb` */
                pullDeps?: boolean;
                /** @description Required. A deb package. */
                source: {
                  /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                  allowInsecure?: boolean;
                  /** @description A Cloud Storage object. */
                  gcs?: {
                    /** @description Required. Bucket of the Cloud Storage object. */
                    bucket: string;
                    /**
                     * Format: int64
                     * @description Generation number of the Cloud Storage object.
                     */
                    generation?: number;
                    /** @description Required. Name of the Cloud Storage object. */
                    object: string;
                  };
                  /** @description A local path within the VM to use. */
                  localPath?: string;
                  /** @description A generic remote file. */
                  remote?: {
                    /** @description SHA256 checksum of the remote file. */
                    sha256Checksum?: string;
                    /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                    uri: string;
                  };
                };
              };
              /** @description Required. The desired state the agent should maintain for this package. Possible values: DESIRED_STATE_UNSPECIFIED, INSTALLED, REMOVED */
              desiredState: string;
              /** @description A package managed by GooGet. */
              googet?: {
                /** @description Required. Package name. */
                name: string;
              };
              /** @description An MSI package. */
              msi?: {
                /** @description Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`. */
                properties?: string[];
                /** @description Required. The MSI package. */
                source: {
                  /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                  allowInsecure?: boolean;
                  /** @description A Cloud Storage object. */
                  gcs?: {
                    /** @description Required. Bucket of the Cloud Storage object. */
                    bucket: string;
                    /**
                     * Format: int64
                     * @description Generation number of the Cloud Storage object.
                     */
                    generation?: number;
                    /** @description Required. Name of the Cloud Storage object. */
                    object: string;
                  };
                  /** @description A local path within the VM to use. */
                  localPath?: string;
                  /** @description A generic remote file. */
                  remote?: {
                    /** @description SHA256 checksum of the remote file. */
                    sha256Checksum?: string;
                    /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                    uri: string;
                  };
                };
              };
              /** @description An rpm package file. */
              rpm?: {
                /** @description Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm` */
                pullDeps?: boolean;
                /** @description Required. An rpm package. */
                source: {
                  /** @description Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
                  allowInsecure?: boolean;
                  /** @description A Cloud Storage object. */
                  gcs?: {
                    /** @description Required. Bucket of the Cloud Storage object. */
                    bucket: string;
                    /**
                     * Format: int64
                     * @description Generation number of the Cloud Storage object.
                     */
                    generation?: number;
                    /** @description Required. Name of the Cloud Storage object. */
                    object: string;
                  };
                  /** @description A local path within the VM to use. */
                  localPath?: string;
                  /** @description A generic remote file. */
                  remote?: {
                    /** @description SHA256 checksum of the remote file. */
                    sha256Checksum?: string;
                    /** @description Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
                    uri: string;
                  };
                };
              };
              /** @description A package managed by YUM. */
              yum?: {
                /** @description Required. Package name. */
                name: string;
              };
              /** @description A package managed by Zypper. */
              zypper?: {
                /** @description Required. Package name. */
                name: string;
              };
            };
            /** @description Package repository resource */
            repository?: {
              /** @description An Apt Repository. */
              apt?: {
                /** @description Required. Type of archive files in this repository. Possible values: ARCHIVE_TYPE_UNSPECIFIED, DEB, DEB_SRC */
                archiveType: string;
                /** @description Required. List of components for this repository. Must contain at least one item. */
                components: string[];
                /** @description Required. Distribution of this repository. */
                distribution: string;
                /** @description URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`. */
                gpgKey?: string;
                /** @description Required. URI for this repository. */
                uri: string;
              };
              /** @description A Goo Repository. */
              goo?: {
                /** @description Required. The name of the repository. */
                name: string;
                /** @description Required. The url of the repository. */
                url: string;
              };
              /** @description A Yum Repository. */
              yum?: {
                /** @description Required. The location of the repository directory. */
                baseUrl: string;
                /** @description The display name of the repository. */
                displayName?: string;
                /** @description URIs of GPG keys. */
                gpgKeys?: string[];
                /** @description Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts. */
                id: string;
              };
              /** @description A Zypper Repository. */
              zypper?: {
                /** @description Required. The location of the repository directory. */
                baseUrl: string;
                /** @description The display name of the repository. */
                displayName?: string;
                /** @description URIs of GPG keys. */
                gpgKeys?: string[];
                /** @description Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts. */
                id: string;
              };
            };
          }[];
        }[];
      }[];
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Required. Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: - instance_filter - os_policies 3) OSPolicyAssignment is deleted. */
      rollout: {
        /** @description Required. The maximum number (or percentage) of VMs per zone to disrupt at any given moment. */
        disruptionBudget: {
          /**
           * Format: int64
           * @description Specifies a fixed value.
           */
          fixed?: number;
          /**
           * Format: int64
           * @description Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
           */
          percent?: number;
        };
        /** @description Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied. */
        minWaitDuration: string;
      };
      /** @description Set to true to skip awaiting rollout during resource creation and update. */
      skipAwaitRollout?: boolean;
    };
    status?: {
      /** @description Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field. */
      baseline?: boolean;
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
      /** @description Output only. Indicates that this revision deletes the OS policy assignment. */
      deleted?: boolean;
      /** @description The etag for this OS policy assignment. If this is provided on update, it must match the server's etag. */
      etag?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING */
      reconciling?: boolean;
      /**
       * Format: date-time
       * @description Output only. The timestamp that the revision was created.
       */
      revisionCreateTime?: string;
      /** @description Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment */
      revisionId?: string;
      /** @description Output only. OS policy assignment rollout state Possible values: ROLLOUT_STATE_UNSPECIFIED, IN_PROGRESS, CANCELLING, CANCELLED, SUCCEEDED */
      rolloutState?: string;
      /** @description Output only. Server generated unique id for the OS policy assignment resource. */
      uid?: string;
    };
  };
}
