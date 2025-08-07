import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class SnapshotStorageK8sIoVolumeSnapshotClassV1 extends Manifest {
  constructor(scope: Construct, id: string, config: SnapshotStorageK8sIoVolumeSnapshotClassV1Config) {
    super(scope, id, config);
  }
}
export interface SnapshotStorageK8sIoVolumeSnapshotClassV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "snapshot.storage.k8s.io/v1";
    kind: "VolumeSnapshotClass";
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
    /** @description deletionPolicy determines whether a VolumeSnapshotContent created through the VolumeSnapshotClass should be deleted when its bound VolumeSnapshot is deleted. Supported values are "Retain" and "Delete". "Retain" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. "Delete" means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. Required. */
    deletionPolicy: string;
    /** @description driver is the name of the storage driver that handles this VolumeSnapshotClass. Required. */
    driver: string;
    /** @description parameters is a key-value map with storage driver specific parameters for creating snapshots. These values are opaque to Kubernetes. */
    parameters?: {
      [key: string]: string;
    };
  };
}
