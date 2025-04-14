import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesCloudIdentityGroupV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesCloudIdentityGroupV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "cloudidentity.cnrm.cloud.google.com/v1beta1", kind: "CloudIdentityGroup", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesCloudIdentityGroupV1beta1Config extends ManifestConfig {
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
      /** @description An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters. */
      description?: string;
      /** @description The display name of the `Group`. */
      displayName?: string;
      /** @description Immutable. EntityKey of the Group. */
      groupKey: {
        /** @description Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
        id: string;
        /** @description Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
        namespace?: string;
      };
      /** @description Immutable. The initial configuration options for creating a Group. See the [API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig) for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]. */
      initialGroupConfig?: string;
      /** @description One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value. Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added. Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic. Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value. */
      labels: {
        [key: string]: string;
      };
      /** @description Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
      parent: string;
      /** @description Immutable. The CloudIdentityGroup name. If not given, the metadata.name will be used. */
      resourceID?: string;
    };
  };
}
