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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
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
        /** @description The etag of the organization policy. etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. */
        etag?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description The timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds, representing when the variable was last updated. Example: "2016-10-09T12:33:37.578138407Z". */
        updateTime?: string;
      };
    };
  };
}
