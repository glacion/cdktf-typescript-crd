import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesResourceManagerLienV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesResourceManagerLienV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "resourcemanager.cnrm.cloud.google.com/v1beta1",
        kind: "ResourceManagerLien",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesResourceManagerLienV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. A stable, user-visible/meaningful string identifying the origin
       *     of the Lien, intended to be inspected programmatically. Maximum length of
       *     200 characters. */
      origin: string;
      parent: {
        projectRef?: {
          /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. Concise user-visible strings indicating why an action cannot be performed
       *     on a resource. Maximum length of 200 characters. */
      reason: string;
      /** @description Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource. */
      resourceID?: string;
      /** @description Immutable. The types of operations which should be blocked as a result of this Lien.
       *     Each value should correspond to an IAM permission. The server will validate
       *     the permissions against those for which Liens are supported.  An empty
       *     list is meaningless and will be rejected.
       *     e.g. ['resourcemanager.projects.delete']. */
      restrictions: string[];
    };
  };
}
