import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudEventSourceV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudEventSourceV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "eventing.keda.sh/v1alpha1", kind: "CloudEventSource", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudEventSourceV1alpha1Config extends ManifestConfig {
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
    /** @description CloudEventSource defines how a KEDA event will be sent to event sink */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description CloudEventSourceSpec defines the spec of CloudEventSource */
      spec: {
        /** @description AuthenticationRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that
         *     is used to authenticate the scaler with the environment */
        authenticationRef?: {
          /** @description Kind of the resource being referred to. Defaults to TriggerAuthentication. */
          kind?: string;
          name: string;
        };
        clusterName?: string;
        /** @description Destination defines the various ways to emit events */
        destination: {
          azureEventGridTopic?: {
            endpoint: string;
          };
          http?: {
            uri: string;
          };
        };
        /** @description EventSubscription defines filters for events */
        eventSubscription?: {
          excludedEventTypes?: (
            | "keda.scaledobject.ready.v1"
            | "keda.scaledobject.failed.v1"
            | "keda.scaledobject.removed.v1"
            | "keda.scaledjob.ready.v1"
            | "keda.scaledjob.failed.v1"
            | "keda.scaledjob.removed.v1"
            | "keda.authentication.triggerauthentication.created.v1"
            | "keda.authentication.triggerauthentication.updated.v1"
            | "keda.authentication.triggerauthentication.removed.v1"
            | "keda.authentication.clustertriggerauthentication.created.v1"
            | "keda.authentication.clustertriggerauthentication.updated.v1"
            | "keda.authentication.clustertriggerauthentication.removed.v1"
          )[];
          includedEventTypes?: (
            | "keda.scaledobject.ready.v1"
            | "keda.scaledobject.failed.v1"
            | "keda.scaledobject.removed.v1"
            | "keda.scaledjob.ready.v1"
            | "keda.scaledjob.failed.v1"
            | "keda.scaledjob.removed.v1"
            | "keda.authentication.triggerauthentication.created.v1"
            | "keda.authentication.triggerauthentication.updated.v1"
            | "keda.authentication.triggerauthentication.removed.v1"
            | "keda.authentication.clustertriggerauthentication.created.v1"
            | "keda.authentication.clustertriggerauthentication.updated.v1"
            | "keda.authentication.clustertriggerauthentication.removed.v1"
          )[];
        };
      };
      /** @description CloudEventSourceStatus defines the observed state of CloudEventSource */
      status?: {
        /** @description Conditions an array representation to store multiple Conditions */
        conditions?: {
          /** @description A human readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description Type of condition */
          type: string;
        }[];
      };
    };
  };
}
