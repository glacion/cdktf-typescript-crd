import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringNotificationChannelV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMonitoringNotificationChannelV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMonitoringNotificationChannelV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "monitoring.cnrm.cloud.google.com/v1beta1";
    kind: "MonitoringNotificationChannel";
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
      /** @description An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters. */
      description?: string;
      /** @description Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future. */
      enabled?: boolean;
      /** @description If true, the notification channel will be deleted regardless
       *     of its use in alert policies (the policies will be updated
       *     to remove the channel). If false, channels that are still
       *     referenced by an existing alerting policy will fail to be
       *     deleted in a delete operation. */
      forceDelete?: boolean;
      labels?: {
        [key: string]: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Different notification type behaviors are configured primarily using the the 'labels' field on this
       *     resource. This block contains the labels which contain secrets or passwords so that they can be marked
       *     sensitive and hidden from plan output. The name of the field, eg: password, will be the key
       *     in the 'labels' map in the api request.
       *
       *     Credentials may not be specified in both locations and will cause an error. Changing from one location
       *     to a different credential configuration in the config will require an apply to update state. */
      sensitiveLabels?: {
        /** @description An authorization token for a notification channel. Channel types that support this field include: slack. */
        authToken?: {
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
        /** @description An password for a notification channel. Channel types that support this field include: webhook_basicauth. */
        password?: {
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
        /** @description An servicekey token for a notification channel. Channel types that support this field include: pagerduty. */
        serviceKey?: {
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
      };
      /** @description The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc... */
      type: string;
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
      /** @description The full REST resource name for this channel. The syntax is:
       *     projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]
       *     The [CHANNEL_ID] is automatically assigned by the server on creation. */
      name?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel. */
      verificationStatus?: string;
    };
  };
}
