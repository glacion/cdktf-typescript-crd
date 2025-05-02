import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadAllowlistV1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesWorkloadAllowlistV1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesWorkloadAllowlistV1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "auto.gke.io/v1";
    kind?: "WorkloadAllowlist";
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
    /** @description ContainerImageDigests contains an optional list of accepted image digests
     *     for each container in the MatchingCriteria.
     *     A workload's image will match the allowlist's image if either they
     *     match directly, or the workload's image (1) specifies a hash, and
     *     (2) that hash is present in the container's ImageDigests. */
    containerImageDigests?: {
      /** @description The name of the container which accepts the image digests. */
      containerName: string;
      /** @description The image SHA256 image digests that will be accepted. */
      imageDigests: string[];
    }[];
    /** @description GKE Warden constraints that this workload allowlist exempts. */
    exemptions: string[];
    /** @description MatchingCriteria is a subset of podSpec containing criteria that a workload's
     *     pod spec needs to match in order to be admitted into the cluster */
    matchingCriteria: {
      containers: {
        /** @description Arguments to the entrypoint.
         *     Must contain all of the arguments in the workload's container
         *     The arguments in a workload's container may be a subset of the arguments in an allowlist.
         *     Supports using regex patterns for arguments that may have multiple possible values & permutations
         *
         *
         *     In order for an arg to be treated as a regex pattern it must be anchored with a caret (^)
         *     at the beginning of the string and a dollar sign ($) at the end of the string. */
        args?: string[];
        /** @description Entrypoint array. Not executed within a shell.
         *     Must be an exact match to the command's in the workload's container */
        command?: string[];
        /** @description List of environment variables to set in the container.
         *     Each env name can be a plain string or regex (for matching with multiple envs that follow a similar pattern)
         *     Each individual env in the workload’s container must have name equal to an env in the allowlist’s container (or regex match).
         *     All other sub-fields of env are ignored.
         *     The envs in a workload container may be a subset of the envs in an allowlist container. */
        env?: {
          /** @description Name of the environment variable. Must be a C_IDENTIFIER.
           *     Supports using regex to match with multiple envs that follow a similar pattern
           *     Env name present in the workload must be an exact match or follow regex pattern of the allowlist's env name
           *
           *
           *     In order for an ENV name to be treated as a regex pattern it must be anchored with a caret (^)
           *     at the beginning of the string and a dollar sign ($) at the end of the string. */
          name: string;
        }[];
        /** @description List of sources to populate environment variables in the container.
         *     Each individual envFrom in the allowlist's container must have the configMapRef.Name or secretMapRef.Name values equal to the envFrom values in the workload’s container.
         *     All other sub-fields of env are ignored.
         *     The envFroms in a workload container may be a subset of the envFroms in an allowlist container. */
        envFrom?: {
          /** @description The ConfigMap to select from */
          configMapRef?: {
            /** @description The name of the ConfigMap to select from.
             *     Must be exact match to value present in workload */
            name?: string;
          };
          /** @description The Secret to select from */
          secretRef?: {
            /** @description The name of the Secret to select from.
             *     Must be exact match to value present in workload */
            name?: string;
          };
        }[];
        /** @description Container image name.
         *     More info: https://kubernetes.io/docs/concepts/containers/images
         *     Include only the image path and exclude digest/image tag.
         *     This can either be an exact string match or a matching regex pattern to the workload's container image.
         *
         *
         *     In order for the image path to be treated as a regex pattern it must be anchored with a caret (^)
         *     at the beginning of the string and a dollar sign ($) at the end of the string. */
        image?: string;
        /** @description LifecycleSubset is functionally a subset of core/v1 Lifecycle, preserving only
         *     fields used for allowlisting. */
        lifecycle?: {
          /** @description Only exec field is required if present in workload container.
           *     All other sub-fields ignored. */
          postStart?: {
            /** @description Exec specifies the action to take.
             *     Must match value present in workload container */
            exec?: {
              /** @description Must be an exact match to the commands specified in the workload */
              command?: string[];
            };
          };
          /** @description Only exec field is required if present in workload container.
           *     All other sub-fields ignored. */
          preStop?: {
            /** @description Exec specifies the action to take.
             *     Must match value present in workload container */
            exec?: {
              /** @description Must be an exact match to the commands specified in the workload */
              command?: string[];
            };
          };
        };
        /** @description Periodic probe of container liveness.
         *     Must be an exact match to the LivenessProbe value in the workload's container */
        livenessProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description Name of the container specified as a DNS_LABEL.
         *     Each container in a pod must have a unique name (DNS_LABEL).
         *     Cannot be updated. */
        name: string;
        /** @description Periodic probe of container service readiness.
         *     Must be an exact match to the readinessProbe value in the workload's container */
        readinessProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description SecurityContext is functionally a subset of core/v1 SecurityContext,
         *     preserving only fields used for allowlisting.
         *     Only Capabilities, Privileged, and appArmorProfile subfields
         *     are used for workload matching */
        securityContext?: {
          /** @description AppArmorProfile defines the minimum level of security for the AppArmorProfile of
           *     allowlisted workloads. Valid configurations are summarized in this table:
           *     |   Allowlist    |                   Workload                   |
           *     | omit           | omit, RuntimeDefault                         |
           *     | Unconfined     | omit,Unconfined,RuntimeDefault,LocalHost     |
           *     | RuntimeDefault | RuntimeDefault                               |
           *     | LocalHost      | LocalHost (plus exact match of profile name) | */
          appArmorProfile?: {
            /** @description The profile loaded on the node that matching workloads must specify.
             *     Must be set if and only if type is "Localhost". */
            localhostProfile?: string;
            /** @description Type indicates which kind of AppArmor profile will be applied. */
            type: string;
          };
          /** @description The capabilities to add/drop when running containers. */
          capabilities?: {
            /** @description Added capabilities
             *     This should contain a list of all of capabilities that a workload may add.
             *     A workload may contain fewer added capabilities than what is present in the allowlist. */
            add?: string[];
            /** @description Removed capabilities
             *     Should contain a list of all of capabilities that a workload is required to drop.
             *     A workload may contain additional dropped capabilities than what is present in the allowlist. */
            drop?: string[];
          };
          /** @description Run container in privileged mode.
           *     Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
          privileged?: boolean;
        };
        /** @description StartupProbe indicates that the Pod has successfully initialized.
         *     Must be an exact match to the startupProbe value in the workload's container */
        startupProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description volumeDevices is the list of block devices to be used by the container.
         *     The volumeDevices in a workload’s container may be a subset of the volumeMounts in an allowlist’s container. */
        volumeDevices?: {
          /** @description devicePath is the path inside of the container that the device will be mapped to.
           *     Must be exact match to devicePath present in the workload */
          devicePath: string;
          /** @description Must be exact match to name present in the worklaod */
          name: string;
        }[];
        /** @description Pod volumes to mount into the container's filesystem.
         *     The VolumeMounts in a workload’s container may be a subset of the volumeMounts in an allowlist’s container. */
        volumeMounts?: {
          /** @description Path within the container at which the volume should be mounted.  Must
           *     not contain ':'.
           *     Must be exact match to value present in the workload */
          mountPath: string;
          /** @description This must match the Name of a Volume.
           *     Must be exact match to a volumeMount name in the workload container */
          name: string;
          /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
           *     Defaults to false.
           *     The allowlist must have this field omitted or explicitly set to false if the workload does not have readOnly set to true.
           *     Value is ignored if workload has this set to true */
          readOnly?: boolean;
          /** @description Path within the volume from which the container's volume should be mounted.
           *     Defaults to "" (volume's root).
           *     If present in allowlist, workload must have an exact match. */
          subPath?: string;
        }[];
      }[];
      /** @description Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
      hostIPC?: boolean;
      /** @description Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
      hostNetwork?: boolean;
      /** @description Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
      hostPID?: boolean;
      /** @description Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
      hostUsers?: boolean;
      initContainers?: {
        /** @description Arguments to the entrypoint.
         *     Must contain all of the arguments in the workload's container
         *     The arguments in a workload's container may be a subset of the arguments in an allowlist.
         *     Supports using regex patterns for arguments that may have multiple possible values & permutations
         *
         *
         *     In order for an arg to be treated as a regex pattern it must be anchored with a caret (^)
         *     at the beginning of the string and a dollar sign ($) at the end of the string. */
        args?: string[];
        /** @description Entrypoint array. Not executed within a shell.
         *     Must be an exact match to the command's in the workload's container */
        command?: string[];
        /** @description List of environment variables to set in the container.
         *     Each env name can be a plain string or regex (for matching with multiple envs that follow a similar pattern)
         *     Each individual env in the workload’s container must have name equal to an env in the allowlist’s container (or regex match).
         *     All other sub-fields of env are ignored.
         *     The envs in a workload container may be a subset of the envs in an allowlist container. */
        env?: {
          /** @description Name of the environment variable. Must be a C_IDENTIFIER.
           *     Supports using regex to match with multiple envs that follow a similar pattern
           *     Env name present in the workload must be an exact match or follow regex pattern of the allowlist's env name
           *
           *
           *     In order for an ENV name to be treated as a regex pattern it must be anchored with a caret (^)
           *     at the beginning of the string and a dollar sign ($) at the end of the string. */
          name: string;
        }[];
        /** @description List of sources to populate environment variables in the container.
         *     Each individual envFrom in the allowlist's container must have the configMapRef.Name or secretMapRef.Name values equal to the envFrom values in the workload’s container.
         *     All other sub-fields of env are ignored.
         *     The envFroms in a workload container may be a subset of the envFroms in an allowlist container. */
        envFrom?: {
          /** @description The ConfigMap to select from */
          configMapRef?: {
            /** @description The name of the ConfigMap to select from.
             *     Must be exact match to value present in workload */
            name?: string;
          };
          /** @description The Secret to select from */
          secretRef?: {
            /** @description The name of the Secret to select from.
             *     Must be exact match to value present in workload */
            name?: string;
          };
        }[];
        /** @description Container image name.
         *     More info: https://kubernetes.io/docs/concepts/containers/images
         *     Include only the image path and exclude digest/image tag.
         *     This can either be an exact string match or a matching regex pattern to the workload's container image.
         *
         *
         *     In order for the image path to be treated as a regex pattern it must be anchored with a caret (^)
         *     at the beginning of the string and a dollar sign ($) at the end of the string. */
        image?: string;
        /** @description LifecycleSubset is functionally a subset of core/v1 Lifecycle, preserving only
         *     fields used for allowlisting. */
        lifecycle?: {
          /** @description Only exec field is required if present in workload container.
           *     All other sub-fields ignored. */
          postStart?: {
            /** @description Exec specifies the action to take.
             *     Must match value present in workload container */
            exec?: {
              /** @description Must be an exact match to the commands specified in the workload */
              command?: string[];
            };
          };
          /** @description Only exec field is required if present in workload container.
           *     All other sub-fields ignored. */
          preStop?: {
            /** @description Exec specifies the action to take.
             *     Must match value present in workload container */
            exec?: {
              /** @description Must be an exact match to the commands specified in the workload */
              command?: string[];
            };
          };
        };
        /** @description Periodic probe of container liveness.
         *     Must be an exact match to the LivenessProbe value in the workload's container */
        livenessProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description Name of the container specified as a DNS_LABEL.
         *     Each container in a pod must have a unique name (DNS_LABEL).
         *     Cannot be updated. */
        name: string;
        /** @description Periodic probe of container service readiness.
         *     Must be an exact match to the readinessProbe value in the workload's container */
        readinessProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description SecurityContext is functionally a subset of core/v1 SecurityContext,
         *     preserving only fields used for allowlisting.
         *     Only Capabilities, Privileged, and appArmorProfile subfields
         *     are used for workload matching */
        securityContext?: {
          /** @description AppArmorProfile defines the minimum level of security for the AppArmorProfile of
           *     allowlisted workloads. Valid configurations are summarized in this table:
           *     |   Allowlist    |                   Workload                   |
           *     | omit           | omit, RuntimeDefault                         |
           *     | Unconfined     | omit,Unconfined,RuntimeDefault,LocalHost     |
           *     | RuntimeDefault | RuntimeDefault                               |
           *     | LocalHost      | LocalHost (plus exact match of profile name) | */
          appArmorProfile?: {
            /** @description The profile loaded on the node that matching workloads must specify.
             *     Must be set if and only if type is "Localhost". */
            localhostProfile?: string;
            /** @description Type indicates which kind of AppArmor profile will be applied. */
            type: string;
          };
          /** @description The capabilities to add/drop when running containers. */
          capabilities?: {
            /** @description Added capabilities
             *     This should contain a list of all of capabilities that a workload may add.
             *     A workload may contain fewer added capabilities than what is present in the allowlist. */
            add?: string[];
            /** @description Removed capabilities
             *     Should contain a list of all of capabilities that a workload is required to drop.
             *     A workload may contain additional dropped capabilities than what is present in the allowlist. */
            drop?: string[];
          };
          /** @description Run container in privileged mode.
           *     Must be true if workload has this set to true. Otherwise, it can be omitted or explicitly set to false. */
          privileged?: boolean;
        };
        /** @description StartupProbe indicates that the Pod has successfully initialized.
         *     Must be an exact match to the startupProbe value in the workload's container */
        startupProbe?: {
          /** @description Exec specifies the action to take.
           *     Must match value present in workload container */
          exec?: {
            /** @description Must be an exact match to the commands specified in the workload */
            command?: string[];
          };
        };
        /** @description volumeDevices is the list of block devices to be used by the container.
         *     The volumeDevices in a workload’s container may be a subset of the volumeMounts in an allowlist’s container. */
        volumeDevices?: {
          /** @description devicePath is the path inside of the container that the device will be mapped to.
           *     Must be exact match to devicePath present in the workload */
          devicePath: string;
          /** @description Must be exact match to name present in the worklaod */
          name: string;
        }[];
        /** @description Pod volumes to mount into the container's filesystem.
         *     The VolumeMounts in a workload’s container may be a subset of the volumeMounts in an allowlist’s container. */
        volumeMounts?: {
          /** @description Path within the container at which the volume should be mounted.  Must
           *     not contain ':'.
           *     Must be exact match to value present in the workload */
          mountPath: string;
          /** @description This must match the Name of a Volume.
           *     Must be exact match to a volumeMount name in the workload container */
          name: string;
          /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
           *     Defaults to false.
           *     The allowlist must have this field omitted or explicitly set to false if the workload does not have readOnly set to true.
           *     Value is ignored if workload has this set to true */
          readOnly?: boolean;
          /** @description Path within the volume from which the container's volume should be mounted.
           *     Defaults to "" (volume's root).
           *     If present in allowlist, workload must have an exact match. */
          subPath?: string;
        }[];
      }[];
      /** @description PodSecurityContext is a subset of core/v1 PodSecurityContext,
       *     preserving only fields used for allowlisting. */
      securityContext?: {
        /** @description AppArmorProfile defines the minimum level of security for the AppArmorProfile of
         *     allowlisted workloads. Valid configurations are summarized in this table:
         *     |   Allowlist    |                   Workload                   |
         *     | omit           | omit, RuntimeDefault                         |
         *     | Unconfined     | omit,Unconfined,RuntimeDefault,LocalHost     |
         *     | RuntimeDefault | RuntimeDefault                               |
         *     | LocalHost      | LocalHost (plus exact match of profile name) | */
        appArmorProfile?: {
          /** @description The profile loaded on the node that matching workloads must specify.
           *     Must be set if and only if type is "Localhost". */
          localhostProfile?: string;
          /** @description Type indicates which kind of AppArmor profile will be applied. */
          type: string;
        };
      };
      /** @description Each individual volume in the workload must match with a volume present in the allowlist
       *     The volumes in a workload may be a subset of the volumes in an allowlist. */
      volumes?: {
        /** @description configMap represents a configMap that should populate this volume.
         *     An allowlist only needs to include this field if wants to specify the use
         *     of a non-default value for the defaultMode subfield. */
        configMap?: {
          /**
           * Format: int32
           * @description defaultMode is optional: mode bits used to set permissions on created files by default.
           *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
           *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
           *     If omitted, any workloads must use the default value (0644) or omit.
           *     If included, a workload configMap must have an exactly matching DefaultMode value.
           */
          defaultMode?: number;
          name?: string;
        };
        /** @description GCEPersistentDiskVolumeSource is functionally a subset of core/v1
         *     GCEPersistentDiskVolumeSource, preserving only fields used for allowlisting. */
        gcePersistentDisk?: {
          /** @description fsType is filesystem type of the volume that you want to mount.
           *     Must be exact match to value present in the workload's volume */
          fsType?: string;
          /**
           * Format: int32
           * @description partition is the partition in the volume that you want to mount.
           *     Must be exact match to value present in the workload's volume
           */
          partition?: number;
          /** @description readOnly here will force the ReadOnly setting in VolumeMounts.
           *     Defaults to false.
           *     The allowlist must have this field omitted or explicitly set to false if the workload does not have readOnly set to true.
           *     Value is ignored if workload has this set to true */
          readOnly?: boolean;
        };
        /** @description HostPathVolumeSource is functionally a subset of core/v1
         *     HostPathVolumeSource, preserving only fields used for allowlisting. */
        hostPath?: {
          /** @description path of the directory on the host.
           *     Must be exact match to value present in the workload's volume */
          path: string;
        };
        /** @description name of the volume.
         *     Must match name of volume present in the workload */
        name: string;
        /** @description NFSVolumeSource is functionally a subset of core/v1 NFSVolumeSource,
         *     preserving only fields used for allowlisting. */
        nfs?: {
          /** @description path that is exported by the NFS server.
           *     Must be exact match to value present in the workload's volume */
          path: string;
          /** @description readOnly here will force the NFS export to be mounted with read-only permissions.
           *     Defaults to false.
           *     The allowlist must have this field omitted or explicitly set to false if the workload does not have readOnly set to true.
           *     Value is ignored if workload has this set to true */
          readOnly?: boolean;
        };
        /** @description PersistentVolumeClaimVolumeSource is functionally a subset of
         *     core/v1 PersistentVolumeClaimVolumeSource, preserving only fields
         *     used for allowlisting. */
        persistentVolumeClaim?: {
          /** @description readOnly Will force the ReadOnly setting in VolumeMounts.
           *     Default false.
           *     The allowlist must have this field omitted or explicitly set to false if the workload does not have readOnly set to true.
           *     Value is ignored if workload has this set to true */
          readOnly?: boolean;
        };
      }[];
    };
    /** @description Minimum GKE Version that this workload allowlist qualifies for.
     *     Should be set if the workload needing to be allowlisted requires fields
     *     introduced in a particular GKE version */
    minGKEVersion?: string;
  };
}
