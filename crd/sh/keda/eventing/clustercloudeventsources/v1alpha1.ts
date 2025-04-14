import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterCloudEventSourceV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterCloudEventSourceV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "eventing.keda.sh/v1alpha1", kind: "ClusterCloudEventSource", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterCloudEventSourceV1alpha1Config extends ManifestConfig {
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
  };
}
