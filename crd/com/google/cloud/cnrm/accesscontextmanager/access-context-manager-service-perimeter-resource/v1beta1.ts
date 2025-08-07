import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class AccesscontextmanagerCnrmCloudGoogleComAccessContextManagerServicePerimeterResourceV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: AccesscontextmanagerCnrmCloudGoogleComAccessContextManagerServicePerimeterResourceV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface AccesscontextmanagerCnrmCloudGoogleComAccessContextManagerServicePerimeterResourceV1beta1Config
  extends ManifestConfig {
  manifest: {
    apiVersion: "accesscontextmanager.cnrm.cloud.google.com/v1beta1";
    kind: "AccessContextManagerServicePerimeterResource";
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
      /** @description Only the `external` field is supported to configure the reference.
       *
       *     The name of the Service Perimeter to add this resource to.
       *     Referencing a resource name leads to recursive reference and Config Connector does not support the feature for now. */
      perimeterNameRef: {
        /** @description Allowed value: The `name` field of an `AccessContextManagerServicePerimeter` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A GCP resource that is inside of the service perimeter. */
      resourceRef: {
        /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
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
    };
  };
}
