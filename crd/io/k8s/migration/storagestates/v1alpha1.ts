import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesStorageStateV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesStorageStateV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "migration.k8s.io/v1alpha1", kind: "StorageState", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesStorageStateV1alpha1Config extends ManifestConfig {
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
    /** @description The state of the storage of a specific resource. */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: {
        /** @description The name must be "<.spec.resource.resouce>.<.spec.resource.group>". */
        name?: string;
      };
      /** @description Specification of the storage state. */
      spec?: {
        /** @description The resource this storageState is about. */
        resource?: {
          /** @description The name of the group. */
          group?: string;
          /** @description The name of the resource. */
          resource?: string;
        };
      };
      /** @description Status of the storage state. */
      status?: {
        /** @description The hash value of the current storage version, as shown in the discovery document served by the API server. Storage Version is the version to which objects are converted to before persisted. */
        currentStorageVersionHash?: string;
        /**
         * Format: date-time
         * @description LastHeartbeatTime is the last time the storage migration triggering controller checks the storage version hash of this resource in the discovery document and updates this field.
         */
        lastHeartbeatTime?: string;
        /** @description The hash values of storage versions that persisted instances of spec.resource might still be encoded in. "Unknown" is a valid value in the list, and is the default value. It is not safe to upgrade or downgrade to an apiserver binary that does not support all versions listed in this field, or if "Unknown" is listed. Once the storage version migration for this resource has completed, the value of this field is refined to only contain the currentStorageVersionHash. Once the apiserver has changed the storage version, the new storage version is appended to the list. */
        persistedStorageVersionHashes?: string[];
      };
    };
  };
}
