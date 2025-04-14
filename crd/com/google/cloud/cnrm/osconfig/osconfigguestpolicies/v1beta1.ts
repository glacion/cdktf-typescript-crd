import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesOSConfigGuestPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesOSConfigGuestPolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "osconfig.cnrm.cloud.google.com/v1beta1", kind: "OSConfigGuestPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesOSConfigGuestPolicyV1beta1Config extends ManifestConfig {
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
      spec?: {
        /** @description Specifies the VMs that are assigned this policy. This allows you to target sets or groups of VMs by different parameters such as labels, names, OS, or zones. Empty assignments will target ALL VMs underneath this policy. Conflict Management Policies that exist higher up in the resource hierarchy (closer to the Org) will override those lower down if there is a conflict. At the same level in the resource hierarchy (ie. within a project), the service will prevent the creation of multiple policies that conflict with each other. If there are multiple policies that specify the same config (eg. package, software recipe, repository, etc.), the service will ensure that no VM could potentially receive instructions from both policies. To create multiple policies that specify different versions of a package or different configs for different Operating Systems, each policy must be mutually exclusive in their targeting according to labels, OS, or other criteria. Different configs are identified for conflicts in different ways. Packages are identified by their name and the package manager(s) they target. Package repositories are identified by their unique id where applicable. Some package managers don't have a unique identifier for repositories and where that's the case, no uniqueness is validated by the service. Note that if OS Inventory is disabled, a VM will not be assigned a policy that targets by OS because the service will see this VM's OS as unknown. */
        assignment?: {
          /** @description Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging". */
          groupLabels?: {
            /** @description Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
            labels?: {
              [key: string]: string;
            };
          }[];
          /** @description Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies. */
          instanceNamePrefixes?: string[];
          instances?: ({
            /** @description Allowed value: The `selfLink` field of a `ComputeInstance` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          /** @description Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included. */
          osTypes?: {
            /** @description Targets VM instances with OS Inventory enabled and having the following OS architecture. */
            osArchitecture?: string;
            /** @description Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
            osShortName?: string;
            /** @description Targets VM instances with OS Inventory enabled and having the following following OS version. */
            osVersion?: string;
          }[];
          /** @description Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. */
          zones?: string[];
        };
        /** @description Description of the GuestPolicy. Length of the description is limited to 1024 characters. */
        description?: string;
        /** @description List of package repository configurations assigned to the VM instance. */
        packageRepositories?: {
          /** @description An Apt Repository. */
          apt?: {
            /** @description Type of archive files in this repository. The default behavior is DEB. Possible values: ARCHIVE_TYPE_UNSPECIFIED, DEB, DEB_SRC */
            archiveType?: string;
            /** @description Required. List of components for this repository. Must contain at least one item. */
            components?: string[];
            /** @description Required. Distribution of this repository. */
            distribution: string;
            /** @description URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy. */
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
            /** @description Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
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
            /** @description Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
            id: string;
          };
        }[];
        /** @description List of package configurations assigned to the VM instance. */
        packages?: {
          /** @description The desired_state the agent should maintain for this package. The default is to ensure the package is installed. Possible values: DESIRED_STATE_UNSPECIFIED, INSTALLED, REMOVED */
          desiredState?: string;
          /** @description Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY. Possible values: MANAGER_UNSPECIFIED, ANY, APT, YUM, ZYPPER, GOO */
          manager?: string;
          /** @description Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets. */
          name?: string;
        }[];
        /** @description Optional. A list of Recipes to install on the VM. */
        recipes?: {
          /** @description Resources available to be used in the steps in the recipe. */
          artifacts?: {
            /** @description Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. */
            allowInsecure?: boolean;
            /** @description A Google Cloud Storage artifact. */
            gcs?: {
              bucketRef?: {
                /** @description Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.
                 *
                 *     Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`). */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /**
               * Format: int64
               * @description Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.
               */
              generation?: number;
              /** @description Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`. */
              object?: string;
            };
            /** @description Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. */
            id?: string;
            /** @description A generic remote artifact. */
            remote?: {
              /** @description Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps. */
              checksum?: string;
              /** @description URI from which to fetch the object. It should contain both the protocol and path following the format: {protocol}://{location}. */
              uri?: string;
            };
          }[];
          /** @description Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. Possible values: DESIRED_STATE_UNSPECIFIED, INSTALLED, REMOVED */
          desiredState?: string;
          /** @description Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back. */
          installSteps?: {
            /** @description Extracts an archive into the specified directory. */
            archiveExtraction?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description Directory to extract archive to. Defaults to `/` on Linux or `C:` on Windows. */
              destination?: string;
              /** @description Required. The type of the archive to extract. Possible values: TYPE_UNSPECIFIED, VALIDATION, DESIRED_STATE_CHECK, DESIRED_STATE_ENFORCEMENT, DESIRED_STATE_CHECK_POST_ENFORCEMENT */
              type?: string;
            };
            /** @description Installs a deb file via dpkg. */
            dpkgInstallation?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
            };
            /** @description Copies a file onto the instance. */
            fileCopy?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description Required. The absolute path on the instance to put the file. */
              destination?: string;
              /** @description Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
              overwrite?: boolean;
              /** @description Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
              permissions?: string;
            };
            /** @description Executes an artifact or local file. */
            fileExec?: {
              /** @description Defaults to [0]. A list of possible return values that the program can return to indicate a success. */
              allowedExitCodes?: number[];
              /** @description Arguments to be passed to the provided executable. */
              args?: string[];
              /** @description The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description The absolute path of the file on the local filesystem. */
              localPath?: string;
            };
            /** @description Installs an MSI file. */
            msiInstallation?: {
              /** @description Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
              allowedExitCodes?: number[];
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag). */
              flags?: string[];
            };
            /** @description Installs an rpm file via the rpm utility. */
            rpmInstallation?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
            };
            /** @description Runs commands in a shell. */
            scriptRun?: {
              /** @description Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
              allowedExitCodes?: number[];
              /** @description The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_(Unix)). Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL */
              interpreter?: string;
              /** @description Required. The shell script to be executed. */
              script?: string;
            };
          }[];
          /** @description Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. */
          name?: string;
          /** @description Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back. */
          updateSteps?: {
            /** @description Extracts an archive into the specified directory. */
            archiveExtraction?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description Directory to extract archive to. Defaults to `/` on Linux or `C:` on Windows. */
              destination?: string;
              /** @description Required. The type of the archive to extract. Possible values: TYPE_UNSPECIFIED, VALIDATION, DESIRED_STATE_CHECK, DESIRED_STATE_ENFORCEMENT, DESIRED_STATE_CHECK_POST_ENFORCEMENT */
              type?: string;
            };
            /** @description Installs a deb file via dpkg. */
            dpkgInstallation?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
            };
            /** @description Copies a file onto the instance. */
            fileCopy?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description Required. The absolute path on the instance to put the file. */
              destination?: string;
              /** @description Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
              overwrite?: boolean;
              /** @description Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
              permissions?: string;
            };
            /** @description Executes an artifact or local file. */
            fileExec?: {
              /** @description Defaults to [0]. A list of possible return values that the program can return to indicate a success. */
              allowedExitCodes?: number[];
              /** @description Arguments to be passed to the provided executable. */
              args?: string[];
              /** @description The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description The absolute path of the file on the local filesystem. */
              localPath?: string;
            };
            /** @description Installs an MSI file. */
            msiInstallation?: {
              /** @description Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
              allowedExitCodes?: number[];
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
              /** @description The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag). */
              flags?: string[];
            };
            /** @description Installs an rpm file via the rpm utility. */
            rpmInstallation?: {
              /** @description Required. The id of the relevant artifact in the recipe. */
              artifactId?: string;
            };
            /** @description Runs commands in a shell. */
            scriptRun?: {
              /** @description Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
              allowedExitCodes?: number[];
              /** @description The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_(Unix)). Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL */
              interpreter?: string;
              /** @description Required. The shell script to be executed. */
              script?: string;
            };
          }[];
          /** @description The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
          version?: string;
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
        /**
         * Format: date-time
         * @description Output only. Time this GuestPolicy was created.
         */
        createTime?: string;
        /** @description The etag for this GuestPolicy. If this is provided on update, it must match the server's etag. */
        etag?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /**
         * Format: date-time
         * @description Output only. Last time this GuestPolicy was updated.
         */
        updateTime?: string;
      };
    };
  };
}
