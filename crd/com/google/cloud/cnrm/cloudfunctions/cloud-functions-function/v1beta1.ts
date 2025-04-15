import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudFunctionsFunctionV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesCloudFunctionsFunctionV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesCloudFunctionsFunctionV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "cloudfunctions.cnrm.cloud.google.com/v1beta1";
    kind: "CloudFunctionsFunction";
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
      /**
       * Format: int64
       * @description Memory (in MB), available to the function. Default value is 256MB. Allowed values are: 128MB, 256MB, 512MB, 1024MB, and 2048MB.
       */
      availableMemoryMb?: number;
      /** @description User-provided description of a function. */
      description?: string;
      /** @description Immutable. The name of the function (as defined in source code) that will be
       *     executed. Defaults to the resource name suffix, if not specified. For
       *     backward compatibility, if function with given name is not found, then the
       *     system will try to use function named "function".
       *     For Node.js this is name of a function exported by the module specified
       *     in `source_location`. */
      entryPoint?: string;
      /** @description Environment variables that shall be available during function execution. */
      environmentVariables?: {
        [key: string]: string;
      };
      /** @description Immutable. A source that fires events in response to a condition in another service. */
      eventTrigger?: {
        /** @description Immutable. Required. The type of event to observe. For example:
         *     `providers/cloud.storage/eventTypes/object.change` and
         *     `providers/cloud.pubsub/eventTypes/topic.publish`.
         *
         *     Event types match pattern `providers/*\/eventTypes/*.*`.
         *     The pattern contains:
         *
         *     1. namespace: For example, `cloud.storage` and
         *        `google.firebase.analytics`.
         *     2. resource type: The type of resource on which event occurs. For
         *        example, the Google Cloud Storage API includes the type `object`.
         *     3. action: The action that generates the event. For example, action for
         *        a Google Cloud Storage Object is 'change'.
         *     These parts are lower case. */
        eventType: string;
        /** @description Immutable. Specifies policy for failed executions. */
        failurePolicy?: boolean;
        /** @description Immutable. */
        resourceRef: {
          /** @description Required. The resource(s) from which to observe events, for example,
           *     `projects/_/buckets/myBucket`.
           *
           *     Not all syntactically correct values are accepted by all services. For
           *     example:
           *
           *     1. The authorization model must support it. Google Cloud Functions
           *        only allows EventTriggers to be deployed that observe resources in the
           *        same project as the `Function`.
           *     2. The resource type must match the pattern expected for an
           *        `event_type`. For example, an `EventTrigger` that has an
           *        `event_type` of "google.pubsub.topic.publish" should have a resource
           *        that matches Google Cloud Pub/Sub topics.
           *
           *     Additionally, some services may support short names when creating an
           *     `EventTrigger`. These will always be returned in the normalized "long"
           *     format.
           *
           *     See each *service's* documentation for supported formats.
           *
           *     Allowed values:
           *     * The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
           *     * The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`). */
          external?: string;
          /** @description Kind of the referent. Allowed values: StorageBucket,PubSubTopic */
          kind?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. The hostname of the service that should be observed.
         *
         *     If no string is provided, the default service implementing the API will
         *     be used. For example, `storage.googleapis.com` is the default for all
         *     event types in the `google.storage` namespace. */
        service?: string;
      };
      /** @description Immutable. An HTTPS endpoint type of source that can be triggered via URL. */
      httpsTrigger?: {
        /** @description Immutable. Both HTTP and HTTPS requests with URLs that match the handler succeed without redirects. The application can examine the request to determine which protocol was used and respond accordingly. Possible values: SECURITY_LEVEL_UNSPECIFIED, SECURE_ALWAYS, SECURE_OPTIONAL */
        securityLevel?: string;
      };
      /** @description The ingress settings for the function, controlling what traffic can reach
       *     it. Possible values: INGRESS_SETTINGS_UNSPECIFIED, ALLOW_ALL, ALLOW_INTERNAL_ONLY, ALLOW_INTERNAL_AND_GCLB */
      ingressSettings?: string;
      /**
       * Format: int64
       * @description The limit on the maximum number of function instances that may coexist at a
       *     given time.
       */
      maxInstances?: number;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project id of the function.
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The name of the Cloud Functions region of the function. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description The runtime in which to run the function. Required when deploying a new
       *     function, optional when updating an existing function. For a complete
       *     list of possible choices, see the
       *     [`gcloud` command
       *     reference](/sdk/gcloud/reference/functions/deploy#--runtime).
       *      */
      runtime: string;
      /** @description Immutable. */
      serviceAccountRef?: {
        /** @description The email of the function's service account. If empty, defaults to
         *     `{project_id}@appspot.gserviceaccount.com`.
         *
         *     Allowed value: The `email` field of an `IAMServiceAccount` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The Google Cloud Storage URL, starting with gs://, pointing to the zip archive which contains the function. */
      sourceArchiveUrl?: string;
      /** @description Immutable. Represents parameters related to source repository where a function is hosted. */
      sourceRepository?: {
        /** @description Immutable. The URL pointing to the hosted repository where the function is defined.
         *     There are supported Cloud Source Repository URLs in the following
         *     formats:
         *
         *     To refer to a specific commit:
         *     `https://source.developers.google.com/projects/*\/repos/*\/revisions/*\/paths/*`
         *     To refer to a moveable alias (branch):
         *     `https://source.developers.google.com/projects/*\/repos/*\/moveable-aliases/*\/paths/*`
         *     In particular, to refer to HEAD use `master` moveable alias.
         *     To refer to a specific fixed alias (tag):
         *     `https://source.developers.google.com/projects/*\/repos/*\/fixed-aliases/*\/paths/*`
         *
         *     You may omit `paths/*` if you want to use the main directory. */
        url: string;
      };
      /** @description The function execution timeout. Execution is considered failed and
       *     can be terminated if the function is not completed at the end of the
       *     timeout period. Defaults to 60 seconds. */
      timeout?: string;
      /** @description The egress settings for the connector, controlling what traffic is diverted
       *     through it. Possible values: VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED, PRIVATE_RANGES_ONLY, ALL_TRAFFIC */
      vpcConnectorEgressSettings?: string;
      vpcConnectorRef?: {
        /** @description The VPC Network Connector that this cloud function can connect to. It can
         *     be either the fully-qualified URI, or the short name of the network
         *     connector resource. The format of this field is
         *     `projects/*\/locations/*\/connectors/*`
         *
         *     Allowed value: The Google Cloud resource name of a `VPCAccessConnector` resource (format: `projects/{{project}}/locations/{{location}}/connectors/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
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
      httpsTrigger?: {
        /** @description Output only. The deployed url for the function. */
        url?: string;
      };
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      sourceRepository?: {
        /** @description Output only. The URL pointing to the hosted repository where the function
         *     were defined at the time of deployment. It always points to a specific
         *     commit in the format described above. */
        deployedUrl?: string;
      };
      /** @description Output only. Status of the function deployment. Possible values: CLOUD_FUNCTION_STATUS_UNSPECIFIED, ACTIVE, OFFLINE, DEPLOY_IN_PROGRESS, DELETE_IN_PROGRESS, UNKNOWN */
      status?: string;
      /** @description Output only. The last update timestamp of a Cloud Function in RFC3339 UTC 'Zulu' format, with nanosecond resolution and up to nine fractional digits. */
      updateTime?: string;
      /**
       * Format: int64
       * @description Output only. The version identifier of the Cloud Function. Each deployment attempt
       *     results in a new version of a function being created.
       */
      versionId?: number;
    };
  };
}
