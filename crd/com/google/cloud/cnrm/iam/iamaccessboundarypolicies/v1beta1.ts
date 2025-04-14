import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesIAMAccessBoundaryPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesIAMAccessBoundaryPolicyV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "iam.cnrm.cloud.google.com/v1beta1", kind: "IAMAccessBoundaryPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesIAMAccessBoundaryPolicyV1beta1Config extends ManifestConfig {
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
      /** @description The display name of the rule. */
      displayName?: string;
      projectRef: {
        /** @description Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Rules to be applied. */
      rules: {
        /** @description An access boundary rule in an IAM policy. */
        accessBoundaryRule?: {
          /** @description The availability condition further constrains the access allowed by the access boundary rule. */
          availabilityCondition?: {
            /** @description Description of the expression. This is a longer text which describes the expression,
             *     e.g. when hovered over it in a UI. */
            description?: string;
            /** @description Textual representation of an expression in Common Expression Language syntax. */
            expression: string;
            /** @description String indicating the location of the expression for error reporting,
             *     e.g. a file name and a position in the file. */
            location?: string;
            /** @description Title for the expression, i.e. a short string describing its purpose.
             *     This can be used e.g. in UIs which allow to enter the expression. */
            title?: string;
          };
          /** @description A list of permissions that may be allowed for use on the specified resource. */
          availablePermissions?: string[];
          /** @description The full resource name of a Google Cloud resource entity. */
          availableResource?: string;
        };
        /** @description The description of the rule. */
        description?: string;
      }[];
    };
  };
}
