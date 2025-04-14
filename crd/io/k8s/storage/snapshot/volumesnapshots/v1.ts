import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesVolumeSnapshotV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesVolumeSnapshotV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "snapshot.storage.k8s.io/v1", kind: "VolumeSnapshot", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesVolumeSnapshotV1Config extends ManifestConfig {
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
      /** @description source specifies where a snapshot will be created from. This field is immutable after creation. Required. */
      source: {
        /** @description persistentVolumeClaimName specifies the name of the PersistentVolumeClaim object representing the volume from which a snapshot should be created. This PVC is assumed to be in the same namespace as the VolumeSnapshot object. This field should be set if the snapshot does not exists, and needs to be created. This field is immutable. */
        persistentVolumeClaimName?: string;
        /** @description volumeSnapshotContentName specifies the name of a pre-existing VolumeSnapshotContent object representing an existing volume snapshot. This field should be set if the snapshot already exists and only needs a representation in Kubernetes. This field is immutable. */
        volumeSnapshotContentName?: string;
      } & (unknown | unknown);
      /** @description VolumeSnapshotClassName is the name of the VolumeSnapshotClass requested by the VolumeSnapshot. VolumeSnapshotClassName may be left nil to indicate that the default SnapshotClass should be used. A given cluster may have multiple default Volume SnapshotClasses: one default per CSI Driver. If a VolumeSnapshot does not specify a SnapshotClass, VolumeSnapshotSource will be checked to figure out what the associated CSI Driver is, and the default VolumeSnapshotClass associated with that CSI Driver will be used. If more than one VolumeSnapshotClass exist for a given CSI Driver and more than one have been marked as default, CreateSnapshot will fail and generate an event. Empty string is not allowed for this field. */
      volumeSnapshotClassName?: string;
    };
  };
}
