import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEHubFeatureV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesGKEHubFeatureV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesGKEHubFeatureV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion?: "gkehub.cnrm.cloud.google.com/v1beta1";
    kind?: "GKEHubFeature";
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
      /** @description Immutable. The location for the resource */
      location: string;
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
      /** @description Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused. */
      spec?: {
        /** @description Fleet Observability spec. */
        fleetobservability?: {
          /** @description Fleet Observability Logging-specific spec. */
          loggingConfig?: {
            /** @description Specified if applying the default routing config to logs not specified in other configs. */
            defaultConfig?: {
              /** @description The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE */
              mode?: string;
            };
            /** @description Specified if applying the routing config to all logs for all fleet scopes. */
            fleetScopeLogsConfig?: {
              /** @description The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE */
              mode?: string;
            };
          };
        };
        /** @description Multicluster Ingress-specific spec. */
        multiclusteringress?: {
          configMembershipRef: {
            /** @description Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
             *
             *     Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
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
       * @description Output only. When the Feature resource was created.
       */
      createTime?: string;
      /**
       * Format: date-time
       * @description Output only. When the Feature resource was deleted.
       */
      deleteTime?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description State of the Feature resource itself. */
      resourceState?: {
        /** @description Whether this Feature has outstanding resources that need to be cleaned up before it can be disabled. */
        hasResources?: boolean;
        /** @description The current state of the Feature resource in the Hub API. Possible values: STATE_UNSPECIFIED, ENABLING, ACTIVE, DISABLING, UPDATING, SERVICE_UPDATING */
        state?: string;
      };
      /** @description Output only. The Hub-wide Feature state */
      state?: {
        /** @description Output only. The "running state" of the Feature in this Hub. */
        state?: {
          /** @description The high-level, machine-readable status of this Feature. Possible values: CODE_UNSPECIFIED, OK, WARNING, ERROR */
          code?: string;
          /** @description A human-readable description of the current status. */
          description?: string;
          /** @description The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" */
          updateTime?: string;
        };
      };
      /**
       * Format: date-time
       * @description Output only. When the Feature resource was last updated.
       */
      updateTime?: string;
    };
  };
}
