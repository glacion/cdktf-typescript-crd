import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeRegionNetworkEndpointGroupV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeRegionNetworkEndpointGroupV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeRegionNetworkEndpointGroupV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeRegionNetworkEndpointGroup";
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
      /** @description Immutable. Only valid when networkEndpointType is "SERVERLESS".
       *     Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set. */
      cloudFunction?: {
        /** @description Immutable. A user-defined name of the Cloud Function.
         *     The function name is case-sensitive and must be 1-63 characters long.
         *     Example value: "func1". */
        functionRef?: {
          /** @description Allowed value: The `name` field of a `CloudFunctionsFunction` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. A template to parse function field from a request URL. URL mask allows
         *     for routing to multiple Cloud Functions without having to create
         *     multiple Network Endpoint Groups and backend services.
         *
         *     For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
         *     can be backed by the same Serverless NEG with URL mask "/". The URL mask
         *     will parse them to { function = "function1" } and { function = "function2" } respectively. */
        urlMask?: string;
      };
      /** @description Immutable. Only valid when networkEndpointType is "SERVERLESS".
       *     Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set. */
      cloudRun?: {
        /** @description Immutable. Cloud Run service is the main resource of Cloud Run.
         *     The service must be 1-63 characters long, and comply with RFC1035.
         *     Example value: "run-service". */
        serviceRef?: {
          /** @description Allowed value: The `name` field of a `RunService` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Immutable. Cloud Run tag represents the "named-revision" to provide
         *     additional fine-grained traffic routing information.
         *     The tag must be 1-63 characters long, and comply with RFC1035.
         *     Example value: "revision-0010". */
        tag?: string;
        /** @description Immutable. A template to parse service and tag fields from a request URL.
         *     URL mask allows for routing to multiple Run services without having
         *     to create multiple network endpoint groups and backend services.
         *
         *     For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
         *     an be backed by the same Serverless Network Endpoint Group (NEG) with
         *     URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
         *     and { service="bar2", tag="foo2" } respectively. */
        urlMask?: string;
      };
      /** @description Immutable. An optional description of this resource. Provide this property when
       *     you create the resource. */
      description?: string;
      /** @description Immutable. Type of network endpoints in this network endpoint group. Defaults to SERVERLESS Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT"]. */
      networkEndpointType?: string;
      /** @description Immutable. This field is only used for PSC.
       *     The URL of the network to which all network endpoints in the NEG belong. Uses
       *     "default" project network if unspecified. */
      networkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The target service url used to set up private service connection to
       *     a Google API or a PSC Producer Service Attachment. */
      pscTargetService?: string;
      /** @description Immutable. A reference to the region where the Serverless NEGs Reside. */
      region: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Immutable. This field is only used for PSC.
       *     Optional URL of the subnetwork to which all network endpoints in the NEG belong. */
      subnetworkRef?: {
        /** @description Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource. */
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
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
    };
  };
}
