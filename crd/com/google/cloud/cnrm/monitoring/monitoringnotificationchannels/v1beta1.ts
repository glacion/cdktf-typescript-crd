import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringNotificationChannelV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesMonitoringNotificationChannelV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "monitoring.cnrm.cloud.google.com/v1beta1",
        kind: "MonitoringNotificationChannel",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesMonitoringNotificationChannelV1beta1Config extends ManifestConfig {
  manifest: {
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
  };
}
