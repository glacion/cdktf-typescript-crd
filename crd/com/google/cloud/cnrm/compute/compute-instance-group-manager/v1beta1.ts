import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeInstanceGroupManagerV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeInstanceGroupManagerV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeInstanceGroupManagerV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "compute.cnrm.cloud.google.com/v1beta1";
    kind?: "ComputeInstanceGroupManager";
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
      /** @description The autohealing policy for this managed instance group. You can specify only one value. */
      autoHealingPolicies?: {
        healthCheckRef?: {
          /** @description The URL for the health check that signals autohealing.
           *
           *     Allowed value: The `selfLink` field of a `ComputeHealthCheck` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /**
         * Format: int64
         * @description The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. This initial delay allows instances to initialize and run their startup scripts before the instance group determines that they are UNHEALTHY. This prevents the managed instance group from recreating its instances prematurely. This value must be from range [0, 3600].
         */
        initialDelaySec?: number;
      }[];
      /** @description The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). */
      baseInstanceName?: string;
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Policy specifying the intended distribution of managed instances across zones in a regional managed instance group. */
      distributionPolicy?: {
        /** @description The distribution shape to which the group converges either proactively or on resize events (depending on the value set in `updatePolicy.instanceRedistributionType`). Possible values: TARGET_SHAPE_UNSPECIFIED, ANY, BALANCED, ANY_SINGLE_ZONE */
        targetShape?: string;
        /** @description Immutable. Zones where the regional managed instance group will create and manage its instances. */
        zones?: {
          /** @description Immutable. The URL of the [zone](/compute/docs/regions-zones/#available). The zone must exist in the region where the managed instance group is located. */
          zone?: string;
        }[];
      };
      /** @description The action to perform in case of zone failure. Only one value is supported, `NO_FAILOVER`. The default is `NO_FAILOVER`. Possible values: UNKNOWN, NO_FAILOVER */
      failoverAction?: string;
      instanceTemplateRef?: {
        /** @description The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run `recreateInstances`, run `applyUpdatesToInstances`, or set the group's `updatePolicy.type` to `PROACTIVE`.
         *
         *     Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The location of this resource. */
      location?: string;
      /** @description Immutable. Named ports configured for the Instance Groups complementary to this Instance Group Manager. */
      namedPorts?: {
        /** @description Immutable. The name for this named port. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). */
        name?: string;
        /**
         * Format: int64
         * @description Immutable. The port number, which can be a value between 1 and 65535.
         */
        port?: number;
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
      serviceAccountRef?: {
        /** @description The service account to be used as credentials for all operations performed by the managed instance group on instances. The service accounts needs all permissions required to create and delete instances. By default, the service account: {projectNumber}@cloudservices.gserviceaccount.com is used.
         *
         *     Allowed value: The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Stateful configuration for this Instanced Group Manager */
      statefulPolicy?: {
        preservedState?: {
          /** @description Disks created on the instances that will be preserved on instance delete, update, etc. This map is keyed with the device names of the disks. */
          disks?: {
            [key: string]: {
              /** @description These stateful disks will never be deleted during autohealing, update or VM instance recreate operations. This flag is used to configure if the disk should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Note: disks attached in READ_ONLY mode cannot be auto-deleted. Possible values: NEVER, ON_PERMANENT_INSTANCE_DELETION */
              autoDelete?: string;
            };
          };
          /** @description External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. */
          externalIps?: {
            [key: string]: {
              /** @description These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Possible values: NEVER, ON_PERMANENT_INSTANCE_DELETION */
              autoDelete?: string;
            };
          };
          /** @description Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. */
          internalIps?: {
            [key: string]: {
              /** @description These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Possible values: NEVER, ON_PERMANENT_INSTANCE_DELETION */
              autoDelete?: string;
            };
          };
        };
      };
      targetPools?: ({
        /** @description Allowed value: The `selfLink` field of a `ComputeTargetPool` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /**
       * Format: int64
       * @description The target number of running instances for this managed instance group. You can reduce this number by using the instanceGroupManager deleteInstances or abandonInstances methods. Resizing the group also changes this number.
       */
      targetSize: number;
      /** @description The update policy for this managed instance group. */
      updatePolicy?: {
        /** @description The [instance redistribution policy](/compute/docs/instance-groups/regional-migs#proactive_instance_redistribution) for regional managed instance groups. Valid values are: - `PROACTIVE` (default): The group attempts to maintain an even distribution of VM instances across zones in the region. - `NONE`: For non-autoscaled groups, proactive redistribution is disabled. */
        instanceRedistributionType?: string;
        /** @description The maximum number of instances that can be created above the specified `targetSize` during the update process. This value can be either a fixed number or, if the group has 10 or more instances, a percentage. If you set a percentage, the number of instances is rounded if necessary. The default value for `maxSurge` is a fixed value equal to the number of zones in which the managed instance group operates. At least one of either `maxSurge` or `maxUnavailable` must be greater than 0. Learn more about [`maxSurge`](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#max_surge). */
        maxSurge?: {
          /**
           * Format: int64
           * @description Specifies a fixed number of VM instances. This must be a positive integer.
           */
          fixed?: number;
          /**
           * Format: int64
           * @description Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify `80` for 80%.
           */
          percent?: number;
        };
        /** @description The maximum number of instances that can be unavailable during the update process. An instance is considered available if all of the following conditions are satisfied: - The instance's [status](/compute/docs/instances/checking-instance-status) is `RUNNING`. - If there is a [health check](/compute/docs/instance-groups/autohealing-instances-in-migs) on the instance group, the instance's health check status must be `HEALTHY` at least once. If there is no health check on the group, then the instance only needs to have a status of `RUNNING` to be considered available. This value can be either a fixed number or, if the group has 10 or more instances, a percentage. If you set a percentage, the number of instances is rounded if necessary. The default value for `maxUnavailable` is a fixed value equal to the number of zones in which the managed instance group operates. At least one of either `maxSurge` or `maxUnavailable` must be greater than 0. Learn more about [`maxUnavailable`](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#max_unavailable). */
        maxUnavailable?: {
          /**
           * Format: int64
           * @description Specifies a fixed number of VM instances. This must be a positive integer.
           */
          fixed?: number;
          /**
           * Format: int64
           * @description Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify `80` for 80%.
           */
          percent?: number;
        };
        /**
         * Format: int64
         * @description Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600].
         */
        minReadySec?: number;
        /** @description Minimal action to be taken on an instance. You can specify either `RESTART` to restart existing instances or `REPLACE` to delete and create new instances from the target template. If you specify a `RESTART`, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action. */
        minimalAction?: string;
        /** @description Most disruptive action that is allowed to be taken on an instance. You can specify either `NONE` to forbid any actions, `REFRESH` to allow actions that do not need instance restart, `RESTART` to allow actions that can be applied without instance replacing or `REPLACE` to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all. */
        mostDisruptiveAllowedAction?: string;
        /** @description What action should be used to replace instances. See minimal_action.REPLACE Possible values: SUBSTITUTE, RECREATE */
        replacementMethod?: string;
        /** @description The type of update process. You can specify either `PROACTIVE` so that the instance group manager proactively executes actions in order to bring instances to their target versions or `OPPORTUNISTIC` so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or `recreateInstances` calls). */
        type?: string;
      };
      /** @description Specifies the instance templates used by this managed instance group to create instances. Each version is defined by an `instanceTemplate` and a `name`. Every version can appear at most once per instance group. This field overrides the top-level `instanceTemplate` field. Read more about the [relationships between these fields](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#relationship_between_versions_and_instancetemplate_properties_for_a_managed_instance_group). Exactly one `version` must leave the `targetSize` field unset. That version will be applied to all remaining instances. For more information, read about [canary updates](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#starting_a_canary_update). */
      versions?: {
        instanceTemplateRef?: {
          /** @description The URL of the instance template that is specified for this managed instance group. The group uses this template to create new instances in the managed instance group until the `targetSize` for this version is reached. The templates for existing instances in the group do not change unless you run `recreateInstances`, run `applyUpdatesToInstances`, or set the group's `updatePolicy.type` to `PROACTIVE`; in those cases, existing instances are updated until the `targetSize` for this version is reached.
           *
           *     Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Name of the version. Unique among all versions in the scope of this managed instance group. */
        name?: string;
        /** @description Specifies the intended number of instances to be created from the `instanceTemplate`. The final number of instances created from the template will be equal to: - If expressed as a fixed number, the minimum of either `targetSize.fixed` or `instanceGroupManager.targetSize` is used. - if expressed as a `percent`, the `targetSize` would be `(targetSize.percent/100 * InstanceGroupManager.targetSize)` If there is a remainder, the number is rounded. If unset, this version will update any remaining instances not updated by another `version`. Read [Starting a canary update](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#starting_a_canary_update) for more information. */
        targetSize?: {
          /**
           * Format: int64
           * @description [Output Only] Absolute value of VM instances calculated based on the specific mode. - If the value is `fixed`, then the `calculated` value is equal to the `fixed` value. - If the value is a `percent`, then the `calculated` value is `percent`/100 * `targetSize`. For example, the `calculated` value of a 80% of a managed instance group with 150 instances would be (80/100 * 150) = 120 VM instances. If there is a remainder, the number is rounded.
           */
          calculated?: number;
          /**
           * Format: int64
           * @description Specifies a fixed number of VM instances. This must be a positive integer.
           */
          fixed?: number;
          /**
           * Format: int64
           * @description Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify `80` for 80%.
           */
          percent?: number;
        };
      }[];
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
      /** @description The creation timestamp for this managed instance group in \[RFC3339\](https://www.ietf.org/rfc/rfc3339.txt) text format. */
      creationTimestamp?: string;
      /** @description [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions. */
      currentActions?: {
        /**
         * Format: int64
         * @description [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
         */
        abandoning?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully. If you have disabled creation retries, this field will not be populated; instead, the `creatingWithoutRetries` field will be populated.
         */
        creating?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group's `targetSize` value accordingly.
         */
        creatingWithoutRetries?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
         */
        deleting?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
         */
        none?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
         */
        recreating?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
         */
        refreshing?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
         */
        restarting?: number;
        /**
         * Format: int64
         * @description [Output Only] The number of instances in the managed instance group that are being verified. See the `managedInstances[].currentAction` property in the `listManagedInstances` method documentation.
         */
        verifying?: number;
      };
      /** @description Fingerprint of this resource. This field may be used in optimistic locking. It will be ignored when inserting an InstanceGroupManager. An up-to-date fingerprint must be provided in order to update the InstanceGroupManager, otherwise the request will fail with error `412 conditionNotMet`. To see the latest fingerprint, make a `get()` request to retrieve an InstanceGroupManager. */
      fingerprint?: string;
      /**
       * Format: int64
       * @description [Output Only] A unique identifier for this resource type. The server generates this identifier.
       */
      id?: number;
      /** @description [Output Only] The URL of the Instance Group resource. */
      instanceGroup?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description [Output Only] The URL of the [region](/compute/docs/regions-zones/#available) where the managed instance group resides (for regional resources). */
      region?: string;
      /** @description [Output Only] The URL for this managed instance group. The server defines this URL. */
      selfLink?: string;
      /** @description [Output Only] The status of this managed instance group. */
      status?: {
        /** @description [Output Only] The URL of the [Autoscaler](/compute/docs/autoscaler/) that targets this instance group manager. */
        autoscaler?: string;
        /** @description [Output Only] A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified. */
        isStable?: boolean;
        /** @description [Output Only] Stateful status of the given Instance Group Manager. */
        stateful?: {
          /** @description [Output Only] A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions. */
          hasStatefulConfig?: boolean;
          /** @description [Output Only] A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful config even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions. This field is deprecated in favor of has_stateful_config. */
          isStateful?: boolean;
          /** @description [Output Only] Status of per-instance configs on the instance. */
          perInstanceConfigs?: {
            /** @description A bit indicating if all of the group's per-instance configs (listed in the output of a listPerInstanceConfigs API call) have status `EFFECTIVE` or there are no per-instance-configs. */
            allEffective?: boolean;
          };
        };
        /** @description [Output Only] A status of consistency of Instances' versions with their target version specified by `version` field on Instance Group Manager. */
        versionTarget?: {
          /** @description [Output Only] A bit indicating whether version target has been reached in this managed instance group, i.e. all instances are in their target version. Instances' target version are specified by `version` field on Instance Group Manager. */
          isReached?: boolean;
        };
      };
      updatePolicy?: {
        maxSurge?: {
          /**
           * Format: int64
           * @description [Output Only] Absolute value of VM instances calculated based on the specific mode. - If the value is `fixed`, then the `calculated` value is equal to the `fixed` value. - If the value is a `percent`, then the `calculated` value is `percent`/100 * `targetSize`. For example, the `calculated` value of a 80% of a managed instance group with 150 instances would be (80/100 * 150) = 120 VM instances. If there is a remainder, the number is rounded.
           */
          calculated?: number;
        };
        maxUnavailable?: {
          /**
           * Format: int64
           * @description [Output Only] Absolute value of VM instances calculated based on the specific mode. - If the value is `fixed`, then the `calculated` value is equal to the `fixed` value. - If the value is a `percent`, then the `calculated` value is `percent`/100 * `targetSize`. For example, the `calculated` value of a 80% of a managed instance group with 150 instances would be (80/100 * 150) = 120 VM instances. If there is a remainder, the number is rounded.
           */
          calculated?: number;
        };
      };
      /** @description [Output Only] The URL of a [zone](/compute/docs/regions-zones/#available) where the managed instance group is located (for zonal resources). */
      zone?: string;
    };
  };
}
