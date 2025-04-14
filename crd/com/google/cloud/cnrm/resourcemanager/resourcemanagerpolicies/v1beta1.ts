import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesResourceManagerPolicyV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesResourceManagerPolicyV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "resourcemanager.cnrm.cloud.google.com/v1beta1",
        kind: "ResourceManagerPolicy",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesResourceManagerPolicyV1beta1Config extends ManifestConfig {
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
      /** @description A boolean policy is a constraint that is either enforced or not. */
      booleanPolicy?: {
        /** @description If true, then the Policy is enforced. If false, then any configuration is acceptable. */
        enforced: boolean;
      };
      /** @description Immutable. The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
      constraint: string;
      /** @description The folder on which to configure the constraint. Only one of
       *     projectRef, folderRef, or organizationRef may be specified. */
      folderRef?: {
        /** @description Allowed value: The `name` field of a `Folder` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A policy that can define specific values that are allowed or denied for the given constraint. It can also be used to allow or deny all values. . */
      listPolicy?: {
        /** @description One or the other must be set. */
        allow?: {
          /** @description The policy allows or denies all values. */
          all?: boolean;
          /** @description The policy can define specific values that are allowed or denied. */
          values?: string[];
        };
        /** @description One or the other must be set. */
        deny?: {
          /** @description The policy allows or denies all values. */
          all?: boolean;
          /** @description The policy can define specific values that are allowed or denied. */
          values?: string[];
        };
        /** @description If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. */
        inheritFromParent?: boolean;
        /** @description The Google Cloud Console will try to default to a configuration that matches the value specified in this field. */
        suggestedValue?: string;
      };
      /** @description The organization on which to configure the constraint. Only one of
       *     projectRef, folderRef, or organizationRef may be specified. */
      organizationRef?: {
        /** @description Allowed value: The `name` field of an `Organization` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The project on which to configure the constraint. Only one of
       *     projectRef, folderRef, or organizationRef may be specified. */
      projectRef?: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description A restore policy is a constraint to restore the default policy. */
      restorePolicy?: {
        /** @description May only be set to true. If set, then the default Policy is restored. */
        default: boolean;
      };
      /** @description Version of the Policy. Default version is 0. */
      version?: number;
    };
  };
}
