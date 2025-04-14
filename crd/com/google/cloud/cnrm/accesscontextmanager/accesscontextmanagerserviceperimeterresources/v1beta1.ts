import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAccessContextManagerServicePerimeterResourceV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesAccessContextManagerServicePerimeterResourceV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "accesscontextmanager.cnrm.cloud.google.com/v1beta1",
        kind: "AccessContextManagerServicePerimeterResource",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesAccessContextManagerServicePerimeterResourceV1beta1Config extends ManifestConfig {
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
  };
}
