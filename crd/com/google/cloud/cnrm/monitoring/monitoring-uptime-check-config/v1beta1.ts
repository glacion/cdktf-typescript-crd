import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesMonitoringUptimeCheckConfigV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesMonitoringUptimeCheckConfigV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesMonitoringUptimeCheckConfigV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "monitoring.cnrm.cloud.google.com/v1beta1";
    kind?: "MonitoringUptimeCheckConfig";
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
      /** @description The content that is expected to appear in the data returned by the target server against which the check is run.  Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check. */
      contentMatchers?: {
        content: string;
        /** @description  Possible values: CONTENT_MATCHER_OPTION_UNSPECIFIED, CONTAINS_STRING, NOT_CONTAINS_STRING, MATCHES_REGEX, NOT_MATCHES_REGEX */
        matcher?: string;
      }[];
      /** @description A human-friendly name for the Uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required. */
      displayName: string;
      /** @description Contains information needed to make an HTTP or HTTPS check. */
      httpCheck?: {
        /** @description The authentication information. Optional when creating an HTTP check; defaults to empty. */
        authInfo?: {
          password: {
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
          username: string;
        };
        /** @description The request body associated with the HTTP POST request. If `content_type` is `URL_ENCODED`, the body passed in must be URL-encoded. Users can provide a `Content-Length` header via the `headers` field or the API will do so. If the `request_method` is `GET` and `body` is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note: As with all `bytes` fields JSON representations are base64 encoded. e.g.: "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=". */
        body?: string;
        /** @description Immutable. The content type to use for the check.  Possible values: TYPE_UNSPECIFIED, URL_ENCODED */
        contentType?: string;
        /** @description The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. */
        headers?: {
          [key: string]: string;
        };
        /** @description Immutable. Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if `mask_headers` is set to `true` then the headers will be obscured with `******.` */
        maskHeaders?: boolean;
        /** @description Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the `host` (specified within the `monitored_resource`) and `port` to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. */
        path?: string;
        /**
         * Format: int64
         * @description Optional (defaults to 80 when `use_ssl` is `false`, and 443 when `use_ssl` is `true`). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the `monitored_resource`) and `path` to construct the full URL.
         */
        port?: number;
        /** @description Immutable. The HTTP request method to use for the check. If set to `METHOD_UNSPECIFIED` then `request_method` defaults to `GET`. */
        requestMethod?: string;
        /** @description If `true`, use HTTPS instead of HTTP to run the check. */
        useSsl?: boolean;
        /** @description Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where `monitored_resource` is set to `uptime_url`. If `use_ssl` is `false`, setting `validate_ssl` to `true` has no effect. */
        validateSsl?: boolean;
      };
      /** @description Immutable. The [monitored resource](https://cloud.google.com/monitoring/api/resources) associated with the configuration. The following monitored resource types are supported for Uptime checks:   `uptime_url`,   `gce_instance`,   `gae_app`,   `aws_ec2_instance`,   `aws_elb_load_balancer` */
      monitoredResource?: {
        /** @description Immutable. */
        filterLabels: {
          [key: string]: string;
        };
        /** @description Immutable. */
        type: string;
      };
      /** @description How often, in seconds, the Uptime check is performed. Currently, the only supported values are `60s` (1 minute), `300s` (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional, defaults to `60s`. */
      period?: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for this uptime check config.
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The group resource associated with the configuration. */
      resourceGroup?: {
        /** @description Immutable. */
        groupRef?: {
          /** @description The group of resources being monitored. Should be only the `[GROUP_ID]`, and not the full-path `projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]`.
           *
           *     Allowed value: The Google Cloud resource name of a `MonitoringGroup` resource (format: `projects/{{project}}/groups/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. The resource type of the group members. Possible values: RESOURCE_TYPE_UNSPECIFIED, INSTANCE, AWS_ELB_LOAD_BALANCER */
        resourceType?: string;
      };
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations.  Not specifying this field will result in Uptime checks running from all available regions. */
      selectedRegions?: string[];
      /** @description Contains information needed to make a TCP check. */
      tcpCheck?: {
        /**
         * Format: int64
         * @description The TCP port on the server against which to run the check. Will be combined with host (specified within the `monitored_resource`) to construct the full URL. Required.
         */
        port: number;
      };
      /** @description The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required. */
      timeout: string;
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
    };
  };
}
