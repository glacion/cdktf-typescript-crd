import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesWorkloadAllowlistV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesWorkloadAllowlistV1Config) {
    super(scope, id, { manifest: { apiVersion: "auto.gke.io/v1", kind: "WorkloadAllowlist", ...manifest }, ...config });
  }
}
export interface KubernetesWorkloadAllowlistV1Config extends ManifestConfig {
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
    /** @description WorkloadAllowlist describes a workload pattern that should be exempt from
     *     certain Autopilot policies & constraints. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description GKE Warden constraints that this workload allowlist exempts. */
      exemptions: string[];
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      /** @description PodSpec          corev1.PodSpec   `json:"podSpec"` */
      matchingCriteria: {
        containers: {
          /** @description Arguments to the entrypoint.
           *     The container image's CMD is used if this is not provided.
           *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
           *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
           *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
           *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
           *     of whether the variable exists or not. Cannot be updated.
           *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          args?: string[];
          /** @description Entrypoint array. Not executed within a shell.
           *     The container image's ENTRYPOINT is used if this is not provided.
           *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
           *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
           *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
           *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
           *     of whether the variable exists or not. Cannot be updated.
           *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          command?: string[];
          /** @description List of environment variables to set in the container.
           *     Cannot be updated. */
          env?: {
            /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
            name: string;
          }[];
          /** @description List of sources to populate environment variables in the container.
           *     The keys defined within a source must be a C_IDENTIFIER. All invalid keys
           *     will be reported as an event when the container is starting. When a key exists in multiple
           *     sources, the value associated with the last source will take precedence.
           *     Values defined by an Env with a duplicate key will take precedence.
           *     Cannot be updated. */
          envFrom?: {
            /** @description The ConfigMap to select from */
            configMapRef?: {
              /** @description The name of the ConfigMap to select from.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
            };
            /** @description The Secret to select from */
            secretRef?: {
              /** @description The name of the Secret to select from.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
            };
          }[];
          /** @description Container image name.
           *     More info: https://kubernetes.io/docs/concepts/containers/images
           *     This field is optional to allow higher level config management to default or override
           *     container images in workload controllers like Deployments and StatefulSets. */
          image?: string;
          /** @description Actions that the management system should take in response to container lifecycle events.
           *     Cannot be updated. */
          lifecycle?: {
            /** @description PostStart is called immediately after a container is created. If the handler fails,
             *     the container is terminated and restarted according to its restart policy.
             *     Other management of the container blocks until the hook completes.
             *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            postStart?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the
                 *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 *     a shell, you need to explicitly call out to that shell.
                 *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
            };
            /** @description PreStop is called immediately before a container is terminated due to an
             *     API request or management event such as liveness/startup probe failure,
             *     preemption, resource contention, etc. The handler is not called if the
             *     container crashes or exits. The Pod's termination grace period countdown begins before the
             *     PreStop hook is executed. Regardless of the outcome of the handler, the
             *     container will eventually terminate within the Pod's termination grace
             *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
             *     or until the termination grace period is reached.
             *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            preStop?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the
                 *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 *     a shell, you need to explicitly call out to that shell.
                 *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
            };
          };
          /** @description Periodic probe of container liveness.
           *     Container will be restarted if the probe fails.
           *     Cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          livenessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description Name of the container specified as a DNS_LABEL.
           *     Each container in a pod must have a unique name (DNS_LABEL).
           *     Cannot be updated. */
          name: string;
          /** @description Periodic probe of container service readiness.
           *     Container will be removed from service endpoints if the probe fails.
           *     Cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          readinessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description SecurityContext defines the security options the container should be run with.
           *     If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
           *     More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
          securityContext?: {
            /** @description The capabilities to add/drop when running containers.
             *     Defaults to the default set of capabilities granted by the container runtime.
             *     Note that this field cannot be set when spec.os.name is windows. */
            capabilities?: {
              /** @description Added capabilities */
              add?: string[];
              /** @description Removed capabilities */
              drop?: string[];
            };
            /** @description Run container in privileged mode.
             *     Processes in privileged containers are essentially equivalent to root on the host.
             *     Defaults to false.
             *     Note that this field cannot be set when spec.os.name is windows. */
            privileged?: boolean;
          };
          /** @description StartupProbe indicates that the Pod has successfully initialized.
           *     If specified, no other probes are executed until this completes successfully.
           *     If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
           *     This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
           *     when it might take a long time to load data or warm a cache, than during steady-state operation.
           *     This cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          startupProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description volumeDevices is the list of block devices to be used by the container. */
          volumeDevices?: {
            /** @description devicePath is the path inside of the container that the device will be mapped to. */
            devicePath: string;
            /** @description name must match the name of a persistentVolumeClaim in the pod */
            name: string;
          }[];
          /** @description Pod volumes to mount into the container's filesystem.
           *     Cannot be updated. */
          volumeMounts?: {
            /** @description Path within the container at which the volume should be mounted.  Must
             *     not contain ':'. */
            mountPath: string;
            /** @description This must match the Name of a Volume. */
            name: string;
            /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
             *     Defaults to false. */
            readOnly?: boolean;
          }[];
        }[];
        hostIPC?: boolean;
        hostNetwork?: boolean;
        hostPID?: boolean;
        hostUsers?: boolean;
        initContainers?: {
          /** @description Arguments to the entrypoint.
           *     The container image's CMD is used if this is not provided.
           *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
           *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
           *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
           *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
           *     of whether the variable exists or not. Cannot be updated.
           *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          args?: string[];
          /** @description Entrypoint array. Not executed within a shell.
           *     The container image's ENTRYPOINT is used if this is not provided.
           *     Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
           *     cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
           *     to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
           *     produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
           *     of whether the variable exists or not. Cannot be updated.
           *     More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
          command?: string[];
          /** @description List of environment variables to set in the container.
           *     Cannot be updated. */
          env?: {
            /** @description Name of the environment variable. Must be a C_IDENTIFIER. */
            name: string;
          }[];
          /** @description List of sources to populate environment variables in the container.
           *     The keys defined within a source must be a C_IDENTIFIER. All invalid keys
           *     will be reported as an event when the container is starting. When a key exists in multiple
           *     sources, the value associated with the last source will take precedence.
           *     Values defined by an Env with a duplicate key will take precedence.
           *     Cannot be updated. */
          envFrom?: {
            /** @description The ConfigMap to select from */
            configMapRef?: {
              /** @description The name of the ConfigMap to select from.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
            };
            /** @description The Secret to select from */
            secretRef?: {
              /** @description The name of the Secret to select from.
               *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
            };
          }[];
          /** @description Container image name.
           *     More info: https://kubernetes.io/docs/concepts/containers/images
           *     This field is optional to allow higher level config management to default or override
           *     container images in workload controllers like Deployments and StatefulSets. */
          image?: string;
          /** @description Actions that the management system should take in response to container lifecycle events.
           *     Cannot be updated. */
          lifecycle?: {
            /** @description PostStart is called immediately after a container is created. If the handler fails,
             *     the container is terminated and restarted according to its restart policy.
             *     Other management of the container blocks until the hook completes.
             *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            postStart?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the
                 *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 *     a shell, you need to explicitly call out to that shell.
                 *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
            };
            /** @description PreStop is called immediately before a container is terminated due to an
             *     API request or management event such as liveness/startup probe failure,
             *     preemption, resource contention, etc. The handler is not called if the
             *     container crashes or exits. The Pod's termination grace period countdown begins before the
             *     PreStop hook is executed. Regardless of the outcome of the handler, the
             *     container will eventually terminate within the Pod's termination grace
             *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
             *     or until the termination grace period is reached.
             *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
            preStop?: {
              /** @description Exec specifies the action to take. */
              exec?: {
                /** @description Command is the command line to execute inside the container, the working directory for the
                 *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 *     a shell, you need to explicitly call out to that shell.
                 *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
                command?: string[];
              };
            };
          };
          /** @description Periodic probe of container liveness.
           *     Container will be restarted if the probe fails.
           *     Cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          livenessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description Name of the container specified as a DNS_LABEL.
           *     Each container in a pod must have a unique name (DNS_LABEL).
           *     Cannot be updated. */
          name: string;
          /** @description Periodic probe of container service readiness.
           *     Container will be removed from service endpoints if the probe fails.
           *     Cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          readinessProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description SecurityContext defines the security options the container should be run with.
           *     If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
           *     More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
          securityContext?: {
            /** @description The capabilities to add/drop when running containers.
             *     Defaults to the default set of capabilities granted by the container runtime.
             *     Note that this field cannot be set when spec.os.name is windows. */
            capabilities?: {
              /** @description Added capabilities */
              add?: string[];
              /** @description Removed capabilities */
              drop?: string[];
            };
            /** @description Run container in privileged mode.
             *     Processes in privileged containers are essentially equivalent to root on the host.
             *     Defaults to false.
             *     Note that this field cannot be set when spec.os.name is windows. */
            privileged?: boolean;
          };
          /** @description StartupProbe indicates that the Pod has successfully initialized.
           *     If specified, no other probes are executed until this completes successfully.
           *     If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
           *     This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
           *     when it might take a long time to load data or warm a cache, than during steady-state operation.
           *     This cannot be updated.
           *     More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
          startupProbe?: {
            /** @description Exec specifies the action to take. */
            exec?: {
              /** @description Command is the command line to execute inside the container, the working directory for the
               *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
               *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
               *     a shell, you need to explicitly call out to that shell.
               *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
              command?: string[];
            };
          };
          /** @description volumeDevices is the list of block devices to be used by the container. */
          volumeDevices?: {
            /** @description devicePath is the path inside of the container that the device will be mapped to. */
            devicePath: string;
            /** @description name must match the name of a persistentVolumeClaim in the pod */
            name: string;
          }[];
          /** @description Pod volumes to mount into the container's filesystem.
           *     Cannot be updated. */
          volumeMounts?: {
            /** @description Path within the container at which the volume should be mounted.  Must
             *     not contain ':'. */
            mountPath: string;
            /** @description This must match the Name of a Volume. */
            name: string;
            /** @description Mounted read-only if true, read-write otherwise (false or unspecified).
             *     Defaults to false. */
            readOnly?: boolean;
          }[];
        }[];
        /** @description PodSecurityContext is functionally a subset of core/v1 PodSecurityContext,
         *     preserving only fields used for allowlisting. */
        securityContext?: {
          /** @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume
           *     before being exposed inside Pod. This field will only apply to
           *     volume types which support fsGroup based ownership(and permissions).
           *     It will have no effect on ephemeral volume types such as: secret, configmaps
           *     and emptydir.
           *     Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used.
           *     Note that this field cannot be set when spec.os.name is windows. */
          fsGroupChangePolicy?: string;
        };
        volumes?: {
          /** @description gcePersistentDisk represents a GCE Disk resource that is attached to a
           *     kubelet's host machine and then exposed to the pod.
           *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
          gcePersistentDisk?: {
            /** @description fsType is filesystem type of the volume that you want to mount.
             *     Tip: Ensure that the filesystem type is supported by the host operating system.
             *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
             *     TODO: how do we prevent errors in the filesystem from compromising the machine */
            fsType?: string;
            /**
             * Format: int32
             * @description partition is the partition in the volume that you want to mount.
             *     If omitted, the default is to mount by volume name.
             *     Examples: For volume /dev/sda1, you specify the partition as "1".
             *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
             */
            partition?: number;
            /** @description readOnly here will force the ReadOnly setting in VolumeMounts.
             *     Defaults to false.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
            readOnly?: boolean;
          };
          /** @description hostPath represents a pre-existing file or directory on the host
           *     machine that is directly exposed to the container. This is generally
           *     used for system agents or other privileged things that are allowed
           *     to see the host machine. Most containers will NOT need this.
           *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
          hostPath?: {
            /** @description path of the directory on the host.
             *     If the path is a symlink, it will follow the link to the real path.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
            path: string;
          };
          /** @description name of the volume.
           *     Must be a DNS_LABEL and unique within the pod.
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name: string;
          /** @description nfs represents an NFS mount on the host that shares a pod's lifetime
           *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
          nfs?: {
            /** @description path that is exported by the NFS server.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
            path: string;
            /** @description readOnly here will force the NFS export to be mounted with read-only permissions.
             *     Defaults to false.
             *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
            readOnly?: boolean;
          };
          /** @description persistentVolumeClaimVolumeSource represents a reference to a
           *     PersistentVolumeClaim in the same namespace.
           *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
          persistentVolumeClaim?: {
            /** @description readOnly Will force the ReadOnly setting in VolumeMounts.
             *     Default false. */
            readOnly?: boolean;
          };
        }[];
      };
      metadata?: Record<string, never>;
      minGKEVersion?: string;
    };
  };
}
