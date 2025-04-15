import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVolumeSnapshotContentV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesVolumeSnapshotContentV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesVolumeSnapshotContentV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "snapshot.storage.k8s.io/v1beta1";
    kind: "VolumeSnapshotContent";
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
    /** @description spec defines properties of a VolumeSnapshotContent created by the underlying storage system. Required. */
    spec: {
      /** @description deletionPolicy determines whether this VolumeSnapshotContent and its physical snapshot on the underlying storage system should be deleted when its bound VolumeSnapshot is deleted. Supported values are "Retain" and "Delete". "Retain" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. "Delete" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. For dynamically provisioned snapshots, this field will automatically be filled in by the CSI snapshotter sidecar with the "DeletionPolicy" field defined in the corresponding VolumeSnapshotClass. For pre-existing snapshots, users MUST specify this field when creating the  VolumeSnapshotContent object. Required. */
      deletionPolicy: string;
      /** @description driver is the name of the CSI driver used to create the physical snapshot on the underlying storage system. This MUST be the same as the name returned by the CSI GetPluginName() call for that driver. Required. */
      driver: string;
      /** @description source specifies whether the snapshot is (or should be) dynamically provisioned or already exists, and just requires a Kubernetes object representation. This field is immutable after creation. Required. */
      source: {
        /** @description snapshotHandle specifies the CSI "snapshot_id" of a pre-existing snapshot on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable. */
        snapshotHandle?: string;
        /** @description volumeHandle specifies the CSI "volume_id" of the volume from which a snapshot should be dynamically taken from. This field is immutable. */
        volumeHandle?: string;
      };
      /** @description name of the VolumeSnapshotClass from which this snapshot was (or will be) created. Note that after provisioning, the VolumeSnapshotClass may be deleted or recreated with different set of values, and as such, should not be referenced post-snapshot creation. */
      volumeSnapshotClassName?: string;
      /** @description volumeSnapshotRef specifies the VolumeSnapshot object to which this VolumeSnapshotContent object is bound. VolumeSnapshot.Spec.VolumeSnapshotContentName field must reference to this VolumeSnapshotContent's name for the bidirectional binding to be valid. For a pre-existing VolumeSnapshotContent object, name and namespace of the VolumeSnapshot object MUST be provided for binding to happen. This field is immutable after creation. Required. */
      volumeSnapshotRef: {
        /** @description API version of the referent. */
        apiVersion?: string;
        /** @description If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future. */
        fieldPath?: string;
        /** @description Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
        kind?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
        /** @description Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
        resourceVersion?: string;
        /** @description UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
        uid?: string;
      };
    };
    /** @description status represents the current information of a snapshot. */
    status?: {
      /**
       * Format: int64
       * @description creationTime is the timestamp when the point-in-time snapshot is taken by the underlying storage system. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "creation_time" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "creation_time" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. If not specified, it indicates the creation time is unknown. The format of this field is a Unix nanoseconds time encoded as an int64. On Unix, the command `date +%s%N` returns the current time in nanoseconds since 1970-01-01 00:00:00 UTC.
       */
      creationTime?: number;
      /** @description error is the last observed error during snapshot creation, if any. Upon success after retry, this error field will be cleared. */
      error?: {
        /** @description message is a string detailing the encountered error during snapshot creation if specified. NOTE: message may be logged, and it should not contain sensitive information. */
        message?: string;
        /**
         * Format: date-time
         * @description time is the timestamp when the error was encountered.
         */
        time?: string;
      };
      /** @description readyToUse indicates if a snapshot is ready to be used to restore a volume. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "ready_to_use" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "ready_to_use" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it, otherwise, this field will be set to "True". If not specified, it means the readiness of a snapshot is unknown. */
      readyToUse?: boolean;
      /**
       * Format: int64
       * @description restoreSize represents the complete size of the snapshot in bytes. In dynamic snapshot creation case, this field will be filled in by the CSI snapshotter sidecar with the "size_bytes" value returned from CSI "CreateSnapshot" gRPC call. For a pre-existing snapshot, this field will be filled with the "size_bytes" value returned from the CSI "ListSnapshots" gRPC call if the driver supports it. When restoring a volume from this snapshot, the size of the volume MUST NOT be smaller than the restoreSize if it is specified, otherwise the restoration will fail. If not specified, it indicates that the size is unknown.
       */
      restoreSize?: number;
      /** @description snapshotHandle is the CSI "snapshot_id" of a snapshot on the underlying storage system. If not specified, it indicates that dynamic snapshot creation has either failed or it is still in progress. */
      snapshotHandle?: string;
    };
  };
}
